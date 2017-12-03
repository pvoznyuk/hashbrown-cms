---
comment: "/**\n * The Connection class\n *\n * @memberof HashBrown.Common.Models\n */"
meta:
    range:
        - 241
        - 4839
    filename: Connection.js
    lineno: 14
    columnno: 0
    path: /home/mrzapp/Development/Web/hashbrown-cms/src/Common/Models
    code:
        id: astnode100045231
        name: Connection
        type: ClassDeclaration
        paramnames: []
classdesc: 'The Connection class'
memberof: HashBrown.Common.Models
name: Connection
longname: HashBrown.Common.Models.Connection
kind: class
scope: static
methods:
    -
        comment: "/**\n     * Structure\n     */"
        meta:
            range:
                - 314
                - 531
            filename: Connection.js
            lineno: 18
            columnno: 4
            path: /home/mrzapp/Development/Web/hashbrown-cms/src/Common/Models
            code:
                id: astnode100045235
                name: 'Connection#structure'
                type: MethodDefinition
                paramnames: []
            vars:
                "": null
        description: Structure
        name: structure
        longname: 'HashBrown.Common.Models.Connection#structure'
        kind: function
        memberof: HashBrown.Common.Models.Connection
        scope: instance
        params: []
    -
        comment: "/**\n     * Checks the format of the params\n     *\n     * @params {Object} params\n     *\n     * @returns {Object} Params\n     */"
        meta:
            range:
                - 669
                - 1641
            filename: Connection.js
            lineno: 35
            columnno: 4
            path: /home/mrzapp/Development/Web/hashbrown-cms/src/Common/Models
            code:
                id: astnode100045274
                name: Connection.paramsCheck
                type: MethodDefinition
                paramnames:
                    - params
            vars:
                "": null
        description: 'Checks the format of the params'
        tags:
            -
                originalTitle: params
                title: params
                text: '{Object} params'
                value: '{Object} params'
        returns:
            -
                type:
                    names:
                        - Object
                description: Params
        name: paramsCheck
        longname: HashBrown.Common.Models.Connection.paramsCheck
        kind: function
        memberof: HashBrown.Common.Models.Connection
        scope: static
        params: []
    -
        comment: "/**\n     * Gets preset settings\n     *\n     * @param {String} preset\n     * @param {Object} oldSettings\n     */"
        meta:
            range:
                - 1763
                - 4161
            filename: Connection.js
            lineno: 67
            columnno: 4
            path: /home/mrzapp/Development/Web/hashbrown-cms/src/Common/Models
            code:
                id: astnode100045441
                name: Connection.getPresetSettings
                type: MethodDefinition
                paramnames:
                    - preset
                    - oldSettings
            vars:
                "": null
        description: 'Gets preset settings'
        params:
            -
                type:
                    names:
                        - String
                name: preset
            -
                type:
                    names:
                        - Object
                name: oldSettings
        name: getPresetSettings
        longname: HashBrown.Common.Models.Connection.getPresetSettings
        kind: function
        memberof: HashBrown.Common.Models.Connection
        scope: static
    -
        comment: "/**\n     * Creates a new Connection object\n     *\n     * @return {Connection} connection\n     */"
        meta:
            range:
                - 4268
                - 4410
            filename: Connection.js
            lineno: 139
            columnno: 4
            path: /home/mrzapp/Development/Web/hashbrown-cms/src/Common/Models
            code:
                id: astnode100045579
                name: Connection.create
                type: MethodDefinition
                paramnames: []
            vars:
                "": null
        description: 'Creates a new Connection object'
        returns:
            -
                type:
                    names:
                        - Connection
                description: connection
        name: create
        longname: HashBrown.Common.Models.Connection.create
        kind: function
        memberof: HashBrown.Common.Models.Connection
        scope: static
        params: []
    -
        comment: "/**\n     * Gets the remote URL\n     *\n     * @param {Boolean} withSlash\n     *\n     * @returns {String} URL\n     */"
        meta:
            range:
                - 4536
                - 4837
            filename: Connection.js
            lineno: 153
            columnno: 4
            path: /home/mrzapp/Development/Web/hashbrown-cms/src/Common/Models
            code:
                id: astnode100045594
                name: 'Connection#getRemoteUrl'
                type: MethodDefinition
                paramnames:
                    - withSlash
            vars:
                "": null
        description: 'Gets the remote URL'
        params:
            -
                type:
                    names:
                        - Boolean
                name: withSlash
                defaultvalue: false
        returns:
            -
                type:
                    names:
                        - String
                description: URL
        name: getRemoteUrl
        longname: 'HashBrown.Common.Models.Connection#getRemoteUrl'
        kind: function
        memberof: HashBrown.Common.Models.Connection
        scope: instance
shortname: Connection
layout: docPage
permalink: /docs/hashbrown/common/models/connection/
title: 'API: Connection'
description: 'The Connection class'

---