var card = document.getElementsByClassName('foto');

card.addEventListener('touchStart', function() {
    card.classList.add('active')
})
card.addEventListener('touchedn', function() {
    card.classList.remove('active')
})