---
permalink: /docs/api
layout: apiDocPage
title: API docs
description: The API documentation for HashBrown CMS
categories: 
- Connection
- Content
- Forms
- Media
- Schedule
- Schema
- User
endpoints:
- type: delete
  url: "/api/:project/:environment/connections/:id"
  title: ''
  group: Connection
  parameter:
    fields:
      Parameter:
      - group: Parameter
        type: String
        optional: false
        field: project
        description: ''
      - group: Parameter
        type: String
        optional: false
        field: environment
        description: ''
      - group: Parameter
        type: String
        optional: false
        field: id
        description: ''
  success:
    fields:
      Success 200:
      - group: Success 200
        type: Connection
        optional: false
        field: Connection
        description: ''
  version: 0.0.0
  filename: "../src/Server/Controllers/ConnectionController.js"
  groupTitle: Connection
  name: DeleteApiProjectEnvironmentConnectionsId
- type: get
  url: "/api/:project/:environment/connections"
  title: ''
  group: Connection
  parameter:
    fields:
      Parameter:
      - group: Parameter
        type: String
        optional: false
        field: project
        description: ''
      - group: Parameter
        type: String
        optional: false
        field: environment
        description: ''
  success:
    fields:
      Success 200:
      - group: Success 200
        type: Array
        optional: false
        field: Connections
        description: ''
  version: 0.0.0
  filename: "../src/Server/Controllers/ConnectionController.js"
  groupTitle: Connection
  name: GetApiProjectEnvironmentConnections
- type: get
  url: "/api/:project/:environment/connections/deployers"
  title: ''
  group: Connection
  parameter:
    fields:
      Parameter:
      - group: Parameter
        type: String
        optional: false
        field: project
        description: ''
      - group: Parameter
        type: String
        optional: false
        field: environment
        description: ''
  success:
    fields:
      Success 200:
      - group: Success 200
        type: Array
        optional: false
        field: Deployers
        description: ''
  version: 0.0.0
  filename: "../src/Server/Controllers/ConnectionController.js"
  groupTitle: Connection
  name: GetApiProjectEnvironmentConnectionsDeployers
- type: get
  url: "/api/:project/:environment/connections/:id"
  title: ''
  group: Connection
  parameter:
    fields:
      Parameter:
      - group: Parameter
        type: String
        optional: false
        field: project
        description: ''
      - group: Parameter
        type: String
        optional: false
        field: environment
        description: ''
      - group: Parameter
        type: String
        optional: false
        field: id
        description: ''
  success:
    fields:
      Success 200:
      - group: Success 200
        type: Connection
        optional: false
        field: Connection
        description: ''
  version: 0.0.0
  filename: "../src/Server/Controllers/ConnectionController.js"
  groupTitle: Connection
  name: GetApiProjectEnvironmentConnectionsId
- type: get
  url: "/api/:project/:environment/connections/processors"
  title: ''
  group: Connection
  parameter:
    fields:
      Parameter:
      - group: Parameter
        type: String
        optional: false
        field: project
        description: ''
      - group: Parameter
        type: String
        optional: false
        field: environment
        description: ''
  success:
    fields:
      Success 200:
      - group: Success 200
        type: Array
        optional: false
        field: Processors
        description: ''
  version: 0.0.0
  filename: "../src/Server/Controllers/ConnectionController.js"
  groupTitle: Connection
  name: GetApiProjectEnvironmentConnectionsProcessors
- type: post
  url: "/api/:project/:environment/connections/:id"
  title: ''
  group: Connection
  parameter:
    fields:
      Parameter:
      - group: Parameter
        type: String
        optional: false
        field: project
        description: ''
      - group: Parameter
        type: String
        optional: false
        field: environment
        description: ''
      - group: Parameter
        type: String
        optional: false
        field: id
        description: ''
  success:
    fields:
      Success 200:
      - group: Success 200
        type: Connection
        optional: false
        field: Connection
        description: ''
  version: 0.0.0
  filename: "../src/Server/Controllers/ConnectionController.js"
  groupTitle: Connection
  name: PostApiProjectEnvironmentConnectionsId
- type: post
  url: "/api/:project/:environment/connections/new"
  title: ''
  group: Connection
  parameter:
    fields:
      Parameter:
      - group: Parameter
        type: String
        optional: false
        field: project
        description: ''
      - group: Parameter
        type: String
        optional: false
        field: environment
        description: ''
  success:
    fields:
      Success 200:
      - group: Success 200
        type: Connection
        optional: false
        field: Connection
        description: ''
  version: 0.0.0
  filename: "../src/Server/Controllers/ConnectionController.js"
  groupTitle: Connection
  name: PostApiProjectEnvironmentConnectionsNew
- type: post
  url: "/api/:project/:environment/connections/pull/:id"
  title: ''
  group: Connection
  parameter:
    fields:
      Parameter:
      - group: Parameter
        type: String
        optional: false
        field: project
        description: ''
      - group: Parameter
        type: String
        optional: false
        field: environment
        description: ''
      - group: Parameter
        type: String
        optional: false
        field: id
        description: ''
  success:
    fields:
      Success 200:
      - group: Success 200
        type: String
        optional: false
        field: Connection
        description: "<p>id</p>"
  version: 0.0.0
  filename: "../src/Server/Controllers/ConnectionController.js"
  groupTitle: Connection
  name: PostApiProjectEnvironmentConnectionsPullId
- type: post
  url: "/api/:project/:environment/connections/push/:id"
  title: ''
  group: Connection
  parameter:
    fields:
      Parameter:
      - group: Parameter
        type: String
        optional: false
        field: project
        description: ''
      - group: Parameter
        type: String
        optional: false
        field: environment
        description: ''
      - group: Parameter
        type: String
        optional: false
        field: id
        description: ''
  success:
    fields:
      Success 200:
      - group: Success 200
        type: String
        optional: false
        field: Connection
        description: "<p>id</p>"
  version: 0.0.0
  filename: "../src/Server/Controllers/ConnectionController.js"
  groupTitle: Connection
  name: PostApiProjectEnvironmentConnectionsPushId
- type: delete
  url: "/api/:project/:environment/content/:id"
  title: ''
  group: Content
  parameter:
    fields:
      Parameter:
      - group: Parameter
        type: String
        optional: false
        field: project
        description: ''
      - group: Parameter
        type: String
        optional: false
        field: environment
        description: ''
      - group: Parameter
        type: String
        optional: false
        field: id
        description: ''
  success:
    fields:
      Success 200:
      - group: Success 200
        type: String
        optional: false
        field: The
        description: "<p>deleted Content id</p>"
  version: 0.0.0
  filename: "../src/Server/Controllers/ContentController.js"
  groupTitle: Content
  name: DeleteApiProjectEnvironmentContentId
- type: get
  url: "/api/:project/:environment/content"
  title: ''
  group: Content
  parameter:
    fields:
      Parameter:
      - group: Parameter
        type: String
        optional: false
        field: project
        description: ''
      - group: Parameter
        type: String
        optional: false
        field: environment
        description: ''
  success:
    fields:
      Success 200:
      - group: Success 200
        type: Array
        optional: false
        field: Content
        description: "<p>nodes</p>"
  version: 0.0.0
  filename: "../src/Server/Controllers/ContentController.js"
  groupTitle: Content
  name: GetApiProjectEnvironmentContent
- type: get
  url: "/api/:project/:environment/content/:id"
  title: ''
  group: Content
  parameter:
    fields:
      Parameter:
      - group: Parameter
        type: String
        optional: false
        field: project
        description: ''
      - group: Parameter
        type: String
        optional: false
        field: environment
        description: ''
      - group: Parameter
        type: String
        optional: false
        field: id
        description: ''
  success:
    fields:
      Success 200:
      - group: Success 200
        type: Content
        optional: false
        field: Content
        description: ''
  version: 0.0.0
  filename: "../src/Server/Controllers/ContentController.js"
  groupTitle: Content
  name: GetApiProjectEnvironmentContentId
- type: post
  url: "/api/:project/:environment/content/example"
  title: ''
  group: Content
  parameter:
    fields:
      Parameter:
      - group: Parameter
        type: String
        optional: false
        field: project
        description: ''
      - group: Parameter
        type: String
        optional: false
        field: environment
        description: ''
  success:
    fields:
      Success 200:
      - group: Success 200
        type: String
        optional: false
        field: OK
        description: ''
  version: 0.0.0
  filename: "../src/Server/Controllers/ContentController.js"
  groupTitle: Content
  name: PostApiProjectEnvironmentContentExample
- type: post
  url: "/api/:project/:environment/content/:id"
  title: ''
  group: Content
  parameter:
    fields:
      Parameter:
      - group: Parameter
        type: String
        optional: false
        field: project
        description: ''
      - group: Parameter
        type: String
        optional: false
        field: environment
        description: ''
      - group: Parameter
        type: String
        optional: false
        field: id
        description: ''
      - group: Parameter
        type: Content
        optional: false
        field: content
        description: "<p>The Content model to update</p>"
  success:
    fields:
      Success 200:
      - group: Success 200
        type: Content
        optional: false
        field: The
        description: "<p>created Content node</p>"
  version: 0.0.0
  filename: "../src/Server/Controllers/ContentController.js"
  groupTitle: Content
  name: PostApiProjectEnvironmentContentId
- type: post
  url: "/api/:project/:environment/content/new/:schemaId"
  title: ''
  group: Content
  parameter:
    fields:
      Parameter:
      - group: Parameter
        type: String
        optional: false
        field: project
        description: ''
      - group: Parameter
        type: String
        optional: false
        field: environment
        description: ''
      - group: Parameter
        type: String
        optional: false
        field: schemaId
        description: ''
      - group: Parameter
        type: String
        optional: false
        field: sort
        description: "<p>A sorting index (optional)</p>"
      - group: Parameter
        type: String
        optional: false
        field: parent
        description: "<p>A parent id (optional)</p>"
      - group: Parameter
        type: Content
        optional: false
        field: content
        description: "<p>The Content model to create (optional)</p>"
  success:
    fields:
      Success 200:
      - group: Success 200
        type: Content
        optional: false
        field: The
        description: "<p>created Content node</p>"
  version: 0.0.0
  filename: "../src/Server/Controllers/ContentController.js"
  groupTitle: Content
  name: PostApiProjectEnvironmentContentNewSchemaid
- type: post
  url: "/api/:project/:environment/content/preview"
  title: ''
  group: Content
  parameter:
    fields:
      Parameter:
      - group: Parameter
        type: String
        optional: false
        field: project
        description: ''
      - group: Parameter
        type: String
        optional: false
        field: environment
        description: ''
      - group: Parameter
        type: Content
        optional: false
        field: content
        description: "<p>The Content model to preview</p>"
  success:
    fields:
      Success 200:
      - group: Success 200
        type: String
        optional: false
        field: Preview
        description: "<p>URL</p>"
  version: 0.0.0
  filename: "../src/Server/Controllers/ContentController.js"
  groupTitle: Content
  name: PostApiProjectEnvironmentContentPreview
- type: post
  url: "/api/:project/:environment/content/publish"
  title: ''
  group: Content
  parameter:
    fields:
      Parameter:
      - group: Parameter
        type: String
        optional: false
        field: project
        description: ''
      - group: Parameter
        type: String
        optional: false
        field: environment
        description: ''
      - group: Parameter
        type: Content
        optional: false
        field: content
        description: "<p>the Content model to publish</p>"
  success:
    fields:
      Success 200:
      - group: Success 200
        type: String
        optional: false
        field: The
        description: "<p>published Content</p>"
  version: 0.0.0
  filename: "../src/Server/Controllers/ContentController.js"
  groupTitle: Content
  name: PostApiProjectEnvironmentContentPublish
- type: post
  url: "/api/:project/:environment/content/pull/:id"
  title: ''
  group: Content
  parameter:
    fields:
      Parameter:
      - group: Parameter
        type: String
        optional: false
        field: project
        description: ''
      - group: Parameter
        type: String
        optional: false
        field: environment
        description: ''
      - group: Parameter
        type: String
        optional: false
        field: id
        description: ''
  success:
    fields:
      Success 200:
      - group: Success 200
        type: Content
        optional: false
        field: The
        description: "<p>pulled Content node</p>"
  version: 0.0.0
  filename: "../src/Server/Controllers/ContentController.js"
  groupTitle: Content
  name: PostApiProjectEnvironmentContentPullId
- type: post
  url: "/api/:project/:environment/content/push/:id"
  title: ''
  group: Content
  parameter:
    fields:
      Parameter:
      - group: Parameter
        type: String
        optional: false
        field: project
        description: ''
      - group: Parameter
        type: String
        optional: false
        field: environment
        description: ''
      - group: Parameter
        type: String
        optional: false
        field: id
        description: ''
  success:
    fields:
      Success 200:
      - group: Success 200
        type: String
        optional: false
        field: The
        description: "<p>pushed Content id</p>"
  version: 0.0.0
  filename: "../src/Server/Controllers/ContentController.js"
  groupTitle: Content
  name: PostApiProjectEnvironmentContentPushId
- type: post
  url: "/api/:project/:environment/content/unpublish"
  title: ''
  group: Content
  parameter:
    fields:
      Parameter:
      - group: Parameter
        type: String
        optional: false
        field: project
        description: ''
      - group: Parameter
        type: String
        optional: false
        field: environment
        description: ''
      - group: Parameter
        type: Content
        optional: false
        field: content
        description: "<p>the Content model to unpublish</p>"
  success:
    fields:
      Success 200:
      - group: Success 200
        type: String
        optional: false
        field: The
        description: "<p>unpublished Content</p>"
  version: 0.0.0
  filename: "../src/Server/Controllers/ContentController.js"
  groupTitle: Content
  name: PostApiProjectEnvironmentContentUnpublish
- type: delete
  url: "/api/:project/:environment/forms/:id"
  title: ''
  group: Forms
  parameter:
    fields:
      Parameter:
      - group: Parameter
        type: String
        optional: false
        field: project
        description: ''
      - group: Parameter
        type: String
        optional: false
        field: environment
        description: ''
      - group: Parameter
        type: String
        optional: false
        field: id
        description: ''
  version: 0.0.0
  filename: "../src/Server/Controllers/FormsController.js"
  groupTitle: Forms
  name: DeleteApiProjectEnvironmentFormsId
- type: get
  url: "/api/:project/:environment/forms"
  title: ''
  group: Forms
  parameter:
    fields:
      Parameter:
      - group: Parameter
        type: String
        optional: false
        field: project
        description: ''
      - group: Parameter
        type: String
        optional: false
        field: environment
        description: ''
  success:
    fields:
      Success 200:
      - group: Success 200
        type: Array
        optional: false
        field: Forms
        description: ''
  version: 0.0.0
  filename: "../src/Server/Controllers/FormsController.js"
  groupTitle: Forms
  name: GetApiProjectEnvironmentForms
- type: get
  url: "/api/:project/:environment/forms/:id"
  title: ''
  group: Forms
  parameter:
    fields:
      Parameter:
      - group: Parameter
        type: String
        optional: false
        field: project
        description: ''
      - group: Parameter
        type: String
        optional: false
        field: environment
        description: ''
      - group: Parameter
        type: String
        optional: false
        field: id
        description: ''
  success:
    fields:
      Success 200:
      - group: Success 200
        type: Form
        optional: false
        field: Form
        description: ''
  version: 0.0.0
  filename: "../src/Server/Controllers/FormsController.js"
  groupTitle: Forms
  name: GetApiProjectEnvironmentFormsId
- type: get
  url: "/api/:project/:environment/forms/:id/entries"
  title: ''
  group: Forms
  parameter:
    fields:
      Parameter:
      - group: Parameter
        type: String
        optional: false
        field: project
        description: ''
      - group: Parameter
        type: String
        optional: false
        field: environment
        description: ''
      - group: Parameter
        type: String
        optional: false
        field: id
        description: ''
  success:
    fields:
      Success 200:
      - group: Success 200
        type: String
        optional: false
        field: CSV
        description: "<p>string</p>"
  version: 0.0.0
  filename: "../src/Server/Controllers/FormsController.js"
  groupTitle: Forms
  name: GetApiProjectEnvironmentFormsIdEntries
- type: post
  url: "/api/:project/:environment/forms/clear/:id"
  title: ''
  group: Forms
  parameter:
    fields:
      Parameter:
      - group: Parameter
        type: String
        optional: false
        field: project
        description: ''
      - group: Parameter
        type: String
        optional: false
        field: environment
        description: ''
      - group: Parameter
        type: String
        optional: false
        field: id
        description: ''
  version: 0.0.0
  filename: "../src/Server/Controllers/FormsController.js"
  groupTitle: Forms
  name: PostApiProjectEnvironmentFormsClearId
- type: post
  url: "/api/:project/:environment/forms/:id"
  title: ''
  group: Forms
  parameter:
    fields:
      Parameter:
      - group: Parameter
        type: String
        optional: false
        field: project
        description: ''
      - group: Parameter
        type: String
        optional: false
        field: environment
        description: ''
      - group: Parameter
        type: String
        optional: false
        field: id
        description: ''
      - group: Parameter
        type: Form
        optional: false
        field: The
        description: "<p>Form model to update</p>"
  success:
    fields:
      Success 200:
      - group: Success 200
        type: Form
        optional: false
        field: Form
        description: ''
  version: 0.0.0
  filename: "../src/Server/Controllers/FormsController.js"
  groupTitle: Forms
  name: PostApiProjectEnvironmentFormsId
- type: post
  url: "/api/:project/:environment/forms/:id/submit"
  title: ''
  group: Forms
  parameter:
    fields:
      Parameter:
      - group: Parameter
        type: String
        optional: false
        field: project
        description: ''
      - group: Parameter
        type: String
        optional: false
        field: environment
        description: ''
      - group: Parameter
        type: String
        optional: false
        field: id
        description: ''
      - group: Parameter
        type: Object
        optional: false
        field: entries
        description: "<p>The submitted entries</p>"
  version: 0.0.0
  filename: "../src/Server/Controllers/FormsController.js"
  groupTitle: Forms
  name: PostApiProjectEnvironmentFormsIdSubmit
- type: post
  url: "/api/:project/:environment/forms/new"
  title: ''
  group: Forms
  parameter:
    fields:
      Parameter:
      - group: Parameter
        type: String
        optional: false
        field: project
        description: ''
      - group: Parameter
        type: String
        optional: false
        field: environment
        description: ''
  success:
    fields:
      Success 200:
      - group: Success 200
        type: String
        optional: false
        field: The
        description: "<p>created Form id</p>"
  version: 0.0.0
  filename: "../src/Server/Controllers/FormsController.js"
  groupTitle: Forms
  name: PostApiProjectEnvironmentFormsNew
- type: post
  url: "/api/:project/:environment/forms/pull/:id"
  title: ''
  group: Forms
  parameter:
    fields:
      Parameter:
      - group: Parameter
        type: String
        optional: false
        field: project
        description: ''
      - group: Parameter
        type: String
        optional: false
        field: environment
        description: ''
      - group: Parameter
        type: String
        optional: false
        field: id
        description: ''
  success:
    fields:
      Success 200:
      - group: Success 200
        type: Form
        optional: false
        field: The
        description: "<p>pulled Form</p>"
  version: 0.0.0
  filename: "../src/Server/Controllers/FormsController.js"
  groupTitle: Forms
  name: PostApiProjectEnvironmentFormsPullId
- type: post
  url: "/api/:project/:environment/forms/push/:id"
  title: ''
  group: Forms
  parameter:
    fields:
      Parameter:
      - group: Parameter
        type: String
        optional: false
        field: project
        description: ''
      - group: Parameter
        type: String
        optional: false
        field: environment
        description: ''
      - group: Parameter
        type: String
        optional: false
        field: id
        description: ''
  success:
    fields:
      Success 200:
      - group: Success 200
        type: Form
        optional: false
        field: The
        description: "<p>pushed Form id</p>"
  version: 0.0.0
  filename: "../src/Server/Controllers/FormsController.js"
  groupTitle: Forms
  name: PostApiProjectEnvironmentFormsPushId
- type: delete
  url: "/api/:project/:environment/media/:id"
  title: ''
  group: Media
  parameter:
    fields:
      Parameter:
      - group: Parameter
        type: String
        optional: false
        field: project
        description: ''
      - group: Parameter
        type: String
        optional: false
        field: environment
        description: ''
      - group: Parameter
        type: String
        optional: false
        field: id
        description: ''
  version: 0.0.0
  filename: "../src/Server/Controllers/MediaController.js"
  groupTitle: Media
  name: DeleteApiProjectEnvironmentMediaId
- type: get
  url: "/api/:project/:environment/media"
  title: ''
  group: Media
  parameter:
    fields:
      Parameter:
      - group: Parameter
        type: String
        optional: false
        field: project
        description: ''
      - group: Parameter
        type: String
        optional: false
        field: environment
        description: ''
  success:
    fields:
      Success 200:
      - group: Success 200
        type: Array
        optional: false
        field: All
        description: "<p>Media nodes</p>"
  version: 0.0.0
  filename: "../src/Server/Controllers/MediaController.js"
  groupTitle: Media
  name: GetApiProjectEnvironmentMedia
- type: get
  url: "/api/:project/:environment/media/:id"
  title: ''
  group: Media
  parameter:
    fields:
      Parameter:
      - group: Parameter
        type: String
        optional: false
        field: project
        description: ''
      - group: Parameter
        type: String
        optional: false
        field: environment
        description: ''
      - group: Parameter
        type: String
        optional: false
        field: id
        description: ''
  success:
    fields:
      Success 200:
      - group: Success 200
        type: Media
        optional: false
        field: Media
        description: ''
  version: 0.0.0
  filename: "../src/Server/Controllers/MediaController.js"
  groupTitle: Media
  name: GetApiProjectEnvironmentMediaId
- type: get
  url: "/api/:project/:environment/media/:id"
  title: ''
  group: Media
  parameter:
    fields:
      Parameter:
      - group: Parameter
        type: String
        optional: false
        field: project
        description: ''
      - group: Parameter
        type: String
        optional: false
        field: environment
        description: ''
      - group: Parameter
        type: String
        optional: false
        field: id
        description: ''
      - group: Parameter
        type: FileData
        optional: false
        field: files
        description: "<p>Binary Media data</p>"
  version: 0.0.0
  filename: "../src/Server/Controllers/MediaController.js"
  groupTitle: Media
  name: GetApiProjectEnvironmentMediaId
- type: get
  url: "/api/:project/:environment/media/new"
  title: ''
  group: Media
  parameter:
    fields:
      Parameter:
      - group: Parameter
        type: String
        optional: false
        field: project
        description: ''
      - group: Parameter
        type: String
        optional: false
        field: environment
        description: ''
      - group: Parameter
        type: FileData
        optional: false
        field: files
        description: "<p>Binary Media data</p>"
  success:
    fields:
      Success 200:
      - group: Success 200
        type: String
        optional: false
        field: Created
        description: "<p>Media id</p>"
  version: 0.0.0
  filename: "../src/Server/Controllers/MediaController.js"
  groupTitle: Media
  name: GetApiProjectEnvironmentMediaNew
- type: get
  url: "/api/:project/:environment/media/tree"
  title: ''
  group: Media
  parameter:
    fields:
      Parameter:
      - group: Parameter
        type: String
        optional: false
        field: project
        description: ''
      - group: Parameter
        type: String
        optional: false
        field: environment
        description: ''
  success:
    fields:
      Success 200:
      - group: Success 200
        type: Object
        optional: false
        field: Media
        description: "<p>tree</p>"
  version: 0.0.0
  filename: "../src/Server/Controllers/MediaController.js"
  groupTitle: Media
  name: GetApiProjectEnvironmentMediaTree
- type: post
  url: "/api/:project/:environment/media/tree/:id"
  title: ''
  group: Media
  parameter:
    fields:
      Parameter:
      - group: Parameter
        type: String
        optional: false
        field: project
        description: ''
      - group: Parameter
        type: String
        optional: false
        field: environment
        description: ''
      - group: Parameter
        type: String
        optional: false
        field: id
        description: ''
      - group: Parameter
        type: Object
        optional: false
        field: item
        description: ''
  success:
    fields:
      Success 200:
      - group: Success 200
        type: Object
        optional: false
        field: Media
        description: "<p>tree item</p>"
  version: 0.0.0
  filename: "../src/Server/Controllers/MediaController.js"
  groupTitle: Media
  name: PostApiProjectEnvironmentMediaTreeId
- type: get
  url: "/api/:project/:environment/schedule/:contentId"
  title: ''
  group: Schedule
  parameter:
    fields:
      Parameter:
      - group: Parameter
        type: String
        optional: false
        field: project
        description: ''
      - group: Parameter
        type: String
        optional: false
        field: environment
        description: ''
      - group: Parameter
        type: String
        optional: false
        field: contentId
        description: ''
  success:
    fields:
      Success 200:
      - group: Success 200
        type: Array
        optional: false
        field: Tasks
        description: ''
  version: 0.0.0
  filename: "../src/Server/Controllers/ScheduleController.js"
  groupTitle: Schedule
  name: GetApiProjectEnvironmentScheduleContentid
- type: delete
  url: "/api/:project/:environment/schemas/:id"
  title: ''
  group: Schema
  parameter:
    fields:
      Parameter:
      - group: Parameter
        type: String
        optional: false
        field: project
        description: ''
      - group: Parameter
        type: String
        optional: false
        field: environment
        description: ''
      - group: Parameter
        type: String
        optional: false
        field: id
        description: ''
  version: 0.0.0
  filename: "../src/Server/Controllers/SchemaController.js"
  groupTitle: Schema
  name: DeleteApiProjectEnvironmentSchemasId
- type: get
  url: "/api/:project/:environment/schemas"
  title: ''
  group: Schema
  parameter:
    fields:
      Parameter:
      - group: Parameter
        type: String
        optional: false
        field: project
        description: ''
      - group: Parameter
        type: String
        optional: false
        field: environment
        description: ''
  success:
    fields:
      Success 200:
      - group: Success 200
        type: Array
        optional: false
        field: Schemas
        description: ''
  version: 0.0.0
  filename: "../src/Server/Controllers/SchemaController.js"
  groupTitle: Schema
  name: GetApiProjectEnvironmentSchemas
- type: get
  url: "/api/:project/:environment/schemas/:id"
  title: ''
  group: Schema
  parameter:
    fields:
      Parameter:
      - group: Parameter
        type: String
        optional: false
        field: project
        description: ''
      - group: Parameter
        type: String
        optional: false
        field: environment
        description: ''
      - group: Parameter
        type: String
        optional: false
        field: id
        description: ''
  success:
    fields:
      Success 200:
      - group: Success 200
        type: Schema
        optional: false
        field: Schema
        description: ''
  version: 0.0.0
  filename: "../src/Server/Controllers/SchemaController.js"
  groupTitle: Schema
  name: GetApiProjectEnvironmentSchemasId
- type: post
  url: "/api/:project/:environment/schemas/:id"
  title: ''
  group: Schema
  parameter:
    fields:
      Parameter:
      - group: Parameter
        type: String
        optional: false
        field: project
        description: ''
      - group: Parameter
        type: String
        optional: false
        field: environment
        description: ''
      - group: Parameter
        type: String
        optional: false
        field: id
        description: ''
      - group: Parameter
        type: Schema
        optional: false
        field: schema
        description: "<p>The Schema model to update</p>"
  success:
    fields:
      Success 200:
      - group: Success 200
        type: Schema
        optional: false
        field: Schema
        description: ''
  version: 0.0.0
  filename: "../src/Server/Controllers/SchemaController.js"
  groupTitle: Schema
  name: PostApiProjectEnvironmentSchemasId
- type: post
  url: "/api/:project/:environment/schemas/new"
  title: ''
  group: Schema
  parameter:
    fields:
      Parameter:
      - group: Parameter
        type: String
        optional: false
        field: project
        description: ''
      - group: Parameter
        type: String
        optional: false
        field: environment
        description: ''
  success:
    fields:
      Success 200:
      - group: Success 200
        type: Schema
        optional: false
        field: The
        description: "<p>created Schema</p>"
  version: 0.0.0
  filename: "../src/Server/Controllers/SchemaController.js"
  groupTitle: Schema
  name: PostApiProjectEnvironmentSchemasNew
- type: post
  url: "/api/:project/:environment/schemas/pull/:id"
  title: ''
  group: Schema
  parameter:
    fields:
      Parameter:
      - group: Parameter
        type: String
        optional: false
        field: project
        description: ''
      - group: Parameter
        type: String
        optional: false
        field: environment
        description: ''
      - group: Parameter
        type: String
        optional: false
        field: id
        description: ''
  success:
    fields:
      Success 200:
      - group: Success 200
        type: Schema
        optional: false
        field: The
        description: "<p>pulled Schema</p>"
  version: 0.0.0
  filename: "../src/Server/Controllers/SchemaController.js"
  groupTitle: Schema
  name: PostApiProjectEnvironmentSchemasPullId
- type: post
  url: "/api/:project/:environment/schemas/push/:id"
  title: ''
  group: Schema
  parameter:
    fields:
      Parameter:
      - group: Parameter
        type: String
        optional: false
        field: project
        description: ''
      - group: Parameter
        type: String
        optional: false
        field: environment
        description: ''
      - group: Parameter
        type: String
        optional: false
        field: id
        description: ''
  success:
    fields:
      Success 200:
      - group: Success 200
        type: Schema
        optional: false
        field: The
        description: "<p>pushed Schema</p>"
  version: 0.0.0
  filename: "../src/Server/Controllers/SchemaController.js"
  groupTitle: Schema
  name: PostApiProjectEnvironmentSchemasPushId
- type: post
  url: "/api/user/login"
  title: ''
  group: User
  parameter:
    fields:
      Parameter:
      - group: Parameter
        type: Object
        optional: false
        field: credentials
        description: "<p>{ username: String, password: String }</p>"
      - group: Parameter
        type: String
        optional: false
        field: persist
        description: "<p>&quot;true&quot;/&quot;false&quot;</p>"
  success:
    fields:
      Success 200:
      - group: Success 200
        type: String
        optional: false
        field: Session
        description: "<p>token</p>"
  version: 0.0.0
  filename: "../src/Server/Controllers/UserController.js"
  groupTitle: User
  name: PostApiUserLogin
---
