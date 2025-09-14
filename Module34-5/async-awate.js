async function loadData(){
// fetch("https://jsonplaceholder.typicode.com/users")
// .then(res => res.json())
// .then(data => console.log(data));
const url = await fetch("https://jsonplaceholder.typicode.com/users");
const data = await url.json();
console.log(data)
}

loadData();