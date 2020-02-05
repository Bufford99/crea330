$(document).ready(function() {

    $(".bg-overlay").fadeIn(2500);
    $(".hours").fadeIn(3500);
    $(".address").hide(0).fadeIn(3500);
    $(".img-menu").hide(0).fadeIn(3500);
    $(".social-buttons").hide(0).fadeIn(3500);

    $(".icon").click(function() {
        $(".responsive").slideToggle(500);
        $(".responsive").css("display", "flex");
    });
});