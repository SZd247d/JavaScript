const time = document.getElementById('time'),
    greeting = document.getElementById('greeting'),
    name = document.getElementById('name'),
    focus = document.getElementById('focus');

function showTime() {
    let today = new Date(),
        hour = today.getHours(),
        min = today.getMinutes(),
        sec = today.getSeconds();

    const amPm = hour >= 12 ? 'PM' : 'AM';

    hour = hour % 12 || 12;

    time.innerHTML = `${hour} : ${addZero(min)} : ${addZero(sec)} ${amPm}`;

    setTimeout(showTime, 1000);
}

function addZero(nember) {
    return (parseInt(nember, 10) < 10 ? '0' : '') + nember;
}

function setBgGreet() {
    let today = new Date(2020, 06, 10, 18, 33, 30),
        // let today = new Date(),
        hour = today.getHours();
    if (hour < 12) {
        document.body.style.backgroundImage = "url('../img/morning.jpg')";
        document.body.style.backgroundSize = 'cover';
        document.body.style.backgroundPosition = 'center'
        greeting.innerText = 'Good Morning';
    } else if (hour < 18) {
        document.body.style.backgroundImage = "url('../img/afternoon.jpg')";
        document.body.style.backgroundSize = 'cover';
        document.body.style.backgroundPosition = 'center'
        greeting.innerText = 'Good Afternoon';
    } else {
        document.body.style.backgroundImage = "url('../img/night.jpg')";
        document.body.style.backgroundSize = 'cover';
        document.body.style.backgroundPosition = 'center'
        greeting.innerText = 'Good Night';
        document.body.style.color = 'white';
    }
}


function getName() {
    if (localStorage.getItem('name') === null) {
        name.innerText = '[Enter Name]';
    } else {
        name.innerText = localStorage.getItem('name');
    }
}

function setName(e) {
    if (e.type === 'keypress') {
        if (e.keyCode == 13) {
            localStorage.setItem('name', e.target.innerText);
            name.blur();
        }
    } else {
        localStorage.setItem('name', e.target.innerText);
    }
}

function getFocus() {
    if (localStorage.getItem('focus') === null) {
        focus.innerText = '[Enter Focus]';
    } else {
        focus.innerText = localStorage.getItem('focus');
    }
}

function setFocus(e) {
    if (e.type === 'keypress') {
        if (e.keyCode == 13) {
            localStorage.setItem('focus', e.target.innerText);
            focus.blur();
        }
    } else {
        localStorage.setItem('focus', e.target.innerText);
    }
}

name.addEventListener('keypress', setName);
name.addEventListener('blur', setName);
focus.addEventListener('keypress', setFocus);
focus.addEventListener('blur', setFocus);


//RUN
showTime();
setBgGreet();
getName();
getFocus();