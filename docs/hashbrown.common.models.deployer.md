---
comment: "/**\n * A class for deploying and retrieving data to and from a server\n *\n * @memberof HashBrown.Common.Models\n */"
meta:
    range:
        - 166
        - 3940
    filename: Deployer.js
    lineno: 10
    columnno: 0
    path: /home/mrzapp/Development/Web/hashbrown-cms/src/Common/Models
    code:
        id: astnode100046610
        name: Deployer
        type: ClassDeclaration
        paramnames:
            - params
classdesc: 'A class for deploying and retrieving data to and from a server'
memberof: HashBrown.Common.Models
name: Deployer
longname: HashBrown.Common.Models.Deployer
kind: class
scope: static
description: 'A class for deploying and retrieving data to and from a server'
params: []
methods:
    -
        comment: "/**\n     * Structure\n     */"
        meta:
            range:
                - 648
                - 925
            filename: Deployer.js
            lineno: 31
            columnno: 4
            path: /home/mrzapp/Development/Web/hashbrown-cms/src/Common/Models
            code:
                id: astnode100046683
                name: 'Deployer#structure'
                type: MethodDefinition
                paramnames: []
            vars:
                "": null
        description: Structure
        name: structure
        longname: 'HashBrown.Common.Models.Deployer#structure'
        kind: function
        memberof: HashBrown.Common.Models.Deployer
        scope: instance
        params: []
    -
        comment: "/**\n     * Gets the root path\n     *\n     * @returns {String} Root\n     */"
        meta:
            range:
                - 1010
                - 1103
            filename: Deployer.js
            lineno: 49
            columnno: 4
            path: /home/mrzapp/Development/Web/hashbrown-cms/src/Common/Models
            code:
                id: astnode100046719
                name: 'Deployer#getRootPath'
                type: MethodDefinition
                paramnames: []
            vars:
                "": null
        description: 'Gets the root path'
        returns:
            -
                type:
                    names:
                        - String
                description: Root
        name: getRootPath
        longname: 'HashBrown.Common.Models.Deployer#getRootPath'
        kind: function
        memberof: HashBrown.Common.Models.Deployer
        scope: instance
        params: []
    -
        comment: "/**\n     * Gets a deployment path\n     *\n     * @param {String} query\n     * @param {String} filename\n     *\n     * @returns {String} Path\n     */"
        meta:
            range:
                - 1260
                - 2529
            filename: Deployer.js
            lineno: 61
            columnno: 4
            path: /home/mrzapp/Development/Web/hashbrown-cms/src/Common/Models
            code:
                id: astnode100046727
                name: 'Deployer#getPath'
                type: MethodDefinition
                paramnames:
                    - query
                    - filename
            vars:
                "": null
        description: 'Gets a deployment path'
        params:
            -
                type:
                    names:
                        - String
                name: query
            -
                type:
                    names:
                        - String
                name: filename
        returns:
            -
                type:
                    names:
                        - String
                description: Path
        name: getPath
        longname: 'HashBrown.Common.Models.Deployer#getPath'
        kind: function
        memberof: HashBrown.Common.Models.Deployer
        scope: instance
    -
        comment: "/**\n     * Tests this deployment\n     *\n     * @returns {Promise} Result\n     */"
        meta:
            range:
                - 2620
                - 2719
            filename: Deployer.js
            lineno: 108
            columnno: 4
            path: /home/mrzapp/Development/Web/hashbrown-cms/src/Common/Models
            code:
                id: astnode100046887
                name: 'Deployer#test'
                type: MethodDefinition
                paramnames: []
            vars:
                "": null
        description: 'Tests this deployment'
        returns:
            -
                type:
                    names:
                        - Promise
                description: Result
        name: test
        longname: 'HashBrown.Common.Models.Deployer#test'
        kind: function
        memberof: HashBrown.Common.Models.Deployer
        scope: instance
        params: []
    -
        comment: "/**\n     * Sets a file\n     *\n     * @param {String} path\n     * @param {String} base64\n     *\n     * @returns {Promise} Result\n     */"
        meta:
            range:
                - 2865
                - 2983
            filename: Deployer.js
            lineno: 120
            columnno: 4
            path: /home/mrzapp/Development/Web/hashbrown-cms/src/Common/Models
            code:
                id: astnode100046899
                name: 'Deployer#setFile'
                type: MethodDefinition
                paramnames:
                    - path
                    - content
            vars:
                "": null
        description: 'Sets a file'
        params:
            -
                type:
                    names:
                        - String
                name: path
            -
                type:
                    names:
                        - String
                name: base64
        returns:
            -
                type:
                    names:
                        - Promise
                description: Result
        name: setFile
        longname: 'HashBrown.Common.Models.Deployer#setFile'
        kind: function
        memberof: HashBrown.Common.Models.Deployer
        scope: instance
    -
        comment: "/**\n     * Gets a file\n     *\n     * @param {String} path\n     *\n     * @returns {Promise} File\n     */"
        meta:
            range:
                - 3101
                - 3210
            filename: Deployer.js
            lineno: 131
            columnno: 4
            path: /home/mrzapp/Development/Web/hashbrown-cms/src/Common/Models
            code:
                id: astnode100046913
                name: 'Deployer#getFile'
                type: MethodDefinition
                paramnames:
                    - path
            vars:
                "": null
        description: 'Gets a file'
        params:
            -
                type:
                    names:
                        - String
                name: path
        returns:
            -
                type:
                    names:
                        - Promise
                description: File
        name: getFile
        longname: 'HashBrown.Common.Models.Deployer#getFile'
        kind: function
        memberof: HashBrown.Common.Models.Deployer
        scope: instance
    -
        comment: "/**\n     * Removes a file\n     *\n     * @param {String} path\n     *\n     * @returns {Promise} Result\n     */"
        meta:
            range:
                - 3333
                - 3448
            filename: Deployer.js
            lineno: 142
            columnno: 4
            path: /home/mrzapp/Development/Web/hashbrown-cms/src/Common/Models
            code:
                id: astnode100046926
                name: 'Deployer#removeFile'
                type: MethodDefinition
                paramnames:
                    - path
            vars:
                "": null
        description: 'Removes a file'
        params:
            -
                type:
                    names:
                        - String
                name: path
        returns:
            -
                type:
                    names:
                        - Promise
                description: Result
        name: removeFile
        longname: 'HashBrown.Common.Models.Deployer#removeFile'
        kind: function
        memberof: HashBrown.Common.Models.Deployer
        scope: instance
    -
        comment: "/**\n     * Gets a list of files\n     *\n     * @param {String} path\n     *\n     * @returns {Promise} Files\n     */"
        meta:
            range:
                - 3576
                - 3689
            filename: Deployer.js
            lineno: 153
            columnno: 4
            path: /home/mrzapp/Development/Web/hashbrown-cms/src/Common/Models
            code:
                id: astnode100046939
                name: 'Deployer#getFolder'
                type: MethodDefinition
                paramnames:
                    - path
            vars:
                "": null
        description: 'Gets a list of files'
        params:
            -
                type:
                    names:
                        - String
                name: path
        returns:
            -
                type:
                    names:
                        - Promise
                description: Files
        name: getFolder
        longname: 'HashBrown.Common.Models.Deployer#getFolder'
        kind: function
        memberof: HashBrown.Common.Models.Deployer
        scope: instance
    -
        comment: "/**\n     * Removes a folder\n     *\n     * @param {String} path\n     *\n     * @returns {Promise} Result\n     */"
        meta:
            range:
                - 3814
                - 3933
            filename: Deployer.js
            lineno: 164
            columnno: 4
            path: /home/mrzapp/Development/Web/hashbrown-cms/src/Common/Models
            code:
                id: astnode100046952
                name: 'Deployer#removeFolder'
                type: MethodDefinition
                paramnames:
                    - path
            vars:
                "": null
        description: 'Removes a folder'
        params:
            -
                type:
                    names:
                        - String
                name: path
        returns:
            -
                type:
                    names:
                        - Promise
                description: Result
        name: removeFolder
        longname: 'HashBrown.Common.Models.Deployer#removeFolder'
        kind: function
        memberof: HashBrown.Common.Models.Deployer
        scope: instance
shortname: Deployer
layout: docPage
permalink: /docs/hashbrown/common/models/deployer/
title: 'API: Deployer'

---