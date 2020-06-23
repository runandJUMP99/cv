const mainNavFixed = document.querySelector(".main-nav__fixed")
let visible = false

window.addEventListener("scroll", function() {
    const currentScrollPos = window.pageYOffset;
    let visible = currentScrollPos > 475;
    console.log(currentScrollPos);
    if (visible) {
        mainNavFixed.classList.add("main-nav__fixed__show")
    } else {
        mainNavFixed.classList.remove("main-nav__fixed__show")
    }
});