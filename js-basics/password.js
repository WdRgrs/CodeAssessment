// Welcome the user to the password validator tool

// Prompt the user for a password to validate

// Check if the user’s password meets the following constraint:

// At least 10 characters long

// If the user’s password meets the constraint, show a success message to the user

// If the user’s password fails the constraint, show a failure message to the user

const readline = require("readline");

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

console.log('\n\nWelcome user!  This is the password validation tool.')

reader.question("\nAre you ready to generate a passord? \nThis will be quite the journey... \n\ny/n   ", function(answer) {
    if (answer == "y") {
        reader.question("Are you absolutely sure????? \nThis may get a bit silly......... \n\ny/n   ", function(answer) {
            if (answer == "y") {
                console.log("Excellent! Let's get started.")
                reader.question("Enter your password please : ", function(answer) {
                    let xAnswer = answer.toLowerCase()
                    if (xAnswer === "1passwerd1") {
                        console.log("\nYou guessed the correct password!  \nFinally... how many attempts was that?  \nIt's okay, your secret is safe with me... \nNow that you have the best password of ALL TIME.  \nI hope you enjoy your not so random 'ranodmly generated' password! \nGOODBYE");
                    } else if (xAnswer.length < 10) {
                        console.log("\nI'm sorry, your password is toooo short!  \nWhy don't we make it at least 10 characters long");
                    } else if (xAnswer.length > 10) {
                        console.log("\nI'm sorry, your password is toooo long!!  \nWhy don't we make it under 11 characters... \nThe cloud has only so much space for all these random digits!!")
                    } else if (xAnswer[0] !== '1' && answer[9] !== '1') {
                        console.log("\nI'm sorry, I didn't detect your first or last digits.. my favorite number in that spot is '1'.. why don't we try using that")
                    } else if (xAnswer.slice(1, 5) !== 'pass') {
                        console.log("\nWhat's up with all these random numbers in the first half? \nI tell you what.. \nIf you can guess the first half, I'll give you a PASS..")
                    } else if (xAnswer.slice(4, 8) !== 'werd') {
                        console.log("\nOhhhhhh you are just so dang close! \nYou are just missing one of my favorite WERDs. \nWhat could the second half of this dang passWERD be?")
                    }
                    });
            } else {
                  console.log("Oh, we were so close!  \nCome back and try again!");
            }
        });
    } else {
        console.log("Jeez, why don't you come back when you're ready............");
    }
});



    
    