'use strict';

// Elements
const btnShowModals = document.querySelectorAll('.show-modal');
const btnCloseModal = document.querySelector('.close-modal');
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');

// functions
function openModal() {
	modal.classList.remove('hidden');
	overlay.classList.remove('hidden');
}

function closeModal() {
	modal.classList.add('hidden');
	overlay.classList.add('hidden');
}

// Event Listeners
// this is a step ahead, the other one also works fine
// window.addEventListener('click', e => {
// 	e.target.classList.contains('overlay') ? closeModal() : false;
// });
overlay.addEventListener('click', closeModal);
btnCloseModal.addEventListener('click', closeModal);
btnShowModals.forEach((showModal, i) => {
	showModal.addEventListener('click', openModal);
});
document.addEventListener('keydown', e => {
	if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
		closeModal();
	}
});
