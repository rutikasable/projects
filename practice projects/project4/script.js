let num = Math.floor((Math.random()*100)+1); //generate random number 

const input = document.querySelector("#input"); //input box
const submit = document.querySelector("#button"); //submit button
const preguess = document.querySelector("#preguess"); //previous guesses 
const remguess = document.querySelector("#remguess"); //remaining number of guesses
const comment = document.querySelector("#comment"); //input is lower or higher
const win = document.querySelector("#win");
const loss = document.querySelector("#loss");
const restart = document.querySelector("#restart"); //restart message
const result = document.querySelector("#result");   //result message paragraph

input.addEventListener("keydown", function(e){        //enter is submit
  if (e.key === "Enter"){
    submit.click();
  }
});

let guessarray =[]; //array initialized
let remaining=10;   //guesses remaining
let game = true;    //control whether the game is active 

if (game){
  submit.addEventListener('click',function(e){
    e.preventDefault();
    const guess = parseInt(input.value);
    validateguess(guess);                         
  })
} //addeventlistener when event is active,input is taken from user & given further to get validated

function validateguess (guess){
  if (isNaN(guess)){
    alert("Please enter a number");
  }
  else if (guess <= 0){
    alert("Please enter a number greater than 0");
  }
  else if (guess > 100){
    alert("Please enter a number lesser than 101");
  } //validity is checked
  else{
    guessarray.push(guess);                                   //pushed in array
    if(remaining === 1){
      displayguess(guess);                                    //display array and remaining guess
      loss.innerHTML=`Game Over !!! Number was ${num}`;       //displays message
      endgame();                                              //calling endgame for end msg
    }
    else{
      displayguess(guess);                                    //display array and remaining guess
      checkguess(guess);                                      //guessed no. is sent to get checked
    }
  }
}

function checkguess (guess){
  if(guess===num){                                               //comparison
    win.innerHTML=`You Guessed it Right !!!`;                    //printing msg
    endgame();                                                   //calling endgame for end msg
  }
  else if(guess < num){                                          //comparison
    comment.innerHTML=`Number is greater than guessed number`;   //printing msg
  }
  else if(guess > num){                                          //comparison
    comment.innerHTML=`Number is smaller than guessed number`;   //printing msg
  }
}

function displayguess (guess){                                   
  input.value='';                      // input becomes null 
  preguess.innerHTML +=`${guess} `;    // array update
  remaining--;                         // decrement of remaining guesses
  remguess.innerHTML=`${remaining}`;   // printing remaining guesses
}


function endgame () {
  input.value='';                                        //input beomes null
  input.setAttribute('disabled','');                     //input disabled
  restart.classList.add('button');                       //adding button
  restart.innerHTML=`<p id="regame">Start New Game</p>`; //named start new game
  result.appendChild(restart);                           //restart appnded in result
  game=false;                                            //game stops
  newgame();                                             //calling newgame
}

function newgame(){
  const regamebutton = document.querySelector("#regame");  //new button
  regamebutton.addEventListener("click", function(e) {
    num = Math.floor((Math.random()*100)+1);               //random number
    guessarray=[];                                         //array elements removed
    remaining=10;                                          //remaining restored
    preguess.innerHTML='';                                 //clear array guesses
    remguess.innerHTML=remaining;                          //reset remaining guesses
    win.innerHTML='';                                      //clear low or high message
    comment.innerHTML='';
    loss.innerHTML='';
    input.removeAttribute("disabled");                     //disabled removed
    result.removeChild(restart);                           //child removed
    game=true;
  })
}
