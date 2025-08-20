document
  .getElementById("btn-update-title")
  .addEventListener("click", function () {
    // console.log('btn');
    const pageTitleElement = document.getElementById("page-title");
    pageTitleElement.innerText = "Update page Title";
  });
// login user

document.getElementById("btn-login").addEventListener("click", function () {
  const userInfo = document.getElementById("user-info");
  userInfo.innerText = "user logged In Successfully";
});
