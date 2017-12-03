---
comment: "/**\n * The base class for all controllers\n *\n * @memberof HashBrown.Server.Controllers\n */"
meta:
    range:
        - 155
        - 4519
    filename: Controller.js
    lineno: 10
    columnno: 0
    path: /home/mrzapp/Development/Web/hashbrown-cms/src/Server/Controllers
    code:
        id: astnode100051948
        name: Controller
        type: ClassDeclaration
        paramnames: []
classdesc: 'The base class for all controllers'
memberof: HashBrown.Server.Controllers
name: Controller
longname: HashBrown.Server.Controllers.Controller
kind: class
scope: static
methods:
    -
        comment: "/**\n     * Initialises this controller\n     */"
        meta:
            range:
                - 229
                - 749
            filename: Controller.js
            lineno: 14
            columnno: 4
            path: /home/mrzapp/Development/Web/hashbrown-cms/src/Server/Controllers
            code:
                id: astnode100051951
                name: Controller.init
                type: MethodDefinition
                paramnames:
                    - app
            vars:
                "": null
        description: 'Initialises this controller'
        name: init
        longname: HashBrown.Server.Controllers.Controller.init
        kind: function
        memberof: HashBrown.Server.Controllers.Controller
        scope: static
        params: []
    -
        comment: "/**\n     * Gets a list of all methods\n     *\n     * @returns {Array} methods\n     */"
        meta:
            range:
                - 844
                - 1115
            filename: Controller.js
            lineno: 33
            columnno: 4
            path: /home/mrzapp/Development/Web/hashbrown-cms/src/Server/Controllers
            code:
                id: astnode100052040
                name: Controller.getAllMethods
                type: MethodDefinition
                paramnames: []
            vars:
                "": null
        description: 'Gets a list of all methods'
        returns:
            -
                type:
                    names:
                        - Array
                description: methods
        name: getAllMethods
        longname: HashBrown.Server.Controllers.Controller.getAllMethods
        kind: function
        memberof: HashBrown.Server.Controllers.Controller
        scope: static
        params: []
    -
        comment: "/**\n     * Gets the prefix for this controller\n     *\n     * @return {String} prefix\n     */"
        meta:
            range:
                - 1218
                - 1365
            filename: Controller.js
            lineno: 50
            columnno: 4
            path: /home/mrzapp/Development/Web/hashbrown-cms/src/Server/Controllers
            code:
                id: astnode100052078
                name: Controller.getPrefix
                type: MethodDefinition
                paramnames: []
            vars:
                "": null
        description: 'Gets the prefix for this controller'
        returns:
            -
                type:
                    names:
                        - String
                description: prefix
        name: getPrefix
        longname: HashBrown.Server.Controllers.Controller.getPrefix
        kind: function
        memberof: HashBrown.Server.Controllers.Controller
        scope: static
        params: []
    -
        comment: "/**\n     * Authenticates a request\n     *\n     * @param {String} token\n     * @param {String} project\n     * @param {String} scope\n     * @param {Boolean} needsAdmin\n     *\n     * @returns {Promise} User object\n     */"
        meta:
            range:
                - 1598
                - 2685
            filename: Controller.js
            lineno: 67
            columnno: 4
            path: /home/mrzapp/Development/Web/hashbrown-cms/src/Server/Controllers
            code:
                id: astnode100052102
                name: Controller.authenticate
                type: MethodDefinition
                paramnames:
                    - token
                    - project
                    - scope
                    - needsAdmin
            vars:
                "": null
        description: 'Authenticates a request'
        params:
            -
                type:
                    names:
                        - String
                name: token
            -
                type:
                    names:
                        - String
                name: project
            -
                type:
                    names:
                        - String
                name: scope
            -
                type:
                    names:
                        - Boolean
                name: needsAdmin
        returns:
            -
                type:
                    names:
                        - Promise
                description: 'User object'
        name: authenticate
        longname: HashBrown.Server.Controllers.Controller.authenticate
        kind: function
        memberof: HashBrown.Server.Controllers.Controller
        scope: static
    -
        comment: "/**\n     * Sets project variables\n     * \n     * @param {Object} req\n     */"
        meta:
            range:
                - 2772
                - 4508
            filename: Controller.js
            lineno: 99
            columnno: 4
            path: /home/mrzapp/Development/Web/hashbrown-cms/src/Server/Controllers
            code:
                id: astnode100052213
                name: Controller.setProjectVariables
                type: MethodDefinition
                paramnames:
                    - req
            vars:
                "": null
        description: 'Sets project variables'
        params:
            -
                type:
                    names:
                        - Object
                name: req
        name: setProjectVariables
        longname: HashBrown.Server.Controllers.Controller.setProjectVariables
        kind: function
        memberof: HashBrown.Server.Controllers.Controller
        scope: static
shortname: Controller
layout: docPage
permalink: /docs/hashbrown/server/controllers/controller/
title: 'API: Controller'
description: 'The base class for all controllers'

---