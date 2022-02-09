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
    $('#finder-app').removeClass("animate__zoomOut");
    $('#finder-app').addClass("animate__zoomIn");
    $('#finder-app').slideToggle(80);
});
$('#close').click(function () {
    $('#finder-app').addClass("animate__zoomOut");
    $('#finder-app').slideToggle(400);
});
$('#maximize').click(function () {
    // $('#finder-app').addClass("animate__zoomInDown");


})
let count_app = 0;
$("#maximize").click(function () {
    if (count_app == 0) {
        $("#finder-app").css("left", "0.5px");
        $("#finder-app").css("top", "22px");
        $("#finder-app").css("width", "+=659");
        $("#finder-app").css("height", "+=260");
        $("#finder-app").css("border-radius", "5px");
        $("#finder-app").css("transition", "all 0.2s ease-in-out");
        count_app++;
    }
});
$("#minimize").click(function () {
    if (count_app == 1) {
        $('#finder-app').addClass("animate__zoomOut");
        $('#finder-app').slideToggle(400);
        count_app++;
    }
});
// $('#maximize').click( function (){
// document.getElementById("finder-app").style = "height:580px;width:1200px";

// });
$(function () {
    $("#finder-app").draggable();
});