'use strict';

/**
 * Scroll behaviour
 */
window.onscroll = function(e) {
    var scrollTop = document.body.scrollTop || document.documentElement.scrollTop;

    document.body.classList.toggle('fixed-nav', scrollTop > 10);
};

/**
 * News feed
 */
function initNewsFeed() {
    var newsFeed = document.querySelector('section.news-feed');

    if(!newsFeed) { return; }

    var request = new XMLHttpRequest();
    request.open('GET', 'https://www.reddit.com/r/HashBrownCMS/new/.json?count=20', true);

    request.onload = function() {
        if (request.status >= 200 && request.status < 400) {
            var data = JSON.parse(request.responseText);
            var items = data.data.children;

            for(var i = 0; i < items.length; i++) {
                var permalink = items[i].data.permalink;
                var images = items[i].data.preview.images;
                var url = items[i].data.url;
                var title = items[i].data.title;

                console.log(items[i].data);
            }
            
        } else {
            throw new Error(request.responseText);
        }
    };

    request.onerror = function(e) {
        throw e;
    };

    request.send(); 
}

initNewsFeed();
