---
comment: "/**\n * The helper class for all synchronisation services\n *\n * @memberof HashBrown.Server.Helpers\n */"
meta:
    range:
        - 181
        - 12461
    filename: SyncHelper.js
    lineno: 10
    columnno: 0
    path: /home/mrzapp/Development/Web/hashbrown-cms/src/Server/Helpers
    code:
        id: astnode100071923
        name: SyncHelper
        type: ClassDeclaration
        paramnames: []
classdesc: 'The helper class for all synchronisation services'
memberof: HashBrown.Server.Helpers
name: SyncHelper
longname: HashBrown.Server.Helpers.SyncHelper
kind: class
scope: static
methods:
    -
        comment: "/**\n     * Gets a new token\n     *\n     * @param {String} project\n     * @param {String} username\n     * @param {String} password\n     *\n     * @returns {Promise} New token\n     */"
        meta:
            range:
                - 389
                - 1351
            filename: SyncHelper.js
            lineno: 20
            columnno: 4
            path: /home/mrzapp/Development/Web/hashbrown-cms/src/Server/Helpers
            code:
                id: astnode100071926
                name: SyncHelper.renewToken
                type: MethodDefinition
                paramnames:
                    - project
                    - username
                    - password
            vars:
                "": null
        description: 'Gets a new token'
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
                        - Promise
                description: 'New token'
        name: renewToken
        longname: HashBrown.Server.Helpers.SyncHelper.renewToken
        kind: function
        memberof: HashBrown.Server.Helpers.SyncHelper
        scope: static
    -
        comment: "/**\n     * Validates the sync settings\n     *\n     * @param {Object} settings\n     * @param {Boolean} justUrl\n     *\n     * @returns {Boolean} Whether the settings are valid\n     */"
        meta:
            range:
                - 1546
                - 1959
            filename: SyncHelper.js
            lineno: 55
            columnno: 4
            path: /home/mrzapp/Development/Web/hashbrown-cms/src/Server/Helpers
            code:
                id: astnode100072036
                name: SyncHelper.validateSettings
                type: MethodDefinition
                paramnames:
                    - settings
                    - justUrl
            vars:
                "": null
        description: 'Validates the sync settings'
        params:
            -
                type:
                    names:
                        - Object
                name: settings
            -
                type:
                    names:
                        - Boolean
                name: justUrl
        returns:
            -
                type:
                    names:
                        - Boolean
                description: 'Whether the settings are valid'
        name: validateSettings
        longname: HashBrown.Server.Helpers.SyncHelper.validateSettings
        kind: function
        memberof: HashBrown.Server.Helpers.SyncHelper
        scope: static
    -
        comment: "/**\n     * Get resource item\n     *\n     * @param {String} project\n     * @param {String} environment\n     * @param {String} remoteResourceName\n     * @param {String} remoteItemName\n     *\n     * @returns {Promise} Resource\n     */"
        meta:
            range:
                - 2201
                - 4424
            filename: SyncHelper.js
            lineno: 79
            columnno: 4
            path: /home/mrzapp/Development/Web/hashbrown-cms/src/Server/Helpers
            code:
                id: astnode100072099
                name: SyncHelper.getResourceItem
                type: MethodDefinition
                paramnames:
                    - project
                    - environment
                    - remoteResourceName
                    - remoteItemName
            vars:
                "": null
        description: 'Get resource item'
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
                name: remoteResourceName
            -
                type:
                    names:
                        - String
                name: remoteItemName
        returns:
            -
                type:
                    names:
                        - Promise
                description: Resource
        name: getResourceItem
        longname: HashBrown.Server.Helpers.SyncHelper.getResourceItem
        kind: function
        memberof: HashBrown.Server.Helpers.SyncHelper
        scope: static
    -
        comment: "/**\n     * Set resource item\n     *\n     * @param {String} project\n     * @param {String} environment\n     * @param {String} remoteResourceName\n     * @param {String} remoteItemName\n     * @param {Object} remoteItemData\n     *\n     * @returns {Promise} Whether setting was successful\n     */"
        meta:
            range:
                - 4726
                - 6497
            filename: SyncHelper.js
            lineno: 145
            columnno: 4
            path: /home/mrzapp/Development/Web/hashbrown-cms/src/Server/Helpers
            code:
                id: astnode100072338
                name: SyncHelper.setResourceItem
                type: MethodDefinition
                paramnames:
                    - project
                    - environment
                    - remoteResourceName
                    - remoteItemName
                    - remoteItemData
            vars:
                "": null
        description: 'Set resource item'
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
                name: remoteResourceName
            -
                type:
                    names:
                        - String
                name: remoteItemName
            -
                type:
                    names:
                        - Object
                name: remoteItemData
        returns:
            -
                type:
                    names:
                        - Promise
                description: 'Whether setting was successful'
        name: setResourceItem
        longname: HashBrown.Server.Helpers.SyncHelper.setResourceItem
        kind: function
        memberof: HashBrown.Server.Helpers.SyncHelper
        scope: static
    -
        comment: "/**\n     * Get resource\n     *\n     * @param {String} project\n     * @param {String} environment\n     * @param {String} remoteResourceName\n     * @param {Object} params\n     *\n     * @returns {Promise} Resource\n     */"
        meta:
            range:
                - 6726
                - 8457
            filename: SyncHelper.js
            lineno: 197
            columnno: 4
            path: /home/mrzapp/Development/Web/hashbrown-cms/src/Server/Helpers
            code:
                id: astnode100072505
                name: SyncHelper.getResource
                type: MethodDefinition
                paramnames:
                    - project
                    - environment
                    - remoteResourceName
                    - params
            vars:
                "": null
        description: 'Get resource'
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
                name: remoteResourceName
            -
                type:
                    names:
                        - Object
                name: params
        returns:
            -
                type:
                    names:
                        - Promise
                description: Resource
        name: getResource
        longname: HashBrown.Server.Helpers.SyncHelper.getResource
        kind: function
        memberof: HashBrown.Server.Helpers.SyncHelper
        scope: static
    -
        comment: "/**\n     * Merges a resource with a synced one\n     *\n     * @param {String} project\n     * @param {String} environment\n     * @param {String} remoteResourceName\n     * @param {Array} localResource\n     * @param {Object} params\n     *\n     * @return {Promise} Merged resource\n     */"
        meta:
            range:
                - 8751
                - 12459
            filename: SyncHelper.js
            lineno: 249
            columnno: 4
            path: /home/mrzapp/Development/Web/hashbrown-cms/src/Server/Helpers
            code:
                id: astnode100072698
                name: SyncHelper.mergeResource
                type: MethodDefinition
                paramnames:
                    - project
                    - environment
                    - remoteResourceName
                    - localResource
                    - params
            vars:
                "": null
        description: 'Merges a resource with a synced one'
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
                name: remoteResourceName
            -
                type:
                    names:
                        - Array
                name: localResource
            -
                type:
                    names:
                        - Object
                name: params
        returns:
            -
                type:
                    names:
                        - Promise
                description: 'Merged resource'
        name: mergeResource
        longname: HashBrown.Server.Helpers.SyncHelper.mergeResource
        kind: function
        memberof: HashBrown.Server.Helpers.SyncHelper
        scope: static
shortname: SyncHelper
layout: docPage
permalink: /docs/hashbrown/server/helpers/synchelper/
title: 'API: SyncHelper'
description: 'The helper class for all synchronisation services'

---