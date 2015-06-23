// For an introduction to the Blank template, see the following documentation:
// http://go.microsoft.com/fwlink/?LinkID=397704
// To debug code on page load in Ripple or on Android devices/emulators: launch your app, set breakpoints, 
// and then run "window.location.reload()" in the JavaScript Console.
(function () {
    "use strict";

    document.addEventListener( 'deviceready', onDeviceReady.bind( this ), false );

    function onDeviceReady() {
        // Handle the Cordova pause and resume events
        document.addEventListener( 'pause', onPause.bind( this ), false );
        document.addEventListener( 'resume', onResume.bind( this ), false );
        
        // TODO: Cordova has been loaded. Perform any initialization that requires Cordova here.
    };

    function onPause() {
        // TODO: This application has been suspended. Save application state here.
    };

    function onResume() {
        // TODO: This application has been reactivated. Restore application state here.
    };

    

})();

var isSecondClick = false;
var lastClickTime;

var MaxSpeed = 10000;

function bodyClick() {
    if (!isSecondClick) {
        //this is first click
        var d = new Date();
        lastClickTime = d.getTime();

        isSecondClick = true;
    }
    else {
        //This is second click
        var d = new Date();
        var reaction = d.getTime() - lastClickTime;

        if (reaction < MaxSpeed)
            MaxSpeed = reaction;

        // 299792458 m / s
        var lightSpeed = (299792458 * (reaction / 1000)) * 0.000621371;
        lightSpeed = Math.round(lightSpeed);

        var earthTimes = lightSpeed / 24902;
        earthTimes = Math.round((earthTimes*100))/100;


        $("#resultSpan").text(reaction);
        $("#maxSpan").text(MaxSpeed);
        $("#lightSpan").text(lightSpeed);
        $("#earthSpan").text(earthTimes);


        isSecondClick = false;
    }
}
