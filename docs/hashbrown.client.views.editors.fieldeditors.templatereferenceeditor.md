---
comment: "/**\n * An editor for referencing templates\n *\n * @description Example:\n * <pre>\n * {\n *     \"myTemplateReference\": {\n *         \"label\": \"My template reference\",\n *         \"tabId\": \"content\",\n *         \"schemaId\": \"templateReference\",\n *         {\n *             \"type\": \"page\" || \"partial\",\n *             \"allowedTemplates\": [ \"myPageTemplate\", \"myOtherPageTemplate\" ]\n *         }\n *     }\n * }\n * </pre>\n *\n * @memberof HashBrown.Client.Views.Editors.FieldEditors\n */"
meta:
    range:
        - 536
        - 5506
    filename: TemplateReferenceEditor.js
    lineno: 25
    columnno: 0
    path: /home/mrzapp/Development/Web/hashbrown-cms/src/Client/Views/Editors/FieldEditors
    code:
        id: astnode100020352
        name: TemplateReferenceEditor
        type: ClassDeclaration
        paramnames:
            - params
classdesc: 'An editor for referencing templates'
description: 'An editor for referencing templates'
memberof: HashBrown.Client.Views.Editors.FieldEditors
name: TemplateReferenceEditor
longname: HashBrown.Client.Views.Editors.FieldEditors.TemplateReferenceEditor
kind: class
scope: static
params: []
methods:
    -
        comment: "/**\n     * Renders the config editor\n     *\n     * @param {Object} config\n     *\n     * @returns {HTMLElement} Element\n     */"
        meta:
            range:
                - 840
                - 2630
            filename: TemplateReferenceEditor.js
            lineno: 42
            columnno: 4
            path: /home/mrzapp/Development/Web/hashbrown-cms/src/Client/Views/Editors/FieldEditors
            code:
                id: astnode100020370
                name: TemplateReferenceEditor.renderConfigEditor
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
        longname: HashBrown.Client.Views.Editors.FieldEditors.TemplateReferenceEditor.renderConfigEditor
        kind: function
        memberof: HashBrown.Client.Views.Editors.FieldEditors.TemplateReferenceEditor
        scope: static
    -
        comment: "/**\n     * Sanity check\n     */"
        meta:
            range:
                - 2672
                - 3630
            filename: TemplateReferenceEditor.js
            lineno: 92
            columnno: 4
            path: /home/mrzapp/Development/Web/hashbrown-cms/src/Client/Views/Editors/FieldEditors
            code:
                id: astnode100020542
                name: 'TemplateReferenceEditor#sanityCheck'
                type: MethodDefinition
                paramnames: []
            vars:
                "": null
        description: 'Sanity check'
        name: sanityCheck
        longname: 'HashBrown.Client.Views.Editors.FieldEditors.TemplateReferenceEditor#sanityCheck'
        kind: function
        memberof: HashBrown.Client.Views.Editors.FieldEditors.TemplateReferenceEditor
        scope: instance
        params: []
    -
        comment: "/**\n     * Generates dropdown options\n     *\n     * @returns {Array} Options\n     */"
        meta:
            range:
                - 3725
                - 4134
            filename: TemplateReferenceEditor.js
            lineno: 123
            columnno: 4
            path: /home/mrzapp/Development/Web/hashbrown-cms/src/Client/Views/Editors/FieldEditors
            code:
                id: astnode100020648
                name: 'TemplateReferenceEditor#getOptions'
                type: MethodDefinition
                paramnames: []
            vars:
                "": null
        description: 'Generates dropdown options'
        returns:
            -
                type:
                    names:
                        - Array
                description: Options
        name: getOptions
        longname: 'HashBrown.Client.Views.Editors.FieldEditors.TemplateReferenceEditor#getOptions'
        kind: function
        memberof: HashBrown.Client.Views.Editors.FieldEditors.TemplateReferenceEditor
        scope: instance
        params: []
    -
        comment: "/**\n     * Pre render\n     */"
        meta:
            range:
                - 4174
                - 4221
            filename: TemplateReferenceEditor.js
            lineno: 142
            columnno: 4
            path: /home/mrzapp/Development/Web/hashbrown-cms/src/Client/Views/Editors/FieldEditors
            code:
                id: astnode100020706
                name: 'TemplateReferenceEditor#prerender'
                type: MethodDefinition
                paramnames: []
            vars:
                "": null
        description: 'Pre render'
        name: prerender
        longname: 'HashBrown.Client.Views.Editors.FieldEditors.TemplateReferenceEditor#prerender'
        kind: function
        memberof: HashBrown.Client.Views.Editors.FieldEditors.TemplateReferenceEditor
        scope: instance
        params: []
    -
        comment: "/**\n     * Renders this editor\n     */"
        meta:
            range:
                - 4270
                - 5504
            filename: TemplateReferenceEditor.js
            lineno: 149
            columnno: 4
            path: /home/mrzapp/Development/Web/hashbrown-cms/src/Client/Views/Editors/FieldEditors
            code:
                id: astnode100020715
                name: 'TemplateReferenceEditor#template'
                type: MethodDefinition
                paramnames: []
            vars:
                "": null
        description: 'Renders this editor'
        name: template
        longname: 'HashBrown.Client.Views.Editors.FieldEditors.TemplateReferenceEditor#template'
        kind: function
        memberof: HashBrown.Client.Views.Editors.FieldEditors.TemplateReferenceEditor
        scope: instance
        params: []
shortname: TemplateReferenceEditor
layout: docPage
permalink: /docs/hashbrown/client/views/editors/fieldeditors/templatereferenceeditor/
title: 'API: TemplateReferenceEditor'

---