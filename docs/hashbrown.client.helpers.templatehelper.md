---
comment: "/**\n * A helper class for Template resources\n *\n * @memberof HashBrown.Client.Helpers\n */"
meta:
    range:
        - 105
        - 927
    filename: TemplateHelper.js
    lineno: 8
    columnno: 0
    path: /home/mrzapp/Development/Web/hashbrown-cms/src/Client/Helpers
    code:
        id: astnode100002657
        name: TemplateHelper
        type: ClassDeclaration
        paramnames: []
classdesc: 'A helper class for Template resources'
memberof: HashBrown.Client.Helpers
name: TemplateHelper
longname: HashBrown.Client.Helpers.TemplateHelper
kind: class
scope: static
methods:
    -
        comment: "/**\n     * Gets all templates\n     *\n     * @param {String} type\n     *\n     * @returns {Array} Templates\n     */"
        meta:
            range:
                - 250
                - 546
            filename: TemplateHelper.js
            lineno: 16
            columnno: 4
            path: /home/mrzapp/Development/Web/hashbrown-cms/src/Client/Helpers
            code:
                id: astnode100002660
                name: TemplateHelper.getAllTemplates
                type: MethodDefinition
                paramnames:
                    - type
            vars:
                "": null
        description: 'Gets all templates'
        params:
            -
                type:
                    names:
                        - String
                name: type
        returns:
            -
                type:
                    names:
                        - Array
                description: Templates
        name: getAllTemplates
        longname: HashBrown.Client.Helpers.TemplateHelper.getAllTemplates
        kind: function
        memberof: HashBrown.Client.Helpers.TemplateHelper
        scope: static
    -
        comment: "/**\n     * Gets a template by id\n     *\n     * @param {String} type\n     * @param {String} id\n     *\n     * @returns {Template} Template\n     */"
        meta:
            range:
                - 701
                - 925
            filename: TemplateHelper.js
            lineno: 38
            columnno: 4
            path: /home/mrzapp/Development/Web/hashbrown-cms/src/Client/Helpers
            code:
                id: astnode100002701
                name: TemplateHelper.getTemplate
                type: MethodDefinition
                paramnames:
                    - type
                    - id
            vars:
                "": null
        description: 'Gets a template by id'
        params:
            -
                type:
                    names:
                        - String
                name: type
            -
                type:
                    names:
                        - String
                name: id
        returns:
            -
                type:
                    names:
                        - Template
                description: Template
        name: getTemplate
        longname: HashBrown.Client.Helpers.TemplateHelper.getTemplate
        kind: function
        memberof: HashBrown.Client.Helpers.TemplateHelper
        scope: static
shortname: TemplateHelper
layout: docPage
permalink: /docs/hashbrown/client/helpers/templatehelper/
title: 'API: TemplateHelper'
description: 'A helper class for Template resources'

---