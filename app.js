const open = document.querySelector(".open");
const close = document.querySelector(".close");
const overlay = document.querySelector(".overlay");

open.addEventListener('click', () => {
    open.classList.toggle('hidden');
    close.classList.toggle('hidden');
    overlay.classList.toggle('hidden');
})


close.addEventListener('click', () => {
    close.classList.toggle('hidden');
    overlay.classList.toggle('hidden');
    open.classList.toggle('hidden');
})