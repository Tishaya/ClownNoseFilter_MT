var canvas;
var video;
var noseX = 0
var noseY= 0
//var leftX=0
//var leftY=0
//var rightX=0
//var rightY=
//var img;
function setup(){
    canvas = createCanvas(400,400);
    canvas.center();
    video=createCapture(VIDEO)
    video.hide();
    
    poseNet= ml5.poseNet(video,modelLoaded)
    poseNet.on("pose", gotPoses);
}

function modelLoaded(){
    console.log('PoseNet Initialised')
}                                                            
function gotPoses(results){
    console.log("x =" +results[0].pose.nose.x);
    noseX= +results[0].pose.nose.x
    console.log("y =" +results[0].pose.nose.y);
    noseY = +results[0].pose.nose.y

}
function draw(){
    noStroke();
    image(video,0,0,400,400);
    fill(255,0,0);
    ellipse(noseX-125, noseY-30, 22,22);
    //image(img,20,20)
}


function take_snapshot(){
    save("myName.jpg");
}