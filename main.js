function setup() {
  canvas = createCanvas(280, 280);
  canvas.center();
  background("white");
  canvas.mouseReleased(classifyCanvas);
  synth = window.speechSynthesis;
}
function preload(){
    classifier=ml5.imageClassifier("DoodleNet")
}

function clearCanvas(){
  background("white")
}
function classifyCanvas() {
 classifier.classify(canvas, gotResult);
 }
 function gotResult(error,result){
  if(error){
    console.error(error)
  }
  console.log(result)
  document.getElementById("label").innerHTML="etiqueta "+result[0].label;
  document.getElementById("confidence").innerHTML="confidence "+Math.round(result[0].confidence*100)+"%"
  frase=new SpeechSynthesisUtterance(result[0].label);
  synth.speak(frase)
 }
 function draw(){
  strokeWeight(13)
    stroke(0)
    if(mouseIsPressed){
      line(pmouseX, pmouseY, mouseX, mouseY);
    }
  }