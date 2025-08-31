document.getElementById("btn-like").addEventListener("click", function () {
  const btn = document.getElementById("btn-like");
  btn.style.backgroundColor = "blue";
  btn.style.color = "white";
  //   btn.innerHTML = "👍";
  //   btn.style.fontSize = "20px";
  //   btn.setAttribute("disabled", true);
  //   console.log("hello");

  const spanTag = document.getElementById("span-tag");
  const spanNumber = spanTag.innerText;
  let likeCount = parseInt(spanNumber);
  likeCount++;
  spanTag.innerText = likeCount;
  //
  const spanTagBack = document.getElementById("span-tagBack");
  const spanNumbers = spanTagBack.innerText;
  let likeCounts = parseInt(spanNumbers);
  likeCounts -= 2;
  spanTagBack.innerText = likeCounts;
});

