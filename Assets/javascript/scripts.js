  // Creates an array that lists out all of the cities 
    var wordBank = ["Havana"];
    //,"Beruit","Oslo","Istanbul","Nice","Granada", "Copenhagen","Oaxaca","Reykjavik","Zagreb","Zurich", "Bratislava", "Budapest"];
//note: I have taken everything out of word bank just to see if I can get it to work with one item only.
    //"Beruit","Oslo","Istanbul","Nice","Granada", "Copenhagen","Oaxaca","Reykjavik","Zagreb","Zurich", "Bratislava", "Budapest"];
        
    
    //array to hold --- equal to word length
    var answerArray = [];
    for (var i = 0; i < wordBank.length; i++){
      answerArray[i] = "_";
    };
 // Creating variables to hold the number of wins. They start at 0.right now have losses in but will delete once working
    var wins = 0;
    
    var guessesLeft = 15;

    var blanks; 
    var count = 0;
     

    
   /*this isn't workign but idea is start up starts game again prints random blanks
   function startUp() {
  for (var i = 0; i<city.length; i++){
    answerArray[i] = " _ ";
  }
blanks = answerArray.join(" ");
document.getElementById("answer").innerHTML = blanks; 

}*/


    //change losses to list letters guessed

 // This function is run whenever the user presses a key.

//the conditionals are all within the event brackets
document.onkeyup = function(event){

//determines which key was pressed.
	var userGuess = event.key;
	var lettersPicked = userGuess;
	
//make computer choose one city at random (tested in console -- works!)
    var city = wordBank[Math.floor(Math.random() * wordBank.length)]; 
    var gameOver = "<h1>Game over! Try again.</h1>"
    //var picture = "src="assets/images/desert.jpg" alt="Nice, France"


//this not working something with city var? as it isn't a string? also can't get city to console.log
      /*if (userGuess === city.charAt[i])  {
          wins++;
        
        } else { 
          guessesLeft--}*/



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
        } else if (guessesLeft >=1 ){
          guessesLeft--; 
        }
          else if (guessesLeft === 0) { 
          document.querySelector("#cityName").innerHTML = "Stay in Arizona.";
          document.querySelector("#title").innerHTML = "Game over! Try again.";
          
        }
        //OK you don't want an alert here you want to grab an html element and change that. so 
        
        
//Need to somehow get each character from the city word and evaluate it so would that be city.charAt[i]
//also wins only works when only havana is in. need to write if clauses for all? that seems silly
       
        
// Creating a variable to hold our new HTML. Our HTML now keeps track of the user and computer guesses, and wins/losses/ties.
        var html =
          "<p>You chose: " + userGuess + "</p>" +
          "<p>Wins: " + wins + "</p>" +
          "<p>Letters picked already: " + userGuess +  "</p>" +
          "<p>Guesses Left: " + guessesLeft + "</p>";
          
        // Set the inner HTML contents of the #game div to our html string
        document.querySelector("#game").innerHTML = html;
      }        
