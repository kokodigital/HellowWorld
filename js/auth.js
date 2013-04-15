//////////////////////////
//
// Authentication
// See "Logging the user in" on https://developers.facebook.com/mobile
//
//////////////////////////

var user = [];

var permissions = ['user_status', 'publish_checkins', 'user_likes'];

//Detect when Facebook tells us that the user's session has been returned
function authUser() {
  FB.Event.subscribe('auth.statusChange', handleStatusChange);
}

// Handle status changes
function handleStatusChange(session) {
	
    console.log('Got the user\'s session: ' + JSON.stringify(session));
 
    
    if (session.authResponse) {
    	   var token = session.authResponse.accessToken;
        //document.body.className = 'connected';
        
        //Fetch user's id, name, and picture
        FB.api('/me', {
          fields: 'name, picture'
        },
        function(response) {
          if (!response.error) {
            user = response;
    	 	$('#fblogin').css('display','none');
    	    $('#fbloginout').css('display','inline');
            
            console.log('Got the user\'s name and picture: ' + JSON.stringify(response));
            
          //Update display of user name and picture
            if ($('#user-name')) {
              $('#user-name').html(user.name);
            }
            if ($('#user-picture')) {
              $('#user-picture').attr('src',user.picture.data.url);
            }
            
            if(token){
            	$('#user-token').html(token);
            }
            
		
          } else {
        		$('#fblogin').css('display','inline');
        	    $('#fbloginout').css('display','none');
            console.log('Error getting user info: ' + JSON.stringify(response.error));
            // Check for errors due to app being unininstalled

		   if (response.error.error_subcode && response.error.error_subcode == "458") {
              setTimeout(function() {
                alert("The app was removed. Please log in again.");
              }, 0);              
            } 
            logout();         
          }
    
        });
    }
    else  {
    	$('#fblogin').css('display','inline');
	    $('#fbloginout').css('display','none');
    }
}

//Check the current permissions to set the page elements.
//Pass back a flag to check for a specific permission, to
//handle the cancel detection flow.
function checkUserPermissions(permissionToCheck) {
  var permissionsFQLQuery = 'SELECT ' + permissions.join() + ' FROM permissions WHERE uid = me()';
  FB.api('/fql', { q: permissionsFQLQuery },
    function(response) {
      if (document.body.className != 'not_connected') {
          for (var i = 0; i < permissions.length; i++) {
            var perm = permissions[i];
            var enabledElementName = $('#enabled_perm_' + perm);
            var disabledElementName = $('#disabled_perm_' + perm);
            if (response.data[0][perm] == 1) {
              enabledElementName.css(display,'block');
              disabledElementName.css(display,'none');
            } else {
              enabledElementName.css(display,'none');
              disabledElementName.css(display,'block');
            }
          }
          if (permissionToCheck) {
            if (response.data[0][permissionToCheck] == 1) {
              setAction("The '" + permissionToCheck + "' permission has been granted.", false);
              setTimeout('clearAction();', 2000);
              return true;
            } else {
              setAction('You need to grant the ' + permissionToCheck + ' permission before using this functionality.', false);
              setTimeout('clearAction();', 2000);
            } return false;
          }
          return true;
      }
  });
}

//Prompt the user to login and ask for the 'email' permission
function promptLogin() {
try {	
  FB.login(null, {scope: 'email'});
  } catch(e){
	console.log(e); 
  }
  
}

//This will prompt the user to grant you acess to a given permission
function promptPermission(permission) {
  FB.login(function(response) {
    if (response.authResponse) {
      checkUserPermissions(permission)
    }
  }, {scope: permission});
}

//See https://developers.facebook.com/docs/reference/api/user/#permissions
function uninstallApp() {
  FB.api('/me/permissions', 'DELETE',
    function(response) {
      //window.location.reload();
      // For may instead call logout to clear
      // cache data, ex: using in a PhoneGap app
      console.log('APP Uninstalled');
      logout();
  });
}

//See https://developers.facebook.com/docs/reference/javascript/FB.logout/
function logout() {
  FB.logout(function(response) {
    window.location.reload();
  });
}