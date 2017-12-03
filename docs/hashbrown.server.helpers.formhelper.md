---
comment: "/**\n * The helper class for Forms\n *\n * @memberof HashBrown.Server.Helpers\n */"
meta:
    range:
        - 262
        - 5310
    filename: FormHelper.js
    lineno: 13
    columnno: 0
    path: /home/mrzapp/Development/Web/hashbrown-cms/src/Server/Helpers
    code:
        id: astnode100065870
        name: FormHelper
        type: ClassDeclaration
        paramnames: []
classdesc: 'The helper class for Forms'
memberof: HashBrown.Server.Helpers
name: FormHelper
longname: HashBrown.Server.Helpers.FormHelper
kind: class
scope: static
methods:
    -
        comment: "/**\n     * Gets Form by id\n     *\n     * @param {String} project\n     * @param {String} environment\n     * @param {String} id\n     *\n     * @returns {Promise} Form\n     */"
        meta:
            range:
                - 461
                - 1155
            filename: FormHelper.js
            lineno: 23
            columnno: 4
            path: /home/mrzapp/Development/Web/hashbrown-cms/src/Server/Helpers
            code:
                id: astnode100065873
                name: FormHelper.getForm
                type: MethodDefinition
                paramnames:
                    - project
                    - environment
                    - id
            vars:
                "": null
        description: 'Gets Form by id'
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
                        - Promise
                description: Form
        name: getForm
        longname: HashBrown.Server.Helpers.FormHelper.getForm
        kind: function
        memberof: HashBrown.Server.Helpers.FormHelper
        scope: static
    -
        comment: "/**\n     * Deletes Form by id\n     *\n     * @param {String} project\n     * @param {String} environment\n     * @param {String} id\n     *\n     * @returns {Promise} Promise\n     */"
        meta:
            range:
                - 1347
                - 1743
            filename: FormHelper.js
            lineno: 58
            columnno: 4
            path: /home/mrzapp/Development/Web/hashbrown-cms/src/Server/Helpers
            code:
                id: astnode100065953
                name: FormHelper.deleteForm
                type: MethodDefinition
                paramnames:
                    - project
                    - environment
                    - id
            vars:
                "": null
        description: 'Deletes Form by id'
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
                        - Promise
                description: Promise
        name: deleteForm
        longname: HashBrown.Server.Helpers.FormHelper.deleteForm
        kind: function
        memberof: HashBrown.Server.Helpers.FormHelper
        scope: static
    -
        comment: "/**\n     * Gets all Forms\n     *\n     * @param {String} project\n     * @param {String} environment\n     *\n     * @returns {Promise} Array of forms\n     */"
        meta:
            range:
                - 1908
                - 2352
            filename: FormHelper.js
            lineno: 82
            columnno: 4
            path: /home/mrzapp/Development/Web/hashbrown-cms/src/Server/Helpers
            code:
                id: astnode100065994
                name: FormHelper.getAllForms
                type: MethodDefinition
                paramnames:
                    - project
                    - environment
            vars:
                "": null
        description: 'Gets all Forms'
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
                description: 'Array of forms'
        name: getAllForms
        longname: HashBrown.Server.Helpers.FormHelper.getAllForms
        kind: function
        memberof: HashBrown.Server.Helpers.FormHelper
        scope: static
    -
        comment: "/**\n     * Sets a Form by id\n     *\n     * @param {String} project\n     * @param {String} environment\n     * @param {String} id\n     * @param {Object} properties\n     * @param {Boolean} create\n     *\n     * @returns {Promise} Form\n     */"
        meta:
            range:
                - 2605
                - 3427
            filename: FormHelper.js
            lineno: 109
            columnno: 4
            path: /home/mrzapp/Development/Web/hashbrown-cms/src/Server/Helpers
            code:
                id: astnode100066041
                name: FormHelper.setForm
                type: MethodDefinition
                paramnames:
                    - project
                    - environment
                    - id
                    - properties
                    - create
            vars:
                "": null
        description: 'Sets a Form by id'
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
                name: properties
            -
                type:
                    names:
                        - Boolean
                name: create
                defaultvalue: true
        returns:
            -
                type:
                    names:
                        - Promise
                description: Form
        name: setForm
        longname: HashBrown.Server.Helpers.FormHelper.setForm
        kind: function
        memberof: HashBrown.Server.Helpers.FormHelper
        scope: static
    -
        comment: "/**\n     * Creates a new Form\n     *\n     * @param {String} project\n     * @param {String} environment\n     *\n     * @returns {Promise} Form\n     */"
        meta:
            range:
                - 3586
                - 4023
            filename: FormHelper.js
            lineno: 149
            columnno: 4
            path: /home/mrzapp/Development/Web/hashbrown-cms/src/Server/Helpers
            code:
                id: astnode100066125
                name: FormHelper.createForm
                type: MethodDefinition
                paramnames:
                    - project
                    - environment
            vars:
                "": null
        description: 'Creates a new Form'
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
                description: Form
        name: createForm
        longname: HashBrown.Server.Helpers.FormHelper.createForm
        kind: function
        memberof: HashBrown.Server.Helpers.FormHelper
        scope: static
    -
        comment: "/**\n     * Adds an entry by to a Form by id\n     *\n     * @param {String} project\n     * @param {String} environment\n     * @param {String} id\n     * @param {Object} entry\n     *\n     * @returns {Promise} Promise\n     */"
        meta:
            range:
                - 4254
                - 4700
            filename: FormHelper.js
            lineno: 176
            columnno: 4
            path: /home/mrzapp/Development/Web/hashbrown-cms/src/Server/Helpers
            code:
                id: astnode100066178
                name: FormHelper.addEntry
                type: MethodDefinition
                paramnames:
                    - project
                    - environment
                    - id
                    - entry
            vars:
                "": null
        description: 'Adds an entry by to a Form by id'
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
                name: entry
        returns:
            -
                type:
                    names:
                        - Promise
                description: Promise
        name: addEntry
        longname: HashBrown.Server.Helpers.FormHelper.addEntry
        kind: function
        memberof: HashBrown.Server.Helpers.FormHelper
        scope: static
    -
        comment: "/**\n     * Clears all entries in a Form by id\n     *\n     * @param {String} project\n     * @param {String} environment\n     * @param {String} id\n     *\n     * @returns {Promise} Promise\n     */"
        meta:
            range:
                - 4904
                - 5308
            filename: FormHelper.js
            lineno: 199
            columnno: 4
            path: /home/mrzapp/Development/Web/hashbrown-cms/src/Server/Helpers
            code:
                id: astnode100066242
                name: FormHelper.clearAllEntries
                type: MethodDefinition
                paramnames:
                    - project
                    - environment
                    - id
            vars:
                "": null
        description: 'Clears all entries in a Form by id'
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
                        - Promise
                description: Promise
        name: clearAllEntries
        longname: HashBrown.Server.Helpers.FormHelper.clearAllEntries
        kind: function
        memberof: HashBrown.Server.Helpers.FormHelper
        scope: static
shortname: FormHelper
layout: docPage
permalink: /docs/hashbrown/server/helpers/formhelper/
title: 'API: FormHelper'
description: 'The helper class for Forms'

---