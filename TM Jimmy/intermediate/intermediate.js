//ex1
const names = ["Martin", "Thomas", "Klaus", "Maria", "David"];
const grades = [76, 85, 65, 93, 81];

for (i=0; i < names.length; i++) {
 document.write(`${names[i]} has an average grade : ${grades[i]}<br>`)}

/* function gradeToLetter(grades){
    let grade = grades.map;
    if (grade < 60 ){
        document.write("F");
    } 
    else if (grade < 70 ){
        document.write("D")
    }
} */
document.write(`${names[2]} has an average grade : ${grades[2]}<br>`)

let sum = 0;
for (const value of grades) {
    sum += value;
}
document.write(`The average grade of the class is ${sum/5}`)

if (grades[i]>90){
    grades[i] = A ;
    document.write(grade[i])
}

//ex2

for (let i=1; i<101; i++) {
   // console.log(i);
/* 
    let i=0;
    if ((i % 3) === 0){
        console.log(i % 3 ="fizz")
    }
    else if (i % 5 === 0){
        console.log(i="Buzz");
    }
    else if (i % 3 === 0 && i % 5 === 0){
        console.log(i="fizzBuzz")
    } */
}

//ex 3

for (let i=1; i<7; i++) {
    let text = "*"
    console.log(text.repeat(i));
    document.write(`${text.repeat(i)}<br>`);

}
