var sound, amplitude, cnv;

var mic;
var t;
var widthW = window.innerWidth;
var heightW = window.innerHeight;

function setup(){
  createCanvas(widthW,heightW);
  frameRate(120);
  mic = new p5.AudioIn()
  mic.start();
  background(0);
  t = 0;
}
function draw(){

  var x = width * noise(t);
  var y = height * noise(t+5);
  var micLevel = mic.getLevel();

  var xbase = 0;
  var ybase = 0;



  var xlerp = lerp(xbase, rad * cos(ang) * micLevel * 1000 )
  
  noFill();
  smooth();
  strokeWeight(0.5);
  stroke(color(255));
  //ellipse( x, y, micLevel * 4000,micLevel *4000);

  translate(width/2, height/2);
  beginShape();
  for (var i = 0; i < 200; i++) {
    var ang = map(i, 0, 100, 0, TWO_PI);
    var rad = 10 * noise(i * 0.01, random(1,30));
    var x = rad * cos(ang) * micLevel * 700;
    var y = rad * sin(ang) * micLevel * 700;
    curveVertex(x, y);
  }
  endShape(CLOSE);

  setTimeout(function(){ 
  background(0) ;
  }, 1);

//  function randomString(Length){
//    var text = "";
//    var possible = micLevel * 10;
//    for( var i=0; i < Length; i++ )
//        text += possible.charAt(Math.floor(Math.random() * possible.length));
//    return text;
//};
var micUp = micLevel * 100;

document.getElementById("random").innerHTML = Math.round(micUp);
console.log(Math.round(micUp));

  t += 1;
}


