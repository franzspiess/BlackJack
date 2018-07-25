var suits = ['Spades', 'Hearts','Diamonds','Clubs'];
var values = ['2','3','4','5','6','7','8','9','10','J','Q','K','A'];
var deck = [];

function createDeck() {
    for (let i=0; i < values.length; i++){
        for (let x = 0; x < suits.length;x++) {
            var weight = parseInt(values[i]);
            if (values[i] === 'J' || values[i] === 'Q' || values[i] === 'K') 
                weight = 10;
            if (values[i] === 'A') 
                weight = 11;
            var card = { value: values[i], suit: suits[x], weight: weight }
            deck.push(card);
        }
    }
}

createDeck();
shuffle();
console.log(deck);

function shuffle() {
    for (let i = 0; i<1000; i++) {
        location1 = Math.floor(Math.random()*deck.length);
        location2 = Math.floor(Math.random()*deck.length);
        let temporary = deck[location1];
        deck[location1] = deck[location2];
        deck[location2] = temporary;
    }

}




function dealHands() {
    for (let i = 0; i<2; i++) {
        for (let x = 0; x<2; x++) {
            let card = deck.pop();
            players[i].Hand.push(card);
            updateDeck();
            /* renderCard(card, x);
            updatePoints(); */
        }
    }

}

function updateDeck()
{
    document.getElementById('deck').innerHTML = deck.length;
}

var hand1 = [];
var hand2; [];

var players = [{Name: 'Player1', ID: 1, Points: 0, Hand: []},{Name: 'House', ID:2, Points: 0, Hand: []}];

/* function createPlayersUI()
{
    document.getElementById('players').innerHTML = '';
    for(var i = 0; i < 2; i++) {
        var div_hand = document.createElement('div');
        var div_points = document.createElement('div');

        div_points.className = 'points';
        div_points.id = 'points_' + i;
        div_player.id = 'player_' + i;
        div_player.className = 'player';
        div_hand.id = 'hand_' + i;

        div_playerid.innerHTML = players[i].ID;
        div_player.appendChild(div_playerid);
        div_player.appendChild(div_hand);
        div_player.appendChild(div_points);
        document.getElementById('players').appendChild(div_player);
    }
} */

function renderCard() {
    document.getElementById("card10").innerHTML = players[0].Hand[0].suit + " " + players[0].Hand[0].value + '        Points: ' + players[0].Hand[0].weight;
}
/* */ 
function start() {
    createDeck();
    shuffle();
    updateDeck();
    dealHands();
    renderCard();   
}