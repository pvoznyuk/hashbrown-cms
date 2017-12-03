---
comment: "/**\n * The base class for all Media objects\n *\n * @memberof HashBrown.Common.Models\n */"
meta:
    range:
        - 175
        - 4056
    filename: Media.js
    lineno: 12
    columnno: 0
    path: /home/mrzapp/Development/Web/hashbrown-cms/src/Common/Models
    code:
        id: astnode100047877
        name: Media
        type: ClassDeclaration
        paramnames: []
classdesc: 'The base class for all Media objects'
memberof: HashBrown.Common.Models
name: Media
longname: HashBrown.Common.Models.Media
kind: class
scope: static
methods:
    -
        comment: "/**\n     * Checks the format of the params\n     *\n     * @params {Object} params\n     *\n     * @returns {Object} Params\n     */"
        meta:
            range:
                - 342
                - 608
            filename: Media.js
            lineno: 20
            columnno: 4
            path: /home/mrzapp/Development/Web/hashbrown-cms/src/Common/Models
            code:
                id: astnode100047881
                name: Media.paramsCheck
                type: MethodDefinition
                paramnames:
                    - params
            vars:
                "": null
        description: 'Checks the format of the params'
        tags:
            -
                originalTitle: params
                title: params
                text: '{Object} params'
                value: '{Object} params'
        returns:
            -
                type:
                    names:
                        - Object
                description: Params
        name: paramsCheck
        longname: HashBrown.Common.Models.Media.paramsCheck
        kind: function
        memberof: HashBrown.Common.Models.Media
        scope: static
        params: []
    -
        comment: "/**\n     * Structure\n     */"
        meta:
            range:
                - 651
                - 894
            filename: Media.js
            lineno: 37
            columnno: 4
            path: /home/mrzapp/Development/Web/hashbrown-cms/src/Common/Models
            code:
                id: astnode100047923
                name: 'Media#structure'
                type: MethodDefinition
                paramnames: []
            vars:
                "": null
        description: Structure
        name: structure
        longname: 'HashBrown.Common.Models.Media#structure'
        kind: function
        memberof: HashBrown.Common.Models.Media
        scope: instance
        params: []
    -
        comment: "/**\n     * Read from file path\n     *\n     * @param {String} filePath\n     */"
        meta:
            range:
                - 982
                - 1513
            filename: Media.js
            lineno: 51
            columnno: 4
            path: /home/mrzapp/Development/Web/hashbrown-cms/src/Common/Models
            code:
                id: astnode100047971
                name: 'Media#readFromFilePath'
                type: MethodDefinition
                paramnames:
                    - filePath
            vars:
                "": null
        description: 'Read from file path'
        params:
            -
                type:
                    names:
                        - String
                name: filePath
        name: readFromFilePath
        longname: 'HashBrown.Common.Models.Media#readFromFilePath'
        kind: function
        memberof: HashBrown.Common.Models.Media
        scope: instance
    -
        comment: "/**\n     * Gets the content type header\n     *\n     * @returns {String} Content-Type header\n     */"
        meta:
            range:
                - 1623
                - 2875
            filename: Media.js
            lineno: 72
            columnno: 4
            path: /home/mrzapp/Development/Web/hashbrown-cms/src/Common/Models
            code:
                id: astnode100048062
                name: 'Media#getContentTypeHeader'
                type: MethodDefinition
                paramnames: []
            vars:
                "": null
        description: 'Gets the content type header'
        returns:
            -
                type:
                    names:
                        - String
                description: 'Content-Type header'
        name: getContentTypeHeader
        longname: 'HashBrown.Common.Models.Media#getContentTypeHeader'
        kind: function
        memberof: HashBrown.Common.Models.Media
        scope: instance
        params: []
    -
        comment: "/**\n     * Gets whether this is a video\n     *\n     * @returns {Boolean} Is video\n     */"
        meta:
            range:
                - 2975
                - 3058
            filename: Media.js
            lineno: 120
            columnno: 4
            path: /home/mrzapp/Development/Web/hashbrown-cms/src/Common/Models
            code:
                id: astnode100048197
                name: 'Media#isVideo'
                type: MethodDefinition
                paramnames: []
            vars:
                "": null
        description: 'Gets whether this is a video'
        returns:
            -
                type:
                    names:
                        - Boolean
                description: 'Is video'
        name: isVideo
        longname: 'HashBrown.Common.Models.Media#isVideo'
        kind: function
        memberof: HashBrown.Common.Models.Media
        scope: instance
        params: []
    -
        comment: "/**\n     * Gets whether this is an image\n     *\n     * @returns {Boolean} Is image\n     */"
        meta:
            range:
                - 3163
                - 3246
            filename: Media.js
            lineno: 129
            columnno: 4
            path: /home/mrzapp/Development/Web/hashbrown-cms/src/Common/Models
            code:
                id: astnode100048213
                name: 'Media#isImage'
                type: MethodDefinition
                paramnames: []
            vars:
                "": null
        description: 'Gets whether this is an image'
        returns:
            -
                type:
                    names:
                        - Boolean
                description: 'Is image'
        name: isImage
        longname: 'HashBrown.Common.Models.Media#isImage'
        kind: function
        memberof: HashBrown.Common.Models.Media
        scope: instance
        params: []
    -
        comment: "/**\n     * Gets whether this is a PDF\n     *\n     * @returns {Boolean} Is PDF\n     */"
        meta:
            range:
                - 3342
                - 3421
            filename: Media.js
            lineno: 138
            columnno: 4
            path: /home/mrzapp/Development/Web/hashbrown-cms/src/Common/Models
            code:
                id: astnode100048229
                name: 'Media#isPdf'
                type: MethodDefinition
                paramnames: []
            vars:
                "": null
        description: 'Gets whether this is a PDF'
        returns:
            -
                type:
                    names:
                        - Boolean
                description: 'Is PDF'
        name: isPdf
        longname: 'HashBrown.Common.Models.Media#isPdf'
        kind: function
        memberof: HashBrown.Common.Models.Media
        scope: instance
        params: []
    -
        comment: "/**\n     * Applies folder string from tree\n     *\n     * @param {Object} tree\n     */"
        meta:
            range:
                - 3517
                - 3796
            filename: Media.js
            lineno: 147
            columnno: 4
            path: /home/mrzapp/Development/Web/hashbrown-cms/src/Common/Models
            code:
                id: astnode100048245
                name: 'Media#applyFolderFromTree'
                type: MethodDefinition
                paramnames:
                    - tree
            vars:
                "": null
        description: 'Applies folder string from tree'
        params:
            -
                type:
                    names:
                        - Object
                name: tree
        name: applyFolderFromTree
        longname: 'HashBrown.Common.Models.Media#applyFolderFromTree'
        kind: function
        memberof: HashBrown.Common.Models.Media
        scope: instance
    -
        comment: "/**\n     * Creates a new Media object\n     *\n     * @param {Object} file\n     *\n     * @return {Media} media\n     */"
        meta:
            range:
                - 3923
                - 4054
            filename: Media.js
            lineno: 167
            columnno: 4
            path: /home/mrzapp/Development/Web/hashbrown-cms/src/Common/Models
            code:
                id: astnode100048283
                name: Media.create
                type: MethodDefinition
                paramnames:
                    - file
            vars:
                "": null
        description: 'Creates a new Media object'
        params:
            -
                type:
                    names:
                        - Object
                name: file
        returns:
            -
                type:
                    names:
                        - Media
                description: media
        name: create
        longname: HashBrown.Common.Models.Media.create
        kind: function
        memberof: HashBrown.Common.Models.Media
        scope: static
shortname: Media
layout: docPage
permalink: /docs/hashbrown/common/models/media/
title: 'API: Media'
description: 'The base class for all Media objects'

---