/* ===================================================================
 *  Knox 1.0.0 - Main JS
 *
 *
 * ------------------------------------------------------------------- */

(function(html) {

    'use strict';

    html.className = html.className.replace(/\bno-js\b/g, '') + 'js';

    const cfg = {

        // Countdown Timer Final Date
        finalDate : 'December 04, 2025 00:00:00',
        // MailChimp URL
        mailChimpURL : 'https://facebook.us1.list-manage.com/subscribe/post?u=1abf75f6981256963a47d197a&amp;id=37c6d8f4d6' 

    };



   /* Preloader
    * -------------------------------------------------- */
    const ssPreloader = function() {

        const body = document.querySelector('body');
        const preloader = document.querySelector('#preloader');
        const details = document.querySelector('.s-details');

        if (!(preloader && details)) return;

        window.addEventListener('load', function() {

            body.classList.remove('ss-preload');
            body.classList.add('ss-loaded');

            // page scroll position to top
            preloader.addEventListener('transitionstart', function gotoTop(e) {
                if (e.target.matches('#preloader')) {
                    window.scrollTo(0, 0);
                    preloader.removeEventListener(e.type, gotoTop);
                }
            });

            preloader.addEventListener('transitionend', function afterTransition(e) {
                if (e.target.matches('#preloader'))  {
                    details.style.bottom = (window.innerHeight - details.offsetHeight) + 'px';
                    // body.classList.add('ss-show');
                    e.target.style.display = 'none';
                    preloader.removeEventListener(e.type, afterTransition);
                }
            });

        });

        window.addEventListener('beforeunload' , function() {
            body.classList.remove('ss-show');
        });
    };



   /* Swiper
    * ------------------------------------------------------ */ 
    const ssSwiper = function() {

        const mySwiper = new Swiper('.swiper-container', {

            slidesPerView: 1,
            effect: 'fade',
            flipEffect: {
                slideShadows: false,
            },
            speed: 2000,
            autoplay: {
                delay: 3000,
            }

        });

        mySwiper.on('slideChangeTransitionStart', function (event) {
            const body = document.querySelector('body');
            if(event.activeIndex == 1){
                body.classList.remove('theme-blue');
                body.classList.add('theme-yellow');
            }
            if(event.activeIndex == 0){
                body.classList.remove('theme-yellow');
                body.classList.add('theme-blue');
            }
        });
    };


   /* Alert Boxes
    * ------------------------------------------------------ */
    const ssAlertBoxes = function() {

        const boxes = document.querySelectorAll('.alert-box');
  
        boxes.forEach(function(box) {
            box.addEventListener('click', function(event) {
                if (event.target.matches('.alert-box__close')) {
                    event.stopPropagation();
                    event.target.parentElement.classList.add('hideit');

                    setTimeout(function(){
                        box.style.display = 'none';
                    }, 500)
                }
            });
        })
    };



   /* Smooth Scrolling
    * ------------------------------------------------------ */
    const ssMoveTo = function(){


    }; 


    const typed = function() {

        let options = {
            strings: ['já vai começar!', 'já é o futuro', 'para ver e ouvir'],
            typeSpeed: 150,
            // smartBackspace: true,
            loop: true,
            showCursor: false,
            // shuffle: true,
            startDelay: 1000,
        };

        document.addEventListener("DOMContentLoaded", function(event) {
            let typed = new Typed('.element', options);
        })
        

    };


   /* Initialize
    * ------------------------------------------------------ */
    (function ssInit() {

        ssPreloader();
        ssSwiper();
        ssAlertBoxes();
        ssMoveTo();
        typed();

    })();

})(document.documentElement);