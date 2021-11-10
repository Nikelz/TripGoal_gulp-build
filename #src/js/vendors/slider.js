if (document.querySelector('.location-slider')) {
    new Splide('.location-slider', {
        classes: {
            arrows: 'splide__arrows rooms-slider__controls',
            prev: 'splide__arrow--prev slider-arrow_prev',
            next: 'splide__arrow--next slider-arrow_next',

        },
        pagination: false,


        perPage: 3,
        gap: 30,
        breakpoints: {
            1024: {
                perPage: 2,
                perMove: 2,
                gap: 10,
            },
            580: {
                perPage: 1,
                perMove: 1,
                focus: 'center',

            },
        },
    }).mount();
};
if (document.querySelector('.testimonials-slider')) {
    new Splide('.testimonials-slider', {
        pagination: true,
        arrows: false,
        type: 'loop',
        perPage: 1,

    }).mount();
};

if (document.querySelector('.social-feed__slider')) {
    new Splide('.social-feed__slider', {
        pagination: false,
        arrows: false,
        type: 'loop',
        perPage: 1,
        autoplay: true,
        gap: 25,

        start: 1,

        focus: 'center',
        autoWidth: true,
        interval: 0,
        speed: 20000,
        easing: 'linear',
    }).mount();
};