// console.log('namaste duniya mera naam ');// consol.log se hum console wali jo window h hamare browser k aandar usme hum chizo ko print karwate h log ka matlab print h
// console.log('namaste duniya mera naam rahul he ');



// variable:- named memeory location hum let ya fir var ka use kar sakte h yaha pe batata nahi padta h ki kon se type ka data store karna h hame let jo h wo jis {} isme declear hua hoga wo sirf uske aandar tak hi rahega par var ka hum uss file me kahi par bhi kar sakte h agar humne ek baar usko kahi par declear kar diya h to
// let num=10;
// let b=17.5;
// let name ='nishant';
// let status =true;
// console.log(num);
// console.log(name);//reserved keyword h name issi liye isme eesa ho raha h
//  b=8;
//let b=9;//hum variable ki value ko to change kar sakte h par usko wapis se declear nahi kar sakte h par var k case hum usko re declear kar sakte h
// console.log(b);
// var n='nishant priyadarshi';
// console.log(n);
// var n='nishant';//var me humk re declear kar sakte h 
// console.log(n);
// const stat=45;
// console.log(stat);
//stat=96;//isme hum changes nahi kar sakte h q ki ye constant rehti h
//console.log(stat);
// variable naming rules :-ki wo reserved keyword nahi hona chahiye or wo number se start nahi ho sakta h or meaningfull hona chahiye or wo camelcase hona chahiye or usme space ye '-' nahi hona chiye




// primitive data type
// string:-collection of Character
// number:isme koi sa bhi humber ho sakta h
// bollean:isme true ya false
// undefined:isme agar humne koi variable ko declear kar diya h par uski value me kuch nahi dala h or usko print karne jaenge to undefine print hoga
// let a,c;
// console.log(a,c);
// null:isme agar humne variable me jo value thi usko 0 kar diya to null print hoga
// let m=null;
// console.log(m);




// dynamic type language h ye
// let man='nishant';
// console.log(man);
// man=10;
// console.log(man);






// refrence data type
// Array: used to store multiple data chahe data type alag q na ho
// let arr=['rahul','priyanshu','chandra'];
// console.log(arr[5]);//undefine print hoga
// arr[0]=2;//isse hum value ko overwrite kar sakte h
// console.log(arr[0]);
// arr[3]='jhaji';//isse hum nai value ko add kar sakte h
// console.log(arr[3]);
// // Object:multiple variable ko mila k hum object bana sakte h
// let person={
//    na:'nishant',
//     age:20
// }
// object ki property ko excess karne k liye hum do ciz ka use karte h ek to dot or dusra bracket inse jo uske property ki value h wo excess hogi
// console.log(person.na);
// console.log(person['age']);
// function





// Arithmetic operators:+,-,/,*,%,**
//  ** ye jo h wo power operato h jese 2**3 ka matlab h 2 ki power 3 baki operator to same hi h
//console.log(2**3);// iska ans 8 h



//pre post increment drecrement
let a=5;
console.log(++a);
console.log(--a);
console.log(a--);
console.log(a++);




//Assignment operator
let b=6;
b+=10;
console.log(b);


// Comparison operator
console.log(3>5);
console.log(3>=5);
console.log(3<5);
console.log(3<=5);
console.log(3===5);//ye jo h wo strictly equla operator h isme value k saath data type bhi same h ki nahi wo check hota h
console.log(3==='nishant');
console.log(3==5);
console.log(3!==5);



//Ternary operator 
//syntex:-condition ? value1:value2
let age=52;
let status=(age>=18)?' you can vote':'you can not vote';
console.log(status);



//Logical operator
//AND:&&
//OR:||
//NOT:!
// with non booleans
//falsy values:- undefine, null, 0, false, ' ' , NaN
//truthy values:- true, 1, 'nishant',any thig that is not falsy 
console.log(true||'nishant');
console.log(false||'nishant');
console.log(false||5||'nishant');//isme 5 q ki wo pehli truthy value h or OR operator me eak baar true value mil jati h to hum aage nahi jate h
console.log(true&&'nishant');
console.log(false&&'nishant');
console.log(false&&5&&'nishant');//isme false q ki ek false h h
console.log(true&&5&&'nishant'&&true&&10);//isme sabse last value print hoti h


//Bitwise operator
//AND:&
//OR:|
console.log(3&4);
console.log(3|4);


//Operator precendence
//let c=a+b*d/c
//let c=((a+(b*d))/c)



//Control statement
//if else:same c++ jesa h
// switch:same c++ jesa h



//Loops
//for loop: seme c++ jesa h
//while loop: seme c++ jesa h
//do wile loop: seme c++ jesa h
//for in loop
//for of loop


//Break and continue: seme c++ jesa h



//Objects in js:isme property or bhevioue hoti h iske aandar collection of key value pair hote h isme jo bracket hote h{} unko hum object letrals kehte h bheviour add hota h function k dwara jo function hum object k aandar create karte h usko hum method bolte h 
const rectangle={
    lengthg:10,
    breadth:5,
    draw:function(){
        console.log('draw');
    }
};
console.log(rectangle);
console.log(rectangle.lengthg);
console.log(rectangle.breadth);//dot operator ka use karke hum object ki property ya method ko excess kar sakte h
console.log(rectangle.draw);//isse poora method print hota ki uske aandar kya kya chiz h
console.log(rectangle.draw());//isko excess karne k liye bracket lagaya h draw k baad q ki wo k function h



//Object creation 
//fectory function:- iske aandar hum request daalte h ki object bana do or ye object bana k return karta h uske liye humko factory function ko call karte h or iske output ko store karana hota h

function createRectangle()
{
    const rectangle={
        lengthg:10,
        breadth:5,
        draw:function(){
            console.log('draw');
        }
    };
    return rectangle;
}
let rectangle2=createRectangle();//factory function call kiya h or uske output ko store karwa liya h 
console.log(rectangle2);
//eese humne different input wale rectangle creation function ko bana liya h
function createRectangle(length,breadth)
{
    const rectangle={
        length,
        breadth,
        draw:function(){
            console.log('draw');
        }
    };
    return rectangle;
}
let rectangle3=createRectangle(8,9);//factory function call kiya h or uske output ko store karwa liya h 
console.log(rectangle3.length);

//Construction function:-iske aandar hum pascle notation ko follow karte h isme hum sirf property or method me values ko assing karte h or isme hum  return nahi karte h
function CreateRectangle()
{
    this.leng =2;
    this.bread =5,
    this.draw=function(){
            console.log('draw');
        }
}
//object creation using constructor function
let rectangle4=new CreateRectangle();//new jo h wo empty object ko return karta h 
console.log(rectangle4);
console.log(rectangle4.leng);
console.log(rectangle4.bread);

function CreateRectangle(len,bre)
{
    this.length=len;
    this.breadth=bre;
     this.draw=function(){
            console.log('draw');
        }
}
//object creation using constructor function
let rectangle5=new CreateRectangle(50,69);//new jo h wo empty object ko return karta h 
console.log(rectangle5.length);
console.log(rectangle5.breadth);




//Dynamic nature of object:isme hum object k aandar addition kar sakte h ya deletion kar sakte h property ya method ka
rectangle5 .colour='yellow';
console.log(rectangle5);
delete rectangle5.colour
console.log(rectangle5);




//construction prperty :js k aandar jo bhi object hote h unki ek property hoti h constructor property jo batata h ki ye object bana kese h 
console.log(rectangle5.constructor);
console.log(CreateRectangle.constructor);
let rectangle6=Function(`length`,`breadth`,`this.length=length;
this.breadth=breadth;
 this.draw=function(){
        console.log('draw');
    }`);
    let rect=new rectangle6(50,69);
    console.log(rect);
  //function bhi objects hote h js me jese hum objects ki property or bheviour ko excess karte h dot operator ki madad se wese hi dot operator ki madad se hum function ki property ko excess kar sakte h



//Types in js
//primitive data types:- string, number, boolean, null, undefined
//reference data types:- array, object, function//ye saare jo hote h wo objects hote h



//Iteration through objects
//for in loop
let rectangle7={
    length:54,
    breadth:90
}
for (const key in rectangle7) {
   console.log(key,rectangle7[key])
   console.log(key)
   console.log(rectangle7[key])
}
//for of loop
//array,map:itrable h
for(let key of Object.keys(rectangle7)){
    console.log(key,rectangle7[key])
}


//Property present h ki nahi

if('length' in rectangle7){
console.log('present');
}
else{
    console.log('Not present');  
}
if('height' in rectangle7){
console.log('present');
}
else{
    console.log('Not present');  
}




//Object cloning
//iteration
let source={
    m:10,
    n:20,
    c:50,
}
let destination={}
for(let key in source)
{
    destination[key]=source[key]
}
console.log(source);
console.log(destination);
//Assign
let source2={
    m:20,
    n:50,
    c:70,
}
let destination2=Object.assign({},source2)
console.log(source2);
console.log(destination2);
//Spread
let source3={
    m:200,
    n:500,
    c:700,
}
let destination3={...source3}
console.log(source3);
console.log(destination3);



//Garbage collection:iska kaam ye h ki ye eese object ya variable ko find karta h jo use me nahi h or unki memory ko deallocate kar deta h memory free kar deta h iske upper hamara control nahi hota h





//inbuilt object math
console.log(Math.random());
console.log(Math.PI);
console.log(Math.abs(-2));
console.log(Math.round(1.8));
console.log(Math.max(1,5,8,9));
console.log(Math.min(1,5,8,9));



//Strings:js me string do type ki hoti h ek primitive or dusri object
let firstName='Nishant';

let lastName=new String('kumar');//eese hum string object create karte h yaha par humne string construction function ka use kiya h
console.log(typeof(firstName));
console.log(typeof(lastName));


//Template literals
//iske aandar hum ` ` inko template letral bolte h inke aanadar hum jo bhi chiz jese bhi likhte h wo wese hi print hoti h


//Date and time
let date=new Date();
console.log(date);
//or bhi 5 tarike h date k liye uske liye hum MDN use kar sakte h isme hum getter setter ka use kar sakte h date ki value ko excess or change karne k liye getter setter kuch nahi bus ek function h agar hum uss function ki madad se value ko set kar rahe h to wo setter hua or agar uski madad se hum value ko get kar rahe h to wo getter hua
console.log(date.getFullYear());
date.setDate(22)
console.log(date);



//Arrays:object h
//creation
let number=[1,5,2,7,6]
console.log(number);

//Adding new element
//1.end
number.push(10);
//2.middle
number.splice(2,0,11,'a');

//3.begin
number.unshift(8);
console.log(number);


//finding element
console.log(number.indexOf(4));
console.log(number.indexOf(5));
console.log(number.indexOf(5,3));
if(number.indexOf(5)!=-1){
    console.log('present')
}
console.log(number.includes(7));


//array of objects
let courses=[
    {num:1,naam:'nishant'},
    {num:2,naam:'priyadarshi'}
]

//finding element
console.log(courses);
console.log(number.indexOf({num:1,naam:'nishant'}));
console.log(number.includes({num:1,naam:'nishant'}));
let course=courses.find(function(course){
    return course.naam==='nishant';

});
let course2=courses.find(function(course){
    return course.naam==='priyadarshi';

});
let course3=courses.find(function(course3){
    return course3.naam==='rahul';

});
let course4=courses.find(course4=> course4.naam==='rahul'
);
console.log(course);
console.log(course2);
console.log(course3);
console.log(course4);


//removing element
let box=[1,2,3,4,5];

//end
console.log(box.pop());
//begin
console.log(box.shift());
//middle
console.log(box.splice(2,1));



//emptying an array
let element=[1,2,3,4,5];
let element2=element;
// console.log(element);
// console.log(element2);
// element=[];
// console.log(element);
// console.log(element2);
 //element.length=0;
element.splice(0,element.length);
console.log(element);
console.log(element2);


//spliting element
let message='hello world';
let part=message.split(' ');//ye array create kar deta h
console.log(part);
//Hw object ke liye isko karna h
let joined=part.join('_');//join uspe kaam karega jo split hua h jese ye message pe kaam nahi kar raha h par part pe kar raha h
console.log(joined);


//combining and slicing elements
let element3=[1,2,3,4,5];
let element4=[5,7,3,9];
let element5=element3.concat(element4);
console.log(element5);
console.log(element3.slice(2,4));//ye last index ko exclude kar deta h jese yaha par 4 pe 5 h to 5 print nahi hoga
//HW combining and slicing of objects



//spread operator
let element6=[1,2,3,4,5];
let element7=[5,7,3,9];
let element8=[...element6,...element7,...'a'];
console.log(element8);


//iterating through array
//for each loop
let element9=[1,2,3,4,5];
for(let key of element9){
console.log(key);
}
//for each loop
element9.forEach(key=>console.log(key));//isme call back function likha h


//joining array
let element10=[1,2,3,4,5];
let joining=element10.join(',');
console.log(joining);

//sorting array
let element11=[1,2,3,4,5];
element11.sort();
console.log(element11);
let element12=[5,10,40,4];
element12.sort();//ye number ko string me convert karke sort karta h issi liye iska ans glat aaraha h
console.log(element12);
let sorting=element12.sort(function(a,b)//yaha pe humne call back function ka use kiya h sort karne k liye q ki normal tareeke se sort nahi ho raha tha
{
    return a-b;
});
console.log(sorting);
element11.reverse();
console.log(element11);
//isko hum objects me nahi laga sakte h

//Filtering array
let element13=[1,2,-3,4,-5];
let filter=element13.filter(function(value)
{
    return value>0;
});
console.log(filter);

//Mapping arrays
let element14=[1,2,-3,4,-5];
console.log(element14);
let mapping=element14.map(function(value)
{
    return 'sutdent_number '+ value;
});
console.log(mapping);


//Mapping with objects
let element15=[1,2,-3,4,-5];
console.log(element14);
let mappi=element14.map(function(num)
{
    return {value:num};
});
console.log(mappi);



//functions:-same code ko reuse karne k liye code bulky nahi lagega jo block of code hota h jo specific task ko karta h
//function syntax
function functionName()
{
    console.log('hollo world');
}
//function call
functionName();//jab hum eese karke function ko call karenge to hi function chalega function ko call karne ka tarika h ye iskko agar hum function declear karne se pehle likh de to function fir bhi chalega q ki java script me hoisting bolte h isme ye hota h ki jab java script ka code run hota h to pehle hi saare function top pe chale jate h internally jiski wajha se function declearation aapne aap hi pehle aajata h function call se



//function assignment isme hum function call ko function assignment se upper nahi likh sakte q ki jab program run hota h to sirf function declearation hi upper jate h assignment nahi or hum stand ko print kar sakte h walking ko nahi
let stand=function walking()
{
    console.log('walking');
}
stand();
let jum=stand();//eese bhi kissi function ko kissi or valribale me aasign karke hum call kar sakte h
console.log(jum);

//named function assignment;isme hum function ka naam dalte h or function jisko assinkiya h ussi k naam se function ko call kar sakte h
let clapping=function walking()
{
    console.log('clapping');
}
clapping();


// annonimous function assisgnment;isme hum function naam nahi dalte h or function jisko assinkiya h ussi k naam se function ko call kar sakte h
let clap=function()
{
    console.log('clap');
}
clap();
// let jump=clap;//eese karle bhi assign kar sakte h dusre variable me function ko
// jump();



//dynamic language h 
let x=1;
x='a';
console.log(x);
function sum(a,b)
{
    console.log(arguments);
    return a+b;
}
console.log(sum(1,2));
console.log(sum(1));//Nan q ki b ko pass nahi kiya h
console.log(sum(2));//Nan q ki a ko pass nahi kiya h
console.log(sum(1,2,3,4,5));//iske pehle do number a or b ko mil jaegi or saari  value arguments me store ho jaegi usme key value pair hote h mapping nahi hoti h 
function add(a,b)
{
    let total=0;
    for(let value of arguments)//arguments jo h wo object h
    total+=value
    return total;
}
console.log(add(1,2,3,4,5));//isme humne loop laga k isko dynamic function bana diya h isme aab hum kitni bhi value daale unn sabka sum return hoga 
console.log(add(1));//aab yaha par NaN print nahi ho raha h function me se a,b ko hata sakte h tab bhi function chal jaega




// rest operator ... isme ye hota h ki hum function me kitne bhi values ko pass kar sakte h wo wo sab rest para meter me store ho jaenge ye rest perameter unko array ki form me store karta h jese ye function h isme rest parameter se pehle num h to jo hum valus ko pass karenge usme se pehli value num me jaegi or baki rest parameter eese kitne bhi num ya koi bhi naam ko hum rest parameter se pehle likh sakte h par rest para meter k baad kuch nahi likh sakte h 
function su(num,...arguments)
{
    console.log(arguments);//ya pe argument jo h wo array h
}
su(1,2,7,3,9,4,6);



// //default parameter: isme h ki humne r ki default value ko 5 rakh diya h uska matlab h ki agar user ne r ki value ko daala nahi to function me r ki value 5 chali jaegi issi ko hum default parameter bolte h jab hum ek parameter ko default bana dete h to uske aage k saabhi parameter ko humko default banana padta h
function intrest(p,r=5,t=10)
{
    return (p*r*t)/100;
}
console.log(intrest(100,2,7))
console.log(intrest(100,2))
console.log(intrest(100,7))




//getter setter inko humko object k aandar likhna hota h
let pers ={
    fName :'Nishant',
    lName :'Priyadarshi',
    get FullName()// getter ki madad se hum property ko excess kar sakte h
    {
        //return `${this.fName} ${this.lName}`;//eese bhi kar sakte h
        return `${pers.fName} ${pers.lName}`;
    },
    set FullName(name)//setter ki madad se hum property ko set kar sakta hu
    {
        if(typeof name!==String)
        throw new Error('Name must be a string');
        let val=name.split(' ');
        // pers.fName=val[0];// eese bhi ho sakta h
        // pers.lName=val[1];// eese bhi ho sakta h
        this.fName=val[0];// this se hoga ki jis bhi object pe hum currently kaam kar rahe h uska naam
        this.lName=val[1];// this se hoga ki jis bhi object pe hum currently kaam kar rahe h uska naam
    }

};
console.log(pers.FullName);
function getName()
{
    //return '${pers.fName} ${pers.lName}';//eese ye string maani jaegi q ki ye ' ' aandar h sahi chiz ko print karne k liye humko inko ` ` iske aandar likhna hoga
    return `${pers.fName} ${pers.lName}`;
   // return pers.fName+' '+pers.lName;//isse bhi upper wali chiz print hogi jo ` ` iske aandar se hui h
}
console.log(getName());
// pers.FullName='Rahul Kumar';
// console.log(pers.FullName);
// console.log(pers.FullName('Priyanshu Tiyagi'));//ye function nahi h isse liye hum isme value ko pass nahi kar sakte h par assign kar kar sakte h





//try ans catch:isse hum error handeling karte h
// try
// {
//     pers.FullName='sakte';

// }
// catch(e){
// alert('Error: '+e);

// }
// try
// {
//     pers.FullName=1;

// }
// catch(e){
// alert(e);

// }
// try
// {
//     pers.FullName=1;

// }
// catch(e){
// alert('Error: '+e);

// }



//Scopes
{
    let cd=10;
    console.log(cd);
}
//console.log(cd);//cd print nahi hoga q ki wo let h or uska life time sirf code blocks k aandar tak hota h 
{
    var cd=10;
    console.log(cd);
}
console.log(cd);//cd print hoga q ki wo var h

function z()
{
    let len=5;
    console.log(len);
}
//console.log(len);//ye print nahi hoga q ki ye { }inse bahar h
z();
function y()
{
    var lengt=5;
    console.log(lengt);
}
//console.log(lengt);//ye print nahi hoga q ki ye function se  bahar h var ka life jo h wo function ke aandar tak hoti h jis function me wo define h agar function se bahar h to poore code me uski life hogi
y();
if(true)
{
    let mum=4;
}
//console.log(mum);//mum print nahi hoga q ki ye { }in
if(true)
{
    var mun=4;
}
console.log(mun);//ye print ho jaega q ki ye function k aandar declear nahi hua h

for(var i=0;i<5;i++)
{

}
console.log(i);
for(let j=0;j<5;j++)
{

}
//console.log(j);//ye nahi chaega 

function h()
{
    const abc=4;//isme error nahi aaega q ki const ka life jo h wo bus { } inke aandar tak h issi liye humne niche bhi issi naam se const ko declear kiya h to erroe nahi aaya h
}
function i()
{
    const abc=4;
}
const k=9;
function talk()
{
    const k=9;
}


//Reducing an array
let element16=[1,2,3,4,5,6,7,8,9,1]
let total=0;
for(let key of element16)
{
    total+=key;
}
console.log(total);
let totalsum=element16.reduce((accumulator,currentvalue)=>accumulator+currentvalue,0);//yaha per jo 0 h wo accumulator ki initial value h agar hum yaha par 0 na bhi likhe to bhi chalega ans bhi correct aaega par uss time accumulator ki value jo h vo array k 0th index ki value hogi
console.log(totalsum);
