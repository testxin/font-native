/*
 * singleForm controller
 *
 */
var _ = require('lodash');
var config = require('../../config');
var ui = require('../../ui');

exports.form = function(req, res) {
    var conf = {
            title: '表单模型演示',
            __key: 'mytest/singleForm',
            __style: ui.inlineCss('mytest/singleForm'),
            __js: ui.inlineJs('mytest/singleForm')
        },
        data = {
            mockdata: {
                title: '我的简历'
            }
        };

    res.render('index.vm', _.extend(conf, data, config));
};
