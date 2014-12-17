/*
 * GET home page.
 */

exports.index = function(req, res) {
  res.render('index.vm', {
      title: '站点首页'
  });
};