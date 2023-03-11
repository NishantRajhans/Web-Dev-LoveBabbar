let passwordbox=document.querySelector('.input');
let copy=document.querySelector('.copyicon');
let range=document.querySelector('.range');
let rangenumber=document.querySelector('.lengthnumber');
let upper=document.querySelector('.uppercase');
let lower=document.querySelector('.lowercase');
let number=document.querySelector('.number');
let symbol=document.querySelector('.symbol');
let strengthcolour=document.querySelector('strengthcolor');
let genratepassword=document.querySelector('.genratebutton');
//starting condition
let password="";
let passwordlength=10;
let checkcount=1;
let colour="grey";
rangenumber.innerText=passwordlength;

console.log(rangenumber.innerText);
function handelrange()
{
    rangenumber.innerText=passwordlength; 
    range.value=passwordlength;
}
range.addEventListener("input",function(e)
{
    passwordlength=e.target.value;
    handelrange();
});
