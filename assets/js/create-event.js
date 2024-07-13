// Pop Up Create Event
const showPopUp = document.getElementById('button-popUp')
showPopUp.onclick = function(event) {
    const popUp = document.getElementById('event-pop-up')
    if (event.target == showPopUp) {
        popUp.setAttribute('style', 'visibility: visible')
    }
}

window.onclick = function (event) {
    const closePopUp = document.getElementById("event-pop-up")
    if (event.target == closePopUp) {
        closePopUp.style.visibility = "hidden"
    }
}