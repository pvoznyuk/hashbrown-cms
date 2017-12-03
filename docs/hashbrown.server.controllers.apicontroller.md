---
comment: "/**\n * The main API controller\n *\n * @memberof HashBrown.Server.Controllers\n */"
meta:
    range:
        - 140
        - 4646
    filename: ApiController.js
    lineno: 10
    columnno: 0
    path: /home/mrzapp/Development/Web/hashbrown-cms/src/Server/Controllers
    code:
        id: astnode100049698
        name: ApiController
        type: ClassDeclaration
        paramnames: []
classdesc: 'The main API controller'
memberof: HashBrown.Server.Controllers
name: ApiController
longname: HashBrown.Server.Controllers.ApiController
kind: class
scope: static
methods:
    -
        comment: "/**\n     * Check CORS\n     *\n     * @param {Object} settings\n     * @param {Request} req\n     * @param {Response} res\n     *\n     * @returns {Promise} Result\n     */"
        meta:
            range:
                - 355
                - 1706
            filename: ApiController.js
            lineno: 20
            columnno: 4
            path: /home/mrzapp/Development/Web/hashbrown-cms/src/Server/Controllers
            code:
                id: astnode100049702
                name: ApiController.checkCORS
                type: MethodDefinition
                paramnames:
                    - settings
                    - req
                    - res
            vars:
                "": null
        description: 'Check CORS'
        params:
            -
                type:
                    names:
                        - Object
                name: settings
            -
                type:
                    names:
                        - Request
                name: req
            -
                type:
                    names:
                        - Response
                name: res
        returns:
            -
                type:
                    names:
                        - Promise
                description: Result
        name: checkCORS
        longname: HashBrown.Server.Controllers.ApiController.checkCORS
        kind: function
        memberof: HashBrown.Server.Controllers.ApiController
        scope: static
    -
        comment: "/**\n     * Middleware\n     *\n     * @param {Object} settings\n     */"
        meta:
            range:
                - 1785
                - 3620
            filename: ApiController.js
            lineno: 63
            columnno: 4
            path: /home/mrzapp/Development/Web/hashbrown-cms/src/Server/Controllers
            code:
                id: astnode100049818
                name: ApiController.middleware
                type: MethodDefinition
                paramnames:
                    - settings
            vars:
                "": null
        description: Middleware
        params:
            -
                type:
                    names:
                        - Object
                name: settings
        name: middleware
        longname: HashBrown.Server.Controllers.ApiController.middleware
        kind: function
        memberof: HashBrown.Server.Controllers.ApiController
        scope: static
    -
        comment: "/**\n     * Prints a formatted error and logs it\n     *\n     * @param {Error} error\n     * @param {Boolean} printToLog\n     *\n     * @returns {String} Pretty print for the error message\n     */"
        meta:
            range:
                - 3824
                - 4644
            filename: ApiController.js
            lineno: 121
            columnno: 5
            path: /home/mrzapp/Development/Web/hashbrown-cms/src/Server/Controllers
            code:
                id: astnode100049984
                name: ApiController.printError
                type: MethodDefinition
                paramnames:
                    - error
                    - printToLog
            vars:
                "": null
        description: 'Prints a formatted error and logs it'
        params:
            -
                type:
                    names:
                        - Error
                name: error
            -
                type:
                    names:
                        - Boolean
                name: printToLog
                defaultvalue: true
        returns:
            -
                type:
                    names:
                        - String
                description: 'Pretty print for the error message'
        name: printError
        longname: HashBrown.Server.Controllers.ApiController.printError
        kind: function
        memberof: HashBrown.Server.Controllers.ApiController
        scope: static
shortname: ApiController
layout: docPage
permalink: /docs/hashbrown/server/controllers/apicontroller/
title: 'API: ApiController'
description: 'The main API controller'

---