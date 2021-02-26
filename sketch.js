  
var hr, mn, sc;
var hrAngle, mnAngle, scAngle; 

function setup(){
    createCanvas(800,800); 
    //To use angle in Degrees
    angleMode(DEGREES);   
}

function draw(){
    background(0);

    //Translation and rotation 
    translate(400,400)
    rotate(-90)

    //Calculating time using predefined func from p5.js
    hr = hour();
    mn = minute();
    sc = second();
    

    //To create ab iterative rotation
    scAngle = map(sc, 0, 60, 0, 360);
    mnAngle = map(mn,0,60,0,360)
    hrAngle = map(hr % 12,0,12,0,360)

    //drawing seconds hand
    push();
    rotate(scAngle); //rotate the hand based on angle calculated
    stroke(300,0,0);
    strokeWeight(7);
    line(0,0,220,0);
    pop()

    //drawing mins hand
    push();
    rotate(mnAngle);
    stroke(0,255,0);
    strokeWeight(7);
    line(0,0,190,0);
    pop()

    //drawing hr hand
    push();
    rotate(hrAngle);
    stroke(0,0,255);
    strokeWeight(7);
    line(0,0,170,0);
    pop()

    stroke(255,0,255);
    point(0,0)

    
    //drawing the arcs
    strokeWeight(10);
    noFill();
    //Seconds
    stroke(mnAngle,scAngle,hrAngle);
    arc(0,0,450,450,0,360);
    

}
