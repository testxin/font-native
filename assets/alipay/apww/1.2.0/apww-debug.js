define("alipay/apww/1.2.0/apww-debug", [ "$-debug", "./apww-debug.css" ], function(require, exports, module) {
    var $ = require("$-debug");
    var LIGHT_TYPE = [ "offline", "online", "mobile" ], DEFAULT_TRIGGER = ".J_aliwangwang", DEFAULT_PREFIX_CLASS = "ui-ww", LINK_URL = "http://www.taobao.com/webww/ww.php?ver=3&siteid=cntaobao&status=1&charset=utf-8&touid=", JSONP_URL = "/muliuserstatus.aw?beginnum=0&site=cntaobao&charset=utf-8&callback=define&uids=";
    exports.init = function(options) {
        require("./apww-debug.css");
        options = options || {};
        var host = options.host ? options.host : "https://couriercore.alipay.com";
        var accoutList = [], nameList = [];
        // 解析所有的 DOM，获取旺旺名
        $(options.trigger || DEFAULT_TRIGGER).each(function(i, o) {
            var wwname = $(o).attr("data-account");
            if (wwname) {
                accoutList.push(o);
                nameList.push(encodeURIComponent(wwname));
            }
        });
        // 没有则不请求
        if (nameList.length === 0) return;
        // 异步请求旺旺状态
        require.async(host + JSONP_URL + nameList.join(";"), function(result) {
            $.each(accoutList, function(i, o) {
                var status = LIGHT_TYPE[result && result.success ? result.data[i] : 0];
                var wwClass = options.classPrefix || DEFAULT_PREFIX_CLASS;
                // 设置状态样式
                $(o).addClass([ wwClass, wwClass + "-" + status ].join(" ")).attr("href", LINK_URL + encodeURIComponent($(o).attr("data-account"))).attr("target", "_blank");
            });
        });
    };
});

define("alipay/apww/1.2.0/apww-debug.css", [], function() {
    seajs.importStyle("a.ui-ww{background:url(https://i.alipayobjects.com/common/wangwang/apww130x60.gif) no-repeat scroll 0 0 transparent;display:inline-block;*display:inline;zoom:1;text-decoration:none!important;height:20px;width:67px}a.ui-ww-online{background-position:0 0}a.ui-ww-offline{background-position:0 -20px}a.ui-ww-mobile{background-position:0 -40px}.ui-ww-small{background:url(https://i.alipayobjects.com/common/wangwang/apww130x60.gif) no-repeat scroll 0 0 transparent;display:inline-block;*display:inline;zoom:1;text-decoration:none!important;height:20px;width:20px}.ui-ww-small-online{background-position:-80px 0}.ui-ww-small-offline{background-position:-80px -20px}.ui-ww-small-mobile{background-position:-80px -40px}.ui-ww-static{background:url(https://i.alipayobjects.com/common/wangwang/apww130x60.gif) no-repeat scroll 0 0 transparent;display:inline-block;*display:inline;zoom:1;text-decoration:none!important;height:20px;width:20px}.ui-ww-static-online{background-position:-110px 0}.ui-ww-static-offline{background-position:-110px -20px}.ui-ww-static-mobile{background-position:-110px -40px}");
});
