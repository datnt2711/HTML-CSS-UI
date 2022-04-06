var searchBox = document.querySelector('.search-box');
var searchInput = document.querySelector('.search-box__input');
var searchBtn = document.querySelector('.search-box__btn');

searchBtn.addEventListener('click', function() {
    searchBox.classList.toggle('w-400');
    searchInput.focus();
})
