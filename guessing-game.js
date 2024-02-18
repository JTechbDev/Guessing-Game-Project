const readline = require('node:readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });
  let secretNumber = 24;


function checkGuess(num){
    if (num > secretNumber){
        console.log("Too High")
        return false;
    }
    if (num < secretNumber){
        console.log("Too Low")
        return false;
    }
    if (num === secretNumber){
        console.log("Correct!!")
        return true;
    }

}

  function askGuess() {
    rl.question("Enter a guess:", num => {

        num = Number(num);

    let result = checkGuess(num);
    if(result === true){
        console.log("You Win");
        rl.close();
    }
    else {
        askGuess();

    }

});
    }

    askGuess();



// let secretNumber = 24;


// function checkGuess(num){
//     if (num > secretNumber){
//         console.log("Too High")
//         return false;
//     }
//     if (num < secretNumber){
//         console.log("Too Low")
//         return false;
//     }
//     if (num === secretNumber){
//         console.log("Correct!!")
//         return true;
//     }

// }


// checkGuess(24);
