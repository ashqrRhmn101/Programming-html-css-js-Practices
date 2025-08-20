document.getElementById("btn-submit").addEventListener("click", function () {
  const nameInput = document.getElementById("input-name");
  const yourName = nameInput.value;
  nameInput.value = "";
  //   console.log("name:", yourName);
  // set the name
  const inputNm = document.getElementById("name");
  inputNm.innerText = yourName;
});
