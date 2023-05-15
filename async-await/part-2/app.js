$(function() {
    let baseURL = "https://deckofcardsapi.com/api/deck"
    
    // 1.
    async function  pt1(){
        let data = await $.getJSON(`${baseURL}/new/draw`);
        let { suit } = data.cards[0];
        let { value } = data.cards[0];
        console.log(`You pulled a ${value} of ${suit}`);
        };
    pt1();

    // 2.
    async function pt2(){
        let card1 = await $.getJSON(`${baseURL}/new/draw`);
        let deckId = card1.deck_id;
        let card2 = await $.getJSON(`${baseURL}/${deckId}/draw`);
        let cardsArray = [card1, card2];
        cardsArray.forEach(card => {
            let { suit, value } = card.cards[0];
            console.log(`You pulled a ${value} of ${suit}`);
        });
    }   
    pt2();
    
    // 3. 
async function pt3(){
    let $btn = $('button');
    let $div = $(".cards");
    
    let data = await $.getJSON(`${baseURL}/new/shuffle/`);
    
    $btn.show().on("click", async function(){
        let card = await $.getJSON(`${baseURL}/${data.deck_id}/draw/`);
        let cardImg = card.cards[0].image;
        $div.append($("<img>", {src: cardImg}));
        if(data.remaining === 0){
            $btn.remove();
            };
        });
    };
    pt3();
});

