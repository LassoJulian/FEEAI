import { characters } from './characters.js';

document.addEventListener('DOMContentLoaded', () => {
    let currentIndex = parseInt(localStorage.getItem('currentIndex')) || 0;

    const prevBtn = document.querySelector('#prevBtn');
    const nextBtn = document.querySelector('#nextBtn');
    const nameBtn = document.querySelector('#nameBtn');
    const characterImage = document.querySelector('#characterImage');
    const detailsContainer = document.querySelector('#detailsContainer');
    const detailsName = document.querySelector('#detailsName');
    const detailsDescription = document.querySelector('#detailsDescription');
    const backBtn = document.querySelector('#backBtn');
    const detailsImage = document.querySelector('#detailsImage');
    const carouselContainer = document.querySelector('#carouselContainer');

    function updateCharacter(index) {
        const { name, img, description } = characters[index];
        characterImage.setAttribute('src', img);
        nameBtn.textContent = name;
        nameBtn.onclick = () => {
            detailsName.textContent = name;
            detailsDescription.textContent = description;
            detailsImage.setAttribute('src', img);
            detailsContainer.style.display = 'flex';
            carouselContainer.style.display = 'none';
        };
        prevBtn.classList.toggle('disabled', index === 0);
        nextBtn.classList.toggle('disabled', index === characters.length - 1);
        localStorage.setItem('currentIndex', index);
    }

    prevBtn.onclick = () => {
        if (currentIndex > 0) {
            currentIndex--;
            updateCharacter(currentIndex);
        }
    };

    nextBtn.onclick = () => {
        if (currentIndex < characters.length - 1) {
            currentIndex++;
            updateCharacter(currentIndex);
        }
    };

    backBtn.onclick = () => {
        detailsContainer.style.display = 'none';
        carouselContainer.style.display = 'flex';
    };

    // Inicialización
    updateCharacter(currentIndex);
});
