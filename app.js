var btn = document.getElementById("button");
var circle = document.getElementById("circle");
var square = document.getElementById("square");
var rect = document.getElementById("rectangle");
var num = document.getElementById("number");
var box = document.getElementById("box");

var temp = 1


btn.onclick = function name() {
    for (let i = 0; i < num.value; i++) {
        if (circle.checked) {
            var el = document.createElement("div");
            el.classList.add("circle")
            el.innerText= temp
            temp = temp +1
            box.appendChild(el)
        }
        else if (square.checked) {
            var el = document.createElement("div");
            el.classList.add("square")
            el.innerText= temp
            temp = temp +1
            box.appendChild(el)
        }
        else if (rect.checked) {
            var el = document.createElement("div");
            el.classList.add("rectangle")
            el.innerText= temp
            temp = temp +1
            box.appendChild(el)
        }
    }

}


