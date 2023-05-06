
let owl = $('.owl-carousel');
owl.owlCarousel({
    center: true,
    loop: true,
    startPosition: 1,
    items: 3,
});

$('.slider__item--prev').click(function() {
    owl.trigger('next.owl.carousel', [300]);
})
//STARS RATING
const ratingItemsList = document.querySelectorAll('.rating__item');
const ratingItemsArray = Array.prototype.slice.call(ratingItemsList);

ratingItemsArray.forEach(item => 
    item.addEventListener('click', () => {
        const { itemValue } = item.dataset;
        item.parentNode.dataset.totalValue = item.dataset.itemValue;
    })
);
let  open = document.getElementById("log");
let close = document.getElementById("login");
let modal = document.getElementById('menu');

open.addEventListener('click', function(event) {
    event.preventDefault();
    modal.style.display = "block";
});
close.addEventListener('click', function(event) {
    event.preventDefault();
    modal.style.display = "none";
});