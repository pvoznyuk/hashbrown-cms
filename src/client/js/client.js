require('../sass/client.scss');

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
            if(modalBackdrop && modalBackdrop.parentElement) {
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
    if(headerContent) {
        if(typeof headerContent === 'string') {
            modalHeader.innerHTML = headerContent;
        } else {
            modalHeader.appendChild(headerContent);
        }
    }

    if(bodyContent) {
        if(typeof bodyContent === 'string') {
            modalBody.innerHTML = bodyContent;
        } else {
            modalBody.appendChild(bodyContent);
        }
    }

    if(footerContent) {
        if(typeof footerContent === 'string') {
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
 * Sets click events on all images inside sections and paragraphs
 */
function setImageEvents() {
    let images = document.querySelectorAll('section .container p img');

    for(let i = 0; i < images.length; i++) {
        let image = images[i];

        image.addEventListener('click', () => {
            imageModal(image);
        });
    }
}

// Initial calls
setImageEvents();
