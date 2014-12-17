/*
 * config
 *
 */
var path = require('path');
var pkg = require('./package.json');

var config = {
    debug: true,
    name: 'front local development resources',
    viewEngine: require('velocityjs'), // 模板引擎
    version: pkg.version,

    // site sittings
    host: 'localhost',
    assetsServer: '', // 静态文件存储域名
    charset: 'GB2312',
    keywords: 'front local development resources..',
    description: 'front local development resources',
    port: 3000

};

module.exports = config;
module.exports.config = config;
