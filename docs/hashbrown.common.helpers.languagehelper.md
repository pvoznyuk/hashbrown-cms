---
comment: "/**\n * A helper for language\n *\n * @memberof HashBrown.Common.Helpers\n */"
meta:
    range:
        - 89
        - 5052
    filename: LanguageHelper.js
    lineno: 8
    columnno: 0
    path: /home/mrzapp/Development/Web/hashbrown-cms/src/Common/Helpers
    code:
        id: astnode100044425
        name: LanguageHelper
        type: ClassDeclaration
        paramnames: []
classdesc: 'A helper for language'
memberof: HashBrown.Common.Helpers
name: LanguageHelper
longname: HashBrown.Common.Helpers.LanguageHelper
kind: class
scope: static
methods:
    -
        comment: "/**\n     * Gets all selected languages\n     *\n     * @param {String} project\n     *\n     * @returns {Array} List of language names\n     */"
        meta:
            range:
                - 259
                - 380
            filename: LanguageHelper.js
            lineno: 16
            columnno: 4
            path: /home/mrzapp/Development/Web/hashbrown-cms/src/Common/Helpers
            code:
                id: astnode100044428
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
        longname: HashBrown.Common.Helpers.LanguageHelper.getLanguages
        kind: function
        memberof: HashBrown.Common.Helpers.LanguageHelper
        scope: static
    -
        comment: "/**\n     * Sets all languages\n     *\n     * @param {String} project\n     * @param {Array} languages\n     *\n     * @returns {Promise} Promise\n     */"
        meta:
            range:
                - 543
                - 724
            filename: LanguageHelper.js
            lineno: 30
            columnno: 4
            path: /home/mrzapp/Development/Web/hashbrown-cms/src/Common/Helpers
            code:
                id: astnode100044445
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
                description: Promise
        name: setLanguages
        longname: HashBrown.Common.Helpers.LanguageHelper.setLanguages
        kind: function
        memberof: HashBrown.Common.Helpers.LanguageHelper
        scope: static
    -
        comment: "/**\n     * Gets localised sets of properties for a Content object\n     *\n     * @param {String} project\n     * @param {String} environment\n     * @param {Content} content\n     *\n     * @return {Promise} Properties\n     */"
        meta:
            range:
                - 956
                - 1552
            filename: LanguageHelper.js
            lineno: 46
            columnno: 4
            path: /home/mrzapp/Development/Web/hashbrown-cms/src/Common/Helpers
            code:
                id: astnode100044468
                name: LanguageHelper.getAllLocalizedPropertySets
                type: MethodDefinition
                paramnames:
                    - project
                    - environment
                    - content
            vars:
                "": null
        description: 'Gets localised sets of properties for a Content object'
        params:
            -
                type:
                    names:
                        - String
                name: project
            -
                type:
                    names:
                        - String
                name: environment
            -
                type:
                    names:
                        - Content
                name: content
        returns:
            -
                type:
                    names:
                        - Promise
                description: Properties
        name: getAllLocalizedPropertySets
        longname: HashBrown.Common.Helpers.LanguageHelper.getAllLocalizedPropertySets
        kind: function
        memberof: HashBrown.Common.Helpers.LanguageHelper
        scope: static
    -
        comment: "/**\n     * Gets all languages\n     *\n     * @returns {Array} List of language names\n     */"
        meta:
            range:
                - 1658
                - 5050
            filename: LanguageHelper.js
            lineno: 70
            columnno: 4
            path: /home/mrzapp/Development/Web/hashbrown-cms/src/Common/Helpers
            code:
                id: astnode100044539
                name: LanguageHelper.getLanguageOptions
                type: MethodDefinition
                paramnames: []
            vars:
                "": null
        description: 'Gets all languages'
        returns:
            -
                type:
                    names:
                        - Array
                description: 'List of language names'
        name: getLanguageOptions
        longname: HashBrown.Common.Helpers.LanguageHelper.getLanguageOptions
        kind: function
        memberof: HashBrown.Common.Helpers.LanguageHelper
        scope: static
        params: []
shortname: LanguageHelper
layout: docPage
permalink: /docs/hashbrown/common/helpers/languagehelper/
title: 'API: LanguageHelper'
description: 'A helper for language'

---