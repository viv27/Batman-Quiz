let readlineSync = require("readline-sync")
const chalk = require('chalk');

var score = 0
var userName = readlineSync.question("Whats your name? ")

console.log("Welcome "+userName+" to how well you know batman? ")



function play(question,answer){
  var userAnswer = readlineSync.question(chalk.blueBright(question))
  if(userAnswer == answer){
    console.log(chalk.green("Right!"))
    score+=1
    
  }
  else{
    console.log(chalk.red("Wrong!, ")+"correct answer is: "+ chalk.green.underline(answer))
  }
  console.log(chalk.yellow("Current Score: ")+score)
  console.log("--------------")
}

// play("Where do I live?","Bangalore")



var questions = [{
  question:"What is Batman's identity in real life?" ,
  answer:"Bruce Wayne"
},{
  question:"If there a college course on Batman?",
  answer:"Yes"
},{
  question:"What is Batman's coolest gadget? ",
  answer:"Batmobile"
},{
  question:"Which is the best batman movie made by Chritopher Nolan: 1,2 or 3? ",
  answer:"2"
}
]

for(var i = 0; i < questions.length; i++){
  var currentQuestion = questions[i]
  play(currentQuestion.question,currentQuestion.answer)
}

console.log("--------------------------------------------")

console.log(chalk.green.underline("Total score: "+score+"!"))

console.log("--------------------------------------------")