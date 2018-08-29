function showNavigation() {
    var ul = document.querySelector('#nav-left ul');
    if (ul.style.display === 'none') {
        // ul
        ul.style.display = 'block';
        ul.style.position = 'absolute';
        ul.style.top = '9%';
        ul.style.zIndex = '2';
        ul.style.minWidth = '140px';
        ul.style.backgroundColor = '#3A2D32';
        //li
        var _li = document.querySelectorAll('header div nav div#nav-left ul > li');
        _li.forEach(function(li) {
            li.style.display = 'block';
            li.style.padding = '10px 22px';
        });
        // li#home
        var home = document.querySelector('#nav-left ul li#home');
        home.style.paddingTop = '12px';
        home.style.paddingBottom = '12px';
        //other
        document.querySelector('#nav-left ul li:first-child').style.margin = '0';
        document.querySelector('#nav-left ul li:last-child').style.paddingBottom = '20px';
        // dropdown-content
        var content = document.querySelector('#nav-left ul li.dropdown .dropdown-content');
        content.style.left = '100%';
        content.top = '-15%';
    } else {
        ul.style.display = 'none';
    }
}