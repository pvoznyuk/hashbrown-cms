'use strict';

let Schema = require('./Schema');

/**
 * Schema for content nodes
 *
 * @memberof HashBrown.Common.Models
 */
class ContentSchema extends Schema {
    constructor(properties) {
        super(ContentSchema.paramsCheck(properties));
    }
    
    structure() {
        super.structure();

        this.def(String, 'defaultTabId');
        this.def(Object, 'tabs', {});
        this.def(Object, 'fields', { properties: {} });
        this.def(Array, 'allowedChildSchemas', []);

        this.name = 'New content schema';
        this.type = 'content';
    }
    
    /**
     * Checks the format of the params
     *
     * @params {Object} params
     *
     * @returns {Object} Params
     */
    static paramsCheck(params) {
        if(!params.fields) { params.fields = {}; }
        if(!params.fields.properties) { params.fields.properties = {}; }

        return super.paramsCheck(params);
    }

    /**
     * Checks whether a tab is the default one
     *
     * @param {String} tabId
     *
     * @returns {Boolean} Is the tab default
     */
    isDefaultTab(tabId) {
        return (!this.defaultTabId && tabId === 'meta') || this.defaultTabId === tabId;
    }
}

module.exports = ContentSchema;
