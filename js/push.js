// result contains any message sent from the plugin call
function successHandler (result) {
	$("#app-status-ul").append('<li>result = '+result+ '</li>');
}

// result contains any error description text returned from the plugin call
function errorHandler (error) {
	$("#app-status-ul").append('<li>error = '+error+ '</li>');
}


function tokenHandler (result) {
    // Your iOS push server needs to know the token before it can push to this device
    // here is where you might want to send it the token for later use.
     $("#app-status-ul").append('<li>device token = '+result+ '</li>');
     $('#regid').html(result);
}



function onNotificationAPN(event) {
    if (event.alert) {
        navigator.notification.alert(event.alert);
    }

    if (event.sound) {
        var snd = new Media(event.sound);
        snd.play();
    }

    if (event.badge) {
        pushNotification.setApplicationIconBadgeNumber(successHandler, event.badge);
    }
}

// Android
        function onNotificationGCM(e) {
        	console.log(e.soundname);
            $("#app-status-ul").append('<li>EVENT -> RECEIVED:' + e.event + '</li>');

            switch( e.event )
            {
                case 'registered':
                if ( e.regid.length > 0 )
                {
                    $("#app-status-ul").append('<li>REGISTERED -> REGID:' + e.regid + "</li>");
                    // Your GCM push server needs to know the regID before it can push to this device
                    // here is where you might want to send it the regID for later use.
                    console.log("regID = " + e.regid);
                    $('#regid').html(e.regid);
                }
                break;

                case 'message':
                    // if this flag is set, this notification happened while we were in the foreground.
                    // you might want to play a sound to get the user's attention, throw up a dialog, etc.
                    if (e.foreground)
                    {
                        $("#app-status-ul").append('<li>--INLINE NOTIFICATION--' + '</li>');

                        // if the notification contains a soundname, play it.
                        var my_media = new Media("/android_asset/www/"+e.soundname);
                        my_media.play();
                    }
                    else
                    {   // otherwise we were launched because the user touched a notification in the notification tray.
                        if (e.coldstart)
                            $("#app-status-ul").append('<li>--COLDSTART NOTIFICATION--' + '</li>');
                        else
                        $("#app-status-ul").append('<li>--BACKGROUND NOTIFICATION--' + '</li>');
                    }

                    $("#app-status-ul").append('<li>MESSAGE -> MSG: ' + e.payload.message + '</li>');
                    $("#app-status-ul").append('<li>MESSAGE -> MSGCNT: ' + e.payload.msgcnt + '</li>');
                break;

                case 'error':
                    $("#app-status-ul").append('<li>ERROR -> MSG:' + e.msg + '</li>');
                break;

                default:
                    $("#app-status-ul").append('<li>EVENT -> Unknown, an event was received and we do not know what it is</li>');
                break;
            }
        }