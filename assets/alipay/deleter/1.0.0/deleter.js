define("alipay/deleter/1.0.0/deleter", ["./deleter.css"], function(a, b, c) {"use strict";
	var d = jQuery;
	a("./deleter.css");
	var e = ".sl-deleter", f = '<span class="sl-deleter fn-hide"><i class="iconfont" title="删除">&#xF045;</i></span>', g = function(a) {
		return a && a.eq ? (a.keyup(function() {
			d(this).parent().find(e).toggle(!!d.trim(d(this).val()))
		}).parent().css("position", "relative").append(f).find(e).hover(function() {
			d(this).addClass("sl-deleter-hover")
		}, function() {
			d(this).removeClass("sl-deleter-hover")
		}).click(function(b) {
			b.preventDefault(), d(this).hide(), a.val("").focus().trigger("change")
		}),
		void 0) : !1
	};
	c.exports = g
}), define("alipay/deleter/1.0.0/deleter.css", [], function() {
	seajs.importStyle(".sl-deleter{cursor:pointer;position:absolute;border-radius:11px;width:22px;height:22px;top:8px;right:10px;display:block;line-height:22px;text-align:center;font-size:18px;z-index:2;background:#fff;zoom:1}.sl-deleter .iconfont{width:20px;height:20px;font-size:18px;color:#ababab;cursor:pointer;line-height:20px}.sl-deleter:hover .iconfont,.sl-deleter-hover .iconfont{color:#6d6d6d}")
});
