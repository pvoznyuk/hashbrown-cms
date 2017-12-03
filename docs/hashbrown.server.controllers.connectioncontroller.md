---
comment: "/**\n * The Controller for Connections\n *\n * @memberof HashBrown.Server.Controllers\n */"
meta:
    range:
        - 102
        - 7154
    filename: ConnectionController.js
    lineno: 8
    columnno: 0
    path: /home/mrzapp/Development/Web/hashbrown-cms/src/Server/Controllers
    code:
        id: astnode100050086
        name: ConnectionController
        type: ClassDeclaration
        paramnames: []
classdesc: 'The Controller for Connections'
memberof: HashBrown.Server.Controllers
name: ConnectionController
longname: HashBrown.Server.Controllers.ConnectionController
kind: class
scope: static
methods:
    -
        comment: "/**\n     * Initialises this controller\n     */"
        meta:
            range:
                - 221
                - 1326
            filename: ConnectionController.js
            lineno: 12
            columnno: 4
            path: /home/mrzapp/Development/Web/hashbrown-cms/src/Server/Controllers
            code:
                id: astnode100050092
                name: ConnectionController.init
                type: MethodDefinition
                paramnames:
                    - app
            vars:
                "": null
        description: 'Initialises this controller'
        name: init
        longname: HashBrown.Server.Controllers.ConnectionController.init
        kind: function
        memberof: HashBrown.Server.Controllers.ConnectionController
        scope: static
        params: []
    -
        comment: "/**\n     * @example GET /api/:project/:environment/connections/deployers\n     *\n     * @param {String} project\n     * @param {String} environment\n     *\n     * @returns {Array} Deployers\n     */"
        meta:
            range:
                - 1543
                - 1845
            filename: ConnectionController.js
            lineno: 34
            columnno: 4
            path: /home/mrzapp/Development/Web/hashbrown-cms/src/Server/Controllers
            code:
                id: astnode100050229
                name: ConnectionController.getDeployers
                type: MethodDefinition
                paramnames:
                    - req
                    - res
            vars:
                "": null
        examples:
            - 'GET /api/:project/:environment/connections/deployers'
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
                        - Array
                description: Deployers
        name: getDeployers
        longname: HashBrown.Server.Controllers.ConnectionController.getDeployers
        kind: function
        memberof: HashBrown.Server.Controllers.ConnectionController
        scope: static
    -
        comment: "/**\n     * @example GET /api/:project/:environment/connections/processors\n     *\n     * @param {String} project\n     * @param {String} environment\n     *\n     * @returns {Array} Processors\n     */"
        meta:
            range:
                - 2056
                - 2366
            filename: ConnectionController.js
            lineno: 55
            columnno: 4
            path: /home/mrzapp/Development/Web/hashbrown-cms/src/Server/Controllers
            code:
                id: astnode100050271
                name: ConnectionController.getProcessors
                type: MethodDefinition
                paramnames:
                    - req
                    - res
            vars:
                "": null
        examples:
            - 'GET /api/:project/:environment/connections/processors'
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
                        - Array
                description: Processors
        name: getProcessors
        longname: HashBrown.Server.Controllers.ConnectionController.getProcessors
        kind: function
        memberof: HashBrown.Server.Controllers.ConnectionController
        scope: static
    -
        comment: "/**\n     * @example GET /api/:project/:environment/connections\n     *\n     * @param {String} project\n     * @param {String} environment\n     *\n     * @returns {Array} Connections\n     */"
        meta:
            range:
                - 2567
                - 2882
            filename: ConnectionController.js
            lineno: 76
            columnno: 4
            path: /home/mrzapp/Development/Web/hashbrown-cms/src/Server/Controllers
            code:
                id: astnode100050313
                name: ConnectionController.getConnections
                type: MethodDefinition
                paramnames:
                    - req
                    - res
            vars:
                "": null
        examples:
            - 'GET /api/:project/:environment/connections'
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
                        - Array
                description: Connections
        name: getConnections
        longname: HashBrown.Server.Controllers.ConnectionController.getConnections
        kind: function
        memberof: HashBrown.Server.Controllers.ConnectionController
        scope: static
    -
        comment: "/**\n     * @example POST /api/:project/:environment/connections/:id\n     *\n     * @param {String} project\n     * @param {String} environment\n     * @param {String} id\n     *\n     * @returns {Connection} Connection\n     */"
        meta:
            range:
                - 3114
                - 3546
            filename: ConnectionController.js
            lineno: 95
            columnno: 4
            path: /home/mrzapp/Development/Web/hashbrown-cms/src/Server/Controllers
            code:
                id: astnode100050366
                name: ConnectionController.postConnection
                type: MethodDefinition
                paramnames:
                    - req
                    - res
            vars:
                "": null
        examples:
            - 'POST /api/:project/:environment/connections/:id'
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
                        - Connection
                description: Connection
        name: postConnection
        longname: HashBrown.Server.Controllers.ConnectionController.postConnection
        kind: function
        memberof: HashBrown.Server.Controllers.ConnectionController
        scope: static
    -
        comment: "/**\n     * @example POST /api/:project/:environment/connections/pull/:id\n     *\n     * @param {String} project\n     * @param {String} environment\n     * @param {String} id\n     *\n     * @returns {String} Connection id\n     */"
        meta:
            range:
                - 3786
                - 4497
            filename: ConnectionController.js
            lineno: 117
            columnno: 4
            path: /home/mrzapp/Development/Web/hashbrown-cms/src/Server/Controllers
            code:
                id: astnode100050444
                name: ConnectionController.pullConnection
                type: MethodDefinition
                paramnames:
                    - req
                    - res
            vars:
                "": null
        examples:
            - 'POST /api/:project/:environment/connections/pull/:id'
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
                        - String
                description: 'Connection id'
        name: pullConnection
        longname: HashBrown.Server.Controllers.ConnectionController.pullConnection
        kind: function
        memberof: HashBrown.Server.Controllers.ConnectionController
        scope: static
    -
        comment: "/**\n     * @example POST /api/:project/:environment/connections/push/:id\n     *\n     * @param {String} project\n     * @param {String} environment\n     * @param {String} id\n     *\n     * @returns {String} Connection id\n     */"
        meta:
            range:
                - 4737
                - 5264
            filename: ConnectionController.js
            lineno: 143
            columnno: 4
            path: /home/mrzapp/Development/Web/hashbrown-cms/src/Server/Controllers
            code:
                id: astnode100050557
                name: ConnectionController.pushConnection
                type: MethodDefinition
                paramnames:
                    - req
                    - res
            vars:
                "": null
        examples:
            - 'POST /api/:project/:environment/connections/push/:id'
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
                        - String
                description: 'Connection id'
        name: pushConnection
        longname: HashBrown.Server.Controllers.ConnectionController.pushConnection
        kind: function
        memberof: HashBrown.Server.Controllers.ConnectionController
        scope: static
    -
        comment: "/**\n     * @example GET /api/:project/:environment/connections/:id\n     *\n     * @param {String} project\n     * @param {String} environment\n     * @param {String} id\n     *\n     * @returns {Connection} Connection\n     */"
        meta:
            range:
                - 5495
                - 6025
            filename: ConnectionController.js
            lineno: 167
            columnno: 4
            path: /home/mrzapp/Development/Web/hashbrown-cms/src/Server/Controllers
            code:
                id: astnode100050646
                name: ConnectionController.getConnection
                type: MethodDefinition
                paramnames:
                    - req
                    - res
            vars:
                "": null
        examples:
            - 'GET /api/:project/:environment/connections/:id'
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
                        - Connection
                description: Connection
        name: getConnection
        longname: HashBrown.Server.Controllers.ConnectionController.getConnection
        kind: function
        memberof: HashBrown.Server.Controllers.ConnectionController
        scope: static
    -
        comment: "/**\n     * @example POST /api/:project/:environment/connections/new\n     *\n     * @param {String} project\n     * @param {String} environment\n     *\n     * @returns {Connection} Connection\n     */"
        meta:
            range:
                - 6235
                - 6561
            filename: ConnectionController.js
            lineno: 193
            columnno: 4
            path: /home/mrzapp/Development/Web/hashbrown-cms/src/Server/Controllers
            code:
                id: astnode100050726
                name: ConnectionController.createConnection
                type: MethodDefinition
                paramnames:
                    - req
                    - res
            vars:
                "": null
        examples:
            - 'POST /api/:project/:environment/connections/new'
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
                        - Connection
                description: Connection
        name: createConnection
        longname: HashBrown.Server.Controllers.ConnectionController.createConnection
        kind: function
        memberof: HashBrown.Server.Controllers.ConnectionController
        scope: static
    -
        comment: "/**\n     * @example DELETE /api/:project/:environment/connections/:id\n     *\n     * @param {String} project\n     * @param {String} environment\n     * @param {String} id\n     *\n     * @returns {Connection} Connection\n     */"
        meta:
            range:
                - 6795
                - 7152
            filename: ConnectionController.js
            lineno: 212
            columnno: 4
            path: /home/mrzapp/Development/Web/hashbrown-cms/src/Server/Controllers
            code:
                id: astnode100050783
                name: ConnectionController.deleteConnection
                type: MethodDefinition
                paramnames:
                    - req
                    - res
            vars:
                "": null
        examples:
            - 'DELETE /api/:project/:environment/connections/:id'
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
                        - Connection
                description: Connection
        name: deleteConnection
        longname: HashBrown.Server.Controllers.ConnectionController.deleteConnection
        kind: function
        memberof: HashBrown.Server.Controllers.ConnectionController
        scope: static
shortname: ConnectionController
layout: docPage
permalink: /docs/hashbrown/server/controllers/connectioncontroller/
title: 'API: ConnectionController'
description: 'The Controller for Connections'

---