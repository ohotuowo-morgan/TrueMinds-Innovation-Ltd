const hamburger = document.querySelector("#hamburger");
const navi = document.querySelector("#navigation");
const theme = document.getElementById("theme");
const topBar = document.querySelector(".top");
const frmbtn = document.querySelector(".pick");


// Navigation Selectors
const home = document.getElementById("home");
const about = document.getElementById("about");
const services = document.getElementById("services");
const projects = document.getElementById("projects");
const training = document.getElementById("training");
const contact = document.getElementById("contact");

// Scrollable section
const hero = document.querySelector(".hero");
const first = document.querySelector(".second-container");
const second = document.querySelector(".third-container");
const third = document.querySelector(".fcard-container");
const fourth = document.querySelector(".fifth");
const fifth = document.querySelector(".footer");

const scrollToSection = (section) => {
    section.scrollIntoView({behavior: "smooth"});
}

home.addEventListener("click", (e) => {
    e.preventDefault(); 
    scrollToSection(hero);
});

about.addEventListener("click", (e) => {
    e.preventDefault(); 
    scrollToSection(first);
});

services.addEventListener("click", (e) => {
    e.preventDefault();
    scrollToSection(second);
});

projects.addEventListener("click", (e) => {
    e.preventDefault();
    scrollToSection(third);
});

training.addEventListener("click", (e) => {
    e.preventDefault();
    scrollToSection(fourth);
});

contact.addEventListener("click", (e) => {
    e.preventDefault();
    scrollToSection(fifth);
});

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navi.classList.toggle("active");

    if (navi.classList.contains("active")) {
        topBar.style.paddingBottom = "1.3rem"
    } else {
        topBar.style.paddingBottom = "";
    }
});

theme.addEventListener("click", () => {
    document.querySelector("body").classList.toggle("light-mode");
    document.querySelector("header").classList.toggle("light-mode");
    // document.querySelector("a").classList.toggle("light-mode"); 
    document.querySelector("footer").classList.toggle("light-mode");
    // document.querySelector("h2").classList.toggle("light-mode");
    document.querySelector("footer").classList.toggle("light-footer");
    // document.querySelector("form").classList.toggle("light-mode");

    if (document.body.classList.contains("light-mode")) {
        document.getElementById("themeimg").setAttribute("src", "images/moon.svg");
        document.getElementById("spanimg").setAttribute("src", "images/darkbag.svg");
    } else {
        document.getElementById("themeimg").setAttribute("src", "images/sun.svg");
        document.getElementById("spanimg").setAttribute("src", "images/whitebag.svg");
    }

});

frmbtn.addEventListener("click", ()=>{
    document.querySelector(".picktxt").classList.toggle("display");
    document.querySelector(".sixth").classList.toggle("show");
});



