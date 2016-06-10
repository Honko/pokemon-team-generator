const VIABILITY_WEIGHTS = {
    "++": {
        S: 30,
        A: 5,
        B: 1,
        C: 0,
        D: 0,
    },
    "+": {
        S: 25,
        A: 10,
        B: 4,
        C: 1,
        D: 0,
    },
    "-": {
        S: 0,
        A: 0,
        B: 1,
        C: 2,
        D: 4,
    },
};

const VIABILITY_RANKINGS = {
    xy: {
        uber: {
            // http://www.smogon.com/forums/threads/oras-ubers-viability-ranking-thread-last-updated-post-918.3535106/
            S: ["Groudon","Salamence","Xerneas","Arceus","Ho-Oh","Darkrai"],
            A: ["Gengar","Arceus-Water","Giratina-Origin","Klefki","Latios","Lugia","Sableye","Deoxys-Speed","Arceus-Ground","Diancie","Arceus-Ghost","Kyogre","Rayquaza","Deoxys-Attack","Arceus-Dragon","Yveltal","Mewtwo"],
            B: ["Latias","Dialga","Arceus-Rock","Tyranitar","Excadrill","Landorus-Therian","Skarmory","Shaymin-Sky","Kangaskhan","Bronzong","Jirachi","Ferrothorn","Zekrom","Wobbuffet","Lucario","Aegislash","Blissey","Cloyster","Scolipede","Arceus-Dark","Slowbro","Arceus-Ice","Arceus-Fairy","Greninja","Blaziken"],
            C: ["Alomomola","Cresselia","Scizor","Flygon","Tentacruel","Aerodactyl","Gothitelle","Giratina","Smeargle","Palkia","Kyurem-White","Arceus-Grass","Gyarados","Arceus-Electric","Arceus-Fighting","Arceus-Poison","Ditto","Landorus","Mawile","Arceus-Steel"],
        },
        ou: {
            // http://www.smogon.com/forums/threads/oras-ou-viability-ranking-thread-v5.3571990/
            S: ["Clefable"],
            A: ["Diancie","Keldeo","Landorus-Therian","Latios","Rotom-Wash","Scizor","Tornadus-Therian","Tyranitar","Azumarill","Charizard","Excadrill","Ferrothorn","Garchomp","Heatran","Lopunny","Manaphy","Medicham","Sableye","Slowbro","Talonflame","Volcanion","Weavile","Alakazam","Bisharp","Gardevoir","Gliscor","Gyarados","Heracross","Jirachi","Latias","Metagross","Pinsir","Serperior","Skarmory","Terrakion","Thundurus","Venusaur"],
            B: ["Aerodactyl","Altaria","Amoonguss","Chansey","Gengar","Kyurem-Black","Magnezone","Manectric","Mew","Nidoking","Starmie","Suicune","Tangrowth","Breloom","Dragonite","Gastrodon","Hippowdon","Kingdra","Klefki","Politoed","Quagsire","Raikou","Reuniclus","Slowking","Togekiss","Volcarona","Alomomola","Celebi","Crawdaunt","Diggersby","Dragalge","Hydreigon","Kabutops","Mamoswine","Swampert"],
            C: ["Empoleon","Gallade","Hawlucha","Infernape","Lucario","Mandibuzz","Omastar","Sceptile","Scolipede","Sharpedo","Thundurus-Therian","Victini","Zapdos","Zygarde","Azelf","Entei","Feraligatr","Jellicent","Pidgeot","Seismitoad","Tentacruel","Toxicroak","Aggron","Beedrill","Blastoise","Chesnaught","Cobalion","Cofagrigus","Conkeldurr","Goodra","Hoopa","Magneton","Rotom-Heat","Staraptor"],
        },
        uu: {
            // http://www.smogon.com/forums/threads/oras-uu-viability-rankings-v4.3555277/
            S: ["Hydreigon","Aerodactyl","Salamence","Suicune"],
            A: ["Entei","Swampert","Alakazam","Cobalion","Mamoswine","Krookodile","Gyarados","Celebi","Florges","Sceptile","Beedrill","Sharpedo","Sableye","Whimsicott","Reuniclus","Blastoise","Nidoqueen","Infernape","Feraligatr","Empoleon","Sylveon","Toxicroak","Heracross","Snorlax","Cresselia"],
            B: ["Tentacruel","Crobat","Mienshao","Alomomola","Kyurem","Tornadus","Escavalier","Lucario","Crawdaunt","Houndoom","Slowking","Gardevoir","Roserade","Chandelure","Azelf","Rotom-Mow","Conkeldurr","Nidoking","Milotic","Froslass","Porygon2","Absol","Abomasnow","Arcanine","Aggron","Ampharos","Bronzong","Chesnaught","Diancie","Doublade","Dragalge","Forretress","Gligar","Heliolisk","Jellicent","Machamp","Mandibuzz","Metagross","Porygon-Z","Rotom-Heat","Shaymin","Slurpuff","Tyrantrum","Umbreon","Venomoth","Aromatisse","Blissey","Cloyster","Darmanitan","Espeon","Galvantula","Hoopa","Qwilfish","Shuckle","Steelix","Tangrowth","Virizion"],
            C: ["Donphan","Dugtrio","Fletchinder","Haxorus","Honchkrow","Kingdra","Magneton","Meloetta","Seismitoad","Weezing","Uxie","Yanmega","Zoroark","Gastrodon","Goodra","Moltres","Noivern","Omastar","Pangoro","Rhyperior","Togetic","Accelgor","Druddigon","Exploud","Glalie","Granbull","Hitmonlee","Jolteon","Shedinja","Venusaur"],
        },
        ru: {
            // http://www.smogon.com/forums/threads/ru-viability-rankings-thread.3558546/
            S: ["Flygon","Venusaur","Virizion"],
            A: ["Alomomola","Diancie","Medicham","Meloetta","Sigilyph","Slowking","Sneasel","Blastoise","Drapion","Dugtrio","Emboar","Glalie","Fletchinder","Magneton","Registeel","Rhyperior","Aerodactyl","Camerupt","Delphox","Escavalier","Hitmonlee","Hoopa","Jellicent","Sawk","Spiritomb","Tangrowth"],
            B: ["Abomasnow","Absol","Audino","Braviary","Exploud","Gallade","Houndoom","Jolteon","Rotom-Mow","Seismitoad","Steelix","Uxie","Aggron","Aromatisse","Banette","Bronzong","Garbodor","Granbull","Gurdurr","Malamar","Mesprit","Qwilfish","Rotom","Vivillon","Weezing","Accelgor","Druddigon","Manectric","Mawile","Musharna","Piloswine","Poliwrath","Pelipper","Roselia","Samurott","Scrafty","Scyther","Togetic"],
            C: ["Clawitzer","Eelektross","Golbat","Gourgeist-Super","Hitmontop","Jynx","Omastar","Sceptile","Skuntank","Smeargle","Archeops","Articuno","Ferroseed","Hariyama","Kabutops","Klinklang","Liepard","Ludicolo","Shiftry","Xatu","Aurorus","Barbaracle","Cofagrigus","Combusken","Gastrodon","Lanturn","Lilligant","Linoone","Rotom-Fan","Rotom-Frost","Trevenant"],
        },
        nu: {
            // http://www.smogon.com/forums/threads/oras-nu-viability-rankings.3555650/
            S: ["Tauros"],
            A: ["Garbodor","Jynx","Kangaskhan","Magmortar","Mesprit","Musharna","Pyroar","Rhydon","Rotom","Samurott","Shiftry","Steelix","Swellow","Archeops","Audino","Barbaracle","Charizard","Combusken","Floatzel","Lanturn","Lilligant","Ludicolo","Scyther","Vivillon","Weezing","Xatu","Abomasnow","Aurorus","Hariyama","Hitmonchan","Kabutops","Malamar","Mismagius","Omastar","Skuntank"],
            B: ["Aggron","Ferroseed","Gastrodon","Gourgeist-Super","Haunter","Piloswine","Pinsir","Primeape","Rotom-Fan","Vileplume","Carracosta","Claydol","Grumpig","Liepard","Manectric","Mantine","Miltank","Pelipper","Poliwrath","Smeargle","Sliggoo","Torterra","Articuno","Cacturne","Camerupt","Chatot","Electivire","Golurk","Gourgeist-Small","Misdreavus","Mr. Mime","Ninetales","Prinplup","Regirock","Roselia","Zangoose"],
            C: ["Bouffalant","Clefairy","Cradily","Exeggutor","Kecleon","Klinklang","Lapras","Mawile","Raichu","Tangela","Throh","Sawsbuck","Victreebel","Altaria","Beheeyem","Drifblim","Duosion","Gogoat","Gorebyss","Jumpluff","Kadabra","Leafeon","Linoone","Marowak","Muk","Rampardos","Regice","Relicanth","Vanilluxe","Cryogonal","Dodrio","Electrode","Fraxure","Frogadier","Golem","Metang","Ninjask","Pawniard","Rotom-Frost","Sandslash","Shedinja","Vigoroth","Volbeat","Vullaby"],
        },
        pu: {
            // http://www.smogon.com/forums/threads/pu-viability-rankings.3528743/
            S: ["Floatzel","Machoke"],
            A: ["Rotom-Frost","Leafeon","Monferno","Golem","Mr. Mime","Grumpig","Stoutland","Roselia","Stunfisk","Zebstrika","Pawniard","Dodrio","Regice","Vullaby","Chatot","Relicanth","Mawile","Jumpluff","Simipour","Gourgeist-Super","Simisage","Arbok","Metang","Electrode","Audino","Kadabra","Politoed","Articuno","Swanna","Crustle","Cryogonal","Bouffalant","Raichu","Clefairy","Dusknoir","Quilladin","Tangela","Probopass","Ursaring"],
            B: ["Ninjask","Murkrow","Misdreavus","Rapidash","Altaria","Gabite","Duosion","Huntail","Simisear","Fraxure","Ninetales","Camerupt","Gogoat","Basculin","Beheeyem","Drifblim","Golduck","Gorebyss","Gourgeist-Small","Hippopotas","Lapras","Leavanny","Lumineon","Mightyena","Prinplup","Purugly","Solrock","Armaldo","Electabuzz","Kingler","Klang","Sawsbuck","Seaking","Vibrava","Volbeat"],
            C: ["Avalugg","Beartic","Chinchou","Krokorok","Marowak","Meowstic-M","Rampardos","Regigigas","Trapinch","Venipede","Zweilous","Butterfree","Carbink","Dusclops","Glalie","Luxray","Munchlax","Weepinbell","Ampharos","Banette","Furfrou","Glaceon","Hypno","Lickilicky","Lopunny","Shedinja","Swoobat","Swalot","Torkoal","Vanilluxe","Wartortle","Wigglytuff"],
        },
        lc: {
            // http://www.smogon.com/forums/threads/lc-viability-rankings-2-0.3547566/
            S: ["Diglett","Mienfoo","Pawniard","Porygon"],
            A: ["Abra","Drifloon","Fletchling","Gastly","Magnemite","Timburr","Archen","Chinchou","Drilbur","Foongus","Ponyta","Snivy","Snubbull","Spritzee","Vullaby","Carvanha","Corphish","Ferroseed","Gothita","Omanyte","Shellder","Skrelp","Staryu","Vulpix"],
            B: ["Bellsprout","Bunnelby","Cottonee","Croagunk","Dwebble","Hippopotas","Houndour","Larvesta","Munchlax","Pumpkaboo-Super","Scraggy","Tirtouga","Zigzagoon","Aipom","Cranidos","Doduo","Elekid","Onix","Pancham","Riolu","Stunky","Surskit","Taillow","Torchic","Amaura","Chespin","Deerling","Honedge","Lickitung","Pumpkaboo-Small","Shellos","Slowpoke","Tentacool"],
            C: ["Aron","Anorith","Axew","Buneary","Darumaka","Frillish","Inkay","Koffing","Lileep","Magby","Numel","Sandile","Sandshrew","Snover","Trubbish","Tyrunt","Wynaut","Bulbasaur","Clamperl","Dratini","Geodude","Kabuto","Mantyke","Meowth","Natu","Purrloin","Spinarak","Teddiursa","Venipede","Budew","Cubone","Goldeen","Karrablast","Larvitar","Machop","Mankey","Nosepass","Remoraid","Rufflet","Shelmet","Togepi","Wingull","Wooper","Zorua"],
        },
    },
    bw: {
        uber: {
            // http://www.smogon.com/forums/threads/ubers-bw2-viability-rankings.3550881/
            S: ["Arceus-Ghost","Genesect","Kyogre"],
            A: ["Arceus","Darkrai","Dialga","Giratina-Origin","Groudon","Latias","Latios","Arceus-Fighting","Deoxys-Attack","Deoxys-Speed","Ferrothorn","Ho-Oh","Mewtwo","Palkia","Rayquaza","Skarmory","Arceus-Grass","Arceus-Ground","Arceus-Steel","Excadrill","Kabutops","Omastar","Tyranitar"],
            B: ["Arceus-Rock","Forretress","Gliscor","Heatran","Jirachi","Landorus-Therian","Terrakion","Zekrom","Arceus-Dark","Arceus-Water","Blaziken","Cloyster","Giratina","Hippowdon","Kingdra","Kyurem-White","Shaymin-Sky","Tentacruel","Tornadus-Therian","Arceus-Electric","Arceus-Psychic","Chansey","Deoxys-Defense","Froslass","Garchomp","Lugia","Tornadus"],
            C: ["Abomasnow","Arceus-Dragon","Espeon","Blissey","Gastrodon","Sableye","Salamence","Scizor","Shiftry","Thundurus","Victini","Wobbuffet","Xatu","Arceus-Flying","Arceus-Poison","Cresselia","Kyurem-Black","Landorus","Ludicolo","Magnezone","Mamoswine","Reshiram","Arceus-Fire","Arceus-Ice","Gorebyss","Heracross","Jynx","Keldeo","Manaphy","Qwilfish","Smeargle"],
        },
        ou: {
            // http://www.smogon.com/forums/threads/bw-ou-viability-ranking.3551993/
            S: ["Garchomp","Keldeo","Tyranitar"],
            A: ["Jirachi","Alakazam","Landorus-Therian","Breloom","Politoed","Latios","Ferrothorn","Skarmory","Starmie","Scizor","Reuniclus","Heatran","Volcarona","Hydreigon","Kyurem-Black","Terrakion","Jellicent","Gliscor","Latias","Dragonite","Gyarados","Mamoswine","Thundurus-Therian","Tornadus","Rotom-Wash","Gastrodon","Tentacruel","Amoonguss","Mew","Hippowdon","Gengar","Celebi"],
            B: ["Slowking","Magnezone","Excadrill","Gothitelle","Kyurem","Lucario","Toxicroak","Salamence","Abomasnow","Sableye","Forretress","Moltres","Sharpedo","Victini","Kingdra","Mienshao","Weavile","Froslass","Metagross","Dugtrio","Chansey","Feraligatr","Quagsire","Slowbro","Roserade","Virizion","Conkeldurr","Xatu","Cobalion"],
            C: ["Azumarill","Aerodactyl","Azelf","Jolteon","Haxorus","Heracross","Infernape","Cresselia","Espeon","Ninetales","Chandelure","Wobbuffet","Darmanitan","Empoleon","Shaymin","Cloyster","Nidoqueen"],
        },
        uu: {
            // http://www.smogon.com/forums/threads/the-uu-viability-ranking-thread.3474024/
            S: ["Kingdra","Shaymin","Snorlax","Togekiss","Zapdos"],
            A: ["Cofagrigus","Crobat","Darmanitan","Flygon","Heracross","Mew","Mienshao","Nidoqueen","Qwilfish","Raikou","Rhyperior","Roserade","Sharpedo","Slowbro","Slowking","Swampert","Umbreon","Venomoth","Victini","Weavile"],
            B: ["Ambipom","Amoonguss","Arcanine","Azelf","Azumarill","Blastoise","Bronzong","Cincinno","Cresselia","Cobalion","Druddigon","Empoleon","Honchkrow","Machamp","Meloetta","Nidoking","Porygon2","Porygon-Z","Rotom-Heat","Sableye","Scolipede","Scrafty","Smeargle","Suicune","Tornadus","Virizion","Xatu","Yanmega"],
            C: ["Abomasnow","Accelgor","Bisharp","Clefable","Crustle","Cryogonal","Durant","Escavalier","Ferroseed","Gligar","Golurk","Hitmontop","Houndoom","Kabutops","Krookodile","Lilligant","Magneton","Milotic","Mismagius","Omastar","Registeel","Rotom-Mow","Sceptile","Tangrowth","Uxie","Zoroark"],
        },
        ru: {
            // http://www.smogon.com/forums/threads/the-ru-viability-ranking-thread.3473124/
            S: ["Druddigon","Slowking","Moltres","Sceptile","Escavalier","Kabutops","Uxie"],
            A: ["Alomomola","Durant","Emboar","Entei","Gallade","Magneton","Qwilfish","Rhydon","Rotom-Mow","Smeargle","Sigilyph","Absol","Golurk","Lilligant","Mesprit","Spiritomb","Steelix","Tangrowth","Tauros","Accelgor","Aggron","Omastar","Rotom"],
            B: ["Amoonguss","Braviary","Cinccino","Galvantula","Hitmonlee","Jynx","Poliwrath","Roselia","Samurott","Zangoose","Aerodactyl","Bouffalant","Clefable","Crustle","Cryogonal","Exeggutor","Ferroseed","Fraxure","Kangaskhan","Lanturn","Ludicolo","Magmortar","Manectric","Medicham","Miltank","Musharna","Sawsbuck","Swellow","Torterra","Typhlosion","Carracosta","Drifblim","Feraligatr","Hariyama","Haunter","Klinklang","Misdreavus","Piloswine","Regirock","Scolipede","Seismitoad"],
            C: ["Altaria","Archeops","Cacturne","Charizard","Crawdaunt","Dragonair","Duosion","Eelektross","Gardevoir","Gurdurr","Hitmonchan","Mandibuzz","Pinsir","Primeape","Scyther","Shiftry","Zweilous","Drapion","Electivire","Garbodor","Kadabra","Quagsire","Rotom-Fan","Swanna","Victreebel","Arbok","Basculin","Butterfree","Camerupt","Gabite","Lickilicky","Liepard","Murkrow","Relicanth","Rotom-Frost","Sandslash","Scraggy","Vigoroth","Volbeat","Weezing","Whimsicott"],
        },
        nu: {
            // http://www.smogon.com/forums/threads/nu-viability-rankings-2-0.3484121/
            S: ["Charizard","Kangaskhan","Mandibuzz","Samurott"],
            A: ["Alomomola","Carracosta","Garbodor","Golurk","Ludicolo","Misdreavus","Primeape","Sawk","Seismitoad","Braviary","Eelektross","Golem","Gurdurr","Gardevoir","Musharna","Serperior","Swellow","Tauros","Zangoose","Drifblim","Exeggutor","Haunter","Piloswine","Regirock","Roselia","Skuntank"],
            B: ["Audino","Duosion","Electabuzz","Gorebyss","Gothorita","Liepard","Metang","Miltank","Pinsir","Probopass","Rotom-Fan","Rotom-Frost","Tangela","Weezing","Beheeyem","Camerupt","Combusken","Golbat","Kadabra","Klang","Muk","Regice","Sawsbuck","Shiftry","Swanna","Torkoal","Zweilous","Bastiodon","Floatzel","Fraxure","Lickilicky","Mantine","Simipour","Simisage","Throh","Torterra","Ursaring","Wartortle"],
            C: ["Altaria","Arbok","Articuno","Basculin","Cacturne","Dragonair","Grumpig","Linoone","Munchlax","Murkrow","Ninjask","Pelipper","Simisear","Scraggy","Victreebel","Vileplume","Volbeat","Zebstrika","Ampharos","Armaldo","Butterfree","Cradily","Electrode","Flareon","Frillish","Jumpluff","Lapras","Luxray","Marowak","Meganium","Rampardos","Rapidash","Riolu","Sneasel","Swoobat","Vigoroth","Gigalith","Glaceon","Golduck","Hypno","Illumise","Kingler","Lairon","Lampent","Leafeon","Magmar","Masquerain","Mawile","Raichu","Relicanth","Shelgon","Stunfisk"],
        },
        lc: {
            // http://www.smogon.com/forums/threads/little-cup-viability-rankings-mark-ii.3485860/
            S: ["Drilbur","Mienfoo","Misdreavus","Murkrow","Porygon","Snover"],
            A: ["Abra","Chinchou","Clamperl","Foongus","Hippopotas","Lileep","Magnemite","Riolu","Scraggy","Staryu","Timburr","Tirtouga"],
            B: ["Croagunk","Drifloon","Dwebble","Ferroseed","Frillish","Larvesta","Omanyte","Slowpoke","Archen","Bronzor","Cottonee","Houndour","Lickitung","Natu","Pawniard","Ponyta","Sandshrew","Shellder","Tentacool","Vullaby","Wynaut","Axew","Diglett","Dratini","Gastly","Goldeen","Grimer","Koffing","Magby","Munchlax","Shelmet","Shroomish","Taillow","Zigzagoon"],
            C: ["Anorith","Aipom","Cranidos","Doduo","Exeggcute","Golett","Machop","Stunky","Teddiursa","Turtwig","Aron","Buizel","Darumaka","Deino","Elekid","Mantyke","Meowth","Smoochum","Cacnea","Mankey","Minccino","Nosepass","Purrloin","Sandile","Shellos","Totodile","Woobat","Zorua"],
        },
    },
    dpp: {
        uber: {
            // http://www.smogon.com/forums/threads/dpp-ubers-viability-ranking-thread-non-farceus.3505128/
            S: ["Darkrai","Dialga","Giratina-Origin","Kyogre","Palkia"],
            A: ["Deoxys-Speed","Groudon","Jirachi","Latias","Mewtwo","Rayquaza","Blissey","Forretress","Garchomp","Heatran","Latios","Scizor","Wobbuffet","Deoxys-Attack","Shaymin-Sky","Tyranitar"],
            B: ["Ho-Oh","Lugia","Skarmory","Manaphy","Bronzong","Kingdra","Lucario","Mew","Deoxys","Giratina","Ludicolo","Metagross"],
            C: ["Cloyster","Froslass","Heracross","Kabutops","Qwilfish","Salamence","Shiftry","Tentacruel","Abomasnow","Celebi","Cresselia","Deoxys-Defense","Gengar","Jumpluff","Mamoswine","Omastar","Azelf","Gyarados","Quagsire","Uxie"],
        },
        ou: {
            // http://www.smogon.com/forums/threads/dpp-ou-viability-rankings-iii.3551992/
            S: ["Jirachi","Heatran","Tyranitar","Starmie"],
            A: ["Zapdos","Rotom-Wash","Dragonite","Skarmory","Breloom","Scizor","Infernape","Gengar","Lucario","Hippowdon","Swampert","Gyarados","Flygon","Metagross","Shaymin","Azelf","Blissey","Suicune","Gliscor","Aerodactyl","Machamp","Empoleon","Kingdra","Roserade","Nidoqueen","Forretress","Celebi"],
            B: ["Bronzong","Clefable","Magnezone","Mamoswine","Abomasnow","Jolteon","Crobat","Dugtrio","Quagsire","Venusaur","Raikou","Milotic","Vaporeon","Weavile","Togekiss","Gastrodon","Cradily","Snorlax","Tentacruel","Spiritomb","Heracross","Gallade"],
            C: ["Rhyperior","Cresselia","Uxie","Steelix","Donphan","Hitmontop","Slowbro","Slowking","Staraptor","Moltres","Mesprit","Feraligatr","Toxicroak","Yanmega","Sceptile","Hariyama","Smeargle","Qwilfish","Kabutops","Medicham","Lanturn","Registeel","Ludicolo","Magneton","Walrein","Aggron","Azumarill","Mismagius","Drapion","Skuntank","Cloyster","Alakazam","Honchkrow","Magmortar"],
        },
        uu: {
            // http://www.smogon.com/forums/threads/dpp-uu-viability-ranking.3503638/
            S: ["Milotic","Venusaur","Mismagius","Arcanine","Moltres","Registeel"],
            A: ["Dugtrio","Hitmontop","Kabutops","Omastar","Qwilfish","Spiritomb","Blaziken","Donphan","Leafeon","Rhyperior","Rotom","Uxie","Alakazam","Azumarill","Clefable","Cloyster","Houndoom","Mesprit","Sceptile","Scyther","Steelix","Swellow","Tauros","Torterra","Toxicroak"],
            B: ["Absol","Aggron","Blastoise","Chansey","Hariyama","Hippopotas","Kangaskhan","Lanturn","Slowbro","Snover","Weezing","Ambipom","Exeggutor","Feraligatr","Ludicolo","Manectric","Miltank","Nidoking","Tangrowth","Altaria","Entei","Espeon","Drapion","Electrode","Gardevoir","Gorebyss","Hitmonlee","Jynx","Magmortar","Primeape","Regirock","Skuntank","Slowking"],
            C: ["Claydol","Cradily","Charizard","Dusclops","Gastrodon","Lickilicky","Medicham","Raichu","Typhlosion","Ursaring","Walrein","Cacturne","Dodrio","Floatzel","Glaceon","Gligar","Linoone","Magneton","Nidoqueen","Poliwrath","Porygon2","Regice","Sharpedo","Shiftry","Victreebel","Ampharos","Bibarel","Camerupt","Crawdaunt","Golem","Haunter","Lapras","Lopunny","Muk","Ninetales","Quagsire"],
        },
        nu: {
            // http://www.smogon.com/forums/threads/dpp-nu-viability-ranking.3512254/
            S: ["Charizard","Medicham","Tauros","Regirock","Skuntank","Slowking"],
            A: ["Haunter","Jynx","Magmortar","Gardevoir","Gligar","Hitmonchan","Hypno","Lickilicky","Manectric","Sandslash","Dodrio","Drifblim","Floatzel","Magneton","Meganium","Nidoqueen","Vileplume"],
            B: ["Cacturne","Electrode","Ninetales","Politoed","Poliwrath","Quagsire","Shiftry","Typhlosion","Venomoth","Victreebel","Whiscash","Cradily","Dusclops","Glalie","Golem","Gorebyss","Grumpig","Jumpluff","Lapras","Piloswine","Pinsir","Porygon2","Regice","Camerupt","Gabite","Gastrodon","Golduck","Linoone","Mantine","Marowak","Muk","Rhydon","Sharpedo"],
            C: ["Articuno","Crawdaunt","Electabuzz","Machoke","Persian","Probopass","Purugly","Raichu","Rapidash","Roselia","Slaking","Sneasel","Torkoal","Ampharos","Armaldo","Glaceon","Huntail","Kadabra","Misdreavus","Mr. Mime","Monferno","Raticate","Relicanth","Solrock","Xatu","Banette","Bastiodon","Butterfree","Chatot","Diglett","Dragonair","Flareon","Girafarig","Golbat","Lopunny","Luxray","Metang","Rampardos","Stantler","Swalot","Wailord","Walrein","Zangoose"],
        },
        // couldn't find anything for DPP LC :(
    },
    adv: {
        uber: {
            // http://www.smogon.com/forums/threads/adv-ubers-viability-ranking-thread-take-3.3536426/
            S: ["Groudon","Kyogre","Latias","Latios"],
            A: ["Blissey","Deoxys-Attack","Mewtwo","Snorlax","Forretress","Ho-Oh","Jirachi","Lugia","Rayquaza","Magneton","Regice","Skarmory"],
            B: ["Gengar","Kabutops","Metagross","Omastar","Registeel","Shedinja","Umbreon","Deoxys-Defense","Exeggutor","Ludicolo","Qwilfish","Steelix","Tyranitar","Deoxys-Speed","Flygon","Jumpluff","Mew","Raikou","Shiftry"],
            C: ["Heracross","Lanturn","Ninjask","Salamence","Slaking","Wobbuffet","Zapdos"],
        },
        ou: {
            // http://www.smogon.com/forums/threads/adv-viability-ranking-ou.3503019/
            S: ["Tyranitar","Gengar","Celebi","Suicune"],
            A: ["Metagross","Skarmory","Salamence","Snorlax","Zapdos","Aerodactyl","Swampert","Dugtrio","Jirachi","Heracross","Blissey","Starmie","Flygon","Jolteon"],
            B: ["Raikou","Magneton","Porygon2","Forretress","Gyarados","Milotic","Claydol","Regice","Cloyster","Ludicolo","Vaporeon","Kingdra"],
            C: ["Medicham","Houndoom","Smeargle","Umbreon","Regirock","Steelix","Camerupt","Dragonite","Weezing","Dusclops","Charizard","Slaking","Lunatone","Moltres","Omastar","Marowak"],
        },
        uu: {
            // http://www.smogon.com/forums/threads/adv-uu-viability-rankings.3548578/
            S: ["Hypno","Kangaskhan","Lunatone","Gligar","Solrock"],
            A: ["Blastoise","Cradily","Fearow","Grumpig","Hitmonlee","Misdreavus","Nidoking","Tentacruel","Walrein","Aggron","Granbull","Hitmontop","Lanturn","Omastar","Scyther","Sharpedo","Altaria","Camerupt","Clefable","Electabuzz","Electrode","Feraligatr","Golem","Kabutops","Manectric","Muk","Ninetales","Pinsir","Vileplume"],
            B: ["Exploud","Golduck","Meganium","Poliwrath","Quagsire","Qwilfish","Sandslash","Shedinja","Shiftry","Slowking","Victreebel","Mantine","Nidoqueen","Primeape","Raichu","Ampharos","Azumarill","Banette","Glalie","Gorebyss","Mr. Mime","Politoed","Rapidash","Sableye","Xatu"],
            C: ["Absol","Girafarig","Linoone","Magmar","Persian","Sneasel","Stantler","Arbok","Cacturne","Flareon","Mawile","Octillery","Raticate","Relicanth","Roselia","Torkoal"],
        },
        nu: {
            // http://www.smogon.com/forums/threads/adv-nu-viability-ranking.3503540/
            S: ["Hitmonchan","Huntail","Chimecho","Flareon","Haunter","Mawile","Sableye"],
            A: ["Arbok","Bellossom","Dewgong","Glalie","Murkrow","Pidgeot","Plusle","Pupitar","Relicanth","Roselia","Tangela","Vigoroth","Graveler","Kecleon","Lickitung","Pelipper","Sudowoodo","Swalot","Torkoal","Golbat","Kingler","Raticate","Venomoth","Whiscash"],
            B: ["Cacturne","Machoke","Magby","Minun","Metang","Octillery","Piloswine","Seadra","Wailord","Abra","Crawdaunt","Diglett","Lairon","Magcargo","Pikachu","Charmeleon","Dunsparce","Poliwhirl","Seviper","Shedinja","Togetic","Tropius","Wartortle"],
            C: ["Ariados","Castform","Grovyle","Houndour","Lileep","Noctowl","Ponyta","Quilava","Shelgon","Volbeat","Weepinbell","Wigglytuff","Yanma","Anorith","Beedrill","Furret","Ledian","Mightyena","Parasect","Seaking","Spinda","Sunflora","Aipom","Clamperl","Dragonair","Dustox","Illumise","Sealeo","Shuckle","Staryu"],
        },
    },
    gsc: {
        uber: {
            // pulled from my ass based on OU rankings and watching a few UPL matches
            S: ["Snorlax","Celebi","Lugia","Mew","Mewtwo","Zapdos"],
            A: ["Forretress","Tyranitar"],
            B: ["Blissey","Cloyster","Gengar","Heracross","Ho-Oh","Jolteon","Machamp","Marowak","Raikou","Rhydon","Steelix"],
            C: ["Dragonite","Exeggutor","Miltank","Misdreavus","Nidoking","Porygon2","Skarmory","Starmie","Suicune","Umbreon","Vaporeon"],
        },
        ou: {
            // http://www.smogon.com/forums/threads/gsc-ou-viability-ranking-thread-v2.3556533/
            S: ["Snorlax","Raikou","Zapdos"],
            A: ["Cloyster","Exeggutor","Gengar","Skarmory","Nidoking","Steelix","Suicune","Tyranitar","Vaporeon"],
            B: ["Forretress","Machamp","Marowak","Miltank","IMisdreavus","Starmie","Umbreon","Blissey","Dragonite","Heracross","Jolteon","Porygon2","Rhydon"],
            C: ["Charizard","Clefable","Espeon","Golem","Kangaskhan","Muk","Quagsire","Smeargle","Tentacruel","Houndoom","Jynx","Meganium","Scizor"],
        },
        // couldn't find anything for GSC UU :(
    },
    rby: {
        uber: {
            // adapted from http://www.smogon.com/forums/threads/rby-ubers-viability-ranking.3541329/
            // moved the non-Ubers all down one rank each and added C-rank based on thread posts
            S: ["Mewtwo","Mew"],
            A: ["Chansey","Slowbro"],
            B: ["Snorlax","Exeggutor","Jynx","Starmie","Tauros"],
            C: ["Alakazam","Articuno","Dragonite","Gengar","Hypno","Jolteon","Zapdos"],
        },
        ou: {
            // http://www.smogon.com/forums/threads/rby-ou-viability-ranking-mark-ii.3572352/
            S: ["Chansey","Exeggutor","Snorlax","Tauros"],
            A: ["Alakazam","Lapras","Starmie","Zapdos"],
            B: ["Cloyster","Gengar","Golem","Jolteon","Jynx","Rhydon","Slowbro"],
            C: ["Articuno","Dragonite","Hypno","Persian","Victreebel"],
        },
        // couldn't find anything for RBY UU :(
    },
};
