const darkmode =document.querySelector(".darkmode-toggle");
const bod =document.querySelector("body");
darkmode.addEventListener("click",()=>{
    bod.classList.toggle("darksum");
});


const menac=document.querySelector(".menu-wrap ul").querySelectorAll("a");

menac.forEach(act=>{
    act.addEventListener("click",()=>{
        menac.forEach(nav=>nav.classList.remove("active"));
        act.classList.add("active");
    });
   

});


