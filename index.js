// ⭐️ Example Challenge START ⭐️

/**
 * ### Challenge `processFirstItem`
 * 
 * @instructions
 * Implement a higher-order function called `processFirstItem`.
 * It takes two arguments:
 * @param stringList an array of strings.
 * @param callback function that takes a string as its argument.
 * @returns the result of invoking `callback` with the FIRST element in `stringList`.
 * 
 * Example of usage of this higher-order function:
 * Invoking `processFirstItem` passing `['foo', 'bar']` and `(str) => str + str`,
 * should return 'foofoo'.
*/
function processFirstItem(stringList, callback) {
  return callback(stringList[0])
}

// ⭐️ Example Challenge END ⭐️


///// M V P ///////

/* Task 1: `counterMaker`
 * Study the code for counter1 and counter2. Answer the questions below.
 * 
 * 1. What is the difference between counter1 and counter2?
 * The scope of count in counter 1 is local to the function counterMaker and the scope for count in counter 2 is global.
 * 2. Which of the two uses a closure? How can you tell?
 * counter 1 uses a closure because it has a function nested inside of it.
 * 3. In what scenario would the counter1 code be preferable? In what scenario would counter2 be better? 
 * counter1 would be preferable if we want different instances of counts to keep track of, counter2 is better in a scenario where we only want to manipulate a total value.
*/

// counter1 code
function counterMaker() {
  let count = 0;
  return function counter() {
    count++;
  }
}

const counter1 = counterMaker();

// counter2 code
let count = 0;

function counter2() {
  return count++;
}


/* Task 2: inning() 

Write a function called `inning` that generates a random number of points that a team scored in an inning. This should be a whole number between 0 and 2. */

function inning(/*Code Here*/){

    /*Code Here*/
    return function randomNumber () 
    {
      let randNum = 0;
      return randNum = randNum + Math.floor(Math.random() * 3);
    }
}

let innningScore = inning();
console.log(innningScore());
/* Task 3: finalScore()

Write a higher order function called `finalScore` that accepts the callback function `inning` (from above) and a number of innings and and returns the final score of the game in the form of an object.

For example, 

finalScore(inning, 9) might return: 
{
  "Home": 11,
  "Away": 5,
}

*/ 

function finalScore(inning, numInnings){

  /*Code Here*/
  let homeInningScore = inning;
  let awayInningScore = inning;
  let homeScore = 0;
  let awayScore = 0;

  for (let i = 0; i < numInnings; i++) {
    homeScore = homeScore + homeInningScore();
    awayScore = awayScore + awayInningScore();
  }

  const scoreObject = ({
    "Home": homeScore,
    "Away": awayScore
  })

  return scoreObject;
}

console.log(finalScore(inning(),9));

/* Task 4: 

Create a function called `scoreboard` that accepts the following parameters: 

(1) Callback function `getInningScore`
(2) Callback function `inning`
(2) A number of innings

and returns the score at each pont in the game, like so:

1st inning: awayTeam - homeTeam
2nd inning: awayTeam - homeTeam
3rd inning: awayTeam - homeTeam
4th inning: awayTeam - homeTeam
5th inning: awayTeam - homeTeam
6th inning: awayTeam - homeTeam
7th inning: awayTeam - homeTeam
8th inning: awayTeam - homeTeam
9th inning: awayTeam - homeTeam

Final Score: awayTeam - homeTeam */

function scoreboard(getInningScore, numInnings) {
  /* CODE HERE */

  let homeInningScore = getInningScore;
  let awayInningScore = getInningScore;
  let homeScore = 0;
  let awayScore = 0;
  let tempScoreH = 0;
  let tempScoreA = 0;

  for (let i = 0; i < numInnings; i++) {
    tempScoreH = homeInningScore();
    tempScoreA = awayInningScore();
    homeScore = homeScore + tempScoreH;
    awayScore = awayScore + tempScoreA;
    if (i === 0) {
      console.log(`${i+1}st inning: ${tempScoreA} - ${tempScoreH}`)
    }
    else if (i === 1) {
      console.log(`${i+1}nd inning: ${tempScoreA} - ${tempScoreH}`)
    }
    else if (i === 2) {
      console.log(`${i+1}rd inning: ${tempScoreA} - ${tempScoreH}`)
    }
    else {
      console.log(`${i+1}th inning: ${tempScoreA} - ${tempScoreH}`)
    }
  }

  return console.log(`\nFinal Score: ${awayScore} - ${homeScore}`)
}

scoreboard(inning(), 9);


