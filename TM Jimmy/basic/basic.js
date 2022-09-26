// exercise 1
let array = [25, 58, 2, 96, 46, 22, 178, 105];
let max = 0 ;

for (let i=0 ; i < array.length; i++) {
    if (max < array[i]) {
        max = array[i];
    }
   
}
 console.log(max);

 //exercise 2

 let temp = (Math.floor(Math.random()*81))-36;
console.log(temp);

let paragraph = document.getElementById("paragraph");
let meteo = document.getElementById ("meteo");
let image = document.createElement ("img");


   if (temp >34 ){
        paragraph.innerHTML =`<h1>The weather is way too hot: ${temp} °C</h1>`;
        image.setAttribute("src", "https://cdn.pixabay.com/photo/2020/01/15/09/36/thermometer-4767444__480.jpg");
        image.setAttribute("width", "304");
        image.setAttribute("height", "228");
        document.body.appendChild(image);
        
        console.log ("It is way too hot");
    };

    if (temp < 35  && temp >9){
        paragraph.innerHTML = `<h1>The weather is moderate: ${temp} °C</h1>`
        //meteo.innerHTML = `<img src=""></img>`
        image.setAttribute("src", "https://cdn.pixabay.com/photo/2018/05/02/18/23/landscape-3369304__480.jpg");
        image.setAttribute("width", "304");
        image.setAttribute("height", "228");
        document.body.appendChild(image);
       console.log("The weather is moderate");
    };

    if (temp < 10 && temp > -1){
        paragraph.innerHTML = `<h1>The weather is cold: ${temp} °C</h1>`;
        //meteo.innerHTML = `<img src="https://cdn.pixabay.com/photo/2018/01/19/08/59/nature-3091991__480.jpg"></img>`
        image.setAttribute("src", "https://cdn.pixabay.com/photo/2018/01/19/08/59/nature-3091991__480.jpg");
        image.setAttribute("width", "304");
        image.setAttribute("height", "228");
        document.body.appendChild(image);
        console.log("The weather is cold");
    };
     if (temp <0 && temp > -6){
        paragraph.innerHTML = `<h1>The weather is too cold: ${temp} °C</h1>`;
        //meteo.innerHTML = `<img src="https://cdn.pixabay.com/photo/2017/11/09/00/07/christmas-2932077__480.jpg"></img>`
        image.setAttribute("src", "https://cdn.pixabay.com/photo/2017/11/09/00/07/christmas-2932077__480.jpg");
        image.setAttribute("width", "304");
        image.setAttribute("height", "228");
        document.body.appendChild(image);
        console.log("The weather is too cold");
    };
     if (temp <-5){
        paragraph.innerHTML = `<h1>The weather is way too cold: ${temp} °C</h1>`;
        //meteo.innerHTML = `<img src="https://media.istockphoto.com/photos/3d-render-white-hairy-yeti-stands-near-big-ice-cubes-bigfoot-cartoon-picture-id1283763950?s=612x612"></img>`
        image.setAttribute("src", "https://media.istockphoto.com/photos/3d-render-white-hairy-yeti-stands-near-big-ice-cubes-bigfoot-cartoon-picture-id1283763950?s=612x612");
        image.setAttribute("width", "304");
        image.setAttribute("height", "228");
        document.body.appendChild(image);
        console.log("The weather is way too cold");
    };
