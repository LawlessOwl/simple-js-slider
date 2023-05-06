let rightButton = document.querySelector('.right-button');
let  leftButton = document.querySelector('.left-button');
const  carouselList = document.querySelector('.carousel-list');
let offset = 0;

rightButton.addEventListener('click', function(){
    offset -= 102;
    if (offset < -714) {
        offset = 0;
    }
    carouselList.style.left = offset + 'px';
});


leftButton.addEventListener('click', function(){
    offset += 102;
    if (offset > 0) {
        offset = -714;
    }
    carouselList.style.left = offset + 'px';
});