$(document).ready(function () {
    $env = $(".nav");
    $toggleCollapse = $(".toggle-collapse");

    // click event on toggle manu
    $toggleCollapse.click(function () {
        $env.toggleClass("collapse");
    });
    // owl carousel for blog
    $(".owl-carousel").owlCarousel({
        loop: true,
        autoplay: false,
        autoplayTimeout: 3000,
        dots: false,
        nav: true,
        navText: [$(".owl-navigation .owl-nav-prev"), $(".owl-navigation .owl-nav-next")],
        // please be care full while write a code having a mistake in (navTest) the correct one in (navText)
        // navText: [$(".owl-navigation .owl-nav-prev"), $(".owl-navigation .owl-nav-next")],
    });
});