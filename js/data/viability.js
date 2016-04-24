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
            // http://www.smogon.com/forums/threads/oras-ou-viability-ranking-thread-v4-see-post-1254-page-51.3553516/
            S: ["Clefable","Keldeo","Tornadus-Therian"],
            A: ["Alakazam","Azumarill","Bisharp","Charizard","Diancie","Excadrill","Ferrothorn","Garchomp","Heatran","Landorus-Therian","Lopunny","Latios","Manaphy","Metagross","Rotom-Wash","Sableye","Scizor","Talonflame","Thundurus","Tyranitar","Volcanion","Weavile","Gardevoir","Gengar","Gliscor","Gyarados","Jirachi","Kyurem-Black","Latias","Medicham","Serperior","Skarmory","Slowbro","Venusaur","Aerodactyl","Altaria","Amoonguss","Breloom","Hippowdon","Klefki","Magnezone","Manectric","Mew","Pinsir","Starmie","Terrakion"],
            B: ["Celebi","Chansey","Diggersby","Dragonite","Gastrodon","Heracross","Kingdra","Mamoswine","Politoed","Raikou","Suicune","Tangrowth","Volcarona","Beedrill","Crawdaunt","Dragalge","Feraligatr","Gallade","Hydreigon","Kabutops","Nidoking","Quagsire","Reuniclus","Sharpedo","Slowking","Swampert","Togekiss","Victini","Alomomola","Empoleon","Hawlucha","Lucario","Mandibuzz","Omastar","Pidgeot","Sceptile","Scolipede","Tentacruel","Thundurus-Therian","Toxicroak","Zapdos"],
            C: ["Ampharos","Azelf","Blastoise","Chesnaught","Cobalion","Conkeldurr","Entei","Hoopa","Infernape","Kyurem","Rhyperior","Seismitoad","Staraptor","Tyrantrum","Zygarde","Aggron","Banette","Bronzong","Cofagrigus","Cresselia","Dugtrio","Goodra","Houndoom","Magneton","Porygon2","Rotom-Heat","Whimsicott","Absol","Blissey","Cloyster","Forretress","Froslass","Jellicent","Nidoqueen","Shaymin","Sylveon"],
        },
        uu: {
            // http://www.smogon.com/forums/threads/oras-uu-viability-rankings-v4.3555277/
            S: ["Hydreigon","Aerodactyl","Salamence","Suicune"],
            A: ["Entei","Swampert","Cobalion","Gyarados","Alakazam","Mamoswine","Florges","Krookodile","Sceptile","Beedrill","Zapdos","Sharpedo","Sableye","Whimsicott","Reuniclus","Feraligatr","Blastoise","Nidoqueen","Infernape","Empoleon","Toxicroak","Heracross","Snorlax","Crawdaunt","Cresselia","Azelf"],
            B: ["Tentacruel","Alomomola","Kyurem","Houndoom","Gardevoir","Slowking","Lucario","Crobat","Tornadus","Mienshao","Rotom-Mow","Escavalier","Milotic","Roserade","Chandelure","Absol","Froslass","Nidoking","Porygon2","Abomasnow","Aggron","Ampharos","Bronzong","Chesnaught","Diancie","Doublade","Dragalge","Gligar","Hoopa","Heliolisk","Jellicent","Machamp","Mandibuzz","Metagross","Porygon-Z","Rotom-Heat","Shaymin","Slurpuff","Tyrantrum","Umbreon","Venomoth","Arcanine","Aromatisse","Blissey","Cloyster","Darmanitan","Espeon","Forretress","Galvantula","Qwilfish","Shuckle","Steelix","Tangrowth","Virizion"],
            C: ["Amoonguss","Donphan","Dugtrio","Fletchinder","Haxorus","Honchkrow","Kingdra","Magneton","Meloetta","Seismitoad","Weezing","Uxie","Yanmega","Zoroark","Gastrodon","Goodra","Moltres","Noivern","Omastar","Pangoro","Rhyperior","Togetic","Accelgor","Camerupt","Druddigon","Exploud","Flygon","Glalie","Granbull","Hitmonlee","Jolteon","Quagsire","Shedinja","Venusaur"],
        },
        ru: {
            // http://www.smogon.com/forums/threads/ru-viability-rankings-thread.3558546/
            S: ["Steelix","Tyrantrum","Virizion"],
            A: ["Alomomola","Diancie","Flygon","Meloetta","Sigilyph","Venusaur","Abomasnow","Camerupt","Emboar","Glalie","Hoopa","Fletchinder","Medicham","Seismitoad","Slowking","Sneasel","Spiritomb","Absol","Blastoise","Delphox","Drapion","Hitmonlee","Houndoom","Jellicent","Manectric","Rhyperior","Sawk","Tangrowth"],
            B: ["Aerodactyl","Amoonguss","Escavalier","Exploud","Gallade","Gurdurr","Jolteon","Qwilfish","Rotom","Rotom-Mow","Scrafty","Accelgor","Aggron","Aromatisse","Audino","Braviary","Bronzong","Druddigon","Eelektross","Granbull","Magneton","Malamar","Mesprit","Poliwrath","Registeel","Samurott","Togetic","Dugtrio","Garbodor","Mawile","Musharna","Piloswine","Pelipper","Roselia","Smeargle","Vivillon","Weezing"],
            C: ["Clawitzer","Hariyama","Hitmontop","Jynx","Omastar","Quagsire","Rotom-Fan","Sceptile","Shiftry","Skuntank","Uxie","Archeops","Articuno","Ferroseed","Golbat","Gourgeist-Super","Kabutops","Ludicolo","Mr. Mime","Trevenant","Xatu","Aurorus","Banette","Barbaracle","Cofagrigus","Gastrodon","Klinklang","Lanturn","Liepard","Rotom-Frost"],
        },
        nu: {
            // http://www.smogon.com/forums/threads/oras-nu-viability-rankings.3555650/
            S: ["Tauros"],
            A: ["Audino","Garbodor","Jynx","Kangaskhan","Magmortar","Musharna","Pyroar","Rhydon","Rotom","Samurott","Shiftry","Steelix","Swellow","Archeops","Barbaracle","Charizard","Combusken","Floatzel","Lanturn","Lilligant","Ludicolo","Mesprit","Scyther","Vivillon","Weezing","Xatu","Abomasnow","Aurorus","Hariyama","Hitmonchan","Kabutops","Malamar","Mismagius","Omastar","Skuntank"],
            B: ["Ferroseed","Gourgeist-Super","Haunter","Piloswine","Pinsir","Primeape","Rotom-Fan","Vileplume","Carracosta","Claydol","Grumpig","Liepard","Manectric","Mantine","Miltank","Pelipper","Poliwrath","Sliggoo","Articuno","Cacturne","Camerupt","Chatot","Electivire","Golurk","Gourgeist-Small","Misdreavus","Mr. Mime","Ninetales","Prinplup","Quagsire","Regirock","Roselia","Torterra","Zangoose"],
            C: ["Bouffalant","Clefairy","Cradily","Exeggutor","Gorebyss","Kecleon","Klinklang","Lapras","Mawile","Raichu","Tangela","Throh","Victreebel","Altaria","Beheeyem","Drifblim","Duosion","Gogoat","Jumpluff","Kadabra","Linoone","Marowak","Muk","Regice","Relicanth","Vanilluxe","Cryogonal","Dodrio","Electrode","Flareon","Fraxure","Frogadier","Golem","Ninjask","Pawniard","Rampardos","Rotom-Frost","Sandslash","Shedinja","Vigoroth","Volbeat","Vullaby"],
        },
        pu: {
            // http://www.smogon.com/forums/threads/pu-viability-rankings.3528743/
            S: ["Floatzel","Machoke","Rotom-Frost"],
            A: ["Monferno","Golem","Stoutland","Grumpig","Mr. Mime","Audino","Roselia","Stunfisk","Zebstrika","Pawniard","Dodrio","Regice","Vullaby","Chatot","Relicanth","Leafeon","Jumpluff","Simipour","Gourgeist-Super","Kadabra","Bouffalant","Simisage","Electrode","Arbok","Cryogonal","Politoed","Raichu","Metang","Crustle","Articuno","Dusknoir","Tangela","Probopass","Fraxure","Ursaring"],
            B: ["Ninjask","Murkrow","Misdreavus","Quilladin","Altaria","Swanna","Rapidash","Gabite","Huntail","Simisear","Clefairy","Ninetales","Camerupt","Gogoat","Basculin","Drifblim","Duosion","Golduck","Gorebyss","Gourgeist-Small","Hippopotas","Lapras","Leavanny","Lumineon","Mightyena","Prinplup","Purugly","Sawsbuck","Solrock","Armaldo","Beheeyem","Electabuzz","Kingler","Klang","Seaking","Venipede","Vibrava","Volbeat"],
            C: ["Avalugg","Beartic","Glalie","Krokorok","Marowak","Meowstic-M","Rampardos","Regigigas","Trapinch","Zweilous","Butterfree","Carbink","Dusclops","Furfrou","Hypno","Luxray","Munchlax","Weepinbell","Ampharos","Banette","Chinchou","Glaceon","Lickilicky","Lopunny","Shedinja","Swoobat","Swalot","Torkoal","Vanilluxe","Wartortle","Wigglytuff"],
        },
        lc: {
            // http://www.smogon.com/forums/threads/lc-viability-rankings-2-0.3547566/
            S: ["Diglett","Mienfoo","Pawniard","Porygon"],
            A: ["Abra","Drifloon","Fletchling","Gastly","Magnemite","Timburr","Archen","Chinchou","Drilbur","Foongus","Ponyta","Snivy","Snubbull","Spritzee","Vullaby","Carvanha","Corphish","Ferroseed","Gothita","Houndour","Omanyte","Pumpkaboo-Super","Shellder","Skrelp","Staryu","Vulpix"],
            B: ["Bellsprout","Bunnelby","Cottonee","Croagunk","Dwebble","Hippopotas","Larvesta","Munchlax","Scraggy","Tirtouga","Zigzagoon","Aipom","Cranidos","Doduo","Elekid","Onix","Pancham","Riolu","Stunky","Surskit","Taillow","Torchic","Amaura","Chespin","Honedge","Lickitung","Pumpkaboo-Small","Shellos","Slowpoke","Tentacool"],
            C: ["Aron","Anorith","Axew","Buneary","Darumaka","Frillish","Inkay","Koffing","Lileep","Magby","Numel","Sandshrew","Snover","Trubbish","Tyrunt","Wynaut","Bulbasaur","Clamperl","Dratini","Geodude","Kabuto","Mantyke","Meowth","Natu","Purrloin","Spinarak","Teddiursa","Venipede","Cubone","Deerling","Goldeen","Karrablast","Larvitar","Nosepass","Remoraid","Rufflet","Shelmet","Togepi","Wingull","Zorua"],
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
            S: ["Charizard","Jynx","Medicham","Tauros"],
            A: ["Haunter","Hypno","Magmortar","Regirock","Skuntank","Slowking","Vileplume","Gardevoir","Gligar","Hitmonchan","Lickilicky","Manectric","Sandslash","Cacturne","Dodrio","Floatzel","Magneton","Meganium","Nidoqueen","Quagsire","Whiscash"],
            B: ["Drifblim","Electrode","Golduck","Golem","Hippopotas","Lapras","Ninetales","Politoed","Shiftry","Snover","Typhlosion","Venomoth","Victreebel","Cradily","Dusclops","Gabite","Glalie","Gorebyss","Piloswine","Pinsir","Poliwrath","Walrein","Camerupt","Grumpig","Jumpluff","Linoone","Mantine","Marowak","Porygon2","Regice","Rhydon"],
            C: ["Articuno","Banette","Electabuzz","Gastrodon","Glaceon","Machoke","Muk","Persian","Probopass","Purugly","Raichu","Roselia","Sharpedo","Slaking","Sneasel","Torkoal","Ampharos","Armaldo","Crawdaunt","Huntail","Kadabra","Lopunny","Mr. Mime","Monferno","Raticate","Relicanth","Xatu","Bastiodon","Bellossom","Butterfree","Chatot","Dewgong","Dragonair","Flareon","Girafarig","Golbat","Luxray","Metang","Rampardos","Rapidash","Swalot","Vigoroth","Zangoose"],
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
            // adapted from http://www.smogon.com/forums/threads/rby-viability-ranking-thread.3486845/
            // moved Lapras and Rhydon down one rank each based on mechanics changes and SPL usage
            S: ["Chansey","Exeggutor","Snorlax","Tauros"],
            A: ["Alakazam","Starmie"],
            B: ["Gengar","Golem","Jynx","Lapras","Slowbro","Zapdos"],
            C: ["Articuno","Cloyster","Dragonite","Hypno","Jolteon","Persian","Rhydon","Victreebel"],
        },
        // couldn't find anything for RBY UU :(
    },
};
