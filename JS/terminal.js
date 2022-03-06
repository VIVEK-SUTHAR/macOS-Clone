
// import Typed from 'typed.js';


// alert("key pressed");
var value = 0;
var enter_key = 13;

$("#terminal_cmd").on('keyup', function (event) {
    if (event.keyCode === 13) {
        var typed6 = new Typed('.output', {
            strings: ['npm install ui@macos...^1000\n `<br/>installing ui@macos.....` ^1000\n `<br/>Fetching from node runtime ` `<br/>` `<br/>Progress : ##` `<br/>Progress : ####` `<br/>Progress : ########` `<br/>Progress : ##################``<br/>Progress : #################################` `<br/>Progress : ###########################` `<br/>Progress : #################################################################` `<br/>Process terminated due to error 907 :( ` `<br/> To Show Output Log ,run -log -a ` `<br/>Restarting the [process-9011] please wait some time `'],
            typeSpeed: 10,
            startDelay: 10,
            backSpeed: 0,
            cursorChar: '_',
            loop: false
        });
    }


});


