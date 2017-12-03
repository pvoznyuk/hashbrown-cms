---
comment: "/**\n * A helper class for making HTTP/S requests\n *\n * @memberof HashBrown.Client.Helpers\n */"
meta:
    range:
        - 109
        - 7581
    filename: RequestHelper.js
    lineno: 8
    columnno: 0
    path: /home/mrzapp/Development/Web/hashbrown-cms/src/Client/Helpers
    code:
        id: astnode100001202
        name: RequestHelper
        type: ClassDeclaration
        paramnames: []
classdesc: 'A helper class for making HTTP/S requests'
memberof: HashBrown.Client.Helpers
name: RequestHelper
longname: HashBrown.Client.Helpers.RequestHelper
kind: class
scope: static
methods:
    -
        comment: "/**\n     * An environment specific request\n     *\n     * @param {String} method\n     * @param {String} url\n     * @param {Object} data\n     *\n     * @returns {Promise} Response\n     */"
        meta:
            range:
                - 324
                - 458
            filename: RequestHelper.js
            lineno: 18
            columnno: 4
            path: /home/mrzapp/Development/Web/hashbrown-cms/src/Client/Helpers
            code:
                id: astnode100001205
                name: RequestHelper.request
                type: MethodDefinition
                paramnames:
                    - method
                    - url
                    - data
            vars:
                "": null
        description: 'An environment specific request'
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
        returns:
            -
                type:
                    names:
                        - Promise
                description: Response
        name: request
        longname: HashBrown.Client.Helpers.RequestHelper.request
        kind: function
        memberof: HashBrown.Client.Helpers.RequestHelper
        scope: static
    -
        comment: "/**\n     * Uploads a file\n     *\n     * @param {String} url\n     * @param {String} type\n     * @param {FormData} data\n     *\n     * @returns {Promise} Response\n     */"
        meta:
            range:
                - 636
                - 1275
            filename: RequestHelper.js
            lineno: 31
            columnno: 4
            path: /home/mrzapp/Development/Web/hashbrown-cms/src/Client/Helpers
            code:
                id: astnode100001224
                name: RequestHelper.uploadFile
                type: MethodDefinition
                paramnames:
                    - url
                    - type
                    - data
            vars:
                "": null
        description: 'Uploads a file'
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
                name: type
            -
                type:
                    names:
                        - FormData
                name: data
        returns:
            -
                type:
                    names:
                        - Promise
                description: Response
        name: uploadFile
        longname: HashBrown.Client.Helpers.RequestHelper.uploadFile
        kind: function
        memberof: HashBrown.Client.Helpers.RequestHelper
        scope: static
    -
        comment: "/**\n     * An environment-independent request\n     *\n     * @param {String} method\n     * @param {String} url\n     * @param {Object} data\n     * @param {Object} headers\n     *\n     * @returns {Promise} Response\n     */"
        meta:
            range:
                - 1504
                - 3554
            filename: RequestHelper.js
            lineno: 60
            columnno: 4
            path: /home/mrzapp/Development/Web/hashbrown-cms/src/Client/Helpers
            code:
                id: astnode100001274
                name: RequestHelper.customRequest
                type: MethodDefinition
                paramnames:
                    - method
                    - url
                    - data
                    - headers
            vars:
                "": null
        description: 'An environment-independent request'
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
            -
                type:
                    names:
                        - Object
                name: headers
        returns:
            -
                type:
                    names:
                        - Promise
                description: Response
        name: customRequest
        longname: HashBrown.Client.Helpers.RequestHelper.customRequest
        kind: function
        memberof: HashBrown.Client.Helpers.RequestHelper
        scope: static
    -
        comment: "/**\n     * Wraps a URL to include environment\n     *\n     * @param {String} url\n     */"
        meta:
            range:
                - 3652
                - 4068
            filename: RequestHelper.js
            lineno: 132
            columnno: 4
            path: /home/mrzapp/Development/Web/hashbrown-cms/src/Client/Helpers
            code:
                id: astnode100001488
                name: RequestHelper.environmentUrl
                type: MethodDefinition
                paramnames:
                    - url
            vars:
                "": null
        description: 'Wraps a URL to include environment'
        params:
            -
                type:
                    names:
                        - String
                name: url
        name: environmentUrl
        longname: HashBrown.Client.Helpers.RequestHelper.environmentUrl
        kind: function
        memberof: HashBrown.Client.Helpers.RequestHelper
        scope: static
    -
        comment: "/**\n     * Listens for server restart\n     */"
        meta:
            range:
                - 4124
                - 4544
            filename: RequestHelper.js
            lineno: 151
            columnno: 4
            path: /home/mrzapp/Development/Web/hashbrown-cms/src/Client/Helpers
            code:
                id: astnode100001545
                name: RequestHelper.listenForRestart
                type: MethodDefinition
                paramnames: []
            vars:
                "": null
        description: 'Listens for server restart'
        name: listenForRestart
        longname: HashBrown.Client.Helpers.RequestHelper.listenForRestart
        kind: function
        memberof: HashBrown.Client.Helpers.RequestHelper
        scope: static
        params: []
    -
        comment: "/**\n     * Reloads a resource\n     */"
        meta:
            range:
                - 4593
                - 6492
            filename: RequestHelper.js
            lineno: 173
            columnno: 4
            path: /home/mrzapp/Development/Web/hashbrown-cms/src/Client/Helpers
            code:
                id: astnode100001587
                name: RequestHelper.reloadResource
                type: MethodDefinition
                paramnames:
                    - name
            vars:
                "": null
        description: 'Reloads a resource'
        name: reloadResource
        longname: HashBrown.Client.Helpers.RequestHelper.reloadResource
        kind: function
        memberof: HashBrown.Client.Helpers.RequestHelper
        scope: static
        params: []
    -
        comment: "/**\n     * Reloads all resources\n     */"
        meta:
            range:
                - 6544
                - 7577
            filename: RequestHelper.js
            lineno: 234
            columnno: 4
            path: /home/mrzapp/Development/Web/hashbrown-cms/src/Client/Helpers
            code:
                id: astnode100001786
                name: RequestHelper.reloadAllResources
                type: MethodDefinition
                paramnames: []
            vars:
                "": null
        description: 'Reloads all resources'
        name: reloadAllResources
        longname: HashBrown.Client.Helpers.RequestHelper.reloadAllResources
        kind: function
        memberof: HashBrown.Client.Helpers.RequestHelper
        scope: static
        params: []
shortname: RequestHelper
layout: docPage
permalink: /docs/hashbrown/client/helpers/requesthelper/
title: 'API: RequestHelper'
description: 'A helper class for making HTTP/S requests'

---