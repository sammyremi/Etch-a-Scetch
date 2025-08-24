let container = document.querySelector("#container")

function divCreator(num){
    div = document.createElement("div")
    for (x = 0; x < num; x++){
        innerDiv = document.createElement("div")
        innerDiv.classList.add("inDiv")
        div.appendChild(innerDiv)
    }
    
    return div
}

function drawBoard(size){
    for (y = 0; y < size; y++){
        container.appendChild(divCreator(size))
    }
}

drawBoard(50)