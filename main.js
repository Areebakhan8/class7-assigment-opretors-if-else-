import inquirer from "inquirer";
import chalk from "chalk";
console.log(chalk.blueBright.bold("if / else"));
console.log("in if/else statement when we take this type of input from user like if user answer is yes so print if statement & otherwise answer is no so print else statement");
console.log(chalk.green.bold("EXAMPLE:"));
let guessNum = 24;
let luckyNum = 2;
if (guessNum == 24) {
    console.log("you guess right answer");
}
else {
    console.log("you guess wrong answer");
}
console.log(chalk.green.bold("EXAMPLE:"));
if (guessNum == luckyNum) {
    console.log("you guess right answer");
}
else {
    console.log("you guess wrong answer");
}
let guess = await inquirer.prompt([
    {
        name: "guessing",
        type: "number",
        message: chalk.blueBright.bold("Enter guess number")
    }
]);
if (guess.guessing == guessNum) {
    console.log(chalk.yellowBright.bold("Amazing! you are sharp you guess right number"));
}
else {
    console.log(chalk.redBright.bold("oppss! Better-Luck next time...."));
}
