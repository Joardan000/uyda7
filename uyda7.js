fetch("https://jsonplaceholder.typicode.com/posts").then(response => response.json()).then((data) => {
    x(data)
})
let wrap = document.getElementById("div")
function x (a){
    a.forEach(element => {
        let box = document.createElement("div");
        box.innerHTML = `
        <p>${element.id}</p>
        <p>${element.title}</p>
        `
        div.append(box);
    })
}