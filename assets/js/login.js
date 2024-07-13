// Login
function processData(event) {
    event.preventDefault()
    const username = event.target.username.value
    const email = event.target.email.value
    const password = event.target.password.value
    if(username === 'syarif' && email === 'syarif@gmail.com' && password === '1234'){
        window.location = 'index.html'
    }else if(username === '' && email === '' && password === ''){
        alert('Enter your account to Login')
    }else{
        const alertElement = document.getElementById('alert')
        alertElement.innerHTML = ''
        alertElement.setAttribute('style', 'padding: 10px; border-radius:10px; color: red; background-color: salmon;')
        
        const text = document.createElement('span')
        
        text.textContent = 'Wrong Email or Password'
        alertElement.appendChild(text)
    }
}