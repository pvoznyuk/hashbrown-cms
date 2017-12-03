---
comment: "/**\n * The controller for Users\n *\n * @memberof HashBrown.Server.Controllers\n */"
meta:
    range:
        - 96
        - 7984
    filename: UserController.js
    lineno: 8
    columnno: 0
    path: /home/mrzapp/Development/Web/hashbrown-cms/src/Server/Controllers
    code:
        id: astnode100059232
        name: UserController
        type: ClassDeclaration
        paramnames: []
classdesc: 'The controller for Users'
memberof: HashBrown.Server.Controllers
name: UserController
longname: HashBrown.Server.Controllers.UserController
kind: class
scope: static
methods:
    -
        comment: "/**\n     * Initialises this controller\n     */"
        meta:
            range:
                - 209
                - 1361
            filename: UserController.js
            lineno: 12
            columnno: 4
            path: /home/mrzapp/Development/Web/hashbrown-cms/src/Server/Controllers
            code:
                id: astnode100059238
                name: UserController.init
                type: MethodDefinition
                paramnames:
                    - app
            vars:
                "": null
        description: 'Initialises this controller'
        name: init
        longname: HashBrown.Server.Controllers.UserController.init
        kind: function
        memberof: HashBrown.Server.Controllers.UserController
        scope: static
        params: []
    -
        comment: "/**\n     * Activates an invited user\n     */"
        meta:
            range:
                - 1424
                - 1931
            filename: UserController.js
            lineno: 34
            columnno: 4
            path: /home/mrzapp/Development/Web/hashbrown-cms/src/Server/Controllers
            code:
                id: astnode100059424
                name: UserController.postActivate
                type: MethodDefinition
                paramnames:
                    - req
                    - res
            vars:
                "": null
        description: 'Activates an invited user'
        name: postActivate
        longname: HashBrown.Server.Controllers.UserController.postActivate
        kind: function
        memberof: HashBrown.Server.Controllers.UserController
        scope: static
        params: []
    -
        comment: "/**\n     * Invites a user\n     */"
        meta:
            range:
                - 1975
                - 2263
            filename: UserController.js
            lineno: 52
            columnno: 4
            path: /home/mrzapp/Development/Web/hashbrown-cms/src/Server/Controllers
            code:
                id: astnode100059516
                name: UserController.postInvite
                type: MethodDefinition
                paramnames:
                    - req
                    - res
            vars:
                "": null
        description: 'Invites a user'
        name: postInvite
        longname: HashBrown.Server.Controllers.UserController.postInvite
        kind: function
        memberof: HashBrown.Server.Controllers.UserController
        scope: static
        params: []
    -
        comment: "/**\n     * @example POST /api/user/login\n     *\n     * @apiGroup User\n     *\n     * @param {Object} credentials { username: String, password: String } \n     *\n     * @param {String} persist \"true\"/\"false\"\n     *\n     * @returns {String} Session token\n     */"
        meta:
            range:
                - 2533
                - 3009
            filename: UserController.js
            lineno: 73
            columnno: 4
            path: /home/mrzapp/Development/Web/hashbrown-cms/src/Server/Controllers
            code:
                id: astnode100059577
                name: UserController.login
                type: MethodDefinition
                paramnames:
                    - req
                    - res
            vars:
                "": null
        examples:
            - 'POST /api/user/login'
        tags:
            -
                originalTitle: apiGroup
                title: apigroup
                text: User
                value: User
        params:
            -
                type:
                    names:
                        - Object
                description: '{ username: String, password: String }'
                name: credentials
            -
                type:
                    names:
                        - String
                description: '"true"/"false"'
                name: persist
        returns:
            -
                type:
                    names:
                        - String
                description: 'Session token'
        name: login
        longname: HashBrown.Server.Controllers.UserController.login
        kind: function
        memberof: HashBrown.Server.Controllers.UserController
        scope: static
    -
        comment: "/** \n     * Logs out a user\n     */"
        meta:
            range:
                - 3059
                - 3356
            filename: UserController.js
            lineno: 90
            columnno: 4
            path: /home/mrzapp/Development/Web/hashbrown-cms/src/Server/Controllers
            code:
                id: astnode100059670
                name: UserController.logout
                type: MethodDefinition
                paramnames:
                    - req
                    - res
            vars:
                "": null
        description: 'Logs out a user'
        name: logout
        longname: HashBrown.Server.Controllers.UserController.logout
        kind: function
        memberof: HashBrown.Server.Controllers.UserController
        scope: static
        params: []
    -
        comment: "/**\n     * Gets current user\n     */"
        meta:
            range:
                - 3407
                - 3823
            filename: UserController.js
            lineno: 103
            columnno: 4
            path: /home/mrzapp/Development/Web/hashbrown-cms/src/Server/Controllers
            code:
                id: astnode100059730
                name: UserController.getCurrentUser
                type: MethodDefinition
                paramnames:
                    - req
                    - res
            vars:
                "": null
        description: 'Gets current user'
        name: getCurrentUser
        longname: HashBrown.Server.Controllers.UserController.getCurrentUser
        kind: function
        memberof: HashBrown.Server.Controllers.UserController
        scope: static
        params: []
    -
        comment: "/**\n     * Get current scopes\n     */"
        meta:
            range:
                - 3871
                - 4135
            filename: UserController.js
            lineno: 122
            columnno: 4
            path: /home/mrzapp/Development/Web/hashbrown-cms/src/Server/Controllers
            code:
                id: astnode100059804
                name: UserController.getScopes
                type: MethodDefinition
                paramnames:
                    - req
                    - res
            vars:
                "": null
        description: 'Get current scopes'
        name: getScopes
        longname: HashBrown.Server.Controllers.UserController.getScopes
        kind: function
        memberof: HashBrown.Server.Controllers.UserController
        scope: static
        params: []
    -
        comment: "/**\n     * Get all users\n     */"
        meta:
            range:
                - 4182
                - 4789
            filename: UserController.js
            lineno: 135
            columnno: 4
            path: /home/mrzapp/Development/Web/hashbrown-cms/src/Server/Controllers
            code:
                id: astnode100059854
                name: UserController.getUsers
                type: MethodDefinition
                paramnames:
                    - req
                    - res
            vars:
                "": null
        description: 'Get all users'
        name: getUsers
        longname: HashBrown.Server.Controllers.UserController.getUsers
        kind: function
        memberof: HashBrown.Server.Controllers.UserController
        scope: static
        params: []
    -
        comment: "/**\n     * Gets s specific user\n     */"
        meta:
            range:
                - 4843
                - 5141
            filename: UserController.js
            lineno: 159
            columnno: 4
            path: /home/mrzapp/Development/Web/hashbrown-cms/src/Server/Controllers
            code:
                id: astnode100059970
                name: UserController.getUser
                type: MethodDefinition
                paramnames:
                    - req
                    - res
            vars:
                "": null
        description: 'Gets s specific user'
        name: getUser
        longname: HashBrown.Server.Controllers.UserController.getUser
        kind: function
        memberof: HashBrown.Server.Controllers.UserController
        scope: static
        params: []
    -
        comment: "/**\n     * Updates a user\n     */"
        meta:
            range:
                - 5185
                - 6215
            filename: UserController.js
            lineno: 174
            columnno: 4
            path: /home/mrzapp/Development/Web/hashbrown-cms/src/Server/Controllers
            code:
                id: astnode100060030
                name: UserController.postUser
                type: MethodDefinition
                paramnames:
                    - req
                    - res
            vars:
                "": null
        description: 'Updates a user'
        name: postUser
        longname: HashBrown.Server.Controllers.UserController.postUser
        kind: function
        memberof: HashBrown.Server.Controllers.UserController
        scope: static
        params: []
    -
        comment: "/**\n     * Deletes a user from the current project scope\n     */"
        meta:
            range:
                - 6294
                - 6591
            filename: UserController.js
            lineno: 208
            columnno: 4
            path: /home/mrzapp/Development/Web/hashbrown-cms/src/Server/Controllers
            code:
                id: astnode100060182
                name: UserController.deleteUser
                type: MethodDefinition
                paramnames:
                    - req
                    - res
            vars:
                "": null
        description: 'Deletes a user from the current project scope'
        name: deleteUser
        longname: HashBrown.Server.Controllers.UserController.deleteUser
        kind: function
        memberof: HashBrown.Server.Controllers.UserController
        scope: static
        params: []
    -
        comment: "/**\n     * Creates the first admin\n     */"
        meta:
            range:
                - 6648
                - 7513
            filename: UserController.js
            lineno: 223
            columnno: 4
            path: /home/mrzapp/Development/Web/hashbrown-cms/src/Server/Controllers
            code:
                id: astnode100060242
                name: UserController.createFirstAdmin
                type: MethodDefinition
                paramnames:
                    - req
                    - res
            vars:
                "": null
        description: 'Creates the first admin'
        name: createFirstAdmin
        longname: HashBrown.Server.Controllers.UserController.createFirstAdmin
        kind: function
        memberof: HashBrown.Server.Controllers.UserController
        scope: static
        params: []
    -
        comment: "/**\n     * Creates a user\n     */"
        meta:
            range:
                - 7561
                - 7982
            filename: UserController.js
            lineno: 249
            columnno: 4
            path: /home/mrzapp/Development/Web/hashbrown-cms/src/Server/Controllers
            code:
                id: astnode100060366
                name: UserController.createUser
                type: MethodDefinition
                paramnames:
                    - req
                    - res
            vars:
                "": null
        description: 'Creates a user'
        name: createUser
        longname: HashBrown.Server.Controllers.UserController.createUser
        kind: function
        memberof: HashBrown.Server.Controllers.UserController
        scope: static
        params: []
shortname: UserController
layout: docPage
permalink: /docs/hashbrown/server/controllers/usercontroller/
title: 'API: UserController'
description: 'The controller for Users'

---