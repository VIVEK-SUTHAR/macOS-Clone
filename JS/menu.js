//jQuery is used in this js 

//finder dropdown when clicked on finder dropdown will be displayed
$('#finder-dropdown-btn').click(function () {
    $('#control-tab').fadeOut(100);
    $('#finder-dropdown').slideToggle(400);
});
//when clicked on desktop image finder dropdown will be hidden
$('.main').click(function () {
    $('#finder-dropdown').slideUp(300);
    $('#control-tab').slideUp(200);
});

$('#controls-tab-btn').click(function () {
    $('#finder-dropdown').fadeOut(400);
    $('#control-tab').slideToggle(200);

});
//finder-application-code
$('#finder').click(function () {
   showFinder();
});
$('#close').click(function () {
    $('#finder-app').addClass("animate__zoomOut");
    $('#finder-app').slideToggle(400);
    $('#finder_dot').css("display", "none");
    $("#container").css("bottom", "0px");


});
$("#maximize").click(function () {
    $("#container").css("bottom", "-800px");

});
let count_app = 0;
$("#maximize").click(function () {
    if (count_app == 0) {
        $("#finder-app").css("left", "0.01px");
        $("#finder-app").css("top", "21.8px");
        $("#finder-app").css("width", "99.999999999%");
        $("#finder-app").css("height", "99.99vh");
        $("#finder-app").css("border-radius", "1px");
        $("#finder-app").css("transition", "all 0.5s ease-in-out");
        $("#upframe").css("background-color", "#121212");
    }
    count_app++;
});
$("#minimize").click(function () {
    if (count_app >= 0) {
        $('#finder-app').addClass("animate__zoomOut");
        $('#finder-app').slideToggle(400);
        count_app = 0;
    }
    $('#finder_dot').css("background-color", "black");
    $("#container").css("bottom", "0px");

});
$("#launch").click(function () {
    $("#launch-pad").css("background-color", "rgba(0,0,0,0.2)");
    $("#launch-pad").css("backdrop-filter", "blur(3px)");
    $("#launch-pad").css("top", "0");
    $(".App_Card").css("display", "grid");
});
$("#launch-pad").click(function () {
    $("#launch-pad").css("top", "-100%");
})

$(function () {
    $("#finder-app").draggable();
});
function showFinder(){
    $('#finder-app').removeClass("animate__zoomOut");
    $('#finder-app').addClass("animate__zoomIn");
    $('#finder-app').slideToggle(80);
    $('#finder_dot').css("display", "block");
    $('#finder_dot').css("background-color", "red");
}