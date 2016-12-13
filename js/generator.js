/* License: MIT License */
const STATS = ["HP", "Atk", "Def", "SpA", "SpD", "Spe"];
const GEN_DISPLAY_NAMES = {
    rby: "RBY",
    gsc: "GSC",
    adv: "ADV",
    dpp: "DPP",
    bw: "B/W",
    xy: "X/Y",
    sm: "S/M",
};
const META_DISPLAY_NAMES = {
    uber: "Uber",
    ou: "OU",
    uu: "UU",
    ru: "RU",
    nu: "NU",
    pu: "PU",
    lc: "LC",
    doubles: "Doubles",
};

var setdex = {
    rby: {},
    gsc: {},
    adv: {},
    dpp: {},
    bw: {},
    xy: {},
    sm: {},
};

var teamGenerator = angular.module('teamGenerator', ['ui.bootstrap', 'nya.bootstrap.select']);
teamGenerator.controller('GeneratorController', function($scope) {

    $scope.availablePokemon = function() {
        return speciesInMeta().filter(function(species) { return formesInTeam().indexOf(species) === -1; });
    };

    $scope.availableItems = function() {
        return Object.keys(itemdex).filter(function(item) {
            return itemdex[item].gens.indexOf($scope.gen) !== -1 && (!teamHasMega(true) || MEGA_ITEMS.indexOf(item) === -1);
        });
    };

    var speciesInMeta = function() {
        return Object.keys(setdex[$scope.gen][$scope.meta]);
    };

    var speciesInTeam = function(lockedOnly) {
        if (!$scope.team) {
            return [];
        }
        return $scope.team
                .filter(function(pokemon) { return pokemon.locked || pokemon.speciesLocked || !lockedOnly; })
                .map(function(pokemon) { return pokemon.name; });
    };

    var formesInTeam = function(lockedOnly) {
        return expandSpeciesFormes(speciesInTeam(lockedOnly));
    };

    var teamHasMega = function(lockedOnly) {
        if (!$scope.team) {
            return false;
        }
        return $scope.team
                .filter(function(pokemon) { return (pokemon.locked || !lockedOnly) && MEGA_ITEMS.indexOf(pokemon.item) !== -1; })
                .length > 0;
    };

    $scope.spriteName = function(pokemon) {
        if (!pokedex[pokemon.name]) {
            return "unown-question";
        }
        var spriteName = pokedex[pokemon.name].spriteName;
        if (itemdex[pokemon.item] && itemdex[pokemon.item].altTrigger && itemdex[pokemon.item].altTrigger[pokemon.name]) {
            return spriteName + pokedex[pokemon.name].alts[itemdex[pokemon.item].altTrigger[pokemon.name]].spriteNameSuffix;
        }
        return spriteName;
    };

    $scope.toggleLock = function(pokemon) {
        if (pokemon.locked) {
            pokemon.locked = false;
        } else if (pokemon.speciesLocked) {
            pokemon.locked = true;
            pokemon.speciesLocked = false;
        } else {
            pokemon.speciesLocked = true;
        }
    };

    var _generateTeam = function(oldTeam) {
        var excludeSpecies = speciesInTeam(true);
        var requiredRoles = [];
        if (["dpp","bw","xy","sm"].indexOf($scope.gen) !== -1 && ["doubles"].indexOf($scope.meta) === -1) {
            requiredRoles.push(ROLES.StealthRock);
        }
        var restrictedRoles = [
            ROLES.Mega,
            ROLES.StealthRock,
            ROLES.Spikes,
            ROLES.ToxicSpikes,
            ROLES.StickyWeb,
            ROLES.HazardRemover,
            ROLES.ChoiceScarf,
            ROLES.DedicatedLead,
        ];
        var unwantedRoles = [
            ROLES.SunSupporter,
            ROLES.RainSupporter,
        ];

        var newTeam = [];
        // do fully locked mons first to count any roles they fill
        for (var i = 0; i < 6; i++) {
            if (oldTeam[i] && oldTeam[i].name && oldTeam[i].locked) {
                newTeam[i] = oldTeam[i];
            }
        }
        // do species-locked mons next to give them priority on restricted roles if needed (e.g. lock a mega-only mon)
        for (i = 0; i < 6; i++) {
            if (oldTeam[i] && oldTeam[i].name && oldTeam[i].speciesLocked) {
                var requiredRole = pickRequiredRole(requiredRoles, newTeam);
                var filledRoles = getFilledRoles(restrictedRoles, newTeam).concat(unwantedRoles);
                var newSet = createRandomSetForSpecies(oldTeam[i].name, filledRoles, requiredRole);
                if (newSet) {
                    newTeam[i] = newSet;
                    newTeam[i].speciesLocked = true;
                } else {
                    excludeSpecies.push(oldTeam[i].name);
                    newTeam[i] = createRandomSet(excludeSpecies, filledRoles, requiredRole);
                }
            }
        }
        // do new mons last
        for (i = 0; i < 6; i++) {
            if (!newTeam[i]) {
                newTeam[i] = createRandomSet(excludeSpecies, getFilledRoles(restrictedRoles, newTeam).concat(unwantedRoles), pickRequiredRole(requiredRoles, newTeam));
                if (excludeSpecies.indexOf(newTeam[i].name) === -1) {
                    excludeSpecies.push(newTeam[i].name);
                }
            }
        }

        // if the first spot is not locked, move the most lead-like non-locked mon to that spot
        if (!newTeam[0].locked && !newTeam[0].speciesLocked) {
            for (i = 1; i < 6; i++) {
                if (!newTeam[i].locked && !newTeam[i].speciesLocked && ROLES.DedicatedLead.setMatches(newTeam[i])) {
                    var lead = newTeam[i];
                    console.log("Moving " + lead.name + " to lead spot");
                    newTeam[i] = newTeam[0];
                    newTeam[0] = lead;
                }
            }
        }

        $scope.team = newTeam;
    };

    var createRandomSet = function(excludeSpecies, filledRoles, requiredRole) {
        var excludeFormes = expandSpeciesFormes(excludeSpecies);
        var roleFillers = requiredRole ? getPossibleSpeciesForRole(requiredRole, setdex[$scope.gen][$scope.meta]) : null;
        var filledRoleAvoiders = getPossibleSpeciesToAvoidRoles(filledRoles, setdex[$scope.gen][$scope.meta]);
        var possibleSpecies = speciesInMeta().filter(function(species) {
            return excludeFormes.indexOf(species) === -1 &&
                    (!requiredRole || roleFillers.indexOf(species) !== -1) &&
                    filledRoleAvoiders.indexOf(species) !== -1;
        });
        if (requiredRole) {
            if (possibleSpecies.length === 0) {
                console.log("No possible species to fill required role (" + requiredRole.name + "), retrying without role.");
                return createRandomSet(excludeSpecies, filledRoles);
            }
            console.log("Possible species for " + requiredRole.name + ": " + possibleSpecies);
        }
        var species = getRandomElement(weightByViability(possibleSpecies));
        var set = createRandomSetForSpecies(species, filledRoles, requiredRole);
        if (set) {
            return set;
        } else {
            excludeSpecies.push(species);
            return createRandomSet(excludeSpecies, filledRoles, requiredRole);
        }
    };

    var weightByViability = function(species) {
        var rankings = VIABILITY_RANKINGS[$scope.gen][$scope.meta];
        if ($scope.viability === "=" || !rankings || !rankings.A) {
            return species;
        }

        var weightedSpecies = [];
        for (var i = 0; i < species.length; i++) {
            var weight = VIABILITY_WEIGHTS[$scope.viability][getViabilityRanking(species[i], rankings)];
            for (var j = 0; j < weight; j++) {
                weightedSpecies.push(species[i]);
            }
        }
        return weightedSpecies;
    };

    var getViabilityRanking = function(species, rankings) {
        var ranks = ["S","A","B","C"];
        for (var i = 0; i < ranks.length; i++) {
            if (rankings[ranks[i]] && rankings[ranks[i]].indexOf(species) !== -1) {
                return ranks[i];
            }
        }
        return "D";
    };

    var createRandomSetForSpecies = function(species, filledRoles, requiredRole, excludeSets) {
        console.log("Building set for: " + species);
        var possibleSets = setdex[$scope.gen][$scope.meta][species];
        if (excludeSets) {
            possibleSets = possibleSets.filter(function(set) {
                return excludeSets.indexOf(set) === -1;
            });
        }
        if (requiredRole) {
            console.log("Required role: " + requiredRole.name);
            possibleSets = possibleSets.filter(requiredRole.setCanMatch);
        }
        filledRoles.forEach(function(role) {
            possibleSets = possibleSets.filter(role.setCanAvoidMatch);
        });
        if (possibleSets.length === 0) {
            console.log("No sets found that can be used on this team. Giving up.");
            return false;
        }
        var set = getRandomElement(possibleSets);
        var moves = [];
        for (var i = 0; i < 4 && i < set.moves.length; i++) {
            moves.push(getRandomElement(set.moves[i].filter(function(move) { return moves.indexOf(move) === -1; })));
        }
        var finalSet = {
            name: species,
            item: getRandomElement(set.item),
            ability: getRandomElement(set.ability),
            nature: getRandomElement(set.nature),
            evs: set.evs,
            ivs: set.ivs,
            moves: moves,
        };
        if (requiredRole && !requiredRole.setMatches(finalSet)) {
            console.log("Generated set did not meet required role (" + requiredRole.name + "), retrying.");
            return createRandomSetForSpecies(species, filledRoles, requiredRole, excludeSets);
        }
        if (filledRoles.some(function(role) { return role.setMatches(finalSet); })) {
            console.log("Generated set filled an already filled role, retrying.");
            return createRandomSetForSpecies(species, filledRoles, requiredRole, excludeSets);
        }
        return finalSet;
    };

    $scope.generateTeam = function() {
        _generateTeam($scope.team);
    };

    $scope.updateGen = function() {
        $scope.validMetas = getValidMetas();
        $scope.generateNewTeam();
    };

    $scope.generateNewTeam = function() {
        if ($scope.validMetas.indexOf($scope.meta) === -1) {
            $scope.meta = "ou";
        }
        _generateTeam([]);
    };

    $scope.exportTeam = function() {
        var exportText = "";
        for (var i = 0; i < 6; i++) {
            exportText += exportSet($scope.team[i], $scope.meta);
        }
        $scope.teamExportReadOnly = false;
        $scope.teamExport = exportText.trim();
        $scope.teamExportReadOnly = true;
    };

    $scope.validGens = Object.keys(GEN_DISPLAY_NAMES);
    $scope.genDisplayName = function(gen) {
        return GEN_DISPLAY_NAMES[gen];
    };
    $scope.gen = "sm";

    var getValidMetas = function() {
        return Object.keys(META_DISPLAY_NAMES).filter(function(meta) {
            return Object.keys(setdex[$scope.gen]).indexOf(meta) !== -1;
        });
    };
    $scope.validMetas = getValidMetas();
    $scope.metaDisplayName = function(meta) {
        return META_DISPLAY_NAMES[meta];
    };
    $scope.meta = "ou";

    $scope.viability = "+";
    $scope.generateNewTeam();

    $scope.teamExport = "";
    $scope.teamExportReadOnly = true;
    $scope.teamExportLength = 1;
});

var expandSpeciesFormes = function(pokemonNames) {
    var formes = [];
    for (var i = 0; i < pokemonNames.length; i++) {
        if (pokemonNames[i]) {
            var myFormes = pokedex[pokemonNames[i]].formes;
            if (myFormes) {
                formes = formes.concat(myFormes);
            } else {
                formes.push(pokemonNames[i]);
            }
        }
    }
    return formes;
};

var getRandomElement = function(obj) {
    var keys = Array.isArray(obj) ? obj : Object.keys(obj);
    if (keys.length === 0) {
        // no options to begin with; intended to be blank (e.g. itemless set)
        return "";
    }
    return keys[Math.floor(Math.random() * keys.length)];
};

var exportSet = function(set, meta) {
    var exportText = set.name;
    if (set.item) {
        exportText += " @ " + set.item;
    }
    exportText += "\n";
    if (meta === "lc") {
        exportText += "Level: 5\n";
    }
    if (set.ability) {
        exportText += "Ability: " + set.ability + "\n";
    }
    if (set.evs) {
        exportText += "EVs: " + exportStats(set.evs) + "\n";
    }
    if (set.nature) {
        exportText += set.nature + " Nature\n";
    }
    if (set.ivs) {
        exportText += "IVs: " + exportStats(set.ivs) + "\n";
    }
    for (var i = 0; i < 4 && i < set.moves.length; i++) {
        exportText += "- " + set.moves[i] + "\n";
    }
    return exportText + "\n";
};

var exportStats = function(evs) {
    var exportText = "";
    for (var i = 0; i < STATS.length; i++) {
        var stat = STATS[i];
        var statEVs = evs[stat.toLowerCase()];
        if (statEVs || statEVs === 0) {
            if (exportText) {
                exportText += " / ";
            }
            exportText += statEVs + " " + stat;
        }
    }
    return exportText;
};

// bad browser support
if (!String.prototype.startsWith) {
    String.prototype.startsWith = function(searchString, position) {
        position = position || 0;
        return this.substr(position, searchString.length) === searchString;
    };
}
