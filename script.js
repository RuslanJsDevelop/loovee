// script.js
const loveButton = document.getElementById('loveButton');
loveButton.addEventListener('click', () => {
    loveButton.innerHTML = 'Отправлено ❤️';
    loveButton.style.backgroundColor = '#2ecc71';
    loveButton.style.cursor = 'default';
    loveButton.removeEventListener('click', handleButtonClick);
});

const handleButtonClick = () => {
    alert('Ты уже нажал кнопку "Отправить".');
};

loveButton.addEventListener('click', handleButtonClick);
