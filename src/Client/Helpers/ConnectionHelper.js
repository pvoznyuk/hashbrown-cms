'use strict';

const ConnectionHelperCommon = require('Common/Helpers/ConnectionHelper');
const Connection = require('Client/Models/Connection');
const ProjectHelper = require('Client/Helpers/ProjectHelper');
const RequestHelper = require('Client/Helpers/RequestHelper');

/**
 * The client side connection helper
 *
 * @memberof HashBrown.Client.Helpers
 */
class ConnectionHelper extends ConnectionHelperCommon {
    /**
     * Gets all connections
     *
     * @return {Promise} Array of Connections
     */
    static getAllConnections() {
        return Promise.resolve(resources.connections);
    }
    
    /**
     * Gets a Connection by id (sync)
     *
     * @param {string} id
     *
     * @return {Promise} Connection
     */
    static getConnectionByIdSync(id) {
        checkParam(id, 'id', String);

        for(let i in resources.connections) {
            let connection = resources.connections[i];

            if(connection.id == id) {
                return connection;
            }
        }
    }
    
    /**
     * Gets a Connection by id
     *
     * @param {String} project
     * @param {String} environment
     * @param {String} id
     *
     * @return {Promise(Connection)} promise
     */
    static getConnectionById(project, environment, id) {
        checkParam(project, 'project', String);
        checkParam(environment, 'environment', String);
        checkParam(id, 'id', String);

        for(let i in resources.connections) {
            let connection = resources.connections[i];

            if(connection.id == id) {
                return Promise.resolve(connection);
            }
        }

        return Promise.reject(new Error('No Connection by id "' + id + '" was found'));
    }

    /**
     * Sets the Media provider
     *
     * @param {String} id
     *
     * @returns {Promise}
     */
    static setMediaProvider(id) {
        return super.setMediaProvider(
            ProjectHelper.currentProject,
            ProjectHelper.currentEnvironment,
            id
        ).then(() => {
            return RequestHelper.reloadResource('media');  
        })
        .then(() => {
            HashBrown.Views.Navigation.NavbarMain.reload();  
        });
    }
    
    /**
     * Gets the Media provider
     *
     * @returns {Promise} Connection
     */
    static getMediaProvider() {
        return super.getMediaProvider(
            ProjectHelper.currentProject,
            ProjectHelper.currentEnvironment
        );
    }
    
    /**
     * Sets the Template provider
     *
     * @param {String} id
     *
     * @returns {Promise}
     */
    static setTemplateProvider(id) {
        return super.setTemplateProvider(
            ProjectHelper.currentProject,
            ProjectHelper.currentEnvironment,
            id
        ).then(() => {
            return RequestHelper.reloadResource('templates');  
        })
        .then(() => {
            HashBrown.Views.Navigation.NavbarMain.reload();  
        });
    }
    
    /**
     * Gets the Template provider
     *
     * @returns {Promise} Connection
     */
    static getTemplateProvider() {
        return super.getTemplateProvider(
            ProjectHelper.currentProject,
            ProjectHelper.currentEnvironment
        );
    }

    /**
     * Starts a tour of the Connection section
     */
    static startTour() {
        if(location.hash.indexOf('connections/') < 0) {
            location.hash = '/connections/';
        }
       
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve();
            }, 100);
        })
        .then(() => {
            return UI.highlight('.navbar-main__tab[data-route="/connections/"]', 'This the Connections section, where the you define how HashBrown interacts with Media, Templates and Content.', 'right', 'next')
        })
        .then(() => {
            return UI.highlight('.navbar-main__pane[data-route="/connections/"]', 'Here you will find all of your Connections. You can right click here to create a new Connection.', 'right', 'next');
        })
        .then(() => {
            let editor = document.querySelector('.editor--connection');

            if(!editor) {
                return UI.highlight('.page--environment__space--editor', 'This is where the Connection editor will be when you click a Connection.', 'left', 'ok');
            }
                
            return UI.highlight('.editor--connection', 'This is the Connection editor, where you edit Connections.', 'left', 'ok');
        });
    }
}

module.exports = ConnectionHelper;
