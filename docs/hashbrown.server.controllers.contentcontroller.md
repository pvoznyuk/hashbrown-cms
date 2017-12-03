---
comment: "/**\n * Controller for Content\n *\n * @memberof HashBrown.Server.Controllers\n */"
meta:
    range:
        - 94
        - 9856
    filename: ContentController.js
    lineno: 8
    columnno: 0
    path: /home/mrzapp/Development/Web/hashbrown-cms/src/Server/Controllers
    code:
        id: astnode100050858
        name: ContentController
        type: ClassDeclaration
        paramnames: []
classdesc: 'Controller for Content'
memberof: HashBrown.Server.Controllers
name: ContentController
longname: HashBrown.Server.Controllers.ContentController
kind: class
scope: static
methods:
    -
        comment: "/**\n     * Initialises this controller\n     */"
        meta:
            range:
                - 210
                - 1363
            filename: ContentController.js
            lineno: 12
            columnno: 4
            path: /home/mrzapp/Development/Web/hashbrown-cms/src/Server/Controllers
            code:
                id: astnode100050864
                name: ContentController.init
                type: MethodDefinition
                paramnames:
                    - app
            vars:
                "": null
        description: 'Initialises this controller'
        name: init
        longname: HashBrown.Server.Controllers.ContentController.init
        kind: function
        memberof: HashBrown.Server.Controllers.ContentController
        scope: static
        params: []
    -
        comment: "/**\n     * @example POST /api/:project/:environment/content/example\n     *\n     * @apiGroup Content\n     *\n     * @param {String} project\n     * @param {String} environment\n     *\n     * @returns {String} OK\n     */"
        meta:
            range:
                - 1592
                - 1914
            filename: ContentController.js
            lineno: 38
            columnno: 4
            path: /home/mrzapp/Development/Web/hashbrown-cms/src/Server/Controllers
            code:
                id: astnode100051012
                name: ContentController.createExampleContent
                type: MethodDefinition
                paramnames:
                    - req
                    - res
            vars:
                "": null
        examples:
            - 'POST /api/:project/:environment/content/example'
        tags:
            -
                originalTitle: apiGroup
                title: apigroup
                text: Content
                value: Content
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
                        - String
                description: OK
        name: createExampleContent
        longname: HashBrown.Server.Controllers.ContentController.createExampleContent
        kind: function
        memberof: HashBrown.Server.Controllers.ContentController
        scope: static
    -
        comment: "/**\n     * @example GET /api/:project/:environment/content\n     *\n     * @apiGroup Content\n     *\n     * @param {String} project\n     * @param {String} environment\n     *\n     * @returns {Array} Content nodes\n     */"
        meta:
            range:
                - 2141
                - 2447
            filename: ContentController.js
            lineno: 58
            columnno: 4
            path: /home/mrzapp/Development/Web/hashbrown-cms/src/Server/Controllers
            code:
                id: astnode100051071
                name: ContentController.getAllContents
                type: MethodDefinition
                paramnames:
                    - req
                    - res
            vars:
                "": null
        examples:
            - 'GET /api/:project/:environment/content'
        tags:
            -
                originalTitle: apiGroup
                title: apigroup
                text: Content
                value: Content
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
                description: 'Content nodes'
        name: getAllContents
        longname: HashBrown.Server.Controllers.ContentController.getAllContents
        kind: function
        memberof: HashBrown.Server.Controllers.ContentController
        scope: static
    -
        comment: "/**\n     * @example GET /api/:project/:environment/content/:id\n     *\n     * @apiGroup Content\n     *\n     * @param {String} project\n     * @param {String} environment\n     * @param {String} id\n     *\n     * @returns {Content} Content\n     */"
        meta:
            range:
                - 2700
                - 3245
            filename: ContentController.js
            lineno: 79
            columnno: 4
            path: /home/mrzapp/Development/Web/hashbrown-cms/src/Server/Controllers
            code:
                id: astnode100051128
                name: ContentController.getContent
                type: MethodDefinition
                paramnames:
                    - req
                    - res
            vars:
                "": null
        examples:
            - 'GET /api/:project/:environment/content/:id'
        tags:
            -
                originalTitle: apiGroup
                title: apigroup
                text: Content
                value: Content
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
                        - Content
                description: Content
        name: getContent
        longname: HashBrown.Server.Controllers.ContentController.getContent
        kind: function
        memberof: HashBrown.Server.Controllers.ContentController
        scope: static
    -
        comment: "/**\n     * @example POST /api/:project/:environment/content/preview\n     *\n     * @apiGroup Content\n     *\n     * @param {String} project\n     * @param {String} environment\n     *\n     * @param {Content} content The Content model to preview\n     *\n     * @returns {String} Preview URL\n     */"
        meta:
            range:
                - 3552
                - 3984
            filename: ContentController.js
            lineno: 109
            columnno: 4
            path: /home/mrzapp/Development/Web/hashbrown-cms/src/Server/Controllers
            code:
                id: astnode100051218
                name: ContentController.previewContent
                type: MethodDefinition
                paramnames:
                    - req
                    - res
            vars:
                "": null
        examples:
            - 'POST /api/:project/:environment/content/preview'
        tags:
            -
                originalTitle: apiGroup
                title: apigroup
                text: Content
                value: Content
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
                        - Content
                description: 'The Content model to preview'
                name: content
        returns:
            -
                type:
                    names:
                        - String
                description: 'Preview URL'
        name: previewContent
        longname: HashBrown.Server.Controllers.ContentController.previewContent
        kind: function
        memberof: HashBrown.Server.Controllers.ContentController
        scope: static
    -
        comment: "/**\n     * @example POST /api/:project/:environment/content/new/:schemaId\n     *\n     * @apiGroup Content\n     *\n     * @param {String} project\n     * @param {String} environment\n     * @param {String} schemaId\n     *\n     * @param {String} sort A sorting index (optional)\n     * @param {String} parent A parent id (optional)\n     * @param {Content} content The Content model to create (optional)\n     *\n     * @returns {Content} The created Content node\n     */"
        meta:
            range:
                - 4457
                - 5115
            filename: ContentController.js
            lineno: 136
            columnno: 4
            path: /home/mrzapp/Development/Web/hashbrown-cms/src/Server/Controllers
            code:
                id: astnode100051298
                name: ContentController.createContent
                type: MethodDefinition
                paramnames:
                    - req
                    - res
            vars:
                "": null
        examples:
            - 'POST /api/:project/:environment/content/new/:schemaId'
        tags:
            -
                originalTitle: apiGroup
                title: apigroup
                text: Content
                value: Content
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
                name: schemaId
            -
                type:
                    names:
                        - String
                description: 'A sorting index (optional)'
                name: sort
            -
                type:
                    names:
                        - String
                description: 'A parent id (optional)'
                name: parent
            -
                type:
                    names:
                        - Content
                description: 'The Content model to create (optional)'
                name: content
        returns:
            -
                type:
                    names:
                        - Content
                description: 'The created Content node'
        name: createContent
        longname: HashBrown.Server.Controllers.ContentController.createContent
        kind: function
        memberof: HashBrown.Server.Controllers.ContentController
        scope: static
    -
        comment: "/**\n     * @example POST /api/:project/:environment/content/:id\n     *\n     * @apiGroup Content\n     *\n     * @param {String} project\n     * @param {String} environment\n     * @param {String} id\n     *\n     * @param {Content} content The Content model to update\n     *\n     * @returns {Content} The created Content node\n     */"
        meta:
            range:
                - 5453
                - 5979
            filename: ContentController.js
            lineno: 169
            columnno: 4
            path: /home/mrzapp/Development/Web/hashbrown-cms/src/Server/Controllers
            code:
                id: astnode100051403
                name: ContentController.postContent
                type: MethodDefinition
                paramnames:
                    - req
                    - res
            vars:
                "": null
        examples:
            - 'POST /api/:project/:environment/content/:id'
        tags:
            -
                originalTitle: apiGroup
                title: apigroup
                text: Content
                value: Content
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
                        - Content
                description: 'The Content model to update'
                name: content
        returns:
            -
                type:
                    names:
                        - Content
                description: 'The created Content node'
        name: postContent
        longname: HashBrown.Server.Controllers.ContentController.postContent
        kind: function
        memberof: HashBrown.Server.Controllers.ContentController
        scope: static
    -
        comment: "/**\n     * @example POST /api/:project/:environment/content/pull/:id\n     *\n     * @apiGroup Content\n     *\n     * @param {String} project\n     * @param {String} environment\n     * @param {String} id\n     *\n     * @returns {Content} The pulled Content node\n     */"
        meta:
            range:
                - 6257
                - 6923
            filename: ContentController.js
            lineno: 194
            columnno: 4
            path: /home/mrzapp/Development/Web/hashbrown-cms/src/Server/Controllers
            code:
                id: astnode100051503
                name: ContentController.pullContent
                type: MethodDefinition
                paramnames:
                    - req
                    - res
            vars:
                "": null
        examples:
            - 'POST /api/:project/:environment/content/pull/:id'
        tags:
            -
                originalTitle: apiGroup
                title: apigroup
                text: Content
                value: Content
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
                        - Content
                description: 'The pulled Content node'
        name: pullContent
        longname: HashBrown.Server.Controllers.ContentController.pullContent
        kind: function
        memberof: HashBrown.Server.Controllers.ContentController
        scope: static
    -
        comment: "/**\n     * @example POST /api/:project/:environment/content/push/:id\n     *\n     * @apiGroup Content\n     *\n     * @param {String} project\n     * @param {String} environment\n     * @param {String} id\n     *\n     * @returns {String} The pushed Content id\n     */"
        meta:
            range:
                - 7199
                - 7710
            filename: ContentController.js
            lineno: 222
            columnno: 4
            path: /home/mrzapp/Development/Web/hashbrown-cms/src/Server/Controllers
            code:
                id: astnode100051612
                name: ContentController.pushContent
                type: MethodDefinition
                paramnames:
                    - req
                    - res
            vars:
                "": null
        examples:
            - 'POST /api/:project/:environment/content/push/:id'
        tags:
            -
                originalTitle: apiGroup
                title: apigroup
                text: Content
                value: Content
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
                        - String
                description: 'The pushed Content id'
        name: pushContent
        longname: HashBrown.Server.Controllers.ContentController.pushContent
        kind: function
        memberof: HashBrown.Server.Controllers.ContentController
        scope: static
    -
        comment: "/**\n     * @example POST /api/:project/:environment/content/publish\n     *\n     * @apiGroup Content\n     *\n     * @param {String} project\n     * @param {String} environment\n     *\n     * @param {Content} content the Content model to publish\n     *\n     * @returns {String} The published Content\n     */"
        meta:
            range:
                - 8023
                - 8415
            filename: ContentController.js
            lineno: 249
            columnno: 4
            path: /home/mrzapp/Development/Web/hashbrown-cms/src/Server/Controllers
            code:
                id: astnode100051702
                name: ContentController.publishContent
                type: MethodDefinition
                paramnames:
                    - req
                    - res
            vars:
                "": null
        examples:
            - 'POST /api/:project/:environment/content/publish'
        tags:
            -
                originalTitle: apiGroup
                title: apigroup
                text: Content
                value: Content
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
                        - Content
                description: 'the Content model to publish'
                name: content
        returns:
            -
                type:
                    names:
                        - String
                description: 'The published Content'
        name: publishContent
        longname: HashBrown.Server.Controllers.ContentController.publishContent
        kind: function
        memberof: HashBrown.Server.Controllers.ContentController
        scope: static
    -
        comment: "/**\n     * @example POST /api/:project/:environment/content/unpublish\n     *\n     * @apiGroup Content\n     *\n     * @param {String} project\n     * @param {String} environment\n     *\n     * @param {Content} content the Content model to unpublish\n     *\n     * @returns {String} The unpublished Content\n     */"
        meta:
            range:
                - 8738
                - 9130
            filename: ContentController.js
            lineno: 273
            columnno: 4
            path: /home/mrzapp/Development/Web/hashbrown-cms/src/Server/Controllers
            code:
                id: astnode100051776
                name: ContentController.unpublishContent
                type: MethodDefinition
                paramnames:
                    - req
                    - res
            vars:
                "": null
        examples:
            - 'POST /api/:project/:environment/content/unpublish'
        tags:
            -
                originalTitle: apiGroup
                title: apigroup
                text: Content
                value: Content
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
                        - Content
                description: 'the Content model to unpublish'
                name: content
        returns:
            -
                type:
                    names:
                        - String
                description: 'The unpublished Content'
        name: unpublishContent
        longname: HashBrown.Server.Controllers.ContentController.unpublishContent
        kind: function
        memberof: HashBrown.Server.Controllers.ContentController
        scope: static
    -
        comment: "/**\n     * @example DELETE /api/:project/:environment/content/:id\n     *\n     * @apiGroup Content\n     *\n     * @param {String} project\n     * @param {String} environment\n     * @param {String} id\n     *\n     * @returns {String} The deleted Content id\n     */"
        meta:
            range:
                - 9400
                - 9854
            filename: ContentController.js
            lineno: 296
            columnno: 4
            path: /home/mrzapp/Development/Web/hashbrown-cms/src/Server/Controllers
            code:
                id: astnode100051848
                name: ContentController.deleteContent
                type: MethodDefinition
                paramnames:
                    - req
                    - res
            vars:
                "": null
        examples:
            - 'DELETE /api/:project/:environment/content/:id'
        tags:
            -
                originalTitle: apiGroup
                title: apigroup
                text: Content
                value: Content
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
                        - String
                description: 'The deleted Content id'
        name: deleteContent
        longname: HashBrown.Server.Controllers.ContentController.deleteContent
        kind: function
        memberof: HashBrown.Server.Controllers.ContentController
        scope: static
shortname: ContentController
layout: docPage
permalink: /docs/hashbrown/server/controllers/contentcontroller/
title: 'API: ContentController'
description: 'Controller for Content'

---