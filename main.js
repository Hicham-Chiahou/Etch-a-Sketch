let row = document.createElement("div");
let singlePixel = document.createElement("div");
let gridSize = 2;

row.classList.add("pixel-row");
// row.innerText = "1"
// singlePixel.innerText = "0";
singlePixel.classList.add("pixel-column");

let drawingPad = document.getElementById("drawing-pad");

function main() {

  for (let i = 0; i < gridSize; i++) {
    row.appendChild(singlePixel.cloneNode(true));
  }

  for (let i = 0; i < gridSize; i++) {
    drawingPad.appendChild(row.cloneNode(true));
  }

  let a = drawingPad.querySelectorAll("div.pixel-row")
  console.log("grid size: " + a.length); 

}


function getGridSize(){
   allPixels = document.getElementById("grid-size").value;
  alert(allPixels)
  console.log("all pixel lengh :" + allPixels.length)
  
  
}

// allPixels.onclick = () => alert("hi")

main();
