//Housekeeping
const express = require('express')
const app = express()
const PORT = 8000
const cors = require('cors')



//Songs object
const songs = {
    "15step": {
        "title": "15 Step",
        "album": "In Rainbows",
        "producer": "Nigel Godrich",
        "releaseYear": "2007"
    },
    "225":{
        "title": "2 + 2 = 5",
        "album": "Hail to the Thief",
        "producer": "Nigel Godrich, Radiohead",
        "releaseYear": "2003"
    },
    "4minutewarning":{
        "title": "4 Minute Warning",
        "album": "In Rainbows Disk 2",
        "producer": "Nigel Godrich",
        "releaseYear": "2007"
    },
    "airbag":{
        "title": "Airbag",
        "album": "OK Computer",
        "producer": "Nigel Godrich",
        "releaseYear": "1997"
    },
    "allineed":{
        "title": "All I Need",
        "album": "In Rainbows",
        "producer": "Nigel Godrich",
        "releaseYear": "2007"
    },
    "theamazingsoundsoforgy":{
        "title": "The Amazing Sounds of Orgy",
        "album": "B-side to Pyramid Song (CD1)",
        "producer": "Nigel Godrich, Radiohead",
        "releaseYear": "2001"
    },
    "anyonecanplayguitar":{
        "title": "Anyone Can Play Guitar",
        "album": "Pablo Honey",
        "producer": "Sean Slade, Paul Q. Kolderie",
        "releaseYear": "1993"
    },
    "backdrifts":{
        "title": "Backdrifts",
        "album": "Hail to the Thief",
        "producer": "Nigel Godrich, Radiohead",
        "releaseYear": "2003"
    },
    "bananaco":{
        "title": "Banana Co. (live)",
        "album": "B-side to Pop Is Dead",
        "producer": "Radiohead, Jim Warren",
        "releaseYear": "1993"
    },
    "bangersmash":{
        "title": "Bangers + Mash",
        "album": "In Rainbows Disk 2",
        "producer": "Nigel Godrich",
        "releaseYear": "2007"
    },
    "thebends":{
        "title": "The Bends",
        "album": "The Bends",
        "producer": "John Leckie",
        "releaseYear": "1995"
    },
    "bishopsrobes":{
        "title": "Bishop's Robes",
        "album": "B-side to Street Spirit (Fade Out) (CD1)",
        "producer": "John Leckie",
        "releaseYear": "1996"
    },
    "blackstar":{
        "title": "Black Star",
        "album": "The Bends",
        "producer": "Radiohead, Nigel Godrich, John Leckie",
        "releaseYear": "1995"
    },
    "bloom":{
        "title": "Bloom",
        "album": "The King of Limbs",
        "producer": "Nigel Godrich",
        "releaseYear": "2011"
    },
    "blowout":{
        "title": "Blow Out",
        "album": "Pablo Honey",
        "producer": "Sean Slade, Paul Q. Kolderie",
        "releaseYear": "1993"
    },
    "bodysnatchers":{
        "title": "Bodysnatchers",
        "album": "In Rainbows",
        "producer": "Nigel Godrich",
        "releaseYear": "2007"
    },
    "bones":{
        "title": "Bones",
        "album": "The Bends",
        "producer": "John Leckie",
        "releaseYear": "1995"
    },
    "bulletproofiwishiwas":{
        "title": "Bullet Proof..I Wish I Was",
        "album": "The Bends",
        "producer": "John Leckie",
        "releaseYear": "1995"
    },
    "burnthewitch":{
        "title": "Burn the Witch",
        "album": "A Moon Shaped Pool",
        "producer": "Nigel Godrich",
        "releaseYear": "2016"
    },
    "thebutcher":{
        "title": "The Butcher",
        "album": "Non-album single",
        "producer": "Nigel Godrich, Radiohead",
        "releaseYear": "2011"
    },
    "climbingupthewalls":{
        "title": "Climbing Up the Walls",
        "album": "OK Computer",
        "producer": "Nigel Godrich",
        "releaseYear": "1997"
    },
    "codex":{
        "title": "Codex",
        "album": "The King of Limbs",
        "producer": "Nigel Godrich",
        "releaseYear": "2011"
    },
    "cokebabies":{
        "title": "Coke Babies",
        "album": "B-side to Anyone Can Play Guitar",
        "producer": "Jim Warren, Chris Hufford",
        "releaseYear": "1993"
    },
    "creep":{
        "title": "Creep",
        "album": "Pablo Honey",
        "producer": "Sean Slade, Paul Q. Kolderie",
        "releaseYear": "1993"
    },
    "cuttooth":{
        "title": "Cuttooth",
        "album": "B-side to Knives Out (CD1)",
        "producer": "Nigel Godrich, Radiohead",
        "releaseYear": "2001"
    },
    "thedailymail":{
        "title": "The Daily Mail",
        "album": "The King of Limbs: Live from the Basement",
        "producer": "Nigel Godrich, Radiohead",
        "releaseYear": "2011"
    },
    "daydreaming":{
        "title": "Daydreaming",
        "album": "A Moon Shaped Pool",
        "producer": "Nigel Godrich",
        "releaseYear": "2016"
    },
    "decksdark":{
        "title": "Decks Dark",
        "album": "A Moon Shaped Pool",
        "producer": "Nigel Godrich",
        "releaseYear": "2016"
    },
    "desertislanddisk":{
        "title": "Desert Island Disk",
        "album": "A Moon Shaped Pool",
        "producer": "Nigel Godrich",
        "releaseYear": "2016"
    },
    "dollarsandcents":{
        "title": "Dollars and Cents",
        "album": "Amnesiac",
        "producer": "Nigel Godrich, Radiohead",
        "releaseYear": "2001"
    },
    "downisthenewup":{
        "title": "Down Is the New Up",
        "album": "In Rainbows Disk 2",
        "producer": "Nigel Godrich",
        "releaseYear": "2007"
    },
    "electioneering":{
        "title": "Electioneering",
        "album": "OK Computer",
        "producer": "Nigel Godrich",
        "releaseYear": "1997"
    },
    "everythinginitsrightplace":{
        "title": "Everything in Its Right Place",
        "album": "Kid A",
        "producer": "Nigel Godrich, Radiohead",
        "releaseYear": "2000"
    },
    "exitmusicforafilm":{
        "title": "Exit Music (For a Film)",
        "album": "OK Computer",
        "producer": "Nigel Godrich",
        "releaseYear": "1997"
    },
    "faithlessthewonderboy":{
        "title": "Faithless, the Wonder Boy",
        "album": "B-side to Anyone Can Play Guitar",
        "producer": "Jim Warren, Chris Hufford",
        "releaseYear": "1993"
    },
    "fakeplastictrees":{
        "title": "Fake Plastic Trees",
        "album": "The Bends",
        "producer": "John Leckie",
        "releaseYear": "1995"
    },
    "fasttrack":{
        "title": "Fast-Track",
        "album": "B-side to Pyramid Song (CD2)",
        "producer": "Nigel Godrich, Radiohead",
        "releaseYear": "2001"
    },
    "faustarp":{
        "title": "Faust Arp",
        "album": "In Rainbows",
        "producer": "Nigel Godrich",
        "releaseYear": "2007"
    },
    "feral":{
        "title": "Feral",
        "album": "The King of Limbs",
        "producer": "Nigel Godrich",
        "releaseYear": "2011"
    },
    "fitterhappier":{
        "title": "Fitter Happier",
        "album": "OK Computer",
        "producer": "Nigel Godrich",
        "releaseYear": "1997"
    },
    "fog":{
        "title": "Fog",
        "album": "B-side to Knives Out (CD2)",
        "producer": "Nigel Godrich, Radiohead",
        "releaseYear": "2001"
    },
    "followmearound":{
        "title": "Follow Me Around",
        "album": "Kid A Mnesia",
        "producer": "Nigel Godrich, Radiohead",
        "releaseYear": "2021"
    },
    "fulstop":{
        "title": "Ful Stop",
        "album": "A Moon Shaped Pool",
        "producer": "Nigel Godrich",
        "releaseYear": "2016"
    },
    "gaggingorder":{
        "title": "Gagging Order",
        "album": "B-side to Go to Sleep (CD2)",
        "producer": "Radiohead",
        "releaseYear": "2003"
    },
    "giveuptheghost":{
        "title": "Give Up the Ghost",
        "album": "The King of Limbs",
        "producer": "Nigel Godrich",
        "releaseYear": "2011"
    },
    "glasseyes":{
        "title": "Glass Eyes",
        "album": "A Moon Shaped Pool",
        "producer": "Nigel Godrich",
        "releaseYear": "2016"
    },
    "thegloaming":{
        "title": "The Gloaming",
        "album": "Hail to the Thief",
        "producer": "Nigel Godrich, Radiohead",
        "releaseYear": "2003"
    },
    "goslowly":{
        "title": "Go Slowly",
        "album": "In Rainbows Disk 2",
        "producer": "Nigel Godrich",
        "releaseYear": "2007"
    },
    "gotosleep":{
        "title": "Go to Sleep",
        "album": "Hail to the Thief",
        "producer": "Nigel Godrich, Radiohead",
        "releaseYear": "2003"
    },
    "harrypatchinmemoryof":{
        "title": "Harry Patch (In Memory Of)",
        "album": "Non-album single",
        "producer": "Radiohead",
        "releaseYear": "2009"
    },
    "highanddry":{
        "title": "High and Dry",
        "album": "The Bends",
        "producer": "Radiohead, Jim Warren",
        "releaseYear": "1995"
    },
    "houseofcards":{
        "title": "House of Cards",
        "album": "In Rainbows",
        "producer": "Nigel Godrich",
        "releaseYear": "2007"
    },
    "howcanyoubesure":{
        "title": "How Can You Be Sure?",
        "album": "B-side to Fake Plastic Trees",
        "producer": "John Leckie",
        "releaseYear": "1995"
    },
    "howdoyou":{
        "title": "How Do You?",
        "album": "Pablo Honey",
        "producer": "Sean Slade, Paul Q. Kolderie",
        "releaseYear": "1993"
    },
    "howimademymillions":{
        "title": "How I Made My Millions",
        "album": "B-side to No Surprises",
        "producer": "Nigel Godrich, Radiohead",
        "releaseYear": "1998"
    },
    "howtodisappearcompletely":{
        "title": "How to Disappear Completely",
        "album": "Kid A",
        "producer": "Nigel Godrich, Radiohead",
        "releaseYear": "2000"
    },
    "huntingbears":{
        "title": "Hunting Bears",
        "album": "Amnesiac",
        "producer": "Nigel Godrich, Radiohead",
        "releaseYear": "2001"
    },
    "iamawickedchild":{
        "title": "I Am a Wicked Child",
        "album": "B-side to Go to Sleep (CD2)",
        "producer": "Radiohead",
        "releaseYear": "2003"
    },
    "iamcitizeninsane":{
        "title": "I Am Citizen Insane",
        "album": "B-side to Go to Sleep (CD1)",
        "producer": "Radiohead",
        "releaseYear": "2003"
    },
    "icant":{
        "title": "I Can't",
        "album": "Pablo Honey",
        "producer": "Chris Hufford",
        "releaseYear": "1993"
    },
    "imightbewrong":{
        "title": "I Might Be Wrong",
        "album": "Amnesiac",
        "producer": "Nigel Godrich, Radiohead",
        "releaseYear": "2001"
    },
    "ipromise":{
        "title": "I Promise",
        "album": "OKNOTOK",
        "producer": "Nigel Godrich",
        "releaseYear": "2017"
    },
    "iwantnoneofthis":{
        "title": "I Want None of This",
        "album": "Help!: A Day in the Life",
        "producer": "War Child",
        "releaseYear": "2005"
    },
    "iwill":{
        "title": "I Will",
        "album": "Hail to the Thief",
        "producer": "Nigel Godrich, Radiohead",
        "releaseYear": "2003"
    },
    "identikit":{
        "title": "Identikit",
        "album": "A Moon Shaped Pool",
        "producer": "Nigel Godrich",
        "releaseYear": "2016"
    },
    "idioteque":{
        "title": "Idioteque",
        "album": "Kid A",
        "producer": "Nigel Godrich, Radiohead",
        "releaseYear": "2000"
    },
    "ifyousaytheword":{
        "title": "If You Say the Word",
        "album": "Kid A Mnesia",
        "producer": "Nigel Godrich, Radiohead",
        "releaseYear": "2021"
    },
    "illwind":{
        "title": "Ill Wind",
        "album": "A Moon Shaped Pool (special edition)",
        "producer": "Nigel Godrich",
        "releaseYear": "2016"
    },
    "inlimbo":{
        "title": "In Limbo",
        "album": "Kid A",
        "producer": "Nigel Godrich, Radiohead",
        "releaseYear": "2000"
    },
    "indiarubber":{
        "title": "India Rubber",
        "album": "B-side to Fake Plastic Trees",
        "producer": "Radiohead",
        "releaseYear": "1995"
    },
    "insidemyhead":{
        "title": "Inside My Head",
        "album": "B-side to Creep",
        "producer": "Sean Slade, Paul Q. Kolderie",
        "releaseYear": "1992"
    },
    "jigsawfallingintoplace":{
        "title": "Jigsaw Falling into Place",
        "album": "In Rainbows",
        "producer": "Nigel Godrich",
        "releaseYear": "2007"
    },
    "just":{
        "title": "Just",
        "album": "The Bends",
        "producer": "John Leckie",
        "releaseYear": "1995"
    },
    "karmapolice":{
        "title": "Karma Police",
        "album": "OK Computer",
        "producer": "Nigel Godrich",
        "releaseYear": "1997"
    },
    "kida":{
        "title": "Kid A",
        "album": "Kid A",
        "producer": "Nigel Godrich, Radiohead",
        "releaseYear": "2000"
    },
    "killercars":{
        "title": "Killer Cars",
        "album": "B-side to Planet Telex /, High and Dry (CD2)",
        "producer": "John Leckie",
        "releaseYear": "1995"
    },
    "kinetic":{
        "title": "Kinetic",
        "album": "B-side to Pyramid Song (CD2)",
        "producer": "Nigel Godrich, Radiohead",
        "releaseYear": "2001"
    },
    "knivesout":{
        "title": "Knives Out",
        "album": "Amnesiac",
        "producer": "Nigel Godrich, Radiohead",
        "releaseYear": "2001"
    },
    "lastflowers":{
        "title": "Last Flowers",
        "album": "In Rainbows Disk 2",
        "producer": "Nigel Godrich",
        "releaseYear": "2007"
    },
    "letdown":{
        "title": "Let Down",
        "album": "OK Computer",
        "producer": "Nigel Godrich",
        "releaseYear": "1997"
    },
    "lewismistreated":{
        "title": "Lewis (Mistreated)",
        "album": "My Iron Lung",
        "producer": "John Leckie",
        "releaseYear": "1994"
    },
    "lifeinaglasshouse":{
        "title": "Life in a Glasshouse",
        "album": "Amnesiac",
        "producer": "Nigel Godrich, Radiohead",
        "releaseYear": "2001"
    },
    "lift":{
        "title": "Lift",
        "album": "OKNOTOK",
        "producer": "Nigel Godrich",
        "releaseYear": "2017"
    },
    "likespinningplates":{
        "title": "Like Spinning Plates",
        "album": "Amnesiac",
        "producer": "Nigel Godrich, Radiohead",
        "releaseYear": "2001"
    },
    "littlebylittle":{
        "title": "Little by Little",
        "album": "The King of Limbs",
        "producer": "Nigel Godrich",
        "releaseYear": "2011"
    },
    "lotusflower":{
        "title": "Lotus Flower",
        "album": "The King of Limbs",
        "producer": "Nigel Godrich",
        "releaseYear": "2011"
    },
    "lozengeoflove":{
        "title": "Lozenge of Love",
        "album": "My Iron Lung",
        "producer": "John Leckie",
        "releaseYear": "1994"
    },
    "lucky":{
        "title": "Lucky",
        "album": "OK Computer",
        "producer": "Nigel Godrich",
        "releaseYear": "1997"
    },
    "lull":{
        "title": "Lull",
        "album": "B-side to Karma Police",
        "producer": "Nigel Godrich, Radiohead",
        "releaseYear": "1997"
    },
    "lurgee":{
        "title": "Lurgee",
        "album": "Pablo Honey",
        "producer": "Chris Hufford",
        "releaseYear": "1993"
    },
    "manofwar":{
        "title": "Man of War",
        "album": "OKNOTOK",
        "producer": "Nigel Godrich",
        "releaseYear": "2017"
    },
    "maquiladora":{
        "title": "Maquiladora",
        "album": "B-side to Planet Telex /, High and Dry (CD1)",
        "producer": "John Leckie",
        "releaseYear": "1995"
    },
    "meetingintheaisle":{
        "title": "Meeting in the Aisle",
        "album": "B-side to Karma Police",
        "producer": "Nigel Godrich, Radiohead",
        "releaseYear": "1997"
    },
    "melatonin":{
        "title": "Melatonin",
        "album": "B-side to Paranoid Android (CD2)",
        "producer": "Nigel Godrich, Radiohead",
        "releaseYear": "1997"
    },
    "milliondollarquestion":{
        "title": "Million Dollar Question",
        "album": "B-side to Creep",
        "producer": "Sean Slade, Paul Q. Kolderie",
        "releaseYear": "1992"
    },
    "mk1":{
        "title": "MK 1",
        "album": "In Rainbows Disk 2",
        "producer": "Nigel Godrich",
        "releaseYear": "2007"
    },
    "mk2":{
        "title": "MK 2",
        "album": "In Rainbows Disk 2",
        "producer": "Nigel Godrich",
        "releaseYear": "2007"
    },
    "molasses":{
        "title": "Molasses",
        "album": "B-side to Street Spirit (Fade Out) (CD2)",
        "producer": "Nigel Godrich, Radiohead",
        "releaseYear": "1996"
    },
    "morningbell":{
        "title": "Morning Bell",
        "album": "Kid A",
        "producer": "Nigel Godrich, Radiohead",
        "releaseYear": "2000"
    },
    "morningbellamnesiac":{
        "title": "Morning Bell/Amnesiac",
        "album": "Amnesiac",
        "producer": "Nigel Godrich, Radiohead",
        "releaseYear": "2001"
    },
    "morningmrmagpie":{
        "title": "Morning Mr Magpie",
        "album": "The King of Limbs",
        "producer": "Nigel Godrich",
        "releaseYear": "2011"
    },
    "motionpicturesoundtrack":{
        "title": "Motion Picture Soundtrack",
        "album": "Kid A",
        "producer": "Nigel Godrich, Radiohead",
        "releaseYear": "2000"
    },
    "myironlung":{
        "title": "My Iron Lung",
        "album": "The Bends",
        "producer": "John Leckie",
        "releaseYear": "1995"
    },
    "myxamatosis":{
        "title": "Myxomatosis",
        "album": "Hail to the Thief",
        "producer": "Nigel Godrich, Radiohead",
        "releaseYear": "2003"
    },
    "thenationalanthem":{
        "title": "The National Anthem",
        "album": "Kid A",
        "producer": "Nigel Godrich, Radiohead",
        "releaseYear": "2000"
    },
    "nicedream":{
        "title": "(Nice Dream)",
        "album": "The Bends",
        "producer": "John Leckie",
        "releaseYear": "1995"
    },
    "nosurprises":{
        "title": "No Surprises",
        "album": "OK Computer",
        "producer": "Nigel Godrich",
        "releaseYear": "1997"
    },
    "nothingtouchesme":{
        "title": "Nothing Touches Me",
        "album": "Pablo Honey (collector's edition)",
        "producer": "Sean Slade, Paul Q. Kolderie",
        "releaseYear": "2009"
    },
    "nude":{
        "title": "Nude",
        "album": "In Rainbows",
        "producer": "Nigel Godrich",
        "releaseYear": "2007"
    },
    "thenumbers":{
        "title": "The Numbers",
        "album": "A Moon Shaped Pool",
        "producer": "Nigel Godrich",
        "releaseYear": "2016"
    },
    "optimistic":{
        "title": "Optimistic",
        "album": "Kid A",
        "producer": "Nigel Godrich, Radiohead",
        "releaseYear": "2000"
    },
    "packtlikesardinesinacrushdtinbox":{
        "title": "Packt Like Sardines in a Crushd Tin Box",
        "album": "Amnesiac",
        "producer": "Nigel Godrich, Radiohead",
        "releaseYear": "2001"
    },
    "paloalto":{
        "title": "Palo Alto",
        "album": "B-side to No Surprises",
        "producer": "Nigel Godrich, Radiohead",
        "releaseYear": "1998"
    },
    "paperbagwriter":{
        "title": "Paperbag Writer",
        "album": "B-side to There There",
        "producer": "Nigel Godrich, Radiohead",
        "releaseYear": "2003"
    },
    "paranoidandroid":{
        "title": "Paranoid Android",
        "album": "OK Computer",
        "producer": "Nigel Godrich",
        "releaseYear": "1997"
    },
    "pearly":{
        "title": "Pearly",
        "album": "B-side to Paranoid Android (CD1)",
        "producer": "Nigel Godrich, Radiohead",
        "releaseYear": "1997"
    },
    "permanentdaylight":{
        "title": "Permanent Daylight",
        "album": "My Iron Lung",
        "producer": "Nigel Godrich, Radiohead",
        "releaseYear": "1994"
    },
    "planettelex":{
        "title": "Planet Telex",
        "album": "The Bends",
        "producer": "John Leckie",
        "releaseYear": "1995"
    },
    "polyethylene":{
        "title": "Polyethylene (Parts 1 & 2)",
        "album": "B-side to Paranoid Android (CD1)",
        "producer": "Nigel Godrich, Radiohead",
        "releaseYear": "1997"
    },
    "popisdead":{
        "title": "Pop Is Dead",
        "album": "Non-album single",
        "producer": "Jim Warren, Radiohead",
        "releaseYear": "1993"
    },
    "presenttense":{
        "title": "Present Tense",
        "album": "A Moon Shaped Pool",
        "producer": "Nigel Godrich",
        "releaseYear": "2016"
    },
    "proveyourself":{
        "title": "Prove Yourself",
        "album": "Pablo Honey",
        "producer": "Chris Hufford",
        "releaseYear": "1993"
    },
    "pulkpullrevolvingdoors":{
        "title": "Pulk/Pull Revolving Doors",
        "album": "Amnesiac",
        "producer": "Nigel Godrich, Radiohead",
        "releaseYear": "2001"
    },
    "punchdrunklovesicksingalong":{
        "title": "Punchdrunk Lovesick Singalong",
        "album": "My Iron Lung",
        "producer": "John Leckie",
        "releaseYear": "1994"
    },
    "apunchupatawedding":{
        "title": "A Punchup at a Wedding",
        "album": "Hail to the Thief",
        "producer": "Nigel Godrich, Radiohead",
        "releaseYear": "2003"
    },
    "pyramidsonog":{
        "title": "Pyramid Song",
        "album": "Amnesiac",
        "producer": "Nigel Godrich, Radiohead",
        "releaseYear": "2001"
    },
    "reckoner":{
        "title": "Reckoner",
        "album": "In Rainbows",
        "producer": "Nigel Godrich",
        "releaseYear": "2007"
    },
    "areminder":{
        "title": "A Reminder",
        "album": "B-side to Paranoid Android (CD2)",
        "producer": "Nigel Godrich, Radiohead",
        "releaseYear": "1997"
    },
    "ripcord":{
        "title": "Ripcord",
        "album": "Pablo Honey",
        "producer": "Sean Slade, Paul Q. Kolderie",
        "releaseYear": "1993"
    },
    "sailtothemoon":{
        "title": "Sail to the Moon",
        "album": "Hail to the Thief",
        "producer": "Nigel Godrich, Radiohead",
        "releaseYear": "2003"
    },
    "scatterbrain":{
        "title": "Scatterbrain",
        "album": "Hail to the Thief",
        "producer": "Nigel Godrich, Radiohead",
        "releaseYear": "2003"
    },
    "separator":{
        "title": "Separator",
        "album": "The King of Limbs",
        "producer": "Nigel Godrich",
        "releaseYear": "2011"
    },
    "sitdownstandup":{
        "title": "Sit Down. Stand Up",
        "album": "Hail to the Thief",
        "producer": "Nigel Godrich, Radiohead",
        "releaseYear": "2003"
    },
    "spectre":{
        "title": "Spectre",
        "album": "Non-album single",
        "producer": "Nigel Godrich",
        "releaseYear": "2015"
    },
    "staircase":{
        "title": "Staircase",
        "album": "The King of Limbs: Live from the Basement",
        "producer": "Nigel Godrich, Radiohead",
        "releaseYear": "2011"
    },
    "stopwhispering":{
        "title": "Stop Whispering",
        "album": "Pablo Honey",
        "producer": "Sean Slade, Paul Q. Kolderie",
        "releaseYear": "1993"
    },
    "streetspiritfadeout":{
        "title": "Street Spirit (Fade Out)",
        "album": "The Bends",
        "producer": "John Leckie",
        "releaseYear": "1995"
    },
    "stupidcar":{
        "title": "Stupid Car",
        "album": "Drill",
        "producer": "Chris Hufford",
        "releaseYear": "1992"
    },
    "subterraneanhomesickalien":{
        "title": "Subterranean Homesick Alien",
        "album": "OK Computer",
        "producer": "Nigel Godrich",
        "releaseYear": "1997"
    },
    "sulk":{
        "title": "Sulk",
        "album": "The Bends",
        "producer": "John Leckie",
        "releaseYear": "1995"
    },
    "supercollider":{
        "title": "Supercollider",
        "album": "Non-album single",
        "producer": "Nigel Godrich, Radiohead",
        "releaseYear": "2011"
    },
    "talkshowhost":{
        "title": "Talk Show Host",
        "album": "B-side to Street Spirit (Fade Out) (CD1)",
        "producer": "John Leckie",
        "releaseYear": "1996"
    },
    "therethere":{
        "title": "There There",
        "album": "Hail to the Thief",
        "producer": "Nigel Godrich, Radiohead",
        "releaseYear": "2003"
    },
    "thesearemytwistedwords":{
        "title": "These Are My Twisted Words",
        "album": "Non-album single",
        "producer": "Nigel Godrich",
        "releaseYear": "2009"
    },
    "thinkingaboutyou":{
        "title": "Thinking About You",
        "album": "Pablo Honey",
        "producer": "Chris Hufford",
        "releaseYear": "1993"
    },
    "tinkertailorsoldiersailorrichmanpoormanbeggarmanthief":{
        "title": "Tinker Tailor Soldier Sailor Rich Man Poor Man Beggar Man Thief",
        "album": "A Moon Shaped Pool",
        "producer": "Nigel Godrich",
        "releaseYear": "2016"
    },
    "thetourist":{
        "title": "The Tourist",
        "album": "OK Computer",
        "producer": "Nigel Godrich",
        "releaseYear": "1997"
    },
    "transatlanticdrawl":{
        "title": "Trans-Atlantic Drawl",
        "album": "B-side to Pyramid Song (CD1)",
        "producer": "Nigel Godrich, Radiohead",
        "releaseYear": "2001"
    },
    "treefingers":{
        "title": "Treefingers",
        "album": "Kid A",
        "producer": "Nigel Godrich, Radiohead",
        "releaseYear": "2000"
    },
    "thetrickster":{
        "title": "The Trickster",
        "album": "My Iron Lung",
        "producer": "John Leckie",
        "releaseYear": "1994"
    },
    "truelovewaitslive":{
        "title": "True Love Waits (live)",
        "album": "I Might Be Wrong: Live Recordings",
        "producer": "Nigel Godrich, (A Moon Shaped Pool)",
        "releaseYear": "2001"
    },
    "truelovewaits":{
        "title": "True Love Waits",
        "album": "A Moon Shaped Pool",
        "producer": "Nigel Godrich",
        "releaseYear": "2016"
    },
    "upontheladder":{
        "title": "Up on the Ladder",
        "album": "In Rainbows Disk 2",
        "producer": "Nigel Godrich",
        "releaseYear": "2007"
    },
    "vegetable":{
        "title": "Vegetable",
        "album": "Pablo Honey",
        "producer": "Sean Slade, Paul Q. Kolderie",
        "releaseYear": "1993"
    },
    "videotape":{
        "title": "Videotape",
        "album": "In Rainbows",
        "producer": "Nigel Godrich",
        "releaseYear": "2007"
    },
    "wesuckyoungblood":{
        "title": "We Suck Young Blood",
        "album": "Hail to the Thief",
        "producer": "Nigel Godrich, Radiohead",
        "releaseYear": "2003"
    },
    "weirdfishesarpeggi":{
        "title": "Weird Fishes/Arpeggi",
        "album": "In Rainbows",
        "producer": "Nigel Godrich",
        "releaseYear": "2007"
    },
    "wherebluebirdsfly":{
        "title": "Where Bluebirds Fly",
        "album": "B-side to There There",
        "producer": "Radiohead",
        "releaseYear": "2003"
    },
    "whereiendandyoubegin":{
        "title": "Where I End and You Begin",
        "album": "Hail to the Thief",
        "producer": "Nigel Godrich, Radiohead",
        "releaseYear": "2003"
    },
    "awolfatthedoor":{
        "title": "A Wolf at the Door",
        "album": "Hail to the Thief",
        "producer": "Nigel Godrich, Radiohead",
        "releaseYear": "2003"
    },
    "worrywort":{
        "title": "Worrywort",
        "album": "B-side to Knives Out (CD2)",
        "producer": "Nigel Godrich, Radiohead",
        "releaseYear": "2001"
    },
    "yesiam":{
        "title": "Yes I Am",
        "album": "B-side to Creep (re-release)",
        "producer": "Radiohead",
        "releaseYear": "1993"
    },
    "you":{
        "title": "You",
        "album": "Pablo Honey",
        "producer": "Chris Hufford",
        "releaseYear": "1993"
    },
    "youandwhosearmy":{
        "title": "You and Whose Army?",
        "album": "Amnesiac",
        "producer": "Nigel Godrich, Radiohead",
        "releaseYear": "2001"
    },
    "youneverwashupafteryourself":{
        "title": "You Never Wash Up After Yourself (live)",
        "album": "My Iron Lung",
        "producer": "Jim Warren",
        "releaseYear": "1994"
    }
}

//MIDDLEWARE
app.use(express.static(__dirname + '/public'));
app.use(cors())


//Serve API homepage
app.get('/', (req,res) => {
    res.sendFile(__dirname + '/index.html')
})
//Full song list endpoint
app.get('/api', (req,res) => {
    res.json(songs)
    
})
//Specific song list endpoint
app.get('/api/:name', (req,res) => {
    const songName = req.params.name.toLowerCase().replace(/([^A-Z])/gi,"")
    res.json(songs[songName])
    
})
//Create Array to select random Song of the Day
const random = Object.keys(songs)
const daily = random[Math.floor(Math.random()*165)]
//Song of the Day Endpoint
app.get('/sotd', (req,res) => {
    res.json(songs[daily])
})
//Listen
app.listen(process.env.PORT || PORT, () =>{
    console.log(`Server is running on port ${PORT}`)
})