var h3 = document.getElementById('h3');
var input_color_left = document.querySelector(".input_color_left");
var input_color_right = document.querySelector(".input_color_right");
var body = document.getElementById('body');

function setcolor() {
    body.style.background = "linear-gradient(to right," + input_color_left.value + "," + input_color_right.value + ")";
    h3.textContent = body.style.background + ";";
}

// input_color_left.addEventListener("input",setcolor);
// input_color_right.addEventListener("input",setcolor);


//random button
document.getElementById('btn').addEventListener('click', L_I_R);

function L_I_R() {
    var color1 = 'rgb(' + ran() + "," + ran() + ',' + ran() + ")";
    var color2 = 'rgb(' + ran() + "," + ran() + ',' + ran() + ")";
    body.style.background = "linear-gradient(to right," + color1 + "," + color2 + ")";
    h3.textContent = body.style.background + ";";
}

function ran() {
    return Math.floor(Math.random() * 256);
}



