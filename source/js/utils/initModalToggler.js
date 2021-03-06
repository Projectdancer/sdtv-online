import { removeHashFromUrl } from "./removeHashfromURL.js";

export function initModalToggler(modalToggler) {
    const modal = document.querySelector(modalToggler.getAttribute(`href`));
    if (!modal) {
        return;``
    }
    modal.classList.remove(`modal--no-js`);

    if (window.location.hash === `#${modal.id}`) {
        showModal(modal);
    }

    modalToggler.addEventListener(`click`, (evt) => {
        evt.preventDefault();
        showModal(modal);
    });
}

export function showModal(modal) {
    modal.hidden = false;
    document.body.classList.add(`overlay`);
    const firstInput = modal.querySelector(`input`);
    if (firstInput) {
        firstInput.focus();
    }

    const closeButton = modal.querySelector(`.modal__close`);
    closeButton.addEventListener(`click`, (event) => {
        hideModal(event);
    });

    document.addEventListener(`keydown`, (event) => {
        if (event.key === `Escape` || event.key === `Esc`) {
            if (modal.hidden === false) {
                hideModal(event);
            }
        }
    });

    function hideModal(evt) {
        evt.preventDefault();
        modal.hidden = true;
        document.body.classList.remove(`overlay`);
        removeHashFromUrl();
    }
}
