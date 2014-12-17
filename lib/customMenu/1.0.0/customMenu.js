define(function(require, exports, module) {
    var $ = require("$"),
        Atip = require("atip"),
        Popup = require("popup"),
        Templatable = require("templatable");

    var FIELDS = [ "data-tip", "data-link", "data-target", "data-action", // delete删除, edit-memo编辑备注, cancel-peer-pay取消代付, close-repay关闭还款, download-voucher下载回单
        "disabled", // 原来的 class="ft-gray"
        "class", // split
        "seed", "data-fund-change" ];
    function camelCase(str) {
        return str.replace(/(\-[a-z])/g, function($1) {
            return $1.toUpperCase().replace("-", "");
        });
    }
    function getDataFromOptions(select) {
        var i, attrs = [], options = select[0].options, l = options.length;
        for (i = 0; i < l; i++) {
            var o = {}, option = $(options[i]);
            for (var j = 0, length = FIELDS.length; j < length; j++) {
                var field = FIELDS[j];
                var val = option.attr(field);
                if (val !== undefined) {
                    o[camelCase(field)] = val;
                }
            }
            o["text"] = option.text();
            o["index"] = i;
            o.specialClass = i == 0 ? "first" : i == l - 1 ? "last" : "";
            attrs.push(o);
        }
        return attrs;
    }
    var CustomMenu = Popup.extend({
        Implements: [ Templatable ],
        attrs: {
            select: {
                setter: function(val) {
                    return $(val);
                }
            },
            classPrefix: {
                value: "custom-menu",
                setter: function(val) {
                    this.model.classPrefix = val;
                    return val;
                }
            }
        },
        template: require("./customMenuTpl"),
        initAttrs: function(config, dataAttrsConfig) {
            CustomMenu.superclass.initAttrs.apply(this, [].slice.call(arguments, 0));
            this.model = {
                options: getDataFromOptions(this.get("select")),
                classPrefix: this.get("classPrefix")
            };
        },
        setup: function() {
            CustomMenu.superclass.setup.apply(this, [].slice.call(arguments, 0));
            var that = this;
            // 替换触发元素链接的文案为第一个选项的文案，例如付款、详情等。
            var text = $("li:first a", this.element).text();
            $("span:first", this.get("trigger")).text(text);
            if (text !== "详情" && text !== "退款" && text !== "备注") {
                this.get("trigger").addClass("operation-menu-trigger-hot");
            }
            /**
             * 计算一个汉字在页面中的宽度
             * @return number
             */
            var oneWordWidth = function() {
                //一个汉字在select列表中的宽度
                var tempNode = document.createElement("span");
                tempNode.innerHTML = "字";
                document.body.appendChild(tempNode);
                var oneWordWidth = tempNode.offsetWidth;
                document.body.removeChild(tempNode);
                return oneWordWidth;
            }();
            // 在 ie 6 下宽度需要动态计算否则就悲剧了, shit
            var children = $("ul li", this.element);
            var max = -1;
            children.each(function(i, v) {
                v = $(v);
                var w = $.trim(v.text()).length;
                if (w > max) {
                    max = w;
                }
            });
            var width = max * oneWordWidth + 28;
            this.element.width(width);
            // 如果有 data-tip，则滑过有提示
            $.each(this.model.options, function(i, option) {
                var tiptext = option[camelCase("data-tip")];
                if (tiptext) {
                    new Atip({
                        trigger: $("li", that.element).get(i),
                        content: tiptext,
                        arrowPosition: 2,
                        theme: "yellow",
                        width: 212,
                        delay: -1
                    });
                }
            });
        },
        events: {
            "mouseenter li": function(e) {
                var dom = $(e.target);
                if (!dom.is("li")) dom = dom.parents("li");
                dom.addClass("hover");
            },
            "mouseleave li": function(e) {
                var dom = $(e.target);
                if (!dom.is("li")) dom = dom.parents("li");
                dom.removeClass("hover");
            },
            "click li a[data-action]": function(e) {
                e.preventDefault();
                var target = $(e.target);
                this.trigger("action:" + target.attr("data-action"), target);
            },
            "click li a[disabled]": function(e) {
                e.preventDefault();
            }
        }
    });

    module.exports = CustomMenu;

});