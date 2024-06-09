
const mentBtn=document.getElementById("menu-btn");
const navLinks=document.getElementById("nav-links");
const menBtnIcon=mentBtn.querySelector("i");

mentBtn.addEventListener("click",(e)=>{
    navLinks.classList.toggle("open")

    const isOpen=navLinks.classList.contains("open");
    menBtnIcon.setAttribute("class",isOpen?"ri-close-line":"ri-menu-line")
})
navLinks.addEventListener("click",(e)=>{
    navLinks.classList.remove("open");
    menBtnIcon.setAttribute("class","ri-menu-line")
})

const scrollRevealOption={
    distance:"50px",
    origin:"bottom",
    duration:1000,
}
//header container
ScrollReveal().reveal(".header_container .section_subheader",{
    ...scrollRevealOption
})

ScrollReveal().reveal(".header_container h1",{
    ...scrollRevealOption,
    delay:500,
})

ScrollReveal().reveal(".header_container .btn",{
    ...scrollRevealOption,
    delay:1000
})
ScrollReveal().reveal(".room_card",{
    ...scrollRevealOption,
    interval:500
})

ScrollReveal().reveal(".feature_card",{
    ...scrollRevealOption,
    interval:500
})