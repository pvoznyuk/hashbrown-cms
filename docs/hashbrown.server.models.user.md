---
comment: "/**\n * A model for Users\n *\n * @memberof HashBrown.Server.Models\n */"
meta:
    range:
        - 414
        - 5149
    filename: User.js
    lineno: 25
    columnno: 0
    path: /home/mrzapp/Development/Web/hashbrown-cms/src/Server/Models
    code:
        id: astnode100078277
        name: User
        type: ClassDeclaration
        paramnames:
            - params
classdesc: 'A model for Users'
memberof: HashBrown.Server.Models
name: User
longname: HashBrown.Server.Models.User
kind: class
scope: static
params: []
methods:
    -
        comment: "/**\n     * Removes a token\n     *\n     * @param {String} token\n     */"
        meta:
            range:
                - 1015
                - 1213
            filename: User.js
            lineno: 51
            columnno: 4
            path: /home/mrzapp/Development/Web/hashbrown-cms/src/Server/Models
            code:
                id: astnode100078350
                name: 'User#removeToken'
                type: MethodDefinition
                paramnames:
                    - token
            vars:
                "": null
        description: 'Removes a token'
        params:
            -
                type:
                    names:
                        - String
                name: token
        name: removeToken
        longname: 'HashBrown.Server.Models.User#removeToken'
        kind: function
        memberof: HashBrown.Server.Models.User
        scope: instance
    -
        comment: "/**\n     * Clears all sensitive data\n     */"
        meta:
            range:
                - 1268
                - 1387
            filename: User.js
            lineno: 63
            columnno: 4
            path: /home/mrzapp/Development/Web/hashbrown-cms/src/Server/Models
            code:
                id: astnode100078384
                name: 'User#clearSensitiveData'
                type: MethodDefinition
                paramnames: []
            vars:
                "": null
        description: 'Clears all sensitive data'
        name: clearSensitiveData
        longname: 'HashBrown.Server.Models.User#clearSensitiveData'
        kind: function
        memberof: HashBrown.Server.Models.User
        scope: instance
        params: []
    -
        comment: "/**\n     * Sets all project scopes\n     *\n     * @param {String} project\n     * @param {Array} scopes\n     */"
        meta:
            range:
                - 1507
                - 1666
            filename: User.js
            lineno: 75
            columnno: 4
            path: /home/mrzapp/Development/Web/hashbrown-cms/src/Server/Models
            code:
                id: astnode100078406
                name: 'User#setScopes'
                type: MethodDefinition
                paramnames:
                    - project
                    - scopes
            vars:
                "": null
        description: 'Sets all project scopes'
        params:
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
        name: setScopes
        longname: 'HashBrown.Server.Models.User#setScopes'
        kind: function
        memberof: HashBrown.Server.Models.User
        scope: instance
    -
        comment: "/**\n     * Creates a new access token\n     *\n     * @param {Boolean} persist\n     */"
        meta:
            range:
                - 1765
                - 2213
            filename: User.js
            lineno: 88
            columnno: 4
            path: /home/mrzapp/Development/Web/hashbrown-cms/src/Server/Models
            code:
                id: astnode100078436
                name: 'User#generateToken'
                type: MethodDefinition
                paramnames:
                    - persist
            vars:
                "": null
        description: 'Creates a new access token'
        params:
            -
                type:
                    names:
                        - Boolean
                name: persist
        name: generateToken
        longname: 'HashBrown.Server.Models.User#generateToken'
        kind: function
        memberof: HashBrown.Server.Models.User
        scope: instance
    -
        comment: "/**\n     * Validate token\n     *\n     * @param {String} token\n     *\n     * @returns {Boolean} valid\n     */"
        meta:
            range:
                - 2332
                - 2764
            filename: User.js
            lineno: 115
            columnno: 4
            path: /home/mrzapp/Development/Web/hashbrown-cms/src/Server/Models
            code:
                id: astnode100078493
                name: 'User#validateToken'
                type: MethodDefinition
                paramnames:
                    - token
            vars:
                "": null
        description: 'Validate token'
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
                        - Boolean
                description: valid
        name: validateToken
        longname: 'HashBrown.Server.Models.User#validateToken'
        kind: function
        memberof: HashBrown.Server.Models.User
        scope: instance
    -
        comment: "/**\n     * Cleans up expired tokens\n     */"
        meta:
            range:
                - 2818
                - 3153
            filename: User.js
            lineno: 133
            columnno: 4
            path: /home/mrzapp/Development/Web/hashbrown-cms/src/Server/Models
            code:
                id: astnode100078563
                name: 'User#cleanUpTokens'
                type: MethodDefinition
                paramnames: []
            vars:
                "": null
        description: 'Cleans up expired tokens'
        name: cleanUpTokens
        longname: 'HashBrown.Server.Models.User#cleanUpTokens'
        kind: function
        memberof: HashBrown.Server.Models.User
        scope: instance
        params: []
    -
        comment: "/**\n     * Validate password\n     *\n     * @param {String} password\n     *\n     * @returns {Boolean} valid\n     */"
        meta:
            range:
                - 3278
                - 3438
            filename: User.js
            lineno: 151
            columnno: 4
            path: /home/mrzapp/Development/Web/hashbrown-cms/src/Server/Models
            code:
                id: astnode100078621
                name: 'User#validatePassword'
                type: MethodDefinition
                paramnames:
                    - password
            vars:
                "": null
        description: 'Validate password'
        params:
            -
                type:
                    names:
                        - String
                name: password
        returns:
            -
                type:
                    names:
                        - Boolean
                description: valid
        name: validatePassword
        longname: 'HashBrown.Server.Models.User#validatePassword'
        kind: function
        memberof: HashBrown.Server.Models.User
        scope: instance
    -
        comment: "/**\n     * Set new password\n     *\n     * @param {String} password\n     */"
        meta:
            range:
                - 3523
                - 3751
            filename: User.js
            lineno: 162
            columnno: 4
            path: /home/mrzapp/Development/Web/hashbrown-cms/src/Server/Models
            code:
                id: astnode100078647
                name: 'User#setPassword'
                type: MethodDefinition
                paramnames:
                    - password
            vars:
                "": null
        description: 'Set new password'
        params:
            -
                type:
                    names:
                        - String
                name: password
        name: setPassword
        longname: 'HashBrown.Server.Models.User#setPassword'
        kind: function
        memberof: HashBrown.Server.Models.User
        scope: instance
    -
        comment: "/**\n     * Creates a password hash and salt\n     *\n     * @param {String} password\n     *\n     * @returns {Object} Hash and salt\n     */"
        meta:
            range:
                - 3898
                - 4149
            filename: User.js
            lineno: 177
            columnno: 4
            path: /home/mrzapp/Development/Web/hashbrown-cms/src/Server/Models
            code:
                id: astnode100078689
                name: User.createPasswordHashSalt
                type: MethodDefinition
                paramnames:
                    - password
            vars:
                "": null
        description: 'Creates a password hash and salt'
        params:
            -
                type:
                    names:
                        - String
                name: password
        returns:
            -
                type:
                    names:
                        - Object
                description: 'Hash and salt'
        name: createPasswordHashSalt
        longname: HashBrown.Server.Models.User.createPasswordHashSalt
        kind: function
        memberof: HashBrown.Server.Models.User
        scope: static
    -
        comment: "/**\n     * Creates a sha512 hash\n     *\n     * @param {String} string\n     * @param {String} salt\n     *\n     * @returns {String} hash\n     */"
        meta:
            range:
                - 4302
                - 4485
            filename: User.js
            lineno: 195
            columnno: 4
            path: /home/mrzapp/Development/Web/hashbrown-cms/src/Server/Models
            code:
                id: astnode100078721
                name: User.sha512
                type: MethodDefinition
                paramnames:
                    - string
                    - salt
            vars:
                "": null
        description: 'Creates a sha512 hash'
        params:
            -
                type:
                    names:
                        - String
                name: string
            -
                type:
                    names:
                        - String
                name: salt
        returns:
            -
                type:
                    names:
                        - String
                description: hash
        name: sha512
        longname: HashBrown.Server.Models.User.sha512
        kind: function
        memberof: HashBrown.Server.Models.User
        scope: static
    -
        comment: "/**\n     * Creates a new user object\n     *\n     * @param {String} username\n     * @param {String} password\n     *\n     * @returns {User} user\n     */"
        meta:
            range:
                - 4646
                - 5147
            filename: User.js
            lineno: 213
            columnno: 4
            path: /home/mrzapp/Development/Web/hashbrown-cms/src/Server/Models
            code:
                id: astnode100078752
                name: User.create
                type: MethodDefinition
                paramnames:
                    - username
                    - password
            vars:
                "": null
        description: 'Creates a new user object'
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
        returns:
            -
                type:
                    names:
                        - User
                description: user
        name: create
        longname: HashBrown.Server.Models.User.create
        kind: function
        memberof: HashBrown.Server.Models.User
        scope: static
shortname: User
layout: docPage
permalink: /docs/hashbrown/server/models/user/
title: 'API: User'
description: 'A model for Users'

---