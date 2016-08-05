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
            S: ["Groudon","Xerneas","Gengar","Salamence","Arceus","Ho-Oh"],
            A: ["Darkrai","Klefki","Deoxys-Attack","Arceus-Water","Arceus-Ground","Diancie","Arceus-Ghost","Lugia","Dialga","Giratina-Origin","Yveltal","Deoxys-Speed","Kyogre","Rayquaza","Arceus-Dragon","Latios","Landorus-Therian"],
            B: ["Mewtwo","Sableye","Arceus-Rock","Bronzong","Tyranitar","Excadrill","Skarmory","Kangaskhan","Shaymin-Sky","Latias","Jirachi","Ferrothorn","Arceus-Fairy","Zekrom","Wobbuffet","Lucario","Aegislash","Chansey","Blissey","Cloyster","Scolipede","Arceus-Dark","Arceus-Ice","Greninja","Blaziken"],
            C: ["Alomomola","Slowbro","Cresselia","Scizor","Flygon","Tentacruel","Aerodactyl","Gothitelle","Giratina","Smeargle","Ditto","Palkia","Kyurem-White","Arceus-Grass","Gyarados","Arceus-Electric","Arceus-Fighting","Arceus-Poison","Landorus","Mawile","Arceus-Steel"],
        },
        ou: {
            // http://www.smogon.com/forums/threads/oras-ou-viability-ranking-thread-v5.3571990/
            S: ["Clefable"],
            A: ["Diancie","Heatran","Keldeo","Landorus-Therian","Latios","Rotom-Wash","Scizor","Tornadus-Therian","Tyranitar","Azumarill","Charizard","Excadrill","Ferrothorn","Garchomp","Lopunny","Manaphy","Medicham","Sableye","Slowbro","Talonflame","Thundurus","Volcanion","Weavile","Alakazam","Bisharp","Gardevoir","Gliscor","Heracross","Jirachi","Latias","Metagross","Pinsir","Serperior","Skarmory","Starmie","Terrakion"],
            B: ["Amoonguss","Chansey","Gengar","Gyarados","Hippowdon","Kyurem-Black","Magnezone","Manectric","Mew","Nidoking","Suicune","Tangrowth","Venusaur","Aerodactyl","Altaria","Breloom","Dragonite","Gastrodon","Kingdra","Klefki","Politoed","Quagsire","Reuniclus","Slowking","Togekiss","Volcarona","Alomomola","Celebi","Crawdaunt","Diggersby","Hydreigon","Kabutops","Mamoswine","Raikou","Swampert"],
            C: ["Dragalge","Empoleon","Gallade","Infernape","Lucario","Mandibuzz","Omastar","Sceptile","Scolipede","Sharpedo","Thundurus-Therian","Victini","Zapdos","Zygarde","Azelf","Entei","Feraligatr","Hawlucha","Jellicent","Pidgeot","Seismitoad","Tentacruel","Toxicroak","Aggron","Beedrill","Blastoise","Chesnaught","Cobalion","Cofagrigus","Conkeldurr","Dugtrio","Goodra","Hoopa","Kyurem","Magneton","Rotom-Heat","Staraptor"],
        },
        uu: {
            // http://www.smogon.com/forums/threads/oras-uu-viability-rankings-v5.3576945/
            S: ["Hydreigon","Aerodactyl","Suicune","Celebi"],
            A: ["Entei","Swampert","Cobalion","Sylveon","Mamoswine","Krookodile","Gyarados","Sceptile","Beedrill","Whimsicott","Reuniclus","Sharpedo","Cresselia","Sableye","Blastoise","Nidoqueen","Feraligatr","Empoleon","Tentacruel","Infernape","Snorlax","Toxicroak","Heracross","Crobat","Conkeldurr","Florges"],
            B: ["Quagsire","Lucario","Mienshao","Alomomola","Kyurem","Tornadus","Escavalier","Crawdaunt","Houndoom","Slowking","Roserade","Chandelure","Metagross","Azelf","Rotom-Mow","Nidoking","Milotic","Froslass","Abomasnow","Absol","Aggron","Arcanine","Blissey","Bronzong","Chesnaught","Diancie","Gardevoir","Doublade","Dragalge","Forretress","Gligar","Heliolisk","Jellicent","Machamp","Mandibuzz","Porygon2","Porygon-Z","Rotom-Heat","Shaymin","Slurpuff","Tyrantrum","Umbreon","Venomoth","Ampharos","Cloyster","Darmanitan","Espeon","Galvantula","Hoopa","Qwilfish","Shuckle","Steelix","Tangrowth","Virizion"],
            C: ["Dugtrio","Fletchinder","Haxorus","Honchkrow","Kingdra","Magneton","Meloetta","Seismitoad","Weezing","Uxie","Yanmega","Zoroark","Donphan","Aromatisse","Gastrodon","Goodra","Moltres","Noivern","Omastar","Pangoro","Rhyperior","Togetic","Accelgor","Druddigon","Glalie","Granbull","Hitmonlee","Shedinja","Venusaur"],
        },
        ru: {
            // http://www.smogon.com/forums/threads/ru-viability-rankings-thread.3574583/
            S: ["Alomomola","Flygon","Venusaur"],
            A: ["Shaymin","Slurpuff","Diancie","Dugtrio","Glalie","Medicham","Meloetta","Sigilyph","Slowking","Sneasel","Virizion","Blastoise","Braviary","Drapion","Escavalier","Fletchinder","Hitmonlee","Magneton","Registeel","Rhyperior","Aerodactyl","Camerupt","Delphox","Emboar","Hoopa","Jellicent","Sawk","Tangrowth"],
            B: ["Abomasnow","Absol","Aggron","Audino","Exploud","Jolteon","Rotom-Mow","Seismitoad","Spiritomb","Steelix","Uxie","Aromatisse","Banette","Bronzong","Druddigon","Gallade","Garbodor","Granbull","Gurdurr","Houndoom","Malamar","Mesprit","Qwilfish","Rotom","Vivillon","Weezing","Accelgor","Gourgeist-Super","Hariyama","Manectric","Musharna","Omastar","Piloswine","Roselia","Samurott","Scrafty","Scyther","Xatu"],
            C: ["Clawitzer","Eelektross","Golbat","Hitmontop","Jynx","Lanturn","Mawile","Poliwrath","Pelipper","Sceptile","Skuntank","Smeargle","Togetic","Archeops","Articuno","Ferroseed","Kabutops","Klinklang","Liepard","Ludicolo","Shiftry","Aurorus","Barbaracle","Cofagrigus","Combusken","Lilligant","Linoone","Rotom-Fan","Rotom-Frost","Trevenant"],
        },
        nu: {
            // http://www.smogon.com/forums/threads/oras-nu-viability-rankings.3555650/
            S: ["Jynx","Tauros"],
            A: ["Archeops","Garbodor","Lilligant","Magmortar","Mesprit","Pyroar","Rhydon","Rotom","Samurott","Shiftry","Swellow","Audino","Barbaracle","Charizard","Floatzel","Hariyama","Hitmonchan","Kangaskhan","Lanturn","Scyther","Steelix","Vivillon","Weezing","Xatu","Aurorus","Combusken","Gastrodon","Kabutops","Ludicolo","Malamar","Mismagius","Musharna","Omastar","Skuntank"],
            B: ["Gurdurr","Trevenant","Abomasnow","Aggron","Carracosta","Ferroseed","Gourgeist-Super","Haunter","Liepard","Piloswine","Pinsir","Regirock","Vileplume","Claydol","Golurk","Grumpig","Manectric","Mantine","Miltank","Pelipper","Poliwrath","Primeape","Sliggoo","Torterra","Zangoose","Articuno","Cacturne","Chatot","Clefairy","Electivire","Roselia","Rotom-Fan","Smeargle"],
            C: ["Bouffalant","Camerupt","Exeggutor","Kecleon","Klinklang","Lapras","Mawile","Misdreavus","Mr. Mime","Ninetales","Prinplup","Raichu","Tangela","Throh","Sawsbuck","Victreebel","Altaria","Beheeyem","Cradily","Drifblim","Duosion","Gogoat","Gorebyss","Gourgeist-Small","Jumpluff","Kadabra","Leafeon","Linoone","Rampardos","Regice","Vanilluxe","Cryogonal","Dodrio","Electrode","Fraxure","Hippopotas","Metang","Pawniard","Probopass","Relicanth","Rotom-Frost","Sandslash","Shedinja","Solrock","Simisage","Stoutland","Vigoroth"],
        },
        pu: {
            // http://www.smogon.com/forums/threads/pu-viability-rankings.3528743/
            S: ["Floatzel"],
            A: ["Rotom-Frost","Leafeon","Monferno","Golem","Mr. Mime","Grumpig","Stoutland","Roselia","Stunfisk","Zebstrika","Pawniard","Dodrio","Regice","Vullaby","Chatot","Relicanth","Mawile","Gourgeist-Super","Jumpluff","Swanna","Metang","Simipour","Simisage","Arbok","Electrode","Audino","Kadabra","Politoed","Articuno","Crustle","Cryogonal","Bouffalant","Raichu","Clefairy","Dusknoir","Quilladin","Tangela","Probopass","Ursaring"],
            B: ["Cacturne","Muk","Pelipper","Rotom-Fan","Smeargle","Ninjask","Murkrow","Misdreavus","Rapidash","Altaria","Gabite","Duosion","Huntail","Simisear","Beheeyem","Fraxure","Ninetales","Camerupt","Basculin","Drifblim","Gogoat","Golduck","Gorebyss","Gourgeist-Small","Hippopotas","Lapras","Leavanny","Lumineon","Mightyena","Prinplup","Purugly","Solrock","Armaldo","Chinchou","Electabuzz","Kingler","Klang","Sawsbuck","Seaking","Volbeat"],
            C: ["Avalugg","Beartic","Krokorok","Marowak","Meowstic-M","Rampardos","Regigigas","Trapinch","Venipede","Vibrava","Zweilous","Butterfree","Carbink","Dusclops","Glalie","Luxray","Munchlax","Weepinbell","Ampharos","Banette","Furfrou","Glaceon","Hypno","Lickilicky","Lopunny","Shedinja","Swoobat","Swalot","Torkoal","Vanilluxe","Wartortle","Wigglytuff"],
        },
        lc: {
            // http://www.smogon.com/forums/threads/lc-viability-rankings-2-0.3547566/
            S: ["Diglett","Mienfoo","Pawniard","Porygon"],
            A: ["Abra","Fletchling","Gastly","Magnemite","Timburr","Archen","Carvanha","Chinchou","Drilbur","Foongus","Ponyta","Shellder","Snivy","Snubbull","Spritzee","Vullaby","Corphish","Croagunk","Ferroseed","Gothita","Omanyte","Skrelp","Staryu","Tirtouga"],
            B: ["Aipom","Cottonee","Dwebble","Hippopotas","Larvesta","Munchlax","Scraggy","Vulpix","Bellsprout","Bunnelby","Cranidos","Doduo","Elekid","Houndour","Onix","Pancham","Pumpkaboo-Super","Riolu","Surskit","Taillow","Torchic","Amaura","Clamperl","Deerling","Honedge","Magby","Shellos","Slowpoke","Stunky","Tentacool","Zigzagoon"],
            C: ["Aron","Anorith","Axew","Buneary","Chespin","Darumaka","Frillish","Kabuto","Lickitung","Lileep","Numel","Rufflet","Sandile","Sandshrew","Snover","Trapinch","Trubbish","Tyrunt","Wynaut","Bulbasaur","Dratini","Exeggcute","Geodude","Inkay","Koffing","Meowth","Natu","Pumpkaboo-Small","Purrloin","Spinarak","Teddiursa","Venipede","Budew","Cubone","Goldeen","Karrablast","Larvitar","Machop","Mankey","Mantyke","Nosepass","Remoraid","Shelmet","Togepi","Wingull","Wooper","Zorua"],
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
            A: ["Alomomola","Carracosta","Garbodor","Golurk","Ludicolo","Misdreavus","Primeape","Sawk","Seismitoad","Braviary","Eelektross","Golem","Gurdurr","Gardevoir","Musharna","Serperior","Swellow","Tauros","Zangoose","Drifblim","Exeggutor","Haunter","Piloswine","Regirock","Roselia","Skuntank","Wartortle"],
            B: ["Audino","Duosion","Electabuzz","Gorebyss","Gothorita","Liepard","Metang","Miltank","Pinsir","Probopass","Rotom-Fan","Rotom-Frost","Tangela","Weezing","Beheeyem","Camerupt","Combusken","Golbat","Kadabra","Klang","Muk","Regice","Sawsbuck","Shiftry","Swanna","Torkoal","Zweilous","Bastiodon","Floatzel","Fraxure","Lickilicky","Mantine","Simipour","Simisage","Throh","Torterra","Ursaring"],
            C: ["Altaria","Arbok","Articuno","Basculin","Cacturne","Dragonair","Grumpig","Linoone","Munchlax","Murkrow","Ninjask","Pelipper","Simisear","Scraggy","Victreebel","Vileplume","Volbeat","Zebstrika","Ampharos","Armaldo","Butterfree","Cradily","Electrode","Flareon","Frillish","Jumpluff","Lapras","Luxray","Marowak","Meganium","Rampardos","Rapidash","Riolu","Sneasel","Swoobat","Vigoroth","Gigalith","Glaceon","Golduck","Hypno","Illumise","Kingler","Lairon","Lampent","Leafeon","Magmar","Masquerain","Mawile","Raichu","Relicanth","Shelgon","Stunfisk"],
        },
        lc: {
            // http://www.smogon.com/forums/threads/little-cup-viability-rankings-mark-ii.3485860/
            S: ["Drilbur","Mienfoo","Misdreavus","Murkrow","Porygon","Snover"],
            A: ["Abra","Chinchou","Clamperl","Foongus","Hippopotas","Lileep","Magnemite","Riolu","Staryu","Timburr","Tirtouga"],
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
        lc: {
            // http://www.smogon.com/forums/threads/dpp-lc-viability-rankings.3573461/
            S: ["Gligar","Munchlax"],
            A: ["Bronzor","Croagunk","Elekid","Gastly","Machop","Snover","Wynaut","Chinchou","Dratini","Drifloon","Duskull","Glameow","Houndoor","Kabuto","Mankey","Mantyke","Slowpoke","Stunky","Taillow"],
            B: ["Aipom","Aron","Bagon","Bellsprout","Carvanha","Chimchar","Diglett","Doduo","Exeggcute","Geodude","Horsea","Krabby","Magby","Magnemite","Meowth","Oddish","Omanyte","Phanpy","Ponyta","Porygon","Staryu","Totodile","Voltorb","Wailmer","Abra","Anorith","Barboach","Bonsly","Buizel","Buneary","Cacnea","Clamperl","Cubone","Cyndaquil","Eevee","Ekans","Goldeen","Grimer","Hippopotas","Koffing","Larvitar","Lileep","Makuhita","Natu","Paras","Pineco","Poliwag","Rattata","Seel","Shroomish","Squirtle","Swinub","Teddiursa","Trapinch","Zigzagoon"],
            C: ["Baltoy","Bulbasaur","Charmander","Corphish","Cranidos","Drowzee","Gible","Growlithe","Lickitung","Numel","Onix","Nidoran-M","Psyduck","Remoraid","Sandshrew","Shellos","Shieldon","Shuppet","Snorunt","Snubbull","Spheal","Spoink","Starly","Tentacool","Wingull","Piplup"],
        },
    },
    adv: {
        uber: {
            // http://www.smogon.com/forums/threads/adv-ubers-viability-ranking-thread-take-3.3536426/
            S: ["Groudon","Kyogre","Latias","Latios"],
            A: ["Blissey","Deoxys-Attack","Mewtwo","Snorlax","Forretress","Ho-Oh","Jirachi","Lugia","Magneton","Rayquaza","Regice","Skarmory"],
            B: ["Gengar","Kabutops","Metagross","Omastar","Registeel","Shedinja","Steelix","Umbreon","Aerodactyl","Deoxys-Defense","Deoxys-Speed","Exeggutor","Qwilfish","Salamence","Slaking","Tyranitar","Flygon","Jumpluff","Ludicolo","Raikou","Regirock","Shiftry"],
            C: ["Heracross","Lanturn","Mew","Ninjask","Wobbuffet","Zapdos"],
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
            // http://www.smogon.com/forums/threads/general-ubers-generation-2-discussion.3507552/#post-6396840
            S: ["Mew","Mewtwo","Snorlax",],
            A: ["Celebi","Forretress","Lugia","Raikou","Steelix","Tyranitar","Zapdos"],
            B: ["Blissey","Cloyster","Gengar","Golem","Ho-Oh","Jolteon","Miltank","Rhydon","Skarmory","Umbreon"],
            C: ["Exeggutor","Heracross","Houndoom","Marowak","Misdreavus","Vaporeon"],
        },
        ou: {
            // http://www.smogon.com/forums/threads/gsc-ou-viability-ranking-thread-v2.3556533/
            S: ["Snorlax","Raikou","Zapdos"],
            A: ["Cloyster","Exeggutor","Gengar","Skarmory","Nidoking","Steelix","Suicune","Tyranitar","Vaporeon"],
            B: ["Forretress","Machamp","Marowak","Miltank","IMisdreavus","Starmie","Umbreon","Blissey","Dragonite","Heracross","Jolteon","Porygon2","Rhydon"],
            C: ["Charizard","Clefable","Espeon","Golem","Kangaskhan","Muk","Quagsire","Smeargle","Tentacruel","Houndoom","Jynx","Meganium","Scizor"],
        },
        uu: {
            // based on http://www.smogon.com/forums/threads/gsc-uu.3576710/
            S: ["Nidoqueen"],
            A: ["Ampharos","Slowbro","Scyther","Granbull","Dodrio","Electabuzz"],
            B: ["Slowking","Kabutops","Pinsir","Politoed","Magneton","Quagsire","Qwilfish","Victreebel","Magmar","Chansey","Hypno","Jumpluff","Weezing","Sandslash","Blastoise","Piloswine","Gyarados"],
            C: ["Poliwrath","Crobat","Primeape","Shuckle","Feraligatr","Vileplume","Bellossom","Haunter","Girafarig","Lanturn","Omastar","Dugtrio","Gligar","Electrode","Mr. Mime","Wigglytuff","Kadabra","Sudowoodo","Raichu"],
        },
    },
    rby: {
        uber: {
            // http://www.smogon.com/forums/threads/rby-ubers-viability-ranking.3541329/
            S: ["Mewtwo","Mew"],
            A: ["Chansey","Slowbro","Snorlax","Zapdos"],
            B: ["Exeggutor","Gengar","Jynx","Tauros"],
            C: ["Starmie"],
        },
        ou: {
            // http://www.smogon.com/forums/threads/rby-ou-viability-ranking-mark-ii.3572352/
            S: ["Chansey","Exeggutor","Snorlax","Tauros"],
            A: ["Alakazam","Lapras","Starmie","Zapdos"],
            B: ["Cloyster","Gengar","Golem","Jolteon","Jynx","Rhydon","Slowbro"],
            C: ["Articuno","Dragonite","Hypno","Persian","Victreebel"],
        },
        uu: {
            // http://www.smogon.com/forums/threads/rby-uu-general-discussion-roa-rotational-ladder.3573896/
            S: ["Dragonite","Articuno","Moltres","Hypno"],
            A: ["Persian","Dodrio","Raichu","Haunter","Golduck","Kadabra"],
            B: ["Venusaur","Gyarados","Kangaskhan","Victreebel","Dugtrio","Vaporeon","Tentacruel","Sandslash","Omastar"],
            C: ["Pinsir","Clefable","Poliwrath","Charizard","Electabuzz","Kingler","Nidoking","Machamp","Electrode","Tangela","Staryu","Rapidash","Raticate"],
        },
    },
};
