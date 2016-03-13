'use strict';

class PluginHelper {
    /**
     * Gets a compiled file with all client scripts in the plugin folders
     *
     * @param {String} pattern
     *
     * @return {String} scripts
     */
    static getAllClientScripts(pattern) {
        return new Promise(function(callback) {
            glob(appRoot + '/plugins/*/client/js' + pattern, function(err, paths) {
                if(err) {
                    throw err;
                }

                console.log(paths);

                let queue = paths || [];
                let concatenated = '';

                if(queue.length > 0) {
                    function readNextScript() {
                        let scriptPath = queue[0];

                        fs.readFile(scriptPath, 'utf8', function(err, script) {
                            if(err) {
                                throw err;
                            }

                            // Concatenate the loaded script
                            concatenated += '\n' + script;

                            // Shift the queue (removes the first element of the array)
                            queue.shift();

                            // If the queue still has items in it, we should continue reading...
                            if(queue.length > 0) {
                                readNextScript();

                            // ...if not, we'll return all the loaded scripts
                            } else {
                                callback(concatenated);
                            
                            }
                        });
                    }

                    readNextScript();

                } else {
                    callback('');

                }
            });
        });
    }
}

module.exports = PluginHelper;