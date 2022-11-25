status ="";
img='';
objects =[];
 function preload(){
    img= loadImage('ttt.jpg');
    
 }
function setup(){
    canvas=createCanvas(640,420);
    canvas.center();
    objectDetector = ml5.objectDetector('cocossd',modelLoaded);
    document.getElementById('status').innerHTML="status: detecting object"

}
function modelLoaded(){
console.log('modelLoaded');
status=true;
objectDetector.detect(img,gotResult);

}
function gotResult(error,results){
if(error){
    console.log(error);

}
console.log(results)
objects = results
}
function draw(){
    image(img,0,0,640,420);
    if(status != ""){
        for (i = 0; i < objects.length; i++){
            document.getElementById("status").innerHTML = "Status : object detected";

            fill("#FF0000");
            percent = floor(objects[i].confidence * 100);
            text(objects[i].label + "  " + percent + "%",objects[i].x+15,objects[i].y + 15);
            noFill();
            stroke("#FF0000");
            rect(objects[i].x, objects[i].y, objects[i].width, objects[1].height);
        } 
}}
function page2(){
    window.open('page2.html','_self')
}
function back(){
    window.open('index.html','_self')
}
