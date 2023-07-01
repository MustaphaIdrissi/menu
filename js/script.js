const menuicon =document.querySelector(".mobile-menu-toggle");
const navbar=document.querySelector(".menu-wrap");
menuicon.addEventListener("click",()=>{
    navbar.classList.toggle("show-hide");
});





  
const darkmode =document.querySelector(".darkmode-toggle");
const bod =document.querySelector("body");
darkmode.addEventListener("click",()=>{
    bod.classList.toggle("darksum");
});


