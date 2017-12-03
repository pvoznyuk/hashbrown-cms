---
comment: "/**\n * A struct editor for editing any arbitrary object value\n *\n * @description Example:\n * <pre>\n * {\n *     \"myStruct\": {\n *         \"label\": \"My struct\",\n *         \"tabId\": \"content\",\n *         \"schemaId\": \"struct\",\n *         \"config\": {\n *             \"struct\": {\n *                 \"myString\": {\n *                     \"label\": \"My string\",\n *                     \"schemaId\": \"string\"\n *                 },\n *                 \"myArray\": {\n *                     \"label\": \"My array\",\n *                     \"schemaId\": \"array\",\n *                     \"config\": {\n *                         \"allowedSchemas\": [ \"string\", \"mediaReference\", \"myCustomSchema\" ]\n *                     }\n *                 }\n *             }\n *         }\n *     }\n * }\n * </pre>\n *\n * @memberof HashBrown.Client.Views.Editors.FieldEditors\n */"
meta:
    range:
        - 1084
        - 14819
    filename: StructEditor.js
    lineno: 39
    columnno: 0
    path: /home/mrzapp/Development/Web/hashbrown-cms/src/Client/Views/Editors/FieldEditors
    code:
        id: astnode100019241
        name: StructEditor
        type: ClassDeclaration
        paramnames:
            - params
classdesc: 'A struct editor for editing any arbitrary object value'
description: 'A struct editor for editing any arbitrary object value'
memberof: HashBrown.Client.Views.Editors.FieldEditors
name: StructEditor
longname: HashBrown.Client.Views.Editors.FieldEditors.StructEditor
kind: class
scope: static
params: []
methods:
    -
        comment: "/**\n     * Event: Change value\n     *\n     * @param {Object} newValue\n     * @param {String} key\n     * @param {Object} keySchema\n     * @param {Boolean} isSilent\n     */"
        meta:
            range:
                - 1559
                - 2116
            filename: StructEditor.js
            lineno: 59
            columnno: 4
            path: /home/mrzapp/Development/Web/hashbrown-cms/src/Client/Views/Editors/FieldEditors
            code:
                id: astnode100019278
                name: 'StructEditor#onChange'
                type: MethodDefinition
                paramnames:
                    - newValue
                    - key
                    - keySchema
                    - isSilent
            vars:
                "": null
        description: 'Event: Change value'
        params:
            -
                type:
                    names:
                        - Object
                name: newValue
            -
                type:
                    names:
                        - String
                name: key
            -
                type:
                    names:
                        - Object
                name: keySchema
            -
                type:
                    names:
                        - Boolean
                name: isSilent
        name: onChange
        longname: 'HashBrown.Client.Views.Editors.FieldEditors.StructEditor#onChange'
        kind: function
        memberof: HashBrown.Client.Views.Editors.FieldEditors.StructEditor
        scope: instance
    -
        comment: "/**\n     * Renders the config editor\n     *\n     * @param {Object} config\n     *\n     * @returns {HTMLElement} Element\n     */"
        meta:
            range:
                - 2253
                - 12532
            filename: StructEditor.js
            lineno: 83
            columnno: 4
            path: /home/mrzapp/Development/Web/hashbrown-cms/src/Client/Views/Editors/FieldEditors
            code:
                id: astnode100019359
                name: StructEditor.renderConfigEditor
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
        longname: HashBrown.Client.Views.Editors.FieldEditors.StructEditor.renderConfigEditor
        kind: function
        memberof: HashBrown.Client.Views.Editors.FieldEditors.StructEditor
        scope: static
    -
        comment: "/**\n     * Renders this editor\n     */"
        meta:
            range:
                - 12580
                - 14813
            filename: StructEditor.js
            lineno: 261
            columnno: 3
            path: /home/mrzapp/Development/Web/hashbrown-cms/src/Client/Views/Editors/FieldEditors
            code:
                id: astnode100020015
                name: 'StructEditor#template'
                type: MethodDefinition
                paramnames: []
            vars:
                "": null
        description: 'Renders this editor'
        name: template
        longname: 'HashBrown.Client.Views.Editors.FieldEditors.StructEditor#template'
        kind: function
        memberof: HashBrown.Client.Views.Editors.FieldEditors.StructEditor
        scope: instance
        params: []
shortname: StructEditor
layout: docPage
permalink: /docs/hashbrown/client/views/editors/fieldeditors/structeditor/
title: 'API: StructEditor'

---