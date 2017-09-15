'use strict';

/**
 * Scroll behaviour
 */
window.onscroll = function(e) {
    var STICKY_NAV_THRESHOLD = 10;

    document.body.classList.toggle('fixed-nav', document.body.scrollTop > STICKY_NAV_THRESHOLD);
};
