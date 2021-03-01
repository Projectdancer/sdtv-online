

const menuButton = document.querySelector(".page-header__toggler");
const menuList = document.querySelector(".main-nav");

menuButton.addEventListener("click", () => {
    const expanded = menuButton.getAttribute("aria-expanded") === "true";
    menuButton.setAttribute("aria-expanded", !expanded);
    menuButton.classList.toggle("page-header__toggler--opened");
    menuList.classList.toggle("main-nav--hide");
    document.body.classList.toggle("scroll-lock");
});
