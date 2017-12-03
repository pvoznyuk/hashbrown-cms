---
comment: "/**\n * The client side media helper\n *\n * @memberof HashBrown.Client.Helpers\n */"
meta:
    range:
        - 226
        - 3681
    filename: MediaHelper.js
    lineno: 12
    columnno: 0
    path: /home/mrzapp/Development/Web/hashbrown-cms/src/Client/Helpers
    code:
        id: astnode100000873
        name: MediaHelper
        type: ClassDeclaration
        paramnames: []
classdesc: 'The client side media helper'
memberof: HashBrown.Client.Helpers
name: MediaHelper
longname: HashBrown.Client.Helpers.MediaHelper
kind: class
scope: static
methods:
    -
        comment: "/**\n     * Gets the Media tree\n     *\n     * @returns {Promise(Object)} tree\n     */"
        meta:
            range:
                - 365
                - 448
            filename: MediaHelper.js
            lineno: 18
            columnno: 4
            path: /home/mrzapp/Development/Web/hashbrown-cms/src/Client/Helpers
            code:
                id: astnode100000877
                name: MediaHelper.getTree
                type: MethodDefinition
                paramnames: []
            vars:
                "": null
        description: 'Gets the Media tree'
        returns:
            -
                type:
                    names:
                        - Promise(Object)
                description: tree
        name: getTree
        longname: HashBrown.Client.Helpers.MediaHelper.getTree
        kind: function
        memberof: HashBrown.Client.Helpers.MediaHelper
        scope: static
        params: []
    -
        comment: "/**\n     * Gets whether the Media provider exists\n     *\n     * @returns {Promise} Promise\n     */"
        meta:
            range:
                - 557
                - 1125
            filename: MediaHelper.js
            lineno: 27
            columnno: 4
            path: /home/mrzapp/Development/Web/hashbrown-cms/src/Client/Helpers
            code:
                id: astnode100000888
                name: MediaHelper.checkMediaProvider
                type: MethodDefinition
                paramnames: []
            vars:
                "": null
        description: 'Gets whether the Media provider exists'
        returns:
            -
                type:
                    names:
                        - Promise
                description: Promise
        name: checkMediaProvider
        longname: HashBrown.Client.Helpers.MediaHelper.checkMediaProvider
        kind: function
        memberof: HashBrown.Client.Helpers.MediaHelper
        scope: static
        params: []
    -
        comment: "/**\n     * Gets Media object by id synchronously\n     *\n     * @param {String} id\n     *\n     * @return {Media} Media object\n     */"
        meta:
            range:
                - 1272
                - 1519
            filename: MediaHelper.js
            lineno: 45
            columnno: 4
            path: /home/mrzapp/Development/Web/hashbrown-cms/src/Client/Helpers
            code:
                id: astnode100000944
                name: MediaHelper.getMediaByIdSync
                type: MethodDefinition
                paramnames:
                    - id
            vars:
                "": null
        description: 'Gets Media object by id synchronously'
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
                        - Media
                description: 'Media object'
        name: getMediaByIdSync
        longname: HashBrown.Client.Helpers.MediaHelper.getMediaByIdSync
        kind: function
        memberof: HashBrown.Client.Helpers.MediaHelper
        scope: static
    -
        comment: "/**\n     * Gets the Media Url\n     */"
        meta:
            range:
                - 1567
                - 1706
            filename: MediaHelper.js
            lineno: 60
            columnno: 4
            path: /home/mrzapp/Development/Web/hashbrown-cms/src/Client/Helpers
            code:
                id: astnode100000983
                name: MediaHelper.getMediaUrl
                type: MethodDefinition
                paramnames:
                    - id
            vars:
                "": null
        description: 'Gets the Media Url'
        name: getMediaUrl
        longname: HashBrown.Client.Helpers.MediaHelper.getMediaUrl
        kind: function
        memberof: HashBrown.Client.Helpers.MediaHelper
        scope: static
        params: []
    -
        comment: "/**\n     * Gets Media object by id\n     *\n     * @param {String} id\n     *\n     * @return {Promise(Media)}\n     */"
        meta:
            range:
                - 1832
                - 2241
            filename: MediaHelper.js
            lineno: 71
            columnno: 4
            path: /home/mrzapp/Development/Web/hashbrown-cms/src/Client/Helpers
            code:
                id: astnode100001004
                name: MediaHelper.getMediaById
                type: MethodDefinition
                paramnames:
                    - id
            vars:
                "": null
        description: 'Gets Media object by id'
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
                        - Promise(Media)
        name: getMediaById
        longname: HashBrown.Client.Helpers.MediaHelper.getMediaById
        kind: function
        memberof: HashBrown.Client.Helpers.MediaHelper
        scope: static
    -
        comment: "/**\n     * Sets a Media tree item\n     *\n     * @param {String} id\n     * @param {Object} item\n     *\n     * @returns {Promise} promise\n     */"
        meta:
            range:
                - 2395
                - 2503
            filename: MediaHelper.js
            lineno: 94
            columnno: 4
            path: /home/mrzapp/Development/Web/hashbrown-cms/src/Client/Helpers
            code:
                id: astnode100001061
                name: MediaHelper.setTreeItem
                type: MethodDefinition
                paramnames:
                    - id
                    - item
            vars:
                "": null
        description: 'Sets a Media tree item'
        params:
            -
                type:
                    names:
                        - String
                name: id
            -
                type:
                    names:
                        - Object
                name: item
        returns:
            -
                type:
                    names:
                        - Promise
                description: promise
        name: setTreeItem
        longname: HashBrown.Client.Helpers.MediaHelper.setTreeItem
        kind: function
        memberof: HashBrown.Client.Helpers.MediaHelper
        scope: static
    -
        comment: "/**\n     * Initialises the media picker mode\n     *\n     * @param {Function} onPickMedia\n     * @param {Function} onChangeResource\n     * @param {Object} allResources\n     */"
        meta:
            range:
                - 2688
                - 3679
            filename: MediaHelper.js
            lineno: 105
            columnno: 4
            path: /home/mrzapp/Development/Web/hashbrown-cms/src/Client/Helpers
            code:
                id: astnode100001077
                name: MediaHelper.initMediaPickerMode
                type: MethodDefinition
                paramnames:
                    - onPickMedia
                    - onChangeResource
                    - onError
                    - allResources
            vars:
                "": null
        description: 'Initialises the media picker mode'
        params:
            -
                type:
                    names:
                        - function
                name: onPickMedia
            -
                type:
                    names:
                        - function
                name: onChangeResource
            -
                type:
                    names:
                        - Object
                name: allResources
        name: initMediaPickerMode
        longname: HashBrown.Client.Helpers.MediaHelper.initMediaPickerMode
        kind: function
        memberof: HashBrown.Client.Helpers.MediaHelper
        scope: static
shortname: MediaHelper
layout: docPage
permalink: /docs/hashbrown/client/helpers/mediahelper/
title: 'API: MediaHelper'
description: 'The client side media helper'

---