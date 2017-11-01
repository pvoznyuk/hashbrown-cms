'use strict';

/**
 * Scroll behaviour
 */
window.onscroll = function(e) {
    var scrollTop = document.body.scrollTop || document.documentElement.scrollTop;

    document.body.classList.toggle('fixed-nav', scrollTop > 10);
};

/**
 * Get JSON
 */
function getJson(url) {
    return new Promise(function(resolve, reject) {
        var request = new XMLHttpRequest();
        request.open('GET', url, true);

        request.onload = function() {
            if (request.status >= 200 && request.status < 400) {
                try {
                    var data = JSON.parse(request.responseText);

                    resolve(data);

                } catch(e) {
                    reject(e);
                }
                    

            } else {
                reject(new Error(request.responseText));
            }
        };

        request.onerror = function(e) {
            reject(e);
        };

        request.send(); 
    });
}

/**
 * News feed
 */
function initNewsFeed() {
    var newsFeed = document.querySelector('.section--news-feed .container');

    if(!newsFeed) { return; }

    console.log('[News feed] Fetching posts...');

    var fetchedItems = {};

    getJson('https://www.reddit.com/r/HashBrownCMS/new/.json?count=20')
    .then(function(data) {
        var items = data.data.children;

        for(var i = 0; i < items.length; i++) {
            var item = items[i].data;

            if(item.author !== 'jzapp') { continue; }

            fetchedItems[item.id] = {
                permalink: item.permalink,
                image: item.preview && item.preview.images && item.preview.images.length > 0 && item.preview.images[0].source ? item.preview.images[0].source.url : null,
                url: item.url,
                title: item.title,
                body: item.body
            };
        }
        
        console.log('[News feed] Fetching comments...');

        if(!item.body) {
            return getJson('https://www.reddit.com/r/HashBrownCMS/comments/.json?count=100');
        }

        return Promise.resolve();
    })
    .then(function(data) {
        if(!data) { return Promise.resolve(); }

        var items = data.data.children;

        for(var i = 0; i < items.length; i++) {
            var item = items[i].data;
            var parentId = item.parent_id.replace(/t[0-9]_/, '');

            if(
                !fetchedItems[parentId] ||
                fetchedItems[parentId].body ||
                item.author !== 'jzapp'
            ) { continue; }

            fetchedItems[parentId].body = item.body;
        }

        return Promise.resolve();
    })
    .then(function() {
        console.log('[News feed] Populating DOM...');

        for(var i in fetchedItems) {
            var fetchedItem = fetchedItems[i];

            newsFeed.innerHTML += `
                <a target="_blank" href="${ fetchedItem.url || fetchedItem.permalink }" class="section--news-feed__item">
                    <div class="section--news-feed__item__media">
                        <img class="section--news-feed__item__media__image" src="${ fetchedItem.image }">
                    </div>
                    <div class="section--news-feed__item__text">
                        <h3 class="section--news-feed__item__text__title">${ fetchedItem.title }</h3>
                        
                        <p>${ fetchedItem.body }</p>
                    </div>
                </a>
            `;
        }
    })
    .catch(function(e) {
        console.log(e);
    });
}

initNewsFeed();
