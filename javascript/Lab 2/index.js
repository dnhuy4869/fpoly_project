const players1 = [
    "Neuer",
    "Pavard",
    "Martinez",
    "Alaba",
    "Davies",
    "Kimmich",
    "Goretzka",
    "Coman",
    "Muller",
    "Gnarby",
    "Lewandowski",
];

const players2 = [
    "Burki",
    "Schulz",
    "Hummels",
    "Akanji",
    "Hakimi",
    "Weigl",
    "Witsel",
    "Hazard",
    "Brandt",
    "Sancho",
    "Gotze",
];

const allPlayers = [...players1, ...players2];

const players1Final = [...players1, 'Thiago', 'Coutinho', 'Perisic'];

const game = {
    team1: "Bayern Munich",
    team2: "Borrussia Dortmund",
    odds: {
        team1: 1.33,
        draw: 3.25,
        team2: 6.5,
    },
    scored: [
        "Lewandowski", "Gnarby", "Akanji", "Hummels"
    ],
    scorers: [
        {
            name: "Lewandowski",
            team: 1,
            scoredCount: 2,
        },
        {
            name: "Gnarby",
            team: 2,
            scoredCount: 2,
        },
        {
            name: "Akanji",
            team: 2,
            scoredCount: 1,
        },
        {
            name: "Hummels",
            team: 2,
            scoredCount: 1,
        },
    ]
}

const printGoals = (players) => {
    players.forEach((player) => {
        console.log(player);
    })
}

printGoals(game.scored);

const printWinner = () => {
    if (game.odds.team1 < game.odds.team2) {
        console.log("Team 1 win");
    }
    else if (game.odds.team2 < game.odds.team1) {
        console.log("Team 2 win");
    }
    else {
        console.log("Draw");
    }
}

printWinner();

const printScoredArray = () => {
    game.scored.forEach((player, index) => {
        console.log(`Goal ${index}: ${player}`);
    })
}

printScoredArray();

const printMatchResult = () => {
    var team1Score = 0;
    var team2Score = 0;
    game.scorers.forEach((player, index) => {
        if (player.team === 1) {
            team1Score += player.scoredCount;
        }

        if (player.team === 2) {
            team2Score += player.scoredCount;
        }
    })

    console.log(`${team1Score}:${team2Score}`);
}

printMatchResult();

const printOdds = () => {
    console.log(`Team 1 winrate: ${game.odds.team1}`);
    console.log(`Team 2 winrate: ${game.odds.team2}`);
    console.log(`Draw: ${game.odds.draw}`);
}

printOdds();

const gameEvents = new Map([
    [17, '⚽ GOAL'],
    [36, '� Substitution'],
    [47, '⚽ GOAL'],
    [61, '� Substitution'],
    [64, '� Yellow card'],
    [69, '� Red card'],
    [70, '� Substitution'],
    [72, '� Substitution'],
    [76, '⚽ GOAL'],
    [80, '⚽ GOAL'],
    [92, '� Yellow card'],
]);

// 1
console.log([...new Set(gameEvents.values())]);

// 2
gameEvents.delete(64);

// 3
console.log(`Events happen every ${90 / gameEvents.size} minutes`);
const time = [...gameEvents.keys()]
console.log(time);

// 4
for (const [min, event] of gameEvents) {
    const half = min <= 45 ? 'FIRST' : 'SECOND';
    console.log(`[${half} HALF] ${min}: ${event}`);
}

//////////////////////////////////////////////////////////

// underscore_case
// first_name
// Some_Variable
// calculate_AGE
// delayed_departur

document.body.append(document.createElement('textarea'));
document.body.append(document.createElement('button'));

document.querySelector('button').addEventListener('click', function () {
    const text = document.querySelector('textarea').value;
    const rows = text.split('\n');
    for (const [i, row] of rows.entries()) {
        const [first, second] = row.toLowerCase().trim().split('_');
        const output = `${first}${second.replace(
            second[0],
            second[0].toUpperCase()
        )}`;
        console.log(`${output.padEnd(20)}${'✅'.repeat(i + 1)}`);
    }
});

(function () {
    const header = document.querySelector('h1');
    header.style.color = 'red';
    document.querySelector('body').addEventListener('click', function () {
        header.style.color = 'blue';
    });
})();