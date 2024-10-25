var cards = document.getElementsByClassName('foto');

for (var i = 0; i < cards.length; i++) {
    cards[i].addEventListener('touchstart', function() {
        this.classList.add('active');
    });

    cards[i].addEventListener('touchend', function() {
        this.classList.remove('active');
    });
}