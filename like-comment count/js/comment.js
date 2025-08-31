document.getElementById("btn-comment").addEventListener("click", function () {
  const textBox = document.getElementById("text-box");
  const newComment = textBox.value;
  textBox.value = "";
  // console.log(newComment);
  const sectionBtn = document.getElementById("comment");

  const createP = document.createElement("p");
  createP.innerText = newComment;
  sectionBtn.appendChild(createP);
});
