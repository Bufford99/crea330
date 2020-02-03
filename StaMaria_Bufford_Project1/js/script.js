$(document).ready(function() {
    $(".icon").click(function() {
        $(".responsive").slideToggle(500);
        $(".responsive").css("display", "flex");
    });
});

// $(window).ready(function() {
//     $("*").lazyLoad({
//         effect: "fadeIn"
//     });
// });