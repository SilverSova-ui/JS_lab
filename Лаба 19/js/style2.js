function rash() {
let x = +document.body.getElementsByClassName("x")[0].value;
let y = +document.body.getElementsByClassName("y")[0].value;
let z = Math.sqrt((x**2) + (y**2));
document.body.innerHTML = `<p>` + z + `</p>`;
}