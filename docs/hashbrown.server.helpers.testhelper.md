---
comment: "/**\n * The helpers class for system tests\n *\n * @memberof HashBrown.Server.Helpers\n */"
meta:
    range:
        - 538
        - 9089
    filename: TestHelper.js
    lineno: 16
    columnno: 0
    path: /home/mrzapp/Development/Web/hashbrown-cms/src/Server/Helpers
    code:
        id: astnode100073082
        name: TestHelper
        type: ClassDeclaration
        paramnames: []
classdesc: 'The helpers class for system tests'
memberof: HashBrown.Server.Helpers
name: TestHelper
longname: HashBrown.Server.Helpers.TestHelper
kind: class
scope: static
methods:
    -
        comment: "/**\n     * BackupHelper test\n     *\n     * @param {String} project\n     * @param {Function} onMessage\n     *\n     * @returns {Promise}\n     */"
        meta:
            range:
                - 708
                - 1671
            filename: TestHelper.js
            lineno: 25
            columnno: 4
            path: /home/mrzapp/Development/Web/hashbrown-cms/src/Server/Helpers
            code:
                id: astnode100073085
                name: TestHelper.testBackupHelper
                type: MethodDefinition
                paramnames:
                    - project
                    - onMessage
            vars:
                "": null
        description: 'BackupHelper test'
        params:
            -
                type:
                    names:
                        - String
                name: project
            -
                type:
                    names:
                        - function
                name: onMessage
        returns:
            -
                type:
                    names:
                        - Promise
        name: testBackupHelper
        longname: HashBrown.Server.Helpers.TestHelper.testBackupHelper
        kind: function
        memberof: HashBrown.Server.Helpers.TestHelper
        scope: static
    -
        comment: "/**\n     * ConnectionHelper test\n     *\n     * @param {String} project\n     * @param {String} environment\n     * @param {Function} onMessage\n     *\n     * @returns {Promise}\n     */"
        meta:
            range:
                - 1863
                - 3045
            filename: TestHelper.js
            lineno: 60
            columnno: 4
            path: /home/mrzapp/Development/Web/hashbrown-cms/src/Server/Helpers
            code:
                id: astnode100073203
                name: TestHelper.testConnectionHelper
                type: MethodDefinition
                paramnames:
                    - project
                    - environment
                    - onMessage
            vars:
                "": null
        description: 'ConnectionHelper test'
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
                        - function
                name: onMessage
        returns:
            -
                type:
                    names:
                        - Promise
        name: testConnectionHelper
        longname: HashBrown.Server.Helpers.TestHelper.testConnectionHelper
        kind: function
        memberof: HashBrown.Server.Helpers.TestHelper
        scope: static
    -
        comment: "/**\n     * FormHelper test\n     *\n     * @param {String} project\n     * @param {String} environment\n     * @param {Function} onMessage\n     *\n     * @returns {Promise}\n     */"
        meta:
            range:
                - 3231
                - 4431
            filename: TestHelper.js
            lineno: 94
            columnno: 4
            path: /home/mrzapp/Development/Web/hashbrown-cms/src/Server/Helpers
            code:
                id: astnode100073335
                name: TestHelper.testFormHelper
                type: MethodDefinition
                paramnames:
                    - project
                    - environment
                    - onMessage
            vars:
                "": null
        description: 'FormHelper test'
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
                        - function
                name: onMessage
        returns:
            -
                type:
                    names:
                        - Promise
        name: testFormHelper
        longname: HashBrown.Server.Helpers.TestHelper.testFormHelper
        kind: function
        memberof: HashBrown.Server.Helpers.TestHelper
        scope: static
    -
        comment: "/**\n     * ContentHelper test\n     *\n     * @param {String} project\n     * @param {String} environment\n     * @param {User} user\n     * @param {Function} onMessage\n     *\n     * @returns {Promise}\n     */"
        meta:
            range:
                - 4646
                - 5901
            filename: TestHelper.js
            lineno: 133
            columnno: 4
            path: /home/mrzapp/Development/Web/hashbrown-cms/src/Server/Helpers
            code:
                id: astnode100073494
                name: TestHelper.testContentHelper
                type: MethodDefinition
                paramnames:
                    - project
                    - environment
                    - user
                    - onMessage
            vars:
                "": null
        description: 'ContentHelper test'
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
                        - User
                name: user
            -
                type:
                    names:
                        - function
                name: onMessage
        returns:
            -
                type:
                    names:
                        - Promise
        name: testContentHelper
        longname: HashBrown.Server.Helpers.TestHelper.testContentHelper
        kind: function
        memberof: HashBrown.Server.Helpers.TestHelper
        scope: static
    -
        comment: "/**\n     * ProjectHelper test\n     *\n     * @param {User} user\n     * @param {Function} onMessage\n     *\n     * @returns {Promise}\n     */"
        meta:
            range:
                - 6054
                - 7347
            filename: TestHelper.js
            lineno: 172
            columnno: 4
            path: /home/mrzapp/Development/Web/hashbrown-cms/src/Server/Helpers
            code:
                id: astnode100073640
                name: TestHelper.testProjectHelper
                type: MethodDefinition
                paramnames:
                    - user
                    - onMessage
            vars:
                "": null
        description: 'ProjectHelper test'
        params:
            -
                type:
                    names:
                        - User
                name: user
            -
                type:
                    names:
                        - function
                name: onMessage
        returns:
            -
                type:
                    names:
                        - Promise
        name: testProjectHelper
        longname: HashBrown.Server.Helpers.TestHelper.testProjectHelper
        kind: function
        memberof: HashBrown.Server.Helpers.TestHelper
        scope: static
    -
        comment: "/**\n     * SchemaHelper test\n     *\n     * @param {String} project\n     * @param {String} environment\n     * @param {Function} onMessage\n     *\n     * @returns {Promise}\n     */"
        meta:
            range:
                - 7535
                - 9087
            filename: TestHelper.js
            lineno: 213
            columnno: 4
            path: /home/mrzapp/Development/Web/hashbrown-cms/src/Server/Helpers
            code:
                id: astnode100073802
                name: TestHelper.testSchemaHelper
                type: MethodDefinition
                paramnames:
                    - project
                    - environment
                    - onMessage
            vars:
                "": null
        description: 'SchemaHelper test'
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
                        - function
                name: onMessage
        returns:
            -
                type:
                    names:
                        - Promise
        name: testSchemaHelper
        longname: HashBrown.Server.Helpers.TestHelper.testSchemaHelper
        kind: function
        memberof: HashBrown.Server.Helpers.TestHelper
        scope: static
shortname: TestHelper
layout: docPage
permalink: /docs/hashbrown/server/helpers/testhelper/
title: 'API: TestHelper'
description: 'The helpers class for system tests'

---