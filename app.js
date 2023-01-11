const noti = document.querySelector('.noti');

window.addEventListener('scroll', () => {
    let header = document.querySelector('.headeris');
    let scroll = window.scrollY;
    let login_btn = document.querySelector('.login_btn');
    let register_btn = document.querySelector('.register_btn');
    let rego = document.querySelector('.rego');

    console.log(scroll);

    if(scroll >= 50){
        header.classList.add('headeris2');
        login_btn.style.border = '1px solid #00BCD4';
        login_btn.style.color = '#00BCD4';
        register_btn.style.border = 'none';

    }
    else{
        header.classList.remove('headeris2');
        // login_btn.classList.remove('login_btn');
        login_btn.classList.add('login_btn');
        // login_btn.style.border = '1px solid white';
        // login_btn.style.color = 'white';
        register_btn.style.border = 'none';
    }
});


const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnsOpenModal = document.querySelector('.show-modal');

const modal1 = document.querySelector('.modal1');
const overlay1 = document.querySelector('.overlay1');

const loginModalbtn = document.querySelector('.open-modal');
const registerModalbtn = document.querySelector('.open-modal1');

// const noti = document.querySelector('.noti');

const openModalR = function () {
    modal.classList.add('hidden');
    overlay.classList.add('hidden');

    modal1.classList.remove('hidden');
    overlay1.classList.remove('hidden');
}

const openModal = function () {
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
    
    noti.classList.add('hidden');
}

// we created function simplified our code
const closeModal = function () {
    modal.classList.add('hidden');
    overlay.classList.add('hidden');

    noti.classList.remove('hidden');
}

const closeNoti = function () {
    noti.classList.remove('noti');
    noti.classList.add('hidden');
}

btnsOpenModal.addEventListener('click', openModal);


btnCloseModal.addEventListener('click', closeModal);
// overlay.addEventListener('click', closeModal);
loginModalbtn.addEventListener('click', closeModal);
registerModalbtn.addEventListener('click', openModalR);
// noti.addEventListener('click', closeNoti);



document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') {
        if (!modal.classList.contains('hidden')) {
            closeModal();
        };
    };
});



//----------------------------------------------------------

