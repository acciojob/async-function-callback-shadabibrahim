const url = "https://jsonplaceholder.typicode.com/posts/1";

//your JS code here. If required.
let btn = document.getElementById("btn");
let result = document.getElementById("output");

btn.addEventListener('click',fetchData)

async function fetchData() {
	let data = await fetch("https://jsonplaceholder.typicode.com/posts/1");
	data = await data.json();
    // console.log(data.title)
	result.innerHTML = data.title;
}