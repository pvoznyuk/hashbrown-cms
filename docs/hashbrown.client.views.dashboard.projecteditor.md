---
comment: "/**\n * The editor for projects as seen on the dashboard\n *\n * @memberof HashBrown.Client.Views.Dashboard\n */"
meta:
    range:
        - 593
        - 9187
    filename: ProjectEditor.js
    lineno: 16
    columnno: 0
    path: /home/mrzapp/Development/Web/hashbrown-cms/src/Client/Views/Dashboard
    code:
        id: astnode100008591
        name: ProjectEditor
        type: ClassDeclaration
        paramnames:
            - params
classdesc: 'The editor for projects as seen on the dashboard'
memberof: HashBrown.Client.Views.Dashboard
name: ProjectEditor
longname: HashBrown.Client.Views.Dashboard.ProjectEditor
kind: class
scope: static
params: []
methods:
    -
        comment: "/**\n     * Event: Click remove button\n     */"
        meta:
            range:
                - 954
                - 2364
            filename: ProjectEditor.js
            lineno: 32
            columnno: 4
            path: /home/mrzapp/Development/Web/hashbrown-cms/src/Client/Views/Dashboard
            code:
                id: astnode100008633
                name: 'ProjectEditor#onClickRemove'
                type: MethodDefinition
                paramnames: []
            vars:
                "": null
        description: 'Event: Click remove button'
        name: onClickRemove
        longname: 'HashBrown.Client.Views.Dashboard.ProjectEditor#onClickRemove'
        kind: function
        memberof: HashBrown.Client.Views.Dashboard.ProjectEditor
        scope: instance
        params: []
    -
        comment: "/**\n     * Event: Click remove environment\n     *\n     * @param {String} environmentName\n     */"
        meta:
            range:
                - 2471
                - 3030
            filename: ProjectEditor.js
            lineno: 72
            columnno: 4
            path: /home/mrzapp/Development/Web/hashbrown-cms/src/Client/Views/Dashboard
            code:
                id: astnode100008792
                name: 'ProjectEditor#onClickRemoveEnvironment'
                type: MethodDefinition
                paramnames:
                    - environmentName
            vars:
                "": null
        description: 'Event: Click remove environment'
        params:
            -
                type:
                    names:
                        - String
                name: environmentName
        name: onClickRemoveEnvironment
        longname: 'HashBrown.Client.Views.Dashboard.ProjectEditor#onClickRemoveEnvironment'
        kind: function
        memberof: HashBrown.Client.Views.Dashboard.ProjectEditor
        scope: instance
    -
        comment: "/**\n     * Event: Click info button */"
        meta:
            range:
                - 3083
                - 3347
            filename: ProjectEditor.js
            lineno: 86
            columnno: 4
            path: /home/mrzapp/Development/Web/hashbrown-cms/src/Client/Views/Dashboard
            code:
                id: astnode100008874
                name: 'ProjectEditor#onClickInfo'
                type: MethodDefinition
                paramnames: []
            vars:
                "": null
        description: 'Event: Click info button'
        name: onClickInfo
        longname: 'HashBrown.Client.Views.Dashboard.ProjectEditor#onClickInfo'
        kind: function
        memberof: HashBrown.Client.Views.Dashboard.ProjectEditor
        scope: instance
        params: []
    -
        comment: "/**\n     * Event: Click sync button\n     */"
        meta:
            range:
                - 3405
                - 3674
            filename: ProjectEditor.js
            lineno: 100
            columnno: 4
            path: /home/mrzapp/Development/Web/hashbrown-cms/src/Client/Views/Dashboard
            code:
                id: astnode100008916
                name: 'ProjectEditor#onClickSync'
                type: MethodDefinition
                paramnames: []
            vars:
                "": null
        description: 'Event: Click sync button'
        name: onClickSync
        longname: 'HashBrown.Client.Views.Dashboard.ProjectEditor#onClickSync'
        kind: function
        memberof: HashBrown.Client.Views.Dashboard.ProjectEditor
        scope: instance
        params: []
    -
        comment: "/**\n     * Event: Click languages button\n     */"
        meta:
            range:
                - 3737
                - 4019
            filename: ProjectEditor.js
            lineno: 114
            columnno: 4
            path: /home/mrzapp/Development/Web/hashbrown-cms/src/Client/Views/Dashboard
            code:
                id: astnode100008958
                name: 'ProjectEditor#onClickLanguages'
                type: MethodDefinition
                paramnames: []
            vars:
                "": null
        description: 'Event: Click languages button'
        name: onClickLanguages
        longname: 'HashBrown.Client.Views.Dashboard.ProjectEditor#onClickLanguages'
        kind: function
        memberof: HashBrown.Client.Views.Dashboard.ProjectEditor
        scope: instance
        params: []
    -
        comment: "/**\n     * Event: Click backups button\n     */"
        meta:
            range:
                - 4076
                - 4341
            filename: ProjectEditor.js
            lineno: 128
            columnno: 4
            path: /home/mrzapp/Development/Web/hashbrown-cms/src/Client/Views/Dashboard
            code:
                id: astnode100008999
                name: 'ProjectEditor#onClickBackups'
                type: MethodDefinition
                paramnames: []
            vars:
                "": null
        description: 'Event: Click backups button'
        name: onClickBackups
        longname: 'HashBrown.Client.Views.Dashboard.ProjectEditor#onClickBackups'
        kind: function
        memberof: HashBrown.Client.Views.Dashboard.ProjectEditor
        scope: instance
        params: []
    -
        comment: "/**\n     * Event: Click migration button\n     */"
        meta:
            range:
                - 4400
                - 4837
            filename: ProjectEditor.js
            lineno: 142
            columnno: 4
            path: /home/mrzapp/Development/Web/hashbrown-cms/src/Client/Views/Dashboard
            code:
                id: astnode100009038
                name: 'ProjectEditor#onClickMigrate'
                type: MethodDefinition
                paramnames: []
            vars:
                "": null
        description: 'Event: Click migration button'
        name: onClickMigrate
        longname: 'HashBrown.Client.Views.Dashboard.ProjectEditor#onClickMigrate'
        kind: function
        memberof: HashBrown.Client.Views.Dashboard.ProjectEditor
        scope: instance
        params: []
    -
        comment: "/**\n     * Event: Click add environment button\n     */"
        meta:
            range:
                - 4902
                - 6128
            filename: ProjectEditor.js
            lineno: 161
            columnno: 4
            path: /home/mrzapp/Development/Web/hashbrown-cms/src/Client/Views/Dashboard
            code:
                id: astnode100009097
                name: 'ProjectEditor#onClickAddEnvironment'
                type: MethodDefinition
                paramnames: []
            vars:
                "": null
        description: 'Event: Click add environment button'
        name: onClickAddEnvironment
        longname: 'HashBrown.Client.Views.Dashboard.ProjectEditor#onClickAddEnvironment'
        kind: function
        memberof: HashBrown.Client.Views.Dashboard.ProjectEditor
        scope: instance
        params: []
    -
        comment: "/**\n     * Pre render\n     */"
        meta:
            range:
                - 6168
                - 6335
            filename: ProjectEditor.js
            lineno: 200
            columnno: 4
            path: /home/mrzapp/Development/Web/hashbrown-cms/src/Client/Views/Dashboard
            code:
                id: astnode100009233
                name: 'ProjectEditor#prerender'
                type: MethodDefinition
                paramnames: []
            vars:
                "": null
        description: 'Pre render'
        name: prerender
        longname: 'HashBrown.Client.Views.Dashboard.ProjectEditor#prerender'
        kind: function
        memberof: HashBrown.Client.Views.Dashboard.ProjectEditor
        scope: instance
        params: []
    -
        comment: "/**\n     * Renders this editor\n     */"
        meta:
            range:
                - 6384
                - 9185
            filename: ProjectEditor.js
            lineno: 209
            columnno: 4
            path: /home/mrzapp/Development/Web/hashbrown-cms/src/Client/Views/Dashboard
            code:
                id: astnode100009264
                name: 'ProjectEditor#template'
                type: MethodDefinition
                paramnames: []
            vars:
                "": null
        description: 'Renders this editor'
        name: template
        longname: 'HashBrown.Client.Views.Dashboard.ProjectEditor#template'
        kind: function
        memberof: HashBrown.Client.Views.Dashboard.ProjectEditor
        scope: instance
        params: []
shortname: ProjectEditor
layout: docPage
permalink: /docs/hashbrown/client/views/dashboard/projecteditor/
title: 'API: ProjectEditor'
description: 'The editor for projects as seen on the dashboard'

---