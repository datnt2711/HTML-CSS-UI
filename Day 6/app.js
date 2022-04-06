var press = document.querySelector('.press');
var box = document.querySelector('.box_box');
var keyboard = document.querySelector('.keyboard');
var keyValue = document.querySelector('.key--value');
var locationValue = document.querySelector('.location--value');
var whichValue = document.querySelector('.which--value');
var codeValue = document.querySelector('.code--value');





document.addEventListener('keydown', function(e) {
    press.classList.add('hide');
    box.classList.remove('hide');
    keyboard.innerText = e.keyCode;
    keyValue.innerText = e.key;
    locationValue.innerText = e.location;
    whichValue.innerText = e.which;
    codeValue.innerText = e.code;
})