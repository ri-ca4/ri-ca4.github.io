const dnd = {

    races: ['Dragonborn', 'Dwarf', 'Elf', 'Gnome', 'Half-Elf', 
        'Halfling', 'Half-Orc', 'Human', 'Tiefling'],

    classes: ['Barbarian', 'Bard', 'Cleric', 'Druid', 'Fighter', 
        'Monk', 'Palidin', 'Ranger', 'Rogue', 'Sorcerer', 'Warlock', 
        'Wizard', 'Artificer', 'Blood Hunter']

}

const genders = ['Male', 'Female', 'Non-binary'];

const alignments = [
    ['Lawful', 'Neutral', 'Chaotic'],
    ['Good', 'Neutral', 'Evil'] 
];

const motivations = ['Revenge', 'Power', 'Money', 'Healing', 'Justice', 'Entertainment',
                     'Love', 'Adventure', 'Education', 'Respect', 'Redemption', 'Boredom',
                     'Curiosity', 'Lust', 'Anarchy', 'Rebellion', 'Survival', 'Courage', 
                     'Glory', 'Honor'];

const flaws = ['Gullible', 'Clumbsy', 'Lazy', 'Naive', 'Pride', 'Stubborn', 'Anxious', 'Apathetic', 'Ignorant',
                'Hot-headed', 'Obsessive', 'Distractable', 'Arrogant', 'Forgetful', 'Compulsive Liar'];

const personalities = ['Bold', 'Shy', 'Quiet', 'Serious', 'Modest', 'Brave', 'Quirky', 'Careful', 'Honest', 
                    'Loyal', 'Humble', 'Responsible', 'Combative', 'Witty', 'Simple Minded', 'Bright', 
                    'Impulsive', 'Compassionate', 'Leader', 'Hard-working'];

const WoW ={    
    'Human':    ['Warrior', 'Hunter', 'Mage', 'Rogue', 'Priest', 'Warlock', 'Palidin', 'Monk', 'Death Knight'],
    'Dwarf':    ['Warrior', 'Hunter', 'Mage', 'Rogue', 'Priest','Warlock', 'Palidin', 'Shaman', 'Monk', 'Death Knight'],
    'Night Elf':['Warrior', 'Hunter', 'Mage', 'Rogue', 'Priest', 'Druid', 'Monk', 'Demon Hunter', 'Death Knight'],
    'Gnome':    ['Warrior', 'Hunter', 'Mage', 'Rogue', 'Priest', 'Warlock', 'Monk', 'Death Knight'],
    'Draenei':  ['Warrior', 'Hunter', 'Mage', 'Rogue', 'Priest', 'Palidin', 'Shaman', 'Monk', 'Death Knight'],
    'Worgen':   ['Warrior', 'Hunter', 'Mage', 'Rogue', 'Priest', 'Warlock', 'Druid', 'Death Knight'],
    'Pandaren': ['Warrior', 'Hunter', 'Mage', 'Rogue', 'Priest', 'Shaman', 'Monk', 'Death Knight'],
    'Orc':      ['Warrior', 'Hunter', 'Mage', 'Rogue', 'Priest', 'Warlock', 'Shaman', 'Monk', 'Death Knight'],
    'Undead':   ['Warrior', 'Hunter', 'Mage', 'Rogue', 'Priest', 'Warlock', 'Monk', 'Death Knight'],
    'Tauren':   ['Warrior', 'Hunter', 'Mage', 'Rogue', 'Priest', 'Palidin', 'Druid', 'Shaman', 'Monk', 'Death Knight'],
    'Troll':    ['Warrior', 'Hunter', 'Mage', 'Rogue', 'Priest', 'Warlock', 'Druid', 'Shaman', 'Monk', 'Death Knight'],
    'Blood Elf':['Warrior', 'Hunter', 'Mage', 'Rogue', 'Priest', 'Warlock', 'Palidin', 'Monk', 'Demon Hunter', 'Death Knight'],
    'Goblin':   ['Warrior', 'Hunter', 'Mage', 'Rogue', 'Priest', 'Warlock', 'Shaman', 'Death Knight'],
    'Dracthyr': ['Evoker']
}

function statRoll (){//simulates rolling 4 d6, dropping lowest, and adding the remaining
    let rolls = [];
    for(let i=1; i<=4; i++){//roll the dice
        rolls.push(Math.floor(Math.random() * 6) + 1)
    }
    rolls.sort(function(a, b){return b - a});//sort the dice
    rolls.pop();//drop the lowest
    var stat = rolls.reduce(function (a, b) {//add the remaining
        return a + b;
      }, 0);
    return stat
}


//roll for ... functions
function rollForDnDRace(){
    var races = dnd.races;
    var rand = Math.floor(Math.random() * races.length);
    var race = races[rand];
    return race
}

function rollForDnDClass(){
    var classes = dnd.classes;
    var rand = Math.floor(Math.random() * classes.length);
    var _class = classes[rand];
    return _class
}

function rollForWoW(){
    var races = Object.keys(WoW)//get just the races
    var race = races[Math.floor(Math.random() * races.length)]
    var _class = WoW[race][Math.floor(Math.random()* WoW[race].length)]//get random class from race's array
    return [race, _class]
}

function rollForGender(){
    var rand = Math.floor(Math.random() * genders.length);
    var gender = genders[rand];
    return gender
}

function rollForAlignment(){
    var rand1 = Math.floor(Math.random() * 3)
    var rand2 = Math.floor(Math.random() * 3)
    var align1 = alignments[0][rand1];
    var align2 = alignments[1][rand2];
    var alignment = align1 + ' ' + align2;
    if(alignment == 'Neutral Neutral'){
        alignment = 'True Neutral'
    }
    return alignment
}

function rollForMotive(){
    var rand = Math.floor(Math.random() * motivations.length);
    var motive = motivations[rand];
    return motive
}

function rollForFlaw(){
    var rand = Math.floor(Math.random() * flaws.length);
    var flaw = flaws[rand];
    return flaw
}

function rollForPersonality(){
    var rand = Math.floor(Math.random() * personalities.length);
    var personality = personalities[rand];
    return personality
}

function rollForStats(){
    var stats = {};
    stats.str = statRoll();
    stats.dex = statRoll();
    stats.con = statRoll();
    stats.int = statRoll();
    stats.wis = statRoll();
    stats.chr = statRoll();
    return stats
}

//create character class
class DnDCharacter {
    constructor(){
        this.race = rollForDnDRace(),
        this.class = rollForDnDClass(),
        this.gender = rollForGender(),
        this.align = rollForAlignment(),
        this.motive = rollForMotive(),
        this.flaw = rollForFlaw(),
        this.person = rollForPersonality(),
        this.stats = rollForStats()
    }
}

class WoWCharacter {
    constructor(){
        const [race, _class] = rollForWoW()
        this.race = race,
        this.class = _class,
        this.gender = rollForGender(),
        this.align = rollForAlignment(),
        this.motive = rollForMotive(),
        this.flaw = rollForFlaw(),
        this.person = rollForPersonality(),
        this.stats = rollForStats()
    }
}

function generate(){//generate new character and display
    var game;
    var radios = document.getElementsByName('choose');
    for(const f of radios){
        if (f.checked){
            game = f.value
        }
    }
    console.log(game)
//New character
    var char;
    if(game == 'dnd'){
        char = new DnDCharacter
    }

    if(game == 'wow'){
        char = new WoWCharacter
    }
//Display in DOM
    document.getElementById('race').innerHTML = char.race;
    document.getElementById('class').innerHTML = char.class;
    document.getElementById('gender').innerHTML = char.gender;
    document.getElementById('align').innerHTML = char.align;
    document.getElementById('motive').innerHTML = char.motive;
    document.getElementById('flaw').innerHTML = char.flaw;
    document.getElementById('person').innerHTML = char.person;

    document.getElementById('str').innerHTML = char.stats.str;
    document.getElementById('dex').innerHTML = char.stats.dex;
    document.getElementById('con').innerHTML =  char.stats.con;
    document.getElementById('int').innerHTML = char.stats.int;
    document.getElementById('wis').innerHTML = char.stats.wis;
    document.getElementById('chr').innerHTML = char.stats.chr;
}

generate();
//Event listener
let generateBtn = document.getElementById('generate');
generateBtn.addEventListener('click', (e) => {
    e.preventDefault();
    generate();
});