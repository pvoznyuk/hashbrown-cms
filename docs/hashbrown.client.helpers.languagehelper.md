---
comment: "/**\n * The client side language helper\n *\n * @memberof HashBrown.Client.Helpers\n */"
meta:
    range:
        - 328
        - 1831
    filename: LanguageHelper.js
    lineno: 14
    columnno: 0
    path: /home/mrzapp/Development/Web/hashbrown-cms/src/Client/Helpers
    code:
        id: astnode100000719
        name: LanguageHelper
        type: ClassDeclaration
        paramnames: []
classdesc: 'The client side language helper'
memberof: HashBrown.Client.Helpers
name: LanguageHelper
longname: HashBrown.Client.Helpers.LanguageHelper
kind: class
scope: static
methods:
    -
        comment: "/**\n     * Gets all selected languages\n     *\n     * @param {String} project\n     *\n     * @returns {Array} List of language names\n     */"
        meta:
            range:
                - 527
                - 969
            filename: LanguageHelper.js
            lineno: 22
            columnno: 4
            path: /home/mrzapp/Development/Web/hashbrown-cms/src/Client/Helpers
            code:
                id: astnode100000723
                name: LanguageHelper.getLanguages
                type: MethodDefinition
                paramnames:
                    - project
            vars:
                "": null
        description: 'Gets all selected languages'
        params:
            -
                type:
                    names:
                        - String
                name: project
        returns:
            -
                type:
                    names:
                        - Array
                description: 'List of language names'
        name: getLanguages
        longname: HashBrown.Client.Helpers.LanguageHelper.getLanguages
        kind: function
        memberof: HashBrown.Client.Helpers.LanguageHelper
        scope: static
    -
        comment: "/**\n     * Gets all selected languages (sync)\n     *\n     * @param {String} project\n     *\n     * @returns {Array} List of language names\n     */"
        meta:
            range:
                - 1128
                - 1281
            filename: LanguageHelper.js
            lineno: 46
            columnno: 4
            path: /home/mrzapp/Development/Web/hashbrown-cms/src/Client/Helpers
            code:
                id: astnode100000783
                name: LanguageHelper.getLanguagesSync
                type: MethodDefinition
                paramnames:
                    - project
            vars:
                "": null
        description: 'Gets all selected languages (sync)'
        params:
            -
                type:
                    names:
                        - String
                name: project
        returns:
            -
                type:
                    names:
                        - Array
                description: 'List of language names'
        name: getLanguagesSync
        longname: HashBrown.Client.Helpers.LanguageHelper.getLanguagesSync
        kind: function
        memberof: HashBrown.Client.Helpers.LanguageHelper
        scope: static
    -
        comment: "/**\n     * Sets all languages\n     *\n     * @param {String} project\n     * @param {Array} languages\n     *\n     * @returns {Promise} promise\n     */"
        meta:
            range:
                - 1440
                - 1829
            filename: LanguageHelper.js
            lineno: 60
            columnno: 4
            path: /home/mrzapp/Development/Web/hashbrown-cms/src/Client/Helpers
            code:
                id: astnode100000803
                name: LanguageHelper.setLanguages
                type: MethodDefinition
                paramnames:
                    - project
                    - languages
            vars:
                "": null
        description: 'Sets all languages'
        params:
            -
                type:
                    names:
                        - String
                name: project
            -
                type:
                    names:
                        - Array
                name: languages
        returns:
            -
                type:
                    names:
                        - Promise
                description: promise
        name: setLanguages
        longname: HashBrown.Client.Helpers.LanguageHelper.setLanguages
        kind: function
        memberof: HashBrown.Client.Helpers.LanguageHelper
        scope: static
shortname: LanguageHelper
layout: docPage
permalink: /docs/hashbrown/client/helpers/languagehelper/
title: 'API: LanguageHelper'
description: 'The client side language helper'

---