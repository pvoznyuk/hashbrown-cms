'use strict';

/**
 * Scroll behaviour
 */
window.onscroll = function(e) {
    var scrollTop = document.body.scrollTop || document.documentElement.scrollTop;

    document.body.classList.toggle('fixed-nav', scrollTop > 10);
};
