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
    sm: {
        uber: {
            // http://www.smogon.com/forums/threads/sm-ubers-viability-ranking-thread-preliminary.3591388/
            S: ["Groudon","Xerneas","Gengar","Yveltal"],
            A: ["Salamence","Arceus","Deoxys-Attack","Giratina-Origin","Ho-Oh","Arceus-Water","Arceus-Dark","Arceus-Ground","Lunala","Kyogre","Zygarde","Lucario","Arceus-Ghost"],
            B: ["Deoxys-Speed","Celesteela","Ferrothorn","Rayquaza","Excadrill","Dialga","Sableye","Lugia","Arceus-Dragon","Klefki","Blissey","Arceus-Rock","Arceus-Fairy","Tyranitar","Magearna","Bronzong","Tapu Lele","Pheromosa","Darkrai","Arceus-Ice","Muk-Alola","Zekrom","Palkia","Cloyster","Tapu Koko","Mewtwo","Toxapex","Clefable","Skarmory","Solgaleo","Scizor"],
            C: ["Dugtrio","Wobbuffet","Buzzwole","Chansey","Xurkitree","Landorus-Therian","Shuckle","Aegislash","Shaymin-Sky","Ditto","Slowbro","Blaziken","Arceus-Steel","Arceus-Poison","Kangaskhan","Kyurem-White","Smeargle","Reshiram","Arceus-Grass","Arceus-Electric","Giratina"],
        },
        ou: {
            // http://www.smogon.com/forums/threads/sm-ou-viability-ranking-thread-preliminary.3590726/
            S: ["Landorus-Therian","Tapu Lele"],
            A: ["Greninja","Celesteela","Heatran","Magearna","Metagross","Tapu Fini","Tapu Koko","Buzzwole","Charizard","Excadrill","Ferrothorn","Garchomp","Hoopa-Unbound","Manaphy","Pheromosa","Rotom-Wash","Scizor","Tapu Bulu","Venusaur","Zygarde","Alakazam","Amoonguss","Jirachi","Latios","Magnezone","Marowak-Alola","Nihilego","Pinsir","Sableye","Skarmory","Tornadus-Therian","Tyranitar","Weavile"],
            B: ["Bisharp","Chansey","Clefable","Dugtrio","Gengar","Keldeo","Kyurem-Black","Salamence","Serperior","Tangrowth","Terrakion","Thundurus","Toxapex","Volcarona","Zapdos","Dragonite","Gliscor","Gyarados","Kartana","Kingdra","Mantine","Pelipper","Porygon-Z","Scolipede","Slowbro","Starmie","Volcanion","Aerodactyl","Breloom","Kabutops","Latias","Mew","Omastar","Sharpedo","Suicune","Slowking","Togekiss"],
            C: ["Azumarill","Crawdaunt","Diggersby","Klefki","Hippowdon","Mamoswine","Mimikyu","Muk-Alola","Minior","Necrozma","Nidoking","Ninetales-Alola","Shedinja","Whimsicott","Xurkitree","Azelf","Dragalge","Empoleon","Gastrodon","Kyurem","Mandibuzz","Reuniclus","Shuckle","Smeargle","Thundurus-Therian","Absol","Bewear","Decidueye","Feraligatr","Hawlucha","Hydreigon","Kommo-o","Primarina","Seismitoad","Talonflame","Tentacruel","Torkoal","Victini"],
        },
        uu: {
            // from usage stats: top 5; >5%, >2%, >1%
            S: ["Scizor","Latias","Dragonite","Weavile","Keldeo"],
            A: ["Mandibuzz","Porygon-Z","Bisharp","Hippowdon","Azumarill","Azelf","Terrakion","Aerodactyl","Forretress","Salamence","Raikou","Zygarde","Gliscor","Primarina","Serperior","Starmie","Blastoise","Gengar","Tentacruel","Breloom","Slowbro","Volcarona","Krookodile","Thundurus","Necrozma","Mew","Blissey","Sharpedo","Gyarados","Tsareena","Tornadus-Therian","Decidueye","Dhelmise","Victini","Magneton"],
            B: ["Volcanion","Thundurus-Therian","Sylveon","Empoleon","Diggersby","Bewear","Cobalion","Hydreigon","Staraptor","Gigalith","Amoonguss","Infernape","Conkeldurr","Swampert","Togekiss","Araquanid","Ninetales-Alola","Kommo-o","Swellow","Lycanroc","Crobat","Absol","Entei","Salazzle","Doublade","Golisopod","Chandelure","Flygon","Celebi","Arcanine","Metagross","Persian-Alola","Politoed","Rotom-Heat","Lucario","Klefki","Porygon2","Quagsire","Nidoqueen","Scolipede","Donphan"],
            C: ["Alomomola","Bronzong","Suicune","Snorlax","Minior","Comfey","Florges","Nidoking","Whimsicott","Sandslash-Alola","Crawdaunt","Alakazam","Roserade","Umbreon","Espeon","Mienshao","Silvally","Goodra","Golem-Alola","Galvantula","Mudsdale","Cresselia","Chesnaught","Bruxish","Darmanitan","Venusaur","Vikavolt","Diancie","Tornadus","Stoutland","Kabutops","Pyukumuku","Milotic"],
        },
        lc: {
            // http://www.smogon.com/forums/threads/lc-sumo-viability-rankings.3587565/
            S: ["Mienfoo","Timburr","Vullaby"],
            A: ["Diglett","Magnemite","Mudbray","Pawniard","Shellder","Staryu","Abra","Carvanha","Foongus","Gastly","Ponyta","Scraggy","Snivy","Chinchou","Corphish","Cottonee","Doduo","Dewbble","Ferroseed","Mareanie","Munchlax","Onix","Pumpkaboo-Super","Rufflet","Snubbull"],
            B: ["Bellsprout","Drilbur","Grimer-Alola","Croagunk","Hippopotas","Omanyte","Spritzee","Slowpoke","Tirtouga","Torchic","Vulpix","Aipom","Archen","Amaura","Cranidos","Elekid","Houndour","Pancham","Riolu","Sandshrew-Alola","Skrelp","Surskit","Zigzagoon","Buneary","Bunnelby","Clamperl","Deerling","Dewpider","Frillish","Honedge","Larvesta","Magby","Shellos","Snover","Stunky","Taillow","Vulpix-Alola"],
            C: ["Anorith","Bronzor","Darumaka","Fletchling","Kabuto","Lickitung","Lileep","Morellul","Numel","Pikipek","Sandile","Sandshrew","Spinarak","Stufful","Tentacool","Trapinch","Trubbish","Tyrunt","Wynaut","Aron","Axew","Bulbasaur","Chespin","Crabrawler","Cubchoo","Dratini","Exeggcute","Geodude","Goldeen","Inkay","Koffing","Meowth","Natu","Pumpkaboo-Small","Purrloin","Rowlet","Salandit","Teddiursa","Venipede","Meowth-Alola","Geodude-Alola","Budew","Cubone","Karrablast","Larvitar","Machop","Mankey","Mantyke","Nosepass","Remoraid","Shelmet","Togepi","Wimpod","Wingull","Wooper","Yungoos","Zorua"],
        },
        doubles: {
            // from usage stats: top 5; >5%, >2%, >1%
            S: ["Tapu Lele","Landorus-Therian","Tapu Koko","Salamence","Charizard"],
            A: ["Celesteela","Marowak-Alola","Heatran","Tapu Bulu","Aegislash","Oranguru","Jirachi","Pelipper","Kangaskhan","Deoxys-Attack","Metagross","Tyranitar","Ninetales-Alola","Kingdra","Volcanion","Garchomp","Hoopa-Unbound","Milotic","Araquanid","Raichu-Alola","Amoonguss","Gengar","Gastrodon","Porygon2"],
            B: ["Excadrill","Zapdos","Shaymin-Sky","Xurkitree","Kartana","Muk-Alola","Torkoal","Politoed","Arcanine","Mimikyu","Landorus","Rotom-Wash","Tapu Fini","Ferrothorn","Pheromosa","Cresselia","Gyarados","Diancie","Weavile","Hydreigon","Drampa","Nihilego","Azumarill","Togekiss","Zygarde","Mamoswine","Necrozma","Comfey","Scrafty","Golisopod","Sylveon","Thundurus","Whimsicott","Volcarona","Venusaur","Snorlax","Greninja","Gigalith","Terrakion","Genesect","Buzzwole","Vikavolt","Sandslash-Alola","Suicune","Aerodactyl","Kyurem-Black","Mudsdale","Hitmontop","Hariyama","Wishiwashi"],
            C: ["Ludicolo","Toxapex","Rotom-Heat","Porygon-Z","Raichu","Victini","Scizor","Salazzle","Lucario","Mew","Thundurus-Therian","Breloom","Alakazam","Serperior","Exeggutor-Alola","Cradily","Primarina","Dusclops","Dragonite","Oricorio","Meloetta","Staraptor","Chandelure","Krookodile","Talonflame","Dhelmise","Crabominable","Reuniclus","Rimbombee","Lilligant","Eevee","Golem-Alola","Clefable","Hippowdon","Machamp","Heliolisk","Typhlosion","Blaziken","Latios","Bronzong","Conkeldurr","Tsareena","Slowbro","Magnezone","Smeargle","Incineroar"],
        },
    },
    xy: {
        uber: {
            // http://www.smogon.com/forums/threads/oras-ubers-viability-ranking-thread-last-updated-post-918.3535106/
            S: ["Groudon","Xerneas","Salamence","Gengar","Arceus"],
            A: ["Darkrai","Ho-Oh","Deoxys-Attack","Arceus-Water","Klefki","Yveltal","Dialga","Giratina-Origin","Excadrill","Lugia","Deoxys-Speed","Arceus-Ground","Arceus-Ghost","Rayquaza","Latios","Landorus-Therian"],
            B: ["Sableye","Diancie","Kyogre","Tyranitar","Kangaskhan","Ferrothorn","Arceus-Dragon","Mewtwo","Bronzong","Arceus-Rock","Cloyster","Shaymin-Sky","Arceus-Fairy","Lucario","Wobbuffet","Chansey","Blissey","Slowbro","Jirachi","Arceus-Ice","Skarmory"],
            C: ["Smeargle","Blaziken","Zekrom","Giratina","Ditto","Arceus-Poison","Arceus-Steel","Arceus-Electric","Arceus-Dark","Aegislash","Scolipede","Greninja","Cresselia","Latias","Palkia","Kyurem-White","Flygon","Arceus-Fighting","Clefable","Alomomola","Landorus","Gothitelle","Gyarados","Mawile","Arceus-Grass","Aerodactyl"],
        },
        ou: {
            // http://www.smogon.com/forums/threads/oras-ou-viability-ranking-thread-v5.3571990/
            S: ["Clefable","Landorus-Therian"],
            A: ["Diancie","Heatran","Keldeo","Latios","Lopunny","Medicham","Rotom-Wash","Scizor","Tornadus-Therian","Tyranitar","Charizard","Excadrill","Ferrothorn","Garchomp","Heracross","Jirachi","Manaphy","Slowbro","Talonflame","Thundurus","Weavile","Alakazam","Azumarill","Bisharp","Gardevoir","Gliscor","Metagross","Pinsir","Serperior","Skarmory","Starmie","Tangrowth","Terrakion"],
            B: ["Amoonguss","Chansey","Crawdaunt","Gengar","Gyarados","Hippowdon","Kyurem-Black","Latias","Magnezone","Manectric","Mew","Nidoking","Suicune","Venusaur","Volcanion","Aerodactyl","Alomomola","Altaria","Breloom","Dragonite","Gastrodon","Hydreigon","Klefki","Quagsire","Reuniclus","Slowking","Volcarona","Zapdos","Celebi","Diggersby","Dugtrio","Kabutops","Kingdra","Kyurem","Mamoswine","Politoed","Raikou","Togekiss"],
            C: ["Dragalge","Empoleon","Gallade","Infernape","Lucario","Mandibuzz","Omastar","Sceptile","Scolipede","Sharpedo","Swampert","Thundurus-Therian","Victini","Zygarde","Azelf","Entei","Feraligatr","Hawlucha","Jellicent","Magneton","Pidgeot","Seismitoad","Tentacruel","Toxicroak","Aggron","Beedrill","Blastoise","Chesnaught","Cobalion","Cofagrigus","Conkeldurr","Goodra","Hoopa","Rotom-Heat","Staraptor"],
        },
        uu: {
            // http://www.smogon.com/forums/threads/oras-uu-viability-ranking-thread-v6.3580117/
            S: ["Hydreigon","Celebi","Suicune"],
            A: ["Klefki","Aerodactyl","Entei","Krookodile","Sylveon","Conkeldurr","Swampert","Gyarados","Beedrill","Empoleon","Sceptile","Cresselia","Cobalion","Tentacruel","Crobat","Reuniclus","Infernape","Nidoqueen","Mamoswine","Snorlax","Kyurem","Sharpedo","Tornadus","Blastoise","Heracross","Metagross","Alomomola","Blissey","Lucario","Forretress","Haxorus","Bronzong","Mienshao","Crawdaunt","Doublade"],
            B: ["Milotic","Escavalier","Feraligatr","Roserade","Rotom-Mow","Nidoking","Florges","Toxicroak","Heliolisk","Whimsicott","Gligar","Froslass","Abomasnow","Absol","Aggron","Arcanine","Chandelure","Chesnaught","Houndoom","Jellicent","Mandibuzz","Porygon2","Sableye","Shaymin","Slowking","Slurpuff","Venomoth","Darmanitan","Diancie","Dragalge","Durant","Espeon","Galvantula","Magneton","Porygon-Z","Rotom-Heat","Shuckle","Steelix","Umbreon"],
            C: ["Ampharos","Cloyster","Fletchinder","Gardevoir","Honchkrow","Hoopa","Machamp","Moltres","Noivern","Registeel","Tyrantrum","Uxie","Weezing","Zoroark","Donphan","Gastrodon","Meloetta","Omastar","Qwilfish","Rhyperior","Virizion","Yanmega","Glalie","Goodra","Granbull","Quagsire","Seismitoad","Tangela","Togetic"],
        },
        ru: {
            // http://www.smogon.com/forums/threads/ru-viability-rankings-thread.3574583/
            S: ["Alomomola","Venusaur","Flygon"],
            A: ["Virizion","Registeel","Drapion","Sigilyph","Diancie","Sneasel","Glalie","Rhyperior","Escavalier","Meloetta","Medicham","Slowking","Braviary","Camerupt","Hitmonlee","Sawk","Magneton","Audino","Uxie","Blastoise","Jolteon","Aerodactyl","Emboar","Delphox","Fletchinder"],
            B: ["Absol","Bronzong","Exploud","Granbull","Gurdurr","Hoopa","Houndoom","Jellicent","Rotom-Mow","Seismitoad","Spiritomb","Steelix","Banette","Druddigon","Gallade","Garbodor","Malamar","Rotom","Scrafty","Vivillon","Xatu","Weezing","Accelgor","Gourgeist-Super","Hariyama","Mesprit","Musharna","Omastar","Piloswine","Torterra","Scyther"],
            C: ["Abomasnow","Aggron","Aromatisse","Aurorus","Clawitzer","Golbat","Lanturn","Mawile","Poliwrath","Sceptile","Togetic","Eelektross","Ferroseed","Hitmontop","Kabutops","Liepard","Ludicolo","Manectric","Pelipper","Quagsire","Qwilfish","Samurott","Skuntank","Archeops","Articuno","Barbaracle","Cofagrigus","Combusken","Jynx","Klinklang","Lilligant","Roselia","Rotom-Fan","Smeargle"],
        },
        nu: {
            // http://www.smogon.com/forums/threads/oras-nu-viability-rankings.3555650/
            S: ["Garbodor","Mesprit","Rhydon","Tauros","Xatu"],
            A: ["Gurdurr","Hitmonchan","Jynx","Lilligant","Magmortar","Rotom","Samurott","Shiftry","Swellow","Archeops","Audino","Barbaracle","Charizard","Hariyama","Lanturn","Pyroar","Scyther","Skuntank","Steelix","Vivillon","Weezing","Gastrodon","Kangaskhan","Liepard","Ludicolo","Malamar","Piloswine","Vileplume"],
            B: ["Abomasnow","Aurorus","Clefairy","Ferroseed","Floatzel","Gourgeist-Super","Haunter","Mantine","Miltank","Mismagius","Musharna","Omastar","Regirock","Aggron","Carracosta","Claydol","Combusken","Golurk","Kabutops","Pelipper","Pinsir","Primeape","Torterra","Zangoose","Altaria","Articuno","Bronzor","Electivire","Grumpig","Lapras","Poliwrath","Quagsire","Sliggoo"],
            C: ["Camerupt","Chatot","Exeggutor","Kecleon","Klinklang","Manectric","Mawile","Misdreavus","Mr. Mime","Ninetales","Raichu","Regice","Roselia","Sawsbuck","Victreebel","Bouffalant","Cacturne","Cradily","Cryogonal","Drifblim","Dusknoir","Electrode","Gorebyss","Gourgeist-Small","Jumpluff","Leafeon","Machoke","Prinplup","Simisage","Smeargle","Solrock","Tangela","Vigoroth","Duosion","Fraxure","Frillish","Hippopotas","Kadabra","Pawniard","Probopass","Relicanth","Rotom-Frost","Sandslash","Shedinja","Stoutland","Trevenant","Vanilluxe"],
        },
        pu: {
            // http://www.smogon.com/forums/threads/pu-viability-rankings.3528743/
            S: ["Stoutland","Muk"],
            A: ["Rotom-Frost","Monferno","Golem","Leafeon","Floatzel","Mr. Mime","Grumpig","Mawile","Zebstrika","Clefairy","Vullaby","Combusken","Pawniard","Cacturne","Dodrio","Gourgeist-Super","Metang","Rapidash","Lumineon","Jumpluff","Bouffalant","Regice","Chatot","Electrode","Duosion","Articuno","Stunfisk","Roselia","Audino","Probopass","Relicanth","Kadabra","Arbok","Swanna"],
            B: ["Politoed","Drifblim","Dusknoir","Quilladin","Huntail","Cryogonal","Gabite","Beheeyem","Camerupt","Lapras","Prinplup","Rotom-Fan","Altaria","Ninjask","Murkrow","Tangela","Raichu","Crustle","Gorebyss","Misdreavus","Ninetales","Pelipper","Purugly","Simipour","Simisage","Smeargle","Solrock","Trapinch","Ursaring","Vibrava","Armaldo","Basculin","Chinchou","Electabuzz","Fraxure","Gogoat","Golduck","Gourgeist-Small","Hippopotas","Kingler","Klang","Marowak","Rampardos","Sawsbuck","Simisear","Trevenant","Zweilous"],
            C: ["Ampharos","Avalugg","Bronzor","Glalie","Krokorok","Leavanny","Mightyena","Regigigas","Servine","Volbeat","Beartic","Butterfree","Dusclops","Meowstic-M","Munchlax","Seaking","Venipede","Carbink","Furfrou","Glaceon","Hypno","Lickilicky","Lopunny","Swoobat","Torkoal","Wartortle","Wigglytuff"],
        },
        lc: {
            // http://www.smogon.com/forums/threads/lc-viability-rankings-2-0.3547566/
            S: ["Diglett","Mienfoo","Pawniard","Porygon"],
            A: ["Fletchling","Foongus","Magnemite","Shellder","Timburr","Vullaby","Abra","Carvanha","Chinchou","Cottonee","Gastly","Gothita","Ponyta","Snivy","Archen","Corphish","Croagunk","Drilbur","Ferroseed","Omanyte","Snubbull","Spritzee","Staryu","Tirtouga"],
            B: ["Aipom","Dwebble","Hippopotas","Larvesta","Munchlax","Onix","Scraggy","Skrelp","Vulpix","Bellsprout","Bunnelby","Cranidos","Doduo","Elekid","Houndour","Pancham","Pumpkaboo-Super","Riolu","Surskit","Taillow","Torchic","Amaura","Clamperl","Deerling","Honedge","Magby","Shellos","Slowpoke","Stunky","Tentacool","Zigzagoon"],
            C: ["Aron","Anorith","Axew","Buneary","Chespin","Darumaka","Frillish","Kabuto","Lickitung","Lileep","Numel","Rufflet","Sandile","Sandshrew","Snover","Trapinch","Trubbish","Tyrunt","Wynaut","Bulbasaur","Dratini","Exeggcute","Geodude","Inkay","Koffing","Meowth","Natu","Pumpkaboo-Small","Purrloin","Spinarak","Teddiursa","Venipede","Budew","Cubone","Goldeen","Karrablast","Larvitar","Machop","Mankey","Mantyke","Nosepass","Remoraid","Shelmet","Togepi","Wingull","Wooper","Zorua"],
        },
        doubles: {
            // http://www.smogon.com/forums/threads/doubles-ou-viability-rankings.3535930/
            S: ["Aegislash","Amoonguss","Azumarill","Charizard","Diancie","Gardevoir","Heatran","Jirachi","Kangaskhan","Landorus-Therian","Thundurus","Volcanion"],
            A: ["Hoopa-Unbound","Hydreigon","Keldeo","Kyurem-Black","Latios","Rotom-Wash","Talonflame"],
            B: ["Bisharp","Cresselia","Deoxys-Attack","Ferrothorn","Gengar","Gyarados","Kingdra","Landorus","Politoed","Porygon2","Rotom-Heat","Salamence","Scrafty","Sylveon","Terrakion","Venusaur","Volcarona"],
            C: ["Blaziken","Breloom","Conkeldurr","Gastrodon","Genesect","Infernape","Jellicent","Ludicolo","Metagross","Mew","Rhyperior","Suicune","Weavile","Zapdos"],
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
            // http://www.smogon.com/forums/threads/uu-old-gens-hub.3576780/#post-6891706
            S: ["Kangaskhan","Hypno","Omastar"],
            A: ["Scyther","Gligar","Solrock","Walrein","Tentacruel","Lunatone","Nidoking","Cradily","Ninetales","Fearow","Grumpig","Muk","Sharpedo","Blastoise","Aggron","Altaria","Vileplume","Lanturn","Golem","Electrode","Electabuzz","Manectric","Pinsir","Hitmonlee","Primeape"],
            B: ["Slowking","Sandslash","Nidoqueen","Granbull","Camerupt","Hitmontop","Quagsire","Clefable","Misdreavus","Kabutops","Banette","Qwilfish","Meganium","Gorebyss","Ampharos","Shiftry","Linoone","Golduck","Feraligatr","Poliwrath","Shedinja","Magmar","Victreebel","Raichu"],
            C: ["Mantine","Mr. Mime","Rapidash","Stantler","Politoed","Sableye","Azumarill","Xatu","Exploud","Mawile","Persian","Roselia","Absol","Sneasel","Venomoth","Girafarig"],
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
            B: ["Forretress","Machamp","Marowak","Miltank","Misdreavus","Starmie","Umbreon","Blissey","Dragonite","Heracross","Jolteon","Porygon2","Rhydon"],
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
