---
comment: "/**\n * The helper class for Media\n *\n * @memberof HashBrown.Server.Helpers\n */"
meta:
    range:
        - 462
        - 9697
    filename: MediaHelper.js
    lineno: 19
    columnno: 0
    path: /home/mrzapp/Development/Web/hashbrown-cms/src/Server/Helpers
    code:
        id: astnode100066509
        name: MediaHelper
        type: ClassDeclaration
        paramnames: []
classdesc: 'The helper class for Media'
memberof: HashBrown.Server.Helpers
name: MediaHelper
longname: HashBrown.Server.Helpers.MediaHelper
kind: class
scope: static
methods:
    -
        comment: "/**\n     * Gets the upload handler\n     *\n     * @param {Boolean} isSingleFile\n     *\n     * @return {Function} handler\n     */"
        meta:
            range:
                - 644
                - 1972
            filename: MediaHelper.js
            lineno: 27
            columnno: 4
            path: /home/mrzapp/Development/Web/hashbrown-cms/src/Server/Helpers
            code:
                id: astnode100066513
                name: MediaHelper.getUploadHandler
                type: MethodDefinition
                paramnames:
                    - isSingleFile
            vars:
                "": null
        description: 'Gets the upload handler'
        params:
            -
                type:
                    names:
                        - Boolean
                name: isSingleFile
        returns:
            -
                type:
                    names:
                        - function
                description: handler
        name: getUploadHandler
        longname: HashBrown.Server.Helpers.MediaHelper.getUploadHandler
        kind: function
        memberof: HashBrown.Server.Helpers.MediaHelper
        scope: static
    -
        comment: "/**\n     * Makes a directory recursively\n     *\n     * @param {String} dirPath\n     * @param {Function} callback\n     * @param {Number} position\n     */"
        meta:
            range:
                - 2135
                - 2828
            filename: MediaHelper.js
            lineno: 75
            columnno: 4
            path: /home/mrzapp/Development/Web/hashbrown-cms/src/Server/Helpers
            code:
                id: astnode100066651
                name: MediaHelper.mkdirRecursively
                type: MethodDefinition
                paramnames:
                    - dirPath
                    - callback
                    - position
            vars:
                "": null
        description: 'Makes a directory recursively'
        params:
            -
                type:
                    names:
                        - String
                name: dirPath
            -
                type:
                    names:
                        - function
                name: callback
                defaultvalue: null
            -
                type:
                    names:
                        - Number
                name: position
                defaultvalue: 0
        name: mkdirRecursively
        longname: HashBrown.Server.Helpers.MediaHelper.mkdirRecursively
        kind: function
        memberof: HashBrown.Server.Helpers.MediaHelper
        scope: static
    -
        comment: "/**\n     * Sets a Media object\n     *\n     * @param {Number} id\n     * @param {Object} file\n     *\n     * @return {Promise} promise\n     */"
        meta:
            range:
                - 2982
                - 4968
            filename: MediaHelper.js
            lineno: 107
            columnno: 4
            path: /home/mrzapp/Development/Web/hashbrown-cms/src/Server/Helpers
            code:
                id: astnode100066740
                name: MediaHelper.setMediaData
                type: MethodDefinition
                paramnames:
                    - id
                    - file
            vars:
                "": null
        description: 'Sets a Media object'
        params:
            -
                type:
                    names:
                        - Number
                name: id
            -
                type:
                    names:
                        - Object
                name: file
        returns:
            -
                type:
                    names:
                        - Promise
                description: promise
        name: setMediaData
        longname: HashBrown.Server.Helpers.MediaHelper.setMediaData
        kind: function
        memberof: HashBrown.Server.Helpers.MediaHelper
        scope: static
    -
        comment: "/**\n     * Uploads a file from temp storage\n     *\n     * @param {String} project\n     * @param {String} environment\n     * @param {String} id\n     * @param {String} tempPath\n     *\n     * @returns {Promise} Result\n     */"
        meta:
            range:
                - 5201
                - 6485
            filename: MediaHelper.js
            lineno: 176
            columnno: 4
            path: /home/mrzapp/Development/Web/hashbrown-cms/src/Server/Helpers
            code:
                id: astnode100066898
                name: MediaHelper.uploadFromTemp
                type: MethodDefinition
                paramnames:
                    - project
                    - environment
                    - id
                    - tempPath
            vars:
                "": null
        description: 'Uploads a file from temp storage'
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
                        - String
                name: tempPath
        returns:
            -
                type:
                    names:
                        - Promise
                description: Result
        name: uploadFromTemp
        longname: HashBrown.Server.Helpers.MediaHelper.uploadFromTemp
        kind: function
        memberof: HashBrown.Server.Helpers.MediaHelper
        scope: static
    -
        comment: "/**\n     * Gets the Media tree\n     *\n     * NOTE:\n     * This method, as opposed to most other resource methods, does not merge\n     * local and remote resources since it would be too complicated in the end\n     *\n     * @param {String} project\n     * @param {String} environment\n     *\n     * @return {Promise} Tree\n     */"
        meta:
            range:
                - 6821
                - 8018
            filename: MediaHelper.js
            lineno: 227
            columnno: 4
            path: /home/mrzapp/Development/Web/hashbrown-cms/src/Server/Helpers
            code:
                id: astnode100067039
                name: MediaHelper.getTree
                type: MethodDefinition
                paramnames:
                    - project
                    - environment
            vars:
                "": null
        description: "Gets the Media tree\n\nNOTE:\nThis method, as opposed to most other resource methods, does not merge\nlocal and remote resources since it would be too complicated in the end"
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
                description: Tree
        name: getTree
        longname: HashBrown.Server.Helpers.MediaHelper.getTree
        kind: function
        memberof: HashBrown.Server.Helpers.MediaHelper
        scope: static
    -
        comment: "/**\n     * Sets a Media tree parent\n     *\n     * @param {String} project\n     * @param {String} environment\n     * @param {String} id\n     * @param {Object} item\n     *\n     * @return {Promise} promise\n     */"
        meta:
            range:
                - 8243
                - 9415
            filename: MediaHelper.js
            lineno: 275
            columnno: 4
            path: /home/mrzapp/Development/Web/hashbrown-cms/src/Server/Helpers
            code:
                id: astnode100067185
                name: MediaHelper.setTreeItem
                type: MethodDefinition
                paramnames:
                    - project
                    - environment
                    - id
                    - item
            vars:
                "": null
        description: 'Sets a Media tree parent'
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
                        - Promise
                description: promise
        name: setTreeItem
        longname: HashBrown.Server.Helpers.MediaHelper.setTreeItem
        kind: function
        memberof: HashBrown.Server.Helpers.MediaHelper
        scope: static
    -
        comment: "/**\n     * Gets the media temp path\n     *\n     * @param {String} project\n     *\n     * @returns {String} path\n     */"
        meta:
            range:
                - 9548
                - 9695
            filename: MediaHelper.js
            lineno: 321
            columnno: 4
            path: /home/mrzapp/Development/Web/hashbrown-cms/src/Server/Helpers
            code:
                id: astnode100067280
                name: MediaHelper.getTempPath
                type: MethodDefinition
                paramnames:
                    - project
            vars:
                "": null
        description: 'Gets the media temp path'
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
                        - String
                description: path
        name: getTempPath
        longname: HashBrown.Server.Helpers.MediaHelper.getTempPath
        kind: function
        memberof: HashBrown.Server.Helpers.MediaHelper
        scope: static
shortname: MediaHelper
layout: docPage
permalink: /docs/hashbrown/server/helpers/mediahelper/
title: 'API: MediaHelper'
description: 'The helper class for Media'

---