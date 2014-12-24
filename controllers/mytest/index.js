/*
 * test controller
 */
var _ = require('lodash');
var config = require('../../config');
var ui = require('../../ui');

exports.index = function(req, res) {
    var conf = {
        title: '我的测试页面。。。',
        __key: 'mytest/index'
    },
    data = {
        mockdata: 'hello...world..'
    };
    
    res.render('index.vm', _.extend(conf, data, config));
};

exports.columnal = function(req, res) {
    var conf = {
        title: '删格化布局演示',
        __key: 'mytest/columnal',
        __style: ui.inlineCss('mytest/columnal'),
		__js: ''
    },
    data = {
		useColumnal: true,
        mockdata: {
    		title: '删格化布局演示'
    	}
    };
    
    res.render('index.vm', _.extend(conf, data, config));
};
