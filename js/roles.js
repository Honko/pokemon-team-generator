const ROLES = {
    StealthRock: {
        name: "Stealth Rock user",
        setMatches: function(set) {
            return setHasMove(set, "Stealth Rock");
        },
        setCanMatch: function(set) {
            return setCanIncludeMove(set, "Stealth Rock");
        },
    },
};

var setHasMove = function(set, move) {
    return set.moves.indexOf(move) !== -1;
};

var setCanIncludeMove = function(set, move) {
    return set.moves.some(function(moveslot) {
        return moveslot.indexOf(move) !== -1;
    });
};

var getPossibleSpeciesForRole = function(role, currentDex) {
    return Object.keys(currentDex).filter(function(species) {
        return currentDex[species].some(role.setCanMatch);
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

var updateRequiredRoles = function(roles, team) {
    return roles.filter(function(role) {
        return !team.some(role.setMatches);
    });
};
