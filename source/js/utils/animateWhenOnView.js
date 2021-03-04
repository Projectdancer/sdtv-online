// get the element to animate
export function animateWhenOnView(element) {
    const animation = element.dataset.animation;
    const elementHeight = element.clientHeight;

    let endVal;

    switch (animation) {
        case "increase-number":
            endVal = element.innerText;
            break;

        default:
            element.style.visibility = "visible";
            element.classList.add(animation);
            break;
    }

    document.addEventListener("scroll", animate);

    function animate() {
        // is element in view?
        if (inView(animation)) {
            switch (animation) {
                case "increase-number":
                    animateValue(element, 0, endVal, endVal / 90 * 4000 );
                    document.removeEventListener("scroll", animate);
                    break;

                default:
                    element.style.visibility = "visible";
                    element.classList.add(animation);
                    break;
            }
        }
    }

    function inView() {
        // get window height
        const windowHeight = window.innerHeight;
        // get number of pixels that the document is scrolled
        const scrollY = window.scrollY || window.pageYOffset;

        // get current scroll position (distance from the top of the page to the bottom of the current viewport)
        const scrollPosition = scrollY + windowHeight;
        // get element position (distance from the top of the page to the bottom of the element)
        const elementPosition =
            element.getBoundingClientRect().top + scrollY + elementHeight / 2;

        // is scroll position greater than element position? (is element in view?)
        if (scrollPosition > elementPosition) {
            return true;
        }

        return false;
    }
}

function animateValue(obj, start, end, duration = 5000) {
    let startTimestamp = null;
    const step = (timestamp) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const progress = Math.min((timestamp - startTimestamp) / duration, 1);
        obj.innerHTML = Math.floor(progress * (end - start) + start);
        if (progress < 1) {
            window.requestAnimationFrame(step);
        }
    };
    window.requestAnimationFrame(step);
}
