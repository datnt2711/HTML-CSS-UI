var images = document.querySelectorAll('.image__box img');
var gallery = document.querySelector('.gallery');
var galleryImage = document.querySelector('.gallery__image img');
var closeIcon = document.querySelector('.close');
var next = document.querySelector('.right');
var prev = document.querySelector('.left');

var currentIndex = 0;


// function showGallery
function showGallery() {
    if(currentIndex == 0) {
        prev.classList.add('hide');
    }else {
        prev.classList.remove('hide');
    }

    if(currentIndex == images.length -1) {
        next.classList.add('hide');
    }else{
        next.classList.remove('hide');
    }


    galleryImage.src = images[currentIndex].src;
    gallery.classList.add('show');
}


images.forEach(function(item, index) {  
    item.addEventListener('click', function() {
        currentIndex = index;
        showGallery();
    })
})

// next gallery
next.addEventListener('click', function() {
    currentIndex++;
    showGallery();
})

// prev gallery
prev.addEventListener('click', function() {
    currentIndex--;
    showGallery();
})








// Function remove gallery
function removeGallery() {
    gallery.classList.remove("show");
}


// close gallery
closeIcon.addEventListener('click', removeGallery);

