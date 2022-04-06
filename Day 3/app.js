
// JS action
const btnOpen = document.querySelector('.btn__action');
const modal = document.querySelector('.modal');
const modalBox = document.querySelector('.modal__box');
const modalIcon = document.querySelector('.modal__header--icon');
const modalClose = document.querySelector('.modal__footer--btn');

// Function open modal
function OpenModal() {
    modal.classList.add("active")
}

btnOpen.addEventListener('click', OpenModal);


// Function close modal
function CloseModal() {
    modal.classList.remove("active");
}

modalIcon.addEventListener('click', CloseModal);
modalClose.addEventListener('click', CloseModal);
modal.addEventListener('click', CloseModal);

modalBox.addEventListener('click', function (e) {
    // ngăn chặn hành động nổi bọt
    e.stopPropagation();
});
