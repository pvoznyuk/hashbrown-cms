---
comment: "/**\n * The client side connection helper\n *\n * @memberof HashBrown.Client.Helpers\n */"
meta:
    range:
        - 359
        - 3279
    filename: ConnectionHelper.js
    lineno: 13
    columnno: 0
    path: /home/mrzapp/Development/Web/hashbrown-cms/src/Client/Helpers
    code:
        id: astnode100000028
        name: ConnectionHelper
        type: ClassDeclaration
        paramnames: []
classdesc: 'The client side connection helper'
memberof: HashBrown.Client.Helpers
name: ConnectionHelper
longname: HashBrown.Client.Helpers.ConnectionHelper
kind: class
scope: static
methods:
    -
        comment: "/**\n     * Gets all connections\n     *\n     * @return {Promise} Array of Connections\n     */"
        meta:
            range:
                - 516
                - 605
            filename: ConnectionHelper.js
            lineno: 19
            columnno: 4
            path: /home/mrzapp/Development/Web/hashbrown-cms/src/Client/Helpers
            code:
                id: astnode100000032
                name: ConnectionHelper.getAllConnections
                type: MethodDefinition
                paramnames: []
            vars:
                "": null
        description: 'Gets all connections'
        returns:
            -
                type:
                    names:
                        - Promise
                description: 'Array of Connections'
        name: getAllConnections
        longname: HashBrown.Client.Helpers.ConnectionHelper.getAllConnections
        kind: function
        memberof: HashBrown.Client.Helpers.ConnectionHelper
        scope: static
        params: []
    -
        comment: "/**\n     * Gets a Connection by id (sync)\n     *\n     * @param {string} id\n     *\n     * @return {Promise} Connection\n     */"
        meta:
            range:
                - 745
                - 1023
            filename: ConnectionHelper.js
            lineno: 30
            columnno: 4
            path: /home/mrzapp/Development/Web/hashbrown-cms/src/Client/Helpers
            code:
                id: astnode100000044
                name: ConnectionHelper.getConnectionByIdSync
                type: MethodDefinition
                paramnames:
                    - id
            vars:
                "": null
        description: 'Gets a Connection by id (sync)'
        params:
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
        name: getConnectionByIdSync
        longname: HashBrown.Client.Helpers.ConnectionHelper.getConnectionByIdSync
        kind: function
        memberof: HashBrown.Client.Helpers.ConnectionHelper
        scope: static
    -
        comment: "/**\n     * Gets a Connection by id\n     *\n     * @param {String} project\n     * @param {String} environment\n     * @param {String} id\n     *\n     * @return {Promise(Connection)} promise\n     */"
        meta:
            range:
                - 1231
                - 1737
            filename: ConnectionHelper.js
            lineno: 51
            columnno: 4
            path: /home/mrzapp/Development/Web/hashbrown-cms/src/Client/Helpers
            code:
                id: astnode100000080
                name: ConnectionHelper.getConnectionById
                type: MethodDefinition
                paramnames:
                    - project
                    - environment
                    - id
            vars:
                "": null
        description: 'Gets a Connection by id'
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
                        - String
                name: id
        returns:
            -
                type:
                    names:
                        - Promise(Connection)
                description: promise
        name: getConnectionById
        longname: HashBrown.Client.Helpers.ConnectionHelper.getConnectionById
        kind: function
        memberof: HashBrown.Client.Helpers.ConnectionHelper
        scope: static
    -
        comment: "/**\n     * Sets the Media provider\n     *\n     * @param {String} id\n     *\n     * @returns {Promise}\n     */"
        meta:
            range:
                - 1856
                - 2223
            filename: ConnectionHelper.js
            lineno: 74
            columnno: 4
            path: /home/mrzapp/Development/Web/hashbrown-cms/src/Client/Helpers
            code:
                id: astnode100000146
                name: ConnectionHelper.setMediaProvider
                type: MethodDefinition
                paramnames:
                    - id
            vars:
                "": null
        description: 'Sets the Media provider'
        params:
            -
                type:
                    names:
                        - String
                name: id
        returns:
            -
                type:
                    names:
                        - Promise
        name: setMediaProvider
        longname: HashBrown.Client.Helpers.ConnectionHelper.setMediaProvider
        kind: function
        memberof: HashBrown.Client.Helpers.ConnectionHelper
        scope: static
    -
        comment: "/**\n     * Gets the Media provider\n     *\n     * @returns {Promise} Connection\n     */"
        meta:
            range:
                - 2324
                - 2494
            filename: ConnectionHelper.js
            lineno: 92
            columnno: 4
            path: /home/mrzapp/Development/Web/hashbrown-cms/src/Client/Helpers
            code:
                id: astnode100000190
                name: ConnectionHelper.getMediaProvider
                type: MethodDefinition
                paramnames: []
            vars:
                "": null
        description: 'Gets the Media provider'
        returns:
            -
                type:
                    names:
                        - Promise
                description: Connection
        name: getMediaProvider
        longname: HashBrown.Client.Helpers.ConnectionHelper.getMediaProvider
        kind: function
        memberof: HashBrown.Client.Helpers.ConnectionHelper
        scope: static
        params: []
    -
        comment: "/**\n     * Sets the Template provider\n     *\n     * @param {String} id\n     *\n     * @returns {Promise}\n     */"
        meta:
            range:
                - 2620
                - 2997
            filename: ConnectionHelper.js
            lineno: 106
            columnno: 4
            path: /home/mrzapp/Development/Web/hashbrown-cms/src/Client/Helpers
            code:
                id: astnode100000205
                name: ConnectionHelper.setTemplateProvider
                type: MethodDefinition
                paramnames:
                    - id
            vars:
                "": null
        description: 'Sets the Template provider'
        params:
            -
                type:
                    names:
                        - String
                name: id
        returns:
            -
                type:
                    names:
                        - Promise
        name: setTemplateProvider
        longname: HashBrown.Client.Helpers.ConnectionHelper.setTemplateProvider
        kind: function
        memberof: HashBrown.Client.Helpers.ConnectionHelper
        scope: static
    -
        comment: "/**\n     * Gets the Template provider\n     *\n     * @returns {Promise} Connection\n     */"
        meta:
            range:
                - 3101
                - 3277
            filename: ConnectionHelper.js
            lineno: 124
            columnno: 4
            path: /home/mrzapp/Development/Web/hashbrown-cms/src/Client/Helpers
            code:
                id: astnode100000249
                name: ConnectionHelper.getTemplateProvider
                type: MethodDefinition
                paramnames: []
            vars:
                "": null
        description: 'Gets the Template provider'
        returns:
            -
                type:
                    names:
                        - Promise
                description: Connection
        name: getTemplateProvider
        longname: HashBrown.Client.Helpers.ConnectionHelper.getTemplateProvider
        kind: function
        memberof: HashBrown.Client.Helpers.ConnectionHelper
        scope: static
        params: []
shortname: ConnectionHelper
layout: docPage
permalink: /docs/hashbrown/client/helpers/connectionhelper/
title: 'API: ConnectionHelper'
description: 'The client side connection helper'

---