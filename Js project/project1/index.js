let leftbutton = document.querySelector('.leftbutton');
let rightbutton = document.querySelector('.rightbutton');
let countvalue = document.querySelector('.value');

leftbutton.addEventListener("click", () => {
    let value=parseInt(countvalue.innerText)-1;
    countvalue.innerText=value;
});
rightbutton.addEventListener("click", () => {
    let value=parseInt(countvalue.innerText)+1;
    countvalue.innerText=value;
});