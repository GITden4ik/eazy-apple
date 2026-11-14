const navLinks = document.querySelectorAll('.main-nav a')
const sounds = [
    'aud/67_SQlv2Xv.mp3',
    'aud/999-social-credit-siren.mp3',
    'aud/fahhh.mp3',
    'aud/vine-boom-meme_cCCpxZG.mp3'
]
const audio = new Audio()
audio.preload = 'auto'
audio.volume = 1
let lastSoundIndex = -1

navLinks.forEach((link) => {
    link.addEventListener('click', (event) => {
        event.preventDefault()
        audio.pause()
        // Выбираем случайный звук, исключая предыдущий.
        const availableIndexes = sounds
            .map((sound, index) => index)
            .filter((index) => index !== lastSoundIndex)
        const randomIndex = availableIndexes[
            Math.floor(Math.random() * availableIndexes.length)
        ]
        lastSoundIndex = randomIndex
        audio.src = sounds[randomIndex]
        audio.currentTime = 0
        audio.play().catch((error) => {
            console.error('Не удалось воспроизвести звук:', audio.src, error)
        })
    })
})
