---
comment: "/**\n * A helper class for reading and writing config files\n *\n * @memberof HashBrown.Server.Helpers\n */"
meta:
    range:
        - 144
        - 1665
    filename: ConfigHelper.js
    lineno: 10
    columnno: 0
    path: /home/mrzapp/Development/Web/hashbrown-cms/src/Server/Helpers
    code:
        id: astnode100061707
        name: ConfigHelper
        type: ClassDeclaration
        paramnames: []
classdesc: 'A helper class for reading and writing config files'
memberof: HashBrown.Server.Helpers
name: ConfigHelper
longname: HashBrown.Server.Helpers.ConfigHelper
kind: class
scope: static
methods:
    -
        comment: "/**\n     * Gets a particular config section\n     *\n     * @param {String} name\n     *\n     * @returns {Promise} Config object\n     */"
        meta:
            range:
                - 307
                - 1133
            filename: ConfigHelper.js
            lineno: 18
            columnno: 4
            path: /home/mrzapp/Development/Web/hashbrown-cms/src/Server/Helpers
            code:
                id: astnode100061710
                name: ConfigHelper.get
                type: MethodDefinition
                paramnames:
                    - name
            vars:
                "": null
        description: 'Gets a particular config section'
        params:
            -
                type:
                    names:
                        - String
                name: name
        returns:
            -
                type:
                    names:
                        - Promise
                description: 'Config object'
        name: get
        longname: HashBrown.Server.Helpers.ConfigHelper.get
        kind: function
        memberof: HashBrown.Server.Helpers.ConfigHelper
        scope: static
    -
        comment: "/**\n     * Gets a particular config section synchronously\n     * This method throws away all error messages\n     *\n     * @param {String} name\n     *\n     * @returns {Object} Config object\n     */"
        meta:
            range:
                - 1344
                - 1663
            filename: ConfigHelper.js
            lineno: 55
            columnno: 4
            path: /home/mrzapp/Development/Web/hashbrown-cms/src/Server/Helpers
            code:
                id: astnode100061788
                name: ConfigHelper.getSync
                type: MethodDefinition
                paramnames:
                    - name
            vars:
                "": null
        description: "Gets a particular config section synchronously\nThis method throws away all error messages"
        params:
            -
                type:
                    names:
                        - String
                name: name
        returns:
            -
                type:
                    names:
                        - Object
                description: 'Config object'
        name: getSync
        longname: HashBrown.Server.Helpers.ConfigHelper.getSync
        kind: function
        memberof: HashBrown.Server.Helpers.ConfigHelper
        scope: static
shortname: ConfigHelper
layout: docPage
permalink: /docs/hashbrown/server/helpers/confighelper/
title: 'API: ConfigHelper'
description: 'A helper class for reading and writing config files'

---