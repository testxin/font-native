  /*
   *  Foundation controller
   */
var _ = require('lodash');
var config = require('../../config');
var ui = require('../../ui');

exports.index = function(req, res) {
    var conf = {
            title: 'Foundation 5.5.0 demo',
            __key: 'mytest/foundation',
            __style: ui.inlineCss('mytest/foundation'),
            __js: ui.inlineJs('mytest/foundation')
        },
        data = {
            useFoundation: true,
            mockdata: {
                title: 'Foundation 5.5.0 demo'
            }
        };

    res.render('index.vm', _.extend(conf, data, config));
};