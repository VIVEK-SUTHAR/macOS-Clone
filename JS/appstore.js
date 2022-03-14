$('#app-store').click(function () {
    OPEN_APP_COUNTER++;
    $('.app-store-container').removeClass("animate__zoomOutDown");
    $('.app-store-container').addClass("animate__zoomInDown");
    $('.app-store-container').css("display", "block");
})
$('#app-store-app .up-frame .btns .close').click(function () {
    OPEN_APP_COUNTER--;
    // $('.app-store-container').removeClass("animate__zoomOut");
    $('.app-store-container').addClass("animate__zoomOutDown animate__fast");
})

// ----------------------------------------------------------------------------
// CODE FOR SWITCHING BETWEEN TABS IN APP-STORE 
$('.create-nav').click(() => {
    ("#['HERE COMES THE MAIN CONTAINER OF CREATE-NAV-SCREEN']").css("display", "block");
    ("#['HERE COMES THE MAIN CONTAINER OF DISCOVER-NAV-SCREEN']").css("display", "none");
})