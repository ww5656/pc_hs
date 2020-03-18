var mySwiper = new Swiper('.banner.swiper-container', {
    navigation: {
        nextEl: '.banner_info.swiper-button-next',
        prevEl: '.banner_info.swiper-button-prev',
    },
    loop: true,
    pagination: {
        el: '.banner.swiper-pagination',
        clickable: true,
    },

})
var weddingSwiper = new Swiper('.weddingSwiper.swiper-container', {

    loop: true,
    pagination: {
        el: '.weddingPagination.swiper-pagination',
        clickable: true,
        renderBullet: function (index, className) {
            switch (index) {
                case 0: text = '新品/NEW'; break;
                case 1: text = '2018春夏'; break;
                case 2: text = '2018秋冬'; break;
                case 3: text = '专属定制'; break;
            }
            return '<span class="' + className + '">' + text + '</span>';
        }
    },

})
