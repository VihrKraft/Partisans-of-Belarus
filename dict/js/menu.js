document.addEventListener('DOMContentLoaded', function () {
    let block = document.querySelector('.header-block-mobile');
    let butOn = document.querySelector('.header-button-on');
    let butOff = block.querySelector('.header-button-off');

    butOn.addEventListener('click', function () {
        block.classList.add('active');
    })

    butOff.addEventListener('click', function () {
        block.classList.remove('active');
    })
})