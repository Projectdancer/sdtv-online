import { initSomething } from "./utils/initSomething.js";
import { initSlider } from "./utils/initSlider.js";
import { initTabList } from "./utils/initTabList.js";
import { navInit } from "./utils/navInit.js";
import { animateWhenOnView } from "./utils/animateWhenOnView.js";
import { initModalToggler } from "./utils/initModalToggler.js";
import AOS from 'aos';

AOS.init();

// document.addEventListener('aos:in', ({ detail }) => {
//     console.log('animated in', detail);
//   });

navInit();

initSomething(".slider", initSlider);
initSomething(".tablist", initTabList);
initSomething("[data-animation]", animateWhenOnView);
initSomething(".modal-link", initModalToggler);

document.addEventListener("scroll", moveClasses);

function moveClasses() {
    const pos_x = window.scrollY / 10;
    const row1 = document.querySelector("#classes-row-first");
    const row2 = document.querySelector("#classes-row-second");

    row1.style.left = `${pos_x - 700}px`;
    row2.style.left = `${-pos_x - 700}px`;
}
