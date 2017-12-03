---
comment: "/**\n * The client side Schema helper\n *\n * @memberof HashBrown.Client.Helpers\n */"
meta:
    range:
        - 350
        - 2791
    filename: SchemaHelper.js
    lineno: 15
    columnno: 0
    path: /home/mrzapp/Development/Web/hashbrown-cms/src/Client/Helpers
    code:
        id: astnode100001924
        name: SchemaHelper
        type: ClassDeclaration
        paramnames: []
classdesc: 'The client side Schema helper'
memberof: HashBrown.Client.Helpers
name: SchemaHelper
longname: HashBrown.Client.Helpers.SchemaHelper
kind: class
scope: static
methods:
    -
        comment: "/**\n     * Gets a Schema with all parent fields\n     *\n     * @param {String} id\n     *\n     * @returns {Promise} Schema with parent fields\n     */"
        meta:
            range:
                - 554
                - 873
            filename: SchemaHelper.js
            lineno: 23
            columnno: 4
            path: /home/mrzapp/Development/Web/hashbrown-cms/src/Client/Helpers
            code:
                id: astnode100001928
                name: SchemaHelper.getSchemaWithParentFields
                type: MethodDefinition
                paramnames:
                    - id
            vars:
                "": null
        description: 'Gets a Schema with all parent fields'
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
                description: 'Schema with parent fields'
        name: getSchemaWithParentFields
        longname: HashBrown.Client.Helpers.SchemaHelper.getSchemaWithParentFields
        kind: function
        memberof: HashBrown.Client.Helpers.SchemaHelper
        scope: static
    -
        comment: "/**\n     * Gets a FieldSchema with all parent configs\n     *\n     * @param {String} id\n     *\n     * @returns {FieldSchema} Compiled FieldSchema\n     */"
        meta:
            range:
                - 1040
                - 1576
            filename: SchemaHelper.js
            lineno: 41
            columnno: 4
            path: /home/mrzapp/Development/Web/hashbrown-cms/src/Client/Helpers
            code:
                id: astnode100001970
                name: SchemaHelper.getFieldSchemaWithParentConfigs
                type: MethodDefinition
                paramnames:
                    - id
            vars:
                "": null
        description: 'Gets a FieldSchema with all parent configs'
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
                        - FieldSchema
                description: 'Compiled FieldSchema'
        name: getFieldSchemaWithParentConfigs
        longname: HashBrown.Client.Helpers.SchemaHelper.getFieldSchemaWithParentConfigs
        kind: function
        memberof: HashBrown.Client.Helpers.SchemaHelper
        scope: static
    -
        comment: "/**\n     * Gets a Schema by id\n     *\n     * @param {String} id\n     *\n     * @return {Promise} Promise\n     */"
        meta:
            range:
                - 1699
                - 1891
            filename: SchemaHelper.js
            lineno: 66
            columnno: 4
            path: /home/mrzapp/Development/Web/hashbrown-cms/src/Client/Helpers
            code:
                id: astnode100002028
                name: SchemaHelper.getSchemaById
                type: MethodDefinition
                paramnames:
                    - id
            vars:
                "": null
        description: 'Gets a Schema by id'
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
                description: Promise
        name: getSchemaById
        longname: HashBrown.Client.Helpers.SchemaHelper.getSchemaById
        kind: function
        memberof: HashBrown.Client.Helpers.SchemaHelper
        scope: static
    -
        comment: "/**\n     * Gets all Schemas by type (sync)\n     *\n     * @param {String} type\n     *\n     * @returns {Array} All Schemas\n     */"
        meta:
            range:
                - 2033
                - 2289
            filename: SchemaHelper.js
            lineno: 80
            columnno: 4
            path: /home/mrzapp/Development/Web/hashbrown-cms/src/Client/Helpers
            code:
                id: astnode100002058
                name: SchemaHelper.getAllSchemasSync
                type: MethodDefinition
                paramnames:
                    - type
            vars:
                "": null
        description: 'Gets all Schemas by type (sync)'
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
                        - Array
                description: 'All Schemas'
        name: getAllSchemasSync
        longname: HashBrown.Client.Helpers.SchemaHelper.getAllSchemasSync
        kind: function
        memberof: HashBrown.Client.Helpers.SchemaHelper
        scope: static
    -
        comment: "/**\n     * Gets a Schema by id (sync)\n     *\n     * @param {String} id\n     *\n     * @return {Promise} Promise\n     */"
        meta:
            range:
                - 2418
                - 2789
            filename: SchemaHelper.js
            lineno: 97
            columnno: 4
            path: /home/mrzapp/Development/Web/hashbrown-cms/src/Client/Helpers
            code:
                id: astnode100002098
                name: SchemaHelper.getSchemaByIdSync
                type: MethodDefinition
                paramnames:
                    - id
            vars:
                "": null
        description: 'Gets a Schema by id (sync)'
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
                description: Promise
        name: getSchemaByIdSync
        longname: HashBrown.Client.Helpers.SchemaHelper.getSchemaByIdSync
        kind: function
        memberof: HashBrown.Client.Helpers.SchemaHelper
        scope: static
shortname: SchemaHelper
layout: docPage
permalink: /docs/hashbrown/client/helpers/schemahelper/
title: 'API: SchemaHelper'
description: 'The client side Schema helper'

---