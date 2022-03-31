noseX=0;
noseY=0;
leftWristX=0;
rightWristX=0;
difference=0;
function setup(){
    video=createCapture(VIDEO);
    video.size(550,500);

    canvas=createCanvas(550,480);
    canvas.position(560,80);


poseNet= ml5.poseNet(video,modelLoaded);
poseNet.on('pose',gotPoses);
    }

    function modelLoaded(){
        console.log("Posenet is initialized");
    }

    function gotPoses(results){
     if(results.length>0){
         console.log(results);
         noseX= results[0].pose.nose.x;
         noseY= results[0].pose.nose.y;
         console.log("noseX= "+noseX+"and noseY= "+noseY);

        leftWristX=results[0].pose.leftWrist.x;
        rightWristX=results[0].pose.rightWrist.x;
        difference=floor(leftWristX-rightWristX);
        console.log("leftWristX= "+leftWristX+"and rightWristX= "+rightWristX+"and difference= "+difference);

     }  
      }

      function draw(){
          background("#272de6");
         document.getElementById("square").innerHTML="Width and Height of the square is = "+difference+" px";
         fill("#03fca1");
         stroke("#fc4103");
         square(noseX,noseY,difference);
      }