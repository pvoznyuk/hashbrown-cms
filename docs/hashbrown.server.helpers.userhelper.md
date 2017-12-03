---
comment: "/**\n * A helper class for managing and getting information about CMS users\n *\n * @memberof HashBrown.Server.Helpers\n */"
meta:
    range:
        - 342
        - 14837
    filename: UserHelper.js
    lineno: 15
    columnno: 0
    path: /home/mrzapp/Development/Web/hashbrown-cms/src/Server/Helpers
    code:
        id: astnode100074624
        name: UserHelper
        type: ClassDeclaration
        paramnames: []
classdesc: 'A helper class for managing and getting information about CMS users'
memberof: HashBrown.Server.Helpers
name: UserHelper
longname: HashBrown.Server.Helpers.UserHelper
kind: class
scope: static
methods:
    -
        comment: "/**\n     * Sends a welcome message\n     *\n     * @param {String} email\n     * @param {String} project\n     *\n     * @returns {Promise} Promise\n     */"
        meta:
            range:
                - 520
                - 1103
            filename: UserHelper.js
            lineno: 24
            columnno: 4
            path: /home/mrzapp/Development/Web/hashbrown-cms/src/Server/Helpers
            code:
                id: astnode100074627
                name: UserHelper.invite
                type: MethodDefinition
                paramnames:
                    - email
                    - project
            vars:
                "": null
        description: 'Sends a welcome message'
        params:
            -
                type:
                    names:
                        - String
                name: email
            -
                type:
                    names:
                        - String
                name: project
        returns:
            -
                type:
                    names:
                        - Promise
                description: Promise
        name: invite
        longname: HashBrown.Server.Helpers.UserHelper.invite
        kind: function
        memberof: HashBrown.Server.Helpers.UserHelper
        scope: static
    -
        comment: "/**\n     * Finds a User by username\n     *  \n     * @param {String} username\n     *\n     * @returns {Promise(User)} user\n     */"
        meta:
            range:
                - 1242
                - 1679
            filename: UserHelper.js
            lineno: 54
            columnno: 4
            path: /home/mrzapp/Development/Web/hashbrown-cms/src/Server/Helpers
            code:
                id: astnode100074714
                name: UserHelper.findUser
                type: MethodDefinition
                paramnames:
                    - username
            vars:
                "": null
        description: 'Finds a User by username'
        params:
            -
                type:
                    names:
                        - String
                name: username
        returns:
            -
                type:
                    names:
                        - Promise(User)
                description: user
        name: findUser
        longname: HashBrown.Server.Helpers.UserHelper.findUser
        kind: function
        memberof: HashBrown.Server.Helpers.UserHelper
        scope: static
    -
        comment: "/**\n     * Revokes all User tokens\n     *\n     * @returns {Promise} promise\n     */"
        meta:
            range:
                - 1773
                - 1977
            filename: UserHelper.js
            lineno: 75
            columnno: 4
            path: /home/mrzapp/Development/Web/hashbrown-cms/src/Server/Helpers
            code:
                id: astnode100074769
                name: UserHelper.revokeTokens
                type: MethodDefinition
                paramnames:
                    - username
            vars:
                "": null
        description: 'Revokes all User tokens'
        returns:
            -
                type:
                    names:
                        - Promise
                description: promise
        name: revokeTokens
        longname: HashBrown.Server.Helpers.UserHelper.revokeTokens
        kind: function
        memberof: HashBrown.Server.Helpers.UserHelper
        scope: static
        params: []
    -
        comment: "/**\n     * Logs in a User\n     *\n     * @param {String} username\n     * @param {String} password\n     * @param {Boolean} persist\n     *\n     * @returns {Promise} Token\n     */"
        meta:
            range:
                - 2163
                - 2906
            filename: UserHelper.js
            lineno: 93
            columnno: 4
            path: /home/mrzapp/Development/Web/hashbrown-cms/src/Server/Helpers
            code:
                id: astnode100074800
                name: UserHelper.loginUser
                type: MethodDefinition
                paramnames:
                    - username
                    - password
                    - persist
            vars:
                "": null
        description: 'Logs in a User'
        params:
            -
                type:
                    names:
                        - String
                name: username
            -
                type:
                    names:
                        - String
                name: password
            -
                type:
                    names:
                        - Boolean
                name: persist
        returns:
            -
                type:
                    names:
                        - Promise
                description: Token
        name: loginUser
        longname: HashBrown.Server.Helpers.UserHelper.loginUser
        kind: function
        memberof: HashBrown.Server.Helpers.UserHelper
        scope: static
    -
        comment: "/**\n     * Logs out a User\n     *\n     * @param {String} token\n     *\n     * @returns {Promise} Result\n     */"
        meta:
            range:
                - 3031
                - 3475
            filename: UserHelper.js
            lineno: 121
            columnno: 4
            path: /home/mrzapp/Development/Web/hashbrown-cms/src/Server/Helpers
            code:
                id: astnode100074895
                name: UserHelper.logoutUser
                type: MethodDefinition
                paramnames:
                    - token
            vars:
                "": null
        description: 'Logs out a User'
        params:
            -
                type:
                    names:
                        - String
                name: token
        returns:
            -
                type:
                    names:
                        - Promise
                description: Result
        name: logoutUser
        longname: HashBrown.Server.Helpers.UserHelper.logoutUser
        kind: function
        memberof: HashBrown.Server.Helpers.UserHelper
        scope: static
    -
        comment: "/**\n     * Finds a token\n     *  \n     * @param {String} token\n     *\n     * @returns {Promise} User\n     */"
        meta:
            range:
                - 3594
                - 4071
            filename: UserHelper.js
            lineno: 144
            columnno: 4
            path: /home/mrzapp/Development/Web/hashbrown-cms/src/Server/Helpers
            code:
                id: astnode100074964
                name: UserHelper.findToken
                type: MethodDefinition
                paramnames:
                    - token
            vars:
                "": null
        description: 'Finds a token'
        params:
            -
                type:
                    names:
                        - String
                name: token
        returns:
            -
                type:
                    names:
                        - Promise
                description: User
        name: findToken
        longname: HashBrown.Server.Helpers.UserHelper.findToken
        kind: function
        memberof: HashBrown.Server.Helpers.UserHelper
        scope: static
    -
        comment: "/**\n     * Finds an invite token\n     *  \n     * @param {String} inviteToken\n     *\n     * @returns {Promise} User\n     */"
        meta:
            range:
                - 4208
                - 4773
            filename: UserHelper.js
            lineno: 172
            columnno: 4
            path: /home/mrzapp/Development/Web/hashbrown-cms/src/Server/Helpers
            code:
                id: astnode100075018
                name: UserHelper.findInviteToken
                type: MethodDefinition
                paramnames:
                    - inviteToken
            vars:
                "": null
        description: 'Finds an invite token'
        params:
            -
                type:
                    names:
                        - String
                name: inviteToken
        returns:
            -
                type:
                    names:
                        - Promise
                description: User
        name: findInviteToken
        longname: HashBrown.Server.Helpers.UserHelper.findInviteToken
        kind: function
        memberof: HashBrown.Server.Helpers.UserHelper
        scope: static
    -
        comment: "/**\n     * Removes a User\n     *\n     * @param {String} id\n     *\n     * @returns {Promise} Promise\n     */"
        meta:
            range:
                - 4895
                - 5214
            filename: UserHelper.js
            lineno: 199
            columnno: 4
            path: /home/mrzapp/Development/Web/hashbrown-cms/src/Server/Helpers
            code:
                id: astnode100075076
                name: UserHelper.removeUser
                type: MethodDefinition
                paramnames:
                    - id
            vars:
                "": null
        description: 'Removes a User'
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
                description: Promise
        name: removeUser
        longname: HashBrown.Server.Helpers.UserHelper.removeUser
        kind: function
        memberof: HashBrown.Server.Helpers.UserHelper
        scope: static
    -
        comment: "/**\n     * Removes a Project scope from a User object\n     *\n     * @param {String} id\n     * @param {String} scope\n     *\n     * @returns {Promise} Promise\n     */"
        meta:
            range:
                - 5389
                - 6324
            filename: UserHelper.js
            lineno: 221
            columnno: 4
            path: /home/mrzapp/Development/Web/hashbrown-cms/src/Server/Helpers
            code:
                id: astnode100075112
                name: UserHelper.removeUserProjectScope
                type: MethodDefinition
                paramnames:
                    - id
                    - scope
            vars:
                "": null
        description: 'Removes a Project scope from a User object'
        params:
            -
                type:
                    names:
                        - String
                name: id
            -
                type:
                    names:
                        - String
                name: scope
        returns:
            -
                type:
                    names:
                        - Promise
                description: Promise
        name: removeUserProjectScope
        longname: HashBrown.Server.Helpers.UserHelper.removeUserProjectScope
        kind: function
        memberof: HashBrown.Server.Helpers.UserHelper
        scope: static
    -
        comment: "/**\n     * Adds a Project scope to a User object\n     *\n     * @param {String} id\n     * @param {String} project\n     * @param {Array} scopes\n     *\n     * @returns {Promise} Promise\n     */"
        meta:
            range:
                - 6529
                - 6837
            filename: UserHelper.js
            lineno: 258
            columnno: 4
            path: /home/mrzapp/Development/Web/hashbrown-cms/src/Server/Helpers
            code:
                id: astnode100075224
                name: UserHelper.addUserProjectScope
                type: MethodDefinition
                paramnames:
                    - id
                    - project
                    - scopes
            vars:
                "": null
        description: 'Adds a Project scope to a User object'
        params:
            -
                type:
                    names:
                        - String
                name: id
            -
                type:
                    names:
                        - String
                name: project
            -
                type:
                    names:
                        - Array
                name: scopes
        returns:
            -
                type:
                    names:
                        - Promise
                description: Promise
        name: addUserProjectScope
        longname: HashBrown.Server.Helpers.UserHelper.addUserProjectScope
        kind: function
        memberof: HashBrown.Server.Helpers.UserHelper
        scope: static
    -
        comment: "/**\n     * Activates an invited User\n     *\n     * @param {String} username\n     * @param {String} password\n     * @param {String} fullName\n     * @param {String} inviteToken\n     *\n     * @returns {Promise} Login token\n     */"
        meta:
            range:
                - 7075
                - 8487
            filename: UserHelper.js
            lineno: 279
            columnno: 4
            path: /home/mrzapp/Development/Web/hashbrown-cms/src/Server/Helpers
            code:
                id: astnode100075274
                name: UserHelper.activateUser
                type: MethodDefinition
                paramnames:
                    - username
                    - password
                    - fullName
                    - inviteToken
            vars:
                "": null
        description: 'Activates an invited User'
        params:
            -
                type:
                    names:
                        - String
                name: username
            -
                type:
                    names:
                        - String
                name: password
            -
                type:
                    names:
                        - String
                name: fullName
            -
                type:
                    names:
                        - String
                name: inviteToken
        returns:
            -
                type:
                    names:
                        - Promise
                description: 'Login token'
        name: activateUser
        longname: HashBrown.Server.Helpers.UserHelper.activateUser
        kind: function
        memberof: HashBrown.Server.Helpers.UserHelper
        scope: static
    -
        comment: "/**\n     * Creates a User\n     *\n     * @param {String} username\n     * @param {String} password\n     * @param {Boolean} admin\n     * @param {Object} scopes\n     *\n     * @returns {Promise} promise\n     */"
        meta:
            range:
                - 8703
                - 10291
            filename: UserHelper.js
            lineno: 336
            columnno: 4
            path: /home/mrzapp/Development/Web/hashbrown-cms/src/Server/Helpers
            code:
                id: astnode100075436
                name: UserHelper.createUser
                type: MethodDefinition
                paramnames:
                    - username
                    - password
                    - admin
                    - scopes
            vars:
                "": null
        description: 'Creates a User'
        params:
            -
                type:
                    names:
                        - String
                name: username
            -
                type:
                    names:
                        - String
                name: password
            -
                type:
                    names:
                        - Boolean
                name: admin
            -
                type:
                    names:
                        - Object
                name: scopes
        returns:
            -
                type:
                    names:
                        - Promise
                description: promise
        name: createUser
        longname: HashBrown.Server.Helpers.UserHelper.createUser
        kind: function
        memberof: HashBrown.Server.Helpers.UserHelper
        scope: static
    -
        comment: "/**\n     * Makes a User an admin\n     *\n     * @param {String} username\n     *\n     * @returns {Promise} Promise\n     */"
        meta:
            range:
                - 10422
                - 10622
            filename: UserHelper.js
            lineno: 395
            columnno: 4
            path: /home/mrzapp/Development/Web/hashbrown-cms/src/Server/Helpers
            code:
                id: astnode100075595
                name: UserHelper.makeUserAdmin
                type: MethodDefinition
                paramnames:
                    - username
            vars:
                "": null
        description: 'Makes a User an admin'
        params:
            -
                type:
                    names:
                        - String
                name: username
        returns:
            -
                type:
                    names:
                        - Promise
                description: Promise
        name: makeUserAdmin
        longname: HashBrown.Server.Helpers.UserHelper.makeUserAdmin
        kind: function
        memberof: HashBrown.Server.Helpers.UserHelper
        scope: static
    -
        comment: "/**\n     * Gets a list of all users\n     *\n     * @param {String} project\n     *\n     * @returns {Promise} Array of User objects\n     */"
        meta:
            range:
                - 10769
                - 11865
            filename: UserHelper.js
            lineno: 411
            columnno: 4
            path: /home/mrzapp/Development/Web/hashbrown-cms/src/Server/Helpers
            code:
                id: astnode100075625
                name: UserHelper.getAllUsers
                type: MethodDefinition
                paramnames:
                    - project
            vars:
                "": null
        description: 'Gets a list of all users'
        params:
            -
                type:
                    names:
                        - String
                name: project
        returns:
            -
                type:
                    names:
                        - Promise
                description: 'Array of User objects'
        name: getAllUsers
        longname: HashBrown.Server.Helpers.UserHelper.getAllUsers
        kind: function
        memberof: HashBrown.Server.Helpers.UserHelper
        scope: static
    -
        comment: "/**\n     * Gets a single User by id\n     *\n     * @param {String} id\n     *\n     * @returns {Promise} User object\n     */"
        meta:
            range:
                - 12001
                - 12344
            filename: UserHelper.js
            lineno: 463
            columnno: 4
            path: /home/mrzapp/Development/Web/hashbrown-cms/src/Server/Helpers
            code:
                id: astnode100075746
                name: UserHelper.getUserById
                type: MethodDefinition
                paramnames:
                    - id
            vars:
                "": null
        description: 'Gets a single User by id'
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
                description: 'User object'
        name: getUserById
        longname: HashBrown.Server.Helpers.UserHelper.getUserById
        kind: function
        memberof: HashBrown.Server.Helpers.UserHelper
        scope: static
    -
        comment: "/**\n     * Gets a single User\n     *\n     * @param {String} username\n     *\n     * @returns {Promise} User object\n     */"
        meta:
            range:
                - 12480
                - 12843
            filename: UserHelper.js
            lineno: 488
            columnno: 4
            path: /home/mrzapp/Development/Web/hashbrown-cms/src/Server/Helpers
            code:
                id: astnode100075782
                name: UserHelper.getUser
                type: MethodDefinition
                paramnames:
                    - username
            vars:
                "": null
        description: 'Gets a single User'
        params:
            -
                type:
                    names:
                        - String
                name: username
        returns:
            -
                type:
                    names:
                        - Promise
                description: 'User object'
        name: getUser
        longname: HashBrown.Server.Helpers.UserHelper.getUser
        kind: function
        memberof: HashBrown.Server.Helpers.UserHelper
        scope: static
    -
        comment: "/**\n     * Cleans up expired tokens\n     *\n     * @returns {Promise} promise\n     */"
        meta:
            range:
                - 12938
                - 13391
            filename: UserHelper.js
            lineno: 511
            columnno: 4
            path: /home/mrzapp/Development/Web/hashbrown-cms/src/Server/Helpers
            code:
                id: astnode100075818
                name: UserHelper.cleanUpTokens
                type: MethodDefinition
                paramnames:
                    - username
            vars:
                "": null
        description: 'Cleans up expired tokens'
        returns:
            -
                type:
                    names:
                        - Promise
                description: promise
        name: cleanUpTokens
        longname: HashBrown.Server.Helpers.UserHelper.cleanUpTokens
        kind: function
        memberof: HashBrown.Server.Helpers.UserHelper
        scope: static
        params: []
    -
        comment: "/**\n     * Updates a User by id\n     *\n     * @param {String} id\n     * @param {Object} properties\n     *\n     * @returns {Promise} Promise\n     */"
        meta:
            range:
                - 13553
                - 14147
            filename: UserHelper.js
            lineno: 536
            columnno: 4
            path: /home/mrzapp/Development/Web/hashbrown-cms/src/Server/Helpers
            code:
                id: astnode100075871
                name: UserHelper.updateUserById
                type: MethodDefinition
                paramnames:
                    - id
                    - properties
            vars:
                "": null
        description: 'Updates a User by id'
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
                name: properties
        returns:
            -
                type:
                    names:
                        - Promise
                description: Promise
        name: updateUserById
        longname: HashBrown.Server.Helpers.UserHelper.updateUserById
        kind: function
        memberof: HashBrown.Server.Helpers.UserHelper
        scope: static
    -
        comment: "/**\n     * Updates a User\n     *\n     * @param {String} username\n     * @param {Object} properties\n     *\n     * @returns {Promise} promise\n     */"
        meta:
            range:
                - 14305
                - 14835
            filename: UserHelper.js
            lineno: 563
            columnno: 4
            path: /home/mrzapp/Development/Web/hashbrown-cms/src/Server/Helpers
            code:
                id: astnode100075944
                name: UserHelper.updateUser
                type: MethodDefinition
                paramnames:
                    - username
                    - properties
            vars:
                "": null
        description: 'Updates a User'
        params:
            -
                type:
                    names:
                        - String
                name: username
            -
                type:
                    names:
                        - Object
                name: properties
        returns:
            -
                type:
                    names:
                        - Promise
                description: promise
        name: updateUser
        longname: HashBrown.Server.Helpers.UserHelper.updateUser
        kind: function
        memberof: HashBrown.Server.Helpers.UserHelper
        scope: static
shortname: UserHelper
layout: docPage
permalink: /docs/hashbrown/server/helpers/userhelper/
title: 'API: UserHelper'
description: 'A helper class for managing and getting information about CMS users'

---