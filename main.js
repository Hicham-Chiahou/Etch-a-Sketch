let row = document.createElement("div");
let rowColumn = document.createElement("div");
row.classList.add('pixel-row')
row.innerText = "1"
rowColumn.classList.add('pixel-column')
let drawingPad = document.getElementById("drawing-pad")



function main(){

    
    for(let i = 0; i < 3; i++){
        drawingPad.appendChild(row.cloneNode(true))

    }

    for(let i = 0; i < 3; i++){
        row.appendChild(rowColumn.cloneNode(true))
    }
    console.log(drawingPad)
}

main()