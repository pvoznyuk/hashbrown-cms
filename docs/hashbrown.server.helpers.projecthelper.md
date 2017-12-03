---
comment: "/**\n * A helper class for managing projects\n *\n * @memberof HashBrown.Server.Helpers\n */"
meta:
    range:
        - 461
        - 11355
    filename: ProjectHelper.js
    lineno: 16
    columnno: 0
    path: /home/mrzapp/Development/Web/hashbrown-cms/src/Server/Helpers
    code:
        id: astnode100067410
        name: ProjectHelper
        type: ClassDeclaration
        paramnames: []
classdesc: 'A helper class for managing projects'
memberof: HashBrown.Server.Helpers
name: ProjectHelper
longname: HashBrown.Server.Helpers.ProjectHelper
kind: class
scope: static
methods:
    -
        comment: "/**\n     * Gets a list of all available projects\n     *\n     * @returns {Promise} Array of Project names\n     */"
        meta:
            range:
                - 604
                - 1289
            filename: ProjectHelper.js
            lineno: 22
            columnno: 4
            path: /home/mrzapp/Development/Web/hashbrown-cms/src/Server/Helpers
            code:
                id: astnode100067413
                name: ProjectHelper.getAllProjectNames
                type: MethodDefinition
                paramnames: []
            vars:
                "": null
        description: 'Gets a list of all available projects'
        returns:
            -
                type:
                    names:
                        - Promise
                description: 'Array of Project names'
        name: getAllProjectNames
        longname: HashBrown.Server.Helpers.ProjectHelper.getAllProjectNames
        kind: function
        memberof: HashBrown.Server.Helpers.ProjectHelper
        scope: static
        params: []
    -
        comment: "/**\n     * Checks if a project exists\n     *\n     * @param {String} project\n     *\n     * @returns {Promise} Promise\n     */"
        meta:
            range:
                - 1424
                - 1530
            filename: ProjectHelper.js
            lineno: 55
            columnno: 4
            path: /home/mrzapp/Development/Web/hashbrown-cms/src/Server/Helpers
            code:
                id: astnode100067487
                name: ProjectHelper.projectExists
                type: MethodDefinition
                paramnames:
                    - project
            vars:
                "": null
        description: 'Checks if a project exists'
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
                        - Promise
                description: Promise
        name: projectExists
        longname: HashBrown.Server.Helpers.ProjectHelper.projectExists
        kind: function
        memberof: HashBrown.Server.Helpers.ProjectHelper
        scope: static
    -
        comment: "/**\n     * Checks if an environment exists\n     *\n     * @param {String} project\n     * @param {String} environment\n     *\n     * @returns {Promise} Promise\n     */"
        meta:
            range:
                - 1709
                - 2022
            filename: ProjectHelper.js
            lineno: 67
            columnno: 4
            path: /home/mrzapp/Development/Web/hashbrown-cms/src/Server/Helpers
            code:
                id: astnode100067499
                name: ProjectHelper.environmentExists
                type: MethodDefinition
                paramnames:
                    - project
                    - environment
            vars:
                "": null
        description: 'Checks if an environment exists'
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
                description: Promise
        name: environmentExists
        longname: HashBrown.Server.Helpers.ProjectHelper.environmentExists
        kind: function
        memberof: HashBrown.Server.Helpers.ProjectHelper
        scope: static
    -
        comment: "/**\n     * Performs a check of the requested project\n     *\n     * @param {String} project\n     *\n     * @returns {Promise} Result\n     */"
        meta:
            range:
                - 2171
                - 2530
            filename: ProjectHelper.js
            lineno: 85
            columnno: 4
            path: /home/mrzapp/Development/Web/hashbrown-cms/src/Server/Helpers
            code:
                id: astnode100067540
                name: ProjectHelper.checkProject
                type: MethodDefinition
                paramnames:
                    - project
            vars:
                "": null
        description: 'Performs a check of the requested project'
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
                        - Promise
                description: Result
        name: checkProject
        longname: HashBrown.Server.Helpers.ProjectHelper.checkProject
        kind: function
        memberof: HashBrown.Server.Helpers.ProjectHelper
        scope: static
    -
        comment: "/**\n     * Toggles a Project settings \"sync\" section on/off\n     *\n     * @param {String} id\n     * @param {Boolean} isEnabled\n     *\n     * @returns {Promise} Result\n     */"
        meta:
            range:
                - 2715
                - 3496
            filename: ProjectHelper.js
            lineno: 106
            columnno: 4
            path: /home/mrzapp/Development/Web/hashbrown-cms/src/Server/Helpers
            code:
                id: astnode100067584
                name: ProjectHelper.toggleProjectSync
                type: MethodDefinition
                paramnames:
                    - id
                    - isEnabled
            vars:
                "": null
        description: 'Toggles a Project settings "sync" section on/off'
        params:
            -
                type:
                    names:
                        - String
                name: id
            -
                type:
                    names:
                        - Boolean
                name: isEnabled
        returns:
            -
                type:
                    names:
                        - Promise
                description: Result
        name: toggleProjectSync
        longname: HashBrown.Server.Helpers.ProjectHelper.toggleProjectSync
        kind: function
        memberof: HashBrown.Server.Helpers.ProjectHelper
        scope: static
    -
        comment: "/**\n     * Gets a Project object\n     *\n     * @param {String} id\n     *\n     * @returns {Promise} Project object\n     */"
        meta:
            range:
                - 3628
                - 4622
            filename: ProjectHelper.js
            lineno: 139
            columnno: 4
            path: /home/mrzapp/Development/Web/hashbrown-cms/src/Server/Helpers
            code:
                id: astnode100067679
                name: ProjectHelper.getProject
                type: MethodDefinition
                paramnames:
                    - id
            vars:
                "": null
        description: 'Gets a Project object'
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
                        - Promise
                description: 'Project object'
        name: getProject
        longname: HashBrown.Server.Helpers.ProjectHelper.getProject
        kind: function
        memberof: HashBrown.Server.Helpers.ProjectHelper
        scope: static
    -
        comment: "/**\n     * Gets a list of all available environments\n     *\n     * @param {String} project\n     *\n     * @returns {Promise(Array)} environments\n     */"
        meta:
            range:
                - 4784
                - 6383
            filename: ProjectHelper.js
            lineno: 183
            columnno: 4
            path: /home/mrzapp/Development/Web/hashbrown-cms/src/Server/Helpers
            code:
                id: astnode100067800
                name: ProjectHelper.getAllEnvironments
                type: MethodDefinition
                paramnames:
                    - project
            vars:
                "": null
        description: 'Gets a list of all available environments'
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
                        - Promise(Array)
                description: environments
        name: getAllEnvironments
        longname: HashBrown.Server.Helpers.ProjectHelper.getAllEnvironments
        kind: function
        memberof: HashBrown.Server.Helpers.ProjectHelper
        scope: static
    -
        comment: "/**\n     * Deletes a project\n     *\n     * @param {String} name\n     *\n     * @returns {Promise} Promise\n     */"
        meta:
            range:
                - 6506
                - 7044
            filename: ProjectHelper.js
            lineno: 233
            columnno: 4
            path: /home/mrzapp/Development/Web/hashbrown-cms/src/Server/Helpers
            code:
                id: astnode100067928
                name: ProjectHelper.deleteProject
                type: MethodDefinition
                paramnames:
                    - id
                    - makeBackup
            vars:
                "": null
        description: 'Deletes a project'
        params:
            -
                type:
                    names:
                        - String
                name: name
        returns:
            -
                type:
                    names:
                        - Promise
                description: Promise
        name: deleteProject
        longname: HashBrown.Server.Helpers.ProjectHelper.deleteProject
        kind: function
        memberof: HashBrown.Server.Helpers.ProjectHelper
        scope: static
    -
        comment: "/**\n     * Adds an environment\n     *\n     * @param {String} project\n     * @param {String} environment\n     *\n     * @returns {Promise} New environment\n     */"
        meta:
            range:
                - 7215
                - 8038
            filename: ProjectHelper.js
            lineno: 260
            columnno: 4
            path: /home/mrzapp/Development/Web/hashbrown-cms/src/Server/Helpers
            code:
                id: astnode100067980
                name: ProjectHelper.addEnvironment
                type: MethodDefinition
                paramnames:
                    - project
                    - environment
            vars:
                "": null
        description: 'Adds an environment'
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
                description: 'New environment'
        name: addEnvironment
        longname: HashBrown.Server.Helpers.ProjectHelper.addEnvironment
        kind: function
        memberof: HashBrown.Server.Helpers.ProjectHelper
        scope: static
    -
        comment: "/**\n     * Deletes an environment\n     *\n     * @param {String} project\n     * @param {String} environment\n     *\n     * @returns {Promise} Promise\n     */"
        meta:
            range:
                - 8204
                - 10262
            filename: ProjectHelper.js
            lineno: 291
            columnno: 4
            path: /home/mrzapp/Development/Web/hashbrown-cms/src/Server/Helpers
            code:
                id: astnode100068072
                name: ProjectHelper.deleteEnvironment
                type: MethodDefinition
                paramnames:
                    - project
                    - environment
            vars:
                "": null
        description: 'Deletes an environment'
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
                description: Promise
        name: deleteEnvironment
        longname: HashBrown.Server.Helpers.ProjectHelper.deleteEnvironment
        kind: function
        memberof: HashBrown.Server.Helpers.ProjectHelper
        scope: static
    -
        comment: "/**\n     * Creates a new Project\n     *\n     * @param {String} name\n     * @param {String} userId\n     *\n     * @returns {Promise} The new Project\n     */"
        meta:
            range:
                - 10431
                - 11353
            filename: ProjectHelper.js
            lineno: 356
            columnno: 4
            path: /home/mrzapp/Development/Web/hashbrown-cms/src/Server/Helpers
            code:
                id: astnode100068255
                name: ProjectHelper.createProject
                type: MethodDefinition
                paramnames:
                    - name
                    - userId
            vars:
                "": null
        description: 'Creates a new Project'
        params:
            -
                type:
                    names:
                        - String
                name: name
            -
                type:
                    names:
                        - String
                name: userId
        returns:
            -
                type:
                    names:
                        - Promise
                description: 'The new Project'
        name: createProject
        longname: HashBrown.Server.Helpers.ProjectHelper.createProject
        kind: function
        memberof: HashBrown.Server.Helpers.ProjectHelper
        scope: static
shortname: ProjectHelper
layout: docPage
permalink: /docs/hashbrown/server/helpers/projecthelper/
title: 'API: ProjectHelper'
description: 'A helper class for managing projects'

---