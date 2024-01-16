/* Write your code below. Good luck! 🙂 */
const massMark = 78;
const heightMark = 1.69;
const massJohn = 92;
const heightJohn = 1.95;

//formula for BMI = mass / (height * height)
const BMIMark = massMark / (heightMark * heightMark);
const BMIJohn = massJohn / (heightJohn * heightJohn);
const markHigherBMI = BMIMark > BMIJohn;

console.log(BMIMark);
console.log(BMIJohn);
console.log(markHigherBMI);

if (BMIMark > BMIJohn) {
    console.log(`Mark's BMI is higher than John's!`)
} else {
    console.log(`John's BMI is higher than Mark's!`)
}
