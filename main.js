function chngPg() {
    window.location = 'portfolio.html'
}

//  animation scrolling
window.onscroll = function() {
    var nav = document.getElementById('details');
    if ( window.pageYOffset > 50 ) {
        nav.classList.add("details1");
        nav.classList.remove("fullscreenback");
    }
    if ( window.pageYOffset < 60 ) {
        nav.classList.add("fullscreenback");
    }
}
