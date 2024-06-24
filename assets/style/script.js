// Login
function processData(event) {
    event.preventDefault()
    const username = event.target.username.value
    const email = event.target.email.value
    const password = event.target.password.value
    if(username === 'syarif' && email === 'syarif@gmail.com' && password === '1234'){
        alert('Login Success!')
    }else if(username === '' && email === '' && password === ''){
        alert('Masukkan akun Anda untuk Login')
    }else{
        alert('Data yang Anda masukkan salah!')
    }
}

// Navbar
const menuBtn = document.getElementById('menu')
const nav = document.getElementById('nav')
const navCenter = nav.getElementsByClassName('navbar-opt').item(0)
const navRight = nav.getElementsByClassName('navbar-button').item(0)

menuBtn.onclick = () => {
    if (navCenter.getAttribute('style')) {
        navCenter.removeAttribute('style')
    } else {
        navCenter.setAttribute('style', 'display:none')
    }
    if (navRight.getAttribute('style')) {
        navRight.removeAttribute('style')
    } else {
        navRight.setAttribute('style', 'display:none')
    }
}