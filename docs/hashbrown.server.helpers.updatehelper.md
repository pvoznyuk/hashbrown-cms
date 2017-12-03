---
comment: "/**\n * The helper class for system updates\n *\n * @memberof HashBrown.Server.Helpers\n */"
meta:
    range:
        - 323
        - 6083
    filename: UpdateHelper.js
    lineno: 16
    columnno: 0
    path: /home/mrzapp/Development/Web/hashbrown-cms/src/Server/Helpers
    code:
        id: astnode100074015
        name: UpdateHelper
        type: ClassDeclaration
        paramnames: []
classdesc: 'The helper class for system updates'
memberof: HashBrown.Server.Helpers
name: UpdateHelper
longname: HashBrown.Server.Helpers.UpdateHelper
kind: class
scope: static
methods:
    -
        comment: "/**\n     * Check for updates\n     *\n     * @returns {Promise} Status info\n     */"
        meta:
            range:
                - 434
                - 1182
            filename: UpdateHelper.js
            lineno: 22
            columnno: 4
            path: /home/mrzapp/Development/Web/hashbrown-cms/src/Server/Helpers
            code:
                id: astnode100074018
                name: UpdateHelper.check
                type: MethodDefinition
                paramnames: []
            vars:
                "": null
        description: 'Check for updates'
        returns:
            -
                type:
                    names:
                        - Promise
                description: 'Status info'
        name: check
        longname: HashBrown.Server.Helpers.UpdateHelper.check
        kind: function
        memberof: HashBrown.Server.Helpers.UpdateHelper
        scope: static
        params: []
    -
        comment: "/**\n     * Checks if version a is behind version b\n     *\n     * @param {String} a\n     * @param {String} b\n     *\n     * @returns {Boolean} Whether version a is behind version b\n     */"
        meta:
            range:
                - 1382
                - 1670
            filename: UpdateHelper.js
            lineno: 50
            columnno: 4
            path: /home/mrzapp/Development/Web/hashbrown-cms/src/Server/Helpers
            code:
                id: astnode100074089
                name: UpdateHelper.isVersionBehind
                type: MethodDefinition
                paramnames:
                    - a
                    - b
            vars:
                "": null
        description: 'Checks if version a is behind version b'
        params:
            -
                type:
                    names:
                        - String
                name: a
            -
                type:
                    names:
                        - String
                name: b
        returns:
            -
                type:
                    names:
                        - Boolean
                description: 'Whether version a is behind version b'
        name: isVersionBehind
        longname: HashBrown.Server.Helpers.UpdateHelper.isVersionBehind
        kind: function
        memberof: HashBrown.Server.Helpers.UpdateHelper
        scope: static
    -
        comment: "/**\n     * Perform update\n     *\n     * @returns {Promise} Status info\n     */"
        meta:
            range:
                - 1759
                - 6081
            filename: UpdateHelper.js
            lineno: 66
            columnno: 4
            path: /home/mrzapp/Development/Web/hashbrown-cms/src/Server/Helpers
            code:
                id: astnode100074139
                name: UpdateHelper.update
                type: MethodDefinition
                paramnames: []
            vars:
                "": null
        description: 'Perform update'
        returns:
            -
                type:
                    names:
                        - Promise
                description: 'Status info'
        name: update
        longname: HashBrown.Server.Helpers.UpdateHelper.update
        kind: function
        memberof: HashBrown.Server.Helpers.UpdateHelper
        scope: static
        params: []
shortname: UpdateHelper
layout: docPage
permalink: /docs/hashbrown/server/helpers/updatehelper/
title: 'API: UpdateHelper'
description: 'The helper class for system updates'

---