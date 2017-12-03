---
comment: "/**\n * The helper class for Content\n *\n * @memberof HashBrown.Server.Helpers\n */"
meta:
    range:
        - 629
        - 18055
    filename: ContentHelper.js
    lineno: 19
    columnno: 0
    path: /home/mrzapp/Development/Web/hashbrown-cms/src/Server/Helpers
    code:
        id: astnode100062885
        name: ContentHelper
        type: ClassDeclaration
        paramnames: []
classdesc: 'The helper class for Content'
memberof: HashBrown.Server.Helpers
name: ContentHelper
longname: HashBrown.Server.Helpers.ContentHelper
kind: class
scope: static
methods:
    -
        comment: "/**\n     * Gets all Content objects\n     *\n     * @param {String} project\n     * @param {String} environment\n     *\n     * @return {Promise} promise\n     */"
        meta:
            range:
                - 844
                - 1821
            filename: ContentHelper.js
            lineno: 28
            columnno: 4
            path: /home/mrzapp/Development/Web/hashbrown-cms/src/Server/Helpers
            code:
                id: astnode100062889
                name: ContentHelper.getAllContents
                type: MethodDefinition
                paramnames:
                    - project
                    - environment
            vars:
                "": null
        description: 'Gets all Content objects'
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
                description: promise
        name: getAllContents
        longname: HashBrown.Server.Helpers.ContentHelper.getAllContents
        kind: function
        memberof: HashBrown.Server.Helpers.ContentHelper
        scope: static
    -
        comment: "/**\n     * Gets a Content object by id\n     *\n     * @param {String} project\n     * @param {String} environment\n     * @param {String} id\n     * @param {Boolean} localOnly\n     *\n     * @return {Promise} Promise\n     */"
        meta:
            range:
                - 2051
                - 3389
            filename: ContentHelper.js
            lineno: 74
            columnno: 4
            path: /home/mrzapp/Development/Web/hashbrown-cms/src/Server/Helpers
            code:
                id: astnode100062995
                name: ContentHelper.getContentById
                type: MethodDefinition
                paramnames:
                    - project
                    - environment
                    - id
                    - localOnly
            vars:
                "": null
        description: 'Gets a Content object by id'
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
                        - Boolean
                name: localOnly
                defaultvalue: false
        returns:
            -
                type:
                    names:
                        - Promise
                description: Promise
        name: getContentById
        longname: HashBrown.Server.Helpers.ContentHelper.getContentById
        kind: function
        memberof: HashBrown.Server.Helpers.ContentHelper
        scope: static
    -
        comment: "/**\n     * Updates a Content object (quick, no checks)\n     *\n     * @param {String} project\n     * @param {String} environment\n     * @param {Content} content\n     */"
        meta:
            range:
                - 3570
                - 3975
            filename: ContentHelper.js
            lineno: 126
            columnno: 4
            path: /home/mrzapp/Development/Web/hashbrown-cms/src/Server/Helpers
            code:
                id: astnode100063149
                name: ContentHelper.updateContent
                type: MethodDefinition
                paramnames:
                    - project
                    - environment
                    - content
            vars:
                "": null
        description: 'Updates a Content object (quick, no checks)'
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
                name: content
        name: updateContent
        longname: HashBrown.Server.Helpers.ContentHelper.updateContent
        kind: function
        memberof: HashBrown.Server.Helpers.ContentHelper
        scope: static
    -
        comment: "/**\n     * Sets a Content object by id\n     *\n     * @param {String} project\n     * @param {String} environment\n     * @param {String} id\n     * @param {Content} content\n     * @param {User} user\n     * @param {Boolean} create\n     *\n     * @return {Promise} Promise\n     */"
        meta:
            range:
                - 4260
                - 7074
            filename: ContentHelper.js
            lineno: 151
            columnno: 4
            path: /home/mrzapp/Development/Web/hashbrown-cms/src/Server/Helpers
            code:
                id: astnode100063196
                name: ContentHelper.setContentById
                type: MethodDefinition
                paramnames:
                    - project
                    - environment
                    - id
                    - content
                    - user
                    - create
            vars:
                "": null
        description: 'Sets a Content object by id'
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
                name: content
            -
                type:
                    names:
                        - User
                name: user
            -
                type:
                    names:
                        - Boolean
                name: create
                defaultvalue: false
        returns:
            -
                type:
                    names:
                        - Promise
                description: Promise
        name: setContentById
        longname: HashBrown.Server.Helpers.ContentHelper.setContentById
        kind: function
        memberof: HashBrown.Server.Helpers.ContentHelper
        scope: static
    -
        comment: "/**\n     * Creates a new content object\n     *\n     * @param {String} project\n     * @param {String} environment\n     * @param {String} schemaId\n     * @param {String} parentId\n     * @param {User} user\n     * @param {Object} properties\n     * @param {Number} sortIndex\n     *\n     * @return {Promise} New Content object\n     */"
        meta:
            range:
                - 7413
                - 8765
            filename: ContentHelper.js
            lineno: 239
            columnno: 4
            path: /home/mrzapp/Development/Web/hashbrown-cms/src/Server/Helpers
            code:
                id: astnode100063479
                name: ContentHelper.createContent
                type: MethodDefinition
                paramnames:
                    - project
                    - environment
                    - schemaId
                    - parentId
                    - user
                    - properties
                    - sortIndex
            vars:
                "": null
        description: 'Creates a new content object'
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
                name: parentId
                defaultvalue: null
            -
                type:
                    names:
                        - User
                name: user
            -
                type:
                    names:
                        - Object
                name: properties
                defaultvalue: null
            -
                type:
                    names:
                        - Number
                name: sortIndex
                defaultvalue: 10000
        returns:
            -
                type:
                    names:
                        - Promise
                description: 'New Content object'
        name: createContent
        longname: HashBrown.Server.Helpers.ContentHelper.createContent
        kind: function
        memberof: HashBrown.Server.Helpers.ContentHelper
        scope: static
    -
        comment: "/**\n     * Removes a content object\n     *\n     * @param {String} project\n     * @param {String} environment\n     * @param {String} id\n     * @param {Boolean} removeChildren\n     *\n     * @return {Promise} promise\n     */"
        meta:
            range:
                - 9001
                - 10361
            filename: ContentHelper.js
            lineno: 287
            columnno: 4
            path: /home/mrzapp/Development/Web/hashbrown-cms/src/Server/Helpers
            code:
                id: astnode100063656
                name: ContentHelper.removeContentById
                type: MethodDefinition
                paramnames:
                    - project
                    - environment
                    - id
                    - removeChildren
            vars:
                "": null
        description: 'Removes a content object'
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
                        - Boolean
                name: removeChildren
                defaultvalue: false
        returns:
            -
                type:
                    names:
                        - Promise
                description: promise
        name: removeContentById
        longname: HashBrown.Server.Helpers.ContentHelper.removeContentById
        kind: function
        memberof: HashBrown.Server.Helpers.ContentHelper
        scope: static
    -
        comment: "/**\n     * Creates example content\n     *\n     * @param {String} project\n     * @param {String} environment\n     * @param {User} user\n     *\n     * @returns {Promise} Result\n     */"
        meta:
            range:
                - 10557
                - 18053
            filename: ContentHelper.js
            lineno: 344
            columnno: 4
            path: /home/mrzapp/Development/Web/hashbrown-cms/src/Server/Helpers
            code:
                id: astnode100063764
                name: ContentHelper.createExampleContent
                type: MethodDefinition
                paramnames:
                    - project
                    - environment
                    - user
            vars:
                "": null
        description: 'Creates example content'
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
                        - User
                name: user
        returns:
            -
                type:
                    names:
                        - Promise
                description: Result
        name: createExampleContent
        longname: HashBrown.Server.Helpers.ContentHelper.createExampleContent
        kind: function
        memberof: HashBrown.Server.Helpers.ContentHelper
        scope: static
shortname: ContentHelper
layout: docPage
permalink: /docs/hashbrown/server/helpers/contenthelper/
title: 'API: ContentHelper'
description: 'The helper class for Content'

---