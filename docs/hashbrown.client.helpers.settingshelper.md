---
comment: "/**\n * The client side settings helper\n *\n * @memberof HashBrown.Client.Helpers\n */"
meta:
    range:
        - 235
        - 4604
    filename: SettingsHelper.js
    lineno: 12
    columnno: 0
    path: /home/mrzapp/Development/Web/hashbrown-cms/src/Client/Helpers
    code:
        id: astnode100002165
        name: SettingsHelper
        type: ClassDeclaration
        paramnames: []
classdesc: 'The client side settings helper'
memberof: HashBrown.Client.Helpers
name: SettingsHelper
longname: HashBrown.Client.Helpers.SettingsHelper
kind: class
scope: static
methods:
    -
        comment: "/**\n     * Gets all settings\n     *\n     * @param {String} project\n     * @param {String} environment\n     * @param {String} section\n     *\n     * @return {Promise(Object)}  settings\n     */"
        meta:
            range:
                - 486
                - 1160
            filename: SettingsHelper.js
            lineno: 22
            columnno: 4
            path: /home/mrzapp/Development/Web/hashbrown-cms/src/Client/Helpers
            code:
                id: astnode100002169
                name: SettingsHelper.getSettings
                type: MethodDefinition
                paramnames:
                    - project
                    - environment
                    - section
            vars:
                "": null
        description: 'Gets all settings'
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
                defaultvalue: null
            -
                type:
                    names:
                        - String
                name: section
                defaultvalue: null
        returns:
            -
                type:
                    names:
                        - Promise(Object)
                description: settings
        name: getSettings
        longname: HashBrown.Client.Helpers.SettingsHelper.getSettings
        kind: function
        memberof: HashBrown.Client.Helpers.SettingsHelper
        scope: static
    -
        comment: "/**\n     * Cache update\n     *\n     * @param {String} project\n     * @param {String} environment\n     * @param {String} section\n     */"
        meta:
            range:
                - 1309
                - 1984
            filename: SettingsHelper.js
            lineno: 56
            columnno: 4
            path: /home/mrzapp/Development/Web/hashbrown-cms/src/Client/Helpers
            code:
                id: astnode100002255
                name: SettingsHelper.cacheSanityCheck
                type: MethodDefinition
                paramnames:
                    - project
                    - environment
                    - section
            vars:
                "": null
        description: 'Cache update'
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
                defaultvalue: null
            -
                type:
                    names:
                        - String
                name: section
                defaultvalue: null
        name: cacheSanityCheck
        longname: HashBrown.Client.Helpers.SettingsHelper.cacheSanityCheck
        kind: function
        memberof: HashBrown.Client.Helpers.SettingsHelper
        scope: static
    -
        comment: "/**\n     * Cache update\n     *\n     * @param {String} project\n     * @param {String} environment\n     * @param {String} section\n     * @param {Object} settings\n     */"
        meta:
            range:
                - 2162
                - 2869
            filename: SettingsHelper.js
            lineno: 85
            columnno: 4
            path: /home/mrzapp/Development/Web/hashbrown-cms/src/Client/Helpers
            code:
                id: astnode100002372
                name: SettingsHelper.updateCache
                type: MethodDefinition
                paramnames:
                    - project
                    - environment
                    - section
                    - settings
            vars:
                "": null
        description: 'Cache update'
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
                defaultvalue: null
            -
                type:
                    names:
                        - String
                name: section
                defaultvalue: null
            -
                type:
                    names:
                        - Object
                name: settings
        name: updateCache
        longname: HashBrown.Client.Helpers.SettingsHelper.updateCache
        kind: function
        memberof: HashBrown.Client.Helpers.SettingsHelper
        scope: static
    -
        comment: "/**\n     * Gets cached settings\n     *\n     * @param {String} section\n     *\n     * @returns {Object} Settings\n     */"
        meta:
            range:
                - 2998
                - 3583
            filename: SettingsHelper.js
            lineno: 115
            columnno: 4
            path: /home/mrzapp/Development/Web/hashbrown-cms/src/Client/Helpers
            code:
                id: astnode100002470
                name: SettingsHelper.getCachedSettings
                type: MethodDefinition
                paramnames:
                    - project
                    - environment
                    - section
            vars:
                "": null
        description: 'Gets cached settings'
        params:
            -
                type:
                    names:
                        - String
                name: section
                defaultvalue: null
        returns:
            -
                type:
                    names:
                        - Object
                description: Settings
        name: getCachedSettings
        longname: HashBrown.Client.Helpers.SettingsHelper.getCachedSettings
        kind: function
        memberof: HashBrown.Client.Helpers.SettingsHelper
        scope: static
    -
        comment: "/**\n     * Sets all settings\n     *\n     * @param {String} project\n     * @param {String} environment\n     * @param {String} section\n     * @param {Object} settings\n     *\n     * @return {Promise} promise\n     */"
        meta:
            range:
                - 3806
                - 4602
            filename: SettingsHelper.js
            lineno: 147
            columnno: 4
            path: /home/mrzapp/Development/Web/hashbrown-cms/src/Client/Helpers
            code:
                id: astnode100002545
                name: SettingsHelper.setSettings
                type: MethodDefinition
                paramnames:
                    - project
                    - environment
                    - section
                    - settings
            vars:
                "": null
        description: 'Sets all settings'
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
                defaultvalue: null
            -
                type:
                    names:
                        - String
                name: section
                defaultvalue: null
            -
                type:
                    names:
                        - Object
                name: settings
        returns:
            -
                type:
                    names:
                        - Promise
                description: promise
        name: setSettings
        longname: HashBrown.Client.Helpers.SettingsHelper.setSettings
        kind: function
        memberof: HashBrown.Client.Helpers.SettingsHelper
        scope: static
shortname: SettingsHelper
layout: docPage
permalink: /docs/hashbrown/client/helpers/settingshelper/
title: 'API: SettingsHelper'
description: 'The client side settings helper'

---