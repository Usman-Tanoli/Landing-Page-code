const menu_btn=document.getElementById("mbtn")
const nav_links=document.getElementById("nav_link")
const menu_btnicon=document.querySelector("i")
menu_btn.addEventListener("click",(e)=>{
    nav_links.classList.toggle("open");
    const isopen=nav_links.classList.contains("open");
    menu_btnicon.setAttribute("class",isopen ? "ri-close-line":"ri-menu-line")
});
nav_links.addEventListener("click",e=>{
    nav_links.classList.remove("open");
    menu_btnicon.setAttribute("class","ri-menu-line");
});
const revealOption={
    distance:"50px",
    origin:"bottom",
    duration:1000,
};
ScrollReveal().reveal(".header_img img",{
    ...revealOption,
    origin:"right",
});
ScrollReveal().reveal(".header_content h1",{
    ...revealOption,
    delay:500,
});
ScrollReveal().reveal(".header_content p",{
    ...revealOption,
    delay:1000,
});
ScrollReveal().reveal(".header_content form",{
    ...revealOption,
    delay:1500,
});
ScrollReveal().reveal(".header_content .bar",{
    ...revealOption,
    delay:2000,
});
ScrollReveal().reveal(".header_img img_card ",{
    ...revealOption,
    duration:1000,
    interval:500,
    delay:2500,
});