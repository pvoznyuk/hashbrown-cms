---
comment: "/**\n * The controller for dashboard related operations\n *\n * @memberof HashBrown.Server.Controllers\n */"
meta:
    range:
        - 119
        - 16558
    filename: ServerController.js
    lineno: 8
    columnno: 0
    path: /home/mrzapp/Development/Web/hashbrown-cms/src/Server/Controllers
    code:
        id: astnode100055665
        name: ServerController
        type: ClassDeclaration
        paramnames: []
classdesc: 'The controller for dashboard related operations'
memberof: HashBrown.Server.Controllers
name: ServerController
longname: HashBrown.Server.Controllers.ServerController
kind: class
scope: static
methods:
    -
        comment: "/**\n     * Initialises this controller\n     */"
        meta:
            range:
                - 234
                - 2657
            filename: ServerController.js
            lineno: 12
            columnno: 4
            path: /home/mrzapp/Development/Web/hashbrown-cms/src/Server/Controllers
            code:
                id: astnode100055671
                name: ServerController.init
                type: MethodDefinition
                paramnames:
                    - app
            vars:
                "": null
        description: 'Initialises this controller'
        name: init
        longname: HashBrown.Server.Controllers.ServerController.init
        kind: function
        memberof: HashBrown.Server.Controllers.ServerController
        scope: static
        params: []
    -
        comment: "/**\n     * Migrates content between environments\n     */"
        meta:
            range:
                - 2728
                - 9053
            filename: ServerController.js
            lineno: 39
            columnno: 4
            path: /home/mrzapp/Development/Web/hashbrown-cms/src/Server/Controllers
            code:
                id: astnode100055998
                name: ServerController.postMigrateContent
                type: MethodDefinition
                paramnames:
                    - req
                    - res
            vars:
                "": null
        description: 'Migrates content between environments'
        name: postMigrateContent
        longname: HashBrown.Server.Controllers.ServerController.postMigrateContent
        kind: function
        memberof: HashBrown.Server.Controllers.ServerController
        scope: static
        params: []
    -
        comment: "/**\n     * Update project settings\n     */"
        meta:
            range:
                - 9106
                - 9593
            filename: ServerController.js
            lineno: 231
            columnno: 4
            path: /home/mrzapp/Development/Web/hashbrown-cms/src/Server/Controllers
            code:
                id: astnode100056726
                name: ServerController.postProjectSettings
                type: MethodDefinition
                paramnames:
                    - req
                    - res
            vars:
                "": null
        description: 'Update project settings'
        name: postProjectSettings
        longname: HashBrown.Server.Controllers.ServerController.postProjectSettings
        kind: function
        memberof: HashBrown.Server.Controllers.ServerController
        scope: static
        params: []
    -
        comment: "/**\n     * Checks for new updates\n     */"
        meta:
            range:
                - 9653
                - 9928
            filename: ServerController.js
            lineno: 249
            columnno: 4
            path: /home/mrzapp/Development/Web/hashbrown-cms/src/Server/Controllers
            code:
                id: astnode100056813
                name: ServerController.getUpdateCheck
                type: MethodDefinition
                paramnames:
                    - req
                    - res
            vars:
                "": null
        description: 'Checks for new updates'
        name: getUpdateCheck
        longname: HashBrown.Server.Controllers.ServerController.getUpdateCheck
        kind: function
        memberof: HashBrown.Server.Controllers.ServerController
        scope: static
        params: []
    -
        comment: "/**\n     * Restarts the server\n     */"
        meta:
            range:
                - 9981
                - 10160
            filename: ServerController.js
            lineno: 262
            columnno: 4
            path: /home/mrzapp/Development/Web/hashbrown-cms/src/Server/Controllers
            code:
                id: astnode100056864
                name: ServerController.postRestartServer
                type: MethodDefinition
                paramnames:
                    - req
                    - res
            vars:
                "": null
        description: 'Restarts the server'
        name: postRestartServer
        longname: HashBrown.Server.Controllers.ServerController.postRestartServer
        kind: function
        memberof: HashBrown.Server.Controllers.ServerController
        scope: static
        params: []
    -
        comment: "/**\n     * Updates the server\n     */"
        meta:
            range:
                - 10208
                - 10583
            filename: ServerController.js
            lineno: 272
            columnno: 4
            path: /home/mrzapp/Development/Web/hashbrown-cms/src/Server/Controllers
            code:
                id: astnode100056886
                name: ServerController.postUpdateServer
                type: MethodDefinition
                paramnames:
                    - req
                    - res
            vars:
                "": null
        description: 'Updates the server'
        name: postUpdateServer
        longname: HashBrown.Server.Controllers.ServerController.postUpdateServer
        kind: function
        memberof: HashBrown.Server.Controllers.ServerController
        scope: static
        params: []
    -
        comment: "/**\n     * Gets the backup config\n     */"
        meta:
            range:
                - 10634
                - 10902
            filename: ServerController.js
            lineno: 288
            columnno: 3
            path: /home/mrzapp/Development/Web/hashbrown-cms/src/Server/Controllers
            code:
                id: astnode100056942
                name: ServerController.getBackupConfig
                type: MethodDefinition
                paramnames:
                    - req
                    - res
            vars:
                "": null
        description: 'Gets the backup config'
        name: getBackupConfig
        longname: HashBrown.Server.Controllers.ServerController.getBackupConfig
        kind: function
        memberof: HashBrown.Server.Controllers.ServerController
        scope: static
        params: []
    -
        comment: "/**\n     * Uploads a project backup\n     */"
        meta:
            range:
                - 10955
                - 11182
            filename: ServerController.js
            lineno: 301
            columnno: 3
            path: /home/mrzapp/Development/Web/hashbrown-cms/src/Server/Controllers
            code:
                id: astnode100056993
                name: ServerController.postUploadProjectBackup
                type: MethodDefinition
                paramnames:
                    - req
                    - res
            vars:
                "": null
        description: 'Uploads a project backup'
        name: postUploadProjectBackup
        longname: HashBrown.Server.Controllers.ServerController.postUploadProjectBackup
        kind: function
        memberof: HashBrown.Server.Controllers.ServerController
        scope: static
        params: []
    -
        comment: "/**\n     * Deletes a backup of a project\n     */"
        meta:
            range:
                - 11242
                - 11552
            filename: ServerController.js
            lineno: 315
            columnno: 4
            path: /home/mrzapp/Development/Web/hashbrown-cms/src/Server/Controllers
            code:
                id: astnode100057029
                name: ServerController.deleteBackup
                type: MethodDefinition
                paramnames:
                    - req
                    - res
            vars:
                "": null
        description: 'Deletes a backup of a project'
        name: deleteBackup
        longname: HashBrown.Server.Controllers.ServerController.deleteBackup
        kind: function
        memberof: HashBrown.Server.Controllers.ServerController
        scope: static
        params: []
    -
        comment: "/**\n     * Gets a backup of a project\n     */"
        meta:
            range:
                - 11612
                - 11924
            filename: ServerController.js
            lineno: 328
            columnno: 4
            path: /home/mrzapp/Development/Web/hashbrown-cms/src/Server/Controllers
            code:
                id: astnode100057090
                name: ServerController.getBackup
                type: MethodDefinition
                paramnames:
                    - req
                    - res
            vars:
                "": null
        description: 'Gets a backup of a project'
        name: getBackup
        longname: HashBrown.Server.Controllers.ServerController.getBackup
        kind: function
        memberof: HashBrown.Server.Controllers.ServerController
        scope: static
        params: []
    -
        comment: "/**\n     * Restores a backup of a project\n     */"
        meta:
            range:
                - 11988
                - 12311
            filename: ServerController.js
            lineno: 341
            columnno: 4
            path: /home/mrzapp/Development/Web/hashbrown-cms/src/Server/Controllers
            code:
                id: astnode100057151
                name: ServerController.postRestoreProjectBackup
                type: MethodDefinition
                paramnames:
                    - req
                    - res
            vars:
                "": null
        description: 'Restores a backup of a project'
        name: postRestoreProjectBackup
        longname: HashBrown.Server.Controllers.ServerController.postRestoreProjectBackup
        kind: function
        memberof: HashBrown.Server.Controllers.ServerController
        scope: static
        params: []
    -
        comment: "/**\n     * Makes a backup of a project\n     */"
        meta:
            range:
                - 12368
                - 12666
            filename: ServerController.js
            lineno: 354
            columnno: 4
            path: /home/mrzapp/Development/Web/hashbrown-cms/src/Server/Controllers
            code:
                id: astnode100057212
                name: ServerController.postBackupProject
                type: MethodDefinition
                paramnames:
                    - req
                    - res
            vars:
                "": null
        description: 'Makes a backup of a project'
        name: postBackupProject
        longname: HashBrown.Server.Controllers.ServerController.postBackupProject
        kind: function
        memberof: HashBrown.Server.Controllers.ServerController
        scope: static
        params: []
    -
        comment: "/**\n     * Gets a list of all projects\n     */"
        meta:
            range:
                - 12723
                - 13663
            filename: ServerController.js
            lineno: 367
            columnno: 4
            path: /home/mrzapp/Development/Web/hashbrown-cms/src/Server/Controllers
            code:
                id: astnode100057270
                name: ServerController.getAllProjectNames
                type: MethodDefinition
                paramnames:
                    - req
                    - res
            vars:
                "": null
        description: 'Gets a list of all projects'
        name: getAllProjectNames
        longname: HashBrown.Server.Controllers.ServerController.getAllProjectNames
        kind: function
        memberof: HashBrown.Server.Controllers.ServerController
        scope: static
        params: []
    -
        comment: "/**\n     * Gets a project\n     */"
        meta:
            range:
                - 13711
                - 14279
            filename: ServerController.js
            lineno: 406
            columnno: 4
            path: /home/mrzapp/Development/Web/hashbrown-cms/src/Server/Controllers
            code:
                id: astnode100057392
                name: ServerController.getProject
                type: MethodDefinition
                paramnames:
                    - req
                    - res
            vars:
                "": null
        description: 'Gets a project'
        name: getProject
        longname: HashBrown.Server.Controllers.ServerController.getProject
        kind: function
        memberof: HashBrown.Server.Controllers.ServerController
        scope: static
        params: []
    -
        comment: "/**\n     * Gets a list of all environments\n     */"
        meta:
            range:
                - 14344
                - 14912
            filename: ServerController.js
            lineno: 427
            columnno: 4
            path: /home/mrzapp/Development/Web/hashbrown-cms/src/Server/Controllers
            code:
                id: astnode100057490
                name: ServerController.getAllEnvironments
                type: MethodDefinition
                paramnames:
                    - req
                    - res
            vars:
                "": null
        description: 'Gets a list of all environments'
        name: getAllEnvironments
        longname: HashBrown.Server.Controllers.ServerController.getAllEnvironments
        kind: function
        memberof: HashBrown.Server.Controllers.ServerController
        scope: static
        params: []
    -
        comment: "/**\n     * Deletes a project\n     */"
        meta:
            range:
                - 14959
                - 15278
            filename: ServerController.js
            lineno: 448
            columnno: 4
            path: /home/mrzapp/Development/Web/hashbrown-cms/src/Server/Controllers
            code:
                id: astnode100057582
                name: ServerController.deleteProject
                type: MethodDefinition
                paramnames:
                    - req
                    - res
            vars:
                "": null
        description: 'Deletes a project'
        name: deleteProject
        longname: HashBrown.Server.Controllers.ServerController.deleteProject
        kind: function
        memberof: HashBrown.Server.Controllers.ServerController
        scope: static
        params: []
    -
        comment: "/**\n     * Adds an environment\n     */"
        meta:
            range:
                - 15331
                - 15715
            filename: ServerController.js
            lineno: 463
            columnno: 4
            path: /home/mrzapp/Development/Web/hashbrown-cms/src/Server/Controllers
            code:
                id: astnode100057641
                name: ServerController.putEnvironment
                type: MethodDefinition
                paramnames:
                    - req
                    - res
            vars:
                "": null
        description: 'Adds an environment'
        name: putEnvironment
        longname: HashBrown.Server.Controllers.ServerController.putEnvironment
        kind: function
        memberof: HashBrown.Server.Controllers.ServerController
        scope: static
        params: []
    -
        comment: "/**\n     * Deletes an environment\n     */"
        meta:
            range:
                - 15771
                - 16161
            filename: ServerController.js
            lineno: 479
            columnno: 4
            path: /home/mrzapp/Development/Web/hashbrown-cms/src/Server/Controllers
            code:
                id: astnode100057709
                name: ServerController.deleteEnvironment
                type: MethodDefinition
                paramnames:
                    - req
                    - res
            vars:
                "": null
        description: 'Deletes an environment'
        name: deleteEnvironment
        longname: HashBrown.Server.Controllers.ServerController.deleteEnvironment
        kind: function
        memberof: HashBrown.Server.Controllers.ServerController
        scope: static
        params: []
    -
        comment: "/**\n     * Creates a new project\n     */"
        meta:
            range:
                - 16212
                - 16556
            filename: ServerController.js
            lineno: 495
            columnno: 4
            path: /home/mrzapp/Development/Web/hashbrown-cms/src/Server/Controllers
            code:
                id: astnode100057777
                name: ServerController.createProject
                type: MethodDefinition
                paramnames:
                    - req
                    - res
            vars:
                "": null
        description: 'Creates a new project'
        name: createProject
        longname: HashBrown.Server.Controllers.ServerController.createProject
        kind: function
        memberof: HashBrown.Server.Controllers.ServerController
        scope: static
        params: []
shortname: ServerController
layout: docPage
permalink: /docs/hashbrown/server/controllers/servercontroller/
title: 'API: ServerController'
description: 'The controller for dashboard related operations'

---