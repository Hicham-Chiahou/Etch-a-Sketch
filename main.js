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

  let a = drawingPad.querySelectorAll("div.pixel-row");
  console.log("grid size: " + a.length);
}

function getGridSize() {
  gridSize = document.getElementById("grid-size").value;
  // clear grid
  

  for (let i = 0; i < gridSize; i++) {
    row.appendChild(singlePixel.cloneNode(true));
  }

  for (let i = 0; i < gridSize; i++) {
    drawingPad.appendChild(row.cloneNode(true));
  }

  let a = drawingPad.querySelectorAll("div.pixel-row");

  // alert(allPixels);
  gridSize = allPixels;
  console.log("all pixel lengh :" + allPixels.length);
  // all the dives are selected you need to loop over them to add a click event
  allDives = document.querySelectorAll("#drawing-pad .pixel-row .pixel-column");
  console.log(allDives);
  // loop through each div and add a clickListener
  for (const eachPixel of allDives) {
    eachPixel.onmouseover = () => {
      eachPixel.style.backgroundColor = "blue";
    };
  }
}

//
main();
