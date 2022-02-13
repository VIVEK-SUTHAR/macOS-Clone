//jQuery is used in this js 
setTimeout(function () {
    const current = new Date();
    const time = current.toLocaleTimeString("en-US", {
        hour: "2-digit",
        minute: "2-digit",
    });
    document.getElementById('time').innerHTML = time;
}, 100);
$('#enter').click(function () {
    $('#log_in').fadeOut(300);
    $('#container').css("display", "block")
    $('#container').css("bottom", "0")
})
let lauch_count = 0;
//finder dropdown when clicked on finder dropdown will be displayed44

$('#finder-dropdown-btn').click(function () {
    $('#finder-dropdown').slideToggle(400);
    $('#control-tab').fadeOut(100);
});
//when clicked on desktop image finder dropdown will be hidden
$('.main').click(function () {
    $('#finder-dropdown').slideUp(300);
    $('#control-tab').slideUp(200);
    $('#search_form').css("display", "none");
    $('#search_form').addClass("animate__slideOutDown");
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
    $('#ter_til').css("display", "none");
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
        $("#finder-app").css("border-radius", "3px");
        $("#finder-app").css("transition", "all 0.8s ease-in-out");
        $("#upframe").css("background-color", "#121212");
    }
    count_app++;
});
$("#minimize").click(function () {
    if (count_app == 0) {
        $('#finder-app').addClass("animate__zoomOut");

    }
    else {
        $('#finder-app').css("width", "850px");
        $('#finder-app').css("height", "450px");
        $('#finder-app').css("left", "380px");
        $('#finder-app').css("top", "100px");
        $('#finder-app').css("border-radius", "15px");
        count_app = 0;
    }
    $('#finder_dot').css("background-color", "black");
    $("#container").css("bottom", "0px");

});
$("#launch").click(function () {
    showLauncher();
});
$("#launch-pad").click(function () {
    $("#launch-pad").css("top", "-100%");
})

$(function () {
    $("#finder-app").draggable();
});
function showFinder() {
    $('#finder-app').removeClass("animate__zoomOut");
    $('#finder-app').addClass("animate__zoomIn");
    $('#finder-app').slideToggle(80);
    $('#finder-app').css("border-radius", "8px");
    $('#finder_dot').css("display", "block");
    $('#finder_dot').css("background-color", "red");
    $('#ter_til').css("display", "block");
}
function showLauncher() {
    $("#launch-pad").css("background-color", "rgba(0,0,0,0.1)");
    $("#launch-pad").css("backdrop-filter", "blur(10px)");
    $("#launch-pad").css("top", "0");
    $(".App_Card").css("display", "grid");
    $("#container").css("z-index", "999999999999");
}
$('#search_bar').click(function () {
    $('#search_form').css("display", "block");
    $('#search_form').addClass("animate__slideInUp");
    $('#search_form').css("left", "34%");
    $('#search_form').css("top", "25%");


})
