import inquirer from "inquirer"
import chalk from "chalk";
console.log(chalk.blueBright.bold("Assinging Opretors:"));
console.log(
  "Assinging opretor, we use (=) isequal to assing value in programming language"
);
console.log(chalk.green.bold("EXAMPLE:"));

console.log("Variable name,assinging opretor,variable value");
console.log("    NAME            =              AREEBA  ");

console.log(chalk.blueBright.bold("COMPARISON OPRETORS:"));
console.log(
  "If we want to compare anything with each other then we use (comparrison opretor). Like this, value is equal to another value we use (==) sign, when value is not equal we use (!=) sign, when value is greaterthan another value we use (>) sign, when value is lessthan another value we use (<) sign"
);

console.log(chalk.green.bold("EXAMPLE OF (==)"));

let years: number = 2024;
console.log(years == 2024);

console.log(chalk.green.bold("EXAMPLE OF (!=)"));

let month = "march";
console.log(month != "Ramadan");

console.log(chalk.green.bold("EXAMPLE OF(>)or(>=)"))

let university =19
let University =18

console.log(university > 18 )
console.log(University >= 18)

console.log(chalk.green.bold("EXAMPLE OF(<)or(<=)"))
let school = 17
let School = 18

console.log(school < 18)
console.log(School <= 18)


console.log(chalk.blueBright.bold("MODULUS"))
console.log("Remainder & modulus both are same,but in methametical system know as remainder or in programming language kown as modulus.")

console.log(chalk.green.bold("EXAMPLE OF MODULUS(%)"))
let num:number= 2
let Num:number=15

console.log(Num % num)


