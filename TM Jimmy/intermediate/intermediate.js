//ex1
const names = ["Martin", "Thomas", "Klaus", "Maria", "David"];
let grades = [76, 85, 65, 93, 81];

let sum = 0;
for (const value of grades) {
    sum += value;    
}
document.write(`<br>The average grade of the class is ${sum/5}<br><br>`)

for (i=0; i < names.length; i++) {
        if(grades[i]>=90){
        grades[i]="A";
    }
    if(grades[i] >=80){
        grades[i]="B";
    }
    if(grades[i]>=70){
        grades[i]="C";
    }
    if(grades[i]>=60 ){
        grades[i]="D";
    } 
    
    
    
 document.write(`${names[i]} has an average grade : ${grades[i]}<br>`)}

document.write(`${names[2]} has an average grade : ${grades[2]}<br>`)


//ex2
for (let i=1; i<=100; i++) {
    
   console.log(i);
    if (i % 15 === +1/*  && i % 5 === 1 */){
        document.write("fizzBuzz");
        console.log("fizzbuzz");
    }
    else if ((i % 3) === +1){
        let text = "fizz";
        document.write(text);
        console.log("fizz");

    }
    else if (i % 5 === 1){
        document.write("Buzz");
        console.log("buzz");

    }
    
    document.write(`<br> ${i}`)
}

//ex 3
/* 
for (let i=1; i<7; i++) {
    let text = "*"
    console.log(text.repeat(i));
    document.write(`<br>${text.repeat(i)}<br>`);

}
 */