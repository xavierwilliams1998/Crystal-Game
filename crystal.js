var crystals={
    red:
    {
        name:"red",
        value: 0
    },
    blue:
    {
        name:"blue",
        value:0
    },
    green:
    {
        name:"green",
        value:0
    },
    yellow:
    {
        name:"yellow",
        value:0
    }
};

var currentScore = 0;
var markerScore = 0;


var winCount= 0;
var lossCount = 0;

var getRandom = function (min,max){
    return Math.floor(Math.random() * (max - min +1)) + min;
};
// Create a function that starts the Game...
var startGame = function(){
    currentScore =0;

    markerScore = getRandom(20,200);
// Set the crystals to different values
    crystals.red.value = getRandom(1,10);
    crystals.blue.value = getRandom(1,10);
    crystals.green.value = getRandom(1,10);
    crystals.yellow.value = getRandom(1,10);

    // changes the html and reflect all of the changes
    $("#my-score").text(currentScore);
    $("#marker-score").text(markerScore);

    console.log("-----------------------------------");
    console.log("marker Score: " + markerScore);
    console.log("Blue: " + crystals.blue.value + " | Green: " + crystals.green.value + " | Red: " + crystals.red.value +
      " | Yellow: " + crystals.yellow.value);
    console.log("-----------------------------------");
  };




var winCheck = function(){
    if(currentScore > markerScore){
        alert("Sorry.You lost!");
        console.log("You Lost");

        lossCount++;


    $("#loser-count").text(lossCount);

    startGame();
    }
    else if (currentScore === markerScore){
        alert("Congragulations!You Won");

        winCount++;
        $("#win-count").text(winCount)

        startGame();
    }
};

function valuesAdd(clickedCrystal){
    // console.log(clickedCrystal.value);
    currentScore += clickedCrystal.value;
    $("#my-score").text(currentScore);
    console.log(currentScore);
};


startGame();

$(document).on("click","#red",function(){
    valuesAdd(crystals.red);
    winCheck();
 });
$(document).on("click","#blue",function(){
    valuesAdd(crystals.blue);
    winCheck();
});
$(document).on("click","#green",function(){
    valuesAdd(crystals.green);
    winCheck();
});
$(document).on("click","#yellow",function(){
    valuesAdd(crystals.yellow);
    winCheck();
});