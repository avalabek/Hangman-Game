my

//change the script above to be src link //

    //link to bootstrap if using//

    // Creates an array that lists out all of the cities 
    var computerChoices = ["Havana","Beruit","Oslo","Istanbul","Nice","Granada", "Copenhagen","Oaxaca","Reykjavik","Zagreb","Zurich", "Bratislava", "Budapest"];
        
    //make computer choose one city at random (tested in console -- works!)
    var computerChoices = computerChoices[Math.floor(Math.random() * computerChoices.length)]; 

    //array to hold --- equal to word length
    var answerArray = [];
    for (var i = 0; i < computerChoices.length; i++){
      answerArray[i] = " _ ";
    };
 

    //take a guess from player

    
    // Do I need alphabet array??? ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o", "p","q","r", "s","t","u","v","w","x","y","z"];

    /*now i am getting a little lost. Need to make a condition that if the user chooses a letter out of the array so index[0]charAt[0] and unitl it reaches computerChoices[0] i < computerChoices[0].length scrolling through the whole array
    var userChoices = function(){

    };*/

    // Creating variables to hold the number of wins. They start at 0.
    var wins = 0;
    

    // This function is run whenever the user presses a key.
    document.onkeyup = function(event) {

      // Determines which key was pressed.
      var userGuess = event.key;

      // Randomly chooses a choice from the options array. This is the Computer's pick of destination cities.
      var computerPick = computerChoices[Math.floor(Math.random() * computerChoices.length)];
      var remainingLetters = computerPick.length;
        //for (var i = 0; i > computerChoices.length; i++)
      

//the above bit is not right

//.length is not lit up? ok? 

      // This logic determines the outcome of the game (win/loss/tie), and increments the appropriate number
      if ((userGuess === computerPick.charAt(i)) && (remainingLetters !== 0))  { 
   
          console.log (answerArray.join())
    };

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
        // Creating a variable to hold our new HTML. Our HTML now keeps track of the user and computer guesses, and wins/losses/ties.
        var html =
          "<p>You chose: " + userGuess + "</p>" +
          //the one below needs to show the ---- move code here
          "<p>Current city: " + answerArray.join() + "</p>" +
          "<p>wins: " + wins + "</p>" ;

        // Set the inner HTML contents of the #game div to our html string
        //document.querySelector("#game").innerHTML = html;
      
    };
  
