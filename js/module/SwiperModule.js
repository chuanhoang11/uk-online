export default function SwiperModule() {
    var hbnSlider = new Swiper(".hbn-slider .swiper", {
        // freeMode: true,
        watchSlidesProgress: true,
        speed: 1200,
        autoplay: {
            delay: 3000
        },
        pagination: {
            el: ".hbn-slider .swiper-pagination",
            type: "bullets",
            clickable: true
        },
        navigation: {
            nextEl: ".hbn-slider .swiper-next",
            prevEl: ".hbn-slider .swiper-prev"
        },
        // slidesPerGroup: 2,
        loop: true,
        spaceBetween: 0,
        slidesPerView: 1,
        effect: "fade",
        fadeEffect: {
            crossFade: true
        }
        // breakpoints: {
        //     0: {
        //         slidesPerView: 1.2
        //     },
        //     500: {
        //         slidesPerView: 2.2
        //     },
        //     768: {
        //         slidesPerView: 3
        //     },
        //     1200: {
        //         slidesPerView: 3
        //     }
        // }
    });
    const proSliderWrappers = document.querySelectorAll(".pro-slider-wrapper");
    if (proSliderWrappers) {
        for (let i = 0; i < proSliderWrappers.length; i++) {
            const item = proSliderWrappers[i];
            const swiperPrev = item.querySelectorAll(".swiper-prev");
            const swiperNext = item.querySelectorAll(".swiper-next");
            const pagi = item.querySelectorAll(".swiper-pagination");
            const swiper = item.querySelectorAll(".swiper");
            for (let i = 0; i < swiper.length; i++) {
                const item = swiper[i];
                var proSlider = new Swiper(item, {
                    // freeMode: true,
                    watchSlidesProgress: true,
                    speed: 1200,
                    // autoplay: {
                    //     delay: 3000
                    // },
                    pagination: {
                        el: pagi[i],
                        type: "bullets",
                        clickable: true
                    },
                    navigation: {
                        nextEl: swiperNext[i],
                        prevEl: swiperPrev[i]
                    },
                    // slidesPerGroup: 2,
                    loop: true,
                    spaceBetween: 24,
                    slidesPerView: 4,
                    effect: "slide",
                    fadeEffect: {
                        crossFade: true
                    },
                    breakpoints: {
                        0: {
                            slidesPerView: 1.2
                        },
                        500: {
                            slidesPerView: 2.2
                        },
                        768: {
                            slidesPerView: 3
                        },
                        1200: {
                            slidesPerView: 4
                        }
                    }
                });
            }
        }
    }
    var newsSlider = new Swiper(".news-slider .swiper", {
        // freeMode: true,
        watchSlidesProgress: true,
        speed: 1200,
        // autoplay: {
        //     delay: 3000
        // },
        pagination: {
            el: ".news-slider .swiper-pagination",
            type: "bullets",
            clickable: true
        },
        navigation: {
            nextEl: ".news-slider .swiper-next",
            prevEl: ".news-slider .swiper-prev"
        },
        // slidesPerGroup: 2,
        loop: false,
        spaceBetween: 24,
        slidesPerView: 3.9,
        effect: "slide",
        fadeEffect: {
            crossFade: true
        },
        breakpoints: {
            0: {
                slidesPerView: 1.2
            },
            500: {
                slidesPerView: 2.2
            },
            800: {
                slidesPerView: 2.8
            },
            1200: {
                slidesPerView: 3.9
            }
        }
    });
    var empSlider = new Swiper(".emp-slider .swiper", {
        // freeMode: true,
        watchSlidesProgress: true,
        speed: 1200,
        // autoplay: {
        //     delay: 3000
        // },
        pagination: {
            el: ".emp-slider .swiper-pagination",
            type: "bullets",
            clickable: true
        },
        navigation: {
            nextEl: ".emp-slider .swiper-next",
            prevEl: ".emp-slider .swiper-prev"
        },
        // slidesPerGroup: 2,
        loop: false,
        spaceBetween: 24,
        slidesPerView: 3.9,
        effect: "slide",
        fadeEffect: {
            crossFade: true
        },
        breakpoints: {
            0: {
                slidesPerView: 1.2
            },
            500: {
                slidesPerView: 2.2
            },
            800: {
                slidesPerView: 2.8
            },
            1200: {
                slidesPerView: 3.9
            }
        }
    });
}