let students = ["Matt","Amelie","Jimmy","Zuzana","Flo"];
let mathGrades = ["100", "59", "89", "75", "67"];
let result = (students[i] == mathGrades[i]);

//var result = prompt("type your name")
for (var i=0; i<students.length; i++) {
   result = prompt("enter your name") ;


   if (mathGrades[i] <= 60){
    document.write(`${students[i]} has reached <p style=color:red> ${mathGrades[i]}</p> in Math.<br>`)
}
else if (mathGrades[i] > 60 && mathGrades[i] <= 70){
    document.write(`${students[i]} has reached <p style=color:yellow> ${mathGrades[i]}</p> in Math.<br>`)
}
else if (mathGrades[i] > 70 && mathGrades[i] <= 99){
    document.write(`${students[i]} has reached <p style=color:green> ${mathGrades[i]}</p> in Math.<br>`)
}
else if (mathGrades[i]=100) {
    document.write(`<div>${students[i]} has reached <p style=color:blue> ${mathGrades[i]}</p> in Math.</div> <br>`)
};

//document.write(`${students[i]} has reached ${mathGrades[i]} in Math <br>`);

   console.log(`${students[i]} has reached ${mathGrades[i]} in Math`);
   
}

//document.write(`${students[i]} has reached ${mathGrades[i]} points in Math this season`);

//for (var i=0; i<mathGrades.length; i++) {
//    studentGrade = mathGrades[i];
//}
//console.log(`${studentName} has reached ${studentGrade} points in Math this season`);
//document.write(`${studentName} has reached ${studentGrade} points in Math this season`);

/* if (mathGrades[i]=100){
    document.write(mathGrades[i]).style.color = "blue"
}
else if (mathGrades[i] > 70){
    document.write(studentGrade).style.color = "green"
}
else if (studentGrade > 60 && studentGrade <= 70){
    document.write(studentGrade).style.color = "yellow"
}
else if (studentGrade <= 60){
    document.write(studentGrade).style.color = "red"
} */

