---
comment: "/**\n * A multi purpose dropdown\n *\n * @memberof HashBrown.Client.Views.Widgets\n */"
meta:
    range:
        - 135
        - 10632
    filename: Dropdown.js
    lineno: 10
    columnno: 0
    path: /home/mrzapp/Development/Web/hashbrown-cms/src/Client/Views/Widgets
    code:
        id: astnode100037765
        name: Dropdown
        type: ClassDeclaration
        paramnames:
            - params
classdesc: 'A multi purpose dropdown'
memberof: HashBrown.Client.Views.Widgets
name: Dropdown
longname: HashBrown.Client.Views.Widgets.Dropdown
kind: class
scope: static
description: 'A multi purpose dropdown'
params: []
methods:
    -
        comment: "/**\n     * Gets option icon\n     *\n     * @param {String} label\n     *\n     * @returns {String} Icon\n     */"
        meta:
            range:
                - 715
                - 1280
            filename: Dropdown.js
            lineno: 38
            columnno: 4
            path: /home/mrzapp/Development/Web/hashbrown-cms/src/Client/Views/Widgets
            code:
                id: astnode100037825
                name: 'Dropdown#getOptionIcon'
                type: MethodDefinition
                paramnames:
                    - label
            vars:
                "": null
        description: 'Gets option icon'
        params:
            -
                type:
                    names:
                        - String
                name: label
        returns:
            -
                type:
                    names:
                        - String
                description: Icon
        name: getOptionIcon
        longname: 'HashBrown.Client.Views.Widgets.Dropdown#getOptionIcon'
        kind: function
        memberof: HashBrown.Client.Views.Widgets.Dropdown
        scope: instance
    -
        comment: "/**\n     * Converts options into a flattened structure\n     *\n     * @returns {Object} Options\n     */"
        meta:
            range:
                - 1393
                - 3231
            filename: Dropdown.js
            lineno: 63
            columnno: 4
            path: /home/mrzapp/Development/Web/hashbrown-cms/src/Client/Views/Widgets
            code:
                id: astnode100037908
                name: 'Dropdown#getFlattenedOptions'
                type: MethodDefinition
                paramnames: []
            vars:
                "": null
        description: 'Converts options into a flattened structure'
        returns:
            -
                type:
                    names:
                        - Object
                description: Options
        name: getFlattenedOptions
        longname: 'HashBrown.Client.Views.Widgets.Dropdown#getFlattenedOptions'
        kind: function
        memberof: HashBrown.Client.Views.Widgets.Dropdown
        scope: instance
        params: []
    -
        comment: "/**\n     * Gets the current value label\n     *\n     * @returns {String} Value label\n     */"
        meta:
            range:
                - 3333
                - 4089
            filename: Dropdown.js
            lineno: 121
            columnno: 4
            path: /home/mrzapp/Development/Web/hashbrown-cms/src/Client/Views/Widgets
            code:
                id: astnode100038124
                name: 'Dropdown#getValueLabel'
                type: MethodDefinition
                paramnames: []
            vars:
                "": null
        description: 'Gets the current value label'
        returns:
            -
                type:
                    names:
                        - String
                description: 'Value label'
        name: getValueLabel
        longname: 'HashBrown.Client.Views.Widgets.Dropdown#getValueLabel'
        kind: function
        memberof: HashBrown.Client.Views.Widgets.Dropdown
        scope: instance
        params: []
    -
        comment: "/**\n     * Performs a sanity check of the value\n     */"
        meta:
            range:
                - 4155
                - 4375
            filename: Dropdown.js
            lineno: 155
            columnno: 4
            path: /home/mrzapp/Development/Web/hashbrown-cms/src/Client/Views/Widgets
            code:
                id: astnode100038232
                name: 'Dropdown#sanityCheck'
                type: MethodDefinition
                paramnames: []
            vars:
                "": null
        description: 'Performs a sanity check of the value'
        name: sanityCheck
        longname: 'HashBrown.Client.Views.Widgets.Dropdown#sanityCheck'
        kind: function
        memberof: HashBrown.Client.Views.Widgets.Dropdown
        scope: instance
        params: []
    -
        comment: "/**\n     * Updates all selected classes\n     */"
        meta:
            range:
                - 4433
                - 4888
            filename: Dropdown.js
            lineno: 166
            columnno: 4
            path: /home/mrzapp/Development/Web/hashbrown-cms/src/Client/Views/Widgets
            code:
                id: astnode100038276
                name: 'Dropdown#updateSelectedClasses'
                type: MethodDefinition
                paramnames: []
            vars:
                "": null
        description: 'Updates all selected classes'
        name: updateSelectedClasses
        longname: 'HashBrown.Client.Views.Widgets.Dropdown#updateSelectedClasses'
        kind: function
        memberof: HashBrown.Client.Views.Widgets.Dropdown
        scope: instance
        params: []
    -
        comment: "/**\n     * Updates all position classes\n     */"
        meta:
            range:
                - 4946
                - 5623
            filename: Dropdown.js
            lineno: 182
            columnno: 4
            path: /home/mrzapp/Development/Web/hashbrown-cms/src/Client/Views/Widgets
            code:
                id: astnode100038355
                name: 'Dropdown#updatePositionClasses'
                type: MethodDefinition
                paramnames: []
            vars:
                "": null
        description: 'Updates all position classes'
        name: updatePositionClasses
        longname: 'HashBrown.Client.Views.Widgets.Dropdown#updatePositionClasses'
        kind: function
        memberof: HashBrown.Client.Views.Widgets.Dropdown
        scope: instance
        params: []
    -
        comment: "/**\n     * Event: Change value\n     *\n     * @param {Object} newValue\n     */"
        meta:
            range:
                - 5711
                - 7143
            filename: Dropdown.js
            lineno: 206
            columnno: 4
            path: /home/mrzapp/Development/Web/hashbrown-cms/src/Client/Views/Widgets
            code:
                id: astnode100038452
                name: 'Dropdown#onChangeInternal'
                type: MethodDefinition
                paramnames:
                    - newValue
            vars:
                "": null
        description: 'Event: Change value'
        params:
            -
                type:
                    names:
                        - Object
                name: newValue
        name: onChangeInternal
        longname: 'HashBrown.Client.Views.Widgets.Dropdown#onChangeInternal'
        kind: function
        memberof: HashBrown.Client.Views.Widgets.Dropdown
        scope: instance
    -
        comment: "/**\n     * Event: Typeahead\n     *\n     * @param {String} query\n     */"
        meta:
            range:
                - 7225
                - 7692
            filename: Dropdown.js
            lineno: 266
            columnno: 4
            path: /home/mrzapp/Development/Web/hashbrown-cms/src/Client/Views/Widgets
            code:
                id: astnode100038595
                name: 'Dropdown#onTypeahead'
                type: MethodDefinition
                paramnames:
                    - query
            vars:
                "": null
        description: 'Event: Typeahead'
        params:
            -
                type:
                    names:
                        - String
                name: query
        name: onTypeahead
        longname: 'HashBrown.Client.Views.Widgets.Dropdown#onTypeahead'
        kind: function
        memberof: HashBrown.Client.Views.Widgets.Dropdown
        scope: instance
    -
        comment: "/**\n     * Toggles open/closed\n     *\n     * @param {Boolean} isOpen\n     */"
        meta:
            range:
                - 7779
                - 8319
            filename: Dropdown.js
            lineno: 286
            columnno: 4
            path: /home/mrzapp/Development/Web/hashbrown-cms/src/Client/Views/Widgets
            code:
                id: astnode100038677
                name: 'Dropdown#toggle'
                type: MethodDefinition
                paramnames:
                    - isOpen
            vars:
                "": null
        description: 'Toggles open/closed'
        params:
            -
                type:
                    names:
                        - Boolean
                name: isOpen
        name: toggle
        longname: 'HashBrown.Client.Views.Widgets.Dropdown#toggle'
        kind: function
        memberof: HashBrown.Client.Views.Widgets.Dropdown
        scope: instance
    -
        comment: "/**\n     * Template\n     */"
        meta:
            range:
                - 8357
                - 10630
            filename: Dropdown.js
            lineno: 310
            columnno: 4
            path: /home/mrzapp/Development/Web/hashbrown-cms/src/Client/Views/Widgets
            code:
                id: astnode100038748
                name: 'Dropdown#template'
                type: MethodDefinition
                paramnames: []
            vars:
                "": null
        description: Template
        name: template
        longname: 'HashBrown.Client.Views.Widgets.Dropdown#template'
        kind: function
        memberof: HashBrown.Client.Views.Widgets.Dropdown
        scope: instance
        params: []
shortname: Dropdown
layout: docPage
permalink: /docs/hashbrown/client/views/widgets/dropdown/
title: 'API: Dropdown'

---