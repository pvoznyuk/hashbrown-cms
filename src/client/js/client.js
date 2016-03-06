'use strict';

// Libraries
require('putaitu.js');
window.$ = window.jQuery = require('jquery');
require('bootstrap');

// Views
let NavbarMain = require('./views/NavbarMain');
let JSONEditor = require('./views/JSONEditor');

// -----------
// Persistent views
// -----------
let navbarMain = new NavbarMain();

// -----------
// Routes
// -----------
// Page edit
Router.route('/jsoneditor/pages/:id', function() {
    let jsonEditor = new JSONEditor({
        modelUrl: '/api/content/page/' + this.id
    });
    
    $('.workspace').html(jsonEditor.$element);
});

// Schema edit
Router.route('/jsoneditor/schemas/:id', function() {
    let jsonEditor = new JSONEditor({
        modelUrl: '/api/schemas/' + this.id
    });
    
    $('.workspace').html(jsonEditor.$element);
});

Router.init();
