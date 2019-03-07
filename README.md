# unit-4-game

## Program logic:<br>
->First called the function randomNubergeneration() which will <br>
    - generate the random number which the user has to make by clicking the crystals and assigned it to variable randNumber<br>
    - generate the random number for each crystals and set it as value attribute for each crystal<br>

->Next when user clicks on each crystal, added the random number assigned to each crystal as value attribute and displayed it as your total<br>
    -if(yourTotal>randNumber), incremented Losses and called fuction randomNubergeneration() inorder to generate new random numbers for next round of game and resetted var yourTotal<br>
    -else if(yourTotal===randNumber), incremented wins and called fuction randomNubergeneration() inorder to generate new random numbers for next round of game and resetted var yourTotal to 0<br>