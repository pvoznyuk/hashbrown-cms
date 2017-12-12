'use strict';

/**
 * A helper class for Template resources
 *
 * @memberof HashBrown.Client.Helpers
 */
class TemplateHelper {
    /**
     * Gets all templates
     *
     * @param {String} type
     *
     * @returns {Array} Templates
     */
    static getAllTemplates(type) {
        if(!type) { return resources.templates; }

        let templates = [];

        for(let template of resources.templates) {
            if(template.type !== type) { continue; }

            templates.push(template);
        }

        return templates;
    }

    /**
     * Gets a template by id
     *
     * @param {String} type
     * @param {String} id
     *
     * @returns {Template} Template
     */
    static getTemplate(type, id) {
        for(let template of resources.templates) {
            if(template.type !== type || template.id !== id) { continue; }

            return template;
        }

        return null;
    }

    /**
     * Starts a tour of the Template section
     */
    static startTour() {
        if(location.hash.indexOf('templates/') < 0) {
            location.hash = '/templates/';
        }
       
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve();
            }, 100);
        })
        .then(() => {
            return UI.highlight('.navbar-main__tab[data-route="/templates/"]', 'This the Templates section, where the you define how your Content looks on your website.', 'right', 'next')
        })
        .then(() => {
            return UI.highlight('.navbar-main__pane[data-route="/templates/"]', 'Here you will find all of your Templates, if you have set up a Connection as the Template provider. You can right click here to create a new Template.', 'right', 'next');
        })
        .then(() => {
            let editor = document.querySelector('.editor--template');

            if(!editor) {
                return UI.highlight('.page--environment__space--editor', 'This is where the Template editor will be when you click a Template.', 'left', 'ok');
            }
                
            return UI.highlight('.editor--template', 'This is the Template editor, where you edit Templates.', 'left', 'ok');
        });
    }
}

module.exports = TemplateHelper;
