---
comment: "/**\n * A model for Users\n *\n * @memberof HashBrown.Common.Models\n */"
meta:
    range:
        - 119
        - 2433
    filename: User.js
    lineno: 10
    columnno: 0
    path: /home/mrzapp/Development/Web/hashbrown-cms/src/Common/Models
    code:
        id: astnode100049141
        name: User
        type: ClassDeclaration
        paramnames:
            - params
classdesc: 'A model for Users'
memberof: HashBrown.Common.Models
name: User
longname: HashBrown.Common.Models.User
kind: class
scope: static
params: []
methods:
    -
        comment: "/**\n     * Gets all project scopes\n     *\n     * @param {String} project\n     * @param {Boolean} upsert\n     *\n     * @returns {Array} scopes\n     */"
        meta:
            range:
                - 665
                - 901
            filename: User.js
            lineno: 33
            columnno: 4
            path: /home/mrzapp/Development/Web/hashbrown-cms/src/Common/Models
            code:
                id: astnode100049210
                name: 'User#getScopes'
                type: MethodDefinition
                paramnames:
                    - project
                    - upsert
            vars:
                "": null
        description: 'Gets all project scopes'
        params:
            -
                type:
                    names:
                        - String
                name: project
            -
                type:
                    names:
                        - Boolean
                name: upsert
        returns:
            -
                type:
                    names:
                        - Array
                description: scopes
        name: getScopes
        longname: 'HashBrown.Common.Models.User#getScopes'
        kind: function
        memberof: HashBrown.Common.Models.User
        scope: instance
    -
        comment: "/**\n     * Checks if a user has a project scope\n     *\n     * @param {String} project\n     * @param {String} scope\n     *\n     * @returns {Boolean} hasScope\n     */"
        meta:
            range:
                - 1076
                - 1468
            filename: User.js
            lineno: 53
            columnno: 4
            path: /home/mrzapp/Development/Web/hashbrown-cms/src/Common/Models
            code:
                id: astnode100049252
                name: 'User#hasScope'
                type: MethodDefinition
                paramnames:
                    - project
                    - scope
            vars:
                "": null
        description: 'Checks if a user has a project scope'
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
                name: scope
        returns:
            -
                type:
                    names:
                        - Boolean
                description: hasScope
        name: hasScope
        longname: 'HashBrown.Common.Models.User#hasScope'
        kind: function
        memberof: HashBrown.Common.Models.User
        scope: instance
    -
        comment: "/**\n     * Removes a scope\n     *\n     * @param {String} project\n     * @param {String|Boolean} scope\n     */"
        meta:
            range:
                - 1588
                - 1953
            filename: User.js
            lineno: 76
            columnno: 4
            path: /home/mrzapp/Development/Web/hashbrown-cms/src/Common/Models
            code:
                id: astnode100049323
                name: 'User#removeScope'
                type: MethodDefinition
                paramnames:
                    - project
                    - scope
            vars:
                "": null
        description: 'Removes a scope'
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
                        - Boolean
                name: scope
        name: removeScope
        longname: 'HashBrown.Common.Models.User#removeScope'
        kind: function
        memberof: HashBrown.Common.Models.User
        scope: instance
    -
        comment: "/**\n     * Grants a user a scope\n     *\n     * @param {String} project\n     * @param {String} scope\n     */"
        meta:
            range:
                - 2071
                - 2431
            filename: User.js
            lineno: 98
            columnno: 4
            path: /home/mrzapp/Development/Web/hashbrown-cms/src/Common/Models
            code:
                id: astnode100049384
                name: 'User#giveScope'
                type: MethodDefinition
                paramnames:
                    - project
                    - scope
            vars:
                "": null
        description: 'Grants a user a scope'
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
                name: scope
        name: giveScope
        longname: 'HashBrown.Common.Models.User#giveScope'
        kind: function
        memberof: HashBrown.Common.Models.User
        scope: instance
shortname: User
layout: docPage
permalink: /docs/hashbrown/common/models/user/
title: 'API: User'
description: 'A model for Users'

---