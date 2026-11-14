const navLinks = document.querySelectorAll('nav a')
const audio = new Audio('aud/67_SQlv2Xv.mp3')

navLinks.forEach((link) => {
    link.addEventListener('click', (event) => {
        event.preventDefault()
        audio.currentTime = 0
        audio.play().catch(console.error)
    })
})
