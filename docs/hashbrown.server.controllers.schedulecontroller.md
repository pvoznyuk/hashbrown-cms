---
comment: "/**\n * The Controller for scheduled Tasks\n *\n * @memberof HashBrown.Server.Controllers\n */"
meta:
    range:
        - 106
        - 931
    filename: ScheduleController.js
    lineno: 8
    columnno: 0
    path: /home/mrzapp/Development/Web/hashbrown-cms/src/Server/Controllers
    code:
        id: astnode100054819
        name: ScheduleController
        type: ClassDeclaration
        paramnames: []
classdesc: 'The Controller for scheduled Tasks'
memberof: HashBrown.Server.Controllers
name: ScheduleController
longname: HashBrown.Server.Controllers.ScheduleController
kind: class
scope: static
methods:
    -
        comment: "/**\n     * Initialises this controller\n     */"
        meta:
            range:
                - 223
                - 348
            filename: ScheduleController.js
            lineno: 12
            columnno: 4
            path: /home/mrzapp/Development/Web/hashbrown-cms/src/Server/Controllers
            code:
                id: astnode100054825
                name: ScheduleController.init
                type: MethodDefinition
                paramnames:
                    - app
            vars:
                "": null
        description: 'Initialises this controller'
        name: init
        longname: HashBrown.Server.Controllers.ScheduleController.init
        kind: function
        memberof: HashBrown.Server.Controllers.ScheduleController
        scope: static
        params: []
    -
        comment: "/**\n     * @example GET /api/:project/:environment/schedule/:contentId\n     *\n     * @apiGroup Schedule\n     *\n     * @param {String} project\n     * @param {String} environment\n     * @param {String} contentId\n     *\n     * @returns {Array} Tasks\n     */"
        meta:
            range:
                - 621
                - 929
            filename: ScheduleController.js
            lineno: 27
            columnno: 4
            path: /home/mrzapp/Development/Web/hashbrown-cms/src/Server/Controllers
            code:
                id: astnode100054843
                name: ScheduleController.getTasks
                type: MethodDefinition
                paramnames:
                    - req
                    - res
            vars:
                "": null
        examples:
            - 'GET /api/:project/:environment/schedule/:contentId'
        tags:
            -
                originalTitle: apiGroup
                title: apigroup
                text: Schedule
                value: Schedule
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
                name: contentId
        returns:
            -
                type:
                    names:
                        - Array
                description: Tasks
        name: getTasks
        longname: HashBrown.Server.Controllers.ScheduleController.getTasks
        kind: function
        memberof: HashBrown.Server.Controllers.ScheduleController
        scope: static
shortname: ScheduleController
layout: docPage
permalink: /docs/hashbrown/server/controllers/schedulecontroller/
title: 'API: ScheduleController'
description: 'The Controller for scheduled Tasks'

---