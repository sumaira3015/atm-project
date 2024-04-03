#!/usr/bin/env node
import inquirer from "inquirer";
let myBalance = 20000;
let myPin = 1515;
let pinAnswer = await inquirer.prompt([
    {
        name: "insertpin",
        message: "Enter your pin",
        type: "number"
    }
]);
if (pinAnswer.insertpin === myPin) {
    console.log("Correct pin code!!!");
    let operationAnswer = await inquirer.prompt([
        {
            name: "operation",
            message: "please select option",
            type: "list",
            choices: ["withdraw", "check Balance", " fast cash", "exit"]
        }
    ]);
    if (operationAnswer.operation === "withdraw") {
        let amountAns = await inquirer.prompt([
            {
                name: "amount",
                message: "Enter your amount to withdraw",
                type: "number"
            }
        ]);
        if (amountAns.amount > myBalance) {
            console.log("Insuficient Balance");
        }
        else
            myBalance -= amountAns.amount;
        console.log(`${amountAns.amount}`, "withdraw successfuly");
        console.log("Your remaining balance is", ` ${myBalance}`);
    }
    else if (operationAnswer.operation === "exit") {
        console.log("you are Exit now");
    }
    else if (operationAnswer.operation == "check Balance") {
        console.log("your balance is ", `${myBalance}`);
    }
}
else {
    console.log("incorrect pin code!!");
}
;
