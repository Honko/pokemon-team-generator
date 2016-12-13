const MEGA_ITEMS = ["Abomasite","Absolite","Aerodactylite","Aggronite","Alakazite","Altarianite","Ampharosite","Audinite","Banettite","Beedrillite","Blastoisinite","Blazikenite","Cameruptite","Charizardite X","Charizardite Y","Diancite","Galladite","Garchompite","Gardevoirite","Gengarite","Glalitite","Gyaradosite","Heracronite","Houndoominite","Kangaskhanite","Latiasite","Latiosite","Lopunnite","Lucarionite","Manectite","Mawilite","Medichamite","Metagrossite","Mewtwonite X","Mewtwonite Y","Pidgeotite","Pinsirite","Sablenite","Salamencite","Sceptilite","Scizorite","Sharpedonite","Slowbronite","Steelixite","Swampertite","Tyranitarite","Venusaurite"];

var itemdex = {
  "Abomasite": {
    gens: ["xy","sm"],
    altTrigger: {"Abomasnow":"Mega"},
  },
  "Absolite": {
    gens: ["xy","sm"],
    altTrigger: {"Absol":"Mega"},
  },
  "Absorb Bulb": {
    gens: ["bw","xy","sm"],
  },
  "Adamant Orb": {
    gens: ["dpp","bw","xy","sm"],
  },
  "Adrenaline Orb": {
    gens: ["sm"],
  },
  "Aerodactylite": {
    gens: ["xy","sm"],
    altTrigger: {"Aerodactyl":"Mega"},
  },
  "Aggronite": {
    gens: ["xy","sm"],
    altTrigger: {"Aggron":"Mega"},
  },
  "Aguav Berry": {
    gens: ["adv","dpp","bw","xy","sm"],
  },
  "Air Balloon": {
    gens: ["bw","xy","sm"],
  },
  "Alakazite": {
    gens: ["xy","sm"],
    altTrigger: {"Alakazam":"Mega"},
  },
  "Aloraichium Z": {
    gens: ["sm"],
  },
  "Altarianite": {
    gens: ["xy","sm"],
    altTrigger: {"Altaria":"Mega"},
  },
  "Ampharosite": {
    gens: ["xy","sm"],
    altTrigger: {"Ampharos":"Mega"},
  },
  "Apicot Berry": {
    gens: ["adv","dpp","bw","xy","sm"],
  },
  "Aspear Berry": {
    gens: ["adv","dpp","bw","xy","sm"],
  },
  "Assault Vest": {
    gens: ["xy","sm"],
  },
  "Audinite": {
    gens: ["xy","sm"],
    altTrigger: {"Audino":"Mega"},
  },
  "Babiri Berry": {
    gens: ["dpp","bw","xy","sm"],
  },
  "Banettite": {
    gens: ["xy","sm"],
    altTrigger: {"Banette":"Mega"},
  },
  "Beast Ball": {
    gens: ["sm"],
  },
  "Beedrillite": {
    gens: ["xy","sm"],
    altTrigger: {"Beedrill":"Mega"},
  },
  "Berry": {
    gens: ["gsc"],
  },
  "Berry Juice": {
    gens: ["gsc","adv","dpp","bw","xy","sm"],
  },
  "Berserk Gene": {
    gens: ["gsc"],
  },
  "Big Root": {
    gens: ["dpp","bw","xy","sm"],
  },
  "Binding Band": {
    gens: ["bw","xy","sm"],
  },
  "Bitter Berry": {
    gens: ["gsc"],
  },
  "Black Belt": {
    gens: ["gsc","adv","dpp","bw","xy","sm"],
  },
  "Black Glasses": {
    gens: ["gsc","adv","dpp","bw","xy","sm"],
  },
  "Black Sludge": {
    gens: ["dpp","bw","xy","sm"],
  },
  "Blastoisinite": {
    gens: ["xy","sm"],
    altTrigger: {"Blastoise":"Mega"},
  },
  "Blazikenite": {
    gens: ["xy","sm"],
    altTrigger: {"Blaziken":"Mega"},
  },
  "Blue Orb": {
    gens: ["xy","sm"],
    altTrigger: {"Kyogre":"Primal"},
  },
  "Bright Powder": {
    gens: ["gsc","adv","dpp","bw","xy","sm"],
  },
  "Bug Gem": {
    gens: ["bw"],
  },
  "Bug Memory": {
    gens: ["sm"],
  },
  "Buginium Z": {
    gens: ["sm"],
  },
  "Burn Drive": {
    gens: ["bw","xy","sm"],
  },
  "Cameruptite": {
    gens: ["xy","sm"],
    altTrigger: {"Camerupt":"Mega"},
  },
  "Cell Battery": {
    gens: ["bw","xy","sm"],
  },
  "Charcoal": {
    gens: ["gsc","adv","dpp","bw","xy","sm"],
  },
  "Charizardite X": {
    gens: ["xy","sm"],
    altTrigger: {"Charizard":"Mega-X"},
  },
  "Charizardite Y": {
    gens: ["xy","sm"],
    altTrigger: {"Charizard":"Mega-Y"},
  },
  "Charti Berry": {
    gens: ["dpp","bw","xy","sm"],
  },
  "Cheri Berry": {
    gens: ["adv","dpp","bw","xy","sm"],
  },
  "Chesto Berry": {
    gens: ["adv","dpp","bw","xy","sm"],
  },
  "Chilan Berry": {
    gens: ["adv","dpp","bw","xy","sm"],
  },
  "Chill Drive": {
    gens: ["bw","xy","sm"],
  },
  "Choice Band": {
    gens: ["adv","dpp","bw","xy","sm"],
  },
  "Choice Scarf": {
    gens: ["dpp","bw","xy","sm"],
  },
  "Choice Specs": {
    gens: ["dpp","bw","xy","sm"],
  },
  "Chople Berry": {
    gens: ["dpp","bw","xy","sm"],
  },
  "Cleanse Tag": {
    gens: ["gsc","adv","dpp","bw","xy","sm"],
  },
  "Coba Berry": {
    gens: ["dpp","bw","xy","sm"],
  },
  "Colbur Berry": {
    gens: ["dpp","bw","xy","sm"],
  },
  "Custap Berry": {
    gens: ["dpp","bw","xy","sm"],
  },
  "Damp Rock": {
    gens: ["dpp","bw","xy","sm"],
  },
  "Dark Gem": {
    gens: ["bw"],
  },
  "Dark Memory": {
    gens: ["sm"],
  },
  "Darkinium Z": {
    gens: ["sm"],
  },
  "Decidium Z": {
    gens: ["sm"],
  },
  "Deep Sea Scale": {
    gens: ["adv","dpp","bw","xy","sm"],
  },
  "Deep Sea Tooth": {
    gens: ["adv","dpp","bw","xy","sm"],
  },
  "Destiny Knot": {
    gens: ["dpp","bw","xy","sm"],
  },
  "Diancite": {
    gens: ["xy","sm"],
    altTrigger: {"Diancie":"Mega"},
  },
  "Douse Drive": {
    gens: ["bw","xy","sm"],
  },
  "Draco Plate": {
    gens: ["dpp","bw","xy","sm"],
  },
  "Dragon Fang": {
    gens: ["gsc","adv","dpp","bw","xy","sm"],
  },
  "Dragon Gem": {
    gens: ["bw"],
  },
  "Dragon Memory": {
    gens: ["sm"],
  },
  "Dragonium Z": {
    gens: ["sm"],
  },
  "Dread Plate": {
    gens: ["dpp","bw","xy","sm"],
  },
  "Earth Plate": {
    gens: ["dpp","bw","xy","sm"],
  },
  "Eevium Z": {
    gens: ["sm"],
  },
  "Eject Button": {
    gens: ["bw","xy","sm"],
  },
  "Electric Gem": {
    gens: ["bw"],
  },
  "Electric Memory": {
    gens: ["sm"],
  },
  "Electric Seed": {
    gens: ["sm"],
  },
  "Electrium Z": {
    gens: ["sm"],
  },
  "Enigma Berry": {
    gens: ["adv","dpp","bw","xy","sm"],
  },
  "Eviolite": {
    gens: ["bw","xy","sm"],
  },
  "Expert Belt": {
    gens: ["dpp","bw","xy","sm"],
  },
  "Fairium Z": {
    gens: ["sm"],
  },
  "Fairy Gem": {
    gens: [],
  },
  "Fairy Memory": {
    gens: ["sm"],
  },
  "Fighting Gem": {
    gens: ["bw"],
  },
  "Fighting Memory": {
    gens: ["sm"],
  },
  "Fightinium Z": {
    gens: ["sm"],
  },
  "Figy Berry": {
    gens: ["adv","dpp","bw","xy","sm"],
  },
  "Fire Gem": {
    gens: ["bw"],
  },
  "Fire Memory": {
    gens: ["sm"],
  },
  "Firium Z": {
    gens: ["sm"],
  },
  "Fist Plate": {
    gens: ["dpp","bw","xy","sm"],
  },
  "Flame Orb": {
    gens: ["dpp","bw","xy","sm"],
  },
  "Flame Plate": {
    gens: ["dpp","bw","xy","sm"],
  },
  "Float Stone": {
    gens: ["bw","xy","sm"],
  },
  "Flying Gem": {
    gens: ["bw"],
  },
  "Flying Memory": {
    gens: ["sm"],
  },
  "Flyinium Z": {
    gens: ["sm"],
  },
  "Focus Band": {
    gens: ["gsc","adv","dpp","bw","xy","sm"],
  },
  "Focus Sash": {
    gens: ["dpp","bw","xy","sm"],
  },
  "Full Incense": {
    gens: ["dpp","bw","xy","sm"],
  },
  "Galladite": {
    gens: ["xy","sm"],
    altTrigger: {"Gallade":"Mega"},
  },
  "Ganlon Berry": {
    gens: ["adv","dpp","bw","xy","sm"],
  },
  "Garchompite": {
    gens: ["xy","sm"],
    altTrigger: {"Garchomp":"Mega"},
  },
  "Gardevoirite": {
    gens: ["xy","sm"],
    altTrigger: {"Gardevoir":"Mega"},
  },
  "Gengarite": {
    gens: ["xy","sm"],
    altTrigger: {"Gengar":"Mega"},
  },
  "Ghost Gem": {
    gens: ["bw"],
  },
  "Ghost Memory": {
    gens: ["sm"],
  },
  "Ghostium Z": {
    gens: ["sm"],
  },
  "Glalitite": {
    gens: ["xy","sm"],
    altTrigger: {"Glalie":"Mega"},
  },
  "Gold Berry": {
    gens: ["gsc"],
  },
  "Grass Gem": {
    gens: ["bw"],
  },
  "Grass Memory": {
    gens: ["sm"],
  },
  "Grassium Z": {
    gens: ["sm"],
  },
  "Grassy Seed": {
    gens: ["sm"],
  },
  "Grip Claw": {
    gens: ["dpp","bw","xy","sm"],
  },
  "Griseous Orb": {
    gens: ["dpp","bw","xy","sm"],
  },
  "Ground Gem": {
    gens: ["bw"],
  },
  "Ground Memory": {
    gens: ["sm"],
  },
  "Groundium Z": {
    gens: ["sm"],
  },
  "Gyaradosite": {
    gens: ["xy","sm"],
    altTrigger: {"Gyarados":"Mega"},
  },
  "Haban Berry": {
    gens: ["dpp","bw","xy","sm"],
  },
  "Hard Stone": {
    gens: ["gsc","adv","dpp","bw","xy","sm"],
  },
  "Heat Rock": {
    gens: ["dpp","bw","xy","sm"],
  },
  "Heracronite": {
    gens: ["xy","sm"],
    altTrigger: {"Heracross":"Mega"},
  },
  "Houndoominite": {
    gens: ["xy","sm"],
    altTrigger: {"Houndoom":"Mega"},
  },
  "Iapapa Berry": {
    gens: ["adv","dpp","bw","xy","sm"],
  },
  "Ice Berry": {
    gens: ["gsc"],
  },
  "Ice Gem": {
    gens: ["bw"],
  },
  "Ice Memory": {
    gens: ["sm"],
  },
  "Icicle Plate": {
    gens: ["dpp","bw","xy","sm"],
  },
  "Icium Z": {
    gens: ["sm"],
  },
  "Icy Rock": {
    gens: ["dpp","bw","xy","sm"],
  },
  "Incinium Z": {
    gens: ["sm"],
  },
  "Insect Plate": {
    gens: ["dpp","bw","xy","sm"],
  },
  "Iron Ball": {
    gens: ["dpp","bw","xy","sm"],
  },
  "Iron Plate": {
    gens: ["dpp","bw","xy","sm"],
  },
  "Jaboca Berry": {
    gens: ["dpp","bw","xy","sm"],
  },
  "Kangaskhanite": {
    gens: ["xy","sm"],
    altTrigger: {"Kangaskhan":"Mega"},
  },
  "Kasib Berry": {
    gens: ["dpp","bw","xy","sm"],
  },
  "Kebia Berry": {
    gens: ["dpp","bw","xy","sm"],
  },
  "Kee Berry": {
    gens: ["xy","sm"],
  },
  "Kelpsy Berry": {
    gens: ["adv","dpp","bw","xy","sm"],
  },
  "King's Rock": {
    gens: ["gsc","adv","dpp","bw","xy","sm"],
  },
  "Lagging Tail": {
    gens: ["dpp","bw","xy","sm"],
  },
  "Lansat Berry": {
    gens: ["adv","dpp","bw","xy","sm"],
  },
  "Latiasite": {
    gens: ["xy","sm"],
    altTrigger: {"Latias":"Mega"},
  },
  "Latiosite": {
    gens: ["xy","sm"],
    altTrigger: {"Latios":"Mega"},
  },
  "Lax Incense": {
    gens: ["adv","dpp","bw","xy","sm"],
  },
  "Leftovers": {
    gens: ["gsc","adv","dpp","bw","xy","sm"],
  },
  "Leppa Berry": {
    gens: ["adv","dpp","bw","xy","sm"],
  },
  "Liechi Berry": {
    gens: ["adv","dpp","bw","xy","sm"],
  },
  "Life Orb": {
    gens: ["dpp","bw","xy","sm"],
  },
  "Light Ball": {
    gens: ["gsc","adv","dpp","bw","xy","sm"],
  },
  "Light Clay": {
    gens: ["dpp","bw","xy","sm"],
  },
  "Lopunnite": {
    gens: ["xy","sm"],
    altTrigger: {"Lopunny":"Mega"},
  },
  "Lucarionite": {
    gens: ["xy","sm"],
    altTrigger: {"Lucario":"Mega"},
  },
  "Lucky Punch": {
    gens: ["gsc","adv","dpp","bw","xy","sm"],
  },
  "Lum Berry": {
    gens: ["adv","dpp","bw","xy","sm"],
  },
  "Luminous Moss": {
    gens: ["xy","sm"],
  },
  "Lustrous Orb": {
    gens: ["dpp","bw","xy","sm"],
  },
  "Macho Brace": {
    gens: ["adv","dpp","bw","xy","sm"],
  },
  "Magmarizer": {
    gens: ["dpp","bw","xy","sm"],
  },
  "Magnet": {
    gens: ["gsc","adv","dpp","bw","xy","sm"],
  },
  "Mago Berry": {
    gens: ["adv","dpp","bw","xy","sm"],
  },
  "Mail": {
    gens: ["adv","dpp","bw","xy","sm"],
  },
  "Manectite": {
    gens: ["xy","sm"],
    altTrigger: {"Manectric":"Mega"},
  },
  "Maranga Berry": {
    gens: ["xy","sm"],
  },
  "Marshadium Z": {
    gens: ["sm"],
  },
  "Mawilite": {
    gens: ["xy","sm"],
    altTrigger: {"Mawile":"Mega"},
  },
  "Meadow Plate": {
    gens: ["dpp","bw","xy","sm"],
  },
  "Medichamite": {
    gens: ["xy","sm"],
    altTrigger: {"Medicham":"Mega"},
  },
  "Mental Herb": {
    gens: ["adv","dpp","bw","xy","sm"],
  },
  "Metagrossite": {
    gens: ["xy","sm"],
    altTrigger: {"Metagross":"Mega"},
  },
  "Metal Coat": {
    gens: ["gsc","adv","dpp","bw","xy","sm"],
  },
  "Metal Powder": {
    gens: ["gsc","adv","dpp","bw","xy","sm"],
  },
  "Metronome": {
    gens: ["dpp","bw","xy","sm"],
  },
  "Mewnium Z": {
    gens: ["sm"],
  },
  "Mewtwonite X": {
    gens: ["xy","sm"],
    altTrigger: {"Mewtwo":"Mega-X"},
  },
  "Mewtwonite Y": {
    gens: ["xy","sm"],
    altTrigger: {"Mewtwo":"Mega-Y"},
  },
  "Micle Berry": {
    gens: ["dpp","bw","xy","sm"],
  },
  "Mind Plate": {
    gens: ["dpp","bw","xy","sm"],
  },
  "Mint Berry": {
    gens: ["gsc"],
  },
  "Miracle Berry": {
    gens: ["gsc"],
  },
  "Miracle Seed": {
    gens: ["gsc","adv","dpp","bw","xy","sm"],
  },
  "Misty Seed": {
    gens: ["sm"],
  },
  "Muscle Band": {
    gens: ["dpp","bw","xy","sm"],
  },
  "Mystery Berry": {
    gens: ["gsc"],
  },
  "Mystic Water": {
    gens: ["gsc","adv","dpp","bw","xy","sm"],
  },
  "Never-Melt Ice": {
    gens: ["gsc","adv","dpp","bw","xy","sm"],
  },
  "Normal Gem": {
    gens: ["bw","xy","sm"],
  },
  "Normalium Z": {
    gens: ["sm"],
  },
  "Occa Berry": {
    gens: ["dpp","bw","xy","sm"],
  },
  "Odd Incense": {
    gens: ["dpp","bw","xy","sm"],
  },
  "Oran Berry": {
    gens: ["adv","dpp","bw","xy","sm"],
  },
  "PRZCure Berry": {
    gens: ["gsc"],
  },
  "PSNCure Berry": {
    gens: ["gsc"],
  },
  "Passho Berry": {
    gens: ["dpp","bw","xy","sm"],
  },
  "Payapa Berry": {
    gens: ["dpp","bw","xy","sm"],
  },
  "Pecha Berry": {
    gens: ["adv","dpp","bw","xy","sm"],
  },
  "Persim Berry": {
    gens: ["adv","dpp","bw","xy","sm"],
  },
  "Petaya Berry": {
    gens: ["adv","dpp","bw","xy","sm"],
  },
  "Pidgeotite": {
    gens: ["xy","sm"],
    altTrigger: {"Pidgeot":"Mega"},
  },
  "Pikanium Z": {
    gens: ["sm"],
  },
  "Pikashunium Z": {
    gens: ["sm"],
  },
  "Pink Bow": {
    gens: ["gsc"],
  },
  "Pinsirite": {
    gens: ["xy","sm"],
    altTrigger: {"Pinsir":"Mega"},
  },
  "Pixie Plate": {
    gens: ["xy","sm"],
  },
  "Poison Barb": {
    gens: ["gsc","adv","dpp","bw","xy","sm"],
  },
  "Poison Gem": {
    gens: ["bw"],
  },
  "Poison Memory": {
    gens: ["sm"],
  },
  "Poisonium Z": {
    gens: ["sm"],
  },
  "Polka Dot Bow": {
    gens: ["gsc"],
  },
  "Power Anklet": {
    gens: ["dpp","bw","xy","sm"],
  },
  "Power Band": {
    gens: ["dpp","bw","xy","sm"],
  },
  "Power Belt": {
    gens: ["dpp","bw","xy","sm"],
  },
  "Power Bracer": {
    gens: ["dpp","bw","xy","sm"],
  },
  "Power Herb": {
    gens: ["dpp","bw","xy","sm"],
  },
  "Power Lens": {
    gens: ["dpp","bw","xy","sm"],
  },
  "Power Weight": {
    gens: ["dpp","bw","xy","sm"],
  },
  "Primarium Z": {
    gens: ["sm"],
  },
  "Protective Pads": {
    gens: ["sm"],
  },
  "Psychic Gem": {
    gens: ["bw"],
  },
  "Psychic Memory": {
    gens: ["sm"],
  },
  "Psychic Seed": {
    gens: ["sm"],
  },
  "Psychium Z": {
    gens: ["sm"],
  },
  "Quick Claw": {
    gens: ["gsc","adv","dpp","bw","xy","sm"],
  },
  "Quick Powder": {
    gens: ["dpp","bw","xy","sm"],
  },
  "Rawst Berry": {
    gens: ["adv","dpp","bw","xy","sm"],
  },
  "Razor Claw": {
    gens: ["dpp","bw","xy","sm"],
  },
  "Razor Fang": {
    gens: ["dpp","bw","xy","sm"],
  },
  "Red Card": {
    gens: ["bw","xy","sm"],
  },
  "Red Orb": {
    gens: ["xy","sm"],
    altTrigger: {"Groudon":"Primal"},
  },
  "Rindo Berry": {
    gens: ["dpp","bw","xy","sm"],
  },
  "Rock Gem": {
    gens: ["bw"],
  },
  "Rock Incense": {
    gens: ["dpp","bw","xy","sm"],
  },
  "Rock Memory": {
    gens: ["sm"],
  },
  "Rockium Z": {
    gens: ["sm"],
  },
  "Rocky Helmet": {
    gens: ["bw","xy","sm"],
  },
  "Rose Incense": {
    gens: ["dpp","bw","xy","sm"],
  },
  "Roseli Berry": {
    gens: ["xy","sm"],
  },
  "Rowap Berry": {
    gens: ["dpp","bw","xy","sm"],
  },
  "Sablenite": {
    gens: ["xy","sm"],
    altTrigger: {"Sableye":"Mega"},
  },
  "Safety Goggles": {
    gens: ["xy","sm"],
  },
  "Salac Berry": {
    gens: ["adv","dpp","bw","xy","sm"],
  },
  "Salamencite": {
    gens: ["xy","sm"],
    altTrigger: {"Salamence":"Mega"},
  },
  "Sceptilite": {
    gens: ["xy","sm"],
    altTrigger: {"Sceptile":"Mega"},
  },
  "Scizorite": {
    gens: ["xy","sm"],
    altTrigger: {"Scizor":"Mega"},
  },
  "Scope Lens": {
    gens: ["gsc","adv","dpp","bw","xy","sm"],
  },
  "Sea Incense": {
    gens: ["adv","dpp","bw","xy","sm"],
  },
  "Sharp Beak": {
    gens: ["gsc","adv","dpp","bw","xy","sm"],
  },
  "Sharpedonite": {
    gens: ["xy","sm"],
    altTrigger: {"Sharpedo":"Mega"},
  },
  "Shed Shell": {
    gens: ["dpp","bw","xy","sm"],
  },
  "Shell Bell": {
    gens: ["adv","dpp","bw","xy","sm"],
  },
  "Shock Drive": {
    gens: ["bw","xy","sm"],
  },
  "Shuca Berry": {
    gens: ["dpp","bw","xy","sm"],
  },
  "Silk Scarf": {
    gens: ["adv","dpp","bw","xy","sm"],
  },
  "Silver Powder": {
    gens: ["gsc","adv","dpp","bw","xy","sm"],
  },
  "Sitrus Berry": {
    gens: ["adv","dpp","bw","xy","sm"],
  },
  "Sky Plate": {
    gens: ["dpp","bw","xy","sm"],
  },
  "Slowbronite": {
    gens: ["xy","sm"],
    altTrigger: {"Slowbro":"Mega"},
  },
  "Smooth Rock": {
    gens: ["dpp","bw","xy","sm"],
  },
  "Snorlium Z": {
    gens: ["sm"],
  },
  "Snowball": {
    gens: ["xy","sm"],
  },
  "Soft Sand": {
    gens: ["gsc","adv","dpp","bw","xy","sm"],
  },
  "Soul Dew": {
    gens: ["adv","dpp","bw","xy","sm"],
  },
  "Spell Tag": {
    gens: ["gsc","adv","dpp","bw","xy","sm"],
  },
  "Splash Plate": {
    gens: ["dpp","bw","xy","sm"],
  },
  "Spooky Plate": {
    gens: ["dpp","bw","xy","sm"],
  },
  "Starf Berry": {
    gens: ["adv","dpp","bw","xy","sm"],
  },
  "Steel Gem": {
    gens: ["bw"],
  },
  "Steel Memory": {
    gens: ["sm"],
  },
  "Steelium Z": {
    gens: ["sm"],
  },
  "Steelixite": {
    gens: ["xy","sm"],
    altTrigger: {"Steelix":"Mega"},
  },
  "Stick": {
    gens: ["gsc","adv","dpp","bw","xy","sm"],
  },
  "Sticky Barb": {
    gens: ["dpp","bw","xy","sm"],
  },
  "Stone Plate": {
    gens: ["dpp","bw","xy","sm"],
  },
  "Swampertite": {
    gens: ["xy","sm"],
    altTrigger: {"Swampert":"Mega"},
  },
  "Tanga Berry": {
    gens: ["dpp","bw","xy","sm"],
  },
  "Tapunium Z": {
    gens: ["sm"],
  },
  "Terrain Extender": {
    gens: ["sm"],
  },
  "Thick Club": {
    gens: ["gsc","adv","dpp","bw","xy","sm"],
  },
  "Toxic Orb": {
    gens: ["dpp","bw","xy","sm"],
  },
  "Toxic Plate": {
    gens: ["dpp","bw","xy","sm"],
  },
  "Twisted Spoon": {
    gens: ["gsc","adv","dpp","bw","xy","sm"],
  },
  "Tyranitarite": {
    gens: ["xy","sm"],
    altTrigger: {"Tyranitar":"Mega"},
  },
  "Venusaurite": {
    gens: ["xy","sm"],
    altTrigger: {"Venusaur":"Mega"},
  },
  "Wacan Berry": {
    gens: ["dpp","bw","xy","sm"],
  },
  "Water Gem": {
    gens: ["bw"],
  },
  "Water Memory": {
    gens: ["sm"],
  },
  "Water Stone": {
    gens: ["gsc","adv","dpp","bw","xy","sm"],
  },
  "Waterium Z": {
    gens: ["sm"],
  },
  "Watmel Berry": {
    gens: ["adv","dpp","bw","xy","sm"],
  },
  "Wave Incense": {
    gens: ["dpp","bw","xy","sm"],
  },
  "Weakness Policy": {
    gens: ["xy","sm"],
  },
  "White Herb": {
    gens: ["adv","dpp","bw","xy","sm"],
  },
  "Wide Lens": {
    gens: ["dpp","bw","xy","sm"],
  },
  "Wiki Berry": {
    gens: ["adv","dpp","bw","xy","sm"],
  },
  "Wise Glasses": {
    gens: ["dpp","bw","xy","sm"],
  },
  "Yache Berry": {
    gens: ["dpp","bw","xy","sm"],
  },
  "Zap Plate": {
    gens: ["dpp","bw","xy","sm"],
  },
  "Zoom Lens": {
    gens: ["dpp","bw","xy","sm"],
  },
};
