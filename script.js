// Находим кнопку меню и навигацию в HTML.
const burgerButton = document.querySelector('.burger')
const nav = document.querySelector('.main-nav')

// При нажатии добавляем или убираем класс open: CSS показывает или скрывает ссылки.
burgerButton.addEventListener('click', () => {
    const isOpen = nav.classList.toggle('open')
    // Сообщаем программам чтения с экрана, открыто ли меню.
    burgerButton.setAttribute('aria-expanded', String(isOpen))
})

// Находим все ссылки навигации, чтобы назначить им обработчики нажатия.
const navLinks = document.querySelectorAll('.main-nav a')
// Список файлов для случайного звука при нажатии на ссылку.
const sounds = [
    'aud/67_SQlv2Xv.mp3',
    'aud/999-social-credit-siren.mp3',
    'aud/fahhh.mp3',
    'aud/vine-boom-meme_cCCpxZG.mp3'
]
// Создаём общий проигрыватель: одновременно играет только один звук.
const audio = new Audio()
audio.preload = 'auto'
audio.volume = 1
// Запоминаем предыдущий звук, чтобы он не повторялся подряд.
let lastSoundIndex = -1

// Находим кнопку DO NOT PRESS по её ID на латинице.
const dnpButton = document.getElementById('dnp')

// При нажатии останавливаем текущий звук и запускаем Windows XP с начала.
dnpButton.addEventListener('click', () => {
    audio.pause()
    audio.src = 'aud/windows-xp-error-song-edited-by-dj-cobaltsteel-77.mp3'
    audio.currentTime = 0
    audio.play().catch((error) => {
        console.error('Не удалось воспроизвести звук:', audio.src, error)
    })
})

// Назначаем каждой ссылке случайный звук и закрытие мобильного меню.
navLinks.forEach((link) => {
    link.addEventListener('click', (event) => {
        // Отменяем переход по # и закрываем меню после выбора пункта.
        // event.preventDefault()
        nav.classList.remove('open')
        burgerButton.setAttribute('aria-expanded', 'false')
        // Останавливаем предыдущий звук перед выбором следующего.
        audio.pause()
        // Выбираем случайный звук, исключая предыдущий.
        const availableIndexes = sounds
            .map((sound, index) => index)
            .filter((index) => index !== lastSoundIndex)
        const randomIndex = availableIndexes[
            Math.floor(Math.random() * availableIndexes.length)
        ]
        // Запоминаем выбор и воспроизводим выбранный файл с начала.
        lastSoundIndex = randomIndex
        audio.src = sounds[randomIndex]
        audio.currentTime = 0
        audio.play().catch((error) => {
            console.error('Не удалось воспроизвести звук:', audio.src, error)
        })
    })
})


