---
comment: "/**\n * The controller for Forms\n *\n * @memberof HashBrown.Server.Controllers\n */"
meta:
    range:
        - 244
        - 9600
    filename: FormsController.js
    lineno: 16
    columnno: 0
    path: /home/mrzapp/Development/Web/hashbrown-cms/src/Server/Controllers
    code:
        id: astnode100052542
        name: FormsController
        type: ClassDeclaration
        paramnames: []
classdesc: 'The controller for Forms'
memberof: HashBrown.Server.Controllers
name: FormsController
longname: HashBrown.Server.Controllers.FormsController
kind: class
scope: static
methods:
    -
        comment: "/**\n     * Initialises this controller\n     */"
        meta:
            range:
                - 358
                - 1527
            filename: FormsController.js
            lineno: 20
            columnno: 4
            path: /home/mrzapp/Development/Web/hashbrown-cms/src/Server/Controllers
            code:
                id: astnode100052548
                name: FormsController.init
                type: MethodDefinition
                paramnames:
                    - app
            vars:
                "": null
        description: 'Initialises this controller'
        name: init
        longname: HashBrown.Server.Controllers.FormsController.init
        kind: function
        memberof: HashBrown.Server.Controllers.FormsController
        scope: static
        params: []
    -
        comment: "/**\n     * Check CORS\n     *\n     * @returns {Promise} Result\n     */"
        meta:
            range:
                - 1613
                - 1859
            filename: FormsController.js
            lineno: 43
            columnno: 4
            path: /home/mrzapp/Development/Web/hashbrown-cms/src/Server/Controllers
            code:
                id: astnode100052704
                name: FormsController.checkCORS
                type: MethodDefinition
                paramnames:
                    - req
                    - res
            vars:
                "": null
        description: 'Check CORS'
        returns:
            -
                type:
                    names:
                        - Promise
                description: Result
        name: checkCORS
        longname: HashBrown.Server.Controllers.FormsController.checkCORS
        kind: function
        memberof: HashBrown.Server.Controllers.FormsController
        scope: static
        params: []
    -
        comment: "/**\n     * @example GET /api/:project/:environment/forms\n     *\n     * @apiGroup Forms\n     *\n     * @param {String} project\n     * @param {String} environment\n     *\n     * @returns {Array} Forms\n     */"
        meta:
            range:
                - 2074
                - 2369
            filename: FormsController.js
            lineno: 60
            columnno: 4
            path: /home/mrzapp/Development/Web/hashbrown-cms/src/Server/Controllers
            code:
                id: astnode100052750
                name: FormsController.getAllForms
                type: MethodDefinition
                paramnames:
                    - req
                    - res
            vars:
                "": null
        examples:
            - 'GET /api/:project/:environment/forms'
        tags:
            -
                originalTitle: apiGroup
                title: apigroup
                text: Forms
                value: Forms
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
                description: Forms
        name: getAllForms
        longname: HashBrown.Server.Controllers.FormsController.getAllForms
        kind: function
        memberof: HashBrown.Server.Controllers.FormsController
        scope: static
    -
        comment: "/**\n     * @example DELETE /api/:project/:environment/forms/:id\n     *\n     * @apiGroup Forms\n     *\n     * @param {String} project\n     * @param {String} environment\n     * @param {String} id\n     */"
        meta:
            range:
                - 2584
                - 2886
            filename: FormsController.js
            lineno: 79
            columnno: 4
            path: /home/mrzapp/Development/Web/hashbrown-cms/src/Server/Controllers
            code:
                id: astnode100052807
                name: FormsController.deleteForm
                type: MethodDefinition
                paramnames:
                    - req
                    - res
            vars:
                "": null
        examples:
            - 'DELETE /api/:project/:environment/forms/:id'
        tags:
            -
                originalTitle: apiGroup
                title: apigroup
                text: Forms
                value: Forms
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
        name: deleteForm
        longname: HashBrown.Server.Controllers.FormsController.deleteForm
        kind: function
        memberof: HashBrown.Server.Controllers.FormsController
        scope: static
    -
        comment: "/**\n     * @example POST /api/:project/:environment/forms/pull/:id\n     *\n     * @apiGroup Forms\n     *\n     * @param {String} project\n     * @param {String} environment\n     * @param {String} id\n     *\n     * @returns {Form} The pulled Form\n     */"
        meta:
            range:
                - 3150
                - 3778
            filename: FormsController.js
            lineno: 100
            columnno: 4
            path: /home/mrzapp/Development/Web/hashbrown-cms/src/Server/Controllers
            code:
                id: astnode100052868
                name: FormsController.pullForm
                type: MethodDefinition
                paramnames:
                    - req
                    - res
            vars:
                "": null
        examples:
            - 'POST /api/:project/:environment/forms/pull/:id'
        tags:
            -
                originalTitle: apiGroup
                title: apigroup
                text: Forms
                value: Forms
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
                        - Form
                description: 'The pulled Form'
        name: pullForm
        longname: HashBrown.Server.Controllers.FormsController.pullForm
        kind: function
        memberof: HashBrown.Server.Controllers.FormsController
        scope: static
    -
        comment: "/**\n     * @example POST /api/:project/:environment/forms/push/:id\n     *\n     * @apiGroup Forms\n     *\n     * @param {String} project\n     * @param {String} environment\n     * @param {String} id\n     *\n     * @returns {Form} The pushed Form id\n     */"
        meta:
            range:
                - 4045
                - 4526
            filename: FormsController.js
            lineno: 128
            columnno: 4
            path: /home/mrzapp/Development/Web/hashbrown-cms/src/Server/Controllers
            code:
                id: astnode100052973
                name: FormsController.pushForm
                type: MethodDefinition
                paramnames:
                    - req
                    - res
            vars:
                "": null
        examples:
            - 'POST /api/:project/:environment/forms/push/:id'
        tags:
            -
                originalTitle: apiGroup
                title: apigroup
                text: Forms
                value: Forms
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
                        - Form
                description: 'The pushed Form id'
        name: pushForm
        longname: HashBrown.Server.Controllers.FormsController.pushForm
        kind: function
        memberof: HashBrown.Server.Controllers.FormsController
        scope: static
    -
        comment: "/**\n     * @example GET /api/:project/:environment/forms/:id\n     *\n     * @apiGroup Forms\n     *\n     * @param {String} project\n     * @param {String} environment\n     * @param {String} id\n     *\n     * @returns {Form} Form\n     */"
        meta:
            range:
                - 4769
                - 5081
            filename: FormsController.js
            lineno: 154
            columnno: 4
            path: /home/mrzapp/Development/Web/hashbrown-cms/src/Server/Controllers
            code:
                id: astnode100053062
                name: FormsController.getForm
                type: MethodDefinition
                paramnames:
                    - req
                    - res
            vars:
                "": null
        examples:
            - 'GET /api/:project/:environment/forms/:id'
        tags:
            -
                originalTitle: apiGroup
                title: apigroup
                text: Forms
                value: Forms
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
                        - Form
                description: Form
        name: getForm
        longname: HashBrown.Server.Controllers.FormsController.getForm
        kind: function
        memberof: HashBrown.Server.Controllers.FormsController
        scope: static
    -
        comment: "/**\n     * @example GET /api/:project/:environment/forms/:id/entries\n     *\n     * @apiGroup Forms\n     *\n     * @param {String} project\n     * @param {String} environment\n     * @param {String} id\n     *\n     * @returns {String} CSV string\n     */"
        meta:
            range:
                - 5344
                - 6274
            filename: FormsController.js
            lineno: 175
            columnno: 4
            path: /home/mrzapp/Development/Web/hashbrown-cms/src/Server/Controllers
            code:
                id: astnode100053127
                name: FormsController.getAllEntries
                type: MethodDefinition
                paramnames:
                    - req
                    - res
            vars:
                "": null
        examples:
            - 'GET /api/:project/:environment/forms/:id/entries'
        tags:
            -
                originalTitle: apiGroup
                title: apigroup
                text: Forms
                value: Forms
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
                description: 'CSV string'
        name: getAllEntries
        longname: HashBrown.Server.Controllers.FormsController.getAllEntries
        kind: function
        memberof: HashBrown.Server.Controllers.FormsController
        scope: static
    -
        comment: "/**\n     * @example POST /api/:project/:environment/forms/:id\n     *\n     * @apiGroup Forms\n     *\n     * @param {String} project\n     * @param {String} environment\n     * @param {String} id\n     *\n     * @param {Form} The Form model to update\n     *\n     * @returns {Form} Form\n     */"
        meta:
            range:
                - 6575
                - 7031
            filename: FormsController.js
            lineno: 220
            columnno: 4
            path: /home/mrzapp/Development/Web/hashbrown-cms/src/Server/Controllers
            code:
                id: astnode100053283
                name: FormsController.postForm
                type: MethodDefinition
                paramnames:
                    - req
                    - res
            vars:
                "": null
        examples:
            - 'POST /api/:project/:environment/forms/:id'
        tags:
            -
                originalTitle: apiGroup
                title: apigroup
                text: Forms
                value: Forms
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
                        - Form
                description: 'Form model to update'
                name: The
        returns:
            -
                type:
                    names:
                        - Form
                description: Form
        name: postForm
        longname: HashBrown.Server.Controllers.FormsController.postForm
        kind: function
        memberof: HashBrown.Server.Controllers.FormsController
        scope: static
    -
        comment: "/**\n     * @example POST /api/:project/:environment/forms/new\n     *\n     * @apiGroup Forms\n     *\n     * @param {String} project\n     * @param {String} environment\n     *\n     * @returns {String} The created Form id\n     */"
        meta:
            range:
                - 7266
                - 7557
            filename: FormsController.js
            lineno: 242
            columnno: 4
            path: /home/mrzapp/Development/Web/hashbrown-cms/src/Server/Controllers
            code:
                id: astnode100053376
                name: FormsController.postNew
                type: MethodDefinition
                paramnames:
                    - req
                    - res
            vars:
                "": null
        examples:
            - 'POST /api/:project/:environment/forms/new'
        tags:
            -
                originalTitle: apiGroup
                title: apigroup
                text: Forms
                value: Forms
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
                description: 'The created Form id'
        name: postNew
        longname: HashBrown.Server.Controllers.FormsController.postNew
        kind: function
        memberof: HashBrown.Server.Controllers.FormsController
        scope: static
    -
        comment: "/**\n     * @example POST /api/:project/:environment/forms/:id/submit\n     *\n     * @apiGroup Forms\n     *\n     * @param {String} project\n     * @param {String} environment\n     * @param {String} id\n     *\n     * @param {Object} entries The submitted entries\n     */"
        meta:
            range:
                - 7833
                - 9074
            filename: FormsController.js
            lineno: 263
            columnno: 4
            path: /home/mrzapp/Development/Web/hashbrown-cms/src/Server/Controllers
            code:
                id: astnode100053435
                name: FormsController.postSubmit
                type: MethodDefinition
                paramnames:
                    - req
                    - res
            vars:
                "": null
        examples:
            - 'POST /api/:project/:environment/forms/:id/submit'
        tags:
            -
                originalTitle: apiGroup
                title: apigroup
                text: Forms
                value: Forms
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
                description: 'The submitted entries'
                name: entries
        name: postSubmit
        longname: HashBrown.Server.Controllers.FormsController.postSubmit
        kind: function
        memberof: HashBrown.Server.Controllers.FormsController
        scope: static
    -
        comment: "/**\n     * @example POST /api/:project/:environment/forms/clear/:id\n     *\n     * @apiGroup Forms\n     *\n     * @param {String} project\n     * @param {String} environment\n     * @param {String} id\n     */"
        meta:
            range:
                - 9289
                - 9598
            filename: FormsController.js
            lineno: 307
            columnno: 4
            path: /home/mrzapp/Development/Web/hashbrown-cms/src/Server/Controllers
            code:
                id: astnode100053589
                name: FormsController.postClearAllEntries
                type: MethodDefinition
                paramnames:
                    - req
                    - res
            vars:
                "": null
        examples:
            - 'POST /api/:project/:environment/forms/clear/:id'
        tags:
            -
                originalTitle: apiGroup
                title: apigroup
                text: Forms
                value: Forms
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
        name: postClearAllEntries
        longname: HashBrown.Server.Controllers.FormsController.postClearAllEntries
        kind: function
        memberof: HashBrown.Server.Controllers.FormsController
        scope: static
shortname: FormsController
layout: docPage
permalink: /docs/hashbrown/server/controllers/formscontroller/
title: 'API: FormsController'
description: 'The controller for Forms'

---