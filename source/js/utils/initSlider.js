export function initSlider(slider) {
    const wrapper = slider.querySelector(".slider__wrapper");
    const slides = slider.querySelectorAll(".slider__slide");
    const tabs = slider.querySelectorAll(".slider__tab");

    let current = 0;

    const slideWidth = slides[current].offsetWidth;

    tabs.forEach(initTab);

    goToSlide(0);

    wrapper.addEventListener(`scroll`, () => {
        if (wrapper.scrollLeft % slideWidth === 0) {
            updateTabs(wrapper.scrollLeft / slideWidth);
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

        function prevSlide() {
            current === 0
                ? goToSlide(slides.length - 1)
                : goToSlide(current - 1);
        }

        function nextSlide() {
            current === slides.length - 1
                ? goToSlide(0)
                : goToSlide(current + 1);
        }
    }
}
