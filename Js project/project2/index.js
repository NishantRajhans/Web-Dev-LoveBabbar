let sharebutton=document.querySelector(".button1");
let modal=document.querySelector(".modal");
let crossbutton=document.querySelector(".fa-xmark");
let overlay=document.querySelector(".overlay");
sharebutton.addEventListener("click",function()
{
  modal.classList.add("active");
  overlay.classList.add("overlayactive");

});
overlay.addEventListener("click",function(){
    modal.classList.remove("active");
    overlay.classList.remove("overlayactive");
});
crossbutton.addEventListener("click",function(){
 modal.classList.remove("active");
 overlay.classList.remove("overlayactive");
});