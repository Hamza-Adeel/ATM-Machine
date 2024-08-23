#! /usr/bin/env node
import inquirer from "inquirer";
let myBalance = 20000;
let myPin = 1234;
console.log("HI there :)");
let pinAnswer = await inquirer.prompt([
    {
        name: "pin",
        message: "enter your pin",
        type: "number",
    },
]);
if (pinAnswer.pin === myPin) {
    console.log("Correct pin code!!");
    let operationAns = await inquirer.prompt([
        {
            name: "operation",
            message: "Please select options",
            type: "list",
            choices: ["withdraw", "check balance"],
        },
    ]);
    if (operationAns.operation === "withdraw") {
        let selectionOfAmmount = await inquirer.prompt([
            {
                name: "selectionOfYourAmmount",
                message: "Please Select Your Withdrawing method",
                type: "list",
                choices: ["Fast Cash Method", "Your own ammount selection"],
            },
        ]);
        if (selectionOfAmmount.selectionOfYourAmmount === "Fast Cash Method") {
            let fastCash = await inquirer.prompt([
                {
                    name: "fastCashWithdraw",
                    message: "Please select your ammount",
                    type: "list",
                    choices: ["1000", "5000", "10000"],
                },
            ]);
            if (fastCash.fastCashWithdraw === "1000" ||
                fastCash.fastCashWithdraw === "5000" ||
                fastCash.fastCashWithdraw === "10000") {
                myBalance -= fastCash.fastCashWithdraw;
                console.log(`your remainig balance is ${myBalance}`);
            }
        }
        if (selectionOfAmmount.selectionOfYourAmmount === "Your own ammount selection") {
            let amountAns = await inquirer.prompt([
                {
                    name: "amount",
                    message: "enter your amount",
                    type: "number",
                },
            ]);
            if (amountAns.amount < myBalance || amountAns.amount === myBalance) {
                myBalance -= amountAns.amount;
                console.log(`your remainig balance is ${myBalance}`);
            }
            else {
                console.log("Your balance is insufficiant");
            }
        }
    }
    else if (operationAns.operation === "check balance") {
        console.log(`Your balance is ${myBalance}`);
    }
}
else {
    console.log("Incorrect Pin number");
}
