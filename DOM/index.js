//window:ye ek global object h isko hum kahi par bhi excess kar sakte h isko browser create karta h it reperse a browser window inke aandar DOM BOM JS k core function h wo lie karte h isse hum browser ki window ko control kar sakte h using window global object



//DOM document object model jab hum HTML ke poore code ko JS ke object me convert kar dete h to usko Document bolte h ye ek tree like structure h sabse pehle character jo h wo convert hota h tag me fir token me fir node me fir last me DOM ban jata h
//console.log(document); //isse poora web page ka jo code h wo print ho jaega



//BOM :kissi bhi content se related kaam ko chor k jab hum browser ke saath communicate karte h to usko BOM bolte h

//Excessing HTML element
//document.getElementById('id'); //isse hum document me se uss element ko excess kar sakte h jiski id wo h jo hum 'id' me dalenge
//let ele=document.getElementById('con');
//console.log(ele);//ye jo h isko hum hamesa document pe call karenge or ye singel object hi dega


//let cla=document.getElementsByClassName('bg');console.log(cla);//ye jo h isko hum hamesa document pe call karenge or ye multiple object hi deta h or ye jo h wo array ki form me nahi return karta h wo HTML collection h 

 
//let tg=document.getElementsByTagName('p');
//console.log(tg);//ye jo h isko hum hamesa document pe call karenge or ye multiple object hi deta h or ye jo h wo array ki form me nahi return karta h wo HTML collection h 



//Query Selector
//let temp1=document.querySelector('p');
//console.log(temp1);
//ye jo h usse hum p tag se elemet ko select kar sakte h jiska HTML tag p h par isse jo pehla p tag hoga wo return hoga


//let temp2=document.querySelector('.bg');
//console.log(temp2);
//ye jo h usse hum bg class jis  elemet ki h uss element ko return karega par isse jo pehla bg class hoga wo return hoga


//let temp3=document.querySelector('#con');
//console.log(temp3);
//ye jo h usse hum con id jis  elemet ki h uss element ko return karega


//let temp4=document.querySelectorAll('p');
//console.log(temp4);
//ye jo h usse hum p tag se elemet ko select kar sakte h jiska HTML tag p or ye saare p tag return karega wo bhi nodelist k form me

//update
//innerHTML:isse hum koi bhi element ko get kar sakte h or use decendent ke HTML content ko bhi get kar sakte h or ye element k HTML content ko set kar sakta h ise jo hum HTML ke element ko select karenge or uss element k aandar agar koi or HTML tag h to ye usko render karega par textContent jo h uss HTML tag ko as a text treat karega 
//let inner=$0;
//inner.innerHTML;//eese hum iska use kar sakte h

//outerHTML(HW)

//textContent:isse hum text content ko get ya set kar sakte h ye jo h wo uss HTML tag ke aandar jitna bhi text h unn sabko print kar dega 
//let te=$0
//te.textContent//eese hum isko use kar sakte h

//innerText:isse hum text content ko get ya set kar sakte h ye jo h wo uss HTML tag ke aandar jitna bhi hiddend content  text h unn sabko chor k baki text ko print kar dega 
//let te=$0
//te.innerText//eese hum isko use kar sakte h


//Adding new element ya fir content using js
//createElement:
// let num=document.createElement('p')
// console.log(num)
// <p>​</p>
//appendChild:isse jo bhi hum element ko insert karenge kissi bhi element k aandar to wo sabse last me ja k insert hoga
// let num2=$0
// num2.appendChild(num)​
// console.log(num2)
//  <h2 class=​"desc">​"PARA GLIDING"<p>​</p>​</h2>​


//creating text node
//bekar method
// let num=document.createElement('p')
// console.log(num)
// <p>​</p>
// let text=document.createTextNode('PARA GLIDING');
//num.appendChild(text);
//let num2=$0
// num2.appendChild(num)

//aacha tarika
// let num=document.createElement('p')
//num.textContent='PARA GLIDING'
//num2.appendChild(num)


// element ko insert karne k liye kissi bhi position pe
//innerAdjacentHTML:isme hum 2 value ko pass karenge pehla ki kis position me insert karna h or dusra ki kon sa text ya element insert karna h isme position me 4 value h beforbegin beforeend afterbegin afterend


//hum element ko remove bhi kar sakte h
//removeChild:isme humko parent element ka pata hona chahiye or kya chiz humko delete karna h wo pata hona chahiye hum parent find karne k liye .parent ka use karte h or isko use karne k baad humko .remove lagana padega usse hi remove hoga child




//CSS me changes kar sakte h using JS

//.style
// let te=$0
// undefined
// te.style.color='red'
// 'red'

//.csstext
// let te=$0
// te.style.cssText='color:red; background-color:white'

//.classname
// let te=$0
// te
// <h2 class=​"secheading gym tym mym nym toy" id=​"con">​Adventure Time !​</h2>​
// te.className
// 'secheading gym tym mym nym toy'
// typeof te.className
// 'string'
// te.className.trim().split()
// ['secheading gym tym mym nym toy']
// te.className.trim().split(' ')
// (6) ['secheading', 'gym', 'tym', 'mym', 'nym', 'toy']
// let temp=te.className.trim().split(' ')
// temp
// (6) ['secheading', 'gym', 'tym', 'mym', 'nym', 'toy']0: "secheading"1: "gym"2: "tym"3: "mym"4: "nym"5: "toy"length: 6[[Prototype]]: Array(0)
// te.classList
// DOMTokenList(6) ['secheading', 'gym', 'tym', 'mym', 'nym', 'toy', value: 'secheading gym tym mym nym toy']

//.classlist
// let te=$0
// te
// <h2 class=​"secheading gym tym mym nym toy" id=​"con">​Adventure Time !​</h2>​
// te.className
// 'secheading gym tym mym nym toy'
// typeof te.className
// 'string'
// te.className.trim().split()
// ['secheading gym tym mym nym toy']
// te.className.trim().split(' ')
// (6) ['secheading', 'gym', 'tym', 'mym', 'nym', 'toy']
// let temp=te.className.trim().split(' ')
// temp
// (6) ['secheading', 'gym', 'tym', 'mym', 'nym', 'toy']0: "secheading"1: "gym"2: "tym"3: "mym"4: "nym"5: "toy"length: 6[[Prototype]]: Array(0)
// te.classList
// DOMTokenList(6) ['secheading', 'gym', 'tym', 'mym', 'nym', 'toy', value: 'secheading gym tym mym nym toy']
//add(),remove(),toggle(),contains() ye hum classlist me use kar sakte h


//.setatribute isse hum styling to kar sakte h par id class bhi set kar sakte h
// let te=$0
// te.setAttribute("style","color:blue;background-color:pink;")


//Browser events:click,scroll,content load ye sab event h website me jitne bhi event lage h wo hum moniterEvent(document) ki madad se dekh sakte h isse humne event ko turn on kar diya h jiski wajha se jab bhi hum web page pe kuch karte h like click ya scrole to event show hota h consol pe or hum isko turn off bhi kar sakte h ki humko event shaw na ho uske liye hum unmoniterEvent(document) ka use karenge

//class jo hoti h wo like blue print hoti h or jo object h wo like real h

//JS me interface jo hota h uske hum blueprint keh sakte h ek event target hota h wo ek interface hota h jisko object use karte h or jo event ko recive karta h or unpe listener ko laga ke uspe respond karta h isme 3 method hote h addEventListener(event,listener),removeEventListener(event,listener), dispatchEvent(event)
//jo bhi method ya property event target k pass hogi wo node k pass bhi hogi
//or element jo h wo node se inherit karta h node ki property oe event target ki property <p></p> iss poore ko hum event bolte h event target jo h wo top level interface hota h iske aandar document,paragraph etc isske aandar aata h

//syntex
//event target.addEventListener(event to listen for,function to respond when event happen)  
//event target wo h ki jispe kuch ho to hum event listner laga rahe h ,event to listen for wo h jo event hone h jese click scroll ,function to respond when event happen ye wo function h ki jab event hoga to hum ye function ko run karna chahte h 
//document.addEventListener('click',function(){
//     console.log('i click on document');
// });
// undefined
// i click on document
 


//remove event listener
// document.addEventListener('click',function(){     
//     console.log('i click on document');
//  });
// document.removeEventListener('click',function(){     
//     console.log('i click on document');
//  });//eese likhne se dono function jo h wo different h to remove event listner kaam nahi kar raha h remove event listner ko kaam karane k liye event target event type or function same hone chahiye 
//  function eventfunction(){     
//     console.log('i click on document');
//  }
//  document.addEventListener('click',eventfunction);
// document.removeEventListener('click',eventfunction);
//yaha pe function same h issi liye remove wala kaam kar raha h or consol me kuch print nahi ho raha h
 

//dispatch event -HW


//phase of event
//1.capture phase:target tak aane k phase ko
//2.at target phase:target pe pahuchne pe
//3.bubbling phase:target se wapis jane wala

//event target.addEventListener(event to listen for,function to respond when event happen,use capture phase)
//use capture phase jo h waha pe phase of event k 3 phane me se hum koi ek phase ko daal sakte h by default bubbling phase hota h usme waha pe hum true pass karke capture phase ko uss 3rd argument pe daal sakte h at target phase daal sakte h ki nahi wo HW h

//the event object:jab bhi event occur hota h to jo addEventListener(event,listener),removeEventListener(event,listener), dispatchEvent(event) ka function h usme ek event object aata h uss object ki saari jankari hum le sakte h usko print kara h 
// document.addEventListener('click',function(nishant){     
//     console.log(nishant);
//  });
// undefined
// PointerEvent {isTrusted: true, pointerId: 2, width: 1, height: 1, pressure: 0,}
// isTrusted: true
// altKey: false
// altitudeAngle: 1.5707963267948966
// azimuthAngle: 0
// bubbles: true
// button: 0
// buttons: 0
// cancelBubble: false
// cancelable: true
// clientX: 690
// clientY: 35
// composed: true
// ctrlKey: false
// currentTarget: null
// defaultPrevented: false
// detail: 1
// eventPhase: 0
// fromElement: null
// height: 1
// isPrimary: false
// layerX: 690
// layerY: 35
// metaKey: false
// movementX: 0
// movementY: 0
// offsetX: 670
// offsetY: 35
// pageX: 690
// pageY: 5
// pointerId: 2
// pointerType: "touch"
// pressure: 0
// relatedTarget: null
// returnValue: true
// screenX: 435
// screenY: 200
// shiftKey: false
// sourceCapabilities: InputDeviceCapabilities {firesTouchEvents: true}
// srcElement: div.m-auto.flex.grow.self-end
// tangentialPressure: 0
// target: div.m-auto.flex.grow.self-end
// tiltX: 0
// tiltY: 0
// timeStamp: 33780.10000014305
// toElement: null
// twist: 0
// type: "click"
// view: Window {window: Window, self: Window, document: document, name: '', location: Location, …}
// which: 1
// width: 1
// x: 690
// y: 35
// [[Prototype]]: PointerEvent


//the default action:jese ancher tag ka default action h ki wo link open karega ye uska defalt funtion h to isko rokne k liye hum .preventDefault() ka use karte h
// let temp =document.querySelectorAll('a');
// let temp2=temp[2];
// temp2.addEventListener('click',function(e){
//     e.preventDefault();
//     console.log('you click on third tag');
// });

//Avoid to many events



// function eventfunction(event){
//     console.log('click on para');
// }
// let mydiv=document.createElement('div');
// for(let i=1;i<=100;i++)
// {
//     let newElement=document.createElement('p');
//     newElement.textContent='This is para'+i;
//     newElement.addEventListener('click',eventfunction);
//     mydiv.appendChild(newElement);
// }
// document.body.appendChild(mydiv);


// function eventfunction(event){
//     console.log('click on para');
// }
// let mydiv=document.createElement('div');
// for(let i=1;i<=100;i++)
// {
//     let newElement=document.createElement('p');
//     newElement.textContent='This is para'+i;
//     mydiv.appendChild(newElement);
// }
// mydiv.addEventListener('click',eventfunction);
// document.body.appendChild(mydiv);

// let mydiv=document.createElement('div');
// function eventfunction(event){
//     if(event.target.nodeName==='P')
//     console.log('para'+event.target.textContent);
// }
// mydiv.addEventListener('click',eventfunction);
// for(let i=1;i<=100;i++)
// {
//     let newElement=document.createElement('p');
//     newElement.textContent='This is para'+i;
//     mydiv.appendChild(newElement);
// }
// document.body.appendChild(mydiv);


// let temp=document.querySelector('.wrapper');
// temp.addEventListener('click',function(event){
//     console.log(event.target.textContent);
// });

// let temp=document.querySelector('.wrapper');
// temp.addEventListener('click',function(event){
//     if(event.target.nodeName==='SPAN')
//     console.log(event.target.textContent);
// });


//DOMContentLoaded
/* <script>
        document.addEventListener('DOMContentLoaded', function(){
          let temp=document.querySelector('.wrapper');
          console.log(temp);
        })
    </script> */


//performance
//measure speed of code
//how to write efficient and performing code
//event loop

//standard way to measure how long your code takes to run is by using porformance.now()
// const time1=performance.now();
//  function eventfunction(event){
//      console.log('click on para');
//  }
//  let mydiv=document.createElement('div');
//  for(let i=1;i<=100;i++)
//  {
//      let newElement=document.createElement('p');
//      newElement.textContent='This is para'+i;
//      newElement.addEventListener('click',eventfunction);     mydiv.appendChild(newElement);
// }
//  document.body.appendChild(mydiv);
//  const time2=performance.now();
//  console.log(time2-time1);


//  const time3=performance.now();
//  function eventfunction(event){
//      console.log('click on para');
//  }
//  for(let i=1;i<=100;i++)
//  {
//      let newElement=document.createElement('p');
//      newElement.textContent='This is para'+i;
//      newElement.addEventListener('click',eventfunction);
//      document.body.appendChild(newElement);
// }
//  const time4=performance.now();
//  console.log(time4-time3);


//reflow :jab hum kissi bhi chiz ko document me add karte h to bahut saari claculation hoti h jese uska size kya h kaha pe rakhna h usse iss chiz ko hum reflow kehte h
 
//repaint:jab wo new document jab pixel k form me screen pe show hota h to usko repaint kehte h

//document fragment:ye ek light weight object h isme reflow or repaint jo h wo na k barabar hota h kissi bhi code ko optimese kare k liye humko uska reflow or repaint kam karna hoga to agar humko kissi bhi chiz ko bahut bar document me add karna h to uske liye hum usko pehle fragment me add karte h or fit uss fragment ko document me add kar dete h
// let fragment=document.createElement();
// for(let i=1;i<=100;i++)
//   {
//       let newElement=document.createElement('p');
//      newElement.textContent='This is para'+i;
//      fragment.appendChild(newElement);
//  }
//  document.body.appendChild(fragment);


//call stack :java script jo h wo single thread language h isme ek hi statemnt ya ek command  ek baar me excute hogi or koi chiz kese flow hogi wo call stack se pata chalta h synchronus hum usse kehte h jo line by line excute ho jae or jab uske excute ka time ho tab wo excute ho JS me jo event listener h wo asynchrous h q ki wo tab excute hoga jab hum koi event karenge

//event loop: isme 3 chiz hoti h call stack or dusra browser or third jo h wo event queue h jab bhi koi synchronus statement aati h to wo bus call stack me jati h fir jab wo excute ho jati h to call stack se nikal jati h or jab asynchrous statement aati h to wo call stack se browser me chali jati h or call stack se uski call hatt jati h or next statement excute hoti h or jab wo asynchrous statement excute karne ka time aata h jese event listner  me jab click hoga to wo statement browser se queue me jati h or jab stack poora khali ho jata h to wo statement queue se stack me jati h or excute ho jati h eese iski poori cycle h

//setTimeout method:ye jo h wo asynchrous h jab bhi humko kissi bhi chiz delay karana h to hum iska use karte h yaha pe jo 1000 h wo minimum tim eh ki iske itna to wait karna hi h uske aage ye tabtak wait karega jabtak call stack empty na ho jae
// setTimeout(function(){
//   console.log('hello world');},1000);//ye 1mili second k baad print hoga minimum time 1ms h

 
//API:-application programming interface isa use hum ek software component ko dusre software component ke saath communicate karana k liye use karte h

//feature of asynchrous code:
//1.clean and concise code
//2.better error handling
//3.easy debugging

// setTimeout(function(){
//   console.log('hello world1');},5000);
//   console.log('hello world2');
  //hello world2//ye iska output h 
  //hello world1


//Promise:agar hum parallely kissi chiz ko excute karna chahte h JS me to hum promise ka use karte h
//function k aandar do chiz pass karte h resolve and reject
// let merapromise=new Promise(function(resolve,reject){
//   console.log('i am in merapromise');
//   resolve(5023);//humne aapni tarf se mark kar diya h ki ye resolve h or isme hum koi bhi value ko return kar sakte h
// });
// console.log('hello world3');
// console.log(merapromise);//or eese hum promise jo h usko print kar k uska status jaan sakte h
// i am in merapromise//ye output h iska 
// hello world3
// Promise {<fulfilled>: 5023}
// [[Prototype]]: Promise
// [[PromiseState]]: "fulfilled"
// [[PromiseResult]]: 5023

//  let merapromise=new Promise(function(resolve,reject){
//   console.log('i am in merapromise');
//    reject(new Error('error found'));//humne aapni tarf se mark kar diya h ki ye resolve h or isme hum koi bhi value ko return kar sakte h
//  });
//  console.log('hello world3');
//  console.log(merapromise);
// i am in merapromise//ye iska outpus h 
//  hello world3
//  Promise {<rejected>: Error: error found
//     at file:///C:/Users/nishant/OneDrive/Desktop/Web%20Dev%20LoveBabbar/DOM/inde…}[[Prototype]]: Promise[[PromiseState]]: "rejected"[[PromiseResult]]: Error: error found
//     at file:///C:/Users/nishant/OneDrive/Desktop/Web%20Dev%20LoveBabbar/DOM/index.js:427:11
//     at new Promise (<anonymous>)
//     at file:///C:/Users/nishant/OneDrive/Desktop/Web%20Dev%20LoveBabbar/DOM/index.js:425:18

//promise me do method h ek .then or dusra .catch
//.catch ka use to hum tab karte h jab promise me error aata h  or .then ka use hum tab karte h jab hum kissi chiz ko tab start karana chahte h jab wo promise khatam ho jae to uske liye hum .then ka use karte h
// let merapromise=new Promise(function(resolve,reject){
//    setTimeout(function(){
//     console.log("hello world");
//    },6000);
//    //resolve(120);
//    reject(new Error('error found'));
//   });
  // merapromise.then(function()
  // {console.log('after complition of promise');});
  // after complition of promise//iska output h
  // hello world
  // merapromise.catch(function(error){
  //   console.log("error found");
  // });
  // error found//iska output h
  // hello world

//chaining promise
  //Async-await:special syntex used to work with promises jo async function h wo hamesa promise return karta h hum kissi bhi function ko async bana sakte h or kissi bhi function ko wait karwa sakte h
  // async function abc()
  // {
  //   return "nishant priyadarshi";
  // }
  // abc();//ye h iss function ka ans promise return kiya h isne
// Promise {<fulfilled>: 'nishant priyadarshi'}
// [[Prototype]]
// : 
// Promise
// [[PromiseState]]
// : 
// "fulfilled"
// [[PromiseResult]]
// : 
// "nishant priyadarshi"


// async function utility()
// {
//   let delhi=new Promise(function(resolve,reject){
//     setTimeout(function(){
//       resolve('Delhi');},5000);
//     });
//     let hydra=new Promise(function(resolve,reject){
//       setTimeout(function(){
//         resolve('Hydrabad');},6000);
//       });
//       let delM=delhi;
//       let hyM=hydra;
//       return [delM,hyM];
// }
// utility();
// Promise {<fulfilled>: Array(2)}//ye iska ans h
// [[Prototype]]: Promise
// [[PromiseState]]: "fulfilled"
// [[PromiseResult]]: Array(2)
// 0: Promise
// [[Prototype]]: Promise
// [[PromiseState]]: "fulfilled"
// [[PromiseResult]]: "Delhi"
// 1: Promise
// [[Prototype]]: Promise
// [[PromiseState]]: "fulfilled"
// [[PromiseResult]]: "Hydrabad"
// length: 2
// [[Prototype]]: Array(0)



//  async function utility()
//  {
//    let delhi=new Promise(function(resolve,reject){
//     setTimeout(function(){
//       resolve('Delhi');},2000);
//     });
//     let hydra=new Promise(function(resolve,reject){
//       setTimeout(function(){
//         resolve('Hydrabad');},3000);
//       });
//       let delM=await delhi;
//       let hyM=await hydra;
//       return [delM,hyM];
//  } 


//fetch API:ye ek promise return karti h
// async function utility(){
//   let content =await fetch('https://jsonplaceholder.typicode.com/posts/1');
//   let data=await content.json();
//   console.log(data);
// }
// Promise {<pending>}
// {userId: 1, id: 1, title: 'sunt aut facere repellat provident occaecati excepturi optio reprehenderit', body: 'quia et suscipit\nsuscipit recusandae consequuntur …strum rerum est autem sunt rem eveniet architecto'}


//post call using fetch API
// async function helper(){
//   let options= {
//     method: 'POST',
//     body: JSON.stringify({
//       title: 'foo',
//       body: 'bar',
//       userId: 1,
//     }),
//     headers: {
//       'Content-type': 'application/json; charset=UTF-8',
//     },
//   };
//   let content =await fetch('https://jsonplaceholder.typicode.com/posts',options);
//   let response=content.json();
//   return response;
// }
// async function utility(){
//   let ans=await helper();
//   console.log(ans);
// }
// utility();
// {title: 'foo', body: 'bar', userId: 1, id: 101}
// body: "bar"
// id: 101
// title: "foo"
// userId: 1
// [[Prototype]]: Object


//closures:jab bhi hum function k aandar function call karte h to closure create hota h jese ye example h ki jo name h wo to khatam ho jaega tab tak jab hum displayName ko call karenge to name print nahi hona chahiye par yaha print ho raha h to isse ye pata chalta h ki jab closure banta h jo jo function hota h uske aandar jis jis chiz ki need hoti h uska refrence uss function k saath aajata h jese yaha displayName wale ko name ki zaroorat h to name ka refrance uske saath aagaya hoga
// function makeFunc() {
//   const name = "Mozilla";
//   function displayName() {
//     console.log(name);
//   }
//   return displayName;
// }

// const myFunc = makeFunc();
// myFunc();
// Mozilla//output