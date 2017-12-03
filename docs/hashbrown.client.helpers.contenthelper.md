---
comment: "/**\n * The client side content helper\n *\n * @memberof HashBrown.Client.Helpers\n */"
meta:
    range:
        - 283
        - 3062
    filename: ContentHelper.js
    lineno: 14
    columnno: 0
    path: /home/mrzapp/Development/Web/hashbrown-cms/src/Client/Helpers
    code:
        id: astnode100000292
        name: ContentHelper
        type: ClassDeclaration
        paramnames: []
classdesc: 'The client side content helper'
memberof: HashBrown.Client.Helpers
name: ContentHelper
longname: HashBrown.Client.Helpers.ContentHelper
kind: class
scope: static
methods:
    -
        comment: "/**\n     * Gets Content by id\n     *\n     * @param {String} id\n     *\n     * @returns {Content} Content node\n     */"
        meta:
            range:
                - 458
                - 669
            filename: ContentHelper.js
            lineno: 22
            columnno: 4
            path: /home/mrzapp/Development/Web/hashbrown-cms/src/Client/Helpers
            code:
                id: astnode100000296
                name: ContentHelper.getContentByIdSync
                type: MethodDefinition
                paramnames:
                    - id
            vars:
                "": null
        description: 'Gets Content by id'
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
                        - Content
                description: 'Content node'
        name: getContentByIdSync
        longname: HashBrown.Client.Helpers.ContentHelper.getContentByIdSync
        kind: function
        memberof: HashBrown.Client.Helpers.ContentHelper
        scope: static
    -
        comment: "/**\n     * Gets Content by id\n     *\n     * @param {String} id\n     *\n     * @returns {Promise} Content node\n     */"
        meta:
            range:
                - 800
                - 1044
            filename: ContentHelper.js
            lineno: 39
            columnno: 4
            path: /home/mrzapp/Development/Web/hashbrown-cms/src/Client/Helpers
            code:
                id: astnode100000324
                name: ContentHelper.getContentById
                type: MethodDefinition
                paramnames:
                    - id
            vars:
                "": null
        description: 'Gets Content by id'
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
                description: 'Content node'
        name: getContentById
        longname: HashBrown.Client.Helpers.ContentHelper.getContentById
        kind: function
        memberof: HashBrown.Client.Helpers.ContentHelper
        scope: static
    -
        comment: "/**\n     * A sanity check for fields\n     *\n     * @param {Object} value\n     * @param {Schema} schema\n     */"
        meta:
            range:
                - 1165
                - 2103
            filename: ContentHelper.js
            lineno: 54
            columnno: 4
            path: /home/mrzapp/Development/Web/hashbrown-cms/src/Client/Helpers
            code:
                id: astnode100000362
                name: ContentHelper.fieldSanityCheck
                type: MethodDefinition
                paramnames:
                    - value
                    - schema
            vars:
                "": null
        description: 'A sanity check for fields'
        params:
            -
                type:
                    names:
                        - Object
                name: value
            -
                type:
                    names:
                        - Schema
                name: schema
        name: fieldSanityCheck
        longname: HashBrown.Client.Helpers.ContentHelper.fieldSanityCheck
        kind: function
        memberof: HashBrown.Client.Helpers.ContentHelper
        scope: static
    -
        comment: "/**\n     * Get new sort index\n     *\n     * @param {String} parentId\n     * @param {String} aboveId\n     * @param {String} belowId\n     */"
        meta:
            range:
                - 2252
                - 3060
            filename: ContentHelper.js
            lineno: 88
            columnno: 4
            path: /home/mrzapp/Development/Web/hashbrown-cms/src/Client/Helpers
            code:
                id: astnode100000459
                name: ContentHelper.getNewSortIndex
                type: MethodDefinition
                paramnames:
                    - parentId
                    - aboveId
                    - belowId
            vars:
                "": null
        description: 'Get new sort index'
        params:
            -
                type:
                    names:
                        - String
                name: parentId
            -
                type:
                    names:
                        - String
                name: aboveId
            -
                type:
                    names:
                        - String
                name: belowId
        name: getNewSortIndex
        longname: HashBrown.Client.Helpers.ContentHelper.getNewSortIndex
        kind: function
        memberof: HashBrown.Client.Helpers.ContentHelper
        scope: static
shortname: ContentHelper
layout: docPage
permalink: /docs/hashbrown/client/helpers/contenthelper/
title: 'API: ContentHelper'
description: 'The client side content helper'

---