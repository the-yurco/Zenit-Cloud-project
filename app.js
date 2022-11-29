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