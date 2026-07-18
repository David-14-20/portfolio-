/*=========================================================
    GLOBAL ELEMENTS
=========================================================*/

const bootScreen = document.getElementById("boot-screen");

const header = document.getElementById("header");

const menuButton = document.getElementById("menu-btn");

const navLinks = document.querySelector(".nav-links");

const themeButton = document.getElementById("theme-toggle");

const typingText = document.querySelector(".typing-text");

const skillBars = document.querySelectorAll(".skill-fill");

const scrollIndicator = document.querySelector(".scroll-indicator");
/*=========================================================
    BOOT SCREEN
=========================================================*/

window.addEventListener("load", () => {

    setTimeout(() => {

        bootScreen.style.opacity = "0";

        setTimeout(() => {

            bootScreen.style.display = "none";

        }, 700);

    }, 3000);

});
/*=========================================================
    STICKY HEADER
=========================================================*/

window.addEventListener("scroll", () => {

    if(window.scrollY > 80){

        header.classList.add("sticky");

    }

    else{

        header.classList.remove("sticky");

    }

});
/*=========================================================
    MOBILE MENU
=========================================================*/

menuButton.addEventListener("click", () => {

    navLinks.classList.toggle("active");

});
/*=========================================================
    TYPING EFFECT
=========================================================*/

const titles = [

    "Cyber Security Student",

    "Web Developer",

    "Knowledge Sponge",

    "Future Security Engineer"

];

let titleIndex = 0;

let characterIndex = 0;

let deleting = false;

function typingAnimation(){

    const current = titles[titleIndex];

    if(!deleting){

        typingText.textContent = current.substring(0, characterIndex++);

        if(characterIndex > current.length){

            deleting = true;

            setTimeout(typingAnimation, 1500);

            return;

        }

    }

    else{

        typingText.textContent = current.substring(0, characterIndex--);

        if(characterIndex === 0){

            deleting = false;

            titleIndex = (titleIndex + 1) % titles.length;

        }

    }

    setTimeout(typingAnimation, deleting ? 50 : 100);

}

typingAnimation();
/*=========================================================
    SKILL BARS
=========================================================*/

const skillObserver = new IntersectionObserver((entries)=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            const fill = entry.target;

            fill.style.width = fill.dataset.width + "%";

        }

    });

});

skillBars.forEach(bar=>{

    skillObserver.observe(bar);

});
/*=========================================================
    FADE UP
=========================================================*/

const fadeElements = document.querySelectorAll(".fade-up");

const fadeObserver = new IntersectionObserver((entries)=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            entry.target.classList.add("show");

        }

    });

});

fadeElements.forEach(item=>{

    fadeObserver.observe(item);

});
/*=========================================================
    SCROLL INDICATOR
=========================================================*/

window.addEventListener("scroll", ()=>{

    if(window.scrollY > 200){

        scrollIndicator.style.opacity = "0";

    }

    else{

        scrollIndicator.style.opacity = "1";

    }

});
/*=========================================================
    DARK/LIGHT MODE
=========================================================*/

themeButton.addEventListener("click", ()=>{

    document.body.classList.toggle("light-mode");

});
/*=========================================================
    INITIALIZE
=========================================================*/

window.addEventListener("DOMContentLoaded", ()=>{

    if(typeof lucide !== "undefined"){

        lucide.createIcons();

    }

});
