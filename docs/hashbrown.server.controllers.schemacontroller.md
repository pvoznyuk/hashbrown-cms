---
comment: "/**\n * The Controller for Schemas\n *\n * @memberof HashBrown.Server.Controllers\n */"
meta:
    range:
        - 98
        - 6450
    filename: SchemaController.js
    lineno: 8
    columnno: 0
    path: /home/mrzapp/Development/Web/hashbrown-cms/src/Server/Controllers
    code:
        id: astnode100054912
        name: SchemaController
        type: ClassDeclaration
        paramnames: []
classdesc: 'The Controller for Schemas'
memberof: HashBrown.Server.Controllers
name: SchemaController
longname: HashBrown.Server.Controllers.SchemaController
kind: class
scope: static
methods:
    -
        comment: "/**\n     * Initialises this controller\n     */"
        meta:
            range:
                - 213
                - 989
            filename: SchemaController.js
            lineno: 12
            columnno: 4
            path: /home/mrzapp/Development/Web/hashbrown-cms/src/Server/Controllers
            code:
                id: astnode100054918
                name: SchemaController.init
                type: MethodDefinition
                paramnames:
                    - app
            vars:
                "": null
        description: 'Initialises this controller'
        name: init
        longname: HashBrown.Server.Controllers.SchemaController.init
        kind: function
        memberof: HashBrown.Server.Controllers.SchemaController
        scope: static
        params: []
    -
        comment: "/**\n     * @example GET /api/:project/:environment/schemas\n     *\n     * @apiGroup Schema\n     *\n     * @param {String} project\n     * @param {String} environment\n     *\n     * @returns {Array} Schemas\n     */"
        meta:
            range:
                - 1221
                - 1779
            filename: SchemaController.js
            lineno: 34
            columnno: 4
            path: /home/mrzapp/Development/Web/hashbrown-cms/src/Server/Controllers
            code:
                id: astnode100055023
                name: SchemaController.getSchemas
                type: MethodDefinition
                paramnames:
                    - req
                    - res
            vars:
                "": null
        examples:
            - 'GET /api/:project/:environment/schemas'
        tags:
            -
                originalTitle: apiGroup
                title: apigroup
                text: Schema
                value: Schema
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
                description: Schemas
        name: getSchemas
        longname: HashBrown.Server.Controllers.SchemaController.getSchemas
        kind: function
        memberof: HashBrown.Server.Controllers.SchemaController
        scope: static
    -
        comment: "/**\n     * @example GET /api/:project/:environment/schemas/:id\n     *\n     * @apiGroup Schema\n     *\n     * @param {String} project\n     * @param {String} environment\n     * @param {String} id\n     *\n     * @returns {Schema} Schema\n     */"
        meta:
            range:
                - 2033
                - 2627
            filename: SchemaController.js
            lineno: 63
            columnno: 4
            path: /home/mrzapp/Development/Web/hashbrown-cms/src/Server/Controllers
            code:
                id: astnode100055111
                name: SchemaController.getSchema
                type: MethodDefinition
                paramnames:
                    - req
                    - res
            vars:
                "": null
        examples:
            - 'GET /api/:project/:environment/schemas/:id'
        tags:
            -
                originalTitle: apiGroup
                title: apigroup
                text: Schema
                value: Schema
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
                        - Schema
                description: Schema
        name: getSchema
        longname: HashBrown.Server.Controllers.SchemaController.getSchema
        kind: function
        memberof: HashBrown.Server.Controllers.SchemaController
        scope: static
    -
        comment: "/**\n     * @example POST /api/:project/:environment/schemas/:id\n     *\n     * @apiGroup Schema\n     *\n     * @param {String} project\n     * @param {String} environment\n     * @param {String} id\n     *\n     * @param {Schema} schema The Schema model to update\n     *\n     * @returns {Schema} Schema\n     */"
        meta:
            range:
                - 2946
                - 3454
            filename: SchemaController.js
            lineno: 94
            columnno: 4
            path: /home/mrzapp/Development/Web/hashbrown-cms/src/Server/Controllers
            code:
                id: astnode100055209
                name: SchemaController.setSchema
                type: MethodDefinition
                paramnames:
                    - req
                    - res
            vars:
                "": null
        examples:
            - 'POST /api/:project/:environment/schemas/:id'
        tags:
            -
                originalTitle: apiGroup
                title: apigroup
                text: Schema
                value: Schema
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
            -
                type:
                    names:
                        - Schema
                description: 'The Schema model to update'
                name: schema
        returns:
            -
                type:
                    names:
                        - Schema
                description: Schema
        name: setSchema
        longname: HashBrown.Server.Controllers.SchemaController.setSchema
        kind: function
        memberof: HashBrown.Server.Controllers.SchemaController
        scope: static
    -
        comment: "/**\n     * @example POST /api/:project/:environment/schemas/pull/:id\n     *\n     * @apiGroup Schema\n     *\n     * @param {String} project\n     * @param {String} environment\n     * @param {String} id\n     *\n     * @returns {Schema} The pulled Schema\n     */"
        meta:
            range:
                - 3725
                - 4417
            filename: SchemaController.js
            lineno: 119
            columnno: 4
            path: /home/mrzapp/Development/Web/hashbrown-cms/src/Server/Controllers
            code:
                id: astnode100055308
                name: SchemaController.pullSchema
                type: MethodDefinition
                paramnames:
                    - req
                    - res
            vars:
                "": null
        examples:
            - 'POST /api/:project/:environment/schemas/pull/:id'
        tags:
            -
                originalTitle: apiGroup
                title: apigroup
                text: Schema
                value: Schema
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
                        - Schema
                description: 'The pulled Schema'
        name: pullSchema
        longname: HashBrown.Server.Controllers.SchemaController.pullSchema
        kind: function
        memberof: HashBrown.Server.Controllers.SchemaController
        scope: static
    -
        comment: "/**\n     * @example POST /api/:project/:environment/schemas/push/:id\n     *\n     * @apiGroup Schema\n     *\n     * @param {String} project\n     * @param {String} environment\n     * @param {String} id\n     *\n     * @returns {Schema} The pushed Schema\n     */"
        meta:
            range:
                - 4688
                - 5187
            filename: SchemaController.js
            lineno: 147
            columnno: 4
            path: /home/mrzapp/Development/Web/hashbrown-cms/src/Server/Controllers
            code:
                id: astnode100055422
                name: SchemaController.pushSchema
                type: MethodDefinition
                paramnames:
                    - req
                    - res
            vars:
                "": null
        examples:
            - 'POST /api/:project/:environment/schemas/push/:id'
        tags:
            -
                originalTitle: apiGroup
                title: apigroup
                text: Schema
                value: Schema
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
                        - Schema
                description: 'The pushed Schema'
        name: pushSchema
        longname: HashBrown.Server.Controllers.SchemaController.pushSchema
        kind: function
        memberof: HashBrown.Server.Controllers.SchemaController
        scope: static
    -
        comment: "/**\n     * @example POST /api/:project/:environment/schemas/new\n     *\n     * @apiGroup Schema\n     *\n     * @param {String} project\n     * @param {String} environment\n     *\n     * @returns {Schema} The created Schema\n     */"
        meta:
            range:
                - 5428
                - 5841
            filename: SchemaController.js
            lineno: 172
            columnno: 4
            path: /home/mrzapp/Development/Web/hashbrown-cms/src/Server/Controllers
            code:
                id: astnode100055511
                name: SchemaController.createSchema
                type: MethodDefinition
                paramnames:
                    - req
                    - res
            vars:
                "": null
        examples:
            - 'POST /api/:project/:environment/schemas/new'
        tags:
            -
                originalTitle: apiGroup
                title: apigroup
                text: Schema
                value: Schema
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
                        - Schema
                description: 'The created Schema'
        name: createSchema
        longname: HashBrown.Server.Controllers.SchemaController.createSchema
        kind: function
        memberof: HashBrown.Server.Controllers.SchemaController
        scope: static
    -
        comment: "/**\n     * @example DELETE /api/:project/:environment/schemas/:id\n     *\n     * @apiGroup Schema\n     *\n     * @param {String} project\n     * @param {String} environment\n     * @param {String} id\n     */"
        meta:
            range:
                - 6059
                - 6448
            filename: SchemaController.js
            lineno: 193
            columnno: 4
            path: /home/mrzapp/Development/Web/hashbrown-cms/src/Server/Controllers
            code:
                id: astnode100055586
                name: SchemaController.deleteSchema
                type: MethodDefinition
                paramnames:
                    - req
                    - res
            vars:
                "": null
        examples:
            - 'DELETE /api/:project/:environment/schemas/:id'
        tags:
            -
                originalTitle: apiGroup
                title: apigroup
                text: Schema
                value: Schema
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
        name: deleteSchema
        longname: HashBrown.Server.Controllers.SchemaController.deleteSchema
        kind: function
        memberof: HashBrown.Server.Controllers.SchemaController
        scope: static
shortname: SchemaController
layout: docPage
permalink: /docs/hashbrown/server/controllers/schemacontroller/
title: 'API: SchemaController'
description: 'The Controller for Schemas'

---