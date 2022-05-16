difference = 0;
rightX = 0;
leftX = 0;
function setup() {
    video = createCapture(VIDEO);
    video.size(550, 500);
    canvas = createCanvas(550, 500);
    canvas.position(560, 150);
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}
function modelLoaded() {
    console.log("Pose Net Has Been Initalized");
}
function gotPoses(results) {
if (results.length > 0)
{ console.log(results);
leftX = results[0].pose.leftWrist.x; 
rightX = results[0].pose.rightWrist.x; 
difference = floor(leftX - rightX);
console.log("leftWristX = " + leftWristX + " rightWristX = " + rightWristX + " difference = " + difference); }
}
function draw(){
background('Crimson');
document.getElementById("font_size").innerHTML="font_size = " +difference;
textSize(difference);
fill('white');
text('Woen Bi',50,400);
}