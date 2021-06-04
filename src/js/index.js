// Main js file

// another js file (example)
// import './validate.js'
// import './select.js'

window.addEventListener('DOMContentLoaded', function () {

    document.querySelector('.header__hamburger').addEventListener('click', function () {
        const value = window.innerWidth - document.documentElement.clientWidth;
        document.body.style.overflow = 'hidden';
        this.classList.toggle('active')
        if (this.classList.contains('active')) {
            document.body.style.paddingRight = `${value}px`;
        } else {
            document.body.style.paddingRight = '';
            document.body.style.overflow = '';
        }
        document.querySelector('.header__inner').classList.toggle('show');
    });


    let processSwiper;
    const processSlider = document.querySelector('.process-slider');

    function initFirstSlider() {
        if (window.innerWidth < 768 && processSlider.dataset.mob == 'false') {
            processSwiper = new Swiper(processSlider, {
                slidesPerView: 'auto',
                spaceBetween: 10,
                autoHeight: true,
                pagination: {
                    el: '.process-slider-pagination',
                    clickable: true
                },
            });

            processSlider.dataset.mob = 'true';
        }

        if (window.innerWidth >= 768) {
            processSlider.dataset.mob = 'false';

            if (processSlider.classList.contains('swiper-container-initialized')) {
                processSwiper.destroy();
                processSwiper.disable()
            }
        }
    };

    initFirstSlider();

    window.addEventListener('resize', initFirstSlider);

    let timelineSwiper;
    const timelineSlider = document.querySelector('.timeline-slider');
    const dataMarked = document.querySelector('[data-marked');

    function initSecondSlider() {
        if (window.innerWidth < 1440 && timelineSlider.dataset.mob == 'false') {
            timelineSwiper = new Swiper(timelineSlider, {
                slidesPerView: "auto",
                spaceBetween: 0,
                autoHeight: true,
                pagination: {
                    el: ".timeline-pagination",
                    clickable: true
                }
            });

            timelineSlider.dataset.mob = 'true';
            dataMarked.classList.remove('last');
        }

        if (window.innerWidth >= 1440) {
            timelineSlider.dataset.mob = 'false';
            dataMarked.classList.add('last');

            if (timelineSlider.classList.contains('swiper-container-initialized')) {
                timelineSwiper.destroy();
                timelineSwiper.disable()
            }
        }
    };

    initSecondSlider();
    window.addEventListener('resize', initSecondSlider);
})