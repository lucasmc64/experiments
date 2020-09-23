const screens = window.document.querySelectorAll('.insta-screen')

let cont = 0;

setInterval(() => {
    screens[cont].classList.remove('active')

    cont = (cont + 1) % 5

    screens[cont].classList.add('active')
}, 7000)
