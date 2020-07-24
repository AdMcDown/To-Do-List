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
    } else {
        console.log('Not authenticated');
    }
}