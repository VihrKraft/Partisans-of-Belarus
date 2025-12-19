document.addEventListener('DOMContentLoaded', function () {
    let button = document.querySelector('.but-up');

    let lastScroll=0;
    window.addEventListener('scroll', function () {
        if (lastScroll>window.scrollY) {
            button.classList.add('active');
        } else 
            button.classList.remove('active');
        lastScroll=window.scrollY;
    })
})