/* get highest number */ 

var testArray = [1, 7, -3, 9];

console.log(Math.max(...testArray));

/* other method */

var highestNumber = 0

for(let i=0;i < testArray.length ; i++){
    if( highestNumber < testArray[i]){
        highestNumber = testArray[i]
    }
}
console.log(highestNumber)


/* Weather Website */
/* var hotpic = document.getElementById("hotpicture");
var modpic = document.getElementById("moderatepicture");
var coldpic = document.getElementById("coldpicture"); */

function temperature(){
    var temp = document.getElementById("userdegreeinput").value;
    console.log(temp);
    alert(temp);
    if(temp < 10){
            coldpic.style.display = "block";
            hotpic.style.display = "none";
            modpic.style.display = "none";
        }
        else if(temp < 18){
            coldpic.style.display = "none";
            hotpic.style.display = "none";
            modpic.style.display = "block";
        }
        else{
            coldpic.style.display = "none";
            hotpic.style.display = "block";
            modpic.style.display = "none";
        };
};


/* if(temp < 10){
            coldpic.style.display = "block";
            hotpic.style.display = "none";
            modpic.style.display = "none";
        }
        else if(temp < 18){
            coldpic.style.display = "none";
            hotpic.style.display = "none";
            modpic.style.display = "block";
        }
        else{
            coldpic.style.display = "none";
            hotpic.style.display = "block";
            modpic.style.display = "none";
        }; */