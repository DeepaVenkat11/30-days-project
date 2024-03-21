const button = document.querySelector(".btn-more"); // Use querySelector instead of getElementByClass
const dropdown = document.querySelector(".dropdown"); // Use querySelector instead of getElementByClass

button.addEventListener('click', () => {
    dropdown.classList.toggle('show');
});