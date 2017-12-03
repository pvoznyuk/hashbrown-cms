---
comment: "/**\n * A helper class for making HTTP requests\n *\n * @memberof HashBrown.Server.Helpers\n */"
meta:
    range:
        - 333
        - 7571
    filename: RequestHelper.js
    lineno: 17
    columnno: 0
    path: /home/mrzapp/Development/Web/hashbrown-cms/src/Server/Helpers
    code:
        id: astnode100068420
        name: RequestHelper
        type: ClassDeclaration
        paramnames: []
classdesc: 'A helper class for making HTTP requests'
memberof: HashBrown.Server.Helpers
name: RequestHelper
longname: HashBrown.Server.Helpers.RequestHelper
kind: class
scope: static
methods:
    -
        comment: "/**\n     * Pipes the result of a get request into the original result object\n     *\n     * @param {String} url\n     * @param {Object} res\n     */"
        meta:
            range:
                - 509
                - 1115
            filename: RequestHelper.js
            lineno: 24
            columnno: 4
            path: /home/mrzapp/Development/Web/hashbrown-cms/src/Server/Helpers
            code:
                id: astnode100068423
                name: RequestHelper.pipe
                type: MethodDefinition
                paramnames:
                    - url
                    - res
            vars:
                "": null
        description: 'Pipes the result of a get request into the original result object'
        params:
            -
                type:
                    names:
                        - String
                name: url
            -
                type:
                    names:
                        - Object
                name: res
        name: pipe
        longname: HashBrown.Server.Helpers.RequestHelper.pipe
        kind: function
        memberof: HashBrown.Server.Helpers.RequestHelper
        scope: static
    -
        comment: "/**\n     * Downloads a file\n     *\n     * @param {String} url\n     * @param {String} destination\n     *\n     * @returns {Promise} Result\n     */"
        meta:
            range:
                - 1270
                - 2036
            filename: RequestHelper.js
            lineno: 58
            columnno: 4
            path: /home/mrzapp/Development/Web/hashbrown-cms/src/Server/Helpers
            code:
                id: astnode100068519
                name: RequestHelper.download
                type: MethodDefinition
                paramnames:
                    - url
                    - destination
            vars:
                "": null
        description: 'Downloads a file'
        params:
            -
                type:
                    names:
                        - String
                name: url
            -
                type:
                    names:
                        - String
                name: destination
        returns:
            -
                type:
                    names:
                        - Promise
                description: Result
        name: download
        longname: HashBrown.Server.Helpers.RequestHelper.download
        kind: function
        memberof: HashBrown.Server.Helpers.RequestHelper
        scope: static
    -
        comment: "/**\n     * Makes a paginated request\n     *\n     * @param {String} address\n     * @param {Object} data\n     * @param {Number} maxPages\n     *\n     * @returns {Promise} Response\n     */"
        meta:
            range:
                - 2231
                - 2895
            filename: RequestHelper.js
            lineno: 98
            columnno: 4
            path: /home/mrzapp/Development/Web/hashbrown-cms/src/Server/Helpers
            code:
                id: astnode100068626
                name: RequestHelper.getPaginated
                type: MethodDefinition
                paramnames:
                    - url
                    - data
                    - maxPages
            vars:
                "": null
        description: 'Makes a paginated request'
        params:
            -
                type:
                    names:
                        - String
                name: address
            -
                type:
                    names:
                        - Object
                name: data
            -
                type:
                    names:
                        - Number
                name: maxPages
        returns:
            -
                type:
                    names:
                        - Promise
                description: Response
        name: getPaginated
        longname: HashBrown.Server.Helpers.RequestHelper.getPaginated
        kind: function
        memberof: HashBrown.Server.Helpers.RequestHelper
        scope: static
    -
        comment: "/**\n     * Makes a generic request\n     *\n     * @param {String} method\n     * @param {String} url\n     * @param {Object} data\n     * @param {Boolean} asQueryString\n     *\n     * @returns {Promise} Response\n     */"
        meta:
            range:
                - 3120
                - 7569
            filename: RequestHelper.js
            lineno: 137
            columnno: 4
            path: /home/mrzapp/Development/Web/hashbrown-cms/src/Server/Helpers
            code:
                id: astnode100068722
                name: RequestHelper.request
                type: MethodDefinition
                paramnames:
                    - method
                    - url
                    - data
                    - asQueryString
            vars:
                "": null
        description: 'Makes a generic request'
        params:
            -
                type:
                    names:
                        - String
                name: method
            -
                type:
                    names:
                        - String
                name: url
            -
                type:
                    names:
                        - Object
                name: data
                defaultvalue: null
            -
                type:
                    names:
                        - Boolean
                name: asQueryString
                defaultvalue: false
        returns:
            -
                type:
                    names:
                        - Promise
                description: Response
        name: request
        longname: HashBrown.Server.Helpers.RequestHelper.request
        kind: function
        memberof: HashBrown.Server.Helpers.RequestHelper
        scope: static
shortname: RequestHelper
layout: docPage
permalink: /docs/hashbrown/server/helpers/requesthelper/
title: 'API: RequestHelper'
description: 'A helper class for making HTTP requests'

---