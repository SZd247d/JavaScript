const current = document.querySelector('#current'),
    imgs = document.querySelectorAll('.imgs div img ');
const opacity = 0.6;

imgs[0].style.opacity = opacity;

const imgClick = (e) => {
    imgs.forEach(img => img.style.opacity = 1);

    current.src = e.target.src;
    e.target.style.opacity = opacity;

    current.classList.add('fadeIn');
    setTimeout(() => current.classList.remove('fadeIn'), 1000);
}

imgs.forEach(img => {
    img.addEventListener('click', imgClick);
})