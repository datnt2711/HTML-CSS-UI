const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const tabItems = $$('.tab-item');
const line = $('.line');
const tabContents = $$('.tab-content');
const tabActive = $('.tab-item.active');


line.style.left = tabActive.offsetLeft + 'px';
line.style.width = tabActive.offsetWidth + 'px';

tabItems.forEach((item,index) => {
    item.addEventListener('click', function() {
        $('.tab-item.active').classList.remove('active');
        this.classList.add('active');


        $('.tab-content.active').classList.remove('active');
        tabContents[index].classList.add('active');

        line.style.left = this.offsetLeft + 'px';
        line.style.width = this.offsetWidth + 'px';
    })
})