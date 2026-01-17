const hamburger = document.querySelector("#hamburger");
const navi = document.querySelector("#navigation");
const theme = document.getElementById("theme");
const topBar = document.querySelector(".top");



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

    if (document.body.classList.contains("light-mode")) {
        document.getElementById("themeimg").setAttribute("src", "images/moon.svg");
        document.getElementById("spanimg").setAttribute("src", "images/darkbag.svg");
    } else {
        document.getElementById("themeimg").setAttribute("src", "images/sun.svg");
        document.getElementById("spanimg").setAttribute("src", "images/whitebag.svg");
    }

});



