'use strict';

const MediaViewer = require('Client/Views/Editors/MediaViewer');
const RequestHelper = require('Client/Helpers/RequestHelper');

// Dashboard
Crisp.Router.route('/media/', function() {
    Crisp.View.get('NavbarMain').showTab('/media/');
    
    UI.setEditorSpaceContent(
        [
            _.h1('Media'),
            _.p('Click the button below to start a tour of the Media section.'),
            _.button({class: 'widget widget--button condensed', title: 'Click here to start the tour'}, 'Start tour')
                .click(() => {
                    HashBrown.Helpers.MediaHelper.startTour();
                }),
            _.p('Click the button below to start uploading Media files.'),
            _.button({class: 'widget widget--button'}, 'Upload media')
                .click(() => {
                    new HashBrown.Views.Modals.MediaUploader({
                        onSuccess: (ids) => {
                            // We got one id back
                            if(typeof ids === 'string') {
                                location.hash = '/media/' + ids;

                            // We got several ids back
                            } else {
                                location.hash = '/media/' + ids[0];
                            
                            }
                        }
                    });
                })
        ],
        'text'
    );
});

// Preview
Crisp.Router.route('/media/:id', function() {
    let mediaViewer = new MediaViewer({
        modelUrl: RequestHelper.environmentUrl('media/' + this.id)
    });
    
    Crisp.View.get('NavbarMain').highlightItem('/media/', this.id);
    
    UI.setEditorSpaceContent(mediaViewer.$element);
});
