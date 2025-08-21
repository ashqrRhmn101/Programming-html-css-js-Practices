document.getElementById("btn-mouse").addEventListener("mousemove", function () {
  console.log("event Triggered");
});
//   document
//     .getElementById("btn-mouse")
//     .addEventListener("mouseenter", function () {
//       console.log("event Triggered");
//     });
document.getElementById("user-mail").addEventListener("focus", function () {
  console.log("user about to write");
});
// blur event
document.getElementById("user-mail").addEventListener("blur", function () {
  console.log("user out");
});

// keyup
document
  .getElementById("user-pass")
  .addEventListener("keyup", function (event) {
    console.log("typing", event.target.value);
  });

// keydown
document.getElementById("user-name").addEventListener("keydown", function () {
  console.log("user keydown");
});
