---
comment: "/**\n * The helper class for debugging\n *\n * @memberof HashBrown.Server.Helpers\n */"
meta:
    range:
        - 185
        - 908
    filename: DebugHelper.js
    lineno: 12
    columnno: 0
    path: /home/mrzapp/Development/Web/hashbrown-cms/src/Server/Helpers
    code:
        id: astnode100065794
        name: DebugHelper
        type: ClassDeclaration
        paramnames: []
classdesc: 'The helper class for debugging'
memberof: HashBrown.Server.Helpers
name: DebugHelper
longname: HashBrown.Server.Helpers.DebugHelper
kind: class
scope: static
methods:
    -
        comment: "/**\n     * Event: Log\n     *\n     * @param {String} dateString\n     * @param {String} senderString\n     * @param {String} message\n     * @param {String} type\n     */"
        meta:
            range:
                - 405
                - 700
            filename: DebugHelper.js
            lineno: 21
            columnno: 4
            path: /home/mrzapp/Development/Web/hashbrown-cms/src/Server/Helpers
            code:
                id: astnode100065798
                name: DebugHelper.onLog
                type: MethodDefinition
                paramnames:
                    - dateString
                    - senderString
                    - message
                    - type
            vars:
                "": null
        description: 'Event: Log'
        params:
            -
                type:
                    names:
                        - String
                name: dateString
            -
                type:
                    names:
                        - String
                name: senderString
            -
                type:
                    names:
                        - String
                name: message
            -
                type:
                    names:
                        - String
                name: type
        name: onLog
        longname: HashBrown.Server.Helpers.DebugHelper.onLog
        kind: function
        memberof: HashBrown.Server.Helpers.DebugHelper
        scope: static
    -
        comment: "/**\n     * Sets a handler to log output\n     *\n     * @param {String} name\n     * @param {Function} handler\n     */"
        meta:
            range:
                - 826
                - 906
            filename: DebugHelper.js
            lineno: 37
            columnno: 4
            path: /home/mrzapp/Development/Web/hashbrown-cms/src/Server/Helpers
            code:
                id: astnode100065830
                name: DebugHelper.setLogHandler
                type: MethodDefinition
                paramnames:
                    - name
                    - handler
            vars:
                "": null
        description: 'Sets a handler to log output'
        params:
            -
                type:
                    names:
                        - String
                name: name
            -
                type:
                    names:
                        - function
                name: handler
        name: setLogHandler
        longname: HashBrown.Server.Helpers.DebugHelper.setLogHandler
        kind: function
        memberof: HashBrown.Server.Helpers.DebugHelper
        scope: static
shortname: DebugHelper
layout: docPage
permalink: /docs/hashbrown/server/helpers/debughelper/
title: 'API: DebugHelper'
description: 'The helper class for debugging'

---