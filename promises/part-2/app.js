$(function() {
let baseURL = "https://deckofcardsapi.com/api/deck"

// 1.
$.getJSON(`${baseURL}/new/draw`)
    .then(data => {
        let { suit } = data.cards[0];
        let { value } = data.cards [0];
        console.log(`You pulled a ${value} of ${suit}`);
        })

// 2.
let firstCard = null;
$.getJSON(`${baseURL}/new/draw`)
    .then(data => {
        firstCard = data.cards[0];
        let deckId = data.deck_id;
        return $.getJSON(
            `${baseURL}/${deckId}/draw`
        )})
    .then(data => {
        let secondCard = data.cards[0];
        let cardsArray = [firstCard, secondCard];
        cardsArray.forEach(function(card){
            console.log(`You pulled a ${value} of ${suit}`);
        });
    });


// 3. 
let $btn = $('button');
let $div = $(".cards");
let deckId = null;

$.getJSON(`${baseURL}/new/shuffle/`)
.then(data => {
    $btn.show();
    deckId = data.deck_id;
});

$btn.on("click", function(){
    $.getJSON(`${baseURL}/${deckId}/draw/`)
    .then(data => {
        let cardImg = data.cards[0].image;
        $div.append($("<img>", {src: cardImg}));
        if(data.remaining === 0){
            $btn.remove();
        };
    });
});
});