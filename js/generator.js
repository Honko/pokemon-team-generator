/* License: MIT License */
const STATS = ["HP", "Atk", "Def", "SpA", "SpD", "Spe"];
const GENS = ["rby", "gsc", "adv", "dpp", "bw", "xy"];
const METAS = ["uber", "ou", "uu", "ru", "nu", "pu", "lc"];

var setdex = {
    rby: {},
    gsc: {},
    adv: {},
    dpp: {},
    bw: {},
    xy: {},
};

var teamGenerator = angular.module('teamGenerator', ['ui.bootstrap']);
teamGenerator.controller('GeneratorController', function($scope) {

    $scope.validMeta = function(meta) {
        return !!setdex[$scope.gen][meta];
    };

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
        var excludeItems = teamHasMega(true) ? MEGA_ITEMS : [];

        var newTeam = [];
        for (var i = 0; i < 6; i++) {
            if (oldTeam[i] && oldTeam[i].locked) {
                console.log("Old set for " + oldTeam[i].name);
                newTeam[i] = oldTeam[i];
            } else if (oldTeam[i] && oldTeam[i].speciesLocked) {
                var newSet = createRandomSetForSpecies(oldTeam[i].name, excludeItems);
                if (newSet) {
                    newTeam[i] = newSet;
                    newTeam[i].speciesLocked = true;
                } else {
                    excludeSpecies.push(oldTeam[i].name);
                    newTeam[i] = createRandomSet(excludeSpecies, excludeItems);
                }
            } else {
                newTeam[i] = createRandomSet(excludeSpecies, excludeItems);
            }

            if (excludeSpecies.indexOf(newTeam[i].name) === -1) {
                excludeSpecies.push(newTeam[i].name);
            }
            if (excludeItems.length === 0 && MEGA_ITEMS.indexOf(newTeam[i].item) !== -1) {
                console.log("Excluding mega items");
                excludeItems = MEGA_ITEMS;
            }
        }
        $scope.team = newTeam;
    };

    var createRandomSet = function(excludeSpecies, excludeItems) {
        var excludeFormes = expandSpeciesFormes(excludeSpecies);
        console.log("Excluding species: " + excludeFormes);
        console.log("Excluding items: " + excludeItems);
        var species = getRandomElement(speciesInMeta(), excludeFormes);
        var set = createRandomSetForSpecies(species, excludeItems);
        if (set) {
            return set;
        } else {
            excludeSpecies.push(species);
            return createRandomSet(excludeSpecies, excludeItems);
        }
    };

    var createRandomSetForSpecies = function(species, excludeItems, excludeSets) {
        console.log("New set for " + species);
        var possibleSets = setdex[$scope.gen][$scope.meta][species];
        var myExcludeSets = excludeSets || [];
        var set = getRandomElement(possibleSets, myExcludeSets);
        if (set === false) {
            console.log("Could not create new set for " + species + ".");
            // no possible sets left
            return false;
        }
        var item = getRandomElement(set.item, excludeItems);
        if (item === false) {
            // no possible items left on a set that is intended to have an item
            myExcludeSets.push(set);
            return createRandomSetForSpecies(species, excludeItems, myExcludeSets);
        }
        var moves = [];
        for (var i = 0; i < 4 && i < set.moves.length; i++) {
            moves.push(getRandomElement(set.moves[i], moves));
        }
        return {
            name: species,
            item: item,
            ability: getRandomElement(set.ability),
            nature: getRandomElement(set.nature),
            evs: set.evs,
            ivs: set.ivs,
            moves: moves,
        };
    };

    $scope.generateTeam = function() {
        _generateTeam($scope.team);
    };

    $scope.generateNewTeam = function() {
        if (!$scope.validMeta($scope.meta)) {
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

    $scope.gen = "xy";
    $scope.meta = "ou";
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

var getRandomElement = function(obj, exclusions) {
    var keys = Array.isArray(obj) ? obj : Object.keys(obj);
    if (keys.length === 0) {
        // no options to begin with; intended to be blank (e.g. itemless set)
        return "";
    }
    var filteredKeys = !exclusions ? keys : keys.filter(function(element) {
        return exclusions.indexOf(element) === -1;
    });
    return filteredKeys.length > 0 ? filteredKeys[Math.floor(Math.random() * filteredKeys.length)] : false;
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
