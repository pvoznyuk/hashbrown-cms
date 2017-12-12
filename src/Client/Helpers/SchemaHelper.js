'use strict';

const ContentSchema = require('Common/Models/ContentSchema');
const FieldSchema = require('Common/Models/FieldSchema');

const RequestHelper = require('Client/Helpers/RequestHelper');

const SchemaHelperCommon = require('Common/Helpers/SchemaHelper');

/**
 * The client side Schema helper
 *
 * @memberof HashBrown.Client.Helpers
 */
class SchemaHelper extends SchemaHelperCommon {
    /**
     * Gets a Schema with all parent fields
     *
     * @param {String} id
     *
     * @returns {Promise} Schema with parent fields
     */
    static getSchemaWithParentFields(id) {
        if(!id) {
            return Promise.resolve(null);
        }
        
        return RequestHelper.request('get', 'schemas/' + id + '/?withParentFields=true')
        .then((schema) => {
            return Promise.resolve(SchemaHelper.getModel(schema));
        });
    }
    
    /**
     * Gets a FieldSchema with all parent configs
     *
     * @param {String} id
     *
     * @returns {FieldSchema} Compiled FieldSchema
     */
    static getFieldSchemaWithParentConfigs(id) {
        let fieldSchema = this.getSchemaByIdSync(id);

        if(fieldSchema) {
            let nextSchema = this.getSchemaByIdSync(fieldSchema.parentSchemaId);
            let compiledSchema = new FieldSchema(fieldSchema.getObject());
           
            while(nextSchema) {
                compiledSchema.appendConfig(nextSchema.config);

                nextSchema = this.getSchemaByIdSync(nextSchema.parentSchemaId);
            }

            return compiledSchema;
        }
    }

    /**
     * Gets a Schema by id
     *
     * @param {String} id
     *
     * @return {Promise} Promise
     */
    static getSchemaById(id) {
        return RequestHelper.request('get', 'schemas/' + id)
        .then((schema) => {
            return Promise.resolve(this.getModel(schema));
        });
    }
   
    /**
     * Gets all Schemas by type (sync)
     *
     * @param {String} type
     *
     * @returns {Array} All Schemas
     */
    static getAllSchemasSync(type) {
        if(!type) { return resources.schemas; }

        return resources.schemas.filter((schema) => {
            if(schema.id == type + 'Base') { return false; }

            return schema.type === type;
        });
    }

    /**
     * Gets a Schema by id (sync)
     *
     * @param {String} id
     *
     * @return {Promise} Promise
     */
    static getSchemaByIdSync(id) {
        for(let i in resources.schemas) {
            let schema = resources.schemas[i];

            if(schema.id == id) {
                if(schema instanceof ContentSchema || schema instanceof FieldSchema) {
                    return schema;
                }

                return this.getModel(schema);
            }
        }
    }
    
    /**
     * Starts a tour of the Schemas section
     */
    static startTour() {
        if(location.hash.indexOf('schemas/') < 0) {
            location.hash = '/schemas/';
        }
       
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve();
            }, 100);
        })
        .then(() => {
            return UI.highlight('.navbar-main__tab[data-route="/schemas/"]', 'This the Schemas section, where the you define how your Content is built.', 'right', 'next')
        })
        .then(() => {
            return UI.highlight('.navbar-main__pane[data-route="/schemas/"]', 'Here you will find all of your Schemas. You can right click here to create a new Schema.', 'right', 'next');
        })
        .then(() => {
            let editor = document.querySelector('.editor--schema');

            if(!editor) {
                return UI.highlight('.page--environment__space--editor', 'This is where the Schema editor will be when you click a Schema.', 'left', 'ok');
            }
                
            return UI.highlight('.editor--schema', 'This is the Schema editor, where you edit Schemas.', 'left', 'ok');
        });
    }
}

module.exports = SchemaHelper;
