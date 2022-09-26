var martin = 76;
var thomas = 85;
var klaus = 65;
var maria = 93;
var david = 81;

function grade(){
    if(martin < 60){
        console.log("Graded F")
    }
    else if(martin < 70){
        console.log("Graded D")
    }
    else if(martin < 80){
        console.log("Graded C")
    }
    else if(martin < 90){
        console.log("Graded B")
    }
    else{
        console.log("Graded A")
    }
}

grade();

var studentArray = [76, 85, 65, 93, 81];
var classGrade = 0

for(let i = 0;i< studentArray.length; i++){
    classGrade = classGrade +  studentArray[i]
}

function averageClass (){
    averageGrade = classGrade / studentArray.length
    console.log(averageGrade);
}

averageClass();