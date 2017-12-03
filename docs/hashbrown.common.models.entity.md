---
comment: "/**\n * The base class for everything\n *\n * @memberof HashBrown.Common.Models\n */"
meta:
    range:
        - 129
        - 4696
    filename: Entity.js
    lineno: 10
    columnno: 0
    path: /home/mrzapp/Development/Web/hashbrown-cms/src/Common/Models
    code:
        id: astnode100046981
        name: Entity
        type: ClassDeclaration
        paramnames:
            - params
classdesc: 'The base class for everything'
memberof: HashBrown.Common.Models
name: Entity
longname: HashBrown.Common.Models.Entity
kind: class
scope: static
description: 'The base class for everything'
params:
    -
        type:
            names:
                - Object
        name: params
methods:
    -
        comment: "/**\n     * Sets up a structure before sealing the object\n     */"
        meta:
            range:
                - 712
                - 732
            filename: Entity.js
            lineno: 37
            columnno: 4
            path: /home/mrzapp/Development/Web/hashbrown-cms/src/Common/Models
            code:
                id: astnode100047045
                name: 'Entity#structure'
                type: MethodDefinition
                paramnames: []
            vars:
                "": null
        description: 'Sets up a structure before sealing the object'
        name: structure
        longname: 'HashBrown.Common.Models.Entity#structure'
        kind: function
        memberof: HashBrown.Common.Models.Entity
        scope: instance
        params: []
    -
        comment: "/**\n     * Checks the parameters berfore they're committed\n     *\n     * @params {Object} params\n     *\n     * @returns {Object} Params\n     */"
        meta:
            range:
                - 886
                - 943
            filename: Entity.js
            lineno: 48
            columnno: 4
            path: /home/mrzapp/Development/Web/hashbrown-cms/src/Common/Models
            code:
                id: astnode100047049
                name: Entity.paramsCheck
                type: MethodDefinition
                paramnames:
                    - params
            vars:
                "": null
        description: 'Checks the parameters berfore they''re committed'
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
        longname: HashBrown.Common.Models.Entity.paramsCheck
        kind: function
        memberof: HashBrown.Common.Models.Entity
        scope: static
        params: []
    -
        comment: "/**\n     * Generates a new random id\n     *\n     * @returns {String} id\n     */"
        meta:
            range:
                - 1033
                - 1113
            filename: Entity.js
            lineno: 57
            columnno: 4
            path: /home/mrzapp/Development/Web/hashbrown-cms/src/Common/Models
            code:
                id: astnode100047056
                name: Entity.createId
                type: MethodDefinition
                paramnames: []
            vars:
                "": null
        description: 'Generates a new random id'
        returns:
            -
                type:
                    names:
                        - String
                description: id
        name: createId
        longname: HashBrown.Common.Models.Entity.createId
        kind: function
        memberof: HashBrown.Common.Models.Entity
        scope: static
        params: []
    -
        comment: "/**\n     * Gets a copy of every field in this object as a mutable object\n     *\n     * @returns {Object} object\n     */"
        meta:
            range:
                - 1243
                - 1311
            filename: Entity.js
            lineno: 66
            columnno: 4
            path: /home/mrzapp/Development/Web/hashbrown-cms/src/Common/Models
            code:
                id: astnode100047070
                name: 'Entity#getObject'
                type: MethodDefinition
                paramnames: []
            vars:
                "": null
        description: 'Gets a copy of every field in this object as a mutable object'
        returns:
            -
                type:
                    names:
                        - Object
                description: object
        name: getObject
        longname: 'HashBrown.Common.Models.Entity#getObject'
        kind: function
        memberof: HashBrown.Common.Models.Entity
        scope: instance
        params: []
    -
        comment: "/**\n     * Defines a type safe member variable\n     *\n     * @param {String} type\n     * @param {String} name\n     * @param {Anything} defaultValue\n     */"
        meta:
            range:
                - 1477
                - 4694
            filename: Entity.js
            lineno: 77
            columnno: 4
            path: /home/mrzapp/Development/Web/hashbrown-cms/src/Common/Models
            code:
                id: astnode100047084
                name: 'Entity#def'
                type: MethodDefinition
                paramnames:
                    - type
                    - name
                    - defaultValue
            vars:
                "": null
        description: 'Defines a type safe member variable'
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
                        - Anything
                name: defaultValue
        name: def
        longname: 'HashBrown.Common.Models.Entity#def'
        kind: function
        memberof: HashBrown.Common.Models.Entity
        scope: instance
shortname: Entity
layout: docPage
permalink: /docs/hashbrown/common/models/entity/
title: 'API: Entity'

---