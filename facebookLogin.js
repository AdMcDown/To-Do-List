   //all my things I'll grab in document
   //note this was mostly done by walking through youtube videos and i modified things were i needed too
   //simple not good at api stuff just yet
   let login = document.getElementById('fb-login');
   let logot = document.getElementById('logout');
   let welcome = document.getElementById('welcome');

   //loads the SDK
   window.fbAsyncInit = function () {
       FB.init({
           appId: '979549989159351',
           autoLogAppEvents: true,
           xfbml: true,
           version: 'v7.0'
       });
       FB.getLoginStatus(function (response) {
           statusChangeCallback(response);
       });
   };

   (function (d, s, id) {
       var js, fjs = d.getElementsByTagName(s)[0];
       if (d.getElementById(id)) {
           return;
       }
       js = d.createElement(s);
       js.id = id;
       js.src = "https://connect.facebook.net/en_US/sdk.js";
       fjs.parentNode.insertBefore(js, fjs);
   }(document, 'script', 'facebook-jssdk'));

   function statusChangeCallback(res) {
       if (res.status == 'connected') {
           console.log('Logged in and authenticated');
           log(true);
           info();
       } else {
           console.log('Not authenticated');
           log(false);
       }
   }

   //pulls a login app for loging into facebook
   function checkLoginState() {
       FB.getLoginStatus(function (response) {
           statusChangeCallback(response);
       });
   }

   function log(isLoggedIn) {
       if (isLoggedIn) {
           logot.setAttribute('style', 'display: block;');
           login.setAttribute('style', 'display: none;');
       } else {
           logot.setAttribute('style', 'display: none;');
           login.setAttribute('style', 'display: block; color: white; text-decoration: none;');
           welcome.textContent = 'Welcome';
       }
   }

   function info() {
       FB.api('/me?field=name', function (response) {
           if (response && !response.error) {
               welcome.textContent = 'Hello ' + response.name;
               console.log(response.name);
           }
       });
   }

   function logout() {
       FB.logout(function (response) {
           log(false);
       });
   }