function setup()
{
    video = createCapture(VIDEO);
    video.size(450,450);
    video.position(100 , 100)

    canvas = createCanvas(450 , 450);
    canvas.position(750 , 150);

    poseNet = ml5.poseNet(video , modelLoaded);
    poseNet.on('pose' , gotPoses);
}

function draw()
{
    background('lightgreen');
}

function modelLoaded()
{
    console.log('PoseNet Is Initialized');
}

function gotPoses(results)
{
    if(results.lenth > 0)
    {
        console.log(results);
    }
}
