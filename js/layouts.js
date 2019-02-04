
var answer;
var profileCard
var currOpts = [];
var currCar;
init()
function init() {
    var profiles = createOpts()
    addOpt(profiles)
    assignIsAnswer()
}

function createOpts(profiles) {

    var names = ['dvir kaplan', 'donald trump', 'barak obama', 'engela merkel', 'sadam husain'];
    var counterIdx = 0;
    var profiles = []
    names.map(function () {
        profileCard = {
            name: names[counterIdx++],
            id: counterIdx,
            photo: function () {
                return this.name.replace(' ', '_') + '.png';
            },
            isAnswer: false
        }

        profiles.push(profileCard);
    })
return profiles;
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

function assignIsAnswer() {
    var chooseAnsIdx = getRandomIntInclusive(0, currOpts.length - 1);
    rightAns = currOpts[chooseAnsIdx].isAnswer = true;
}
embedChoices(answer)
function embedChoices() {
    var counter = 0;
    currOpts.forEach(function (opt) {
        counter++
        var embedCurrentOpt = document.querySelector(`.card${counter}`)
        console.log(embedCurrentOpt);
        embedCurrentOpt.innerHTML = `<h3>${opt.name}</h3>`;

        if (opt.isAnswer === true) {
            answer = opt;
        }
    })

}

function onUserResponse(optDiv) {
    if (answer.name === optDiv.textContent) {
        console.log('You are right');
        optDiv.classList.add('bg-success');
        setTimeout(function() {
            optDiv.classList.remove('bg-success');
            init();
            cardFlip();
        }, 2000)
    } else {
        console.log('Try again');
        optDiv.classList.add('bg-danger');
    }
}

var isBackSide = true;
function cardFlip(ev) {
    currCard = document.querySelector('.card');
    if (isBackSide === true) {
        currCard.classList.add('cardFlip');
        currCard.innerHTML = `<img src="img/${answer.photo()}">מי אני?</img>`;
        isBackSide = false;

    } else if (isBackSide === false){
        currCard.classList.remove('cardFlip')
        return;
    }
    setTimeout(function () {
        currCard.classList.remove('cardFlip');
    }, 400);
}


//Utilites

function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive 
}