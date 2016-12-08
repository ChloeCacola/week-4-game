//show random number  math random peramiters (19 & 120)

//player clicks crystal to add SPECIFIC points PER Crystal
//crystal must store a random number and stay that way throughout game, but change when game starts again

//Crystal each value random between 1 - 12

//player win:  score matches random number

//player loses:  score goes above random number

//keep track of wins and losses

//will need to restart upon winning or loosing (start game function)

var mainNumber = Math.floor(Math.random() * (120 - 19 +1) + 19);
var crystal1 = Math.floor(Math.random() * (12 - 1 +1) + 1);
var crystal2 = Math.floor(Math.random() * (12 - 1 +1) + 1);
var crystal3 = Math.floor(Math.random() * (12 - 1 +1) + 1);
var crystal4 = Math.floor(Math.random() * (12 - 1 +1) + 1);
var currentScore = 0;
var result
var wins = 0;
var losses = 0;




//start game
var startGame = function() {
	mainNumber = Math.floor(Math.random() * (120 - 19 +1) + 19);
	$("#mainNumber").html(mainNumber);

	crystal1 = Math.floor(Math.random() * (12 - 1 +1) + 1);
	crystal2 = Math.floor(Math.random() * (12 - 1 +1) + 1);
	crystal3 = Math.floor(Math.random() * (12 - 1 +1) + 1);
	crystal4 = Math.floor(Math.random() * (12 - 1 +1) + 1);

	currentScore = 0
	$("#currentScore").html(currentScore);
}

var win = function() {
		wins = wins + 1
		$("#wins").html(wins);
	
};

var lost = function() {
		losses = losses + 1;
		$("#losses").html(losses);
}



startGame();

    $("#crystal1").on("click",function() {
      result = currentScore + crystal1
      currentScore = result
      $("#currentScore").html(currentScore);
      console.log(crystal1);
      if (currentScore === mainNumber) {
      	startGame();
      	win();
      }
      else if (currentScore > mainNumber) {
	     startGame();
	     lost();
	    }
	  else {};

    });

    $("#crystal2").on("click",function() {
       result = currentScore + crystal2
       currentScore = result
       $("#currentScore").html(currentScore)
      console.log(crystal2);
      if (currentScore === mainNumber) {
      	startGame();
      	win();
      }
      else if (currentScore > mainNumber) {
	     startGame();
	     lost();
	    }
	  else {};
    })      

    $("#crystal3").on("click",function() {
       result = currentScore + crystal3
       currentScore = result
       $("#currentScore").html(currentScore)
      console.log(crystal3);
      if (currentScore === mainNumber) {
      	startGame();
      	win();
      }
      else if (currentScore > mainNumber) {
	     startGame();
	     lost();
	    }
	  else {};   
    })

    $("#crystal4").on("click",function() {
       result = currentScore + crystal4
       currentScore = result
       $("#currentScore").html(currentScore)
      console.log(crystal4);
      if (currentScore === mainNumber) {
      	startGame();
      	win();
      }
      else if (currentScore > mainNumber) {
	     startGame();
	     lost();
	    }
	  else {};
    })
 