---
comment: "/**\n * The editor view for Content objects\n *\n * @memberof HashBrown.Client.Views.Editors\n */"
meta:
    range:
        - 418
        - 16911
    filename: ContentEditor.js
    lineno: 15
    columnno: 0
    path: /home/mrzapp/Development/Web/hashbrown-cms/src/Client/Views/Editors
    code:
        id: astnode100011694
        name: ContentEditor
        type: ClassDeclaration
        paramnames:
            - params
classdesc: 'The editor view for Content objects'
memberof: HashBrown.Client.Views.Editors
name: ContentEditor
longname: HashBrown.Client.Views.Editors.ContentEditor
kind: class
scope: static
params: []
methods:
    -
        comment: "/**\n     * Event: Scroll\n     */"
        meta:
            range:
                - 608
                - 1716
            filename: ContentEditor.js
            lineno: 27
            columnno: 4
            path: /home/mrzapp/Development/Web/hashbrown-cms/src/Client/Views/Editors
            code:
                id: astnode100011720
                name: 'ContentEditor#onScroll'
                type: MethodDefinition
                paramnames:
                    - e
            vars:
                "": null
        description: 'Event: Scroll'
        name: onScroll
        longname: 'HashBrown.Client.Views.Editors.ContentEditor#onScroll'
        kind: function
        memberof: HashBrown.Client.Views.Editors.ContentEditor
        scope: instance
        params: []
    -
        comment: "/**\n     * Event: Click advanced. Routes to the JSON editor\n     */"
        meta:
            range:
                - 1794
                - 1877
            filename: ContentEditor.js
            lineno: 62
            columnno: 4
            path: /home/mrzapp/Development/Web/hashbrown-cms/src/Client/Views/Editors
            code:
                id: astnode100011843
                name: 'ContentEditor#onClickAdvanced'
                type: MethodDefinition
                paramnames: []
            vars:
                "": null
        description: 'Event: Click advanced. Routes to the JSON editor'
        name: onClickAdvanced
        longname: 'HashBrown.Client.Views.Editors.ContentEditor#onClickAdvanced'
        kind: function
        memberof: HashBrown.Client.Views.Editors.ContentEditor
        scope: instance
        params: []
    -
        comment: "/**\n     * Event: Click save. Posts the model to the modelUrl\n     */"
        meta:
            range:
                - 1957
                - 3702
            filename: ContentEditor.js
            lineno: 69
            columnno: 4
            path: /home/mrzapp/Development/Web/hashbrown-cms/src/Client/Views/Editors
            code:
                id: astnode100011859
                name: 'ContentEditor#onClickSave'
                type: MethodDefinition
                paramnames: []
            vars:
                "": null
        description: 'Event: Click save. Posts the model to the modelUrl'
        name: onClickSave
        longname: 'HashBrown.Client.Views.Editors.ContentEditor#onClickSave'
        kind: function
        memberof: HashBrown.Client.Views.Editors.ContentEditor
        scope: instance
        params: []
    -
        comment: "/**\n     * Reload this view\n     */"
        meta:
            range:
                - 3748
                - 3895
            filename: ContentEditor.js
            lineno: 129
            columnno: 4
            path: /home/mrzapp/Development/Web/hashbrown-cms/src/Client/Views/Editors
            code:
                id: astnode100012053
                name: 'ContentEditor#reload'
                type: MethodDefinition
                paramnames: []
            vars:
                "": null
        description: 'Reload this view'
        name: reload
        longname: 'HashBrown.Client.Views.Editors.ContentEditor#reload'
        kind: function
        memberof: HashBrown.Client.Views.Editors.ContentEditor
        scope: instance
        params: []
    -
        comment: "/**\n     * Binds event to fire when field editors are ready\n     * Or fires them if no callback was passed\n     *\n     * @param {Function} callback\n     */"
        meta:
            range:
                - 4061
                - 4526
            filename: ContentEditor.js
            lineno: 143
            columnno: 4
            path: /home/mrzapp/Development/Web/hashbrown-cms/src/Client/Views/Editors
            code:
                id: astnode100012084
                name: 'ContentEditor#onFieldEditorsReady'
                type: MethodDefinition
                paramnames:
                    - callback
            vars:
                "": null
        description: "Binds event to fire when field editors are ready\nOr fires them if no callback was passed"
        params:
            -
                type:
                    names:
                        - function
                name: callback
        name: onFieldEditorsReady
        longname: 'HashBrown.Client.Views.Editors.ContentEditor#onFieldEditorsReady'
        kind: function
        memberof: HashBrown.Client.Views.Editors.ContentEditor
        scope: instance
    -
        comment: "/**\n     * Restores the scroll position\n     *\n     * @param {Number} delay\n     */"
        meta:
            range:
                - 4620
                - 4832
            filename: ContentEditor.js
            lineno: 167
            columnno: 4
            path: /home/mrzapp/Development/Web/hashbrown-cms/src/Client/Views/Editors
            code:
                id: astnode100012135
                name: 'ContentEditor#restoreScrollPos'
                type: MethodDefinition
                paramnames:
                    - delay
            vars:
                "": null
        description: 'Restores the scroll position'
        params:
            -
                type:
                    names:
                        - Number
                name: delay
        name: restoreScrollPos
        longname: 'HashBrown.Client.Views.Editors.ContentEditor#restoreScrollPos'
        kind: function
        memberof: HashBrown.Client.Views.Editors.ContentEditor
        scope: instance
    -
        comment: "/**\n     * Static version of the restore scroll position method\n     *\n     * @param {Number} delay\n     */"
        meta:
            range:
                - 4950
                - 5118
            filename: ContentEditor.js
            lineno: 180
            columnno: 4
            path: /home/mrzapp/Development/Web/hashbrown-cms/src/Client/Views/Editors
            code:
                id: astnode100012170
                name: ContentEditor.restoreScrollPos
                type: MethodDefinition
                paramnames:
                    - delay
            vars:
                "": null
        description: 'Static version of the restore scroll position method'
        params:
            -
                type:
                    names:
                        - Number
                name: delay
        name: restoreScrollPos
        longname: HashBrown.Client.Views.Editors.ContentEditor.restoreScrollPos
        kind: function
        memberof: HashBrown.Client.Views.Editors.ContentEditor
        scope: static
    -
        comment: "/**\n     * Gets a field editor for a Schema\n     *\n     * @param {string} editorId\n     *\n     * @returns {View} Field editor\n     */"
        meta:
            range:
                - 5262
                - 5609
            filename: ContentEditor.js
            lineno: 195
            columnno: 4
            path: /home/mrzapp/Development/Web/hashbrown-cms/src/Client/Views/Editors
            code:
                id: astnode100012194
                name: ContentEditor.getFieldEditor
                type: MethodDefinition
                paramnames:
                    - editorId
            vars:
                "": null
        description: 'Gets a field editor for a Schema'
        params:
            -
                type:
                    names:
                        - string
                name: editorId
        returns:
            -
                type:
                    names:
                        - View
                description: 'Field editor'
        name: getFieldEditor
        longname: HashBrown.Client.Views.Editors.ContentEditor.getFieldEditor
        kind: function
        memberof: HashBrown.Client.Views.Editors.ContentEditor
        scope: static
    -
        comment: "/**\n     * Renders a field view\n     *\n     * @param {Object} fieldValue The field value to inject into the field editor\n     * @param {FieldSchema} fieldDefinition The field definition\n     * @param {Function} onChange The change event\n     * @param {Object} config The field config\n     * @param {HTMLElement} keyActions The key content container\n     *\n     * @return {Object} element\n     */"
        meta:
            range:
                - 6015
                - 7604
            filename: ContentEditor.js
            lineno: 219
            columnno: 4
            path: /home/mrzapp/Development/Web/hashbrown-cms/src/Client/Views/Editors
            code:
                id: astnode100012244
                name: 'ContentEditor#renderField'
                type: MethodDefinition
                paramnames:
                    - fieldValue
                    - fieldDefinition
                    - onChange
                    - config
                    - $keyActions
            vars:
                "": null
        description: 'Renders a field view'
        params:
            -
                type:
                    names:
                        - Object
                description: 'The field value to inject into the field editor'
                name: fieldValue
            -
                type:
                    names:
                        - FieldSchema
                description: 'The field definition'
                name: fieldDefinition
            -
                type:
                    names:
                        - function
                description: 'The change event'
                name: onChange
            -
                type:
                    names:
                        - Object
                description: 'The field config'
                name: config
            -
                type:
                    names:
                        - HTMLElement
                description: 'The key content container'
                name: keyActions
        returns:
            -
                type:
                    names:
                        - Object
                description: element
        name: renderField
        longname: 'HashBrown.Client.Views.Editors.ContentEditor#renderField'
        kind: function
        memberof: HashBrown.Client.Views.Editors.ContentEditor
        scope: instance
    -
        comment: "/**\n     * Renders fields\n     *\n     * @param {String} tabId The tab for which to render the fields\n     * @param {Object} fieldDefinitions The set of field definitions to render\n     * @param {Object} fieldValues The set of field values to inject into the field editor\n     *\n     * @returns {Array} A list of HTMLElements to render\n     */"
        meta:
            range:
                - 7957
                - 11287
            filename: ContentEditor.js
            lineno: 272
            columnno: 4
            path: /home/mrzapp/Development/Web/hashbrown-cms/src/Client/Views/Editors
            code:
                id: astnode100012396
                name: 'ContentEditor#renderFields'
                type: MethodDefinition
                paramnames:
                    - tabId
                    - fieldDefinitions
                    - fieldValues
            vars:
                "": null
        description: 'Renders fields'
        params:
            -
                type:
                    names:
                        - String
                description: 'The tab for which to render the fields'
                name: tabId
            -
                type:
                    names:
                        - Object
                description: 'The set of field definitions to render'
                name: fieldDefinitions
            -
                type:
                    names:
                        - Object
                description: 'The set of field values to inject into the field editor'
                name: fieldValues
        returns:
            -
                type:
                    names:
                        - Array
                description: 'A list of HTMLElements to render'
        name: renderFields
        longname: 'HashBrown.Client.Views.Editors.ContentEditor#renderFields'
        kind: function
        memberof: HashBrown.Client.Views.Editors.ContentEditor
        scope: instance
    -
        comment: "/**\n     * Event: Click tab\n     *\n     * @param {String} tab\n     */"
        meta:
            range:
                - 11367
                - 11390
            filename: ContentEditor.js
            lineno: 356
            columnno: 4
            path: /home/mrzapp/Development/Web/hashbrown-cms/src/Client/Views/Editors
            code:
                id: astnode100012641
                name: 'ContentEditor#onClickTab'
                type: MethodDefinition
                paramnames:
                    - tab
            vars:
                "": null
        description: 'Event: Click tab'
        params:
            -
                type:
                    names:
                        - String
                name: tab
        name: onClickTab
        longname: 'HashBrown.Client.Views.Editors.ContentEditor#onClickTab'
        kind: function
        memberof: HashBrown.Client.Views.Editors.ContentEditor
        scope: instance
    -
        comment: "/**\n     * Renders the editor\n     *\n     * @param {Content} content\n     * @param {Object} schema\n     *\n     * @return {Object} element\n     */"
        meta:
            range:
                - 11546
                - 13448
            filename: ContentEditor.js
            lineno: 367
            columnno: 4
            path: /home/mrzapp/Development/Web/hashbrown-cms/src/Client/Views/Editors
            code:
                id: astnode100012646
                name: 'ContentEditor#renderEditor'
                type: MethodDefinition
                paramnames:
                    - content
                    - schema
            vars:
                "": null
        description: 'Renders the editor'
        params:
            -
                type:
                    names:
                        - Content
                name: content
            -
                type:
                    names:
                        - Object
                name: schema
        returns:
            -
                type:
                    names:
                        - Object
                description: element
        name: renderEditor
        longname: 'HashBrown.Client.Views.Editors.ContentEditor#renderEditor'
        kind: function
        memberof: HashBrown.Client.Views.Editors.ContentEditor
        scope: instance
    -
        comment: "/**\n     * Renders the action buttons\n     */"
        meta:
            range:
                - 13504
                - 15884
            filename: ContentEditor.js
            lineno: 415
            columnno: 4
            path: /home/mrzapp/Development/Web/hashbrown-cms/src/Client/Views/Editors
            code:
                id: astnode100012885
                name: 'ContentEditor#renderButtons'
                type: MethodDefinition
                paramnames: []
            vars:
                "": null
        description: 'Renders the action buttons'
        name: renderButtons
        longname: 'HashBrown.Client.Views.Editors.ContentEditor#renderButtons'
        kind: function
        memberof: HashBrown.Client.Views.Editors.ContentEditor
        scope: instance
        params: []
    -
        comment: "/**\n     * Pre render\n     */"
        meta:
            range:
                - 15924
                - 16154
            filename: ContentEditor.js
            lineno: 476
            columnno: 4
            path: /home/mrzapp/Development/Web/hashbrown-cms/src/Client/Views/Editors
            code:
                id: astnode100013148
                name: 'ContentEditor#prerender'
                type: MethodDefinition
                paramnames: []
            vars:
                "": null
        description: 'Pre render'
        name: prerender
        longname: 'HashBrown.Client.Views.Editors.ContentEditor#prerender'
        kind: function
        memberof: HashBrown.Client.Views.Editors.ContentEditor
        scope: instance
        params: []
    -
        comment: "/**\n     * Render this editor\n     */"
        meta:
            range:
                - 16202
                - 16318
            filename: ContentEditor.js
            lineno: 486
            columnno: 4
            path: /home/mrzapp/Development/Web/hashbrown-cms/src/Client/Views/Editors
            code:
                id: astnode100013179
                name: 'ContentEditor#template'
                type: MethodDefinition
                paramnames: []
            vars:
                "": null
        description: 'Render this editor'
        name: template
        longname: 'HashBrown.Client.Views.Editors.ContentEditor#template'
        kind: function
        memberof: HashBrown.Client.Views.Editors.ContentEditor
        scope: instance
        params: []
    -
        comment: "/**\n     * Post render\n     */"
        meta:
            range:
                - 16359
                - 16909
            filename: ContentEditor.js
            lineno: 493
            columnno: 4
            path: /home/mrzapp/Development/Web/hashbrown-cms/src/Client/Views/Editors
            code:
                id: astnode100013200
                name: 'ContentEditor#postrender'
                type: MethodDefinition
                paramnames: []
            vars:
                "": null
        description: 'Post render'
        name: postrender
        longname: 'HashBrown.Client.Views.Editors.ContentEditor#postrender'
        kind: function
        memberof: HashBrown.Client.Views.Editors.ContentEditor
        scope: instance
        params: []
shortname: ContentEditor
layout: docPage
permalink: /docs/hashbrown/client/views/editors/contenteditor/
title: 'API: ContentEditor'
description: 'The editor view for Content objects'

---