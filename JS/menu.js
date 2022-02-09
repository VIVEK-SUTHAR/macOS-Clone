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
    $('#finder-app').slideToggle(80);
});
$('#close').click(function () {
    $('#finder-app').fadeToggle(400);
});
$("#maximize").click(function () {
    let count = 0;
    if (count == 0) {
        $("#finder-app").css("width", "+=350");
        $("#finder-app").css("height", "+=180");
        $("#finder-app").css("left", "100px");
        $("#finder-app").css("top", "50px");
        $(this).css("transition", "2000ms");
        //$("finder-app").css('background-color','yellow');
        count++;
    }
    



});
// $('#maximize').click( function (){
// document.getElementById("finder-app").style = "height:580px;width:1200px";

// });
$(function () {
    $("#finder-app").draggable();
});