---
comment: "/**\n * The server side Connection class\n *\n * @memberof HashBrown.Server.Models\n */"
meta:
    range:
        - 300
        - 15802
    filename: Connection.js
    lineno: 15
    columnno: 0
    path: /home/mrzapp/Development/Web/hashbrown-cms/src/Server/Models
    code:
        id: astnode100076129
        name: Connection
        type: ClassDeclaration
        paramnames: []
classdesc: 'The server side Connection class'
memberof: HashBrown.Server.Models
name: Connection
longname: HashBrown.Server.Models.Connection
kind: class
scope: static
methods:
    -
        comment: "/**\n     * Structure\n     */"
        meta:
            range:
                - 381
                - 510
            filename: Connection.js
            lineno: 19
            columnno: 4
            path: /home/mrzapp/Development/Web/hashbrown-cms/src/Server/Models
            code:
                id: astnode100076133
                name: 'Connection#structure'
                type: MethodDefinition
                paramnames: []
            vars:
                "": null
        description: Structure
        name: structure
        longname: 'HashBrown.Server.Models.Connection#structure'
        kind: function
        memberof: HashBrown.Server.Models.Connection
        scope: instance
        params: []
    -
        comment: "/**\n     * Checks the format of the params\n     *\n     * @params {Object} params\n     *\n     * @returns {Object} Params\n     */"
        meta:
            range:
                - 648
                - 1319
            filename: Connection.js
            lineno: 33
            columnno: 4
            path: /home/mrzapp/Development/Web/hashbrown-cms/src/Server/Models
            code:
                id: astnode100076156
                name: Connection.paramsCheck
                type: MethodDefinition
                paramnames:
                    - params
            vars:
                "": null
        description: 'Checks the format of the params'
        tags:
            -
                originalTitle: params
                title: params
                text: '{Object} params'
                value: '{Object} params'
        returns:
            -
                type:
                    names:
                        - Object
                description: Params
        name: paramsCheck
        longname: HashBrown.Server.Models.Connection.paramsCheck
        kind: function
        memberof: HashBrown.Server.Models.Connection
        scope: static
        params: []
    -
        comment: "/**\n     *  Unpublishes content\n     *\n     * @param {String} project\n     * @param {String} environment\n     * @param {Content} content\n     *\n     * @returns {Promise} Promise\n     */"
        meta:
            range:
                - 1519
                - 2566
            filename: Connection.js
            lineno: 64
            columnno: 4
            path: /home/mrzapp/Development/Web/hashbrown-cms/src/Server/Models
            code:
                id: astnode100076247
                name: 'Connection#unpublishContent'
                type: MethodDefinition
                paramnames:
                    - project
                    - environment
                    - content
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
        returns:
            -
                type:
                    names:
                        - Promise
                description: Promise
        name: unpublishContent
        longname: 'HashBrown.Server.Models.Connection#unpublishContent'
        kind: function
        memberof: HashBrown.Server.Models.Connection
        scope: instance
    -
        comment: "/**\n     * Removes a Content preview\n     *\n     * @params {Content} content\n     *\n     * @param {String} project\n     * @param {String} environment\n     * @param {Content} content\n     *\n     * @returns {Promise} Preview URL\n     */"
        meta:
            range:
                - 2815
                - 3781
            filename: Connection.js
            lineno: 106
            columnno: 4
            path: /home/mrzapp/Development/Web/hashbrown-cms/src/Server/Models
            code:
                id: astnode100076360
                name: 'Connection#removePreview'
                type: MethodDefinition
                paramnames:
                    - project
                    - environment
                    - content
            vars:
                "": null
        description: 'Removes a Content preview'
        tags:
            -
                originalTitle: params
                title: params
                text: '{Content} content'
                value: '{Content} content'
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
        returns:
            -
                type:
                    names:
                        - Promise
                description: 'Preview URL'
        name: removePreview
        longname: 'HashBrown.Server.Models.Connection#removePreview'
        kind: function
        memberof: HashBrown.Server.Models.Connection
        scope: instance
    -
        comment: "/**\n     * Generates a Content preview\n     *\n     * @param {String} project\n     * @param {String} environment\n     * @param {Content} content\n     * @param {String} language\n     *\n     * @returns {Promise} Preview URL\n     */"
        meta:
            range:
                - 4020
                - 4833
            filename: Connection.js
            lineno: 147
            columnno: 4
            path: /home/mrzapp/Development/Web/hashbrown-cms/src/Server/Models
            code:
                id: astnode100076482
                name: 'Connection#generatePreview'
                type: MethodDefinition
                paramnames:
                    - project
                    - environment
                    - content
                    - language
            vars:
                "": null
        description: 'Generates a Content preview'
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
                        - String
                name: language
        returns:
            -
                type:
                    names:
                        - Promise
                description: 'Preview URL'
        name: generatePreview
        longname: 'HashBrown.Server.Models.Connection#generatePreview'
        kind: function
        memberof: HashBrown.Server.Models.Connection
        scope: instance
    -
        comment: "/**\n     * Publishes content\n     *\n     * @param {String} project\n     * @param {String} environment\n     * @param {Content} content\n     *\n     * @returns {Promise} Promise\n     */"
        meta:
            range:
                - 5026
                - 6036
            filename: Connection.js
            lineno: 178
            columnno: 4
            path: /home/mrzapp/Development/Web/hashbrown-cms/src/Server/Models
            code:
                id: astnode100076596
                name: 'Connection#publishContent'
                type: MethodDefinition
                paramnames:
                    - project
                    - environment
                    - content
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
        returns:
            -
                type:
                    names:
                        - Promise
                description: Promise
        name: publishContent
        longname: 'HashBrown.Server.Models.Connection#publishContent'
        kind: function
        memberof: HashBrown.Server.Models.Connection
        scope: instance
    -
        comment: "/**\n     * Sets a Content node by id\n     *\n     * @param {String} id\n     * @param {Content} content\n     * @param {String} language\n     *\n     * @returns {Promise} Result\n     */"
        meta:
            range:
                - 6232
                - 7369
            filename: Connection.js
            lineno: 218
            columnno: 4
            path: /home/mrzapp/Development/Web/hashbrown-cms/src/Server/Models
            code:
                id: astnode100076717
                name: 'Connection#setContent'
                type: MethodDefinition
                paramnames:
                    - id
                    - content
                    - language
            vars:
                "": null
        description: 'Sets a Content node by id'
        params:
            -
                type:
                    names:
                        - String
                name: id
            -
                type:
                    names:
                        - Content
                name: content
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
                description: Result
        name: setContent
        longname: 'HashBrown.Server.Models.Connection#setContent'
        kind: function
        memberof: HashBrown.Server.Models.Connection
        scope: instance
    -
        comment: "/**\n     * Removes a Content node by id\n     *\n     * @param {String} id\n     * @param {String} language\n     *\n     * @returns {Promise} Result\n     */"
        meta:
            range:
                - 7536
                - 7966
            filename: Connection.js
            lineno: 256
            columnno: 4
            path: /home/mrzapp/Development/Web/hashbrown-cms/src/Server/Models
            code:
                id: astnode100076870
                name: 'Connection#removeContent'
                type: MethodDefinition
                paramnames:
                    - id
                    - language
            vars:
                "": null
        description: 'Removes a Content node by id'
        params:
            -
                type:
                    names:
                        - String
                name: id
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
                description: Result
        name: removeContent
        longname: 'HashBrown.Server.Models.Connection#removeContent'
        kind: function
        memberof: HashBrown.Server.Models.Connection
        scope: instance
    -
        comment: "/**\n     * Gets a list of Templates\n     *\n     * @param {String} type\n     *\n     * @returns {Promise} Templates\n     */"
        meta:
            range:
                - 8102
                - 9097
            filename: Connection.js
            lineno: 274
            columnno: 4
            path: /home/mrzapp/Development/Web/hashbrown-cms/src/Server/Models
            code:
                id: astnode100076936
                name: 'Connection#getAllTemplates'
                type: MethodDefinition
                paramnames:
                    - type
            vars:
                "": null
        description: 'Gets a list of Templates'
        params:
            -
                type:
                    names:
                        - String
                name: type
        returns:
            -
                type:
                    names:
                        - Promise
                description: Templates
        name: getAllTemplates
        longname: 'HashBrown.Server.Models.Connection#getAllTemplates'
        kind: function
        memberof: HashBrown.Server.Models.Connection
        scope: instance
    -
        comment: "/**\n     * Gets a Template by name\n     *\n     * @param {String} type\n     * @param {String} name\n     *\n     * @returns {Promise} Template\n     */"
        meta:
            range:
                - 9259
                - 10785
            filename: Connection.js
            lineno: 316
            columnno: 4
            path: /home/mrzapp/Development/Web/hashbrown-cms/src/Server/Models
            code:
                id: astnode100077069
                name: 'Connection#getTemplate'
                type: MethodDefinition
                paramnames:
                    - type
                    - name
            vars:
                "": null
        description: 'Gets a Template by name'
        params:
            -
                type:
                    names:
                        - String
                name: type
            -
                type:
                    names:
                        - String
                name: name
        returns:
            -
                type:
                    names:
                        - Promise
                description: Template
        name: getTemplate
        longname: 'HashBrown.Server.Models.Connection#getTemplate'
        kind: function
        memberof: HashBrown.Server.Models.Connection
        scope: instance
    -
        comment: "/**\n     * Sets a Template by name\n     *\n     * @param {String} type\n     * @param {String} name\n     * @param {String} content\n     *\n     * @returns {Promise} Result\n     */"
        meta:
            range:
                - 10976
                - 11498
            filename: Connection.js
            lineno: 366
            columnno: 4
            path: /home/mrzapp/Development/Web/hashbrown-cms/src/Server/Models
            code:
                id: astnode100077277
                name: 'Connection#setTemplate'
                type: MethodDefinition
                paramnames:
                    - type
                    - name
                    - content
            vars:
                "": null
        description: 'Sets a Template by name'
        params:
            -
                type:
                    names:
                        - String
                name: type
            -
                type:
                    names:
                        - String
                name: name
            -
                type:
                    names:
                        - String
                name: content
        returns:
            -
                type:
                    names:
                        - Promise
                description: Result
        name: setTemplate
        longname: 'HashBrown.Server.Models.Connection#setTemplate'
        kind: function
        memberof: HashBrown.Server.Models.Connection
        scope: instance
    -
        comment: "/**\n     * Removes a Template by name\n     *\n     * @param {String} type\n     * @param {String} name\n     *\n     * @returns {Promise} Result\n     */"
        meta:
            range:
                - 11660
                - 12049
            filename: Connection.js
            lineno: 388
            columnno: 4
            path: /home/mrzapp/Development/Web/hashbrown-cms/src/Server/Models
            code:
                id: astnode100077356
                name: 'Connection#removeTemplate'
                type: MethodDefinition
                paramnames:
                    - type
                    - name
            vars:
                "": null
        description: 'Removes a Template by name'
        params:
            -
                type:
                    names:
                        - String
                name: type
            -
                type:
                    names:
                        - String
                name: name
        returns:
            -
                type:
                    names:
                        - Promise
                description: Result
        name: removeTemplate
        longname: 'HashBrown.Server.Models.Connection#removeTemplate'
        kind: function
        memberof: HashBrown.Server.Models.Connection
        scope: instance
    -
        comment: "/**\n     * Gets a list of Media nodes\n     *\n     * @returns {Promise} Media\n     */"
        meta:
            range:
                - 12148
                - 13555
            filename: Connection.js
            lineno: 404
            columnno: 4
            path: /home/mrzapp/Development/Web/hashbrown-cms/src/Server/Models
            code:
                id: astnode100077414
                name: 'Connection#getAllMedia'
                type: MethodDefinition
                paramnames: []
            vars:
                "": null
        description: 'Gets a list of Media nodes'
        returns:
            -
                type:
                    names:
                        - Promise
                description: Media
        name: getAllMedia
        longname: 'HashBrown.Server.Models.Connection#getAllMedia'
        kind: function
        memberof: HashBrown.Server.Models.Connection
        scope: instance
        params: []
    -
        comment: "/**\n     * Gets a Media node by id\n     *\n     * @param {String} id\n     *\n     * @returns {Promise} Media node\n     */"
        meta:
            range:
                - 13689
                - 14652
            filename: Connection.js
            lineno: 455
            columnno: 4
            path: /home/mrzapp/Development/Web/hashbrown-cms/src/Server/Models
            code:
                id: astnode100077608
                name: 'Connection#getMedia'
                type: MethodDefinition
                paramnames:
                    - id
            vars:
                "": null
        description: 'Gets a Media node by id'
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
                description: 'Media node'
        name: getMedia
        longname: 'HashBrown.Server.Models.Connection#getMedia'
        kind: function
        memberof: HashBrown.Server.Models.Connection
        scope: instance
    -
        comment: "/**\n     * Sets a Media node by id\n     *\n     * @param {String} id\n     * @param {String} name\n     * @param {String} base64\n     *\n     * @returns {Promise} Media node\n     */"
        meta:
            range:
                - 14844
                - 15345
            filename: Connection.js
            lineno: 494
            columnno: 4
            path: /home/mrzapp/Development/Web/hashbrown-cms/src/Server/Models
            code:
                id: astnode100077764
                name: 'Connection#setMedia'
                type: MethodDefinition
                paramnames:
                    - id
                    - name
                    - base64
            vars:
                "": null
        description: 'Sets a Media node by id'
        params:
            -
                type:
                    names:
                        - String
                name: id
            -
                type:
                    names:
                        - String
                name: name
            -
                type:
                    names:
                        - String
                name: base64
        returns:
            -
                type:
                    names:
                        - Promise
                description: 'Media node'
        name: setMedia
        longname: 'HashBrown.Server.Models.Connection#setMedia'
        kind: function
        memberof: HashBrown.Server.Models.Connection
        scope: instance
    -
        comment: "/**\n     * Removes a Media node by id\n     *\n     * @param {String} id\n     *\n     * @returns {Promise} Result\n     */"
        meta:
            range:
                - 15478
                - 15800
            filename: Connection.js
            lineno: 516
            columnno: 4
            path: /home/mrzapp/Development/Web/hashbrown-cms/src/Server/Models
            code:
                id: astnode100077831
                name: 'Connection#removeMedia'
                type: MethodDefinition
                paramnames:
                    - id
            vars:
                "": null
        description: 'Removes a Media node by id'
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
                description: Result
        name: removeMedia
        longname: 'HashBrown.Server.Models.Connection#removeMedia'
        kind: function
        memberof: HashBrown.Server.Models.Connection
        scope: instance
shortname: Connection
layout: docPage
permalink: /docs/hashbrown/server/models/connection/
title: 'API: Connection'
description: 'The server side Connection class'

---