---
comment: "/**\n * A helper for debugging\n *\n * @memberof HashBrown.Common.Helpers\n */"
meta:
    range:
        - 112
        - 3261
    filename: DebugHelper.js
    lineno: 10
    columnno: 0
    path: /home/mrzapp/Development/Web/hashbrown-cms/src/Common/Helpers
    code:
        id: astnode100044078
        name: DebugHelper
        type: ClassDeclaration
        paramnames: []
classdesc: 'A helper for debugging'
memberof: HashBrown.Common.Helpers
name: DebugHelper
longname: HashBrown.Common.Helpers.DebugHelper
kind: class
scope: static
methods:
    -
        comment: "/**\n     * Event: Log\n     *\n     * @param {String} dateString\n     * @param {String} senderString\n     * @param {String} message\n     * @param {String} type\n     */"
        meta:
            range:
                - 306
                - 536
            filename: DebugHelper.js
            lineno: 19
            columnno: 4
            path: /home/mrzapp/Development/Web/hashbrown-cms/src/Common/Helpers
            code:
                id: astnode100044081
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
        longname: HashBrown.Common.Helpers.DebugHelper.onLog
        kind: function
        memberof: HashBrown.Common.Helpers.DebugHelper
        scope: static
    -
        comment: "/**\n     * Gets the date string\n     *\n     * @returns {String} date\n     */"
        meta:
            range:
                - 623
                - 1627
            filename: DebugHelper.js
            lineno: 32
            columnno: 4
            path: /home/mrzapp/Development/Web/hashbrown-cms/src/Common/Helpers
            code:
                id: astnode100044119
                name: DebugHelper.getDateString
                type: MethodDefinition
                paramnames: []
            vars:
                "": null
        description: 'Gets the date string'
        returns:
            -
                type:
                    names:
                        - String
                description: date
        name: getDateString
        longname: HashBrown.Common.Helpers.DebugHelper.getDateString
        kind: function
        memberof: HashBrown.Common.Helpers.DebugHelper
        scope: static
        params: []
    -
        comment: "/**\n     * Parse sender\n     *\n     * @param {Object} sender\n     *\n     * @returns {String} name\n     */"
        meta:
            range:
                - 1747
                - 2257
            filename: DebugHelper.js
            lineno: 83
            columnno: 4
            path: /home/mrzapp/Development/Web/hashbrown-cms/src/Common/Helpers
            code:
                id: astnode100044249
                name: DebugHelper.parseSender
                type: MethodDefinition
                paramnames:
                    - sender
                    - ignoreLast
            vars:
                "": null
        description: 'Parse sender'
        params:
            -
                type:
                    names:
                        - Object
                name: sender
        returns:
            -
                type:
                    names:
                        - String
                description: name
        name: parseSender
        longname: HashBrown.Common.Helpers.DebugHelper.parseSender
        kind: function
        memberof: HashBrown.Common.Helpers.DebugHelper
        scope: static
    -
        comment: "/**\n     * Logs a message\n     *\n     * @param {String} message\n     * @param {Object} sender\n     * @param {Number} verbosity\n     */"
        meta:
            range:
                - 2406
                - 2746
            filename: DebugHelper.js
            lineno: 112
            columnno: 4
            path: /home/mrzapp/Development/Web/hashbrown-cms/src/Common/Helpers
            code:
                id: astnode100044307
                name: DebugHelper.log
                type: MethodDefinition
                paramnames:
                    - message
                    - sender
                    - verbosity
            vars:
                "": null
        description: 'Logs a message'
        params:
            -
                type:
                    names:
                        - String
                name: message
            -
                type:
                    names:
                        - Object
                name: sender
            -
                type:
                    names:
                        - Number
                name: verbosity
                defaultvalue: 1
        name: log
        longname: HashBrown.Common.Helpers.DebugHelper.log
        kind: function
        memberof: HashBrown.Common.Helpers.DebugHelper
        scope: static
    -
        comment: "/**\n     * Shows an error\n     *\n     * @param {String} message\n     * @param {Object} sender\n     */"
        meta:
            range:
                - 2858
                - 3087
            filename: DebugHelper.js
            lineno: 131
            columnno: 4
            path: /home/mrzapp/Development/Web/hashbrown-cms/src/Common/Helpers
            code:
                id: astnode100044356
                name: DebugHelper.error
                type: MethodDefinition
                paramnames:
                    - message
                    - sender
            vars:
                "": null
        description: 'Shows an error'
        params:
            -
                type:
                    names:
                        - String
                name: message
            -
                type:
                    names:
                        - Object
                name: sender
        name: error
        longname: HashBrown.Common.Helpers.DebugHelper.error
        kind: function
        memberof: HashBrown.Common.Helpers.DebugHelper
        scope: static
    -
        comment: "/**\n     * Shows a warning\n     */"
        meta:
            range:
                - 3132
                - 3259
            filename: DebugHelper.js
            lineno: 142
            columnno: 4
            path: /home/mrzapp/Development/Web/hashbrown-cms/src/Common/Helpers
            code:
                id: astnode100044393
                name: DebugHelper.warning
                type: MethodDefinition
                paramnames:
                    - message
                    - sender
            vars:
                "": null
        description: 'Shows a warning'
        name: warning
        longname: HashBrown.Common.Helpers.DebugHelper.warning
        kind: function
        memberof: HashBrown.Common.Helpers.DebugHelper
        scope: static
        params: []
shortname: DebugHelper
layout: docPage
permalink: /docs/hashbrown/common/helpers/debughelper/
title: 'API: DebugHelper'
description: 'A helper for debugging'

---