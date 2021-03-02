export function initSomething(selector, callback) {
    const array = document.querySelectorAll(selector);
    if (array.length) {
        array.forEach((item) => {
            callback(item);
        });
    }
}
