function showNavigation() {
    var ul = document.querySelector('#nav-left ul');
    var icon = document.querySelector('a#menu-button i');
    if (ul.style.display !== 'block') {
        icon.className = 'fa fa-close';
        // ul
        ul.style.display = 'block';
        ul.style.position = 'absolute';
        ul.style.top = '9%';
        ul.style.zIndex = '2';
        ul.style.width = '100%';
        ul.style.backgroundColor = '#3A2D32';
        //li
        var li = document.querySelectorAll('header div nav div#nav-left ul > li');
        li.forEach(function(item) {
            item.style.display = 'block';
            item.style.padding = '4px 22px 0 22px';
        });
        // li#home
        var home = document.querySelector('#nav-left ul li#home');
        home.style.paddingTop = '4px';
        home.style.paddingBottom = '4px';
        //other
        document.querySelector('#nav-left ul li:first-child').style.margin = '0';
        document.querySelector('#nav-left ul li:last-child').style.paddingBottom = '4px';
        
        //customize dropdown-content
        var content = document.querySelectorAll('#nav-left ul li.dropdown .dropdown-content');
        content.forEach(function(item) {
            item.style.left = '100%';
            item.style.top = '-15%';
        });
        
    } else {
        icon.className = 'fa fa-navicon';
        ul.style.display = 'none';
    }
}