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
i



   


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
       //var picture = "src="assets/images/desert.jpg" alt="Nice, France"


       //this not working something with city var? as it isn't a string? also can't get city to console.log
       // if (userGuess === city.charAt[i])  {
           // console.log ("You win!");
         
         // } else { 
           // guessesLeft--}





       //the below works!!



       if (guessesLeft === 0) {
           document.querySelector("#cityName").innerHTML = "Stay in Arizona.";
           document.querySelector("#title").innerHTML = "Game over! Try again.";
           // document.querySelector("<img>").innerHTML = 
          
       } else {
           for (var j = 0; j < city.length; j++) {
               if (city[j] === userGuess) {
                   answerArray[j] = userGuess;
                    
                   // correctLetters++;
               }
           }
       }

       if (guessesLeft >= 1) {
           (guessesLeft--)
       }



       //Need to somehow get each character from the city word and evaluate it so 
       // would that be city.charAt[i]
       //also wins only works when only havana is in. need to write if clauses for all? that seems silly





       //OK now you need the game to start again. how to do this? 
       // Also, can you put all this info in its own function 
       //that you can call for each time user loses 





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
//ok i have the functionlose below but when do i want to call it

// var lose = function () {

    // document.getElementById("#newDiv").innerHTML = city.toUpperCase
    
    // document.getElementById("#title").innerHTML = answerArray.join(" ");
// }
 // if (userGuess === 16) {
  //lose();
 // } 







   // The below snippet works but when you click the page anytime or place it alerts
   document.addEventListener('click', function() {
       window.location.reload(true);
       //alert("Now we start again");
   });
   // window.location.reload(true);