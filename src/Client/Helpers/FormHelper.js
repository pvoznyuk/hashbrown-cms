'use strict';

/**
 * The client-side forms helper
 */
class FormHelper {
    /**
     * Starts a tour of the Forms section
     */
    static startTour() {
        if(location.hash.indexOf('forms/') < 0) {
            location.hash = '/forms/';
        }
       
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve();
            }, 100);
        })
        .then(() => {
            return UI.highlight('.navbar-main__tab[data-route="/forms/"]', 'This the Forms section, where you define how end users can submit data to HashBrown.', 'right', 'next')
        })
        .then(() => {
            return UI.highlight('.navbar-main__pane[data-route="/forms/"]', 'Here you will find all of your Forms. You can right click here to create a new Form.', 'right', 'next');
        })
        .then(() => {
            let editor = document.querySelector('.editor--form');

            if(!editor) {
                return UI.highlight('.page--environment__space--editor', 'This is where the Form editor will be when you click a Form.', 'left', 'ok');
            }
                
            return UI.highlight('.editor--form', 'This is the Form editor, where you edit Forms.', 'left', 'ok');
        });
    }
}

module.exports = FormHelper;
