var IS_FINDER_MAXIMIZED = false;
$('#terminal .sidepen .side-wrapper .maximize').click(function () {
    if (!IS_FINDER_MAXIMIZED) {
        $('#terminal').css("position", "absolute");
        $('#terminal').css("margin", "0");
        $('#terminal').css("top", "20px");
        $('#terminal').css("left", "0");
        $('#terminal').css("width", "90.1%");
        $('#terminal').css("height", "95.5%");
        $('#terminal .main-screen').css("width", "99%");
        $('#terminal .main-screen').css("left", "13%");
        $('.finder-screen').css("width", "95%");
        $('#terminal .main-screen .app-card img').css("width", "150px");
        $('.finder-screen .finder-application ').css("grid-template-columns", "repeat(5, 1fr)");
        $('#dock-container').css("height", "40px")
        $('#dock-container').css("width", "max-content")
        $('#dock-container').css("left", "20%")
        $('#dock-container li img').css("height", "40px")
        $('#dock-container li img').css("width", "40px")
        IS_FINDER_MAXIMIZED = true;
    }
})
$('#terminal .sidepen .side-wrapper .minimize').click(function () {
    if (IS_FINDER_MAXIMIZED) {
        $('#terminal').css("position", "absolute");
        $('#terminal').css("margin", "0");
        $('#terminal').css("top", "12%");
        $('#terminal').css("left", "20%");
        $('#terminal').css("width", "780px");
        $('#terminal').css("height", "450px");
        $('#terminal .main-screen').css("width", "600px");
        $('#terminal .main-screen').css("left", "24%");
        $('.finder-screen').css("width", "98%");
        $('.finder-screen .finder-application ').css("grid-template-columns", "repeat(4, 1fr)");
        $('#terminal .main-screen .app-card img').css("width", "80%");
        $('#dock-container').css("height", "50px")
        $('#dock-container li img').css("height", "48px")
        $('#dock-container li img').css("width", "48px")
        $('#dock-container').css("width", "73%")
        $('#dock-container').css("left", "15%")
        IS_FINDER_MAXIMIZED = false;
    }
    else {
        $('#terminal').addClass("animate__zoomOut")
    }

})