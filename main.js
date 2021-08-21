rightwristX = 0;
rightwristY = 0;
function preload(){
           watch = loadImage('omnitrix.png'); 
}
function setup() 
{
           canvas= createCanvas(300, 300);
           canvas.center();
           video = createCapture(VIDEO);
           video.size(300, 300);
           video.hide();
           poseNet = ml5.poseNet(video, modelLoaded);
           poseNet.on('pose', gotPoses);
}
function modelLoaded() 
{
console.log('Model loaded');
}
function gotPoses(results)  
{
if(results.length > 0)
{
console.log(results);
rightwristX = results[0].pose.rightWrist.x ;
rightwristY = results[0].pose.rightWrist.y ;
}
}
function draw() 
{
           image(video, 0, 0, 300, 300);
           image(clownImage, rightwristX , rightwristY,50, 50);
}

function take_snapshot() 
{
           save('mySelfieFilter.png');
}