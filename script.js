let btn = document.querySelector(".btn")
drawBoard(16)
pixelDraw()

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

function pixelDraw(){
    let pixels = document.querySelectorAll(".inDiv")

    
    for (const pixel of pixels){
        pixel.addEventListener('mousemove', (e) => {
            let color = selectColor()
            pixel.style.backgroundColor = color
        })
    }
}

function removeDiv(){
    divs = document.querySelectorAll(".inDiv")
    for (let div of divs){
        div.remove()
    }
}


btn.addEventListener("click", () => {
    let size = prompt("Enter Number 1 - 100")

    if (+size < 1 || +size > 100){
        alert("Number must be between 1 - 100")
        return
    }

    removeDiv()

    drawBoard(+size)
    pixelDraw()
})


function selectColor(){

    let colors = ["green", "yellow", "red", "blue", "black", "purple"]
    let color = Math.random() * 6
    return colors[Math.floor(color)];
}
