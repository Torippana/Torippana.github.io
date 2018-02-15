$(document).ready(function(){
    $(".owl-carousel").owlCarousel({
            loop: true,
            nav: false,
            dots: false,
            items: 1,
            autoplay: true,
    		autoplayHoverPause: false,
    		autoplayTimeout: 6000,
    		autoplaySpeed: 1000,
            //Basic Speeds
            slideSpeed : 1000,//スライドのスピード
            rewindSpeed : 6000, //アイテムが最初に戻る時のスピード
            });
});