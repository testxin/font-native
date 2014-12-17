define("mockAsyn/1.0.0/mockAsyn", [ "$" ], function(require, exports, module) {
    var $ = require("$");
    $.extend({
        ajax: function(opts) {
            if (!console.info) {
                console.info = console.log;
            }
            console.info("DUMMY AJAX started.");
            var params = typeof opts.data === "string" ? jQuery.deparam(opts.data) : opts.data;
            console.info(params);
            setTimeout(function() {
                if (opts.url == "accountSwitch.json") {
                    opts.success({
                        queryForm: params,
                        stat: "ok",
                        errorCode: "",
                        errorMsg: "",
                        result: [ {
                            accountId: "1000011110",
                            accountName: "账户A",
                            accountEmail: "alipayb01@alitest.com",
                            order: 0,
                            current: false
                        }, {
                            accountId: "1000011111",
                            accountName: "账户B",
                            accountEmail: "alipayb02@alitest.com",
                            order: 1,
                            current: false
                        }, {
                            accountId: "1000011113",
                            accountName: "",
                            accountEmail: "alipayb01@alitest.com",
                            order: 2,
                            current: false
                        }, {
                            accountId: "1000011115",
                            accountName: "asdf啊士大夫啊啊",
                            accountEmail: "alip32b5301@alitasdfasdfzxcvzxcest.com",
                            order: 3,
                            current: true
                        }, {
                            accountId: "1000011340",
                            accountName: "",
                            accountEmail: "alipayb345601@alitest.com",
                            order: 4,
                            current: false
                        }, {
                            accountId: "1000011210",
                            accountName: "啊士大夫",
                            accountEmail: "alipab01@alitest.com",
                            order: 5,
                            current: false
                        }, {
                            accountId: "1004311111",
                            accountName: "踩刹车",
                            accountEmail: "alipa01@alitest.com",
                            order: 6,
                            current: false
                        } ]
                    }, window.debugAjaxError ? "deny" : "success");
                }
            }, 500);
        }
    });
});