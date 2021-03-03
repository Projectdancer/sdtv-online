const menuButton = document.querySelector(".page-header__toggler");
const menuList = document.querySelector(".main-nav");

const links = menuList.querySelectorAll(".main-nav__link");

export function navInit() {
    menuButton.addEventListener("click", changeNavState);

    links.forEach((link) => {
        link.addEventListener("click", () => {
            changeNavState();
            const target = link.getAttribute("href");
            if (target[0] === "#") {
                const element = document.querySelector(target);
                element.scrollIntoView();
            }
        });
    });
}

function changeNavState() {
    const expanded = menuButton.getAttribute("aria-expanded") === "true";
    menuButton.setAttribute("aria-expanded", !expanded);
    menuButton.classList.toggle("page-header__toggler--opened");
    menuList.classList.toggle("main-nav--hide");
    document.body.classList.toggle("scroll-lock");
}
