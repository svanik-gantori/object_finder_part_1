status="";
video="";
function setup()
{
    canvas=createCanvas(550,500);
    canvas.center();
    video=createCapture(VIDEO);
    video.hide();
}
function start()
{
    objectDetector=ml5.objectDetector('cocossd',modelLoaded);
    document.getElementById("status").innerHTML="Detecting Objects";
    object=document.getElementById("input").value;
    console.log(object);
}

function modelLoaded()
{
    console.log("Model Loaded");
    status=true;
}

function draw()
{
    image(video,0,0,550,500);
}