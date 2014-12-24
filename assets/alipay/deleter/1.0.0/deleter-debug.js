define("alipay/deleter/1.0.0/deleter-debug", [ "./deleter-debug.css" ], function(require, exports, module) {
    /**
     * simulate deleter for input[type="search"] DOM with clear content events
     * extracted from system.auth.accountsaver
     */
    "use strict";
    var $ = jQuery;
    require("./deleter-debug.css");
    var dSelector = ".sl-deleter";
    var deleterDom = '<span class="sl-deleter fn-hide"><i class="iconfont" title="删除">&#xF045;</i></span>';
    var deleter = function(inputSearch) {
        if (!inputSearch || !inputSearch.eq) {
            return false;
        }
        inputSearch.keyup(function() {
            $(this).parent().find(dSelector).toggle(!!$.trim($(this).val()));
        }).parent().css("position", "relative").append(deleterDom).find(dSelector).hover(function() {
            $(this).addClass("sl-deleter-hover");
        }, function() {
            $(this).removeClass("sl-deleter-hover");
        }).click(function(e) {
            e.preventDefault();
            $(this).hide();
            inputSearch.val("").focus().trigger("change");
        });
    };
    module.exports = deleter;
});

define("alipay/deleter/1.0.0/deleter-debug.css", [], function() {
    seajs.importStyle(".sl-deleter{cursor:pointer;position:absolute;border-radius:11px;width:22px;height:22px;top:8px;right:10px;display:block;line-height:22px;text-align:center;font-size:18px;z-index:2;background:#fff;zoom:1}.sl-deleter .iconfont{width:20px;height:20px;font-size:18px;color:#ababab;cursor:pointer;line-height:20px}.sl-deleter:hover .iconfont,.sl-deleter-hover .iconfont{color:#6d6d6d}");
});
