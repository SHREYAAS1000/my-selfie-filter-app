function preload(){

}

function setup(){
    canvas = createCanvas(650,500);
    canvas.position(110,250);  
    video = createCapture(VIDEO); // used to access the camera in p5.js libray
    video.hide(); 

    tint_color = "";
}

function applycolor()
{
    tint_color = document.getElementById("color_name").value;
}

function draw()
{
    image(video,0,0,650,500);
    tint(tint_color);
}

function take_snapshot()
{
    save("my selfie.png");
}

