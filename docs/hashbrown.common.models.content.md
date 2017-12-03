---
comment: "/**\n * The base class for all Content types\n *\n * @memberof HashBrown.Common.Models\n */"
meta:
    range:
        - 144
        - 8778
    filename: Content.js
    lineno: 10
    columnno: 0
    path: /home/mrzapp/Development/Web/hashbrown-cms/src/Common/Models
    code:
        id: astnode100045669
        name: Content
        type: ClassDeclaration
        paramnames: []
classdesc: 'The base class for all Content types'
memberof: HashBrown.Common.Models
name: Content
longname: HashBrown.Common.Models.Content
kind: class
scope: static
methods:
    -
        comment: "/**\n     * Checks the format of the params\n     *\n     * @params {Object} params\n     *\n     * @returns {Object} Params\n     */"
        meta:
            range:
                - 1172
                - 1722
            filename: Content.js
            lineno: 50
            columnno: 4
            path: /home/mrzapp/Development/Web/hashbrown-cms/src/Common/Models
            code:
                id: astnode100045797
                name: Content.paramsCheck
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
        longname: HashBrown.Common.Models.Content.paramsCheck
        kind: function
        memberof: HashBrown.Common.Models.Content
        scope: static
        params: []
    -
        comment: "/**\n     * Creates a new Content object\n     *\n     * @param {String} schemaId\n     * @param {Object} properties\n     *\n     * @returns {Content} New Content object\n     */"
        meta:
            range:
                - 1905
                - 2409
            filename: Content.js
            lineno: 80
            columnno: 4
            path: /home/mrzapp/Development/Web/hashbrown-cms/src/Common/Models
            code:
                id: astnode100045867
                name: Content.create
                type: MethodDefinition
                paramnames:
                    - schemaId
                    - properties
            vars:
                "": null
        description: 'Creates a new Content object'
        params:
            -
                type:
                    names:
                        - String
                name: schemaId
            -
                type:
                    names:
                        - Object
                name: properties
        returns:
            -
                type:
                    names:
                        - Content
                description: 'New Content object'
        name: create
        longname: HashBrown.Common.Models.Content.create
        kind: function
        memberof: HashBrown.Common.Models.Content
        scope: static
    -
        comment: "/**\n     * Adopts a list of tasks, turning them into un/publish dates\n     *\n     * @param {Array} tasks\n     */"
        meta:
            range:
                - 2532
                - 2914
            filename: Content.js
            lineno: 105
            columnno: 4
            path: /home/mrzapp/Development/Web/hashbrown-cms/src/Common/Models
            code:
                id: astnode100045914
                name: 'Content#adoptTasks'
                type: MethodDefinition
                paramnames:
                    - tasks
            vars:
                "": null
        description: 'Adopts a list of tasks, turning them into un/publish dates'
        params:
            -
                type:
                    names:
                        - Array
                name: tasks
        name: adoptTasks
        longname: 'HashBrown.Common.Models.Content#adoptTasks'
        kind: function
        memberof: HashBrown.Common.Models.Content
        scope: instance
    -
        comment: "/**\n     * Gets parent Content\n     *\n     * @param {String} project\n     * @param {String} environment\n     *\n     * @returns {Promise} Parent\n     */"
        meta:
            range:
                - 3076
                - 3584
            filename: Content.js
            lineno: 129
            columnno: 4
            path: /home/mrzapp/Development/Web/hashbrown-cms/src/Common/Models
            code:
                id: astnode100045962
                name: 'Content#getParent'
                type: MethodDefinition
                paramnames:
                    - project
                    - environment
            vars:
                "": null
        description: 'Gets parent Content'
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
                description: Parent
        name: getParent
        longname: 'HashBrown.Common.Models.Content#getParent'
        kind: function
        memberof: HashBrown.Common.Models.Content
        scope: instance
    -
        comment: "/**\n     * Gets all parents\n     *\n     * @param {String} project\n     * @param {String} environment\n     *\n     * @returns {Promise} parents\n     */"
        meta:
            range:
                - 3744
                - 4393
            filename: Content.js
            lineno: 154
            columnno: 4
            path: /home/mrzapp/Development/Web/hashbrown-cms/src/Common/Models
            code:
                id: astnode100046030
                name: 'Content#getParents'
                type: MethodDefinition
                paramnames:
                    - project
                    - environment
            vars:
                "": null
        description: 'Gets all parents'
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
                description: parents
        name: getParents
        longname: 'HashBrown.Common.Models.Content#getParents'
        kind: function
        memberof: HashBrown.Common.Models.Content
        scope: instance
    -
        comment: "/**\n     * Settings sanity check\n     *\n     * @param {String} key\n     */"
        meta:
            range:
                - 4478
                - 4938
            filename: Content.js
            lineno: 183
            columnno: 4
            path: /home/mrzapp/Development/Web/hashbrown-cms/src/Common/Models
            code:
                id: astnode100046095
                name: 'Content#settingsSanityCheck'
                type: MethodDefinition
                paramnames:
                    - key
            vars:
                "": null
        description: 'Settings sanity check'
        params:
            -
                type:
                    names:
                        - String
                name: key
        name: settingsSanityCheck
        longname: 'HashBrown.Common.Models.Content#settingsSanityCheck'
        kind: function
        memberof: HashBrown.Common.Models.Content
        scope: instance
    -
        comment: "/**\n     * Gets settings\n     *\n     * @param {String} key\n     *\n     * @returns {Promise} Settings\n     */"
        meta:
            range:
                - 5057
                - 5117
            filename: Content.js
            lineno: 205
            columnno: 4
            path: /home/mrzapp/Development/Web/hashbrown-cms/src/Common/Models
            code:
                id: astnode100046181
                name: 'Content#getSettings'
                type: MethodDefinition
                paramnames:
                    - key
            vars:
                "": null
        description: 'Gets settings'
        params:
            -
                type:
                    names:
                        - String
                name: key
        returns:
            -
                type:
                    names:
                        - Promise
                description: Settings
        name: getSettings
        longname: 'HashBrown.Common.Models.Content#getSettings'
        kind: function
        memberof: HashBrown.Common.Models.Content
        scope: instance
    -
        comment: "/**\n     * Gets all meta fields\n     *\n     * @returns {Object} Meta\n     */"
        meta:
            range:
                - 5204
                - 5470
            filename: Content.js
            lineno: 214
            columnno: 4
            path: /home/mrzapp/Development/Web/hashbrown-cms/src/Common/Models
            code:
                id: astnode100046192
                name: 'Content#getMeta'
                type: MethodDefinition
                paramnames: []
            vars:
                "": null
        description: 'Gets all meta fields'
        returns:
            -
                type:
                    names:
                        - Object
                description: Meta
        name: getMeta
        longname: 'HashBrown.Common.Models.Content#getMeta'
        kind: function
        memberof: HashBrown.Common.Models.Content
        scope: instance
        params: []
    -
        comment: "/**\n     * Shorthand to get property value\n     *\n     * @param {String} key\n     * @param {String} language\n     *\n     * @returns {Object} value\n     */"
        meta:
            range:
                - 5635
                - 5715
            filename: Content.js
            lineno: 233
            columnno: 4
            path: /home/mrzapp/Development/Web/hashbrown-cms/src/Common/Models
            code:
                id: astnode100046222
                name: 'Content#prop'
                type: MethodDefinition
                paramnames:
                    - key
                    - language
            vars:
                "": null
        description: 'Shorthand to get property value'
        params:
            -
                type:
                    names:
                        - String
                name: key
            -
                type:
                    names:
                        - String
                name: language
        returns:
            -
                type:
                    names:
                        - Object
                description: value
        name: prop
        longname: 'HashBrown.Common.Models.Content#prop'
        kind: function
        memberof: HashBrown.Common.Models.Content
        scope: instance
    -
        comment: "/**\n     * Gets a property value\n     *\n     * @param {String} key\n     * @param {String} language\n     *\n     * @returns {Object} value\n     */"
        meta:
            range:
                - 5870
                - 6189
            filename: Content.js
            lineno: 245
            columnno: 4
            path: /home/mrzapp/Development/Web/hashbrown-cms/src/Common/Models
            code:
                id: astnode100046235
                name: 'Content#getPropertyValue'
                type: MethodDefinition
                paramnames:
                    - key
                    - language
            vars:
                "": null
        description: 'Gets a property value'
        params:
            -
                type:
                    names:
                        - String
                name: key
            -
                type:
                    names:
                        - String
                name: language
        returns:
            -
                type:
                    names:
                        - Object
                description: value
        name: getPropertyValue
        longname: 'HashBrown.Common.Models.Content#getPropertyValue'
        kind: function
        memberof: HashBrown.Common.Models.Content
        scope: instance
    -
        comment: "/**\n     * Returns all properties in a given language\n     *\n     * @param {String} language\n     *\n     * @returns {Object} properties\n     */"
        meta:
            range:
                - 6343
                - 8483
            filename: Content.js
            lineno: 266
            columnno: 4
            path: /home/mrzapp/Development/Web/hashbrown-cms/src/Common/Models
            code:
                id: astnode100046280
                name: 'Content#getLocalizedProperties'
                type: MethodDefinition
                paramnames:
                    - language
            vars:
                "": null
        description: 'Returns all properties in a given language'
        params:
            -
                type:
                    names:
                        - String
                name: language
        returns:
            -
                type:
                    names:
                        - Object
                description: properties
        name: getLocalizedProperties
        longname: 'HashBrown.Common.Models.Content#getLocalizedProperties'
        kind: function
        memberof: HashBrown.Common.Models.Content
        scope: instance
    -
        comment: "/**\n     * Gets the content type\n     *\n     * @returns {String} type\n     */"
        meta:
            range:
                - 8571
                - 8626
            filename: Content.js
            lineno: 329
            columnno: 4
            path: /home/mrzapp/Development/Web/hashbrown-cms/src/Common/Models
            code:
                id: astnode100046429
                name: 'Content#getType'
                type: MethodDefinition
                paramnames: []
            vars:
                "": null
        description: 'Gets the content type'
        returns:
            -
                type:
                    names:
                        - String
                description: type
        name: getType
        longname: 'HashBrown.Common.Models.Content#getType'
        kind: function
        memberof: HashBrown.Common.Models.Content
        scope: instance
        params: []
    -
        comment: "/**\n     * Gets the schema information\n     *\n     * @returns {Promise} Schema\n     */"
        meta:
            range:
                - 8723
                - 8776
            filename: Content.js
            lineno: 338
            columnno: 4
            path: /home/mrzapp/Development/Web/hashbrown-cms/src/Common/Models
            code:
                id: astnode100046439
                name: 'Content#getSchema'
                type: MethodDefinition
                paramnames: []
            vars:
                "": null
        description: 'Gets the schema information'
        returns:
            -
                type:
                    names:
                        - Promise
                description: Schema
        name: getSchema
        longname: 'HashBrown.Common.Models.Content#getSchema'
        kind: function
        memberof: HashBrown.Common.Models.Content
        scope: instance
        params: []
shortname: Content
layout: docPage
permalink: /docs/hashbrown/common/models/content/
title: 'API: Content'
description: 'The base class for all Content types'

---