---
comment: "/**\n * The editor for Forms\n *\n * @memberof HashBrown.Client.Views.Editors\n */"
meta:
    range:
        - 221
        - 14579
    filename: FormEditor.js
    lineno: 11
    columnno: 0
    path: /home/mrzapp/Development/Web/hashbrown-cms/src/Client/Views/Editors
    code:
        id: astnode100021753
        name: FormEditor
        type: ClassDeclaration
        paramnames:
            - params
classdesc: 'The editor for Forms'
memberof: HashBrown.Client.Views.Editors
name: FormEditor
longname: HashBrown.Client.Views.Editors.FormEditor
kind: class
scope: static
params: []
methods:
    -
        comment: "/**\n     * Event: Click advanced. Routes to the JSON editor\n     */"
        meta:
            range:
                - 426
                - 525
            filename: FormEditor.js
            lineno: 21
            columnno: 4
            path: /home/mrzapp/Development/Web/hashbrown-cms/src/Client/Views/Editors
            code:
                id: astnode100021773
                name: 'FormEditor#onClickAdvanced'
                type: MethodDefinition
                paramnames: []
            vars:
                "": null
        description: 'Event: Click advanced. Routes to the JSON editor'
        name: onClickAdvanced
        longname: 'HashBrown.Client.Views.Editors.FormEditor#onClickAdvanced'
        kind: function
        memberof: HashBrown.Client.Views.Editors.FormEditor
        scope: instance
        params: []
    -
        comment: "/**\n     * Event: Click save. Posts the model to the modelUrl\n     */"
        meta:
            range:
                - 605
                - 1140
            filename: FormEditor.js
            lineno: 28
            columnno: 4
            path: /home/mrzapp/Development/Web/hashbrown-cms/src/Client/Views/Editors
            code:
                id: astnode100021790
                name: 'FormEditor#onClickSave'
                type: MethodDefinition
                paramnames: []
            vars:
                "": null
        description: 'Event: Click save. Posts the model to the modelUrl'
        name: onClickSave
        longname: 'HashBrown.Client.Views.Editors.FormEditor#onClickSave'
        kind: function
        memberof: HashBrown.Client.Views.Editors.FormEditor
        scope: instance
        params: []
    -
        comment: "/**\n     * Event: Click add input\n     */"
        meta:
            range:
                - 1192
                - 1357
            filename: FormEditor.js
            lineno: 49
            columnno: 4
            path: /home/mrzapp/Development/Web/hashbrown-cms/src/Client/Views/Editors
            code:
                id: astnode100021880
                name: 'FormEditor#onClickAddInput'
                type: MethodDefinition
                paramnames: []
            vars:
                "": null
        description: 'Event: Click add input'
        name: onClickAddInput
        longname: 'HashBrown.Client.Views.Editors.FormEditor#onClickAddInput'
        kind: function
        memberof: HashBrown.Client.Views.Editors.FormEditor
        scope: instance
        params: []
    -
        comment: "/**\n     * Event: Click remove input\n     *\n     * @param {String} key\n     */"
        meta:
            range:
                - 1446
                - 1539
            filename: FormEditor.js
            lineno: 62
            columnno: 4
            path: /home/mrzapp/Development/Web/hashbrown-cms/src/Client/Views/Editors
            code:
                id: astnode100021911
                name: 'FormEditor#onClickRemoveInput'
                type: MethodDefinition
                paramnames:
                    - key
            vars:
                "": null
        description: 'Event: Click remove input'
        params:
            -
                type:
                    names:
                        - String
                name: key
        name: onClickRemoveInput
        longname: 'HashBrown.Client.Views.Editors.FormEditor#onClickRemoveInput'
        kind: function
        memberof: HashBrown.Client.Views.Editors.FormEditor
        scope: instance
    -
        comment: "/**\n     * Renders the allowed origin editor\n     *\n     * @return {Object} element\n     */"
        meta:
            range:
                - 1645
                - 2078
            filename: FormEditor.js
            lineno: 73
            columnno: 4
            path: /home/mrzapp/Development/Web/hashbrown-cms/src/Client/Views/Editors
            code:
                id: astnode100021930
                name: 'FormEditor#renderAllowedOriginEditor'
                type: MethodDefinition
                paramnames: []
            vars:
                "": null
        description: 'Renders the allowed origin editor'
        returns:
            -
                type:
                    names:
                        - Object
                description: element
        name: renderAllowedOriginEditor
        longname: 'HashBrown.Client.Views.Editors.FormEditor#renderAllowedOriginEditor'
        kind: function
        memberof: HashBrown.Client.Views.Editors.FormEditor
        scope: instance
        params: []
    -
        comment: "/**\n     * Renders the title editor\n     *\n     * @return {Object} element\n     */"
        meta:
            range:
                - 2171
                - 2535
            filename: FormEditor.js
            lineno: 90
            columnno: 4
            path: /home/mrzapp/Development/Web/hashbrown-cms/src/Client/Views/Editors
            code:
                id: astnode100021973
                name: 'FormEditor#renderTitleEditor'
                type: MethodDefinition
                paramnames: []
            vars:
                "": null
        description: 'Renders the title editor'
        returns:
            -
                type:
                    names:
                        - Object
                description: element
        name: renderTitleEditor
        longname: 'HashBrown.Client.Views.Editors.FormEditor#renderTitleEditor'
        kind: function
        memberof: HashBrown.Client.Views.Editors.FormEditor
        scope: instance
        params: []
    -
        comment: "/**\n     * Renders the redirect editor\n     *\n     * @return {Object} element\n     */"
        meta:
            range:
                - 2635
                - 3588
            filename: FormEditor.js
            lineno: 107
            columnno: 4
            path: /home/mrzapp/Development/Web/hashbrown-cms/src/Client/Views/Editors
            code:
                id: astnode100022016
                name: 'FormEditor#renderRedirectEditor'
                type: MethodDefinition
                paramnames: []
            vars:
                "": null
        description: 'Renders the redirect editor'
        returns:
            -
                type:
                    names:
                        - Object
                description: element
        name: renderRedirectEditor
        longname: 'HashBrown.Client.Views.Editors.FormEditor#renderRedirectEditor'
        kind: function
        memberof: HashBrown.Client.Views.Editors.FormEditor
        scope: instance
        params: []
    -
        comment: "/**\n     * Renders the inputs editor\n     *\n     * @return {Object} element\n     */"
        meta:
            range:
                - 3682
                - 8750
            filename: FormEditor.js
            lineno: 135
            columnno: 4
            path: /home/mrzapp/Development/Web/hashbrown-cms/src/Client/Views/Editors
            code:
                id: astnode100022101
                name: 'FormEditor#renderInputsEditor'
                type: MethodDefinition
                paramnames: []
            vars:
                "": null
        description: 'Renders the inputs editor'
        returns:
            -
                type:
                    names:
                        - Object
                description: element
        name: renderInputsEditor
        longname: 'HashBrown.Client.Views.Editors.FormEditor#renderInputsEditor'
        kind: function
        memberof: HashBrown.Client.Views.Editors.FormEditor
        scope: instance
        params: []
    -
        comment: "/**\n     * Renders a preview\n     *\n     * @return {Object} element\n     */"
        meta:
            range:
                - 8836
                - 9487
            filename: FormEditor.js
            lineno: 244
            columnno: 4
            path: /home/mrzapp/Development/Web/hashbrown-cms/src/Client/Views/Editors
            code:
                id: astnode100022525
                name: 'FormEditor#renderPreview'
                type: MethodDefinition
                paramnames: []
            vars:
                "": null
        description: 'Renders a preview'
        returns:
            -
                type:
                    names:
                        - Object
                description: element
        name: renderPreview
        longname: 'HashBrown.Client.Views.Editors.FormEditor#renderPreview'
        kind: function
        memberof: HashBrown.Client.Views.Editors.FormEditor
        scope: instance
        params: []
    -
        comment: "/**\n     * Renders all entries\n     *\n     * @return {Object} element\n     */"
        meta:
            range:
                - 9575
                - 10453
            filename: FormEditor.js
            lineno: 265
            columnno: 4
            path: /home/mrzapp/Development/Web/hashbrown-cms/src/Client/Views/Editors
            code:
                id: astnode100022619
                name: 'FormEditor#renderEntries'
                type: MethodDefinition
                paramnames: []
            vars:
                "": null
        description: 'Renders all entries'
        returns:
            -
                type:
                    names:
                        - Object
                description: element
        name: renderEntries
        longname: 'HashBrown.Client.Views.Editors.FormEditor#renderEntries'
        kind: function
        memberof: HashBrown.Client.Views.Editors.FormEditor
        scope: instance
        params: []
    -
        comment: "/**\n     * Renders a single field\n     *\n     * @return {HTMLElement} Element\n     */"
        meta:
            range:
                - 10549
                - 10761
            filename: FormEditor.js
            lineno: 289
            columnno: 4
            path: /home/mrzapp/Development/Web/hashbrown-cms/src/Client/Views/Editors
            code:
                id: astnode100022730
                name: 'FormEditor#renderField'
                type: MethodDefinition
                paramnames:
                    - label
                    - $content
                    - className
            vars:
                "": null
        description: 'Renders a single field'
        returns:
            -
                type:
                    names:
                        - HTMLElement
                description: Element
        name: renderField
        longname: 'HashBrown.Client.Views.Editors.FormEditor#renderField'
        kind: function
        memberof: HashBrown.Client.Views.Editors.FormEditor
        scope: instance
        params: []
    -
        comment: "/**\n     * Renders all fields\n     *\n     * @return {Object} element\n     */"
        meta:
            range:
                - 10856
                - 13382
            filename: FormEditor.js
            lineno: 303
            columnno: 4
            path: /home/mrzapp/Development/Web/hashbrown-cms/src/Client/Views/Editors
            code:
                id: astnode100022754
                name: 'FormEditor#renderFields'
                type: MethodDefinition
                paramnames: []
            vars:
                "": null
        description: 'Renders all fields'
        returns:
            -
                type:
                    names:
                        - Object
                description: element
        name: renderFields
        longname: 'HashBrown.Client.Views.Editors.FormEditor#renderFields'
        kind: function
        memberof: HashBrown.Client.Views.Editors.FormEditor
        scope: instance
        params: []
    -
        comment: "/**\n     * Post render\n     */"
        meta:
            range:
                - 13423
                - 13473
            filename: FormEditor.js
            lineno: 362
            columnno: 4
            path: /home/mrzapp/Development/Web/hashbrown-cms/src/Client/Views/Editors
            code:
                id: astnode100023046
                name: 'FormEditor#postrender'
                type: MethodDefinition
                paramnames: []
            vars:
                "": null
        description: 'Post render'
        name: postrender
        longname: 'HashBrown.Client.Views.Editors.FormEditor#postrender'
        kind: function
        memberof: HashBrown.Client.Views.Editors.FormEditor
        scope: instance
        params: []
    -
        comment: "/**\n     * Renders this editor\n     */"
        meta:
            range:
                - 13522
                - 14577
            filename: FormEditor.js
            lineno: 369
            columnno: 4
            path: /home/mrzapp/Development/Web/hashbrown-cms/src/Client/Views/Editors
            code:
                id: astnode100023055
                name: 'FormEditor#template'
                type: MethodDefinition
                paramnames: []
            vars:
                "": null
        description: 'Renders this editor'
        name: template
        longname: 'HashBrown.Client.Views.Editors.FormEditor#template'
        kind: function
        memberof: HashBrown.Client.Views.Editors.FormEditor
        scope: instance
        params: []
shortname: FormEditor
layout: docPage
permalink: /docs/hashbrown/client/views/editors/formeditor/
title: 'API: FormEditor'
description: 'The editor for Forms'

---