(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

let navbar = document.querySelector('nav');
let allSections = [].slice.call(document.querySelectorAll('section'));

/**
 * Produces a generic modal
 *
 * @returns HTMLElement Modal
 */
function modal(headerContent, bodyContent, footerContent) {
    // Render elements
    let modalBackdrop = document.createElement('div');
    modalBackdrop.className = 'modal-backdrop';

    let modal = document.createElement('div');
    modal.className = 'modal';

    let modalContent = document.createElement('div');
    modalContent.className = 'modal-content';

    let modalHeader = document.createElement('div');
    modalHeader.className = 'modal-header';

    let modalBody = document.createElement('div');
    modalBody.className = 'modal-body';

    let modalFooter = document.createElement('div');
    modalFooter.className = 'modal-footer';

    // Set up event listeners
    modalBackdrop.addEventListener('click', () => {
        modalBackdrop.classList.toggle('active', false);

        setTimeout(() => {
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
    setTimeout(() => {
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
    let imgElement = document.createElement('img');

    imgElement.setAttribute('src', img.getAttribute('src'));

    modal(null, imgElement, null);
}

/**
 * Checks which sections the user is currently at
 */
function checkScroll() {
    let isOverLightSection = true;
    let scrollPos = document.body.scrollTop;

    for (let section of allSections) {
        // Found section
        if (scrollPos >= section.offsetTop && scrollPos < section.offsetTop + section.clientHeight) {
            isOverLightSection = !section.classList.contains('dark');
            break;
        }
    }

    navbar.classList.toggle('darken', isOverLightSection);
}

/**
 * Sets click events on all images inside sections and paragraphs
 */
function setImageEvents() {
    let images = document.querySelectorAll('section .container p img');

    for (let i = 0; i < images.length; i++) {
        let image = images[i];

        image.addEventListener('click', () => {
            imageModal(image);
        });
    }
}

// Event listeners
window.addEventListener('scroll', checkScroll);

// Initial calls
checkScroll();
setImageEvents();

},{}]},{},[1])


//# sourceMappingURL=maps/client.js.map
