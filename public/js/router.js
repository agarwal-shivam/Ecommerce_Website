
window.addEventListener('popstate', function (e) {
    console.log(e);
    if (e.state) {
        page(e.state.pageName);
    }
    else {
        page('home');
    }
});
function onSignIn(googleUser) {
    var profile = googleUser.getBasicProfile();
    document.getElementById('name').innerHTML = " HEY " + profile.getName() + "   " + "<img src='" + profile.getImageUrl() + "' width='30px' height='30px' style='border-radius:50%' title='" + profile.getEmail() + "' />";
    document.getElementById('signout').innerHTML = "<div class='text-red' onclick='signOut()' title='" + profile.getEmail() + "''>SignOut</div>"
}
function signOut() {
    var auth2 = gapi.auth2.getAuthInstance();
    auth2.signOut().then(function () {
        document.getElementById('name').innerHTML = '';
        document.getElementById('signout').innerHTML = '';
    });
}