song="";
function preload(){
    song=loadSound("wellerman.mp3","rickroll.mp3");
    
}
function setup(){
    canvas= createCanvas(600,500);
    canvas.center();
    video= createCapture(VIDEO);
    video.hide()
}
function draw(){
image(video,0,0,600,500);


}
function play(){
    song.play();
}
function pause(){
    song.pause();
}
