---
comment: "/**\n * The helper class for Connections\n *\n * @memberof HashBrown.Common.Helpers\n */"
meta:
    range:
        - 157
        - 4189
    filename: ConnectionHelper.js
    lineno: 10
    columnno: 0
    path: /home/mrzapp/Development/Web/hashbrown-cms/src/Common/Helpers
    code:
        id: astnode100043405
        name: ConnectionHelper
        type: ClassDeclaration
        paramnames: []
classdesc: 'The helper class for Connections'
memberof: HashBrown.Common.Helpers
name: ConnectionHelper
longname: HashBrown.Common.Helpers.ConnectionHelper
kind: class
scope: static
methods:
    -
        comment: "/**\n     * Gets all connections\n     *\n     * @param {String} project\n     * @param {String} environment\n     *\n     * @returns {Promise(Array)} connections\n     */"
        meta:
            range:
                - 355
                - 548
            filename: ConnectionHelper.js
            lineno: 19
            columnno: 4
            path: /home/mrzapp/Development/Web/hashbrown-cms/src/Common/Helpers
            code:
                id: astnode100043408
                name: ConnectionHelper.getAllConnections
                type: MethodDefinition
                paramnames:
                    - project
                    - environment
            vars:
                "": null
        description: 'Gets all connections'
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
                        - Promise(Array)
                description: connections
        name: getAllConnections
        longname: HashBrown.Common.Helpers.ConnectionHelper.getAllConnections
        kind: function
        memberof: HashBrown.Common.Helpers.ConnectionHelper
        scope: static
    -
        comment: "/**\n     * Sets the Template provider\n     *\n     * @param {String} project\n     * @param {String} environment\n     * @param {String} id\n     *\n     * @return {Promise} Promise\n     */"
        meta:
            range:
                - 747
                - 1246
            filename: ConnectionHelper.js
            lineno: 35
            columnno: 4
            path: /home/mrzapp/Development/Web/hashbrown-cms/src/Common/Helpers
            code:
                id: astnode100043431
                name: ConnectionHelper.setTemplateProvider
                type: MethodDefinition
                paramnames:
                    - project
                    - environment
                    - id
            vars:
                "": null
        description: 'Sets the Template provider'
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
                defaultvalue: null
        returns:
            -
                type:
                    names:
                        - Promise
                description: Promise
        name: setTemplateProvider
        longname: HashBrown.Common.Helpers.ConnectionHelper.setTemplateProvider
        kind: function
        memberof: HashBrown.Common.Helpers.ConnectionHelper
        scope: static
    -
        comment: "/**\n     * Gets the Template provider\n     *\n     * @param {String} project\n     * @param {String} environment\n     *\n     * @return {Promise} Connection object\n     */"
        meta:
            range:
                - 1425
                - 2381
            filename: ConnectionHelper.js
            lineno: 56
            columnno: 4
            path: /home/mrzapp/Development/Web/hashbrown-cms/src/Common/Helpers
            code:
                id: astnode100043495
                name: ConnectionHelper.getTemplateProvider
                type: MethodDefinition
                paramnames:
                    - project
                    - environment
            vars:
                "": null
        description: 'Gets the Template provider'
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
                description: 'Connection object'
        name: getTemplateProvider
        longname: HashBrown.Common.Helpers.ConnectionHelper.getTemplateProvider
        kind: function
        memberof: HashBrown.Common.Helpers.ConnectionHelper
        scope: static
    -
        comment: "/**\n     * Sets the Media provider\n     *\n     * @param {String} project\n     * @param {String} environment\n     * @param {String} id\n     *\n     * @return {Promise} Promise\n     */"
        meta:
            range:
                - 2573
                - 3066
            filename: ConnectionHelper.js
            lineno: 93
            columnno: 4
            path: /home/mrzapp/Development/Web/hashbrown-cms/src/Common/Helpers
            code:
                id: astnode100043588
                name: ConnectionHelper.setMediaProvider
                type: MethodDefinition
                paramnames:
                    - project
                    - environment
                    - id
            vars:
                "": null
        description: 'Sets the Media provider'
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
                defaultvalue: null
        returns:
            -
                type:
                    names:
                        - Promise
                description: Promise
        name: setMediaProvider
        longname: HashBrown.Common.Helpers.ConnectionHelper.setMediaProvider
        kind: function
        memberof: HashBrown.Common.Helpers.ConnectionHelper
        scope: static
    -
        comment: "/**\n     * Gets the Media provider\n     *\n     * @param {String} project\n     * @param {String} environment\n     *\n     * @return {Promise} Connection object\n     */"
        meta:
            range:
                - 3242
                - 4187
            filename: ConnectionHelper.js
            lineno: 114
            columnno: 4
            path: /home/mrzapp/Development/Web/hashbrown-cms/src/Common/Helpers
            code:
                id: astnode100043652
                name: ConnectionHelper.getMediaProvider
                type: MethodDefinition
                paramnames:
                    - project
                    - environment
            vars:
                "": null
        description: 'Gets the Media provider'
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
                description: 'Connection object'
        name: getMediaProvider
        longname: HashBrown.Common.Helpers.ConnectionHelper.getMediaProvider
        kind: function
        memberof: HashBrown.Common.Helpers.ConnectionHelper
        scope: static
shortname: ConnectionHelper
layout: docPage
permalink: /docs/hashbrown/common/helpers/connectionhelper/
title: 'API: ConnectionHelper'
description: 'The helper class for Connections'

---