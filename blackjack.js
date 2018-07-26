var suits = ['Spades', 'Hearts','Diamonds','Clubs'];
var values = ['2','3','4','5','6','7','8','9','10','J','Q','K','A'];
var deck = [];
var points0 = 0;
var points1 = 0;
var y = 2;
var z = 2;
var card0 = 'card0';
var card1 = 'card1';

function reset() {
    deck = [];
    points0 = 0;
    points1 = 0;
}

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
            //updateDeck();
            // renderCard();
            // updateDeck();
            // updatePoints();
        }
    }
    //updatePoints();
    //renderCard();

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
    document.getElementById("card00").innerHTML = players[0].Hand[0].suit + " " + players[0].Hand[0].value;// + '        Points: ' + players[0].Hand[0].weight;
    document.getElementById("card01").innerHTML = players[0].Hand[1].suit + " " + players[0].Hand[1].value;// + '        Points: ' + players[0].Hand[1].weight;
    document.getElementById("score0").innerHTML = points0;
    document.getElementById("card10").innerHTML = players[1].Hand[0].suit + " " + players[1].Hand[0].value;// + '        Points: ' + players[1].Hand[0].weight;
    document.getElementById("card11").innerHTML = players[1].Hand[1].suit + " " + players[1].Hand[1].value;
    document.getElementById("score1").innerHTML = points1;
}
/* */ 
function start() {
    reset();
    createDeck();
    shuffle();
    updateDeck();
    dealHands();
    updatePoints();
    renderCard();   ;
}


 function updatePoints() {
        for (let x=0; x<2; x++) {
            points0 += players[0].Hand[x].weight;}
            console.log(points0);
        for (let x=0; x<2; x++) {
            points1 += players[1].Hand[x].weight;}
            console.log(points1);
} 

dealHands();
updatePoints();

function hitMe() {
    let card = deck.pop();
    players[0].Hand.push(card);
    document.getElementById(card0 + y).innerHTML = players[0].Hand[y].suit + " " + players[0].Hand[y].value;
    points0 += players[0].Hand[y].weight;
    document.getElementById("score0").innerHTML = points0;
    y++;
    if (points0 > 21) {
        document.getElementById("result0").innerHTML = 'YOU LOSE!'
    }
    
}

function stay() {
    while (points1 <= 21) {
        let card = deck.pop();
        players[0].Hand.push(card);
        document.getElementById(card1 + z).innerHTML = players[1].Hand[z].suit + " " + players[1].Hand[z].value;
        points1 += players[1].Hand[z].weight;
        document.getElementById("score1").innerHTML = points1;
        z++;
    }
    document.getElementById("result1").innerHTML = 'HOUSE LOSES!'

}