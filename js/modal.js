
// MODAL
const modal = document.querySelector('.modal');
const modalTrigger = document.querySelector('#btn-get');
const modalCloseButton = document.querySelector('.modal_close');

const openModal = () => {
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden';
};

const closeModal = () => {
    modal.style.display = 'none';
    document.body.style.overflow = '';
};

modalTrigger.onclick = () => {
    openModal();
};

modalCloseButton.onclick = () => {
    closeModal();
};

modal.onclick = (event) => {
    if (event.target === modal) {
        closeModal();
    }
};

function showModal() {
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden';
    window.removeEventListener('scroll', scrollHandler);
}

function scrollHandler() {
    if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
        showModal();
    }
}

window.addEventListener('scroll', scrollHandler);

setTimeout(showModal, 10000);