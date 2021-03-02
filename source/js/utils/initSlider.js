export function initSlider(slider) {
    const wrapper = slider.querySelector(".slider__wrapper");
    const slides = slider.querySelectorAll(".slider__slide");

    const tabs = slider.querySelectorAll(".slider__tab");
    const tabsMode = Boolean(tabs.length);

    const controls = slider.querySelectorAll(".slider__button");
    initControls();

    let current = 0;

    const startPoints = calcStartPoints();

    const slideWidth = slides[current].offsetWidth;

    if (tabsMode) {
        tabs.forEach(initTab);
    }

    wrapper.addEventListener(`scroll`, () => {
        if (startPoints.includes(wrapper.scrollLeft)) {
            const newIndex = startPoints.indexOf(wrapper.scrollLeft);
            if (newIndex !== current) {
                if (tabsMode) {
                    updateTabs(newIndex);
                } else {
                    current = newIndex;
                }
            }
        }
    });

    function goToSlide(index) {
        wrapper.scrollLeft = slideWidth * index;
    }

    function updateTabs(index) {
        tabs[current].removeAttribute("aria-selected");
        tabs[current].classList.remove("slider__tab--active");
        current = index;

        tabs[current].setAttribute("aria-selected", "true");
        tabs[current].classList.add("slider__tab--active");
    }

    function initTab(tab, index) {
        tab.addEventListener("click", (evt) => {
            evt.preventDefault();
            goToSlide(index);
        });
        tab.addEventListener("focus", () => {
            goToSlide(index);
            // control with arrows
            document.addEventListener("keydown", (evt) => {
                evt = evt || window.event;
                switch (evt.code) {
                    case "ArrowLeft":
                        prevSlide();
                        break;
                    case "ArrowRight":
                        nextSlide();
                        break;

                    default:
                        break;
                }
            });
        });
    }
    function prevSlide() {
        current === 0 ? goToSlide(slides.length - 1) : goToSlide(current - 1);
    }

    function nextSlide() {
        current === calcLastWrapElement()
            ? goToSlide(0)
            : goToSlide(current + 1);
    }
    function calcLastWrapElement() {
        const wrapperWidth = wrapper.offsetWidth;
        console.log(
            `Math.ceil(${wrapperWidth} / ${slideWidth}) ${Math.ceil(
                wrapperWidth / slideWidth
            )}`
        );

        return slides.length  - Math.ceil(wrapperWidth / slideWidth);
    }

    function calcStartPoints() {
        goToSlide(0);
        let startPoints = [];
        const wrapperStartPoint = wrapper.getBoundingClientRect().x;
        slides.forEach((slide) => {
            startPoints.push(
                slide.getBoundingClientRect().x - wrapperStartPoint
            );
        });
        return startPoints;
    }

    function initControls() {
        if (Boolean(controls.length)) {
            controls.forEach((control) => {
                control.addEventListener("click", (evt) => {
                    evt.preventDefault();
                    switch (control.dataset.direction) {
                        case "prev":
                            prevSlide();
                            break;
                        case "next":
                            nextSlide();
                            break;

                        default:
                            break;
                    }
                });
            });
        }
    }
}
