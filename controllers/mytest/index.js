/*
 * test controller
 */
var _ = require('lodash');
var config = require('../../config');
// 首页
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
