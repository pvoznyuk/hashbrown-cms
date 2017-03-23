/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	__webpack_require__(1);

	var navbar = document.querySelector('nav');
	var allSections = [].slice.call(document.querySelectorAll('section'));

	/**
	 * Produces a generic modal
	 *
	 * @returns HTMLElement Modal
	 */
	function modal(headerContent, bodyContent, footerContent) {
	    // Render elements
	    var modalBackdrop = document.createElement('div');
	    modalBackdrop.className = 'modal-backdrop';

	    var modal = document.createElement('div');
	    modal.className = 'modal';

	    var modalContent = document.createElement('div');
	    modalContent.className = 'modal-content';

	    var modalHeader = document.createElement('div');
	    modalHeader.className = 'modal-header';

	    var modalBody = document.createElement('div');
	    modalBody.className = 'modal-body';

	    var modalFooter = document.createElement('div');
	    modalFooter.className = 'modal-footer';

	    // Set up event listeners
	    modalBackdrop.addEventListener('click', function () {
	        modalBackdrop.classList.toggle('active', false);

	        setTimeout(function () {
	            if (modalBackdrop && modalBackdrop.parentElement) {
	                modalBackdrop.parentElement.removeChild(modalBackdrop);
	            }
	        }, 500);
	    });

	    // Parent elements
	    modalBackdrop.appendChild(modal);
	    modal.appendChild(modalContent);
	    modalContent.appendChild(modalHeader);
	    modalContent.appendChild(modalBody);
	    modalContent.appendChild(modalFooter);
	    document.body.appendChild(modalBackdrop);

	    // Insert custom content
	    if (headerContent) {
	        if (typeof headerContent === 'string') {
	            modalHeader.innerHTML = headerContent;
	        } else {
	            modalHeader.appendChild(headerContent);
	        }
	    }

	    if (bodyContent) {
	        if (typeof bodyContent === 'string') {
	            modalBody.innerHTML = bodyContent;
	        } else {
	            modalBody.appendChild(bodyContent);
	        }
	    }

	    if (footerContent) {
	        if (typeof footerContent === 'string') {
	            modalFooter.innerHTML = footerContent;
	        } else {
	            modalFooter.appendChild(footerContent);
	        }
	    }

	    // Wait a while and set active class
	    setTimeout(function () {
	        modalBackdrop.classList.toggle('active', true);
	    }, 50);

	    return modal;
	}

	/**
	 * Produces a modal for images
	 *
	 * @param {HTMLElement} img
	 */
	function imageModal(img) {
	    var imgElement = document.createElement('img');

	    imgElement.setAttribute('src', img.getAttribute('src'));

	    modal(null, imgElement, null);
	}

	/**
	 * Sets click events on all images inside sections and paragraphs
	 */
	function setImageEvents() {
	    var images = document.querySelectorAll('section .container p img');

	    var _loop = function _loop(i) {
	        var image = images[i];

	        image.addEventListener('click', function () {
	            imageModal(image);
	        });
	    };

	    for (var i = 0; i < images.length; i++) {
	        _loop(i);
	    }
	}

	// Initial calls
	setImageEvents();

/***/ },
/* 1 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ }
/******/ ]);