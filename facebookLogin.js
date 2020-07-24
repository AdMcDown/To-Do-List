   //note this was mostly done by walking through youtube videos and i modified things were i needed too
   //simple not good at api stuff just yet

   //all my things I'll grab in document
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

   //idk and i dont wanna know, given by facebook to set up logging in
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

   //makes sure loggin is successful then continues to run all functions for the loggin
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

   //displays login, logout and welcome at appropriate times, meaning if your logged in or not
   function log(isLoggedIn) {
       if (isLoggedIn) {
           logot.setAttribute('style', 'display: block; color: white; text-decoration: none;');
           login.setAttribute('style', 'display: none;');
       } else {
           logot.setAttribute('style', 'display: none;');
           login.setAttribute('style', 'display: block;');
           welcome.textContent = 'Welcome';
       }
   }

   function info() {
       FB.api('/me?field=name', function (response) {
           //grabs the response and get the name value to set to the welcome screen
           if (response && !response.error) {
               welcome.textContent = 'Hello ' + response.name;
           }
       });
   }

   function logout() {
       //facebooks logout function, simple easy
       FB.logout(function (response) {
           log(false);
       });
   }

   //ok so for refrence I used this guys youtube video https://www.youtube.com/watch?v=gXux8b3wcYw&t=1984s to basiclly make this api possible
   //of course I not only modified mine here and there but had to use some other random resources or own knowledge to figure out some parts
   //this is because his video is a bit dated and the websites and stuff used are all simular but have different ways of operating them
   //Lastly you able to signon to your facebook however it only displays you name, I would have loved to do profile pic and diff date
   //but that all comes with alot of submit paper work as stuff to get access to it and I am just going to go to that much trouble
   //at this time. might fix it up better later for a portfolio but we will see, comes with lots of guidlines and bounders and uuughhhh