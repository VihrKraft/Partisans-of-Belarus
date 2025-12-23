document.addEventListener('DOMContentLoaded', function () {
    let header = document.querySelector('.header');
    let headerHeight = header.clientHeight;


    window.onscroll=changeHeader;
    let lastScroll = 0;
    function changeHeader () {
        let top = document.documentElement.scrollTop;
        if (lastScroll>top) {
            header.style.top = '0';
        } else {
                header.style.top = `-${headerHeight}px`;
        }
        lastScroll = top;
    }
})
