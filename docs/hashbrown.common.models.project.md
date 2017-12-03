---
comment: "/**\n * The Project class\n *\n * @memberof HashBrown.Common.Models\n */"
meta:
    range:
        - 161
        - 2367
    filename: Project.js
    lineno: 11
    columnno: 0
    path: /home/mrzapp/Development/Web/hashbrown-cms/src/Common/Models
    code:
        id: astnode100048416
        name: Project
        type: ClassDeclaration
        paramnames:
            - params
classdesc: 'The Project class'
memberof: HashBrown.Common.Models
name: Project
longname: HashBrown.Common.Models.Project
kind: class
scope: static
params: []
methods:
    -
        comment: "/**\n     * Performs a sanity check of the params\n     *\n     * @param {Object} params\n     *\n     * @returns {Object} Params\n     */"
        meta:
            range:
                - 410
                - 1445
            filename: Project.js
            lineno: 23
            columnno: 4
            path: /home/mrzapp/Development/Web/hashbrown-cms/src/Common/Models
            code:
                id: astnode100048433
                name: Project.checkParams
                type: MethodDefinition
                paramnames:
                    - params
            vars:
                "": null
        description: 'Performs a sanity check of the params'
        params:
            -
                type:
                    names:
                        - Object
                name: params
        returns:
            -
                type:
                    names:
                        - Object
                description: Params
        name: checkParams
        longname: HashBrown.Common.Models.Project.checkParams
        kind: function
        memberof: HashBrown.Common.Models.Project
        scope: static
    -
        comment: "/**\n     * Defines the structure of this project\n     */"
        meta:
            range:
                - 1512
                - 1728
            filename: Project.js
            lineno: 57
            columnno: 4
            path: /home/mrzapp/Development/Web/hashbrown-cms/src/Common/Models
            code:
                id: astnode100048601
                name: 'Project#structure'
                type: MethodDefinition
                paramnames: []
            vars:
                "": null
        description: 'Defines the structure of this project'
        name: structure
        longname: 'HashBrown.Common.Models.Project#structure'
        kind: function
        memberof: HashBrown.Common.Models.Project
        scope: instance
        params: []
    -
        comment: "/**\n     * Creates a database safe name\n     *\n     * @param {String} name\n     *\n     * @returns {String} Safe name\n     */"
        meta:
            range:
                - 1863
                - 1969
            filename: Project.js
            lineno: 72
            columnno: 4
            path: /home/mrzapp/Development/Web/hashbrown-cms/src/Common/Models
            code:
                id: astnode100048644
                name: Project.safeName
                type: MethodDefinition
                paramnames:
                    - name
            vars:
                "": null
        description: 'Creates a database safe name'
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
                        - String
                description: 'Safe name'
        name: safeName
        longname: HashBrown.Common.Models.Project.safeName
        kind: function
        memberof: HashBrown.Common.Models.Project
        scope: static
    -
        comment: "/**\n     * Creates a new project\n     *\n     * @param {String} name\n     *\n     * @returns {Project} New Project\n     */"
        meta:
            range:
                - 2104
                - 2365
            filename: Project.js
            lineno: 83
            columnno: 4
            path: /home/mrzapp/Development/Web/hashbrown-cms/src/Common/Models
            code:
                id: astnode100048664
                name: Project.create
                type: MethodDefinition
                paramnames:
                    - name
            vars:
                "": null
        description: 'Creates a new project'
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
                        - Project
                description: 'New Project'
        name: create
        longname: HashBrown.Common.Models.Project.create
        kind: function
        memberof: HashBrown.Common.Models.Project
        scope: static
shortname: Project
layout: docPage
permalink: /docs/hashbrown/common/models/project/
title: 'API: Project'
description: 'The Project class'

---