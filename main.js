//Change navbar style on scroll
window.addEventListener('scroll',()=>{
    document.querySelector('nav').classList.toggle('window-scroll',window.scrollY>0)
})
//Show or Hide FAQ answer
let faqs=document.querySelectorAll(".faq");
faqs.forEach(faq=>{
    faq.addEventListener("click",()=>{
        faq.classList.toggle("open");
        //change icon
       let icon=faq.querySelector(".faq__icon i");
       if(icon.className=="plus-icon") {
           icon.className="minus-icon";
       }else {
           icon.className="plus-icon";
       }
    })
});
//Show or hide the navmenu on click
const menu=document.querySelector(".nav__menu");
const menuBtn=document.querySelector("#open-menu-button");
const closeBtn=document.querySelector("#close-menu-button");
menuBtn.addEventListener("click", ()=>{
    menu.style.display="flex";
    closeBtn.style.display="inline-block";
    menuBtn.style.display="none";
});
//Close nav menu
const closeNav= ()=>{
    menu.style.display="none";
    closeBtn.style.display="none";
    menuBtn.style.display="inline-block";
};
closeBtn.addEventListener("click", closeNav)