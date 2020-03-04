
window.addEventListener('popstate', function (e) {
    console.log(e);
    if (e.state) {
        page(e.state.pageName);
    }
    else {
        page('home');
    }
}); 