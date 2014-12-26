exports.index = function(req, res) {
    var conf = {
            title: '删格化布局演示',
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