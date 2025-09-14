const getData1 = new Promise((resolve, reject) => {
  const num = Math.floor(Math.random() * 10);
  console.log("Generate number1", num);

  if (num > 2) {
    resolve({ Number: num });
  } else {
    reject({ err: "Data is not Available" });
  }
});


const getData2 = new Promise((resolve, reject) => {
  const num = Math.floor(Math.random() * 10);
  console.log("Generate number2", num);

  if (num > 5) {
    resolve({ Number: num });
  } else {
    reject({ err: "Data is not Available" });
  }
});


const getData3 = new Promise((resolve, reject) => {
  const num = Math.floor(Math.random() * 10);
  console.log("Generate number3", num);

  if (num > 7) {
    resolve({ Number: num });
  } else {
    reject({ err: "Data is not Available" });
  }
});


Promise.all([getData1,getData2,getData3])
.then(res => console.log(res))
.catch(error => console.log(error))