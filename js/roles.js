const ROLES = {
    Mega: {
        name: "mega evolution",
        setMatches: function(set) {
            return MEGA_ITEMS.indexOf(set.item) !== -1;
        },
        setCanMatch: function(set) {
            return set.item.some(function(item) {
                return MEGA_ITEMS.indexOf(item) !== -1;
            });
        },
        setCanAvoidMatch: function(set) {
            return set.item.length !== 1 || MEGA_ITEMS.indexOf(set.item[0]) === -1;
        },
    },
    StealthRock: {
        name: "Stealth Rock user",
        setMatches: function(set) {
            return setHasMove(set, "Stealth Rock");
        },
        setCanMatch: function(set) {
            return setCanIncludeMove(set, "Stealth Rock");
        },
        setCanAvoidMatch: function(set) {
            return setCanExcludeMove(set, "Stealth Rock");
        },
    },
    Spikes: {
        name: "Spikes user",
        setMatches: function(set) {
            return setHasMove(set, "Spikes");
        },
        setCanMatch: function(set) {
            return setCanIncludeMove(set, "Spikes");
        },
        setCanAvoidMatch: function(set) {
            return setCanExcludeMove(set, "Spikes");
        },
    },
    ToxicSpikes: {
        name: "Toxic Spikes user",
        setMatches: function(set) {
            return setHasMove(set, "Toxic Spikes");
        },
        setCanMatch: function(set) {
            return setCanIncludeMove(set, "Toxic Spikes");
        },
        setCanAvoidMatch: function(set) {
            return setCanExcludeMove(set, "Toxic Spikes");
        },
    },
    StickyWeb: {
        name: "Sticky Web user",
        setMatches: function(set) {
            return setHasMove(set, "Sticky Web");
        },
        setCanMatch: function(set) {
            return setCanIncludeMove(set, "Sticky Web");
        },
        setCanAvoidMatch: function(set) {
            return setCanExcludeMove(set, "Sticky Web");
        },
    },
    HazardRemover: {
        name: "hazard remover",
        setMatches: function(set) {
            return setHasMove(set, "Rapid Spin") || setHasMove(set, "Defog");
        },
        setCanMatch: function(set) {
            return setCanIncludeMove(set, "Rapid Spin") || setCanIncludeMove(set, "Defog");
        },
        setCanAvoidMatch: function(set) {
            return setCanExcludeMove(set, "Rapid Spin") && setCanExcludeMove(set, "Defog");
        },
    },
    ChoiceScarf: {
        name: "Choice Scarf user",
        setMatches: function(set) {
            return setHasItem(set, "Choice Scarf");
        },
        setCanMatch: function(set) {
            return setCanIncludeItem(set, "Choice Scarf");
        },
        setCanAvoidMatch: function(set) {
            return setCanExcludeItem(set, "Choice Scarf");
        },
    },
    DedicatedLead: {
        name: "dedicated lead",
        setMatches: function(set) {
            return (setHasItem(set, "Focus Sash") && !setHasAbility(set, "Magic Guard")) ||
                    (setHasItem(set, "Custap Berry") && setHasAbility(set, "Sturdy"));
        },
        setCanMatch: function(set) {
            return (setCanIncludeItem(set, "Focus Sash") && setCanExcludeAbility(set, "Magic Guard")) ||
                    (setCanIncludeItem(set, "Custap Berry") && setCanIncludeAbility(set, "Sturdy"));
        },
        setCanAvoidMatch: function(set) {
            return (setCanExcludeItem(set, "Focus Sash") || setCanIncludeAbility(set, "Magic Guard")) &&
                    (setCanExcludeItem(set, "Custap Berry") || setCanExcludeAbility(set, "Sturdy"));
        },
    },
};

var setHasMove = function(set, move) {
    return set.moves.indexOf(move) !== -1;
};
var setHasItem = function(set, item) {
    return set.item === item;
};
var setHasAbility = function(set, ability) {
    return set.ability === ability;
};

var setCanIncludeMove = function(set, move) {
    return set.moves.some(function(moveslot) {
        return moveslot.indexOf(move) !== -1;
    });
};
var setCanIncludeItem = function(set, item) {
    return set.item.indexOf(item) !== -1;
};
var setCanIncludeAbility = function(set, ability) {
    return set.ability.indexOf(ability) !== -1;
};

var setCanExcludeMove = function(set, move) {
    return set.moves.every(function(moveslot) {
        return moveslot.length !== 1 || moveslot.indexOf(move) === -1;
    });
};
var setCanExcludeItem = function(set, item) {
    return set.item.length !== 1 || set.item.indexOf(item) === -1;
};
var setCanExcludeAbility = function(set, ability) {
    return set.ability.length !== 1 || set.ability.indexOf(ability) === -1;
};

var getPossibleSpeciesForRole = function(role, currentDex) {
    return Object.keys(currentDex).filter(function(species) {
        return currentDex[species].some(role.setCanMatch);
    });
};

var getPossibleSpeciesToAvoidRoles = function(roles, currentDex) {
    return Object.keys(currentDex).filter(function(species) {
        return currentDex[species].some(function(set) {
            return roles.every(function(role) {
                return role.setCanAvoidMatch(set);
            });
        });
    });
};

var pickRequiredRole = function(requiredRoles, team) {
    var slotsRemainingCount = 6 - team.filter(function(set) {
        return !!set;
    }).length;
    var rolesRemaining = requiredRoles.filter(function(role) {
        return !team.some(role.setMatches);
    });
    if (slotsRemainingCount > rolesRemaining.length) {
        return null;
    }
    return getRandomElement(rolesRemaining);
};

var getFilledRoles = function(restrictedRoles, team) {
    return restrictedRoles.filter(function(role) {
        return team.some(role.setMatches);
    });
};

var updateRequiredRoles = function(roles, team) {
    return roles.filter(function(role) {
        return !team.some(role.setMatches);
    });
};
