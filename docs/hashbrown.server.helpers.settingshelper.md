---
comment: "/**\n * The helper class for settings\n *\n * @memberof HashBrown.Server.Helpers\n */"
meta:
    range:
        - 234
        - 12313
    filename: SettingsHelper.js
    lineno: 11
    columnno: 0
    path: /home/mrzapp/Development/Web/hashbrown-cms/src/Server/Helpers
    code:
        id: astnode100070930
        name: SettingsHelper
        type: ClassDeclaration
        paramnames: []
classdesc: 'The helper class for settings'
memberof: HashBrown.Server.Helpers
name: SettingsHelper
longname: HashBrown.Server.Helpers.SettingsHelper
kind: class
scope: static
methods:
    -
        comment: "/**\n     * Migrates old settings format\n     *\n     * @param {String} project\n     * @param {Boolean} commitChanges\n     *\n     * @returns {Promise} Promise\n     */"
        meta:
            range:
                - 459
                - 5644
            filename: SettingsHelper.js
            lineno: 20
            columnno: 4
            path: /home/mrzapp/Development/Web/hashbrown-cms/src/Server/Helpers
            code:
                id: astnode100070934
                name: SettingsHelper.migrateOldSettings
                type: MethodDefinition
                paramnames:
                    - project
                    - commitChanges
            vars:
                "": null
        description: 'Migrates old settings format'
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
                name: commitChanges
                defaultvalue: false
        returns:
            -
                type:
                    names:
                        - Promise
                description: Promise
        name: migrateOldSettings
        longname: HashBrown.Server.Helpers.SettingsHelper.migrateOldSettings
        kind: function
        memberof: HashBrown.Server.Helpers.SettingsHelper
        scope: static
    -
        comment: "/**\n     * Checks if migration is needed\n     * This is determined by the existence of the \"section\" key within any setting \n     *\n     * @param {String} project\n     *\n     * @returns {Boolean} Migration is needed or not\n     */"
        meta:
            range:
                - 5885
                - 6337
            filename: SettingsHelper.js
            lineno: 184
            columnno: 4
            path: /home/mrzapp/Development/Web/hashbrown-cms/src/Server/Helpers
            code:
                id: astnode100071391
                name: SettingsHelper.checkIfNeedsMigration
                type: MethodDefinition
                paramnames:
                    - project
            vars:
                "": null
        description: "Checks if migration is needed\nThis is determined by the existence of the \"section\" key within any setting"
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
                        - Boolean
                description: 'Migration is needed or not'
        name: checkIfNeedsMigration
        longname: HashBrown.Server.Helpers.SettingsHelper.checkIfNeedsMigration
        kind: function
        memberof: HashBrown.Server.Helpers.SettingsHelper
        scope: static
    -
        comment: "/**\n     * Migration check for all projects\n     *\n     * @returns {Promise} Result\n     */"
        meta:
            range:
                - 6439
                - 7215
            filename: SettingsHelper.js
            lineno: 205
            columnno: 4
            path: /home/mrzapp/Development/Web/hashbrown-cms/src/Server/Helpers
            code:
                id: astnode100071445
                name: SettingsHelper.migrationCheck
                type: MethodDefinition
                paramnames: []
            vars:
                "": null
        description: 'Migration check for all projects'
        returns:
            -
                type:
                    names:
                        - Promise
                description: Result
        name: migrationCheck
        longname: HashBrown.Server.Helpers.SettingsHelper.migrationCheck
        kind: function
        memberof: HashBrown.Server.Helpers.SettingsHelper
        scope: static
        params: []
    -
        comment: "/**\n     * Gets all settings\n     *\n     * @param {String} project\n     * @param {String} environment\n     * @param {String} section\n     *\n     * @return {Promise} Settings\n     */"
        meta:
            range:
                - 7407
                - 9182
            filename: SettingsHelper.js
            lineno: 241
            columnno: 4
            path: /home/mrzapp/Development/Web/hashbrown-cms/src/Server/Helpers
            code:
                id: astnode100071524
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
                        - Promise
                description: Settings
        name: getSettings
        longname: HashBrown.Server.Helpers.SettingsHelper.getSettings
        kind: function
        memberof: HashBrown.Server.Helpers.SettingsHelper
        scope: static
    -
        comment: "/**\n     * Sets settings\n     *\n     * @param {String} project\n     * @param {String} environment\n     * @param {String} section\n     * @param {Object} settings\n     * @param {Boolean} upsertEnvironment\n     *\n     * @return {Promise} promise\n     */"
        meta:
            range:
                - 9447
                - 12311
            filename: SettingsHelper.js
            lineno: 307
            columnno: 4
            path: /home/mrzapp/Development/Web/hashbrown-cms/src/Server/Helpers
            code:
                id: astnode100071677
                name: SettingsHelper.setSettings
                type: MethodDefinition
                paramnames:
                    - project
                    - environment
                    - section
                    - settings
                    - upsertEnvironment
            vars:
                "": null
        description: 'Sets settings'
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
            -
                type:
                    names:
                        - Boolean
                name: upsertEnvironment
                defaultvalue: false
        returns:
            -
                type:
                    names:
                        - Promise
                description: promise
        name: setSettings
        longname: HashBrown.Server.Helpers.SettingsHelper.setSettings
        kind: function
        memberof: HashBrown.Server.Helpers.SettingsHelper
        scope: static
shortname: SettingsHelper
layout: docPage
permalink: /docs/hashbrown/server/helpers/settingshelper/
title: 'API: SettingsHelper'
description: 'The helper class for settings'

---