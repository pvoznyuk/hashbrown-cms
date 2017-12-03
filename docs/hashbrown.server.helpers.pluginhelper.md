---
comment: "/**\n * The helper class for plugins\n *\n * @memberof HashBrown.Server.Helpers\n */"
meta:
    range:
        - 127
        - 728
    filename: PluginHelper.js
    lineno: 10
    columnno: 0
    path: /home/mrzapp/Development/Web/hashbrown-cms/src/Server/Helpers
    code:
        id: astnode100067316
        name: PluginHelper
        type: ClassDeclaration
        paramnames: []
classdesc: 'The helper class for plugins'
memberof: HashBrown.Server.Helpers
name: PluginHelper
longname: HashBrown.Server.Helpers.PluginHelper
kind: class
scope: static
methods:
    -
        comment: "/**\n     * Initialises all plugins located at /plugins/:name/server/index.js\n     *\n     * @param {Object} app Express.js server instance\n     *\n     * @returns {Promise} Client side file URLs\n     */"
        meta:
            range:
                - 357
                - 726
            filename: PluginHelper.js
            lineno: 18
            columnno: 4
            path: /home/mrzapp/Development/Web/hashbrown-cms/src/Server/Helpers
            code:
                id: astnode100067319
                name: PluginHelper.init
                type: MethodDefinition
                paramnames:
                    - app
            vars:
                "": null
        description: 'Initialises all plugins located at /plugins/:name/server/index.js'
        params:
            -
                type:
                    names:
                        - Object
                description: 'Express.js server instance'
                name: app
        returns:
            -
                type:
                    names:
                        - Promise
                description: 'Client side file URLs'
        name: init
        longname: HashBrown.Server.Helpers.PluginHelper.init
        kind: function
        memberof: HashBrown.Server.Helpers.PluginHelper
        scope: static
shortname: PluginHelper
layout: docPage
permalink: /docs/hashbrown/server/helpers/pluginhelper/
title: 'API: PluginHelper'
description: 'The helper class for plugins'

---