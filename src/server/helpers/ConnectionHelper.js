'use strict';

let ConnectionHelperCommon = require(appRoot + '/src/common/helpers/ConnectionHelper');

let Connection = require(appRoot + '/src/common/models/Connection');

class ConnectionHelper extends ConnectionHelperCommon {
    /**
     * Registers a connection type
     *
     * @param {String} name
     * @param {Connection} connection
     */
    static registerConnectionType(name, connection) {
        if(!ConnectionHelper.connectionTypes) {
            ConnectionHelper.connectionTypes = {};
        }

        ConnectionHelper.connectionTypes[name] = connection;
    }

    /**
     * Inits a connection with the appropriate constructor
     *
     * @param {Object} data
     *
     * @returns {Connection} connection
     */
    static initConnection(data) {
        let constructor = ConnectionHelper.connectionTypes[data.type];
           
        if(typeof constructor === 'function') {
            return new constructor(data);
        } else {
            return new Connection(data);
        }
    }

    /**
     * Publishes content
     *
     * @param {Content} content
     *
     * @returns {Promise} promise
     */
    static publishContent(content) {
        let helper = this;

        return new Promise((resolve, reject) => {
            debug.log('Publishing content "' + content.id + '"...', this);
            
            content.getSettings('publishing')
            .then((settings) => {
                if(settings.connections && settings.connections.length > 0) {
                    debug.log('Looping through ' + settings.connections.length + ' connections...', this);
                    
                    function nextConnection(i) {
                        ConnectionHelper.getConnectionById(settings.connections[i])
                        .then((connection) => {
                            debug.log('Publishing through connection "' + settings.connections[i] + '" of type "' + connection.type + '"...', helper);

                            connection.publishContent(content)
                            .then(() => {
                                i++;

                                if(i < settings.connections.length) {
                                    nextConnection(i);
                                
                                } else {
                                    debug.log('Published content "' + content.id + '" successfully!', helper);

                                    resolve();
                                
                                }
                            })
                            .catch(reject);
                        })
                        .catch(reject);
                    }

                    nextConnection(0);
                
                } else {
                    reject(new Error('No connections defined for content "' + content.id + '"'));
                }
            })
            .catch(reject);
        }); 
    }
    
    /**
     * Unpublishes content
     *
     * @param {Content} content
     *
     * @returns {Promise} promise
     */
    static unpublishContent(content) {
        let helper = this;

        return new Promise((callback) => {
            debug.log('Unpublishing content "' + content.id + '"...', this);
            
            content.getSettings('publishing')
            .then((settings) => {
                if(settings.connections && settings.connections.length > 0) {
                    debug.log('Looping through ' + settings.connections.length + ' connections...', this);
                    
                    function nextConnection(i) {
                        ConnectionHelper.getConnectionById(settings.connections[i])
                        .then((connection) => {
                            debug.log('Unpublishing through connection "' + settings.connections[i] + '" of type "' + connection.type + '"...', helper);

                            connection.unpublishContent(content.id)
                            .then(() => {
                                i++;

                                if(i < settings.connections.length) {
                                    nextConnection(i);
                                
                                } else {
                                    debug.log('Unpublished content "' + content.id + '" successfully!', helper);

                                    callback();
                                
                                }
                            });
                        });
                    }

                    nextConnection(0);
                
                } else {
                    debug.error('No connections defined for content "' + content.id + '"', this);
                }
            });
        }); 
    }

    /**
     * Gets all connections
     *
     * @return {Promise(Connection[])} promise
     */
    static getAllConnections() {
        let collection = ProjectHelper.currentEnvironment + '.connections';
        
        return new Promise((callback) => {
            MongoHelper.find(
                ProjectHelper.currentProject,
                collection,
                {}
            ).then((array) => {
                let connections = [];

                for(let data of array) {
                    let connection = ConnectionHelper.initConnection(data);

                    connections.push(connection);
                }

                callback(connections);
            });
        });
    }
    
    /**
     * Gets a connection by id
     *
     * @param {string} id
     *
     * @return {Promise(Connection)} promise
     */
    static getConnectionById(id) {
        let collection = ProjectHelper.currentEnvironment + '.connections';
        
        return new Promise((callback) => {
            MongoHelper.findOne(
                ProjectHelper.currentProject,
                collection,
                {
                    id: id
                }
            ).then((data) => {
                if(data) {
                    let connection = ConnectionHelper.initConnection(data);

                    callback(connection);
                } else {
                    debug.error('Found no connection with id "' + id + '"', this);

                }
            });
        });
    }
    
    /**
     * Removes a connection by id
     *
     * @param {string} id
     *
     * @return {Promise} promise
     */
    static removeConnectionById(id) {
        let collection = ProjectHelper.currentEnvironment + '.connections';
        
        return MongoHelper.removeOne(
            ProjectHelper.currentProject,
            collection,
            {
                id: id
            }
        );
    }
    
    /**
     * Sets a connection setting by id
     *
     * @param {string} id
     * @param {Object} newSettings
     *
     * @return {Promise} promise
     */
    static setConnectionSettingById(id, newSettings) {
        let collection = ProjectHelper.currentEnvironment + '.connections';
        
        return new Promise(function(callback) {
            // First find the connection
            MongoHelper.findOne(
                ProjectHelper.currentProject,
                collection,
                {
                    id: id
                }
            )
            .then(function(oldConnection) {
                let newConnection = oldConnection;

                // Make sure the settings object exists
                if(!newConnection.settings) {
                    newConnection.settings = {};
                }

                // Adopt values at top level
                for(let k in newSettings) {
                    newConnection.settings[k] = newSettings[k];
                }

                // Update the Mongo document
                MongoHelper.updateOne(
                    ProjectHelper.currentProject,
                    'connections',
                    {
                        id: id
                    },
                    newConnection
                )
                .then(callback);
            });
        });
    }

    /**
     * Sets a connection by id
     *
     * @param {string} id
     * @param {Object} content
     *
     * @return {Promise} promise
     */
    static setConnectionById(id, content) {
        let collection = ProjectHelper.currentEnvironment + '.connections';
        
        return MongoHelper.updateOne(
            ProjectHelper.currentProject,
            collection,
            {
                id: id
            },
            content
        );
    }
    
    /**
     * Creates a new connection
     *
     * @return {Promise} promise
     */
    static createConnection() {
        let connection = Connection.create();
        let collection = ProjectHelper.currentEnvironment + '.connections';

        return MongoHelper.insertOne(
            ProjectHelper.currentProject,
            collection,
            connection.getFields()
        );
    }    
}

module.exports = ConnectionHelper;