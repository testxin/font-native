define("alipay/xbox/1.1.5/xbox-debug", [ "$-debug", "arale/dialog/1.2.6/dialog-debug", "arale/overlay/1.1.4/overlay-debug", "arale/position/1.0.1/position-debug", "arale/iframe-shim/1.0.2/iframe-shim-debug", "arale/widget/1.1.1/widget-debug", "arale/base/1.1.1/base-debug", "arale/class/1.1.0/class-debug", "arale/events/1.1.0/events-debug", "arale/overlay/1.1.4/mask-debug", "arale/templatable/0.9.2/templatable-debug", "gallery/handlebars/1.0.2/handlebars-debug", "gallery/handlebars/1.0.2/runtime-debug", "alipay/object-shim/1.0.1/object-shim-debug", "./xbox-debug.css" ], function(require, exports, module) {
    var $ = require("$-debug");
    var Dialog = require("arale/dialog/1.2.6/dialog-debug");
    var objectShim = require("alipay/object-shim/1.0.1/object-shim-debug");
    var hideFuncTmp;
    require("./xbox-debug.css");
    var Xbox = Dialog.extend({
        attrs: {
            classPrefix: "alipay-xbox",
            top: "",
            isOld: false,
            // 每次 setPosition 之前都会更新下 top
            align: {
                getter: function(val) {
                    var align = this._syncTop();
                    val.selfXY = align.selfXY;
                    val.baseXY = align.baseXY;
                    return val;
                }
            }
        },
        setup: function() {
            Xbox.superclass.setup.call(this);
            // fix http://gitlab.alibaba-inc.com/alipay-js/xbox/issues/23
            this.set("effect", "none");
            // 安全控件遮挡
            objectShim(this);
            this._setupOld();
            this._setupTop();
            this._setupLoading();
            this._setupAnimation();
        },
        // 私有方法
        // --------
        _setupTop: function() {
            // iframe onload 后调整 top
            this.on("complete:show", function() {
                var that = this;
                setTimeout(function() {
                    that.element && that._setPosition();
                }, 500);
            });
            // 每次高度变化后调整 top
            this.after("_syncHeight", function() {
                // 高度的中间变量，用于比较
                var height = this.element.css("height");
                if (this._tmpHeight !== height) {
                    this._setPosition();
                    this._tmpHeight = height;
                }
            });
        },
        // 兼容老版的登录框
        _setupOld: function() {
            // 如果兼容老版则不显示关闭链接
            if (this.get("isOld")) {
                this.set("closeTpl", "");
            }
            // 注册的 before 比较早，可能获取不到 _type
            this.after("show", function() {
                var that = this;
                if (this.get("isOld") && this._type === "iframe") {
                    var oldXbox = getOldNamespace();
                    if (oldXbox.hide) {
                        hideFuncTmp = oldXbox.hide;
                    }
                    oldXbox.hide = function() {
                        that.hide();
                    };
                }
            });
            this.before("hide", function() {
                if (this.get("isOld")) {
                    var oldXbox = getOldNamespace();
                    if (oldXbox.hide) {
                        if (hideFuncTmp) {
                            oldXbox.hide = hideFuncTmp;
                            hideFuncTmp = null;
                        } else {
                            delete oldXbox.hide;
                        }
                    }
                }
            });
        },
        // 进度条，只在 iframe 的时候显示
        _setupLoading: function() {
            var html = '<div class="' + this.get("classPrefix") + '-loading"></div>';
            var loading = $(html).hide().insertBefore(this.$("[data-role=content]"));
            var interval, count;
            this.after("show", function() {
                if (this._type === "iframe") {
                    loading.css("width", 0).show();
                    count = 10;
                    interval = setInterval(function() {
                        count += 2;
                        if (count <= 80) {
                            loading.css("width", count + "%");
                        } else {
                            clearInterval(interval);
                            setInterval(function() {
                                count++;
                                if (count <= 100) {
                                    loading.css("width", count + "%");
                                }
                            }, 1e3);
                        }
                    }, 150);
                }
            });
            this.on("complete:show", function() {
                clearInterval(interval);
                loading.animate({
                    width: "100%"
                }, 400, function() {
                    loading.fadeOut(400);
                });
            });
        },
        _onRenderTop: function() {
            this.element && this._setPosition();
        },
        _syncTop: function() {
            var top = this.get("top");
            if (top) {
                return {
                    selfXY: [ "50%", 0 ],
                    baseXY: [ "50%", top ]
                };
            } else {
                var h = parseInt(this.element.innerHeight(), 10);
                var v = $(window).height();
                top = niceTop(h, v);
                return {
                    selfXY: [ "50%", 0 ],
                    baseXY: [ "50%", top ]
                };
            }
        },
        _fixUrl: function() {
            var url = Xbox.superclass._fixUrl.call(this);
            return fixUrl(url);
        },
        // 不使用 focus，会导致 top 计算错误
        _setupFocus: function() {},
        // 添加默认的 CSS3 动画效果
        _setupAnimation: function() {
            if (this.get("effect") !== "none") {
                return;
            }
            this.after("show", function() {
                this.element.addClass("alipay-xbox-show").removeClass("alipay-xbox-hide");
            }).after("hide", function() {
                this.element.addClass("alipay-xbox-hide").removeClass("alipay-xbox-show");
            });
        }
    });
    module.exports = Xbox;
    module.exports._niceTop = niceTop;
    // Helper
    // ------
    // url 添加时间戳
    // 支持 http://...?...#...
    function fixUrl(url) {
        var s = url.match(/([^?#]*)(\?[^#]*)?(#.*)?/);
        s.shift();
        s[1] = (s[1] && s[1] !== "?" ? s[1] + "&" : "?") + "_xbox=true";
        return s.join("");
    }
    // 返回浮层距离窗口顶部的距离
    function niceTop(domHeight, viewportHeight) {
        var top = viewportHeight > domHeight ? .35 * (viewportHeight - domHeight) : 30;
        return Math.max(top, 30);
    }
    function getOldNamespace() {
        var namespace = "AP.widget.xBox".split(".");
        var o, parent = window;
        while (o = namespace.shift()) {
            if (o) {
                if (!parent[o]) {
                    parent[o] = {};
                }
                parent = parent[o];
            }
        }
        return parent;
    }
    module.exports.outerBoxClass = "alipay-xbox-1_1_5";
});

define("alipay/xbox/1.1.5/xbox-debug.css", [], function() {
    seajs.importStyle(".alipay-xbox-1_1_5 .alipay-xbox{background-color:rgba(0,0,0,.5);FILTER:progid:DXImageTransform.Microsoft.Gradient(startColorstr=#88000000, endColorstr=#88000000);padding:6px;-webkit-transition:height .3s ease-in-out .3s;-moz-transition:height .3s ease-in-out .3s;-o-transition:height .3s ease-in-out .3s;-ms-transition:height .3s ease-in-out .3s;transition:height .3s ease-in-out .3s;border:0}:root .alipay-xbox-1_1_5 .alipay-xbox{FILTER:none\\9}.alipay-xbox-1_1_5 .alipay-xbox-content{background:#fff;height:100%;*zoom:1}.alipay-xbox-1_1_5 .alipay-xbox-close{color:#999;cursor:pointer;display:block;font-family:tahoma;font-size:24px;font-weight:700;height:18px;line-height:14px;position:absolute;right:16px;text-decoration:none;top:16px;z-index:10}.alipay-xbox-1_1_5 .alipay-xbox-close:hover{color:#666;text-shadow:0 0 2px #aaa}.alipay-xbox-1_1_5 .alipay-xbox-loading{border-radius:10px;position:absolute;top:-2px;*top:0;top:0\\0;left:0;background:#CBFE1C;box-shadow:0 0 12px #CBFE1C;height:2px;zoom:1;overflow:hidden}.alipay-xbox-1_1_5 .alipay-xbox,.alipay-xbox-1_1_5 .alipay-xbox-hide{-webkit-transform:scale(0.7);-moz-transform:scale(0.7);-ms-transform:scale(0.7);transform:scale(0.7);opacity:0;-webkit-transition:opacity .2s,transform .2s;-moz-transition:opacity .2s,transform .2s;transition:opacity .2s,transform .2s}.alipay-xbox-1_1_5 .alipay-xbox-show{-webkit-transform:none;-moz-transform:none;-ms-transform:none;transform:none;opacity:1}");
});
