let item1 = document.querySelector("ul");
let main = document.getElementsByClassName("r1");

console.log(item1);
item1.addEventListener("click", (e)=>(e.target.classList.toggle("selected")));
