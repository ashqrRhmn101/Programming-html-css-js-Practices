function clickData() {
  const getData = new Promise((resolve, reject) => {
    const num = Math.floor(Math.random() * 10);
    console.log("Generate number", num);

    if (num > 5) {
      resolve({ Number: num });
    } else {
      reject({ err: "Data is not Available" });
    }
  });

  getData
    .then((data) => console.log(data))
    .catch((error) => console.log(error));
}
