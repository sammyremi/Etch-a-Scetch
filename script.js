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
    let container = document.querySelector("#container")
    for (y = 0; y < size; y++){
        container.appendChild(divCreator(size))
    }
}

drawBoard(60)

let pixels = document.querySelectorAll(".inDiv")
console.log(pixels)

for (const pixel of pixels){
        pixel.addEventListener('mousemove', (e) => {
        pixel.style.backgroundColor = "green"
    })
}