const responsive = {
    0: {
        items: 1
    },
    320: {
        items: 1
    },
    560: {
        items: 2
    },
    960: {
        items: 3
    }
}
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
        responsive: responsive
        // please be care full while write a code having a mistake in (navTest) the correct one in (navText)
        // navText: [$(".owl-navigation .owl-nav-prev"), $(".owl-navigation .owl-nav-next")],
    });
    // jQuery Hide and Show
    $("#hide").click(function () {
        $(".footer").hide();
    });
    $("#show").click(function () {
        $(".footer").show();
    });
    // click to scroll top 
    $('.move-up span').click(function () {
        $('html,body').animate({
            scrollTop: 0
        }, 1000);
    })
    // $("#hide-sidebar").click(function () {
    //     $(".sidebar").hide();
    // });
    // $("#show-sidebar").click(function () {
    //     $(".sidebar").show();
    // });
});