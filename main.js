let row = document.createElement("div");
row.classList.add('pixel-row')
row.innerText = "1"
let drawingPad = document.getElementById("drawing-pad")



function main(){

    for(let i = 0; i < 20; i++){
        drawingPad.appendChild(row.cloneNode(true))
    }
    // console.log(drawingPad)
}

main()