export function initTabList(tablist) {
    const tabs = tablist.querySelectorAll(".tablist__tab");

    let current = 0;

    tabs.forEach((tab, index) => {
        tab.addEventListener("click", (evt) => {
            evt.preventDefault();

            const prevElement = document.querySelector(tabs[current].getAttribute("href"));
            prevElement.hidden = true;

            const nextElement = document.querySelector(tab.getAttribute("href"));
            nextElement.hidden = false;

            current = index;
        });
    });
}
