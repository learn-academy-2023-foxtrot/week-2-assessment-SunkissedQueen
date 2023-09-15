// ASSESSMENT 2: Coding Conceptual Questions

// Examine the following examples.

// First, predict the outcome based on your understanding of the code.
// Then, uncomment the console.log() and verify the output. Briefly explain why your initial answer was correct or incorrect.
// There is no need to change any of the code.

// --------------------1) What will this log?

const cohort = "Foxtrot 2023"
// console.log(cohort.split(""))

// a) Your answer: change datatype to an array with each character at a separate index in the array
// b) Verify and explain: [
//   'F', 'o', 'x', 't',
//   'r', 'o', 't', ' ',
//   '2', '0', '2', '3'
// ] is a string built-in method 

// --------------------2) What will this log?

const greeter = (name) => {
  `Hello, ${name}!`
}
// console.log(greeter("LEARN Student"))

// a) Your answer: undefined because there is no return
// b) Verify and explain: undefined because there is no return

// --------------------3) What will this log?

const multipliedByTwo = [4, 5, 6, 7, 8].map((number) => number * 2)
// console.log(multipliedByTwo)

// a) Your answer: a new array with each value in the array multiplied by two
// b) Verify and explain: [ 8, 10, 12, 14, 16 ], .map() is a hof that will output a new array performing the action requested on each value

// --------------------4) What will this log?

const onlyOdds = [11, 12, 13, 14, 15].filter((number) => number % 2 !== 0)
// console.log(onlyOdds)

// a) Your answer: log an array with only the odd numbers
// b) Verify and explain: [ 11, 13, 15 ] because .filter() will return a subset of the array meeting the conditions of odd numbers

// --------------------5) What will this log?

const myCodingSkills = {
  languages: ["JavaScript", "Ruby"],
  frameworks: ["React", "Ruby on Rails"],
  databases: "PostgreSQL",
  versionControl: "GitHub"
}
console.log(myCodingSkills.languages[0])

// a) Your answer:
// b) Verify and explain: JavaScript

// --------------------STRETCH: What will this log?

class Learn {
  constructor(name) {
    this.student = name
    this.cohort = "Echo"
    this.year = 2023
  }
}
const learnStudent = new Learn("George")
console.log(learnStudent)

// a) Your answer: George
// b) Verify and explain:
// Learn { student: 'George', cohort: 'Echo', year: 2023 }