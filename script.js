
const modal = document.getElementById('personagemModal');
const modalImg = document.getElementById('modalImg');
const modalName = document.getElementById('modalName');
const modalDesc = document.getElementById('modalDesc');

document.querySelectorAll('.personagem-card').forEach(card => {
card.addEventListener('click', () => {
    modalImg.src = card.dataset.img;
    modalName.textContent = card.dataset.name;
    modalDesc.textContent = card.dataset.desc;
});
});