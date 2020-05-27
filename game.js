var newArray = ["red","yellow","green","blue"];

var gamePattern = [];

var userClickedPattern = [];


var started = false;
var level = 0;

$("body").removeClass("body-class");

$(document).keypress(function() {
  if (!started) {
    $("#level-title").text("level "+level);
    nextSequence();
    started = true;
  }});

$(".btn").on("click", function(event){

  var userChosenColor = event.target.id;
  userClickedPattern.push(userChosenColor);

  $("#"+userChosenColor).fadeIn(100).fadeOut(100).fadeIn(100);
  var clickAudio = new Audio ("sounds/"+userChosenColor+".mp3");
  clickAudio.play();

  checkAnswer(userClickedPattern.length-1);
});

function checkAnswer(currentlevel) {

  if(userClickedPattern[currentlevel] === gamePattern[currentlevel]) {

    if (userClickedPattern.length === gamePattern.length){
      setTimeout(function () {
        nextSequence();
      }, 1000);
    }

  }

  else {
    $("body").addClass("body-class")
    setTimeout(function(){
      $("body").removeClass("body-class")
    }, 500);
    $("#level-title").text("Gamer Over!, Press A Key to Restart");
    var wrong = new Audio ("sounds/wrong.mp3");
    wrong.play();
    restartFunction();
  }

}

function nextSequence(){

  userClickedPattern = [];

  level++;
  $("#level-title").text("level "+level);

  var randomNumber = Math.floor(Math.random()*4);
  var randomChoosenColor = newArray[randomNumber];
  gamePattern.push(randomChoosenColor);

  $("#"+randomChoosenColor).fadeIn(100).fadeOut(100).fadeIn(100);
  var audio = new Audio ("sounds/"+randomChoosenColor+".mp3");
  audio.play();

}

function restartFunction() {
  gamePattern = [];
  level = 0;
  started = false;
}






// $("body").on("keypress", nextSequence);
//
// $("#"+randomChoosenColor).on("click", function(){
//   if (click === gamePattern) {
//     nextSequence();
//   }
//   else {
//     $("h1").text("Game Over!")
//     var wrong = new Audio ("sounds/wrong.mp3")
//     wrong.play();
//   }
// })
//
//
// if (click === gamePattern) {
//   nextSequence();
// }



// Connecting sounds with buttons
// $(".btn").on("click",function (event){
//   playAudioUponClick(event.target.className);
// })
//
// function playAudioUponClick() {
//   switch (event.target.className) {
//
//     case "btn green":
//       var green = new Audio("sounds/green.mp3");
//       green.play();
//     break;
//
//     case "btn blue":
//       var blue = new Audio("sounds/blue.mp3");
//       blue.play();
//     break;
//
//     case "btn red":
//       var red = new Audio("sounds/red.mp3");
//       red.play();
//     break;
//
//     case "btn yellow":
//       var yellow = new Audio("sounds/yellow.mp3");
//       yellow.play();
//     break;
//
//     default:
//
//   }
// }
//
//
// function playAudioUponRefresh() {
//   switch (idName) {
//
//     case "#green":
//       var green = new Audio("sounds/green.mp3");
//       green.play();
//     break;
//
//     case "#blue":
//       var blue = new Audio("sounds/blue.mp3");
//       blue.play();
//     break;
//
//     case "#red":
//       var red = new Audio("sounds/red.mp3");
//       red.play();
//     break;
//
//     case "#yellow":
//       var yellow = new Audio("sounds/yellow.mp3");
//       yellow.play();
//     break;
//
//     default:
//
//   }
// }
