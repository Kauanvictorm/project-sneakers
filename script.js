function toggleActive(card) {
const cards = document.querySelectorAll('.tenis');
    cards.forEach(c => {
        if (c !== card) {
            c.classList.remove('active');
        }
    });
    card.classList.toggle('active');
}