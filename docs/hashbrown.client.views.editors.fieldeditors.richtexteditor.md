---
comment: "/**\n * A rich text editor\n *\n * @description Example:\n * <pre>\n * {\n *     \"myRichText\": {\n *         \"label\": \"My rich text\",\n *         \"tabId\": \"content\",\n *         \"schemaId\": \"richText\"\n *     }\n * }\n * </pre>\n *\n * @memberof HashBrown.Client.Views.Editors.FieldEditors\n */"
meta:
    range:
        - 465
        - 11634
    filename: RichTextEditor.js
    lineno: 24
    columnno: 0
    path: /home/mrzapp/Development/Web/hashbrown-cms/src/Client/Views/Editors/FieldEditors
    code:
        id: astnode100018108
        name: RichTextEditor
        type: ClassDeclaration
        paramnames:
            - params
classdesc: 'A rich text editor'
description: 'A rich text editor'
memberof: HashBrown.Client.Views.Editors.FieldEditors
name: RichTextEditor
longname: HashBrown.Client.Views.Editors.FieldEditors.RichTextEditor
kind: class
scope: static
params: []
methods:
    -
        comment: "/**\n     * Event: Change input\n     *\n     * @param {String} value\n     */"
        meta:
            range:
                - 1010
                - 1312
            filename: RichTextEditor.js
            lineno: 48
            columnno: 4
            path: /home/mrzapp/Development/Web/hashbrown-cms/src/Client/Views/Editors/FieldEditors
            code:
                id: astnode100018157
                name: 'RichTextEditor#onChange'
                type: MethodDefinition
                paramnames:
                    - value
            vars:
                "": null
        description: 'Event: Change input'
        params:
            -
                type:
                    names:
                        - String
                name: value
        name: onChange
        longname: 'HashBrown.Client.Views.Editors.FieldEditors.RichTextEditor#onChange'
        kind: function
        memberof: HashBrown.Client.Views.Editors.FieldEditors.RichTextEditor
        scope: instance
    -
        comment: "/**\n     * Event: On click tab\n     *\n     * @param {String} source\n     */"
        meta:
            range:
                - 1398
                - 1516
            filename: RichTextEditor.js
            lineno: 69
            columnno: 4
            path: /home/mrzapp/Development/Web/hashbrown-cms/src/Client/Views/Editors/FieldEditors
            code:
                id: astnode100018206
                name: 'RichTextEditor#onClickTab'
                type: MethodDefinition
                paramnames:
                    - source
            vars:
                "": null
        description: 'Event: On click tab'
        params:
            -
                type:
                    names:
                        - String
                name: source
        name: onClickTab
        longname: 'HashBrown.Client.Views.Editors.FieldEditors.RichTextEditor#onClickTab'
        kind: function
        memberof: HashBrown.Client.Views.Editors.FieldEditors.RichTextEditor
        scope: instance
    -
        comment: "/**\n     * Event: Click insert media\n     */"
        meta:
            range:
                - 1571
                - 2759
            filename: RichTextEditor.js
            lineno: 80
            columnno: 4
            path: /home/mrzapp/Development/Web/hashbrown-cms/src/Client/Views/Editors/FieldEditors
            code:
                id: astnode100018228
                name: 'RichTextEditor#onClickInsertMedia'
                type: MethodDefinition
                paramnames: []
            vars:
                "": null
        description: 'Event: Click insert media'
        name: onClickInsertMedia
        longname: 'HashBrown.Client.Views.Editors.FieldEditors.RichTextEditor#onClickInsertMedia'
        kind: function
        memberof: HashBrown.Client.Views.Editors.FieldEditors.RichTextEditor
        scope: instance
        params: []
    -
        comment: "/**\n     * Gets the tab content\n     *\n     * @returns {HTMLElement} Tab content\n     */"
        meta:
            range:
                - 2862
                - 2978
            filename: RichTextEditor.js
            lineno: 119
            columnno: 4
            path: /home/mrzapp/Development/Web/hashbrown-cms/src/Client/Views/Editors/FieldEditors
            code:
                id: astnode100018373
                name: 'RichTextEditor#getTabContent'
                type: MethodDefinition
                paramnames: []
            vars:
                "": null
        description: 'Gets the tab content'
        returns:
            -
                type:
                    names:
                        - HTMLElement
                description: 'Tab content'
        name: getTabContent
        longname: 'HashBrown.Client.Views.Editors.FieldEditors.RichTextEditor#getTabContent'
        kind: function
        memberof: HashBrown.Client.Views.Editors.FieldEditors.RichTextEditor
        scope: instance
        params: []
    -
        comment: "/**\n     * Initialises the HTML editor\n     */"
        meta:
            range:
                - 3035
                - 3824
            filename: RichTextEditor.js
            lineno: 126
            columnno: 4
            path: /home/mrzapp/Development/Web/hashbrown-cms/src/Client/Views/Editors/FieldEditors
            code:
                id: astnode100018385
                name: 'RichTextEditor#initHtmlEditor'
                type: MethodDefinition
                paramnames: []
            vars:
                "": null
        description: 'Initialises the HTML editor'
        name: initHtmlEditor
        longname: 'HashBrown.Client.Views.Editors.FieldEditors.RichTextEditor#initHtmlEditor'
        kind: function
        memberof: HashBrown.Client.Views.Editors.FieldEditors.RichTextEditor
        scope: instance
        params: []
    -
        comment: "/**\n     * Initialises the markdown editor\n     */"
        meta:
            range:
                - 3889
                - 4735
            filename: RichTextEditor.js
            lineno: 156
            columnno: 4
            path: /home/mrzapp/Development/Web/hashbrown-cms/src/Client/Views/Editors/FieldEditors
            code:
                id: astnode100018472
                name: 'RichTextEditor#initMarkdownEditor'
                type: MethodDefinition
                paramnames: []
            vars:
                "": null
        description: 'Initialises the markdown editor'
        name: initMarkdownEditor
        longname: 'HashBrown.Client.Views.Editors.FieldEditors.RichTextEditor#initMarkdownEditor'
        kind: function
        memberof: HashBrown.Client.Views.Editors.FieldEditors.RichTextEditor
        scope: instance
        params: []
    -
        comment: "/**\n     * Initialises the WYSIWYG editor\n     */"
        meta:
            range:
                - 4795
                - 9308
            filename: RichTextEditor.js
            lineno: 186
            columnno: 4
            path: /home/mrzapp/Development/Web/hashbrown-cms/src/Client/Views/Editors/FieldEditors
            code:
                id: astnode100018565
                name: 'RichTextEditor#initWYSIWYGEditor'
                type: MethodDefinition
                paramnames: []
            vars:
                "": null
        description: 'Initialises the WYSIWYG editor'
        name: initWYSIWYGEditor
        longname: 'HashBrown.Client.Views.Editors.FieldEditors.RichTextEditor#initWYSIWYGEditor'
        kind: function
        memberof: HashBrown.Client.Views.Editors.FieldEditors.RichTextEditor
        scope: instance
        params: []
    -
        comment: "/**\n     * Prerender\n     */"
        meta:
            range:
                - 9347
                - 9451
            filename: RichTextEditor.js
            lineno: 290
            columnno: 4
            path: /home/mrzapp/Development/Web/hashbrown-cms/src/Client/Views/Editors/FieldEditors
            code:
                id: astnode100018896
                name: 'RichTextEditor#prerender'
                type: MethodDefinition
                paramnames: []
            vars:
                "": null
        description: Prerender
        name: prerender
        longname: 'HashBrown.Client.Views.Editors.FieldEditors.RichTextEditor#prerender'
        kind: function
        memberof: HashBrown.Client.Views.Editors.FieldEditors.RichTextEditor
        scope: instance
        params: []
    -
        comment: "/** \n     * Renders this editor\n     */"
        meta:
            range:
                - 9501
                - 11187
            filename: RichTextEditor.js
            lineno: 299
            columnno: 4
            path: /home/mrzapp/Development/Web/hashbrown-cms/src/Client/Views/Editors/FieldEditors
            code:
                id: astnode100018918
                name: 'RichTextEditor#template'
                type: MethodDefinition
                paramnames: []
            vars:
                "": null
        description: 'Renders this editor'
        name: template
        longname: 'HashBrown.Client.Views.Editors.FieldEditors.RichTextEditor#template'
        kind: function
        memberof: HashBrown.Client.Views.Editors.FieldEditors.RichTextEditor
        scope: instance
        params: []
    -
        comment: "/**\n     * Post render\n     */"
        meta:
            range:
                - 11233
                - 11632
            filename: RichTextEditor.js
            lineno: 335
            columnno: 4
            path: /home/mrzapp/Development/Web/hashbrown-cms/src/Client/Views/Editors/FieldEditors
            code:
                id: astnode100019083
                name: 'RichTextEditor#postrender'
                type: MethodDefinition
                paramnames: []
            vars:
                "": null
        description: 'Post render'
        name: postrender
        longname: 'HashBrown.Client.Views.Editors.FieldEditors.RichTextEditor#postrender'
        kind: function
        memberof: HashBrown.Client.Views.Editors.FieldEditors.RichTextEditor
        scope: instance
        params: []
shortname: RichTextEditor
layout: docPage
permalink: /docs/hashbrown/client/views/editors/fieldeditors/richtexteditor/
title: 'API: RichTextEditor'

---