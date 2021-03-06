'use strict';

class GitHubDeployerEditor extends Crisp.View {
    // Alias
    static get alias() { return 'github'; }

    /**
     * Constructor
     */
    constructor(params) {
        super(params);

        this.fetch();
    }
    
    /**
     * Get organisations
     */
    getOrgs() {
        return HashBrown.Helpers.RequestHelper.customRequest('get', '/plugins/github/orgs/?connectionId=' + Router.params.id);
    };
   
    /**
     * Render token editor
     */
    renderTokenEditor() {
        this.model.token = Router.query('token') || this.model.token; 

        return _.div({class: 'widget-group'},
            _.input({class: 'widget widget--input text', type: 'text', value: this.model.token, placeholder: 'Input GitHub API token'})
                .on('change', (e) => {
                    this.model.token = e.currentTarget.value;

                    this.fetch();
                }),
            _.button({class: 'widget widget--button small fa fa-refresh'})
                .on('click', () => {
                    let w = window.open('/plugins/github/oauth/start');

                    w.addEventListener('load', () => {
                        this.model.token = w.docuer.body.innerHTML;

                        this.fetch();
                        
                        w.close();
                    });
                })
        );
    }
    
    /**
     * Render repository picker
     */
    renderRepoPicker() {
        if(!this.model.token) { return; }

        let dropdown = new HashBrown.Views.Widgets.Dropdown({
            value: this.model.repo,
            valueKey: 'full_name',
            labelKey: 'full_name',
            useTypeAhead: true,
            options: [],
            onChange: (newRepo) => {
                this.model.repo = newRepo;

                this.fetch();
            }
        });
            
        dropdown.element.classList.toggle('working', true);

        HashBrown.Helpers.RequestHelper.customRequest('get', '/plugins/github/repos?token=' + this.model.token)
        .then((repos) => {
            dropdown.element.classList.toggle('working', false);

            dropdown.options = repos;

            dropdown.fetch();
        })
        .catch(UI.errorModal);

        return dropdown.$element;
    }

    /**
     * Render branch picker
     */
    renderBranchPicker() {
        if(!this.model.repo || !this.model.token) { return; }

        let dropdown = new HashBrown.Views.Widgets.Dropdown({
            value: this.model.branch,
            useClearButton: true,
            valueKey: 'name',
            labelKey: 'name',
            options: [],
            onChange: (newBranch) => {
                this.model.branch = newBranch;
            }
        });
        
        dropdown.element.classList.toggle('working', true);

        HashBrown.Helpers.RequestHelper.customRequest('get', '/plugins/github/' + this.model.repo + '/branches?token=' + this.model.token)
        .then((branches) => {
            dropdown.element.classList.toggle('working', false);
            
            dropdown.options = branches;

            dropdown.fetch();
        })
        .catch(UI.errorModal);

        return dropdown.$element;
    }

    /**
     * Renders this editor
     */
    template() {
        return _.div({class: 'deployer-editor deployer-editor--github'},
            // Token
            _.div({class: 'editor__field'},
                _.div({class: 'editor__field__key'}, 'Token'),
                _.div({class: 'editor__field__value'},
                    this.renderTokenEditor()
                )
            ),
            
            // Repo picker
            _.div({class: 'editor__field'},
                _.div({class: 'editor__field__key'}, 'Repository'),
                _.div({class: 'editor__field__value'},
                    this.renderRepoPicker()
                )
            ),
            
            // Branch picker
            _.div({class: 'editor__field'},
                _.div({class: 'editor__field__key'}, 'Branch'),
                _.div({class: 'editor__field__value'},
                    this.renderBranchPicker()
                )
            )
        );
    }
}

HashBrown.Views.Editors.DeployerEditors.GitHub = GitHubDeployerEditor;
