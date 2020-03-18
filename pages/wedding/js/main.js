var swiper = new Swiper('.swiper-container', {
    loop : true,
    autoplay:true,
    slidesPerView : 'auto',
    
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});