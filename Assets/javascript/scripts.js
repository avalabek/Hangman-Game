var wordBank = ["havana", "beruit", "oslo", "istanbul", "nice", "granada", "copenhagen", "oaxaca", "reykjavik", "zagreb", "zurich", "bratislava", "budapest"];

var city = wordBank[Math.floor(Math.random() * wordBank.length)];

//array to hold blanks equal to city  length
var answerArray = [];
for (var i = 0; i < city.length; i++) {
    answerArray[i] = "_";
}

var reload;
var gameOver;

var guessCount;

var correctLetters = 0;
// Creating variables to hold the number of wins. They start at 0.right now have losses in but will delete once working
// var wins = 0;

var guessesLeft = 15;
//so once you get reload to work use this code with changing consolelog to calling the reload function






//change losses to list letters guessed

// This function is run whenever the user presses a key.

//the conditionals are all within the event brackets
document.onkeyup = function(event) {

    //determines which key was pressed.
    var userGuess = event.key;

    //isn't working as userGuess changes with each guess
    var lettersPicked = [userGuess + " "];
    lettersPicked.push(userGuess)




    //make computer choose one city at random (tested in console -- works!)

    var gameOver = "<h1>Game over! Click the mouse to play again.</h1>"
    //var picture = "src="Assets/images/desert.jpg" alt="Nice, France"


    //the below works!!



    if (guessesLeft === 0) {
        document.querySelector("#cityName").innerHTML = "Stay in Arizona.";
        document.querySelector("#title").innerHTML = "Game over! Try again.";
        // document.querySelector("<img>").innerHTML = 

    } else {
        for (var j = 0; j < city.length; j++) {
            if (city[j] === userGuess) {
                answerArray[j] = userGuess;

                correctLetters++;
                if (correctLetters === city.length) {
                    document.querySelector("#cityName").innerHTML = "Take a trip to " + city + "!";
                    document.getElementById("newPlace").src = "Assets/images/nice.jpg";
                    // alert(city); <img src="Assets/images/desert.jpg" class="thumbnail" id="newPlace">
                }
            }
        }
    }
    if (guessesLeft >= 1) {
        (guessesLeft--)
    }


//in order to write guesses to screen instead of having them change, I need an empty string and then use .this but I am out of time.


    // Creating a variable to hold our new HTML. Our HTML now keeps track of the user and computer guesses, and wins/losses/ties.
    var html =
        "<p>  " + answerArray.join(" ").toUpperCase() + "</p>" +
        "<p>You chose: " + lettersPicked + "</p>" +
        "<p>Letters picked already: " + userGuess + "</p>" +
        "<p>Guesses Left: " + guessesLeft + "</p>";

    // Set the inner HTML contents of the #game div to our html string
    document.querySelector("#answer").innerHTML = html;
}
console.log(answerArray.join(" "));


// The below snippet works but when you click the page anytime or place it alerts
document.addEventListener('click', function() {
    window.location.reload(true);
    //alert("Now we start again");
});
// window.location.reload(true);