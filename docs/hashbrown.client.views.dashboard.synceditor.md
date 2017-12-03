---
comment: "/**\n * The sync settings editor\n *\n * @memberof HashBrown.Client.Views.Dashboard\n */"
meta:
    range:
        - 292
        - 6770
    filename: SyncEditor.js
    lineno: 12
    columnno: 0
    path: /home/mrzapp/Development/Web/hashbrown-cms/src/Client/Views/Dashboard
    code:
        id: astnode100009593
        name: SyncEditor
        type: ClassDeclaration
        paramnames:
            - params
classdesc: 'The sync settings editor'
memberof: HashBrown.Client.Views.Dashboard
name: SyncEditor
longname: HashBrown.Client.Views.Dashboard.SyncEditor
kind: class
scope: static
params: []
methods:
    -
        comment: "/**\n     * Event: Click save. Posts the model to the modelUrl and closes\n     */"
        meta:
            range:
                - 1241
                - 1549
            filename: SyncEditor.js
            lineno: 51
            columnno: 4
            path: /home/mrzapp/Development/Web/hashbrown-cms/src/Client/Views/Dashboard
            code:
                id: astnode100009689
                name: 'SyncEditor#onClickSave'
                type: MethodDefinition
                paramnames: []
            vars:
                "": null
        description: 'Event: Click save. Posts the model to the modelUrl and closes'
        name: onClickSave
        longname: 'HashBrown.Client.Views.Dashboard.SyncEditor#onClickSave'
        kind: function
        memberof: HashBrown.Client.Views.Dashboard.SyncEditor
        scope: instance
        params: []
    -
        comment: "/**\n     * Event: Click apply. Posts the model to the modelUrl\n     */"
        meta:
            range:
                - 1634
                - 1916
            filename: SyncEditor.js
            lineno: 66
            columnno: 4
            path: /home/mrzapp/Development/Web/hashbrown-cms/src/Client/Views/Dashboard
            code:
                id: astnode100009748
                name: 'SyncEditor#onClickApply'
                type: MethodDefinition
                paramnames: []
            vars:
                "": null
        description: 'Event: Click apply. Posts the model to the modelUrl'
        name: onClickApply
        longname: 'HashBrown.Client.Views.Dashboard.SyncEditor#onClickApply'
        kind: function
        memberof: HashBrown.Client.Views.Dashboard.SyncEditor
        scope: instance
        params: []
    -
        comment: "/**\n     * Render enabled switch\n     */"
        meta:
            range:
                - 1971
                - 2278
            filename: SyncEditor.js
            lineno: 79
            columnno: 4
            path: /home/mrzapp/Development/Web/hashbrown-cms/src/Client/Views/Dashboard
            code:
                id: astnode100009802
                name: 'SyncEditor#renderEnabledSwitch'
                type: MethodDefinition
                paramnames: []
            vars:
                "": null
        description: 'Render enabled switch'
        name: renderEnabledSwitch
        longname: 'HashBrown.Client.Views.Dashboard.SyncEditor#renderEnabledSwitch'
        kind: function
        memberof: HashBrown.Client.Views.Dashboard.SyncEditor
        scope: instance
        params: []
    -
        comment: "/**\n     * Renders the URL editor\n     *\n     * @returns {HTMLElement} Element\n     */"
        meta:
            range:
                - 2375
                - 2624
            filename: SyncEditor.js
            lineno: 95
            columnno: 4
            path: /home/mrzapp/Development/Web/hashbrown-cms/src/Client/Views/Dashboard
            code:
                id: astnode100009842
                name: 'SyncEditor#renderUrlEditor'
                type: MethodDefinition
                paramnames: []
            vars:
                "": null
        description: 'Renders the URL editor'
        returns:
            -
                type:
                    names:
                        - HTMLElement
                description: Element
        name: renderUrlEditor
        longname: 'HashBrown.Client.Views.Dashboard.SyncEditor#renderUrlEditor'
        kind: function
        memberof: HashBrown.Client.Views.Dashboard.SyncEditor
        scope: instance
        params: []
    -
        comment: "/**\n     * Renders the project name editor\n     *\n     * @returns {HTMLElement} Element\n     */"
        meta:
            range:
                - 2734
                - 3175
            filename: SyncEditor.js
            lineno: 109
            columnno: 4
            path: /home/mrzapp/Development/Web/hashbrown-cms/src/Client/Views/Dashboard
            code:
                id: astnode100009872
                name: 'SyncEditor#renderProjectNameEditor'
                type: MethodDefinition
                paramnames: []
            vars:
                "": null
        description: 'Renders the project name editor'
        returns:
            -
                type:
                    names:
                        - HTMLElement
                description: Element
        name: renderProjectNameEditor
        longname: 'HashBrown.Client.Views.Dashboard.SyncEditor#renderProjectNameEditor'
        kind: function
        memberof: HashBrown.Client.Views.Dashboard.SyncEditor
        scope: instance
        params: []
    -
        comment: "/**\n     * Renders the token editor\n     *\n     * @returns {HTMLElement} Element\n     */"
        meta:
            range:
                - 3278
                - 5966
            filename: SyncEditor.js
            lineno: 129
            columnno: 4
            path: /home/mrzapp/Development/Web/hashbrown-cms/src/Client/Views/Dashboard
            code:
                id: astnode100009936
                name: 'SyncEditor#renderTokenEditor'
                type: MethodDefinition
                paramnames: []
            vars:
                "": null
        description: 'Renders the token editor'
        returns:
            -
                type:
                    names:
                        - HTMLElement
                description: Element
        name: renderTokenEditor
        longname: 'HashBrown.Client.Views.Dashboard.SyncEditor#renderTokenEditor'
        kind: function
        memberof: HashBrown.Client.Views.Dashboard.SyncEditor
        scope: instance
        params: []
    -
        comment: "/**\n     * Renders a single field\n     *\n     * @param {String} label\n     * @param {HTMLElement} $content\n     *\n     * @return {HTMLElement} Editor element\n     */"
        meta:
            range:
                - 6146
                - 6348
            filename: SyncEditor.js
            lineno: 192
            columnno: 4
            path: /home/mrzapp/Development/Web/hashbrown-cms/src/Client/Views/Dashboard
            code:
                id: astnode100010145
                name: 'SyncEditor#renderField'
                type: MethodDefinition
                paramnames:
                    - label
                    - $content
            vars:
                "": null
        description: 'Renders a single field'
        params:
            -
                type:
                    names:
                        - String
                name: label
            -
                type:
                    names:
                        - HTMLElement
                name: $content
        returns:
            -
                type:
                    names:
                        - HTMLElement
                description: 'Editor element'
        name: renderField
        longname: 'HashBrown.Client.Views.Dashboard.SyncEditor#renderField'
        kind: function
        memberof: HashBrown.Client.Views.Dashboard.SyncEditor
        scope: instance
    -
        comment: "/**\n     * Renders the modal body\n     *\n     * @returns {HTMLElement} Body\n     */"
        meta:
            range:
                - 6442
                - 6768
            filename: SyncEditor.js
            lineno: 206
            columnno: 4
            path: /home/mrzapp/Development/Web/hashbrown-cms/src/Client/Views/Dashboard
            code:
                id: astnode100010168
                name: 'SyncEditor#renderBody'
                type: MethodDefinition
                paramnames: []
            vars:
                "": null
        description: 'Renders the modal body'
        returns:
            -
                type:
                    names:
                        - HTMLElement
                description: Body
        name: renderBody
        longname: 'HashBrown.Client.Views.Dashboard.SyncEditor#renderBody'
        kind: function
        memberof: HashBrown.Client.Views.Dashboard.SyncEditor
        scope: instance
        params: []
shortname: SyncEditor
layout: docPage
permalink: /docs/hashbrown/client/views/dashboard/synceditor/
title: 'API: SyncEditor'
description: 'The sync settings editor'

---