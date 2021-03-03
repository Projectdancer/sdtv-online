export function initTabList(tablist) {
    const tabs = tablist.querySelectorAll(".tablist__tab");

    let current = 0;

    tabs.forEach((tab, index) => {
        tab.addEventListener("click", (evt) => {
            evt.preventDefault();

            const prevElement = document.querySelector(tabs[current].getAttribute("href"));
            tabs[current].removeAttribute("aria-selected");
            tabs[current].classList.remove("tablist__tab--active");
            prevElement.hidden = true;

            const nextElement = document.querySelector(tab.getAttribute("href"));
            nextElement.hidden = false;
            tab.classList.add("tablist__tab--active");
            tab.setAttribute("aria-selected", "true");

            current = index;
        });
    });
}
