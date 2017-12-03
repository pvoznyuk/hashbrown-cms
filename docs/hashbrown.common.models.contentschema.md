---
comment: "/**\n * Schema for content nodes\n *\n * @memberof HashBrown.Common.Models\n */"
meta:
    range:
        - 126
        - 1188
    filename: ContentSchema.js
    lineno: 10
    columnno: 0
    path: /home/mrzapp/Development/Web/hashbrown-cms/src/Common/Models
    code:
        id: astnode100046464
        name: ContentSchema
        type: ClassDeclaration
        paramnames:
            - properties
classdesc: 'Schema for content nodes'
memberof: HashBrown.Common.Models
name: ContentSchema
longname: HashBrown.Common.Models.ContentSchema
kind: class
scope: static
params: []
methods:
    -
        comment: "/**\n     * Checks the format of the params\n     *\n     * @params {Object} params\n     *\n     * @returns {Object} Params\n     */"
        meta:
            range:
                - 713
                - 914
            filename: ContentSchema.js
            lineno: 34
            columnno: 4
            path: /home/mrzapp/Development/Web/hashbrown-cms/src/Common/Models
            code:
                id: astnode100046535
                name: ContentSchema.paramsCheck
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
        longname: HashBrown.Common.Models.ContentSchema.paramsCheck
        kind: function
        memberof: HashBrown.Common.Models.ContentSchema
        scope: static
        params: []
    -
        comment: "/**\n     * Checks whether a tab is the default one\n     *\n     * @param {String} tabId\n     *\n     * @returns {Boolean} Is the tab default\n     */"
        meta:
            range:
                - 1071
                - 1186
            filename: ContentSchema.js
            lineno: 48
            columnno: 4
            path: /home/mrzapp/Development/Web/hashbrown-cms/src/Common/Models
            code:
                id: astnode100046574
                name: 'ContentSchema#isDefaultTab'
                type: MethodDefinition
                paramnames:
                    - tabId
            vars:
                "": null
        description: 'Checks whether a tab is the default one'
        params:
            -
                type:
                    names:
                        - String
                name: tabId
        returns:
            -
                type:
                    names:
                        - Boolean
                description: 'Is the tab default'
        name: isDefaultTab
        longname: 'HashBrown.Common.Models.ContentSchema#isDefaultTab'
        kind: function
        memberof: HashBrown.Common.Models.ContentSchema
        scope: instance
shortname: ContentSchema
layout: docPage
permalink: /docs/hashbrown/common/models/contentschema/
title: 'API: ContentSchema'
description: 'Schema for content nodes'

---