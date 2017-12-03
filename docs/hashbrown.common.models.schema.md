---
comment: "/**\n * The base class for all Schema types\n *\n * @memberof HashBrown.Common.Models\n */"
meta:
    range:
        - 143
        - 1267
    filename: Schema.js
    lineno: 10
    columnno: 0
    path: /home/mrzapp/Development/Web/hashbrown-cms/src/Common/Models
    code:
        id: astnode100048855
        name: Schema
        type: ClassDeclaration
        paramnames: []
classdesc: 'The base class for all Schema types'
memberof: HashBrown.Common.Models
name: Schema
longname: HashBrown.Common.Models.Schema
kind: class
scope: static
methods:
    -
        comment: "/**\n     * Structure\n     */"
        meta:
            range:
                - 212
                - 515
            filename: Schema.js
            lineno: 14
            columnno: 4
            path: /home/mrzapp/Development/Web/hashbrown-cms/src/Common/Models
            code:
                id: astnode100048859
                name: 'Schema#structure'
                type: MethodDefinition
                paramnames: []
            vars:
                "": null
        description: Structure
        name: structure
        longname: 'HashBrown.Common.Models.Schema#structure'
        kind: function
        memberof: HashBrown.Common.Models.Schema
        scope: instance
        params: []
    -
        comment: "/**\n     * Checks whether a property is hidden\n     *\n     * @param {String} name\n     *\n     * @returns {Boolean} Is hidden\n     */"
        meta:
            range:
                - 658
                - 745
            filename: Schema.js
            lineno: 34
            columnno: 4
            path: /home/mrzapp/Development/Web/hashbrown-cms/src/Common/Models
            code:
                id: astnode100048913
                name: 'Schema#isPropertyHidden'
                type: MethodDefinition
                paramnames:
                    - name
            vars:
                "": null
        description: 'Checks whether a property is hidden'
        params:
            -
                type:
                    names:
                        - String
                name: name
        returns:
            -
                type:
                    names:
                        - Boolean
                description: 'Is hidden'
        name: isPropertyHidden
        longname: 'HashBrown.Common.Models.Schema#isPropertyHidden'
        kind: function
        memberof: HashBrown.Common.Models.Schema
        scope: instance
    -
        comment: "/**\n     * Creates a new schema\n     *\n     * @param {Schema} parentSchema\n     *\n     * @returns {Schema} schema\n     */"
        meta:
            range:
                - 877
                - 1265
            filename: Schema.js
            lineno: 45
            columnno: 4
            path: /home/mrzapp/Development/Web/hashbrown-cms/src/Common/Models
            code:
                id: astnode100048929
                name: Schema.create
                type: MethodDefinition
                paramnames:
                    - parentSchema
            vars:
                "": null
        description: 'Creates a new schema'
        params:
            -
                type:
                    names:
                        - Schema
                name: parentSchema
        returns:
            -
                type:
                    names:
                        - Schema
                description: schema
        name: create
        longname: HashBrown.Common.Models.Schema.create
        kind: function
        memberof: HashBrown.Common.Models.Schema
        scope: static
shortname: Schema
layout: docPage
permalink: /docs/hashbrown/common/models/schema/
title: 'API: Schema'
description: 'The base class for all Schema types'

---