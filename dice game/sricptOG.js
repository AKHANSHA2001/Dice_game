//generate a random number from 1 to 6
const firstRandomNum= Math.floor(Math.random()*6)+1

//images to be generated
const firstDiceImage='images/dice'+ firstRandomNum+ '.png';

document.querySelectorAll('img')[0].setAttribute('src',firstDiceImage);

//generate a random number from 1 to 6
const secondRandomNum= Math.floor(Math.random()*6)+1

//images to be generated
const secondDiceImage='images/dice'+ secondRandomNum+ '.png';

document.querySelectorAll('img')[1].setAttribute('src',secondDiceImage);

//logic for winner
if(firstRandomNum>secondRandomNum){
    document.querySelector('h1').innerHTML='The Winner is Player 1 !'
}
else if(firstRandomNum<secondRandomNum){
    document.querySelector('h1').innerHTML='The Winner is Player 2 !'
}
else{
    document.querySelector('h1').innerHTML='Its a Draw !'
}