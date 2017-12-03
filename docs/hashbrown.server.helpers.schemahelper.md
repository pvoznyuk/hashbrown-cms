---
comment: "/**\n * The helpers class for Schemas\n *\n * @memberof HashBrown.Server.Helpers\n */"
meta:
    range:
        - 551
        - 13579
    filename: SchemaHelper.js
    lineno: 20
    columnno: 0
    path: /home/mrzapp/Development/Web/hashbrown-cms/src/Server/Helpers
    code:
        id: astnode100069885
        name: SchemaHelper
        type: ClassDeclaration
        paramnames: []
classdesc: 'The helpers class for Schemas'
memberof: HashBrown.Server.Helpers
name: SchemaHelper
longname: HashBrown.Server.Helpers.SchemaHelper
kind: class
scope: static
methods:
    -
        comment: "/**\n     * Gets a list of native schema objects\n     *\n     * @returns {Promise} Array of Schemas\n     */"
        meta:
            range:
                - 713
                - 3487
            filename: SchemaHelper.js
            lineno: 26
            columnno: 4
            path: /home/mrzapp/Development/Web/hashbrown-cms/src/Server/Helpers
            code:
                id: astnode100069889
                name: SchemaHelper.getNativeSchemas
                type: MethodDefinition
                paramnames: []
            vars:
                "": null
        description: 'Gets a list of native schema objects'
        returns:
            -
                type:
                    names:
                        - Promise
                description: 'Array of Schemas'
        name: getNativeSchemas
        longname: HashBrown.Server.Helpers.SchemaHelper.getNativeSchemas
        kind: function
        memberof: HashBrown.Server.Helpers.SchemaHelper
        scope: static
        params: []
    -
        comment: "/**\n     * Gets a list of all custom schema objects\n     *\n     * @param {String} project\n     * @param {String} environment\n     *\n     * @returns {Promise} Array of Schemas\n     */"
        meta:
            range:
                - 3684
                - 4289
            filename: SchemaHelper.js
            lineno: 105
            columnno: 4
            path: /home/mrzapp/Development/Web/hashbrown-cms/src/Server/Helpers
            code:
                id: astnode100070064
                name: SchemaHelper.getCustomSchemas
                type: MethodDefinition
                paramnames:
                    - project
                    - environment
            vars:
                "": null
        description: 'Gets a list of all custom schema objects'
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
                description: 'Array of Schemas'
        name: getCustomSchemas
        longname: HashBrown.Server.Helpers.SchemaHelper.getCustomSchemas
        kind: function
        memberof: HashBrown.Server.Helpers.SchemaHelper
        scope: static
    -
        comment: "/**\n     * Gets a list of all schema objects\n     *\n     * @param {String} project\n     * @param {String} environment\n     *\n     * @returns {Promise} Array of Schemas\n     */"
        meta:
            range:
                - 4475
                - 4911
            filename: SchemaHelper.js
            lineno: 134
            columnno: 4
            path: /home/mrzapp/Development/Web/hashbrown-cms/src/Server/Helpers
            code:
                id: astnode100070136
                name: SchemaHelper.getAllSchemas
                type: MethodDefinition
                paramnames:
                    - project
                    - environment
            vars:
                "": null
        description: 'Gets a list of all schema objects'
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
                description: 'Array of Schemas'
        name: getAllSchemas
        longname: HashBrown.Server.Helpers.SchemaHelper.getAllSchemas
        kind: function
        memberof: HashBrown.Server.Helpers.SchemaHelper
        scope: static
    -
        comment: "/**\n     * Checks whether a Schema id belongs to a native schema\n     *\n     * @param {String} id\n     *\n     * @returns {Boolean} isNative\n     */"
        meta:
            range:
                - 5069
                - 5564
            filename: SchemaHelper.js
            lineno: 154
            columnno: 4
            path: /home/mrzapp/Development/Web/hashbrown-cms/src/Server/Helpers
            code:
                id: astnode100070188
                name: SchemaHelper.isNativeSchema
                type: MethodDefinition
                paramnames:
                    - id
            vars:
                "": null
        description: 'Checks whether a Schema id belongs to a native schema'
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
                        - Boolean
                description: isNative
        name: isNativeSchema
        longname: HashBrown.Server.Helpers.SchemaHelper.isNativeSchema
        kind: function
        memberof: HashBrown.Server.Helpers.SchemaHelper
        scope: static
    -
        comment: "/**\n     * Gets a native Schema by id\n     *\n     * @param {String} id\n     *\n     * @returns {Promise} Schema\n     */"
        meta:
            range:
                - 5693
                - 6878
            filename: SchemaHelper.js
            lineno: 181
            columnno: 4
            path: /home/mrzapp/Development/Web/hashbrown-cms/src/Server/Helpers
            code:
                id: astnode100070237
                name: SchemaHelper.getNativeSchema
                type: MethodDefinition
                paramnames:
                    - id
            vars:
                "": null
        description: 'Gets a native Schema by id'
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
                description: Schema
        name: getNativeSchema
        longname: HashBrown.Server.Helpers.SchemaHelper.getNativeSchema
        kind: function
        memberof: HashBrown.Server.Helpers.SchemaHelper
        scope: static
    -
        comment: "/**\n     * Gets a Schema by id\n     *\n     * @param {String} project\n     * @param {String} environment\n     * @param {String} id\n     *\n     * @return {Promise} Schema\n     */"
        meta:
            range:
                - 7065
                - 8121
            filename: SchemaHelper.js
            lineno: 221
            columnno: 4
            path: /home/mrzapp/Development/Web/hashbrown-cms/src/Server/Helpers
            code:
                id: astnode100070356
                name: SchemaHelper.getSchemaById
                type: MethodDefinition
                paramnames:
                    - project
                    - environment
                    - id
            vars:
                "": null
        description: 'Gets a Schema by id'
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
                        - Promise
                description: Schema
        name: getSchemaById
        longname: HashBrown.Server.Helpers.SchemaHelper.getSchemaById
        kind: function
        memberof: HashBrown.Server.Helpers.SchemaHelper
        scope: static
    -
        comment: "/**\n     * Gets all parent fields\n     *\n     * @param {String} project\n     * @param {String} environment\n     * @param {String} id\n     *\n     * @returns {Promise} Schema with all aprent fields\n     */"
        meta:
            range:
                - 8338
                - 9469
            filename: SchemaHelper.js
            lineno: 267
            columnno: 4
            path: /home/mrzapp/Development/Web/hashbrown-cms/src/Server/Helpers
            code:
                id: astnode100070475
                name: SchemaHelper.getSchemaWithParentFields
                type: MethodDefinition
                paramnames:
                    - project
                    - environment
                    - id
            vars:
                "": null
        description: 'Gets all parent fields'
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
                        - Promise
                description: 'Schema with all aprent fields'
        name: getSchemaWithParentFields
        longname: HashBrown.Server.Helpers.SchemaHelper.getSchemaWithParentFields
        kind: function
        memberof: HashBrown.Server.Helpers.SchemaHelper
        scope: static
    -
        comment: "/**\n     * Removes a Schema object by id\n     *\n     * @param {String} project\n     * @param {String} environment\n     * @param {String} id\n     *\n     * @return {Promise} Promise\n     */"
        meta:
            range:
                - 9672
                - 11626
            filename: SchemaHelper.js
            lineno: 308
            columnno: 4
            path: /home/mrzapp/Development/Web/hashbrown-cms/src/Server/Helpers
            code:
                id: astnode100070580
                name: SchemaHelper.removeSchemaById
                type: MethodDefinition
                paramnames:
                    - project
                    - environment
                    - id
            vars:
                "": null
        description: 'Removes a Schema object by id'
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
                        - Promise
                description: Promise
        name: removeSchemaById
        longname: HashBrown.Server.Helpers.SchemaHelper.removeSchemaById
        kind: function
        memberof: HashBrown.Server.Helpers.SchemaHelper
        scope: static
    -
        comment: "/**\n     * Sets a schema object by id\n     *\n     * @param {String} project\n     * @param {String} environment\n     * @param {Number} id\n     * @param {Object} schema\n     * @param {Boolean} create\n     *\n     * @return {Promise} Resulting Schema\n     */"
        meta:
            range:
                - 11895
                - 12819
            filename: SchemaHelper.js
            lineno: 379
            columnno: 4
            path: /home/mrzapp/Development/Web/hashbrown-cms/src/Server/Helpers
            code:
                id: astnode100070737
                name: SchemaHelper.setSchemaById
                type: MethodDefinition
                paramnames:
                    - project
                    - environment
                    - id
                    - schema
                    - create
            vars:
                "": null
        description: 'Sets a schema object by id'
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
                        - Number
                name: id
            -
                type:
                    names:
                        - Object
                name: schema
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
                description: 'Resulting Schema'
        name: setSchemaById
        longname: HashBrown.Server.Helpers.SchemaHelper.setSchemaById
        kind: function
        memberof: HashBrown.Server.Helpers.SchemaHelper
        scope: static
    -
        comment: "/**\n     * Creates a new Schema\n     *\n     * @param {String} project\n     * @param {String} environment\n     * @param {Schema} parentSchema\n     *\n     * @returns {Promise} Created Schema\n     */"
        meta:
            range:
                - 13026
                - 13577
            filename: SchemaHelper.js
            lineno: 422
            columnno: 4
            path: /home/mrzapp/Development/Web/hashbrown-cms/src/Server/Helpers
            code:
                id: astnode100070843
                name: SchemaHelper.createSchema
                type: MethodDefinition
                paramnames:
                    - project
                    - environment
                    - parentSchema
            vars:
                "": null
        description: 'Creates a new Schema'
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
                        - Schema
                name: parentSchema
        returns:
            -
                type:
                    names:
                        - Promise
                description: 'Created Schema'
        name: createSchema
        longname: HashBrown.Server.Helpers.SchemaHelper.createSchema
        kind: function
        memberof: HashBrown.Server.Helpers.SchemaHelper
        scope: static
shortname: SchemaHelper
layout: docPage
permalink: /docs/hashbrown/server/helpers/schemahelper/
title: 'API: SchemaHelper'
description: 'The helpers class for Schemas'

---