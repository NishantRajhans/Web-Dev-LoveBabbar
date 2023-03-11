let darkicon=document.querySelector(".darkicon");
let text=document.querySelector(".searchprofile");
let searchbutton=document.querySelector(".searchbutton");
let wrapper=document.querySelector(".wrapper");
let search=document.querySelector(".search");
let profileinfo=document.querySelector(".profileinfo");
let searchprofile=document.querySelector(".searchprofile");
let noresult=document.querySelector(".noresult");
let url="https://api.github.com/users/";
let datesegments=document.querySelector(".datesegments");
let image=document.querySelector(".image");
let Uname=document.querySelector(".Uname");
let joining=document.querySelector(".joining");
let bio=document.querySelector(".bio");
let numberrepo=document.querySelector(".numberrepo");
let numberfollower=document.querySelector(".numberfollower");
let numberfollowing=document.querySelector(".numberfollowing");
let user_location=document.querySelector(".user_location");
let page=document.querySelector(".page");
let  twitter=document.querySelector(".twitter");
let  company=document.querySelector(".company");
const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

//initial condition
let darkmode=true;
text.value="";
searchFunction(url+"NishantRajhans");
//event listener
darkicon.addEventListener("click",function(){
    if(darkmode==false)
       {
         wrapper.classList.add("wrapperdark");
        search.classList.add("searchdark");
        profileinfo.classList.add("profileinfodark");
        searchbutton.classList.add("searchbuttondark");
        searchprofile.classList.add("searchprofiledark");
        noresult.classList.add("noresultdark");
        darkmode=true;
       }
       else
       {
        wrapper.classList.remove("wrapperdark");
        search.classList.remove("searchdark");
        profileinfo.classList.remove("profileinfodark");
        searchbutton.classList.remove("searchbuttondark");
        searchprofile.classList.remove("searchprofiledark");
        noresult.classList.remove("noresultdark");
        darkmode=false;
       }
});

 searchbutton.addEventListener("click",function(){
     if(text.value!=""){
         searchFunction(url+text.value);
     }});

text.addEventListener("keydown",function(e){
        if(e.key=="Enter"){
            if(text.value!=''){
                searchFunction(url+text.value);
            }}});

text.addEventListener("input",function(){
    noresult.style.display="none";
});


function searchFunction(giturl){
    fetch(giturl)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      updateProfile(data);
    })
    .catch((error) => {
      throw error;
    });
}

function updateProfile(data) {
    if (data.message !== "Not Found") {
        noresult.style.display = "none";
        function checkNull(param1, param2) {
          if (param1 === "" || param1 === null) {
            param2.style.opacity = 0.5;
            param2.previousElementSibling.style.opacity = 0.5;
            return false;
          } else {
            return true;
          }
        }
    image.src = `${data.avatar_url}`;
    Uname.innerText = data.name === null ? data.login : data.name;
    // user.innerText = `@${data.login}`;
    // user.href = `${data.html_url}`;
    datesegments = data.created_at.split("T").shift().split("-");
    joining.innerText = `Joined ${datesegments[2]} ${months[datesegments[1] - 1]} ${datesegments[0]}`;
    bio.innerText = data.bio == null ? "This profile has no bio" : `${data.bio}`;
    numberrepo.innerText = `${data.public_repos}`;
    numberfollower.innerText = `${data.followers}`;
    numberfollowing.innerText = `${data.following}`;
    user_location.innerText = checkNull(data.location, user_location) ? data.location : "Not Available";
    page.innerText = checkNull(data.blog, page) ? data.blog : "Not Available";
    page.href = checkNull(data.blog, page) ? data.blog : "#";
    twitter.innerText = checkNull(data.twitter_username, twitter) ? data.twitter_username : "Not Available";
    twitter.href = checkNull(data.twitter_username, twitter) ? `https://twitter.com/${data.twitter_username}` : "#";
    company.innerText = checkNull(data.company, company) ? data.company : "Not Available";
    // searchbar.classList.toggle("active");
    // profilecontainer.classList.toggle("active");
  } else {
    noresult.classList.add("active");
  }
}




