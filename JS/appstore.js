$('#app-store').click(function () {
    OPEN_APP_COUNTER++;
    $('.app-store-container').removeClass("animate__zoomOutDown");
    $('.app-store-container').addClass("animate__zoomInDown");
    $('.app-store-container').css("display", "block");
})
$('#app-store-app .up-frame .btns .close').click(function () {
    OPEN_APP_COUNTER--;
    // $('.app-store-container').removeClass("animate__zoomOut");
    $('.app-store-container').addClass("animate__zoomOutDown");
})