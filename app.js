const max = prompt("Enter the max number");
const random = Math.floor(Math.random() * max) + 1;
//console.log(random);

let guess = prompt("Guess the number or type 'quit' to exit");

while(true){
     if(guess == 'quit'){
        console.log('Quit The Game');
        break;
     }
      if (guess == random){
        console.log("Congratulation!! You Guessed Correct number");
        break;
     }else if(guess< random){
       guess = prompt("hint: Your guess is too small!! Please try again");
     }else {
       guess = prompt("hint: Your guess is too large!! Please try again");
     }
     
}