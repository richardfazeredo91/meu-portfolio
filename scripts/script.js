const navigationElements = document.getElementsByClassName('nav-link');

for (item of navigationElements) {
    item.addEventListener('click', ({ target }) => {
        const paginaAnterior = document.getElementsByClassName('active')[0];
        paginaAnterior.classList.remove('active');
        paginaAnterior.parentNode.classList.remove('border');
        target.classList.add('active')
        target.parentNode.classList.add('border');
    });
}
