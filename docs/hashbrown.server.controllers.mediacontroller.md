---
comment: "/**\n * The Media controller\n *\n * @memberof HashBrown.Server.Controllers\n */"
meta:
    range:
        - 127
        - 8900
    filename: MediaController.js
    lineno: 10
    columnno: 0
    path: /home/mrzapp/Development/Web/hashbrown-cms/src/Server/Controllers
    code:
        id: astnode100053662
        name: MediaController
        type: ClassDeclaration
        paramnames: []
classdesc: 'The Media controller'
memberof: HashBrown.Server.Controllers
name: MediaController
longname: HashBrown.Server.Controllers.MediaController
kind: class
scope: static
methods:
    -
        comment: "/**\n     * Initiates this controller\n     */"
        meta:
            range:
                - 239
                - 1325
            filename: MediaController.js
            lineno: 14
            columnno: 4
            path: /home/mrzapp/Development/Web/hashbrown-cms/src/Server/Controllers
            code:
                id: astnode100053668
                name: MediaController.init
                type: MethodDefinition
                paramnames:
                    - app
            vars:
                "": null
        description: 'Initiates this controller'
        name: init
        longname: HashBrown.Server.Controllers.MediaController.init
        kind: function
        memberof: HashBrown.Server.Controllers.MediaController
        scope: static
        params: []
    -
        comment: "/**\n     * Serves Media content\n     */"
        meta:
            range:
                - 1375
                - 2426
            filename: MediaController.js
            lineno: 32
            columnno: 4
            path: /home/mrzapp/Development/Web/hashbrown-cms/src/Server/Controllers
            code:
                id: astnode100053818
                name: MediaController.serveMedia
                type: MethodDefinition
                paramnames:
                    - req
                    - res
            vars:
                "": null
        description: 'Serves Media content'
        name: serveMedia
        longname: HashBrown.Server.Controllers.MediaController.serveMedia
        kind: function
        memberof: HashBrown.Server.Controllers.MediaController
        scope: static
        params: []
    -
        comment: "/**\n     * @example GET /api/:project/:environment/media/tree\n     *\n     * @apiGroup Media\n     *\n     * @param {String} project\n     * @param {String} environment\n     *\n     * @returns {Object} Media tree\n     */"
        meta:
            range:
                - 2656
                - 2959
            filename: MediaController.js
            lineno: 70
            columnno: 4
            path: /home/mrzapp/Development/Web/hashbrown-cms/src/Server/Controllers
            code:
                id: astnode100053923
                name: MediaController.getMediaTree
                type: MethodDefinition
                paramnames:
                    - req
                    - res
            vars:
                "": null
        examples:
            - 'GET /api/:project/:environment/media/tree'
        tags:
            -
                originalTitle: apiGroup
                title: apigroup
                text: Media
                value: Media
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
                        - Object
                description: 'Media tree'
        name: getMediaTree
        longname: HashBrown.Server.Controllers.MediaController.getMediaTree
        kind: function
        memberof: HashBrown.Server.Controllers.MediaController
        scope: static
    -
        comment: "/**\n     * @example POST /api/:project/:environment/media/tree/:id\n     *\n     * @apiGroup Media\n     *\n     * @param {String} project\n     * @param {String} environment\n     * @param {String} id\n     \n     * @param {Object} item\n     *\n     * @returns {Object} Media tree item\n     */"
        meta:
            range:
                - 3259
                - 3638
            filename: MediaController.js
            lineno: 93
            columnno: 4
            path: /home/mrzapp/Development/Web/hashbrown-cms/src/Server/Controllers
            code:
                id: astnode100053980
                name: MediaController.setMediaTreeItem
                type: MethodDefinition
                paramnames:
                    - req
                    - res
            vars:
                "": null
        examples:
            - 'POST /api/:project/:environment/media/tree/:id'
        tags:
            -
                originalTitle: apiGroup
                title: apigroup
                text: Media
                value: Media
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
                        - Object
                name: item
        returns:
            -
                type:
                    names:
                        - Object
                description: 'Media tree item'
        name: setMediaTreeItem
        longname: HashBrown.Server.Controllers.MediaController.setMediaTreeItem
        kind: function
        memberof: HashBrown.Server.Controllers.MediaController
        scope: static
    -
        comment: "/**\n     * @example GET /api/:project/:environment/media\n     *\n     * @apiGroup Media\n     *\n     * @param {String} project\n     * @param {String} environment\n     \n     * @returns {Array} All Media nodes\n     */"
        meta:
            range:
                - 3866
                - 4610
            filename: MediaController.js
            lineno: 116
            columnno: 4
            path: /home/mrzapp/Development/Web/hashbrown-cms/src/Server/Controllers
            code:
                id: astnode100054052
                name: MediaController.getMedia
                type: MethodDefinition
                paramnames:
                    - req
                    - res
            vars:
                "": null
        examples:
            - 'GET /api/:project/:environment/media'
        tags:
            -
                originalTitle: apiGroup
                title: apigroup
                text: Media
                value: Media
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
                description: 'All Media nodes'
        name: getMedia
        longname: HashBrown.Server.Controllers.MediaController.getMedia
        kind: function
        memberof: HashBrown.Server.Controllers.MediaController
        scope: static
    -
        comment: "/**\n     * @example GET /api/:project/:environment/media/:id\n     *\n     * @apiGroup Media\n     *\n     * @param {String} project\n     * @param {String} environment\n     * @param {String} id\n     \n     * @returns {Media} Media\n     */"
        meta:
            range:
                - 4858
                - 5691
            filename: MediaController.js
            lineno: 154
            columnno: 4
            path: /home/mrzapp/Development/Web/hashbrown-cms/src/Server/Controllers
            code:
                id: astnode100054170
                name: MediaController.getSingleMedia
                type: MethodDefinition
                paramnames:
                    - req
                    - res
            vars:
                "": null
        examples:
            - 'GET /api/:project/:environment/media/:id'
        tags:
            -
                originalTitle: apiGroup
                title: apigroup
                text: Media
                value: Media
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
                        - Media
                description: Media
        name: getSingleMedia
        longname: HashBrown.Server.Controllers.MediaController.getSingleMedia
        kind: function
        memberof: HashBrown.Server.Controllers.MediaController
        scope: static
    -
        comment: "/**\n     * @example DELETE /api/:project/:environment/media/:id\n     *\n     * @apiGroup Media\n     *\n     * @param {String} project\n     * @param {String} environment\n     * @param {String} id\n     */"
        meta:
            range:
                - 5906
                - 6334
            filename: MediaController.js
            lineno: 187
            columnno: 4
            path: /home/mrzapp/Development/Web/hashbrown-cms/src/Server/Controllers
            code:
                id: astnode100054296
                name: MediaController.deleteMedia
                type: MethodDefinition
                paramnames:
                    - req
                    - res
            vars:
                "": null
        examples:
            - 'DELETE /api/:project/:environment/media/:id'
        tags:
            -
                originalTitle: apiGroup
                title: apigroup
                text: Media
                value: Media
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
        name: deleteMedia
        longname: HashBrown.Server.Controllers.MediaController.deleteMedia
        kind: function
        memberof: HashBrown.Server.Controllers.MediaController
        scope: static
    -
        comment: "/**\n     * @example GET /api/:project/:environment/media/:id\n     *\n     * @apiGroup Media\n     *\n     * @param {String} project\n     * @param {String} environment\n     * @param {String} id\n     *\n     * @param {FileData} files Binary Media data\n     */"
        meta:
            range:
                - 6598
                - 7625
            filename: MediaController.js
            lineno: 213
            columnno: 4
            path: /home/mrzapp/Development/Web/hashbrown-cms/src/Server/Controllers
            code:
                id: astnode100054368
                name: MediaController.setMedia
                type: MethodDefinition
                paramnames:
                    - req
                    - res
            vars:
                "": null
        examples:
            - 'GET /api/:project/:environment/media/:id'
        tags:
            -
                originalTitle: apiGroup
                title: apigroup
                text: Media
                value: Media
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
                        - FileData
                description: 'Binary Media data'
                name: files
        name: setMedia
        longname: HashBrown.Server.Controllers.MediaController.setMedia
        kind: function
        memberof: HashBrown.Server.Controllers.MediaController
        scope: static
    -
        comment: "/**\n     * @example GET /api/:project/:environment/media/new\n     *\n     * @apiGroup Media\n     *\n     * @param {String} project\n     * @param {String} environment\n     *\n     * @param {FileData} files Binary Media data\n     *\n     * @returns {String} Created Media id\n     */"
        meta:
            range:
                - 7912
                - 8898
            filename: MediaController.js
            lineno: 257
            columnno: 4
            path: /home/mrzapp/Development/Web/hashbrown-cms/src/Server/Controllers
            code:
                id: astnode100054524
                name: MediaController.createMedia
                type: MethodDefinition
                paramnames:
                    - req
                    - res
            vars:
                "": null
        examples:
            - 'GET /api/:project/:environment/media/new'
        tags:
            -
                originalTitle: apiGroup
                title: apigroup
                text: Media
                value: Media
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
                        - FileData
                description: 'Binary Media data'
                name: files
        returns:
            -
                type:
                    names:
                        - String
                description: 'Created Media id'
        name: createMedia
        longname: HashBrown.Server.Controllers.MediaController.createMedia
        kind: function
        memberof: HashBrown.Server.Controllers.MediaController
        scope: static
shortname: MediaController
layout: docPage
permalink: /docs/hashbrown/server/controllers/mediacontroller/
title: 'API: MediaController'
description: 'The Media controller'

---