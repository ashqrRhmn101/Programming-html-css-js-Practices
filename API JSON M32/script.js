const lodeData = () => {
  const url = "https://jsonplaceholder.typicode.com/users";
  // fetch("https://jsonplaceholder.typicode.com/users")
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      displayPost(data);
    });
};

const displayPost = (posts) => {
  const userData = document.getElementById("user-container");
  userData.innerText = "";

  posts.forEach((post) => {
    const userCard = document.createElement("div");
    userCard.innerHTML = `
    <table>
        <thead>
          <th>
            <tr class="theader">
              <td>Name</td>
              <td>Username</td>
              <td>Mail</td>
              <td>Phone</td>
            </tr>
          </th>
        </thead>

        <tbody>
          <tr>
            <td>${post.name}</td>
            <td>${post.username}</td>
            <td>${post.email}</td>
            <td>${post.phone}</td>
          </tr>
        </tbody>

      </table>
    `;

    userData.appendChild(userCard);
    // console.log(post.username, post.phone);
  });
};

lodeData();
