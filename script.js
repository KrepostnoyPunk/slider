const slidesEls = document.querySelectorAll('.slider__slide'); // получаем массив слайдов
let nexBtntEl = document.querySelector('.slider__btn-next');
let backBtnEl = document.querySelector('.slider__btn-back');

function showSlide(slideIndex) {
    slidesEls.forEach((slide, index) => {
        // если индекс текущего DOM элемента в массиве === текущий индекс, то элемент видно, иначе - не видно
        slide.style.display = (index === slideIndex) ? 'block' : 'none';
    });
}

let currentSlide = 0; // текущий индекс, который изменяется в зависимости от нажатия на кнопки вперед/назад

nexBtntEl.addEventListener('click', () => {
    currentSlide = (currentSlide + 1) % slidesEls.length;
    // % slidesEls.length - зацикливает допустимое переключение в рамках длины массива чтобы не было "улета" в пустоту
    showSlide(currentSlide);
});

backBtnEl.addEventListener('click', () => {
    // + slidesEls.length - компенсирует минус чтобы не получилось несуществующее отрицательное значение
    currentSlide = (currentSlide - 1 + slidesEls.length) % slidesEls.length;
    showSlide(currentSlide);
});

showSlide(currentSlide); // инициализация функции аКа условия появления слайда, без нее были бы все картинки сразу