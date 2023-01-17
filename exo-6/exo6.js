// Cours 8 de Codecademy
console.log("exo-6");

var joeInfo = {
    name: "Joe's house",
    rooms: 5,
    garage: false,
    bathrooms: 1 + 2,
    cars: ['Clio', 'Van'],
};


// ! Ne faites pas de modification au dessus de cette ligne !

// 1. Afficher le nombre de voitures de Joe

console.log(joeInfo.cars.length);

// 2. Changer le nombre de salles de bains de Joe : il n'en possède qu'une. Afficher le nouveau nombre de salles de bain.

console.log(joeInfo.bathrooms-2);

// 3. Joe vient d'acquérir un garage. Afficher cette nouvelle information. 

joeInfo.garage = true;
console.log(joeInfo.garage);


let team = {
    players:[
        {
            firstName:"Lebron",
            lastName:"James",
            age: 40
        }
    ],

    games:[
        {
            opponent: "Broncos",
            teamPoints: 42,
            opponentPoints: 27
        }
    ],

    addPlayer(firstName, lastName, age) {
        
        team["players"].push({
            firstName: firstName,
            lastName: lastName,
            age: age,
        });
        },

    addGames(opponent, teamPoints, opponentPoints) {
        team["games"].push({
        opponent: opponent,
        teamPoints: teamPoints,
        opponentPoints: opponentPoints,
    });
},
};

var matchResults = [
    {homeTeam: "Marseille", awayTeam: "Lyon", homeScore: 3, awayScore: 1},
    {homeTeam: "Paris", awayTeam: "Marseille", homeScore: 0, awayScore: 3},
    {homeTeam: "Marseille", awayTeam: "Monaco", homeScore: 4, awayScore: 2},
];

var teamName = "Marseille";

var totalPoints = 0;

for (var i = 0; i < matchResults.length; i++){
var match = matchResults[i];
}


console.log(team.players);
console.log(team.games);
console.log(matchResults);
