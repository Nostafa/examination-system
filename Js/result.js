var result = localStorage.getItem("result");
var Fristname = localStorage.getItem("Fristname");
var Lastname = localStorage.getItem("Lastname");
var container = document.querySelector(".container");
var h1 = document.getElementById("B");
var p = document.getElementById("C");
var img1 = document.getElementById("img1");
var img2 = document.getElementById("img2");
var footer = document.querySelector(".blue");
h1.textContent = `${Fristname} ${Lastname}, You Sucsses`;

if (result <= 6) {
  h1.textContent = `${Fristname} ${Lastname}, You Failed`;
  h1.style.color = "#B33F30";
  p.innerHTML = `Your Score is ${result}0%`;
  p.style.color = "#FF8878";
  footer.style.backgroundColor = "#FEC8C6";
  img1.classList.add("haide");
} else {
  p.innerHTML = `Your Score is ${result}0%`;
  img2.classList.add("haide");
}
