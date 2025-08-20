// <!-- option 2 for click events handler  -->
function makeYellow() {
  document.body.style.backgroundColor = "yellow";
}
function makeGreen() {
  document.body.style.backgroundColor = "green";
}
// Option 3

const btnMakeBlue = document.getElementById("btn-blue");
console.log(btnMakeBlue);
btnMakeBlue.onclick = function () {
  document.body.style.backgroundColor = "blue";
};
// //  Option 4: addEventListener

document.getElementById("btn-make-gray").addEventListener("click", function () {
  document.body.style.backgroundColor = "gray";
});
// 
document.getElementById("btn-make-gold").addEventListener("click", function () {
  document.body.style.backgroundColor = "goldenrod";
});
