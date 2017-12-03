---
comment: "/**\n * The common base for SchemaHelper\n *\n * @memberof HashBrown.Common.Helpers\n */"
meta:
    range:
        - 100
        - 3461
    filename: SchemaHelper.js
    lineno: 8
    columnno: 0
    path: /home/mrzapp/Development/Web/hashbrown-cms/src/Common/Helpers
    code:
        id: astnode100044834
        name: SchemaHelper
        type: ClassDeclaration
        paramnames: []
classdesc: 'The common base for SchemaHelper'
memberof: HashBrown.Common.Helpers
name: SchemaHelper
longname: HashBrown.Common.Helpers.SchemaHelper
kind: class
scope: static
methods:
    -
        comment: "/**\n     * Gets all parent fields\n     *\n     * @param {String} id\n     *\n     * @returns {Promise(Schema)} schema\n     */"
        meta:
            range:
                - 252
                - 375
            filename: SchemaHelper.js
            lineno: 16
            columnno: 4
            path: /home/mrzapp/Development/Web/hashbrown-cms/src/Common/Helpers
            code:
                id: astnode100044837
                name: SchemaHelper.getSchemaWithParentFields
                type: MethodDefinition
                paramnames:
                    - id
            vars:
                "": null
        description: 'Gets all parent fields'
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
                        - Promise(Schema)
                description: schema
        name: getSchemaWithParentFields
        longname: HashBrown.Common.Helpers.SchemaHelper.getSchemaWithParentFields
        kind: function
        memberof: HashBrown.Common.Helpers.SchemaHelper
        scope: static
    -
        comment: "/**\n     * Gets the appropriate model\n     *\n     * @param {Object} properties\n     *\n     * @return {Schema} Schema\n     */"
        meta:
            range:
                - 510
                - 1357
            filename: SchemaHelper.js
            lineno: 29
            columnno: 4
            path: /home/mrzapp/Development/Web/hashbrown-cms/src/Common/Helpers
            code:
                id: astnode100044851
                name: SchemaHelper.getModel
                type: MethodDefinition
                paramnames:
                    - properties
            vars:
                "": null
        description: 'Gets the appropriate model'
        params:
            -
                type:
                    names:
                        - Object
                name: properties
        returns:
            -
                type:
                    names:
                        - Schema
                description: Schema
        name: getModel
        longname: HashBrown.Common.Helpers.SchemaHelper.getModel
        kind: function
        memberof: HashBrown.Common.Helpers.SchemaHelper
        scope: static
    -
        comment: "/**\n     * Merges two Schemas\n     *\n     * @param Schema childSchema\n     * @param Schema parentSchema\n     *\n     * @returns {Schema} Merged Schema\n     */"
        meta:
            range:
                - 1529
                - 3459
            filename: SchemaHelper.js
            lineno: 59
            columnno: 4
            path: /home/mrzapp/Development/Web/hashbrown-cms/src/Common/Helpers
            code:
                id: astnode100044936
                name: SchemaHelper.mergeSchemas
                type: MethodDefinition
                paramnames:
                    - childSchema
                    - parentSchema
            vars:
                "": null
        description: 'Merges two Schemas'
        params:
            -
                description: childSchema
                name: Schema
            -
                description: parentSchema
                name: Schema
        returns:
            -
                type:
                    names:
                        - Schema
                description: 'Merged Schema'
        name: mergeSchemas
        longname: HashBrown.Common.Helpers.SchemaHelper.mergeSchemas
        kind: function
        memberof: HashBrown.Common.Helpers.SchemaHelper
        scope: static
shortname: SchemaHelper
layout: docPage
permalink: /docs/hashbrown/common/helpers/schemahelper/
title: 'API: SchemaHelper'
description: 'The common base for SchemaHelper'

---