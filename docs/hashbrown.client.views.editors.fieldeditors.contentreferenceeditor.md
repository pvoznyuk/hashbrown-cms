---
comment: "/**\n * An editor for referring to other Content\n *\n * @description Example:\n * <pre>\n * {\n *     \"myContentReference\": {\n *         \"label\": \"My content reference\",\n *         \"tabId\": \"content\",\n *         \"schemaId\": \"contentReference\",\n *         \"config\": {\n *            \"allowedSchemas\": [ \"page\", \"myCustomSchema\" ]\n *         }\n *     }\n * }\n * </pre>\n *\n * @memberof HashBrown.Client.Views.Editors.FieldEditors\n */"
meta:
    range:
        - 537
        - 3197
    filename: ContentReferenceEditor.js
    lineno: 26
    columnno: 0
    path: /home/mrzapp/Development/Web/hashbrown-cms/src/Client/Views/Editors/FieldEditors
    code:
        id: astnode100015625
        name: ContentReferenceEditor
        type: ClassDeclaration
        paramnames:
            - params
classdesc: 'An editor for referring to other Content'
description: 'An editor for referring to other Content'
memberof: HashBrown.Client.Views.Editors.FieldEditors
name: ContentReferenceEditor
longname: HashBrown.Client.Views.Editors.FieldEditors.ContentReferenceEditor
kind: class
scope: static
params: []
methods:
    -
        comment: "/**\n     * Event: Change value\n     */"
        meta:
            range:
                - 714
                - 816
            filename: ContentReferenceEditor.js
            lineno: 36
            columnno: 4
            path: /home/mrzapp/Development/Web/hashbrown-cms/src/Client/Views/Editors/FieldEditors
            code:
                id: astnode100015643
                name: 'ContentReferenceEditor#onChange'
                type: MethodDefinition
                paramnames:
                    - newValue
            vars:
                "": null
        description: 'Event: Change value'
        name: onChange
        longname: 'HashBrown.Client.Views.Editors.FieldEditors.ContentReferenceEditor#onChange'
        kind: function
        memberof: HashBrown.Client.Views.Editors.FieldEditors.ContentReferenceEditor
        scope: instance
        params: []
    -
        comment: "/**\n     * Gets a list of allowed Content options\n     *\n     * @returns {Array} List of options\n     */"
        meta:
            range:
                - 931
                - 1605
            filename: ContentReferenceEditor.js
            lineno: 47
            columnno: 4
            path: /home/mrzapp/Development/Web/hashbrown-cms/src/Client/Views/Editors/FieldEditors
            code:
                id: astnode100015663
                name: 'ContentReferenceEditor#getDropdownOptions'
                type: MethodDefinition
                paramnames: []
            vars:
                "": null
        description: 'Gets a list of allowed Content options'
        returns:
            -
                type:
                    names:
                        - Array
                description: 'List of options'
        name: getDropdownOptions
        longname: 'HashBrown.Client.Views.Editors.FieldEditors.ContentReferenceEditor#getDropdownOptions'
        kind: function
        memberof: HashBrown.Client.Views.Editors.FieldEditors.ContentReferenceEditor
        scope: instance
        params: []
    -
        comment: "/**\n     * Renders the config editor\n     *\n     * @param {Object} config\n     *\n     * @returns {HTMLElement} Element\n     */"
        meta:
            range:
                - 1742
                - 2549
            filename: ContentReferenceEditor.js
            lineno: 74
            columnno: 4
            path: /home/mrzapp/Development/Web/hashbrown-cms/src/Client/Views/Editors/FieldEditors
            code:
                id: astnode100015757
                name: ContentReferenceEditor.renderConfigEditor
                type: MethodDefinition
                paramnames:
                    - config
            vars:
                "": null
        description: 'Renders the config editor'
        params:
            -
                type:
                    names:
                        - Object
                name: config
        returns:
            -
                type:
                    names:
                        - HTMLElement
                description: Element
        name: renderConfigEditor
        longname: HashBrown.Client.Views.Editors.FieldEditors.ContentReferenceEditor.renderConfigEditor
        kind: function
        memberof: HashBrown.Client.Views.Editors.FieldEditors.ContentReferenceEditor
        scope: static
    -
        comment: "/**\n     * Render this editor\n     */"
        meta:
            range:
                - 2597
                - 3195
            filename: ContentReferenceEditor.js
            lineno: 98
            columnno: 4
            path: /home/mrzapp/Development/Web/hashbrown-cms/src/Client/Views/Editors/FieldEditors
            code:
                id: astnode100015838
                name: 'ContentReferenceEditor#template'
                type: MethodDefinition
                paramnames: []
            vars:
                "": null
        description: 'Render this editor'
        name: template
        longname: 'HashBrown.Client.Views.Editors.FieldEditors.ContentReferenceEditor#template'
        kind: function
        memberof: HashBrown.Client.Views.Editors.FieldEditors.ContentReferenceEditor
        scope: instance
        params: []
shortname: ContentReferenceEditor
layout: docPage
permalink: /docs/hashbrown/client/views/editors/fieldeditors/contentreferenceeditor/
title: 'API: ContentReferenceEditor'

---