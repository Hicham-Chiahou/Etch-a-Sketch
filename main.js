let row = document.createElement("div");
let rowColumn = document.createElement("div");
let gridSize = 1;
row.classList.add("pixel-row");
// row.innerText = "1"
rowColumn.innerText = "0";
rowColumn.classList.add("pixel-column");

let drawingPad = document.getElementById("drawing-pad");

function main() {
let gridSize = 0;
gridSize = document.getElementById("grid-size").value;

  for (let i = 0; i < gridSize; i++) {
    row.appendChild(rowColumn.cloneNode(true));
  }

  for (let i = 0; i < gridSize; i++) {
    drawingPad.appendChild(row.cloneNode(true));
  }
  console.log(gridSize);
}



main();
