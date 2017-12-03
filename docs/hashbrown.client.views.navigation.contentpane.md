---
comment: "/**\n * The Content navbar pane\n * \n * @memberof HashBrown.Client.Views.Navigation\n */"
meta:
    range:
        - 441
        - 14293
    filename: ContentPane.js
    lineno: 16
    columnno: 0
    path: /home/mrzapp/Development/Web/hashbrown-cms/src/Client/Views/Navigation
    code:
        id: astnode100030259
        name: ContentPane
        type: ClassDeclaration
        paramnames: []
classdesc: 'The Content navbar pane'
memberof: HashBrown.Client.Views.Navigation
name: ContentPane
longname: HashBrown.Client.Views.Navigation.ContentPane
kind: class
scope: static
methods:
    -
        comment: "/**\n     * Event: Change parent\n     */"
        meta:
            range:
                - 528
                - 1189
            filename: ContentPane.js
            lineno: 20
            columnno: 4
            path: /home/mrzapp/Development/Web/hashbrown-cms/src/Client/Views/Navigation
            code:
                id: astnode100030263
                name: ContentPane.onChangeDirectory
                type: MethodDefinition
                paramnames:
                    - id
                    - parentId
            vars:
                "": null
        description: 'Event: Change parent'
        name: onChangeDirectory
        longname: HashBrown.Client.Views.Navigation.ContentPane.onChangeDirectory
        kind: function
        memberof: HashBrown.Client.Views.Navigation.ContentPane
        scope: static
        params: []
    -
        comment: "/**\n     * Event: Change sort index\n     */"
        meta:
            range:
                - 1243
                - 1959
            filename: ContentPane.js
            lineno: 50
            columnno: 4
            path: /home/mrzapp/Development/Web/hashbrown-cms/src/Client/Views/Navigation
            code:
                id: astnode100030333
                name: ContentPane.onChangeSortIndex
                type: MethodDefinition
                paramnames:
                    - id
                    - newIndex
                    - parentId
            vars:
                "": null
        description: 'Event: Change sort index'
        name: onChangeSortIndex
        longname: HashBrown.Client.Views.Navigation.ContentPane.onChangeSortIndex
        kind: function
        memberof: HashBrown.Client.Views.Navigation.ContentPane
        scope: static
        params: []
    -
        comment: "/**\n     * Event: Click pull content\n     */"
        meta:
            range:
                - 2014
                - 2783
            filename: ContentPane.js
            lineno: 81
            columnno: 4
            path: /home/mrzapp/Development/Web/hashbrown-cms/src/Client/Views/Navigation
            code:
                id: astnode100030410
                name: ContentPane.onClickPullContent
                type: MethodDefinition
                paramnames: []
            vars:
                "": null
        description: 'Event: Click pull content'
        name: onClickPullContent
        longname: HashBrown.Client.Views.Navigation.ContentPane.onClickPullContent
        kind: function
        memberof: HashBrown.Client.Views.Navigation.ContentPane
        scope: static
        params: []
    -
        comment: "/**\n     * Event: Click push content\n     */"
        meta:
            range:
                - 2842
                - 3385
            filename: ContentPane.js
            lineno: 112
            columnno: 4
            path: /home/mrzapp/Development/Web/hashbrown-cms/src/Client/Views/Navigation
            code:
                id: astnode100030515
                name: ContentPane.onClickPushContent
                type: MethodDefinition
                paramnames: []
            vars:
                "": null
        description: 'Event: Click push content'
        name: onClickPushContent
        longname: HashBrown.Client.Views.Navigation.ContentPane.onClickPushContent
        kind: function
        memberof: HashBrown.Client.Views.Navigation.ContentPane
        scope: static
        params: []
    -
        comment: "/**\n     * Event: Click new content\n     *\n     * @param {String} parentId\n     */"
        meta:
            range:
                - 3478
                - 6780
            filename: ContentPane.js
            lineno: 138
            columnno: 4
            path: /home/mrzapp/Development/Web/hashbrown-cms/src/Client/Views/Navigation
            code:
                id: astnode100030578
                name: ContentPane.onClickNewContent
                type: MethodDefinition
                paramnames:
                    - parentId
                    - asSibling
            vars:
                "": null
        description: 'Event: Click new content'
        params:
            -
                type:
                    names:
                        - String
                name: parentId
        name: onClickNewContent
        longname: HashBrown.Client.Views.Navigation.ContentPane.onClickNewContent
        kind: function
        memberof: HashBrown.Client.Views.Navigation.ContentPane
        scope: static
    -
        comment: "/**\n     * Render Content publishing modal\n     *\n     * @param {Content} content\n     */"
        meta:
            range:
                - 6880
                - 7910
            filename: ContentPane.js
            lineno: 227
            columnno: 4
            path: /home/mrzapp/Development/Web/hashbrown-cms/src/Client/Views/Navigation
            code:
                id: astnode100030810
                name: ContentPane.renderPublishingModal
                type: MethodDefinition
                paramnames:
                    - content
            vars:
                "": null
        description: 'Render Content publishing modal'
        params:
            -
                type:
                    names:
                        - Content
                name: content
        name: renderPublishingModal
        longname: HashBrown.Client.Views.Navigation.ContentPane.renderPublishingModal
        kind: function
        memberof: HashBrown.Client.Views.Navigation.ContentPane
        scope: static
    -
        comment: "/**\n     * Event: Click Content settings\n     */"
        meta:
            range:
                - 7969
                - 8201
            filename: ContentPane.js
            lineno: 263
            columnno: 4
            path: /home/mrzapp/Development/Web/hashbrown-cms/src/Client/Views/Navigation
            code:
                id: astnode100030920
                name: ContentPane.onClickContentPublishing
                type: MethodDefinition
                paramnames: []
            vars:
                "": null
        description: 'Event: Click Content settings'
        name: onClickContentPublishing
        longname: HashBrown.Client.Views.Navigation.ContentPane.onClickContentPublishing
        kind: function
        memberof: HashBrown.Client.Views.Navigation.ContentPane
        scope: static
        params: []
    -
        comment: "/**\n     * Event: Click remove content\n     *\n     * @param {Boolean} shouldUnpublish\n     */"
        meta:
            range:
                - 8305
                - 11346
            filename: ContentPane.js
            lineno: 277
            columnno: 4
            path: /home/mrzapp/Development/Web/hashbrown-cms/src/Client/Views/Navigation
            code:
                id: astnode100030948
                name: ContentPane.onClickRemoveContent
                type: MethodDefinition
                paramnames:
                    - shouldUnpublish
            vars:
                "": null
        description: 'Event: Click remove content'
        params:
            -
                type:
                    names:
                        - Boolean
                name: shouldUnpublish
        name: onClickRemoveContent
        longname: HashBrown.Client.Views.Navigation.ContentPane.onClickRemoveContent
        kind: function
        memberof: HashBrown.Client.Views.Navigation.ContentPane
        scope: static
    -
        comment: "/**\n     * Init\n     */"
        meta:
            range:
                - 11380
                - 14291
            filename: ContentPane.js
            lineno: 358
            columnno: 4
            path: /home/mrzapp/Development/Web/hashbrown-cms/src/Client/Views/Navigation
            code:
                id: astnode100031215
                name: ContentPane.init
                type: MethodDefinition
                paramnames: []
            vars:
                "": null
        description: Init
        name: init
        longname: HashBrown.Client.Views.Navigation.ContentPane.init
        kind: function
        memberof: HashBrown.Client.Views.Navigation.ContentPane
        scope: static
        params: []
shortname: ContentPane
layout: docPage
permalink: /docs/hashbrown/client/views/navigation/contentpane/
title: 'API: ContentPane'
description: 'The Content navbar pane'

---