  // Creates an array that lists out all of the cities 
    var wordBank = ["Havana"];

    //"Beruit","Oslo","Istanbul","Nice","Granada", "Copenhagen","Oaxaca","Reykjavik","Zagreb","Zurich", "Bratislava", "Budapest"];
        
    
    //array to hold --- equal to word length
    var answerArray = [];
    for (var i = 0; i < wordBank.length; i++){
      answerArray[i] = "_";
    };
 // Creating variables to hold the number of wins. They start at 0.
    var wins = 0;
    var losses = 0; 
    //change losses to list letters guessed

 // This function is run whenever the user presses a key.

//the conditionals are all within the event brackets
document.onkeyup = function(event){

//determines which key was pressed.
	var userGuess = event.key;
	
//make computer choose one city at random (tested in console -- works!)
    var city = wordBank[Math.floor(Math.random() * wordBank.length)]; 

// This logic determines the outcome of the game (win/loss/tie), and increments the appropriate number
      //if ((userGuess === "h") || (userGuess === "a") || (userGuess === "v")) || (userGuess === "n") {

        if ((userGuess === "h") && (city === "Havana")) {
          wins++;
        } else if ((userGuess === "a") && (city === "Havana")){
          wins++;
        } else if ((userGuess === "v") && (city === "Havana")) {
          wins++;
        } else if ((userGuess === "n") && (city === "Havana")) {
          wins++;
        } else { losses++}

// Creating a variable to hold our new HTML. Our HTML now keeps track of the user and computer guesses, and wins/losses/ties.
        var html =
          "<p>You chose: " + userGuess + "</p>" +
          "<p>Wins: " + wins + "</p>" +
          "<p>losses: " + losses + "</p>";

        // Set the inner HTML contents of the #game div to our html string
        document.querySelector("#game").innerHTML = html;
      }        
//};



//	var userText = document.getElementById("user-text");
 //	document.onkeyup = function(event) {
   //     userText.textContent = event.key;
      
    // document.onkeyup = function(event) {
    //	console.log(event);
      // Determines which key was pressed.
     // var userGuess = event.key;

     


//      var remainingLetters = city.length - userGuess;
        //for (var i = 0; i > wordBank.length; i++){

        //};
      
//make variables to keep track of at top of page put all variables at top that you want to access fix remaining letters to be remaining guesses and letters guessed new array
//the above bit is not right

//.length is not lit up? ok? 

      // This logic determines the outcome of the game (win/loss/tie), and increments the appropriate number
 //     if ((userGuess === city.charAt(i)) && (remainingLetters !== 0))  { 
   
   //       console.log (answerArray.join())
   // };

    //how to tell it to stop when guesses complete?
/* if ((userGuess === "r") || (userGuess === "p") || (userGuess === "s")) {

        if ((userGuess === "r") && (computerGuess === "s")) {
          wins++;
        } else if ((userGuess === "r") && (computerGuess === "p")) {
          losses++;
        } else if ((userGuess === "s") && (computerGuess === "r")) {
          losses++;
        } else if ((userGuess === "s") && (computerGuess === "p")) {
          wins++;
        } else if ((userGuess === "p") && (computerGuess === "r")) {
          wins++;
        } else if ((userGuess === "p") && (computerGuess === "s")) {
          losses++;
        } else if (userGuess === computerGuess) {
          ties++;
        }
*/
        //Creating a variable to hold our new HTML. Our HTML now keeps track of the user and computer guesses, and wins/losses/ties.
        // var html =
          // "<p>You chose: " + userGuess + "</p>" +
          // the one below needs to show the ---- move code here
          // "<p>Current city: " + answerArray.join() + "</p>" +
          // "<p>wins: " + wins + "</p>" ;

        // Set the inner HTML contents of the #game div to our html string
        // document.querySelector("#game").innerHTML = html;
      
 //   };
  
