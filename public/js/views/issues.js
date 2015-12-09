(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
window._ = require('./core/Templating');
window.View = require('./core/View');

window.env = {
    json: null,

    get: function(callback) {
        if(env.json) {
            callback(env.json);
        } else {
            api.getFile('env.json', function(json) {
                json = JSON.parse(json) || {};
                json.putaitu = json.putaitu || {};
                json.putaitu.issues = json.putaitu.issues || {};
                json.putaitu.issues.columns = json.putaitu.issues.columns || [];

                env.json = json;

                callback(env.json);
            });
        }
    },

    set: function(json, callback) {
        api.setFile(JSON.stringify(json), 'env.json', function() { 
            env.json = json;

            callback();
        });
    }
};

window.helper = {
    formatDate: function(input) {
        var date = new Date(input);
        var output =
            date.getFullYear() +
            '-' +
            date.getMonth() +
            '-' +
            date.getDate() +
            ' ' +
            date.getHours() +
            ':' +
            date.getMinutes() +
            ':' +
            date.getSeconds();

        return output;
    }
};

window.api = {
    call: function(url, callback, data) {
        data = data || {};
        
        data.token = localStorage.getItem('gh-oauth-token');

        $.post(url, data, function(res) {
            if(res.err) {
                console.log(res.err);
                alert(res.err.json.message);
            } else {
                callback(res);
            }
        });
    },

    repos: function(callback) {
        api.call('/api/' + req.params.user + '/repos/', callback);
    },

    compare: function(base, head, callback) {
        api.call('/api/' + req.params.user + '/' + req.params.repo + '/compare/' + base + '/' + head, callback);
    },

    merge: function(base, head, callback) {
        api.call('/api/' + req.params.user + '/' + req.params.repo + '/merge/' + base + '/' + head, callback);
    },
    
    getFile: function(path, callback) {
        api.call('/api/' + req.params.user + '/' + req.params.repo + '/file/get/' + path, callback);
    },
    
    setFile: function(data, path, callback) {
        api.call('/api/' + req.params.user + '/' + req.params.repo + '/file/set/' + path, callback, data);
    },

    issues: function(callback) {
        api.call('/api/' + req.params.user + '/' + req.params.repo + '/issues', callback);
    },
    
    labels: function(callback) {
        api.call('/api/' + req.params.user + '/' + req.params.repo + '/labels', callback);
    },
    
    issueColumns: function(callback) {
        env.get(function(json) {
            var columns = json.putaitu.issues.columns;

            columns.unshift('backlog');
            columns.push('done');
                
            callback(columns);
        });
    },

    milestones: function(callback) {
        api.call('/api/' + req.params.user + '/' + req.params.repo + '/milestones', callback);
    },

    collaborators: function(callback) {
        api.call('/api/' + req.params.user + '/' + req.params.repo + '/collaborators', callback);
    },

    repo: function(callback) {
        api.call('/api/' + req.params.user + '/' + req.params.repo, callback);
    },

    branches: function(callback) {
        api.call('/api/' + req.params.user + '/' + req.params.repo + '/branches/', function(branches) {
            branches.sort(function(a, b) {
                if (a.name < b.name) {
                    return -1;
                } else if (a.name > b.name) {
                    return 1;
                } else {
                    return 0;   
                }
            });

            callback(branches);
        });
    }
};

},{"./core/Templating":2,"./core/View":3}],2:[function(require,module,exports){
var Templating = {};

function append(el, content) {
    if(Object.prototype.toString.call(content) === '[object Array]') {
        for(var i in content) {
            append(el, content[i]);
        }

    } else if(content) {
        el.append(content);
    
    }
}

function create(tag, attr, content) {
    var el = $('<' + tag + '></' + tag + '>')
       
    // If the attribute parameter fails, it's probably an element or a string
    try {
        for(var k in attr) {
            el.attr(k, attr[k]);
        }
    } catch(err) {
        content = attr;
    }

    append(el, content);

    return el;
}

function declareMethod(type) {
    Templating[type] = function(attr, content) {
        return create(type, attr, content);
    };
}

function declareBootstrapMethod(type) {
    var tagName = 'div';
  
    if(type.indexOf('|') > -1) {
        tagName = type.split('|')[1];
        type = type.split('|')[0];
    }
    
    var functionName = type.replace(/-/g,'_');

    Templating[functionName] = function(attr, content) {
        return create(tagName, attr, content).addClass(type);
    };
}

var elementTypes = [
    // Block elements
    'div', 'section', 'nav', 'hr', 'label', 'textarea', 'audio', 'video', 'canvas', 'iframe',

    // Inline elements
    'img',

    // Table elements
    'table', 'thead', 'tbody', 'th', 'td', 'tr',

    // Select
    'select', 'option', 'input',

    // Headings
    'h1', 'h2', 'h3', 'h4', 'h5', 'h6',

    // Body text
    'span', 'p', 'strong', 'b',

    // Action buttons
    'a', 'button',

    // List
    'ol', 'ul', 'li',

    // Forms
    'form', 'input'
];

var bootstrapTypes = [
    'row', 'col',
    
    'col-xs-1', 'col-xs-2', 'col-xs-3', 'col-xs-4', 'col-xs-5', 'col-xs-6', 'col-xs-7', 'col-xs-8', 'col-xs-9', 'col-xs-10', 'col-xs-11', 'col-xs-12',
    'col-sm-1', 'col-sm-2', 'col-sm-3', 'col-sm-4', 'col-sm-5', 'col-sm-6', 'col-sm-7', 'col-sm-8', 'col-sm-9', 'col-sm-10', 'col-sm-11', 'col-sm-12',
    'col-md-1', 'col-md-2', 'col-md-3', 'col-md-4', 'col-md-5', 'col-md-6', 'col-md-7', 'col-md-8', 'col-md-9', 'col-md-10', 'col-md-11', 'col-md-12',
    'col-lg-1', 'col-lg-2', 'col-lg-3', 'col-lg-4', 'col-lg-5', 'col-lg-6', 'col-lg-7', 'col-lg-8', 'col-lg-9', 'col-lg-10', 'col-lg-11', 'col-lg-12',

    'jumbotron',
    'container',
    
    'panel',
    'panel-heading',
    'panel-footer',
    'panel-collapse',
    'panel-body',
    
    'navbar|nav',
    'navbar-nav|ul',

    'collapse',

    'glyphicon|span',

    'btn|button',
    'btn-group',

    'list-group', 'list-group-item',
    'input-group', 'input-group-btn|span', 'input-group-addon|span', 'form-control|input'
];

for(var i in elementTypes) {
    declareMethod(elementTypes[i]);
}

for(var i in bootstrapTypes) {
    declareBootstrapMethod(bootstrapTypes[i]);
}
 
Templating.each = function(array, callback) {
    var elements = [];

    for(var i in array) {
        var element = callback(i, array[i]);

        if(element) {
            elements.push(element);
        }
    }
     
    return elements;
};

module.exports = Templating;

},{}],3:[function(require,module,exports){
/**
 *  jQuery extension
 */
(function($){
  $.event.special.destroyed = {
    remove: function(o) {
      if (o.handler) {
        o.handler()
      }
    }
  }
})(jQuery)

/**
 * Instantiating
 */
var instances = [];

var View = function(constructor, extensions) {
    var self = this;

    var name = constructor.toString();
    name = name.substring('function '.length);
    name = name.substring(0, name.indexOf('('));

    self.name = name;
    self.constructor = constructor;

    if(extensions) {
        for(var k in extensions) {
            self[k] = extensions[k];
        }
    }
}

View.extend = function(constructor, extensions) {
    if(constructor) {
        constructor.prototype = new View(constructor, extensions);
        
        return constructor;
    }
};

/**
 * Getting
 */
View.getAll = function(type) {
    var results = [];

    if(type) {
        for(var i in instances) {
            var instance = instances[i];
            var name = instance.constructor.name;

            if(name == type) {
                results.push(instance);
            }
        }
    } else {
        results = instances;
    }

    return results;
};

View.get = function(type) {
    var results = View.getAll(type);

    return results.length > 0 ? results[0] : null;
};


/**
 * Removing
 */
View.removeAll = View.clear = function(type) {
    for(var guid in instances) {
        var instance = instances[guid];
        var name = instance.constructor.name;
        
        if(!type || name == type) {
            instance.remove();
        }
    }
}

View.prototype.remove = function(timeout) {
    var self = this;

    setTimeout(function() {
        self.trigger('remove');

        if(self.$element && self.$element.length > 0) {
            self.$element.remove();
        }

        delete instances[self.guid];
    }, timeout || 0 );
};

/**
 * Reloading
 * TODO: This doesn't quite work. Might need restructuring
 */
View.prototype.reload = function() {
    var self = this;

    self.constructor();

    return self;
};

/**
 * Rendering
 */
View.prototype.preRender;
View.prototype.render;
View.prototype.postRender;

/**
 * Init
 */
View.prototype.register = function() {
    var self = this;

    function guid() {
        function s4() {
            return Math.floor((1 + Math.random()) * 0x10000)
                .toString(16)
                .substring(1);
        }
        return s4() + s4() + '-' + s4() + '-' + s4() + '-' +
            s4() + '-' + s4() + s4() + s4();
    }

    self.guid = guid();

    instances[self.guid] = self;

    return self;
};

View.prototype.init = function() {
    var self = this;
    
    if(self.preRender) {
        self.preRender();
    }

    if(self.render) {
        self.render();
    }
    
    if(self.postRender) {
        self.postRender();
    }
    
    if(self.$element) {
        self.element = self.$element[0];
        self.$element.data('view', self);
        self.$element.bind('destroyed', function() {
           self.remove();
        });
    }

    return self;
};

/**
 * Events
 */
// Trigger an event
View.prototype.trigger = function(e, obj) {
    var self = this;

    if(!self.events) {
        self.events = {
            destroy: [
                function () {
                    self.$element.remove();
                    delete self;
                }
            ]
        };
    }

    if(self.events[e]) {
        for(var i in self.events[e]) {
            if(self.events[e][i]) {
                self.events[e][i](obj);
            }
        }
    }

    return self;
};

// Bind an event
View.prototype.on = function (e, callback) {
    var self = this;
    
    if(!self.events) {
        self.events = {
            destroy: [
                function () {
                    self.$element.remove();
                    delete self;
                }
            ]
        };
    }
    
    if(!self.events[e]) {
        self.events[e] = [];
    }

    self.events[e].push(callback);

    return self;
}; 

// Check if event exists
View.prototype.hasEvent = function(name) {
    for(var k in this.events) {
        if(k == name) {
            return true;
        }
    }

    return false;
};

// Predefined events
View.prototype.ready = function(callback) {
    this.on('ready', callback);

    return this;
};

/**
 * Common methods
 */
// Adopt values
View.prototype.adopt = function(args) {
    for(var k in args) {
        this[k] = args[k];
    }

    return this;
};

// Trigger ready or init
View.prototype.readyOrInit = function() {
    if(this.hasEvent('ready')) {
        this.trigger('ready');
    } else {
        this.init();
    }
};

/**
 * Fetch
 */
View.prototype.fetch = function() {
    var self = this;

    function getModel() {
        // Get model from URL
        if(!self.model && typeof self.modelUrl === 'string') {
            $.getJSON(self.modelUrl, function(data) {
                self.model = data;
                
                self.readyOrInit();
            });
        
        // Get model with function
        } else if(!self.model && typeof self.modelFunction === 'function') {
            self.modelFunction(function(data) {
                self.model = data;

                self.readyOrInit();
            });

        // Just perform the initialisation
        } else {
            self.readyOrInit();
        }
    }

    // Get rendered content from URL
    if(typeof self.renderUrl === 'string') {
        $.ajax({
            url: self.renderUrl,
            type: 'get',
            success: function(html) {

                if(self.$element) {
                    self.$element.append(html);
                } else {
                    self.$element = $(html);
                }

                // And then get the model
                getModel();
            }
        });

    // Just get the model
    } else {
        getModel();    
    
    }

    return self;
};

module.exports = View;

},{}],4:[function(require,module,exports){
require('../client');
require('./partials/navbar');

var Issue = require('./partials/issue');
var IssueModal = require('./partials/issue-modal');

function onChangeMilestone() {
    var id = $('.milestones').val();

    _.each(View.getAll('Issue'),
        function(i, view) {
            view.$element.toggle(id == 'all' || view.model.milestone.id == id);
        }
    );
}

function onMoveIssueColumn($issue) {
    $issue.data('view').updateColumnFromPosition();
}

function updateIssuePositions() {
    _.each(View.getAll('Issue'),
        function(i, view) {
            view.updateMilestonePosition();
            view.updateColumnPosition();
        }
    );
    
    $('.sortable').sortable('destroy');
    $('.sortable').sortable({
        forcePlaceholderSize: true,
        connectWith: '.sortable',
    }).bind('sortupdate', function(e, ui) {
        onMoveIssueColumn(ui.item);
    });
}

api.issueColumns(function(columns) {
    api.issues(function(issues) {
        api.milestones(function(milestones) {
            $('.page-content').html([
                _.div({class: 'container'}, [
                    _.each(
                        issues,
                        function(i, issue) {
                            return new Issue({
                                model: issue
                            }).$element;
                        }
                    ),
                    _.div({class: 'input-group p-b-md'}, [
                        _.span({class: 'input-group-addon'},
                            'Milestone'
                        ),
                        _.select({class: 'form-control milestones'},
                            _.each([ { id: 'all', title: '(all issues)' } ].concat(milestones),
                                function(i, milestone) {
                                    return _.option({value: milestone.id},
                                        milestone.title
                                    );
                                }
                            )
                        ).change(onChangeMilestone)
                    ]),
                    _.div({class: 'row'},
                        _.each(
                            columns,
                            function(c, column) {
                                var colSize = 12 / columns.length;

                                return _.div({class: 'col-xs-' + colSize},
                                    _.div({class: 'panel panel-default column', 'data-name': column}, [
                                        _.div({class: 'panel-heading'},
                                            _.span(column)
                                        ),
                                        _.div({class: 'panel-body sortable'})
                                    ])
                                );                  
                            }
                        )
                    )
                ]),
                new IssueModal().$element
            ]);

            updateIssuePositions();
        });
    });
});

},{"../client":1,"./partials/issue":6,"./partials/issue-modal":5,"./partials/navbar":7}],5:[function(require,module,exports){
module.exports = View.extend(function IssueModal(params) {
    var self = this;

    self.adopt(params);
    self.register();

    function onClickOK() {
        $('#' + self.model.id).data('view').sync(self.model);
        self.hide();
    }

    function onChangeAssignee() {
        for(var i in self.collaborators) {
            if(self.collaborators[i].id == $(this).val()) {
                self.model.assignee = self.collaborators[i];
            }
        }
    }
    
    function onChangeTitle() {
        self.model.title = $(this).val();
    }
    
    function onChangeBody() {
        self.model.body = $(this).val();
    }
    
    function onChangeState() {
        self.model.state = $(this).val();
    }
    
    function onChangeMilestone() {
        for(var i in self.milestones) {
            if(self.milestones[i].id == $(this).val()) {
                self.model.milestone = self.milestones[i];
            }
        }
    }

    self.$element = _.div({class: 'modal fade issue-modal', role: 'dialog'},
        _.div({class: 'modal-dialog'},
            _.div({class: 'modal-content'}, [
                _.div({class: 'modal-header'}, [
                   _.button({type: 'button', class: 'close', 'data-dismiss': 'modal'},
                       _.span({class: 'glyphicon glyphicon-remove'})
                    ),
                    self.$heading = _.span(),
                    _.p({}, [
                        'Created by ',
                        self.$user = _.a()
                    ])
                ]),
                _.div({class: 'modal-body'}, [
                    _.div({class: 'row'}, [
                        _.div({class: 'col-xs-6'}, 
                            _.div({class: 'input-group'}, [
                                _.span({class: 'input-group-addon'},
                                    'Assignee'
                                ),
                                function () {
                                    self.$assignee = _.select({class: 'form-control'});

                                    api.collaborators(function(collaborators) {
                                        self.collaborators = collaborators;

                                        self.$assignee.html(
                                            _.each(
                                                [ { login: '(none)', id: null } ].concat(collaborators),
                                                function(i, collaborator) {
                                                    return _.option({value: collaborator.id},
                                                        collaborator.login
                                                    );
                                                }
                                            )
                                        );
                                    });

                                    return self.$assignee;
                                }().change(onChangeAssignee)
                            ])
                        ),
                        _.div({class: 'col-xs-6'}, 
                            _.div({class: 'input-group'}, [
                                _.span({class: 'input-group-addon'},
                                    'State'
                                ),
                                self.$state = _.select({class: 'form-control'},
                                    _.each(
                                        [ 'open', 'closed' ],
                                        function(i, state) {
                                            return _.option({value: state},
                                                state
                                            );
                                        }
                                    )
                                ).change(onChangeState)
                            ])
                        )
                    ]),         
                    _.div({class: 'input-group'}, [
                        _.span({class: 'input-group-addon'},
                            'Milestone'
                        ),
                        function() {
                            self.$milestone = _.select({class: 'form-control'});
                                
                            api.milestones(function(milestones) { 
                                self.milestones = milestones;

                                self.$milestone.html(
                                    _.each(
                                        milestones,
                                        function(i, milestone) {
                                            return _.option({value: milestone.id},
                                                milestone.title
                                            );
                                        }
                                    )
                                );
                            });

                            return self.$milestone;
                        }().change(onChangeMilestone)
                    ]),
                    _.div({class: 'input-group'}, [
                        _.span({class: 'input-group-addon'},
                            'Title'
                        ),
                        self.$title = _.input({type: 'text', class: 'form-control'}).change(onChangeTitle)
                    ]),
                    _.div({class: 'input-group input-group-vertical'}, [
                        _.span({class: 'input-group-addon'},
                            'Description'
                        ),
                        self.$body = _.textarea({class: 'form-control'}).change(onChangeBody)
                    ])
                ]),
                _.div({class: 'modal-footer'}, [
                    self.$labels = _.div({class: 'labels'}),
                    _.button({class: 'btn btn-primary'},
                        'OK'
                    ).click(onClickOK)
                ])
            ])
        )
    );
    
    self.hide = function show(issue) {
        self.$element.modal('hide');
    };
    
    self.show = function show(issue) {
        self.model = issue;
        self.render();
        self.$element.modal('show');
    };
},
{
    render: function() {
        var self = this;
       
        self.$user.html(self.model.user.login);

        if(self.model.assignee) {
            self.$assignee.val(self.model.assignee.login);
        }

        self.$state.val(self.model.state);
        
        self.$milestone.val(self.model.milestone.id);

        self.$heading.html('Edit issue (id: ' + self.model.id + ')');

        self.$title.attr('value', self.model.title);

        self.$body.html(self.model.body);

        self.$labels.html(
            _.each(
                self.model.labels,
                function(i, label) {
                    function onClickRemove(e) {
                        self.model.labels.splice(i, 1);
                        $label.remove();
                    }

                    var $label = _.div({class: 'label', style: 'background-color: #' + label.color}, [
                        _.span({class: 'label-text'},
                            label.name
                        ),
                        _.button({class: 'btn btn-default label-btn-remove'},
                            _.span({class: 'glyphicon glyphicon-remove'})
                        ).click(onClickRemove)
                    ]);

                    return $label;
                }
            )
        );
    }
});

},{}],6:[function(require,module,exports){
module.exports = View.extend(function Issue(params) {
    var self = this;

    self.adopt(params);
    self.register();
    
    // Init html
    self.$element = _.div({class: 'panel panel-primary issue'}).click(onClick);

    self.fetch();
    
    // Private methods
    function onClick() {
        View.get('IssueModal').show(self.model);
    }
    
    // Public methods
    self.updateMilestonePosition = function updateMilestonePosition() {
        var milestoneId = $('.milestones').val();

        self.$element.toggle(milestoneId == 'all' || self.model.milestone.id == milestoneId);
    };

    self.updateColumnFromPosition = function updateColumnFromPosition() {
        var $column = self.$element.parents('.column');

        self.model.state = $column.data('name') == 'done' ? 'closed' : 'open';

        // Update model labels
    };

    self.updateColumnPosition = function updateColumnPosition() {
        var column = 'backlog';

        if(self.model.state == 'closed') {
            column = 'done';
        
        } else {
            for(var l in self.model.labels) {
                var name = self.model.labels[l].name;
                
                if($('.column[data-name="' + name + '"]').length > 0) {
                    column = name;
                }
            }
        
        }

        $('.column[data-name="' + column + '"] .sortable').append(self.$element);
    };
    
    self.sync = function sync(model) {
        self.model = model;

        console.log(self.model);
        
        // TODO: Syncing logic
        
        self.render();
        
        self.updateColumnPosition();
        self.updateMilestonePosition();
    };
},
{
    render: function() {
        var self = this;

        self.$element.attr('id', self.model.id);
        self.$element.html([
            _.div({class: 'panel-heading'}, [
                _.span(self.model.title),
                function() {
                    if(self.model.assignee) {
                        return _.img({alt: '', src: self.model.assignee.avatarUrl});
                    }
                }
            ]),
            _.div({class: 'panel-body'},
                _.span(self.model.body)
            )
        ]);
    }
});

},{}],7:[function(require,module,exports){
api.repo(function(repo) {
    $('.navbar-content').html(
        _.div({class: 'navbar navbar-default'},
            _.div({class: 'container'}, [
                _.ul({class: 'nav navbar-nav'}, [
                    _.li(
                        _.a({href: '/repos/' + req.params.user}, [
                            _.span({class: 'glyphicon glyphicon-arrow-left'}),
                            ' Repos'
                        ])
                    ),
                    _.li(
                        _.a({href: '/repos/' + req.params.user + '/' + req.params.repo + '/deployment/'}, [
                            _.span({class: 'glyphicon glyphicon-upload'}),
                            ' Deployment'
                        ])
                    ),
                    _.li(
                        _.a({href: '/repos/' + req.params.user + '/' + req.params.repo + '/collaborators/'}, [
                            _.span({class: 'glyphicon glyphicon-user'}),
                            ' Collaborators'
                        ])
                    ),
                    _.li(
                        _.a({href: '/repos/' + req.params.user + '/' + req.params.repo + '/issues/'}, [
                            _.span({class: 'glyphicon glyphicon-exclamation-sign'}),
                            ' Issues'
                        ])
                    ),
                    _.li(
                        _.a({href: '/repos/' + req.params.user + '/' + req.params.repo + '/settings/'}, [
                            _.span({class: 'glyphicon glyphicon-cog'}),
                            ' Settings'
                        ])
                    )
                ]),
                _.ul({class: 'nav navbar-nav navbar-right'},
                    _.li({class: 'navbar-btn'},
                        _.div({class: 'input-group'}, [
                            _.span({class: 'input-group-addon'},
                                'git'
                            ),
                            function() {
                                var element = _.input({class: 'form-control', type: 'text', value: ''});

                                element.attr('value', repo.cloneUrl); 
                                
                                return element;
                            }
                        ])
                    )
                )
            ])
        )
    );

    // Set active navigation button
    $('.navbar-content .navbar-nav li').each(function(i) {
        var a = $(this).children('a');
        var isActive = location.pathname == a.attr('href') || location.pathname + '/' == a.attr('href');

        $(this).toggleClass('active', isActive);
    });
});

},{}]},{},[4])