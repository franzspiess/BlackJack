var suits = ['Spades', 'Hearts','Diamonds','Clubs'];
var values = ['2','3','4','5','6','7','8','9','10','J','Q','K','A'];
var players = [{Name: 'Player1', ID: 1, Points: 0, Hand: [], AceCount: 0},{Name: 'House', ID:2, Points: 0, Hand: [], AceCount: 0}];
var deck = [];
var points0 = 0;
var points1 = 0;
var y = 2;
var z = 2;
var card0 = 'card0';
var card1 = 'card1';
var count = 0;
var u = 0;

function reset() {
    deck.length = 0;
    points0 = 0;
    points1 = 0;
    y = 2;
    z = 2;
    count = 0;
    $('.cards0').children('.card').remove();
    $('.cards1').children('.card').remove();
    $("#score0").empty();
    $("#score1").empty();
    document.getElementById('deck').innerHTML = deck.length;
    $("#result0").empty();
    $("#result1").empty();
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
            /*if (card.weight = 11){
                players[i].AceCount +=1
            } */
            players[i].Hand.push(card);
            if (card.weight === 11) {
                players[i].AceCount ++
            }
            
            // updateDeck();
            //updatePoints();
        }
    }
    updatePoints();
    updateDeck();
    renderCard();
    
    //updatePoints();
    //renderCard();
}

function updateDeck() {
    document.getElementById('deck').innerHTML = deck.length;
    $("#acecount0").html(players[0].AceCount);

}

var hand1 = [];
var hand2 = [];



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
    /*var el = document.createElement('div');
        el.className = 'card';
        el.innerHTML = players[0].Hand[0].suit + " " + players[0].Hand[0].value;
        cards.appendChild(el)*/
        for (let i = 0; i < 2; i++) {
            $( ".cards0" ).append( "<div class='card'>"+players[0].Hand[i].suit + " " + players[0].Hand[i].value+"</div>");
        };
        
        for (let i = 0; i < 2; i++) {
                $( ".cards1" ).append( "<div class='card'>"+players[1].Hand[i].suit + " " + players[1].Hand[i].value+"</div>");
        };
        /* $( ".cards" ).append( "<div class='card'>"+players[0].Hand[0].suit + " " + players[0].Hand[0].value+"</div>");
        $( ".cards" ).append( "<div class='card'>"+players[0].Hand[0].suit + " " + players[0].Hand[0].value+"</div>");
        $( ".cards" ).append( "<div class='card'>"+players[0].Hand[0].suit + " " + players[0].Hand[0].value+"</div>");
        $( ".cards" ).append( "<div class='card'>"+players[0].Hand[0].suit + " " + players[0].Hand[0].value+"</div>");*/    
    //document.getElementById("card00").innerHTML = players[0].Hand[0].suit + " " + players[0].Hand[0].value;
    //document.getElementById("card01").innerHTML = players[0].Hand[1].suit + " " + players[0].Hand[1].value;// + '        Points: ' + players[0].Hand[1].weight;
    //document.getElementById("card10").innerHTML = players[1].Hand[0].suit + " " + players[1].Hand[0].value;// + '        Points: ' + players[1].Hand[0].weight;
    //document.getElementById("card11").innerHTML = players[1].Hand[1].suit + " " + players[1].Hand[1].value;
    $("#score0").html("YOUR SCORE: " + points0);
    $("#score1").html("HOUSE SCORE: " + points1);
    /*document.getElementById("score0").innerHTML = points0;
    document.getElementById("score1").innerHTML = points1; */
}
/* */ 
function start() {
    reset();
    createDeck();
    shuffle();
    //updateDeck();
    dealHands();
    //updatePoints();
    //renderCard();
}


 function updatePoints() {
        for (let x=0; x<2; x++) {
            points0 += players[0].Hand[x].weight;}
            // console.log(points0);
        for (let x=0; x<2; x++) {
            points1 += players[1].Hand[x].weight;}
            //console.log(points1);
} 

dealHands();
updatePoints();
console.log(players[0].Hand.AceCount)


function hitMe() {
    let card = deck.pop();
    updateDeck();
    players[0].Hand.push(card);
    //document.getElementById(card0 + y).innerHTML = players[0].Hand[y].suit + " " + players[0].Hand[y].value;
    $( ".cards0" ).append( "<div class='card'>"+players[0].Hand[y].suit + " " + players[0].Hand[y].value+"</div>");
    points0 += players[0].Hand[y].weight;
    //document.getElementById("score0").innerHTML = points0;
    $("#score0").html("YOUR SCORE: " + points0);
    y++;
    if (points0 > 21 && players[0].AceCount > 0 ) {
        points0 -= 10;
        players[0].AceCount --;
        $("#score0").html("YOUR SCORE: " + points0);
        $("#acecount0").html(players[0].AceCount);
    } 
    
    if (points0 > 21) { 
        $("#result0").html("PLAYER LOSES");
    }
        //document.getElementById("result0").innerHTML = 'YOU LOSE!'
    
    
}

function stay() {
    setTimeout(stayInner(), 5000);
}

function stayInner() {
    u ++;
    while (points1 <= 21) {
        if (points1 >= 17) {
            break;
        }
        let card = deck.pop();
        updateDeck();
        players[0].Hand.push(card);
        //document.getElementById(card1 + z).innerHTML = players[1].Hand[z].suit + " " + players[1].Hand[z].value;
        $( ".cards1" ).append( "<div class='card'>"+players[0].Hand[z].suit + " " + players[0].Hand[z].value+"</div>");
        points1 += players[1].Hand[z].weight;
        //document.getElementById("score1").innerHTML = points1;
        $("#score1").html("YOUR SCORE: " + points1);
        z++;
    }
    if (points0 <= 21 && points1 > 21) {
        $("#result0").html("PLAYER WINS");
        $("#result1").html("HOUSE LOSES");
    }
    //document.getElementById("result1").innerHTML = 'HOUSE LOSES!'
    checkScore();
}

function checkScore() {
    if (points0 <= 21 && points1 <= 21) {
        if (points0 > points1) {
            $("#result0").html("PLAYER WINS");
            $("#result1").html("HOUSE LOSES");
        } else if ((points1 > points0)) {
            $("#result0").html("PLAYER LOSES");
            $("#result1").html("HOUSE WINS");
        } else if (points0 === points1) {
            $("#result0").html("DRAW");
            $("#result1").html("DRAW");
        }

    }


}

function aceCheck(u) {
    if (player[u].AceCount > 0) {
        players[u].Points -= 10;
    }
}

//