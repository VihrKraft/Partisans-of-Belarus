document.addEventListener('DOMContentLoaded', function () {
    let partisans = document.querySelectorAll('.partisan');
    let ntg = document.createElement('div');
    ntg.classList.add('ntg')

    document.body.append(ntg);
    partisans.forEach(partisan => {
        partisan.addEventListener('click', function () {
            this.classList.toggle('active');
            this.querySelector('.unvisible-part-biography').classList.toggle('active');
            this.querySelector('.fullname').classList.toggle('active');
            document.querySelector('body').classList.toggle('active');
            if (this.classList.contains('active')) {
                ntg.style.width=`${partisan.clientWidth}px`;
                ntg.classList.add('partisan');
                ntg.style.display='block';
                partisan.insertAdjacentElement('beforebegin', ntg);
            }
            else {
                ntg.replaceWith(partisan);
            }
        })
    })
})

