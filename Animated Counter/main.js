const counters = document.querySelectorAll('.counter');
const speed = 200;

counters.forEach(counter => {
    const updateCount = () => {
        const target = +counter.getAttribute('data-target');
        let count = +counter.innerText;

        const inc = target / speed;

        counter.innerText = count + inc;

        if (count <= target) {
            setTimeout(updateCount, 10);
        } else {
            counter.innerText = target;
        }
    }
    updateCount();
});