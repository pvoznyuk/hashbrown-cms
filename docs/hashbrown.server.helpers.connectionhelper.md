---
comment: "/**\n * The helper class for Connections\n *\n * @memberof HashBrown.Server.Helpers\n */"
meta:
    range:
        - 418
        - 10484
    filename: ConnectionHelper.js
    lineno: 15
    columnno: 0
    path: /home/mrzapp/Development/Web/hashbrown-cms/src/Server/Helpers
    code:
        id: astnode100061878
        name: ConnectionHelper
        type: ClassDeclaration
        paramnames: []
classdesc: 'The helper class for Connections'
memberof: HashBrown.Server.Helpers
name: ConnectionHelper
longname: HashBrown.Server.Helpers.ConnectionHelper
kind: class
scope: static
methods:
    -
        comment: "/**\n     * Registers a deployer\n     *\n     * @param {Deployer} deployer\n     */"
        meta:
            range:
                - 563
                - 787
            filename: ConnectionHelper.js
            lineno: 21
            columnno: 4
            path: /home/mrzapp/Development/Web/hashbrown-cms/src/Server/Helpers
            code:
                id: astnode100061882
                name: ConnectionHelper.registerDeployer
                type: MethodDefinition
                paramnames:
                    - deployer
            vars:
                "": null
        description: 'Registers a deployer'
        params:
            -
                type:
                    names:
                        - Deployer
                name: deployer
        name: registerDeployer
        longname: HashBrown.Server.Helpers.ConnectionHelper.registerDeployer
        kind: function
        memberof: HashBrown.Server.Helpers.ConnectionHelper
        scope: static
    -
        comment: "/**\n     * Registers a processor\n     *\n     * @param {Processor} processor\n     */"
        meta:
            range:
                - 885
                - 1118
            filename: ConnectionHelper.js
            lineno: 36
            columnno: 4
            path: /home/mrzapp/Development/Web/hashbrown-cms/src/Server/Helpers
            code:
                id: astnode100061917
                name: ConnectionHelper.registerProcessor
                type: MethodDefinition
                paramnames:
                    - processor
            vars:
                "": null
        description: 'Registers a processor'
        params:
            -
                type:
                    names:
                        - Processor
                name: processor
        name: registerProcessor
        longname: HashBrown.Server.Helpers.ConnectionHelper.registerProcessor
        kind: function
        memberof: HashBrown.Server.Helpers.ConnectionHelper
        scope: static
    -
        comment: "/**\n     * Gets a deployer\n     *\n     * @string {String} alias\n     *\n     * @returns {Deployer} Deployer\n     */"
        meta:
            range:
                - 1243
                - 1485
            filename: ConnectionHelper.js
            lineno: 53
            columnno: 4
            path: /home/mrzapp/Development/Web/hashbrown-cms/src/Server/Helpers
            code:
                id: astnode100061952
                name: ConnectionHelper.getDeployer
                type: MethodDefinition
                paramnames:
                    - alias
            vars:
                "": null
        description: 'Gets a deployer'
        tags:
            -
                originalTitle: string
                title: string
                text: '{String} alias'
                value: '{String} alias'
        returns:
            -
                type:
                    names:
                        - Deployer
                description: Deployer
        name: getDeployer
        longname: HashBrown.Server.Helpers.ConnectionHelper.getDeployer
        kind: function
        memberof: HashBrown.Server.Helpers.ConnectionHelper
        scope: static
        params: []
    -
        comment: "/**\n     * Gets a processor\n     *\n     * @string {String} alias\n     *\n     * @returns {Processor} Processor\n     */"
        meta:
            range:
                - 1617
                - 1865
            filename: ConnectionHelper.js
            lineno: 72
            columnno: 4
            path: /home/mrzapp/Development/Web/hashbrown-cms/src/Server/Helpers
            code:
                id: astnode100061985
                name: ConnectionHelper.getProcessor
                type: MethodDefinition
                paramnames:
                    - alias
            vars:
                "": null
        description: 'Gets a processor'
        tags:
            -
                originalTitle: string
                title: string
                text: '{String} alias'
                value: '{String} alias'
        returns:
            -
                type:
                    names:
                        - Processor
                description: Processor
        name: getProcessor
        longname: HashBrown.Server.Helpers.ConnectionHelper.getProcessor
        kind: function
        memberof: HashBrown.Server.Helpers.ConnectionHelper
        scope: static
        params: []
    -
        comment: "/**\n     * Previews content\n     *\n     * @param {String} project\n     * @param {String} environment\n     * @param {Content} content\n     * @param {User} user\n     * @param {String} language\n     *\n     * @returns {Promise} Promise\n     */"
        meta:
            range:
                - 2115
                - 3067
            filename: ConnectionHelper.js
            lineno: 95
            columnno: 4
            path: /home/mrzapp/Development/Web/hashbrown-cms/src/Server/Helpers
            code:
                id: astnode100062018
                name: ConnectionHelper.previewContent
                type: MethodDefinition
                paramnames:
                    - project
                    - environment
                    - content
                    - user
                    - language
            vars:
                "": null
        description: 'Previews content'
        params:
            -
                type:
                    names:
                        - String
                name: project
            -
                type:
                    names:
                        - String
                name: environment
            -
                type:
                    names:
                        - Content
                name: content
            -
                type:
                    names:
                        - User
                name: user
            -
                type:
                    names:
                        - String
                name: language
        returns:
            -
                type:
                    names:
                        - Promise
                description: Promise
        name: previewContent
        longname: HashBrown.Server.Helpers.ConnectionHelper.previewContent
        kind: function
        memberof: HashBrown.Server.Helpers.ConnectionHelper
        scope: static
    -
        comment: "/**\n     * Publishes content\n     *\n     * @param {String} project\n     * @param {String} environment\n     * @param {Content} content\n     * @param {User} user\n     *\n     * @returns {Promise} Promise\n     */"
        meta:
            range:
                - 3286
                - 4575
            filename: ConnectionHelper.js
            lineno: 128
            columnno: 4
            path: /home/mrzapp/Development/Web/hashbrown-cms/src/Server/Helpers
            code:
                id: astnode100062136
                name: ConnectionHelper.publishContent
                type: MethodDefinition
                paramnames:
                    - project
                    - environment
                    - content
                    - user
            vars:
                "": null
        description: 'Publishes content'
        params:
            -
                type:
                    names:
                        - String
                name: project
            -
                type:
                    names:
                        - String
                name: environment
            -
                type:
                    names:
                        - Content
                name: content
            -
                type:
                    names:
                        - User
                name: user
        returns:
            -
                type:
                    names:
                        - Promise
                description: Promise
        name: publishContent
        longname: HashBrown.Server.Helpers.ConnectionHelper.publishContent
        kind: function
        memberof: HashBrown.Server.Helpers.ConnectionHelper
        scope: static
    -
        comment: "/**\n     * Unpublishes content\n     *\n     * @param {String} project\n     * @param {String} environment\n     * @param {Content} content\n     * @param {User} user\n     *\n     * @returns {Promise} promise\n     */"
        meta:
            range:
                - 4800
                - 6164
            filename: ConnectionHelper.js
            lineno: 171
            columnno: 4
            path: /home/mrzapp/Development/Web/hashbrown-cms/src/Server/Helpers
            code:
                id: astnode100062300
                name: ConnectionHelper.unpublishContent
                type: MethodDefinition
                paramnames:
                    - project
                    - environment
                    - content
                    - user
                    - unpublishFirst
            vars:
                "": null
        description: 'Unpublishes content'
        params:
            -
                type:
                    names:
                        - String
                name: project
            -
                type:
                    names:
                        - String
                name: environment
            -
                type:
                    names:
                        - Content
                name: content
            -
                type:
                    names:
                        - User
                name: user
        returns:
            -
                type:
                    names:
                        - Promise
                description: promise
        name: unpublishContent
        longname: HashBrown.Server.Helpers.ConnectionHelper.unpublishContent
        kind: function
        memberof: HashBrown.Server.Helpers.ConnectionHelper
        scope: static
    -
        comment: "/**\n     * Gets all connections\n     *\n     * @param {String} project\n     * @param {String} environment\n     *\n     * @return {Promise} Array of Connections\n     */"
        meta:
            range:
                - 6340
                - 7025
            filename: ConnectionHelper.js
            lineno: 212
            columnno: 4
            path: /home/mrzapp/Development/Web/hashbrown-cms/src/Server/Helpers
            code:
                id: astnode100062472
                name: ConnectionHelper.getAllConnections
                type: MethodDefinition
                paramnames:
                    - project
                    - environment
            vars:
                "": null
        description: 'Gets all connections'
        params:
            -
                type:
                    names:
                        - String
                name: project
            -
                type:
                    names:
                        - String
                name: environment
        returns:
            -
                type:
                    names:
                        - Promise
                description: 'Array of Connections'
        name: getAllConnections
        longname: HashBrown.Server.Helpers.ConnectionHelper.getAllConnections
        kind: function
        memberof: HashBrown.Server.Helpers.ConnectionHelper
        scope: static
    -
        comment: "/**\n     * Gets a connection by id\n     *\n     * @param {String} project\n     * @param {String} environment\n     * @param {string} id\n     *\n     * @return {Promise} Connection\n     */"
        meta:
            range:
                - 7224
                - 8167
            filename: ConnectionHelper.js
            lineno: 243
            columnno: 4
            path: /home/mrzapp/Development/Web/hashbrown-cms/src/Server/Helpers
            code:
                id: astnode100062547
                name: ConnectionHelper.getConnectionById
                type: MethodDefinition
                paramnames:
                    - project
                    - environment
                    - id
            vars:
                "": null
        description: 'Gets a connection by id'
        params:
            -
                type:
                    names:
                        - String
                name: project
            -
                type:
                    names:
                        - String
                name: environment
            -
                type:
                    names:
                        - string
                name: id
        returns:
            -
                type:
                    names:
                        - Promise
                description: Connection
        name: getConnectionById
        longname: HashBrown.Server.Helpers.ConnectionHelper.getConnectionById
        kind: function
        memberof: HashBrown.Server.Helpers.ConnectionHelper
        scope: static
    -
        comment: "/**\n     * Removes a connection by id\n     *\n     * @param {String} project\n     * @param {String} environment\n     * @param {string} id\n     *\n     * @return {Promise} promise\n     */"
        meta:
            range:
                - 8366
                - 8782
            filename: ConnectionHelper.js
            lineno: 281
            columnno: 4
            path: /home/mrzapp/Development/Web/hashbrown-cms/src/Server/Helpers
            code:
                id: astnode100062645
                name: ConnectionHelper.removeConnectionById
                type: MethodDefinition
                paramnames:
                    - project
                    - environment
                    - id
            vars:
                "": null
        description: 'Removes a connection by id'
        params:
            -
                type:
                    names:
                        - String
                name: project
            -
                type:
                    names:
                        - String
                name: environment
            -
                type:
                    names:
                        - string
                name: id
        returns:
            -
                type:
                    names:
                        - Promise
                description: promise
        name: removeConnectionById
        longname: HashBrown.Server.Helpers.ConnectionHelper.removeConnectionById
        kind: function
        memberof: HashBrown.Server.Helpers.ConnectionHelper
        scope: static
    -
        comment: "/**\n     * Sets a connection by id\n     *\n     * @param {String} project\n     * @param {String} environment\n     * @param {string} id\n     * @param {Connection} connection\n     * @param {Boolean} create\n     *\n     * @return {Promise} promise\n     */"
        meta:
            range:
                - 9043
                - 9860
            filename: ConnectionHelper.js
            lineno: 308
            columnno: 4
            path: /home/mrzapp/Development/Web/hashbrown-cms/src/Server/Helpers
            code:
                id: astnode100062686
                name: ConnectionHelper.setConnectionById
                type: MethodDefinition
                paramnames:
                    - project
                    - environment
                    - id
                    - connection
                    - create
            vars:
                "": null
        description: 'Sets a connection by id'
        params:
            -
                type:
                    names:
                        - String
                name: project
            -
                type:
                    names:
                        - String
                name: environment
            -
                type:
                    names:
                        - string
                name: id
            -
                type:
                    names:
                        - Connection
                name: connection
            -
                type:
                    names:
                        - Boolean
                name: create
                defaultvalue: false
        returns:
            -
                type:
                    names:
                        - Promise
                description: promise
        name: setConnectionById
        longname: HashBrown.Server.Helpers.ConnectionHelper.setConnectionById
        kind: function
        memberof: HashBrown.Server.Helpers.ConnectionHelper
        scope: static
    -
        comment: "/**\n     * Creates a new connection\n     *\n     * @param {String} project\n     * @param {String} environment\n     *\n     * @return {Promise} New Connection\n     */"
        meta:
            range:
                - 10038
                - 10478
            filename: ConnectionHelper.js
            lineno: 345
            columnno: 4
            path: /home/mrzapp/Development/Web/hashbrown-cms/src/Server/Helpers
            code:
                id: astnode100062771
                name: ConnectionHelper.createConnection
                type: MethodDefinition
                paramnames:
                    - project
                    - environment
            vars:
                "": null
        description: 'Creates a new connection'
        params:
            -
                type:
                    names:
                        - String
                name: project
            -
                type:
                    names:
                        - String
                name: environment
        returns:
            -
                type:
                    names:
                        - Promise
                description: 'New Connection'
        name: createConnection
        longname: HashBrown.Server.Helpers.ConnectionHelper.createConnection
        kind: function
        memberof: HashBrown.Server.Helpers.ConnectionHelper
        scope: static
shortname: ConnectionHelper
layout: docPage
permalink: /docs/hashbrown/server/helpers/connectionhelper/
title: 'API: ConnectionHelper'
description: 'The helper class for Connections'

---