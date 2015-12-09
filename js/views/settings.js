require('../client');
require('./partials/navbar');

env.get(function(json) {
    api.labels(function(labels) {
        $('.page-content').html(
            _.div({class: 'container'},[
                _.ul({class: 'nav nav-tabs', role:'tablist'}, [
                    _.li({role: 'presentation', class: 'active'},
                        _.a({href:'#issues', 'aria-controls': 'home', role: 'tab', 'data-toggle': 'tab'},
                            'Issues'
                        )
                    )
                ]),
                _.div({class: 'tab-content'}, [
                    _.div({role: 'tabpanel', class: 'tab-pane active', id: 'issues'},
                        _.div({class: 'row'}, [
                            _.div({class: 'col-xs-6'}, [
                                _.h4('Columns'),
                                _.ul({class: 'list-group'}, [
                                    _.li({class: 'list-group-item'}, 'backlog'),
                                    _.each(json.putaitu.issues.columns,
                                        function(i, column) {
                                            return _.li({class: 'list-group-item'},
                                                _.input({type: 'text', class: 'form-control', value: column})
                                            );
                                        }
                                    ),
                                    _.li({class: 'list-group-item'},
                                        _.button({class: 'btn btn-default block-center'}, [
                                            'Add column ',
                                            _.span({class: 'glyphicon glyphicon-plus'})
                                        ])
                                    ),
                                    _.li({class: 'list-group-item'}, 'done')
                                ])
                            ]),
                            _.div({class: 'col-xs-6'}, [
                                _.h4('Labels'),
                                _.ul({class: 'list-group'}, [
                                    _.each(labels,
                                        function(i, label) {
                                            return _.li({class: 'list-group-item'},
                                                _.input({type: 'text', class: 'form-control', value: label.name})
                                            );
                                        }
                                    ),
                                    _.li({class: 'list-group-item'},
                                        _.button({class: 'btn btn-default block-center'}, [
                                            'Add label ',
                                            _.span({class: 'glyphicon glyphicon-plus'})
                                        ])
                                    ),
                                ])
                            ])
                        ])
                    )
                ])
            ])
        );
    });
});
