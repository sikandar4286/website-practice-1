$(document).ready(function () {
    $env = $(".nav");
    $toggleCollapse = $(".toggle-collapse");

    // click event on toggle manu
    $toggleCollapse.click(function () {
        $env.toggleClass("collapse");
    });
});
