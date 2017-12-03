---
comment: "/**\n * The helper class for languages\n *\n * @memberof HashBrown.Server.Helpers\n */"
meta:
    range:
        - 235
        - 1665
    filename: LanguageHelper.js
    lineno: 11
    columnno: 0
    path: /home/mrzapp/Development/Web/hashbrown-cms/src/Server/Helpers
    code:
        id: astnode100066320
        name: LanguageHelper
        type: ClassDeclaration
        paramnames: []
classdesc: 'The helper class for languages'
memberof: HashBrown.Server.Helpers
name: LanguageHelper
longname: HashBrown.Server.Helpers.LanguageHelper
kind: class
scope: static
methods:
    -
        comment: "/**\n     * Gets all selected languages\n     *\n     * @param {String} project\n     *\n     * @returns {Array} List of language names\n     */"
        meta:
            range:
                - 434
                - 813
            filename: LanguageHelper.js
            lineno: 19
            columnno: 4
            path: /home/mrzapp/Development/Web/hashbrown-cms/src/Server/Helpers
            code:
                id: astnode100066324
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
        longname: HashBrown.Server.Helpers.LanguageHelper.getLanguages
        kind: function
        memberof: HashBrown.Server.Helpers.LanguageHelper
        scope: static
    -
        comment: "/**\n     * Sets all languages\n     *\n     * @param {String} project\n     * @param {Array} languages\n     *\n     * @returns {Promise}\n     */"
        meta:
            range:
                - 968
                - 1663
            filename: LanguageHelper.js
            lineno: 42
            columnno: 4
            path: /home/mrzapp/Development/Web/hashbrown-cms/src/Server/Helpers
            code:
                id: astnode100066376
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
        name: setLanguages
        longname: HashBrown.Server.Helpers.LanguageHelper.setLanguages
        kind: function
        memberof: HashBrown.Server.Helpers.LanguageHelper
        scope: static
shortname: LanguageHelper
layout: docPage
permalink: /docs/hashbrown/server/helpers/languagehelper/
title: 'API: LanguageHelper'
description: 'The helper class for languages'

---