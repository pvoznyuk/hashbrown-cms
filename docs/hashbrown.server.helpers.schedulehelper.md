---
comment: "/**\n * A helper class for scheduling tasks\n *\n * @memberof HashBrown.Server.Helpers\n */"
meta:
    range:
        - 217
        - 6756
    filename: ScheduleHelper.js
    lineno: 14
    columnno: 0
    path: /home/mrzapp/Development/Web/hashbrown-cms/src/Server/Helpers
    code:
        id: astnode100069157
        name: ScheduleHelper
        type: ClassDeclaration
        paramnames: []
classdesc: 'A helper class for scheduling tasks'
memberof: HashBrown.Server.Helpers
name: ScheduleHelper
longname: HashBrown.Server.Helpers.ScheduleHelper
kind: class
scope: static
methods:
    -
        comment: "/**\n     * Starts wathing for tasks\n     */"
        meta:
            range:
                - 292
                - 514
            filename: ScheduleHelper.js
            lineno: 18
            columnno: 4
            path: /home/mrzapp/Development/Web/hashbrown-cms/src/Server/Helpers
            code:
                id: astnode100069160
                name: ScheduleHelper.startWatching
                type: MethodDefinition
                paramnames: []
            vars:
                "": null
        description: 'Starts wathing for tasks'
        name: startWatching
        longname: HashBrown.Server.Helpers.ScheduleHelper.startWatching
        kind: function
        memberof: HashBrown.Server.Helpers.ScheduleHelper
        scope: static
        params: []
    -
        comment: "/**\n     * Checks for potential tasks to do\n     *\n     * @returns {Promise} Promise\n     */"
        meta:
            range:
                - 625
                - 1891
            filename: ScheduleHelper.js
            lineno: 33
            columnno: 4
            path: /home/mrzapp/Development/Web/hashbrown-cms/src/Server/Helpers
            code:
                id: astnode100069182
                name: ScheduleHelper.checkTasks
                type: MethodDefinition
                paramnames: []
            vars:
                "": null
        description: 'Checks for potential tasks to do'
        returns:
            -
                type:
                    names:
                        - Promise
                description: Promise
        name: checkTasks
        longname: HashBrown.Server.Helpers.ScheduleHelper.checkTasks
        kind: function
        memberof: HashBrown.Server.Helpers.ScheduleHelper
        scope: static
        params: []
    -
        comment: "/**\n     * Runs a task\n     *\n     * @param {Task} task\n     *\n     * @return {Promise} Promise\n     */"
        meta:
            range:
                - 2005
                - 3274
            filename: ScheduleHelper.js
            lineno: 78
            columnno: 4
            path: /home/mrzapp/Development/Web/hashbrown-cms/src/Server/Helpers
            code:
                id: astnode100069313
                name: ScheduleHelper.runTask
                type: MethodDefinition
                paramnames:
                    - task
            vars:
                "": null
        description: 'Runs a task'
        params:
            -
                type:
                    names:
                        - Task
                name: task
        returns:
            -
                type:
                    names:
                        - Promise
                description: Promise
        name: runTask
        longname: HashBrown.Server.Helpers.ScheduleHelper.runTask
        kind: function
        memberof: HashBrown.Server.Helpers.ScheduleHelper
        scope: static
    -
        comment: "/**\n     * Gets a list of scheduled tasks by query\n     *\n     * @param {String} type\n     * @param {String} contentId\n     * @param {Date} date\n     *\n     * @returns {Promise} An array of tasks\n     */"
        meta:
            range:
                - 3488
                - 4059
            filename: ScheduleHelper.js
            lineno: 121
            columnno: 4
            path: /home/mrzapp/Development/Web/hashbrown-cms/src/Server/Helpers
            code:
                id: astnode100069489
                name: ScheduleHelper.getTasks
                type: MethodDefinition
                paramnames:
                    - type
                    - contentId
                    - date
            vars:
                "": null
        description: 'Gets a list of scheduled tasks by query'
        params:
            -
                type:
                    names:
                        - String
                name: type
            -
                type:
                    names:
                        - String
                name: contentId
            -
                type:
                    names:
                        - Date
                name: date
        returns:
            -
                type:
                    names:
                        - Promise
                description: 'An array of tasks'
        name: getTasks
        longname: HashBrown.Server.Helpers.ScheduleHelper.getTasks
        kind: function
        memberof: HashBrown.Server.Helpers.ScheduleHelper
        scope: static
    -
        comment: "/**\n     * Updates a task\n     *\n     * @param {String} project\n     * @param {String} environment\n     * @param {String} type\n     * @param {String} contentId\n     * @param {Date} date\n     * @param {User} user\n     *\n     * @returns {Promise} Promise\n     */"
        meta:
            range:
                - 4330
                - 5635
            filename: ScheduleHelper.js
            lineno: 161
            columnno: 4
            path: /home/mrzapp/Development/Web/hashbrown-cms/src/Server/Helpers
            code:
                id: astnode100069567
                name: ScheduleHelper.updateTask
                type: MethodDefinition
                paramnames:
                    - project
                    - environment
                    - type
                    - contentId
                    - date
                    - user
            vars:
                "": null
        description: 'Updates a task'
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
                name: type
            -
                type:
                    names:
                        - String
                name: contentId
            -
                type:
                    names:
                        - Date
                name: date
            -
                type:
                    names:
                        - User
                name: user
        returns:
            -
                type:
                    names:
                        - Promise
                description: Promise
        name: updateTask
        longname: HashBrown.Server.Helpers.ScheduleHelper.updateTask
        kind: function
        memberof: HashBrown.Server.Helpers.ScheduleHelper
        scope: static
    -
        comment: "/**\n     * Removes a task\n     *\n     * @param {String} project\n     * @param {String} environment\n     * @param {String} type\n     * @param {String} contentId\n     *\n     * @returns {Promise} Promise\n     */"
        meta:
            range:
                - 5854
                - 6754
            filename: ScheduleHelper.js
            lineno: 213
            columnno: 4
            path: /home/mrzapp/Development/Web/hashbrown-cms/src/Server/Helpers
            code:
                id: astnode100069722
                name: ScheduleHelper.removeTask
                type: MethodDefinition
                paramnames:
                    - project
                    - environment
                    - type
                    - contentId
            vars:
                "": null
        description: 'Removes a task'
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
                name: type
            -
                type:
                    names:
                        - String
                name: contentId
        returns:
            -
                type:
                    names:
                        - Promise
                description: Promise
        name: removeTask
        longname: HashBrown.Server.Helpers.ScheduleHelper.removeTask
        kind: function
        memberof: HashBrown.Server.Helpers.ScheduleHelper
        scope: static
shortname: ScheduleHelper
layout: docPage
permalink: /docs/hashbrown/server/helpers/schedulehelper/
title: 'API: ScheduleHelper'
description: 'A helper class for scheduling tasks'

---