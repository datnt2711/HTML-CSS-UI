var wrapperBox = document.querySelector('.wrapper__box');
var input = document.querySelector('.wrapper__box input');
var btnRemove = document.querySelector('.btn__remove');

var tags = ['NodeJs', 'ReactJs'];




// function render lai website
function render() {
    wrapperBox.innerHTML = '';
    for(let i = 0; i < tags.length; i++) {
        wrapperBox.innerHTML += `
        <li>${tags[i]}
            <i onclick="removeLi(${i})" class="fa fa-close"></i>
        </li>
        `
    }
    wrapperBox.appendChild(input);
    input.focus();
}


// them the <li> khi an enter
input.addEventListener('keydown', function(e) {
    if(e.key == 'Enter') {
        tags.push(input.value);
        input.value = '';
        render();
    }
})


// function xoa the <li>
function removeLi(index) {
    tags.splice(index, 1);
    render();
}


// remove-all
btnRemove.addEventListener('click', function() {
    tags.splice(0);
    render();
})


render();




