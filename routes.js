/**
 * Module dependencies.
 */
var site = require('./controllers'); // default index.js
var mytest = require('./controllers/mytest/');
// more controllers define here.
// ...

module.exports = function(app) {
    // home page
    app.get('/', site.index);
    //mytest
    app.get('/mytest/', mytest.index);

};