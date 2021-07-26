noseX = 0;
noseY = 0;

function preload()
{ 
     mustache_lips = loadImage("https://i.postimg.cc/T2HnvWq3/mam.png");
}
function setup() { 
    canvas = createCanvas(300, 300); 
    canvas.center(); 
    video = createCapture(VIDEO); 
    video.size(300, 300); 
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded(){
    console.log('PoseNet is Intialized');
}

function gotPoses(results){
    if(results.length > 0){
        console.log(results);
        noseX = results[0].pose.nose.x-30;
        noseY = results[0].pose.nose.y;
        console.log("nose x = " + results[0].pose.nose.x);
        console.log("nose y = " + results[0].pose.nose.y);
    }
}

function draw(){
image(video, 0, 0, 300, 300);
fill(255,0,0);
stroke(255,0,0);
image(mustache_lips, noseX, noseY, 65, 60);
} 

function take_snapshot(){
    save('myFilterImage.jpg');
}