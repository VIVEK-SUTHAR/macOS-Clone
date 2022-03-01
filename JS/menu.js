var OPEN_APP_COUNTER = 0;
let appname = document.getElementById("App_name");

var days = [
    'Sun',
    'Mon',
    'Tues',
    'Wed',
    'Thu',
    'Fri',
    'Sat',
];
var month = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

let lauch_count = 0;
setTimeout(function () {
    const current = new Date();
    const time = current.toLocaleTimeString("en-US", {
        hour: "2-digit",
        minute: "2-digit",
    });
    document.getElementById('time').innerHTML = time;
    var dayn = new Date();
    var dayName = days[dayn.getDay()];
    var monthName = month[dayn.getMonth()];
    var date = dayn.getDate();
    document.getElementById('day').innerHTML = dayName + " " + monthName + " " + date + "  " + time;
    document.querySelector(".calender .day").innerHTML = dayName;
    document.querySelector(".calender .date").innerHTML = date;
    
}, 100);
$('#enter').click(function () {
    $('#log_in').fadeOut(500);
    $('#dock-container').css("display", "block")
    $('#dock-container').css("bottom", "0")
})
//finder dropdown when clicked on finder dropdown will be displayed44

$('#finder-dropdown-btn').click(function () {
    $('#apple_menu').fadeOut(100);
    $('#finder-dropdown').slideToggle(400);
    $('#control-tab').fadeOut(100);
    $('#file_menu').slideUp(200);

});
//when clicked on desktop image finder dropdown will be hidden
$('.main img').click(function () {
    $('#finder-dropdown').slideUp(300);
    $('#control-tab').slideUp(200);
    $('#search_form').css("display", "none");
    $('#apple_menu').slideUp(200);
    $('#file_menu').slideUp(100);
});

$('#controls-tab-btn').click(function () {
    $('#finder-dropdown').fadeOut(400);
    $('#control-tab').slideToggle(200);

});
//finder-application-code
$('#finder').click(function () {
    showFinder();
});
$('#finder-app #upframe #close').click(function () {
    OPEN_APP_COUNTER--;
    appname.innerHTML = "Finder";
    $('#finder-app').addClass("animate__zoomOut");
    $('#finder-app').slideToggle(400);
    $('#finder_dot').css("display", "none");
    $("#container").css("bottom", "0px");
    $('#ter_til').css("display", "none");
    $('#dock-container').css("height", "50px")
    $('#dock-container li img').css("height", "48px")
    $('#dock-container li img').css("width", "48px")
    $("#finder-app").css("border", "none");
    $('#dock-container').css("width", "73%")
    $('#dock-container').css("left", "15%")


});
$("#maximize").click(function () {
    $("#container").css("bottom", "-800px");

});
let count_app = 0;
$("#maximize").click(function () {
    if (count_app == 0) {
        $("#finder-app").css("left", "0.001px");
        $("#finder-app").css("top", "21.8px");
        $("#finder-app").css("width", "99.9%");
        $("#finder-app").css("height", "91vh");
        $("#finder-app").css("border-radius", "10px");
        $("#finder-app").css("transition", "all 0.8s ease-in-out");
        $("#finder-app").css("border", "0.5px solid #fff");
        $("#upframe").css("background-color", "#242423");
        $('#dock-container').css("height", "40px")
        $('#dock-container').css("width", "max-content")
        $('#dock-container').css("left", "20%")
        $('#dock-container li img').css("height", "40px")
        $('#dock-container li img').css("width", "40px")
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
        $('#dock-container').css("height", "50px")
        $('#dock-container li img').css("height", "48px")
        $('#dock-container li img').css("width", "48px")
        $('#dock-container').css("width", "73%")
        $("#finder-app").css("border", "none");
        $('#dock-container').css("left", "15%")

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
    $("#terminal").draggable();
    $("#about_mac").draggable();
    $("#facetime").draggable();
});
function showFinder() {
    OPEN_APP_COUNTER++;
    let appname = document.getElementById("App_name");
    appname.innerHTML = 'Terminal';
    $('#finder-app').removeClass("animate__zoomOut");
    $('#finder-app').addClass("animate__zoomIn");
    $('#finder-app').slideToggle(80);
    $('#finder-app').css("border-radius", "8px");
}
function showLauncher() {
    $("#launch-pad").css("background-color", "rgba(0,0,0,0.1)");
    $("#launch-pad").css("backdrop-filter", "blur(15px)");
    $("#launch-pad").css("top", "0");
    $(".App_Card").css("display", "grid");
    $("#container").css("z-index", "999999999999");
}
$('#search_bar').click(function () {
    $('#search_form').addClass("animate__slideInUp");
    $('#search_form').css("display", "block");
    $('#search_form').css("left", "34%");
    $('#search_form').css("top", "25%");
})


var rd = $('#dv');
var sr = $('#sv');
$('#range').change(function () {
    let x = rd.html("Display:" + this.value + "%");
});
$('#srange').change(function () {
    let x = sr.html("Sound:" + this.value + "%");
});



//Code For Control-tab Buttons
let btn_counter = 0;
$('.ct_btn').click(function () {
    if (btn_counter == 0) {
        $('#control-tab ul li span').css("background-color", "white")
        $('#control-tab ul li span  ').css("color", "black")
        btn_counter++;
    }
    else if (btn_counter == 1) {
        $('#control-tab ul li span').css("background-color", "rgba(0, 68, 255, 0.938)")
        $('#control-tab ul li span  ').css("color", "rgb(255,255,255)")
    }
    // $('#control-tab ul li span').css("background-color", "white")
    // $('#control-tab ul li span  ').css("color", "black")
})



// code for apple_logo drop-down menu 
$('#logo').click(function () {
    $('#file_menu').slideUp(200);
    $('#apple_menu').slideToggle(400);
})



// code for opening and closing file menu
$('#file_menu_btn').click(function () {

    $('#file_menu').slideToggle(100);
    $('#finder-dropdown').fadeOut(50);
    $('#apple_menu').fadeOut(50);
})


//code for closing and opening Finder App
$('#terminal-app').click(function () {
    OPEN_APP_COUNTER++;
    $('#terminal').removeClass("animate__zoomOut");
    $('#terminal').addClass("animate__zoomIn");
    $('#terminal').css("display", "block");

})
$('.close').click(function () {
    OPEN_APP_COUNTER--;
    $('#terminal').addClass("animate__zoomOut");

})
//code for opening about mac 
//code for closing and opening Finder App
$('#about_mac_btn').click(function () {
    OPEN_APP_COUNTER++;
    $('#about_mac').removeClass("animate__zoomOut");
    $('#about_mac').addClass("animate__zoomIn");
    $('#about_mac').css("display", "block");

})
$('#about_mac .up_frame .up-wrapper .close').click(function () {
    OPEN_APP_COUNTER--;
    $('#about_mac').addClass("animate__zoomOut");

})
$('#facetime-app').click(function () {
    OPEN_APP_COUNTER++;
    $('#facetime').removeClass("animate__zoomOut");
    $('#facetime').addClass("animate__zoomIn");
    $('#facetime').css("display", "block");
    var video = document.getElementById('video');
    if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
        // Not adding `{ audio: true }` since we only want video now
        navigator.mediaDevices.getUserMedia({ video: true, }).then(function (stream) {
            //video.src = window.URL.createObjectURL(stream);
            video.srcObject = stream;
            video.play();
        });
    }
})
$('#facetime .up-frame .close').click(function () {
    $('#facetime').addClass("animate__zoomOut");
    OPEN_APP_COUNTER--;
})
var isOn = true;
let voff = document.querySelector("#v-off");
$('#video-ctrl').click(function () {
    if (isOn) {
        $('#video').fadeToggle(450);
        voff.src = "Icons/video-on.png";
        isOn = false;
    }
    else {
        $('#video').fadeToggle(450);
        voff.src = "Icons/cam.png";
    }
})
setInterval(() => {
    console.log(OPEN_APP_COUNTER);

}, 100)

document.getElementById("widget-btn").addEventListener("mouseover", mouseOver);
function mouseOver(){
    var widget_pen=document.getElementById("widgets_bar");
    widget_pen.style.right="0";
}
document.getElementById("widgets_bar").addEventListener("mouseout", mouseOut);

function mouseOut(){
    var widget_pen=document.getElementById("widgets_bar");
    widget_pen.style.right="-100%";
}

// Code for opening and closing Calender App
$('#calender-app').click(function () {
    OPEN_APP_COUNTER++;
    $('#calender').removeClass("animate__zoomOut");
    $('#calender').addClass("animate__zoomIn");
    $('#calender').css("display", "block");

})

$('#calender .up-frame .close').click(function () {
    $('#calender').addClass("animate__zoomOut");
    OPEN_APP_COUNTER--;
})