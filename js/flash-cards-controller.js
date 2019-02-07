'use strict'
var answer;
var currCar = '';
var flippingPhotos;

function embedChoices() {
    var counter = 0;
    currOpts.forEach(function (opt) {
        ++counter
        var embedCurrentOpt = document.querySelector(`.opt${counter}`)
        console.log(embedCurrentOpt);
        embedCurrentOpt.innerHTML = `<h3>${opt.name}</h3>`;

        if (opt.isAnswer === true) {
            answer = opt;
        }
    })

}
// Display random photos from the 4 Options of the current round
function onPressStart() {
    var cardFlipping = document.querySelector('.flip-vertical-right');
    flippingPhotos = setInterval(function () {
        var choosenOptIdx = getRandomIntInclusive(0, currOpts.length - 1);
        var CurrChoice = currOpts[choosenOptIdx];
        console.log(CurrChoice);
        cardFlipping.innerHTML = `<img class="card-img" src="img/${CurrChoice.photo()}" >`;
    }, 300)


}

function onUserResponse(optDiv, ev) {
    var optsToggleAnim = document.querySelector('.memoryBox')
    console.log(optsToggleAnim);

    //  = document.querySelectorAll('.puff-in-center')
    if (answer.name === optDiv.textContent) {
        // ev.preventDefault()
        console.log('You are right');
        optDiv.classList.add('shake-vertical');
        optDiv.classList.add('bg-success');
        setTimeout(function () {
        }, 1200)
        setTimeout(function () {
            optsToggleAnim.classList.add('puff-in-center');
           
            nextCard();
            // debugger;
            optDiv.classList.remove('bg-success');
            optDiv.classList.remove('shake-vertical');
            // optDiv.classList.remove('bg-success');  
            // debugger;
            // cardFlip();
        }, 800)
        setTimeout(function () {

            optsToggleAnim.classList.remove('puff-in-center')
        }, 1300)
    } else {
        console.log('Try again');
        optDiv.classList.toggle('shake-horizontal')
        optDiv.classList.add('bg-danger');
        setTimeout(function () {
            optDiv.classList.remove('bg-danger');
        }, 1000);
    }
}

var isBackSide = true;

function cardFlip(cardFlipped) {
    cardFlipped.classList.remove('flip-vertical-right');
    clearInterval(flippingPhotos);
    // currCard = document.querySelector('.card-guess');
    if (isBackSide === true) {
        cardFlipped.classList.add('cardFlip');
        cardFlipped.innerHTML = `<img class="card-img" src="img/${answer.photo()}" >`;
        isBackSide = false;

    } else if (isBackSide === false) {
        cardFlipped.classList.remove('cardFlip')
        return;
    }
    setTimeout(function () {
        cardFlipped.classList.remove('cardFlip');
    }, 400);
}

function nextCardPhoto() {
    var catchCard = document.querySelector('.card-guess')
    catchCard.classList.add('puff-in-center')
    catchCard.innerHTML = `<img class="card-img" src="img/${answer.photo()}" >`;
    setTimeout(function() {
        catchCard.classList.remove('puff-in-center')
    }, 1000)
}


