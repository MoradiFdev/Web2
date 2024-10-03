
let headerIcon=document.querySelector(".header_icon");
let headerIconi=document.querySelector(".header_icon i");
let sidemenu=document.querySelector(".side-menu");
let menutimesbtn=document.querySelector(".menu-timesbtn");
let btn1=document.querySelector(".btn1");
let btn2=document.querySelector(".btn2");
let btn3=document.querySelector(".btn3");
let btntext=document.querySelector(".btntext");
let about=document.querySelector(".about");
let contact=document.querySelector(".contact");
let instruction=document.querySelector(".instruction");

headerIcon.addEventListener('click', function(){
    if (headerIconi.classList.contains("fa-bars")){
        sidemenu.style.left="0";
        headerIconi.classList="fa fa-times";
    }
    else{
        sidemenu.style.left="-200px"; 
        headerIconi.classList="fa fa-bars";
    }
})

menutimesbtn.addEventListener('click', function(){
        sidemenu.style.left="-200px"; 
        headerIconi.classList="fa fa-bars";
})

btn1.addEventListener('click', function(){
    btntext.style.top="0";
    about.style.display="block";
    contact.style.display="none";
    instruction.style.display="none";
})

btn1.addEventListener('mouseleave', function(){
    btntext.style.top="-200px";
})

btn2.addEventListener('click', function(){
    btntext.style.top="0";
    about.style.display="none";
    contact.style.display="block";
    instruction.style.display="none";
})

btn2.addEventListener('mouseleave', function(){
    btntext.style.top="-200px";
})

btn3.addEventListener('click', function(){
    btntext.style.top="0";
    about.style.display="none";
    contact.style.display="none";
    instruction.style.display="block";
})

btn3.addEventListener('mouseleave', function(){
    btntext.style.top="-200px";
})

