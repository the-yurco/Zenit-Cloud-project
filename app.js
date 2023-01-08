window.addEventListener('scroll', () => {
    let header = document.querySelector('.headeris');
    let scroll = window.scrollY;

    console.log(scroll);

    if(scroll >= 50){
        header.classList.add('headeris2');
    }
    else{
        header.classList.remove('headeris2');
    }
});


const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnsOpenModal = document.querySelectorAll('.show-modal');

const openModal = function () {
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
    body.style.overflowY = "hidden"; 
}

// we created function simplified our code
const closeModal = function () {
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
}

// if we select multiple ele. and we want to log them we need loop
for (let i = 0; i < btnsOpenModal.length; i++){
    btnsOpenModal[i].addEventListener('click', openModal);

        // we removed a class which contains a property display:none so the article show up basically (we can also add classes and many more)
        //! modal.classList.remove('hidden');

        // we removed a class which contains a property backdrop-filter: blur(3px); so the article show up basically and we had blured background
        //! overlay.classList.remove('hidden');
};

// here we change it for close btn
btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') {
        if (!modal.classList.contains('hidden')) {
            closeModal();
        };
    };
});
