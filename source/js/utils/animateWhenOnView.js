// get the element to animate
export function animateWhenOnView(element) {
    element.style.visibility = "hidden"
    const animation = element.dataset.animation;
    const elementHeight = element.clientHeight;


    document.addEventListener("scroll", animate);

    function animate() {
        // is element in view?
        if (inView()) {
            // element is in view, add class to element
            element.style.visibility = "visible"
            element.classList.add(animation);
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
            element.getBoundingClientRect().top + scrollY + ( elementHeight / 2);

        // is scroll position greater than element position? (is element in view?)
        if (scrollPosition > elementPosition) {
            return true;
        }

        return false;
    }
}
