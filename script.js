'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const showModals = document.querySelectorAll('.show-modal');

console.log(showModals);

for (let i = 0; i < showModals.length; i++) {
    const openModal = function() {
        modal.classList.remove('hidden');
        overlay.classList.remove('hidden')
    }
    const closeModal = function() {
        modal.classList.add('hidden');
        overlay.classList.add('hidden')
    }
    showModals[i].addEventListener('click', openModal)
    btnCloseModal.addEventListener('click', closeModal);
    overlay.addEventListener('click', closeModal);

    //closing modal with "escape button"
    document.addEventListener('keydown', function(e) {
        // console.log(e)
        if (e.key === 'Escape' && !modal.classList.contains('hidden')) {

            closeModal();

        }
    })
}