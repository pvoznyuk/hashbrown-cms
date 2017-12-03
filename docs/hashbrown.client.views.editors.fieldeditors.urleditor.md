---
comment: "/**\n * An editor for content URLs\n *\n * @description Example:\n * <pre>\n * {\n *     \"myUrl\": {\n *         \"label\": \"My URL\",\n *         \"tabId\": \"content\",\n *         \"schemaId\": \"url\"\n *     }\n * }\n * </pre>\n *\n * @memberof HashBrown.Client.Views.Editors.FieldEditors\n */"
meta:
    range:
        - 334
        - 5589
    filename: UrlEditor.js
    lineno: 21
    columnno: 0
    path: /home/mrzapp/Development/Web/hashbrown-cms/src/Client/Views/Editors/FieldEditors
    code:
        id: astnode100020848
        name: UrlEditor
        type: ClassDeclaration
        paramnames:
            - params
classdesc: 'An editor for content URLs'
description: 'An editor for content URLs'
memberof: HashBrown.Client.Views.Editors.FieldEditors
name: UrlEditor
longname: HashBrown.Client.Views.Editors.FieldEditors.UrlEditor
kind: class
scope: static
params: []
methods:
    -
        comment: "/**\n     * Get all parent content nodes\n     *\n     * @param {String} contentId\n     *\n     * @return {Array} nodes\n     */"
        meta:
            range:
                - 583
                - 1243
            filename: UrlEditor.js
            lineno: 35
            columnno: 4
            path: /home/mrzapp/Development/Web/hashbrown-cms/src/Client/Views/Editors/FieldEditors
            code:
                id: astnode100020866
                name: UrlEditor.getAllParents
                type: MethodDefinition
                paramnames:
                    - contentId
            vars:
                "": null
        description: 'Get all parent content nodes'
        params:
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
                description: nodes
        name: getAllParents
        longname: HashBrown.Client.Views.Editors.FieldEditors.UrlEditor.getAllParents
        kind: function
        memberof: HashBrown.Client.Views.Editors.FieldEditors.UrlEditor
        scope: static
    -
        comment: "/**\n     * Generates a new url based on content id\n     *\n     * @param {String} contentId\n     *\n     * @return {String} url\n     */"
        meta:
            range:
                - 1387
                - 3531
            filename: UrlEditor.js
            lineno: 72
            columnno: 4
            path: /home/mrzapp/Development/Web/hashbrown-cms/src/Client/Views/Editors/FieldEditors
            code:
                id: astnode100020957
                name: 'UrlEditor#generateUrl'
                type: MethodDefinition
                paramnames:
                    - contentId
            vars:
                "": null
        description: 'Generates a new url based on content id'
        params:
            -
                type:
                    names:
                        - String
                name: contentId
        returns:
            -
                type:
                    names:
                        - String
                description: url
        name: generateUrl
        longname: 'HashBrown.Client.Views.Editors.FieldEditors.UrlEditor#generateUrl'
        kind: function
        memberof: HashBrown.Client.Views.Editors.FieldEditors.UrlEditor
        scope: instance
    -
        comment: "/**\n     * Regenerates the URL\n     */"
        meta:
            range:
                - 3580
                - 3755
            filename: UrlEditor.js
            lineno: 136
            columnno: 4
            path: /home/mrzapp/Development/Web/hashbrown-cms/src/Client/Views/Editors/FieldEditors
            code:
                id: astnode100021187
                name: 'UrlEditor#regenerate'
                type: MethodDefinition
                paramnames: []
            vars:
                "": null
        description: 'Regenerates the URL'
        name: regenerate
        longname: 'HashBrown.Client.Views.Editors.FieldEditors.UrlEditor#regenerate'
        kind: function
        memberof: HashBrown.Client.Views.Editors.FieldEditors.UrlEditor
        scope: instance
        params: []
    -
        comment: "/**\n     * Fetch the URL from the Content title\n     */"
        meta:
            range:
                - 3822
                - 3919
            filename: UrlEditor.js
            lineno: 147
            columnno: 4
            path: /home/mrzapp/Development/Web/hashbrown-cms/src/Client/Views/Editors/FieldEditors
            code:
                id: astnode100021225
                name: 'UrlEditor#fetchFromTitle'
                type: MethodDefinition
                paramnames: []
            vars:
                "": null
        description: 'Fetch the URL from the Content title'
        name: fetchFromTitle
        longname: 'HashBrown.Client.Views.Editors.FieldEditors.UrlEditor#fetchFromTitle'
        kind: function
        memberof: HashBrown.Client.Views.Editors.FieldEditors.UrlEditor
        scope: instance
        params: []
    -
        comment: "/**\n     * Event: Change value\n     */"
        meta:
            range:
                - 3968
                - 4518
            filename: UrlEditor.js
            lineno: 156
            columnno: 4
            path: /home/mrzapp/Development/Web/hashbrown-cms/src/Client/Views/Editors/FieldEditors
            code:
                id: astnode100021245
                name: 'UrlEditor#onChange'
                type: MethodDefinition
                paramnames: []
            vars:
                "": null
        description: 'Event: Change value'
        name: onChange
        longname: 'HashBrown.Client.Views.Editors.FieldEditors.UrlEditor#onChange'
        kind: function
        memberof: HashBrown.Client.Views.Editors.FieldEditors.UrlEditor
        scope: instance
        params: []
    -
        comment: "/**\n     * Renders this editor\n     */"
        meta:
            range:
                - 4568
                - 5072
            filename: UrlEditor.js
            lineno: 179
            columnno: 4
            path: /home/mrzapp/Development/Web/hashbrown-cms/src/Client/Views/Editors/FieldEditors
            code:
                id: astnode100021356
                name: 'UrlEditor#template'
                type: MethodDefinition
                paramnames: []
            vars:
                "": null
        description: 'Renders this editor'
        name: template
        longname: 'HashBrown.Client.Views.Editors.FieldEditors.UrlEditor#template'
        kind: function
        memberof: HashBrown.Client.Views.Editors.FieldEditors.UrlEditor
        scope: instance
        params: []
    -
        comment: "/**\n     * Post render\n     */"
        meta:
            range:
                - 5113
                - 5587
            filename: UrlEditor.js
            lineno: 193
            columnno: 4
            path: /home/mrzapp/Development/Web/hashbrown-cms/src/Client/Views/Editors/FieldEditors
            code:
                id: astnode100021428
                name: 'UrlEditor#postrender'
                type: MethodDefinition
                paramnames: []
            vars:
                "": null
        description: 'Post render'
        name: postrender
        longname: 'HashBrown.Client.Views.Editors.FieldEditors.UrlEditor#postrender'
        kind: function
        memberof: HashBrown.Client.Views.Editors.FieldEditors.UrlEditor
        scope: instance
        params: []
shortname: UrlEditor
layout: docPage
permalink: /docs/hashbrown/client/views/editors/fieldeditors/urleditor/
title: 'API: UrlEditor'

---