let row = document.createElement("div");
let singlePixel = document.createElement("div");

let gridSize = document.getElementById("grid-size").value;
if (gridSize == 0) {
  gridSize = 1;
} else {
   gridSize = document.getElementById("grid-size").value;
}

row.classList.add("pixel-row");
// row.innerText = "1"
// singlePixel.innerText = "0";
singlePixel.classList.add("pixel-column");

let drawingPad = document.getElementById("drawing-pad");

function main(size) {
  for (let i = 0; i < size; i++) {
    row.appendChild(singlePixel.cloneNode(true));
  }

  for (let i = 0; i < size; i++) {
    drawingPad.appendChild(row.cloneNode(true));
  }

  let a = drawingPad.querySelectorAll("div.pixel-row");
  console.log("grid size: " + a.length);
}

function getGridSize() {
  clearGrid(gridSize);

  if (gridSize > 0) {
    gridSize = 0;
  }
  gridSize = document.getElementById("grid-size").value;

  main(gridSize);
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

function clearGrid(size) {
  let gridChild = document.getElementById("drawing-pad");

  while (gridChild.hasChildNodes()) {
    gridChild.removeChild(gridChild.firstChild);
  }
}
//
main(gridSize);
