const backdrop = document.querySelector(".backdrop");
const mainNavFixed = document.querySelector(".main-nav__fixed");
const sidedrawer = document.querySelector(".sidedrawer");
const toggleButton = document.querySelectorAll(".toggle-button__container");
let visible = false;

window.addEventListener("scroll", function() {
    const currentScrollPos = window.pageYOffset;
    let visible = currentScrollPos > 475;

    if (visible) {
        mainNavFixed.classList.add("main-nav__fixed__show")
    } else {
        mainNavFixed.classList.remove("main-nav__fixed__show")
    }
});

toggleButton.forEach(function(button) {
    button.addEventListener("click", function() {
        backdrop.classList.add("open");
        sidedrawer.classList.add("open");
    });
});

backdrop.addEventListener("click", function() {
    backdrop.classList.remove("open");
    sidedrawer.classList.remove("open");
});