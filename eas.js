function mousedover(e) {
    this.style.backgroundColor = "black";
}

function resetpressed(e) {
    resetGrid();
}

function resizepressed(e) {
    let usernum = prompt("Enter a new grid size between 1 and 128");
    if (usernum === null)
        return;
    usernum = parseInt(usernum);

    while (usernum === NaN || usernum < 1 || usernum > 128){
        usernum = prompt(`Sorry, ${usernum} is not a valid size. Enter a new size between 1 and 128.`);
        if (usernum === null)
            return;
        usernum = parseInt(usernum);
    }

    if (usernum === null)
        return;

    side_num = usernum;

    resetGrid();
}

function resetGrid() {
    pixels.replaceChildren();
    for (let i = 0; i < side_num; ++i) {
        let div_pixelrow = document.createElement("div");
        div_pixelrow.classList.add("pixelrow");
        div_pixelrow.style.width = `${dim}px`;
        div_pixelrow.style.height = `${dim/side_num}px`;
    
        for (let j = 0; j < side_num; ++j) {
            let div_pixel = document.createElement("div");
            div_pixel.classList.add("pixel");
            div_pixel.style.width = `${dim/side_num}px`;
            div_pixel.style.height = `${dim/side_num}px`;
    
            div_pixel.addEventListener("mouseenter", mousedover);
            div_pixelrow.appendChild(div_pixel);
        }
        pixels.appendChild(div_pixelrow);
    }
}

const pixels = document.querySelector(".pixels");
const dim = 256;
let side_num = 64;

const resetbutton = document.querySelector(".reset");
resetbutton.addEventListener("click", resetpressed);

const resizebutton = document.querySelector(".resize");
resizebutton.addEventListener("click", resizepressed);

pixels.style.width = `${dim}px`;
pixels.style.height = `${dim}px`;

resetGrid();