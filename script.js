const header = document.querySelector("header");
window.addEventListener("scroll", () => {
    header.classList.toggle("sticky", window.scrollY > 50);
});

const liLink = document.querySelectorAll("header ul li a");
const section = document.querySelectorAll("section");

function activeMenu() {
    let secLength = section.length;
    while (--secLength && window.scrollY + 500 < section[secLength].offsetTop) {}
    liLink.forEach((sec) => sec.classList.remove("active"));
    liLink[secLength].classList.add("active");
}

document.addEventListener("DOMContentLoaded", () => {
    activeMenu();
    window.addEventListener("scroll", activeMenu);
});

const menuIcon = document.querySelector("#menu-icon"); // Ensure it's an ID in your HTML
const navlist = document.querySelector(".navlist");
menuIcon.onclick = () => {
    navlist.classList.toggle("active");
};