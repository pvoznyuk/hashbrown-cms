---
comment: "/**\n * An editor for referencing Content Schemas\n *\n * @descripton Example:\n * <pre>\n * {\n *     \"myContentSchemaReference\": {\n *         \"label\": \"My content schema reference\",\n *         \"tabId\": \"content\",\n *         \"schemaId\": \"contentSchemaReference\",\n *         \"config\": {\n *             \"allowedSchemas\": \"fromParent\" || [ \"myCustomSchema\" ]\n *         }\n *     }\n * }\n * </pre>\n *\n * @memberof HashBrown.Client.Views.Editors.FieldEditors\n */"
meta:
    range:
        - 639
        - 5061
    filename: ContentSchemaReferenceEditor.js
    lineno: 27
    columnno: 0
    path: /home/mrzapp/Development/Web/hashbrown-cms/src/Client/Views/Editors/FieldEditors
    code:
        id: astnode100015932
        name: ContentSchemaReferenceEditor
        type: ClassDeclaration
        paramnames:
            - params
classdesc: 'An editor for referencing Content Schemas'
tags:
    -
        originalTitle: descripton
        title: descripton
        text: "Example:\n<pre>\n{\n    \"myContentSchemaReference\": {\n        \"label\": \"My content schema reference\",\n        \"tabId\": \"content\",\n        \"schemaId\": \"contentSchemaReference\",\n        \"config\": {\n            \"allowedSchemas\": \"fromParent\" || [ \"myCustomSchema\" ]\n        }\n    }\n}\n</pre>"
        value: "Example:\n<pre>\n{\n    \"myContentSchemaReference\": {\n        \"label\": \"My content schema reference\",\n        \"tabId\": \"content\",\n        \"schemaId\": \"contentSchemaReference\",\n        \"config\": {\n            \"allowedSchemas\": \"fromParent\" || [ \"myCustomSchema\" ]\n        }\n    }\n}\n</pre>"
memberof: HashBrown.Client.Views.Editors.FieldEditors
name: ContentSchemaReferenceEditor
longname: HashBrown.Client.Views.Editors.FieldEditors.ContentSchemaReferenceEditor
kind: class
scope: static
params: []
methods:
    -
        comment: "/**\n     * Gets the parent Schema\n     *\n     * @returns {Schema} Parentn Schema\n     */"
        meta:
            range:
                - 1192
                - 2315
            filename: ContentSchemaReferenceEditor.js
            lineno: 46
            columnno: 4
            path: /home/mrzapp/Development/Web/hashbrown-cms/src/Client/Views/Editors/FieldEditors
            code:
                id: astnode100015982
                name: 'ContentSchemaReferenceEditor#getParentSchema'
                type: MethodDefinition
                paramnames: []
            vars:
                "": null
        description: 'Gets the parent Schema'
        returns:
            -
                type:
                    names:
                        - Schema
                description: 'Parentn Schema'
        name: getParentSchema
        longname: 'HashBrown.Client.Views.Editors.FieldEditors.ContentSchemaReferenceEditor#getParentSchema'
        kind: function
        memberof: HashBrown.Client.Views.Editors.FieldEditors.ContentSchemaReferenceEditor
        scope: instance
        params: []
    -
        comment: "/**\n     * Gets schema types\n     *\n     * @returns {Array} List of options\n     */"
        meta:
            range:
                - 2409
                - 3224
            filename: ContentSchemaReferenceEditor.js
            lineno: 87
            columnno: 4
            path: /home/mrzapp/Development/Web/hashbrown-cms/src/Client/Views/Editors/FieldEditors
            code:
                id: astnode100016097
                name: 'ContentSchemaReferenceEditor#getDropdownOptions'
                type: MethodDefinition
                paramnames: []
            vars:
                "": null
        description: 'Gets schema types'
        returns:
            -
                type:
                    names:
                        - Array
                description: 'List of options'
        name: getDropdownOptions
        longname: 'HashBrown.Client.Views.Editors.FieldEditors.ContentSchemaReferenceEditor#getDropdownOptions'
        kind: function
        memberof: HashBrown.Client.Views.Editors.FieldEditors.ContentSchemaReferenceEditor
        scope: instance
        params: []
    -
        comment: "/**\n     * Renders the config editor\n     *\n     * @param {Object} config\n     *\n     * @returns {HTMLElement} Element\n     */"
        meta:
            range:
                - 3365
                - 4209
            filename: ContentSchemaReferenceEditor.js
            lineno: 121
            columnno: 4
            path: /home/mrzapp/Development/Web/hashbrown-cms/src/Client/Views/Editors/FieldEditors
            code:
                id: astnode100016205
                name: ContentSchemaReferenceEditor.renderConfigEditor
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
        longname: HashBrown.Client.Views.Editors.FieldEditors.ContentSchemaReferenceEditor.renderConfigEditor
        kind: function
        memberof: HashBrown.Client.Views.Editors.FieldEditors.ContentSchemaReferenceEditor
        scope: static
    -
        comment: "/**\n     * Picks the first available Schema\n     */"
        meta:
            range:
                - 4271
                - 4418
            filename: ContentSchemaReferenceEditor.js
            lineno: 146
            columnno: 4
            path: /home/mrzapp/Development/Web/hashbrown-cms/src/Client/Views/Editors/FieldEditors
            code:
                id: astnode100016288
                name: 'ContentSchemaReferenceEditor#pickFirstSchema'
                type: MethodDefinition
                paramnames: []
            vars:
                "": null
        description: 'Picks the first available Schema'
        name: pickFirstSchema
        longname: 'HashBrown.Client.Views.Editors.FieldEditors.ContentSchemaReferenceEditor#pickFirstSchema'
        kind: function
        memberof: HashBrown.Client.Views.Editors.FieldEditors.ContentSchemaReferenceEditor
        scope: instance
        params: []
    -
        comment: "/**\n     * Renders this editor\n     */"
        meta:
            range:
                - 4467
                - 5059
            filename: ContentSchemaReferenceEditor.js
            lineno: 157
            columnno: 4
            path: /home/mrzapp/Development/Web/hashbrown-cms/src/Client/Views/Editors/FieldEditors
            code:
                id: astnode100016319
                name: 'ContentSchemaReferenceEditor#template'
                type: MethodDefinition
                paramnames: []
            vars:
                "": null
        description: 'Renders this editor'
        name: template
        longname: 'HashBrown.Client.Views.Editors.FieldEditors.ContentSchemaReferenceEditor#template'
        kind: function
        memberof: HashBrown.Client.Views.Editors.FieldEditors.ContentSchemaReferenceEditor
        scope: instance
        params: []
shortname: ContentSchemaReferenceEditor
layout: docPage
permalink: /docs/hashbrown/client/views/editors/fieldeditors/contentschemareferenceeditor/
title: 'API: ContentSchemaReferenceEditor'
description: 'An editor for referencing Content Schemas'

---