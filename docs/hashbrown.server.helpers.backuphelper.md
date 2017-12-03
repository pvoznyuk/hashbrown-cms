---
comment: "/**\n * A helper class for managing backups\n *\n * @memberof HashBrown.Server.Helpers\n */"
meta:
    range:
        - 384
        - 5091
    filename: BackupHelper.js
    lineno: 17
    columnno: 0
    path: /home/mrzapp/Development/Web/hashbrown-cms/src/Server/Helpers
    code:
        id: astnode100061309
        name: BackupHelper
        type: ClassDeclaration
        paramnames: []
classdesc: 'A helper class for managing backups'
memberof: HashBrown.Server.Helpers
name: BackupHelper
longname: HashBrown.Server.Helpers.BackupHelper
kind: class
scope: static
methods:
    -
        comment: "/**\n     * Gets config\n     *\n     * @returns {Promise} Storage provider settings\n     */"
        meta:
            range:
                - 503
                - 1566
            filename: BackupHelper.js
            lineno: 23
            columnno: 4
            path: /home/mrzapp/Development/Web/hashbrown-cms/src/Server/Helpers
            code:
                id: astnode100061312
                name: BackupHelper.getConfig
                type: MethodDefinition
                paramnames: []
            vars:
                "": null
        description: 'Gets config'
        returns:
            -
                type:
                    names:
                        - Promise
                description: 'Storage provider settings'
        name: getConfig
        longname: HashBrown.Server.Helpers.BackupHelper.getConfig
        kind: function
        memberof: HashBrown.Server.Helpers.BackupHelper
        scope: static
        params: []
    -
        comment: "/**\n     * Gets the upload handler\n     *\n     * @return {Function} handler\n     */"
        meta:
            range:
                - 1660
                - 2544
            filename: BackupHelper.js
            lineno: 58
            columnno: 4
            path: /home/mrzapp/Development/Web/hashbrown-cms/src/Server/Helpers
            code:
                id: astnode100061397
                name: BackupHelper.getUploadHandler
                type: MethodDefinition
                paramnames: []
            vars:
                "": null
        description: 'Gets the upload handler'
        returns:
            -
                type:
                    names:
                        - function
                description: handler
        name: getUploadHandler
        longname: HashBrown.Server.Helpers.BackupHelper.getUploadHandler
        kind: function
        memberof: HashBrown.Server.Helpers.BackupHelper
        scope: static
        params: []
    -
        comment: "/**\n     * Gets a list of backups for a project\n     *\n     * @param {String} id\n     *\n     * @returns {Array} List of backup names as strings\n     */"
        meta:
            range:
                - 2710
                - 3236
            filename: BackupHelper.js
            lineno: 92
            columnno: 4
            path: /home/mrzapp/Development/Web/hashbrown-cms/src/Server/Helpers
            code:
                id: astnode100061486
                name: BackupHelper.getBackupsForProject
                type: MethodDefinition
                paramnames:
                    - id
            vars:
                "": null
        description: 'Gets a list of backups for a project'
        params:
            -
                type:
                    names:
                        - String
                name: id
        returns:
            -
                type:
                    names:
                        - Array
                description: 'List of backup names as strings'
        name: getBackupsForProject
        longname: HashBrown.Server.Helpers.BackupHelper.getBackupsForProject
        kind: function
        memberof: HashBrown.Server.Helpers.BackupHelper
        scope: static
    -
        comment: "/**\n     * Restores a backup for a project\n     *\n     * @param {String} projectName\n     * @param {String} timestamp\n     *\n     * @returns {Promise} Promise\n     */"
        meta:
            range:
                - 3413
                - 3528
            filename: BackupHelper.js
            lineno: 116
            columnno: 4
            path: /home/mrzapp/Development/Web/hashbrown-cms/src/Server/Helpers
            code:
                id: astnode100061556
                name: BackupHelper.restoreBackup
                type: MethodDefinition
                paramnames:
                    - projectName
                    - timestamp
            vars:
                "": null
        description: 'Restores a backup for a project'
        params:
            -
                type:
                    names:
                        - String
                name: projectName
            -
                type:
                    names:
                        - String
                name: timestamp
        returns:
            -
                type:
                    names:
                        - Promise
                description: Promise
        name: restoreBackup
        longname: HashBrown.Server.Helpers.BackupHelper.restoreBackup
        kind: function
        memberof: HashBrown.Server.Helpers.BackupHelper
        scope: static
    -
        comment: "/**\n     * Creates a backup for a project\n     *\n     * @param {String} projectName\n     *\n     * @returns {Promise} Promise\n     */"
        meta:
            range:
                - 3676
                - 3765
            filename: BackupHelper.js
            lineno: 128
            columnno: 4
            path: /home/mrzapp/Development/Web/hashbrown-cms/src/Server/Helpers
            code:
                id: astnode100061569
                name: BackupHelper.createBackup
                type: MethodDefinition
                paramnames:
                    - projectName
            vars:
                "": null
        description: 'Creates a backup for a project'
        params:
            -
                type:
                    names:
                        - String
                name: projectName
        returns:
            -
                type:
                    names:
                        - Promise
                description: Promise
        name: createBackup
        longname: HashBrown.Server.Helpers.BackupHelper.createBackup
        kind: function
        memberof: HashBrown.Server.Helpers.BackupHelper
        scope: static
    -
        comment: "/**\n     * Deletes a backup\n     *\n     * @param {String} projectName\n     * @param {String} timestamp\n     *\n     * @returns {Promise} Promise\n     */"
        meta:
            range:
                - 3927
                - 4421
            filename: BackupHelper.js
            lineno: 140
            columnno: 4
            path: /home/mrzapp/Development/Web/hashbrown-cms/src/Server/Helpers
            code:
                id: astnode100061580
                name: BackupHelper.deleteBackup
                type: MethodDefinition
                paramnames:
                    - projectName
                    - timestamp
            vars:
                "": null
        description: 'Deletes a backup'
        params:
            -
                type:
                    names:
                        - String
                name: projectName
            -
                type:
                    names:
                        - String
                name: timestamp
        returns:
            -
                type:
                    names:
                        - Promise
                description: Promise
        name: deleteBackup
        longname: HashBrown.Server.Helpers.BackupHelper.deleteBackup
        kind: function
        memberof: HashBrown.Server.Helpers.BackupHelper
        scope: static
    -
        comment: "/**\n     * Gets the file path for a backup\n     *\n     * @param {String} projectName\n     * @param {String} timestamp\n     *\n     * @returns {Promise} The backup file path\n     */"
        meta:
            range:
                - 4611
                - 5089
            filename: BackupHelper.js
            lineno: 162
            columnno: 4
            path: /home/mrzapp/Development/Web/hashbrown-cms/src/Server/Helpers
            code:
                id: astnode100061638
                name: BackupHelper.getBackupPath
                type: MethodDefinition
                paramnames:
                    - projectName
                    - timestamp
            vars:
                "": null
        description: 'Gets the file path for a backup'
        params:
            -
                type:
                    names:
                        - String
                name: projectName
            -
                type:
                    names:
                        - String
                name: timestamp
        returns:
            -
                type:
                    names:
                        - Promise
                description: 'The backup file path'
        name: getBackupPath
        longname: HashBrown.Server.Helpers.BackupHelper.getBackupPath
        kind: function
        memberof: HashBrown.Server.Helpers.BackupHelper
        scope: static
shortname: BackupHelper
layout: docPage
permalink: /docs/hashbrown/server/helpers/backuphelper/
title: 'API: BackupHelper'
description: 'A helper class for managing backups'

---