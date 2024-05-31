const scrollToTop = document.querySelector(".scrollToTop");

window.addEventListener("scroll", () => {
    if (window.pageYOffset > 100) {
        scrollToTop.classList.add("active");
    } else {
        scrollToTop.classList.remove("active");
    }
});