---
comment: "/**\n * The helper class for database operations\n *\n * @memberof HashBrown.Server.Helpers\n */"
meta:
    range:
        - 418
        - 17741
    filename: DatabaseHelper.js
    lineno: 18
    columnno: 0
    path: /home/mrzapp/Development/Web/hashbrown-cms/src/Server/Helpers
    code:
        id: astnode100064158
        name: DatabaseHelper
        type: ClassDeclaration
        paramnames: []
classdesc: 'The helper class for database operations'
memberof: HashBrown.Server.Helpers
name: DatabaseHelper
longname: HashBrown.Server.Helpers.DatabaseHelper
kind: class
scope: static
methods:
    -
        comment: "/**\n     * Inits the this database\n     *\n     * @param {String} databaseName\n     *\n     * @return {Promise} promise\n     */"
        meta:
            range:
                - 575
                - 1233
            filename: DatabaseHelper.js
            lineno: 26
            columnno: 4
            path: /home/mrzapp/Development/Web/hashbrown-cms/src/Server/Helpers
            code:
                id: astnode100064161
                name: DatabaseHelper.getDatabase
                type: MethodDefinition
                paramnames:
                    - databaseName
            vars:
                "": null
        description: 'Inits the this database'
        params:
            -
                type:
                    names:
                        - String
                name: databaseName
        returns:
            -
                type:
                    names:
                        - Promise
                description: promise
        name: getDatabase
        longname: HashBrown.Server.Helpers.DatabaseHelper.getDatabase
        kind: function
        memberof: HashBrown.Server.Helpers.DatabaseHelper
        scope: static
    -
        comment: "/**\n     * Restores a database\n     *\n     * @param {String} databaseName\n     * @param {String} timestamp\n     *\n     * @returns {Promise} Data string\n     */"
        meta:
            range:
                - 1407
                - 2775
            filename: DatabaseHelper.js
            lineno: 55
            columnno: 4
            path: /home/mrzapp/Development/Web/hashbrown-cms/src/Server/Helpers
            code:
                id: astnode100064217
                name: DatabaseHelper.restore
                type: MethodDefinition
                paramnames:
                    - databaseName
                    - timestamp
            vars:
                "": null
        description: 'Restores a database'
        params:
            -
                type:
                    names:
                        - String
                name: databaseName
            -
                type:
                    names:
                        - String
                name: timestamp
        returns:
            -
                type:
                    names:
                        - Promise
                description: 'Data string'
        name: restore
        longname: HashBrown.Server.Helpers.DatabaseHelper.restore
        kind: function
        memberof: HashBrown.Server.Helpers.DatabaseHelper
        scope: static
    -
        comment: "/**\n     * Dumps a database\n     *\n     * @param {String} databaseName\n     *\n     * @returns {Promise} Timestamp\n     */"
        meta:
            range:
                - 2910
                - 4415
            filename: DatabaseHelper.js
            lineno: 103
            columnno: 4
            path: /home/mrzapp/Development/Web/hashbrown-cms/src/Server/Helpers
            code:
                id: astnode100064376
                name: DatabaseHelper.dump
                type: MethodDefinition
                paramnames:
                    - databaseName
            vars:
                "": null
        description: 'Dumps a database'
        params:
            -
                type:
                    names:
                        - String
                name: databaseName
        returns:
            -
                type:
                    names:
                        - Promise
                description: Timestamp
        name: dump
        longname: HashBrown.Server.Helpers.DatabaseHelper.dump
        kind: function
        memberof: HashBrown.Server.Helpers.DatabaseHelper
        scope: static
    -
        comment: "/**\n     * Lists all collections in a database\n     *\n     * @param {String} databaseName\n     *\n     * @return {Promise} Array of collections\n     */"
        meta:
            range:
                - 4576
                - 5133
            filename: DatabaseHelper.js
            lineno: 161
            columnno: 4
            path: /home/mrzapp/Development/Web/hashbrown-cms/src/Server/Helpers
            code:
                id: astnode100064568
                name: DatabaseHelper.listCollections
                type: MethodDefinition
                paramnames:
                    - databaseName
            vars:
                "": null
        description: 'Lists all collections in a database'
        params:
            -
                type:
                    names:
                        - String
                name: databaseName
        returns:
            -
                type:
                    names:
                        - Promise
                description: 'Array of collections'
        name: listCollections
        longname: HashBrown.Server.Helpers.DatabaseHelper.listCollections
        kind: function
        memberof: HashBrown.Server.Helpers.DatabaseHelper
        scope: static
    -
        comment: "/**\n     * Lists all databases\n     *\n     * @returns {Promise} Array of databases\n     */"
        meta:
            range:
                - 5234
                - 6933
            filename: DatabaseHelper.js
            lineno: 185
            columnno: 4
            path: /home/mrzapp/Development/Web/hashbrown-cms/src/Server/Helpers
            code:
                id: astnode100064633
                name: DatabaseHelper.listDatabases
                type: MethodDefinition
                paramnames: []
            vars:
                "": null
        description: 'Lists all databases'
        returns:
            -
                type:
                    names:
                        - Promise
                description: 'Array of databases'
        name: listDatabases
        longname: HashBrown.Server.Helpers.DatabaseHelper.listDatabases
        kind: function
        memberof: HashBrown.Server.Helpers.DatabaseHelper
        scope: static
        params: []
    -
        comment: "/**\n     * Check if a database exists\n     *\n     * @param {String} databaseName\n     *\n     * @returns {Promise} Whether or not database exists\n     */"
        meta:
            range:
                - 7096
                - 7292
            filename: DatabaseHelper.js
            lineno: 236
            columnno: 4
            path: /home/mrzapp/Development/Web/hashbrown-cms/src/Server/Helpers
            code:
                id: astnode100064787
                name: DatabaseHelper.databaseExists
                type: MethodDefinition
                paramnames:
                    - databaseName
            vars:
                "": null
        description: 'Check if a database exists'
        params:
            -
                type:
                    names:
                        - String
                name: databaseName
        returns:
            -
                type:
                    names:
                        - Promise
                description: 'Whether or not database exists'
        name: databaseExists
        longname: HashBrown.Server.Helpers.DatabaseHelper.databaseExists
        kind: function
        memberof: HashBrown.Server.Helpers.DatabaseHelper
        scope: static
    -
        comment: "/**\n     * Check if a collection exists\n     *\n     * @param {String} databaseName\n     * @param {String} collectionName\n     *\n     * @returns {Promise} Whether or not collection exists\n     */"
        meta:
            range:
                - 7501
                - 7908
            filename: DatabaseHelper.js
            lineno: 251
            columnno: 4
            path: /home/mrzapp/Development/Web/hashbrown-cms/src/Server/Helpers
            code:
                id: astnode100064816
                name: DatabaseHelper.collectionExists
                type: MethodDefinition
                paramnames:
                    - databaseName
                    - collectionName
            vars:
                "": null
        description: 'Check if a collection exists'
        params:
            -
                type:
                    names:
                        - String
                name: databaseName
            -
                type:
                    names:
                        - String
                name: collectionName
        returns:
            -
                type:
                    names:
                        - Promise
                description: 'Whether or not collection exists'
        name: collectionExists
        longname: HashBrown.Server.Helpers.DatabaseHelper.collectionExists
        kind: function
        memberof: HashBrown.Server.Helpers.DatabaseHelper
        scope: static
    -
        comment: "/**\n     * Finds a single Mongo document\n     *\n     * @param {String} databaseName\n     * @param {String} collectionName\n     * @param {Object} query\n     * @param {Object} pattern\n     *\n     * @return {Promise} Document\n     */"
        meta:
            range:
                - 8149
                - 8859
            filename: DatabaseHelper.js
            lineno: 275
            columnno: 4
            path: /home/mrzapp/Development/Web/hashbrown-cms/src/Server/Helpers
            code:
                id: astnode100064861
                name: DatabaseHelper.findOne
                type: MethodDefinition
                paramnames:
                    - databaseName
                    - collectionName
                    - query
                    - pattern
            vars:
                "": null
        description: 'Finds a single Mongo document'
        params:
            -
                type:
                    names:
                        - String
                name: databaseName
            -
                type:
                    names:
                        - String
                name: collectionName
            -
                type:
                    names:
                        - Object
                name: query
            -
                type:
                    names:
                        - Object
                name: pattern
        returns:
            -
                type:
                    names:
                        - Promise
                description: Document
        name: findOne
        longname: HashBrown.Server.Helpers.DatabaseHelper.findOne
        kind: function
        memberof: HashBrown.Server.Helpers.DatabaseHelper
        scope: static
    -
        comment: "/**\n     * Finds Mongo documents\n     *\n     * @param {String} databaseName\n     * @param {String} collectionName\n     * @param {Object} query\n     * @param {Object} pattern\n     * @param {Object} sort\n     *\n     * @return {Promise} Documents\n     */"
        meta:
            range:
                - 9125
                - 9875
            filename: DatabaseHelper.js
            lineno: 308
            columnno: 4
            path: /home/mrzapp/Development/Web/hashbrown-cms/src/Server/Helpers
            code:
                id: astnode100064956
                name: DatabaseHelper.find
                type: MethodDefinition
                paramnames:
                    - databaseName
                    - collectionName
                    - query
                    - pattern
                    - sort
            vars:
                "": null
        description: 'Finds Mongo documents'
        params:
            -
                type:
                    names:
                        - String
                name: databaseName
            -
                type:
                    names:
                        - String
                name: collectionName
            -
                type:
                    names:
                        - Object
                name: query
            -
                type:
                    names:
                        - Object
                name: pattern
            -
                type:
                    names:
                        - Object
                name: sort
        returns:
            -
                type:
                    names:
                        - Promise
                description: Documents
        name: find
        longname: HashBrown.Server.Helpers.DatabaseHelper.find
        kind: function
        memberof: HashBrown.Server.Helpers.DatabaseHelper
        scope: static
    -
        comment: "/**\n     * Counts Mongo documents\n     *\n     * @param {String} databaseName\n     * @param {String} collectionName\n     * @param {Object} query\n     *\n     * @return {Promise} Number of matching documents\n     */"
        meta:
            range:
                - 10102
                - 10757
            filename: DatabaseHelper.js
            lineno: 341
            columnno: 4
            path: /home/mrzapp/Development/Web/hashbrown-cms/src/Server/Helpers
            code:
                id: astnode100065059
                name: DatabaseHelper.count
                type: MethodDefinition
                paramnames:
                    - databaseName
                    - collectionName
                    - query
            vars:
                "": null
        description: 'Counts Mongo documents'
        params:
            -
                type:
                    names:
                        - String
                name: databaseName
            -
                type:
                    names:
                        - String
                name: collectionName
            -
                type:
                    names:
                        - Object
                name: query
        returns:
            -
                type:
                    names:
                        - Promise
                description: 'Number of matching documents'
        name: count
        longname: HashBrown.Server.Helpers.DatabaseHelper.count
        kind: function
        memberof: HashBrown.Server.Helpers.DatabaseHelper
        scope: static
    -
        comment: "/**\n     * Merges a single Mongo document\n     *\n     * @param {String} databaseName\n     * @param {String} collectionName\n     * @param {Object} query\n     * @param {Object} doc\n     * @param {Object} options\n     *\n     * @return {Promise}\n     */"
        meta:
            range:
                - 11021
                - 11418
            filename: DatabaseHelper.js
            lineno: 373
            columnno: 4
            path: /home/mrzapp/Development/Web/hashbrown-cms/src/Server/Helpers
            code:
                id: astnode100065140
                name: DatabaseHelper.mergeOne
                type: MethodDefinition
                paramnames:
                    - databaseName
                    - collectionName
                    - query
                    - doc
                    - options
            vars:
                "": null
        description: 'Merges a single Mongo document'
        params:
            -
                type:
                    names:
                        - String
                name: databaseName
            -
                type:
                    names:
                        - String
                name: collectionName
            -
                type:
                    names:
                        - Object
                name: query
            -
                type:
                    names:
                        - Object
                name: doc
            -
                type:
                    names:
                        - Object
                name: options
        returns:
            -
                type:
                    names:
                        - Promise
        name: mergeOne
        longname: HashBrown.Server.Helpers.DatabaseHelper.mergeOne
        kind: function
        memberof: HashBrown.Server.Helpers.DatabaseHelper
        scope: static
    -
        comment: "/**\n     * Updates a single Mongo document\n     *\n     * @param {String} databaseName\n     * @param {String} collectionName\n     * @param {Object} query\n     * @param {Object} doc\n     * @param {Object} options\n     *\n     * @return {Promise} promise\n     */"
        meta:
            range:
                - 11691
                - 12487
            filename: DatabaseHelper.js
            lineno: 397
            columnno: 4
            path: /home/mrzapp/Development/Web/hashbrown-cms/src/Server/Helpers
            code:
                id: astnode100065193
                name: DatabaseHelper.updateOne
                type: MethodDefinition
                paramnames:
                    - databaseName
                    - collectionName
                    - query
                    - doc
                    - options
            vars:
                "": null
        description: 'Updates a single Mongo document'
        params:
            -
                type:
                    names:
                        - String
                name: databaseName
            -
                type:
                    names:
                        - String
                name: collectionName
            -
                type:
                    names:
                        - Object
                name: query
            -
                type:
                    names:
                        - Object
                name: doc
            -
                type:
                    names:
                        - Object
                name: options
        returns:
            -
                type:
                    names:
                        - Promise
                description: promise
        name: updateOne
        longname: HashBrown.Server.Helpers.DatabaseHelper.updateOne
        kind: function
        memberof: HashBrown.Server.Helpers.DatabaseHelper
        scope: static
    -
        comment: "/**\n     * Updates Mongo documents\n     *\n     * @param {String} databaseName\n     * @param {String} collectionName\n     * @param {Object} query\n     * @param {Object} doc\n     * @param {Object} options\n     *\n     * @return {Promise} promise\n     */"
        meta:
            range:
                - 12752
                - 13551
            filename: DatabaseHelper.js
            lineno: 430
            columnno: 4
            path: /home/mrzapp/Development/Web/hashbrown-cms/src/Server/Helpers
            code:
                id: astnode100065293
                name: DatabaseHelper.update
                type: MethodDefinition
                paramnames:
                    - databaseName
                    - collectionName
                    - query
                    - doc
                    - options
            vars:
                "": null
        description: 'Updates Mongo documents'
        params:
            -
                type:
                    names:
                        - String
                name: databaseName
            -
                type:
                    names:
                        - String
                name: collectionName
            -
                type:
                    names:
                        - Object
                name: query
            -
                type:
                    names:
                        - Object
                name: doc
            -
                type:
                    names:
                        - Object
                name: options
        returns:
            -
                type:
                    names:
                        - Promise
                description: promise
        name: update
        longname: HashBrown.Server.Helpers.DatabaseHelper.update
        kind: function
        memberof: HashBrown.Server.Helpers.DatabaseHelper
        scope: static
    -
        comment: "/**\n     * Inserts a single Mongo document\n     *\n     * @param {String} databaseName\n     * @param {String} collectionName\n     * @param {Object} doc\n     *\n     * @return {Promise} promise\n     */"
        meta:
            range:
                - 13764
                - 14520
            filename: DatabaseHelper.js
            lineno: 461
            columnno: 4
            path: /home/mrzapp/Development/Web/hashbrown-cms/src/Server/Helpers
            code:
                id: astnode100065395
                name: DatabaseHelper.insertOne
                type: MethodDefinition
                paramnames:
                    - databaseName
                    - collectionName
                    - doc
            vars:
                "": null
        description: 'Inserts a single Mongo document'
        params:
            -
                type:
                    names:
                        - String
                name: databaseName
            -
                type:
                    names:
                        - String
                name: collectionName
            -
                type:
                    names:
                        - Object
                name: doc
        returns:
            -
                type:
                    names:
                        - Promise
                description: promise
        name: insertOne
        longname: HashBrown.Server.Helpers.DatabaseHelper.insertOne
        kind: function
        memberof: HashBrown.Server.Helpers.DatabaseHelper
        scope: static
    -
        comment: "/**\n     * Removes a Mongo document\n     *\n     * @param {String} databaseName\n     * @param {String} collectionName\n     * @param {Object} query\n     *\n     * @return {Promise} promise\n     */"
        meta:
            range:
                - 14728
                - 15402
            filename: DatabaseHelper.js
            lineno: 493
            columnno: 4
            path: /home/mrzapp/Development/Web/hashbrown-cms/src/Server/Helpers
            code:
                id: astnode100065484
                name: DatabaseHelper.remove
                type: MethodDefinition
                paramnames:
                    - databaseName
                    - collectionName
                    - query
            vars:
                "": null
        description: 'Removes a Mongo document'
        params:
            -
                type:
                    names:
                        - String
                name: databaseName
            -
                type:
                    names:
                        - String
                name: collectionName
            -
                type:
                    names:
                        - Object
                name: query
        returns:
            -
                type:
                    names:
                        - Promise
                description: promise
        name: remove
        longname: HashBrown.Server.Helpers.DatabaseHelper.remove
        kind: function
        memberof: HashBrown.Server.Helpers.DatabaseHelper
        scope: static
    -
        comment: "/**\n     * Removes a single Mongo document\n     *\n     * @param {String} databaseName\n     * @param {String} collectionName\n     * @param {Object} query\n     *\n     * @return {Promise} promise\n     */"
        meta:
            range:
                - 15621
                - 16301
            filename: DatabaseHelper.js
            lineno: 522
            columnno: 4
            path: /home/mrzapp/Development/Web/hashbrown-cms/src/Server/Helpers
            code:
                id: astnode100065568
                name: DatabaseHelper.removeOne
                type: MethodDefinition
                paramnames:
                    - databaseName
                    - collectionName
                    - query
            vars:
                "": null
        description: 'Removes a single Mongo document'
        params:
            -
                type:
                    names:
                        - String
                name: databaseName
            -
                type:
                    names:
                        - String
                name: collectionName
            -
                type:
                    names:
                        - Object
                name: query
        returns:
            -
                type:
                    names:
                        - Promise
                description: promise
        name: removeOne
        longname: HashBrown.Server.Helpers.DatabaseHelper.removeOne
        kind: function
        memberof: HashBrown.Server.Helpers.DatabaseHelper
        scope: static
    -
        comment: "/**\n     * Drops an entire collection\n     *\n     * @param {String} databaseName\n     * @param {String} collectionName\n     *\n     * @return {Promise} promise\n     */"
        meta:
            range:
                - 16486
                - 17063
            filename: DatabaseHelper.js
            lineno: 550
            columnno: 4
            path: /home/mrzapp/Development/Web/hashbrown-cms/src/Server/Helpers
            code:
                id: astnode100065652
                name: DatabaseHelper.dropCollection
                type: MethodDefinition
                paramnames:
                    - databaseName
                    - collectionName
            vars:
                "": null
        description: 'Drops an entire collection'
        params:
            -
                type:
                    names:
                        - String
                name: databaseName
            -
                type:
                    names:
                        - String
                name: collectionName
        returns:
            -
                type:
                    names:
                        - Promise
                description: promise
        name: dropCollection
        longname: HashBrown.Server.Helpers.DatabaseHelper.dropCollection
        kind: function
        memberof: HashBrown.Server.Helpers.DatabaseHelper
        scope: static
    -
        comment: "/**\n     * Drops an entire database\n     *\n     * @param {String} databaseName\n     *\n     * @return {Promise} promise\n     */"
        meta:
            range:
                - 17200
                - 17739
            filename: DatabaseHelper.js
            lineno: 577
            columnno: 4
            path: /home/mrzapp/Development/Web/hashbrown-cms/src/Server/Helpers
            code:
                id: astnode100065714
                name: DatabaseHelper.dropDatabase
                type: MethodDefinition
                paramnames:
                    - databaseName
            vars:
                "": null
        description: 'Drops an entire database'
        params:
            -
                type:
                    names:
                        - String
                name: databaseName
        returns:
            -
                type:
                    names:
                        - Promise
                description: promise
        name: dropDatabase
        longname: HashBrown.Server.Helpers.DatabaseHelper.dropDatabase
        kind: function
        memberof: HashBrown.Server.Helpers.DatabaseHelper
        scope: static
shortname: DatabaseHelper
layout: docPage
permalink: /docs/hashbrown/server/helpers/databasehelper/
title: 'API: DatabaseHelper'
description: 'The helper class for database operations'

---