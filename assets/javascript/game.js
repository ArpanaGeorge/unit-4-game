//Variable declarations
var randNumber, blueRandNumber, PinkRandNumber,YellowRandNumber,purpleRandNumber ;
var yourTotal = 0;
var wins=0, losses=0;

$(document).ready(function(){
    //Hiding You Win or Loss message
    $(".WinLossStatus").hide();
    //Calling random number generation function for generating random number 
    randomNubergeneration();

    //Adding crystal random number to your total when crystal is clicked
    $(".crystal").click(function(){
       //Hiding You Win or Loss message
      $(".WinLossStatus").hide();
      yourTotal+= parseInt($(this).attr("value"));
      $(".total").html("Your Total"+"<br>"+yourTotal);
      console.log("total"+yourTotal);
      if(yourTotal>randNumber)
       {
            losses++;
            $(".winLossNumber").html("Wins "+"&ensp;"+wins+"<br>"+"Losses "+"&ensp;"+losses);
            $(".WinLossStatus").html("You Loss"+"<br>"+"Number was "+randNumber+" and Your total was "+yourTotal+"<br>"+ "Click crystals to play again");
            $(".WinLossStatus").css("background-color", "red").slideDown("slow");
            randomNubergeneration();
            reset();
        }
        else if(yourTotal===randNumber)
       {
            wins++;
            // console.log("wims"+wins);
            $(".winLossNumber").html("Wins "+"&ensp;"+wins+"<br>"+"Losses "+"&ensp;"+losses);
            $(".WinLossStatus").html("You Win "+"<br>"+"Number was "+randNumber+" and Your total was "+yourTotal+"<br>"+ "Click crystals to play again");
            $(".WinLossStatus").css("background-color", "green").slideDown("slow");
            randomNubergeneration();
            reset();
        }
    });
});

//Function Definitions
function randomNubergeneration()
{
    //Random number user has to guess
    randNumber = getRndInteger(19, 120);
    $(".randomNumber").text(randNumber);
    // console.log("randnum"+randNumber);

    //Random number for blue crystal
    blueRandNumber = getRndInteger(1, 12);
    console.log("bluecrystal randnum="+blueRandNumber);
    $("#blueCrystal").attr("value",blueRandNumber);
    // console.log($("#blueCrystal").attr("value"));
    
    //Random number for pink crystal
    PinkRandNumber = getRndInteger(1, 12);
    // console.log("pinkcrystal randnum="+PinkRandNumber);
    $("#pinkCrystal").attr("value",PinkRandNumber);

    //Random number for yellow crystal
    YellowRandNumber = getRndInteger(1, 12);
    // console.log("yellowcrystal randnum="+YellowRandNumber);
    $("#yellowCrystal").attr("value",YellowRandNumber);

    //Random number for green crystal
    purpleRandNumber = getRndInteger(1, 12);
    // console.log("greencrystal randnum="+purpleRandNumber);
    $("#purpleCrystal").attr("value",purpleRandNumber);
}


//Random Number generation function
function getRndInteger(min, max) 
{
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}

//Reset Function for resetting everything when one round of game is over
function reset()
{
    yourTotal = 0;
    $(".total").html("Your Total"+"<br>"+yourTotal);
    //$(".WinLossStatus").hide();
}

