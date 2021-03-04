export function initSlider(slider) {
    const wrapper = slider.querySelector(".slider__wrapper");
    const slides = slider.querySelectorAll(".slider__slide");

    let firstInit = true;

    let current = 0;

    const startPoints = calcStartPoints();

    const tabs = slider.querySelectorAll(".slider__tab");
    const tabsMode = Boolean(tabs.length);

    const controls = slider.querySelectorAll(".slider__button");
    initControls();

    updateCurrent(current);

    if (tabsMode) {
        tabs.forEach(initTab);
    }

    wrapper.addEventListener(`scroll`, () => {
        if (startPoints.includes(wrapper.scrollLeft)) {
            const newIndex = startPoints.indexOf(wrapper.scrollLeft);
            if (newIndex !== current) {
                updateCurrent(newIndex);
            }
        }
    });

    function goToSlide(index) {
        wrapper.scrollLeft = startPoints[index];
        updateCurrent(index);
    }

    function updateCurrent(index) {
        if (tabsMode && !firstInit) {
            tabs[current].removeAttribute("aria-selected");
            tabs[current].classList.remove("slider__tab--active");
            tabs[current].blur();
        }

        current = index;
        if (tabsMode) {
            tabs[current].classList.add("slider__tab--active");
            tabs[current].setAttribute("aria-selected", "true");
            !firstInit ? tabs[current].focus() : (firstInit = false);
        }
    }

    function initTab(tab, index) {
        tab.addEventListener("click", (evt) => {
            evt.preventDefault();
            goToSlide(index);
        });
    }
    function prevSlide() {
        current === 0
            ? goToSlide(startPoints.length - 1)
            : goToSlide(current - 1);
    }

    function nextSlide() {
        current === startPoints.length - 1
            ? goToSlide(0)
            : goToSlide(current + 1);
    }

    function calcStartPoints() {
        let startPoints = [];
        const wrapperStartPoint = wrapper.getBoundingClientRect().x;
        const endPoint = wrapper.scrollWidth - wrapper.offsetWidth;

        slides.forEach((slide) => {
            const currentSlideStart =
                slide.getBoundingClientRect().x - wrapperStartPoint;

            if (currentSlideStart < endPoint) {
                startPoints.push(currentSlideStart);
            }
        });

        startPoints.push(endPoint);
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
                    }
                });
            });
        }
    }
}
