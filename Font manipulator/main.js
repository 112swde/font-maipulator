function setup()
{
    video = createCapture(VIDEO);
    video.size(500,500);
    
    canvas = createCanvas(550,550);
    canvas.position(560,150);

    posenet = ml5.poseNet(video, modelLoaded);
    posenet.on('pose', gotPoses);
}

function draw()
{
    background("#FFFFFF");
    textSize(difference);
    fill("#00FF00");
    stroke("#937256");
    text("Pen",50,300);

    document.getElementById("info").innerHTML = "width and height of the text will be " + difference + "px";
}

function modelLoaded()
{
    console.log("posenet is initialized!");
}

function gotPoses(results)
{
    if(results.length > 0)
    {
        console.log(results);

        noseX = results[0].pose.nose.x;
        noseY = results[0].pose.nose.y;
        console.log("noseX =" + noseX + "noseY =" + noseY);

        leftWristX = results[0].pose.leftWrist.x;
        rightWristX = results[0].pose.rightWrist.x;
        difference = floor(leftWristX - rightWristX);

        console.log("left wrist = " + leftWristX + "right wrist = " + rightWristX + "difference = " + difference);

    }
}

leftWristX = 0;
rightWristX = 0;
difference = 0;
noseX = 0;
noseY = 0;