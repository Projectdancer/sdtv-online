import { showModal } from "./initModalToggler.js";

export function initClassForm(classItem) {
    classItem.addEventListener("click", () => {
        const classInModal = document.querySelector('.payment__side .classes-item');
        classInModal.innerHTML = classItem.innerHTML;
    });
}
