function mousedover(e) {
    this.style.backgroundColor = "black";
}

const pixels = document.querySelector(".pixels");
const dim = 256;
const side_num = 32;

pixels.style.width = `${dim}px`;
pixels.style.height = `${dim}px`;

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
