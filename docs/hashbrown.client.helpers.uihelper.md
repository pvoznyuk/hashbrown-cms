---
comment: "/**\n * A UI helper for creating and handling common interface behaviours\n *\n * @memberof HashBrown.Client.Helpers\n */"
meta:
    range:
        - 133
        - 22475
    filename: UIHelper.js
    lineno: 8
    columnno: 0
    path: /home/mrzapp/Development/Web/hashbrown-cms/src/Client/Helpers
    code:
        id: astnode100002743
        name: UIHelper
        type: ClassDeclaration
        paramnames: []
classdesc: 'A UI helper for creating and handling common interface behaviours'
memberof: HashBrown.Client.Helpers
name: UIHelper
longname: HashBrown.Client.Helpers.UIHelper
kind: class
scope: static
methods:
    -
        comment: "/**\n     * Sets the content of the editor space\n     *\n     * @param {Array|HTMLElement} content\n     * @param {String} className\n     */"
        meta:
            range:
                - 296
                - 589
            filename: UIHelper.js
            lineno: 15
            columnno: 4
            path: /home/mrzapp/Development/Web/hashbrown-cms/src/Client/Helpers
            code:
                id: astnode100002746
                name: UIHelper.setEditorSpaceContent
                type: MethodDefinition
                paramnames:
                    - content
                    - className
            vars:
                "": null
        description: 'Sets the content of the editor space'
        params:
            -
                type:
                    names:
                        - Array
                        - HTMLElement
                name: content
            -
                type:
                    names:
                        - String
                name: className
        name: setEditorSpaceContent
        longname: HashBrown.Client.Helpers.UIHelper.setEditorSpaceContent
        kind: function
        memberof: HashBrown.Client.Helpers.UIHelper
        scope: static
    -
        comment: "/**\n     * Creates a sortable context specific to arrays using editor fields\n     *\n     * @param {Array} array\n     * @param {HTMLElement} field\n     * @param {Function} onChange\n     */"
        meta:
            range:
                - 787
                - 1856
            filename: UIHelper.js
            lineno: 32
            columnno: 4
            path: /home/mrzapp/Development/Web/hashbrown-cms/src/Client/Helpers
            code:
                id: astnode100002784
                name: UIHelper.fieldSortableArray
                type: MethodDefinition
                paramnames:
                    - array
                    - field
                    - onChange
            vars:
                "": null
        description: 'Creates a sortable context specific to arrays using editor fields'
        params:
            -
                type:
                    names:
                        - Array
                name: array
            -
                type:
                    names:
                        - HTMLElement
                name: field
            -
                type:
                    names:
                        - function
                name: onChange
        name: fieldSortableArray
        longname: HashBrown.Client.Helpers.UIHelper.fieldSortableArray
        kind: function
        memberof: HashBrown.Client.Helpers.UIHelper
        scope: static
    -
        comment: "/**\n     * Creates a sortable context specific to objects using editor fields\n     *\n     * @param {Object} object\n     * @param {HTMLElement} field\n     * @param {Function} onChange\n     */"
        meta:
            range:
                - 2057
                - 3737
            filename: UIHelper.js
            lineno: 75
            columnno: 4
            path: /home/mrzapp/Development/Web/hashbrown-cms/src/Client/Helpers
            code:
                id: astnode100002931
                name: UIHelper.fieldSortableObject
                type: MethodDefinition
                paramnames:
                    - object
                    - field
                    - onChange
            vars:
                "": null
        description: 'Creates a sortable context specific to objects using editor fields'
        params:
            -
                type:
                    names:
                        - Object
                name: object
            -
                type:
                    names:
                        - HTMLElement
                name: field
            -
                type:
                    names:
                        - function
                name: onChange
        name: fieldSortableObject
        longname: HashBrown.Client.Helpers.UIHelper.fieldSortableObject
        kind: function
        memberof: HashBrown.Client.Helpers.UIHelper
        scope: static
    -
        comment: "/**\n     * Creates a sortable context specific to fields\n     *\n     * @param {HTMLElement} field\n     * @param {Function} onChange\n     */"
        meta:
            range:
                - 3887
                - 4354
            filename: UIHelper.js
            lineno: 130
            columnno: 4
            path: /home/mrzapp/Development/Web/hashbrown-cms/src/Client/Helpers
            code:
                id: astnode100003073
                name: UIHelper.fieldSortable
                type: MethodDefinition
                paramnames:
                    - field
                    - onChange
            vars:
                "": null
        description: 'Creates a sortable context specific to fields'
        params:
            -
                type:
                    names:
                        - HTMLElement
                name: field
            -
                type:
                    names:
                        - function
                name: onChange
        name: fieldSortable
        longname: HashBrown.Client.Helpers.UIHelper.fieldSortable
        kind: function
        memberof: HashBrown.Client.Helpers.UIHelper
        scope: static
    -
        comment: "/**\n     * Creates a sortable context\n     *\n     * @param {HTMLElement} parentElement\n     * @param {String} sortableClassName\n     * @param {Boolean} isActive\n     * @param {Function} onChange\n     *\n     * @returns {Boolean} Whether or not sorting was initialised\n     */"
        meta:
            range:
                - 4639
                - 8026
            filename: UIHelper.js
            lineno: 151
            columnno: 4
            path: /home/mrzapp/Development/Web/hashbrown-cms/src/Client/Helpers
            code:
                id: astnode100003134
                name: UIHelper.sortable
                type: MethodDefinition
                paramnames:
                    - parentElement
                    - sortableClassName
                    - isActive
                    - onChange
            vars:
                "": null
        description: 'Creates a sortable context'
        params:
            -
                type:
                    names:
                        - HTMLElement
                name: parentElement
            -
                type:
                    names:
                        - String
                name: sortableClassName
            -
                type:
                    names:
                        - Boolean
                name: isActive
            -
                type:
                    names:
                        - function
                name: onChange
        returns:
            -
                type:
                    names:
                        - Boolean
                description: 'Whether or not sorting was initialised'
        name: sortable
        longname: HashBrown.Client.Helpers.UIHelper.sortable
        kind: function
        memberof: HashBrown.Client.Helpers.UIHelper
        scope: static
    -
        comment: "/**\n     * Creates a switch\n     *\n     * @param {Boolean} initialValue\n     * @param {Function} onChange\n     *\n     * @returns {HTMLElement} Switch element\n     */"
        meta:
            range:
                - 8203
                - 9021
            filename: UIHelper.js
            lineno: 248
            columnno: 4
            path: /home/mrzapp/Development/Web/hashbrown-cms/src/Client/Helpers
            code:
                id: astnode100003537
                name: UIHelper.inputSwitch
                type: MethodDefinition
                paramnames:
                    - initialValue
                    - onChange
            vars:
                "": null
        description: 'Creates a switch'
        params:
            -
                type:
                    names:
                        - Boolean
                name: initialValue
            -
                type:
                    names:
                        - function
                name: onChange
        returns:
            -
                type:
                    names:
                        - HTMLElement
                description: 'Switch element'
        name: inputSwitch
        longname: HashBrown.Client.Helpers.UIHelper.inputSwitch
        kind: function
        memberof: HashBrown.Client.Helpers.UIHelper
        scope: static
    -
        comment: "/**\n     * Creates a group of chips\n     *\n     * @param {Array} items\n     * @param {Array} dropdownItems\n     * @param {Function} onChange\n     * @param {Boolean} isDropdownUnique\n     *\n     * @returns {HtmlElement} Chip group element\n     */"
        meta:
            range:
                - 9277
                - 15517
            filename: UIHelper.js
            lineno: 288
            columnno: 4
            path: /home/mrzapp/Development/Web/hashbrown-cms/src/Client/Helpers
            code:
                id: astnode100003651
                name: UIHelper.inputChipGroup
                type: MethodDefinition
                paramnames:
                    - items
                    - dropdownItems
                    - onChange
                    - isDropdownUnique
            vars:
                "": null
        description: 'Creates a group of chips'
        params:
            -
                type:
                    names:
                        - Array
                name: items
            -
                type:
                    names:
                        - Array
                name: dropdownItems
            -
                type:
                    names:
                        - function
                name: onChange
            -
                type:
                    names:
                        - Boolean
                name: isDropdownUnique
        returns:
            -
                type:
                    names:
                        - HtmlElement
                description: 'Chip group element'
        name: inputChipGroup
        longname: HashBrown.Client.Helpers.UIHelper.inputChipGroup
        kind: function
        memberof: HashBrown.Client.Helpers.UIHelper
        scope: static
    -
        comment: "/**\n     * Renders a carousel\n     *\n     * @param {Array} items\n     * @param {Boolean} useIndicators\n     * @param {Boolean} useControls\n     * @param {String} height\n     *\n     * @returns {HtmlElement} Carousel element\n     */"
        meta:
            range:
                - 15762
                - 17050
            filename: UIHelper.js
            lineno: 446
            columnno: 4
            path: /home/mrzapp/Development/Web/hashbrown-cms/src/Client/Helpers
            code:
                id: astnode100004128
                name: UIHelper.carousel
                type: MethodDefinition
                paramnames:
                    - items
                    - useIndicators
                    - useControls
                    - height
            vars:
                "": null
        description: 'Renders a carousel'
        params:
            -
                type:
                    names:
                        - Array
                name: items
            -
                type:
                    names:
                        - Boolean
                name: useIndicators
            -
                type:
                    names:
                        - Boolean
                name: useControls
            -
                type:
                    names:
                        - String
                name: height
        returns:
            -
                type:
                    names:
                        - HtmlElement
                description: 'Carousel element'
        name: carousel
        longname: HashBrown.Client.Helpers.UIHelper.carousel
        kind: function
        memberof: HashBrown.Client.Helpers.UIHelper
        scope: static
    -
        comment: "/**\n     * Brings up an error modal\n     *\n     * @param {String|Error} error\n     * @param {Function} onClickOK\n     */"
        meta:
            range:
                - 17181
                - 17776
            filename: UIHelper.js
            lineno: 481
            columnno: 4
            path: /home/mrzapp/Development/Web/hashbrown-cms/src/Client/Helpers
            code:
                id: astnode100004296
                name: UIHelper.errorModal
                type: MethodDefinition
                paramnames:
                    - error
                    - onClickOK
            vars:
                "": null
        description: 'Brings up an error modal'
        params:
            -
                type:
                    names:
                        - String
                        - Error
                name: error
            -
                type:
                    names:
                        - function
                name: onClickOK
        name: errorModal
        longname: HashBrown.Client.Helpers.UIHelper.errorModal
        kind: function
        memberof: HashBrown.Client.Helpers.UIHelper
        scope: static
    -
        comment: "/**\n     * Brings up a warning modal\n     *\n     * @param {String} warning\n     * @param {Function} onClickOK\n     */"
        meta:
            range:
                - 17908
                - 18105
            filename: UIHelper.js
            lineno: 508
            columnno: 4
            path: /home/mrzapp/Development/Web/hashbrown-cms/src/Client/Helpers
            code:
                id: astnode100004371
                name: UIHelper.warningModal
                type: MethodDefinition
                paramnames:
                    - warning
                    - onClickOK
            vars:
                "": null
        description: 'Brings up a warning modal'
        params:
            -
                type:
                    names:
                        - String
                name: warning
            -
                type:
                    names:
                        - function
                name: onClickOK
        name: warningModal
        longname: HashBrown.Client.Helpers.UIHelper.warningModal
        kind: function
        memberof: HashBrown.Client.Helpers.UIHelper
        scope: static
    -
        comment: "/**\n     * Brings up a message modal\n     *\n     * @param {String} title\n     * @param {String} body\n     * @param {Function} onClickOK\n     * @param {String} group\n     */"
        meta:
            range:
                - 18288
                - 18547
            filename: UIHelper.js
            lineno: 522
            columnno: 4
            path: /home/mrzapp/Development/Web/hashbrown-cms/src/Client/Helpers
            code:
                id: astnode100004391
                name: UIHelper.messageModal
                type: MethodDefinition
                paramnames:
                    - title
                    - body
                    - onClickOK
                    - group
            vars:
                "": null
        description: 'Brings up a message modal'
        params:
            -
                type:
                    names:
                        - String
                name: title
            -
                type:
                    names:
                        - String
                name: body
            -
                type:
                    names:
                        - function
                name: onClickOK
            -
                type:
                    names:
                        - String
                name: group
        name: messageModal
        longname: HashBrown.Client.Helpers.UIHelper.messageModal
        kind: function
        memberof: HashBrown.Client.Helpers.UIHelper
        scope: static
    -
        comment: "/**\n     * Brings up an iframe modal\n     *\n     * @param {String} title\n     * @param {String} url\n     */"
        meta:
            range:
                - 18665
                - 18926
            filename: UIHelper.js
            lineno: 540
            columnno: 4
            path: /home/mrzapp/Development/Web/hashbrown-cms/src/Client/Helpers
            code:
                id: astnode100004426
                name: UIHelper.iframeModal
                type: MethodDefinition
                paramnames:
                    - title
                    - url
            vars:
                "": null
        description: 'Brings up an iframe modal'
        params:
            -
                type:
                    names:
                        - String
                name: title
            -
                type:
                    names:
                        - String
                name: url
        name: iframeModal
        longname: HashBrown.Client.Helpers.UIHelper.iframeModal
        kind: function
        memberof: HashBrown.Client.Helpers.UIHelper
        scope: static
    -
        comment: "/**\n     * Brings up a confirm modal\n     *\n     * @param {String} type\n     * @param {String} title\n     * @param {String} body\n     * @param {Function} onSubmit\n     */"
        meta:
            range:
                - 19107
                - 19444
            filename: UIHelper.js
            lineno: 560
            columnno: 4
            path: /home/mrzapp/Development/Web/hashbrown-cms/src/Client/Helpers
            code:
                id: astnode100004464
                name: UIHelper.confirmModal
                type: MethodDefinition
                paramnames:
                    - type
                    - title
                    - body
                    - onSubmit
                    - onCancel
            vars:
                "": null
        description: 'Brings up a confirm modal'
        params:
            -
                type:
                    names:
                        - String
                name: type
            -
                type:
                    names:
                        - String
                name: title
            -
                type:
                    names:
                        - String
                name: body
            -
                type:
                    names:
                        - function
                name: onSubmit
        name: confirmModal
        longname: HashBrown.Client.Helpers.UIHelper.confirmModal
        kind: function
        memberof: HashBrown.Client.Helpers.UIHelper
        scope: static
    -
        comment: "/**\n     * Creates a context menu\n     */"
        meta:
            range:
                - 19496
                - 22473
            filename: UIHelper.js
            lineno: 576
            columnno: 4
            path: /home/mrzapp/Development/Web/hashbrown-cms/src/Client/Helpers
            code:
                id: astnode100004513
                name: UIHelper.context
                type: MethodDefinition
                paramnames:
                    - element
                    - items
            vars:
                "": null
        description: 'Creates a context menu'
        name: context
        longname: HashBrown.Client.Helpers.UIHelper.context
        kind: function
        memberof: HashBrown.Client.Helpers.UIHelper
        scope: static
        params: []
shortname: UIHelper
layout: docPage
permalink: /docs/hashbrown/client/helpers/uihelper/
title: 'API: UIHelper'
description: 'A UI helper for creating and handling common interface behaviours'

---