'use strict'


var profileCard
var currOpts = [];
function createOpts(profiles) {
    var names = ['Jesus Christ', 'Howard Stern', 'Arnold Schwarzenegger', 'John Lennon', 'Che Guevara', 'Galileo Galilei', 'Eddie Murphy', 'Abraham Lincoln', 'Robin Williams', 'Nicole Kidman', 'Lady Gaga', 'Charles Darwin', 'Natalie Portman', 'Serena Williams'];
    var counterIdx = 0;
    var profiles = []
    names.map(function () {
        profileCard = {
            name: names[counterIdx++],
            id: counterIdx,
            photo: function () {
                return this.name.replace(' ', '_') + '.jpg';
            },
            isAnswer: false
        }

        profiles.push(profileCard);
    })
return profiles;
}

function init() {
    var profiles = createOpts()
    addOpt(profiles)
    assignIsAnswer(currOpts)
    embedChoices(currOpts)
    onPressStart()
}
function addOpt(profiles) {
    var counter;
    var opts = profiles.slice();
    counter = 0;
    while (counter < 4) {
        var choosenOptIdx = getRandomIntInclusive(0, opts.length - 1);
        var CurrChoice = opts.splice(choosenOptIdx, 1);
        counter++
        console.log(CurrChoice);
        currOpts.push(CurrChoice[0]);
    }
}

function assignIsAnswer(currOpts) {
    var chooseAnsIdx = getRandomIntInclusive(0, currOpts.length - 1);
    currOpts[chooseAnsIdx].isAnswer = true;
}

function nextCard() {
    currOpts = [];
    var profiles = createOpts()
    addOpt(profiles)
    assignIsAnswer(currOpts)
    embedChoices(currOpts)
    nextCardPhoto()
}


//Utilites

function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive 
}


