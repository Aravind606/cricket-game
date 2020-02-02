var team1score = [];
var team2score = [];
var team1wicket = 0;
var team1total = 0;
var storeplayertotal = [];
// 
var playerrun = [
    [],
    [],
    [],
    [],
    []
]
// var playerrun = [{
//     player1: [],
//     player2: [],
//     player3: [],
//     player4: [],
//     player5: [],
// }]
var playerary = 0;
var total = 0;
var playertotal;
var totalrun;

function team1() {
    var score = [1, 2, 3, 4, 6, 0];
    team1randomnum = Math.floor(Math.random() * 6);



    if (team1wicket < 5 && team1score.length <= 18) {
        team1score.push(score[team1randomnum]);

        //console.log(team1score);
        if (score[team1randomnum] == 0 || playerrun[playerary].length == 5 || team1score.length == 18) {
            playerrun[playerary].push(score[team1randomnum]);
            console.log(playerrun[playerary]);
            playertotal = playerrun[playerary].reduce(function (acc, val) {
                return acc + val;
            }, 0)
            console.log("playertotal is" + playertotal);
            storeplayertotal.push(playertotal);
            console.log(storeplayertotal);
            var playerwic = document.getElementById("player" + playerary);
            // playerrun[player].push(team1score)
            // console.log(playerrun);
            var h1 = document.createElement("h6");
            var textnode = document.createTextNode(score[team1randomnum])
            h1.appendChild(textnode)
            playerwic.appendChild(h1);
            playerary++;
            // console.log(playerary)
            team1wicket++;
            // playerrun[play];
        } else {
            playerrun[playerary].push(score[team1randomnum]);
            var playerscore = document.getElementById("player" + playerary);
            // playerscore.innerHTML = ""
            // playerscore.innerHTML = score[team1randomnum]
            var h1 = document.createElement("h6");
            var textnode = document.createTextNode(score[team1randomnum])
            h1.appendChild(textnode)
            //var player = document.getElementById("over1");
            playerscore.appendChild(h1);
        }
        if (team1score.length == 18) {
            totalrun = team1score.reduce(function (acc, val) {
                return acc + val;
            }, 0)
            console.log(totalrun)
        }
        if (team1score.length <= 6) {
            var h1 = document.createElement("h6");
            var textnode = document.createTextNode(score[team1randomnum])
            h1.appendChild(textnode)
            var player = document.getElementById("over1");
            player.appendChild(h1);

        }
        if (team1score.length >= 7 && team1score.length <= 12) {
            var h1 = document.createElement("h6");
            var textnode = document.createTextNode(score[team1randomnum])
            h1.appendChild(textnode)
            var player = document.getElementById("over2");
            player.appendChild(h1)
        }
        if (team1score.length >= 13 && team1score.length <= 18) {
            var h1 = document.createElement("h6");
            var textnode = document.createTextNode(score[team1randomnum])
            h1.appendChild(textnode)
            var player = document.getElementById("over3");
            player.appendChild(h1)
        }
        // var h1 = document.createElement("h6");
        // var textnode = document.createTextNode(score[team1randomnum])
        // h1.appendChild(textnode);
        // var player1 = document.getElementById("player1");
        // player1.appendChild(h1)
        // if (score[team1randomnum] != 0) {
        //     var h1 = document.createElement("h6");
        //     var textnode = document.createTextNode(score[team1randomnum])
        //     h1.appendChild(textnode);
        //     var player1 = document.getElementById("player1");
        //     player1.appendChild(h1)
        // }
        // else {
        //     play++;
        //     var plays = document.getElementById("player" + play)
        //     var h1 = document.createElement("h6");
        //     var textnode = document.createTextNode(score[team1randomnum])
        //     h1.appendChild(textnode);
        //     plays.appendChild(h1);
        // }
        // else if (playerrun[play].length <= 6) {
        //     if (score[team1randomnum] != 0) {
        //         playerrun[play].push(score[team1randomnum]);
        //     }

        //     console.log(playerrun[play]);
        //     console.log(playerrun);

        //     var h1 = document.createElement("h6");
        //     var textnode = document.createTextNode(score[team1randomnum]);
        //     h1.appendChild(textnode);
        //     var player1 = document.getElementById("player" + play);
        //     player1.appendChild(h1);
        // }


    }



}
var max = Math.max(...storeplayertotal);
console.log("top runer" + max);