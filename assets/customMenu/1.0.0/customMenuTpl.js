define("customMenu/1.0.0/customMenuTpl", [ "gallery/handlebars/1.0.0/handlebars" ], function(require, exports, module) {
    var Handlebars = require("gallery/handlebars/1.0.0/handlebars");
    (function() {
        var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
        module.exports = template(function(Handlebars, depth0, helpers, partials, data) {
            this.compilerInfo = [ 2, ">= 1.0.0-rc.3" ];
            helpers = helpers || Handlebars.helpers;
            data = data || {};
            var buffer = "", stack1, options, functionType = "function", escapeExpression = this.escapeExpression, self = this, blockHelperMissing = helpers.blockHelperMissing;
            function program1(depth0, data, depth1) {
                var buffer = "", stack1, stack2, options;
                buffer += '\n            <li class="' + escapeExpression((stack1 = depth1.classPrefix, 
                typeof stack1 === functionType ? stack1.apply(depth0) : stack1)) + "-item ";
                if (stack2 = helpers.specialClass) {
                    stack2 = stack2.call(depth0, {
                        hash: {},
                        data: data
                    });
                } else {
                    stack2 = depth0.specialClass;
                    stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2;
                }
                buffer += escapeExpression(stack2) + " ";
                if (stack2 = helpers["class"]) {
                    stack2 = stack2.call(depth0, {
                        hash: {},
                        data: data
                    });
                } else {
                    stack2 = depth0["class"];
                    stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2;
                }
                buffer += escapeExpression(stack2) + " ";
                options = {
                    hash: {},
                    inverse: self.noop,
                    fn: self.program(2, program2, data),
                    data: data
                };
                if (stack2 = helpers.disabled) {
                    stack2 = stack2.call(depth0, options);
                } else {
                    stack2 = depth0.disabled;
                    stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2;
                }
                if (!helpers.disabled) {
                    stack2 = blockHelperMissing.call(depth0, stack2, options);
                }
                if (stack2 || stack2 === 0) {
                    buffer += stack2;
                }
                buffer += '">\n                <a href="';
                options = {
                    hash: {},
                    inverse: self.noop,
                    fn: self.programWithDepth(program4, data, depth0),
                    data: data
                };
                if (stack2 = helpers.dataLink) {
                    stack2 = stack2.call(depth0, options);
                } else {
                    stack2 = depth0.dataLink;
                    stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2;
                }
                if (!helpers.dataLink) {
                    stack2 = blockHelperMissing.call(depth0, stack2, options);
                }
                if (stack2 || stack2 === 0) {
                    buffer += stack2;
                }
                options = {
                    hash: {},
                    inverse: self.program(6, program6, data),
                    fn: self.noop,
                    data: data
                };
                if (stack2 = helpers.dataLink) {
                    stack2 = stack2.call(depth0, options);
                } else {
                    stack2 = depth0.dataLink;
                    stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2;
                }
                if (!helpers.dataLink) {
                    stack2 = blockHelperMissing.call(depth0, stack2, options);
                }
                if (stack2 || stack2 === 0) {
                    buffer += stack2;
                }
                buffer += '"\n                    ';
                options = {
                    hash: {},
                    inverse: self.noop,
                    fn: self.programWithDepth(program8, data, depth0),
                    data: data
                };
                if (stack2 = helpers.dataTarget) {
                    stack2 = stack2.call(depth0, options);
                } else {
                    stack2 = depth0.dataTarget;
                    stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2;
                }
                if (!helpers.dataTarget) {
                    stack2 = blockHelperMissing.call(depth0, stack2, options);
                }
                if (stack2 || stack2 === 0) {
                    buffer += stack2;
                }
                buffer += "\n                    ";
                options = {
                    hash: {},
                    inverse: self.noop,
                    fn: self.program(2, program2, data),
                    data: data
                };
                if (stack2 = helpers.disabled) {
                    stack2 = stack2.call(depth0, options);
                } else {
                    stack2 = depth0.disabled;
                    stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2;
                }
                if (!helpers.disabled) {
                    stack2 = blockHelperMissing.call(depth0, stack2, options);
                }
                if (stack2 || stack2 === 0) {
                    buffer += stack2;
                }
                buffer += "\n                    ";
                options = {
                    hash: {},
                    inverse: self.noop,
                    fn: self.program(10, program10, data),
                    data: data
                };
                if (stack2 = helpers.dataFundChange) {
                    stack2 = stack2.call(depth0, options);
                } else {
                    stack2 = depth0.dataFundChange;
                    stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2;
                }
                if (!helpers.dataFundChange) {
                    stack2 = blockHelperMissing.call(depth0, stack2, options);
                }
                if (stack2 || stack2 === 0) {
                    buffer += stack2;
                }
                buffer += "\n                    ";
                options = {
                    hash: {},
                    inverse: self.noop,
                    fn: self.programWithDepth(program12, data, depth0),
                    data: data
                };
                if (stack2 = helpers.dataTip) {
                    stack2 = stack2.call(depth0, options);
                } else {
                    stack2 = depth0.dataTip;
                    stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2;
                }
                if (!helpers.dataTip) {
                    stack2 = blockHelperMissing.call(depth0, stack2, options);
                }
                if (stack2 || stack2 === 0) {
                    buffer += stack2;
                }
                buffer += "\n                    ";
                options = {
                    hash: {},
                    inverse: self.noop,
                    fn: self.programWithDepth(program14, data, depth0),
                    data: data
                };
                if (stack2 = helpers.seed) {
                    stack2 = stack2.call(depth0, options);
                } else {
                    stack2 = depth0.seed;
                    stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2;
                }
                if (!helpers.seed) {
                    stack2 = blockHelperMissing.call(depth0, stack2, options);
                }
                if (stack2 || stack2 === 0) {
                    buffer += stack2;
                }
                buffer += "\n                    ";
                options = {
                    hash: {},
                    inverse: self.noop,
                    fn: self.programWithDepth(program16, data, depth0),
                    data: data
                };
                if (stack2 = helpers.dataAction) {
                    stack2 = stack2.call(depth0, options);
                } else {
                    stack2 = depth0.dataAction;
                    stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2;
                }
                if (!helpers.dataAction) {
                    stack2 = blockHelperMissing.call(depth0, stack2, options);
                }
                if (stack2 || stack2 === 0) {
                    buffer += stack2;
                }
                buffer += ">";
                if (stack2 = helpers.text) {
                    stack2 = stack2.call(depth0, {
                        hash: {},
                        data: data
                    });
                } else {
                    stack2 = depth0.text;
                    stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2;
                }
                buffer += escapeExpression(stack2) + "</a>\n            </li>\n        ";
                return buffer;
            }
            function program2(depth0, data) {
                return "disabled";
            }
            function program4(depth0, data, depth1) {
                var stack1;
                return escapeExpression((stack1 = depth1.dataLink, typeof stack1 === functionType ? stack1.apply(depth0) : stack1));
            }
            function program6(depth0, data) {
                return "#";
            }
            function program8(depth0, data, depth1) {
                var buffer = "", stack1;
                buffer += 'target="' + escapeExpression((stack1 = depth1.dataTarget, typeof stack1 === functionType ? stack1.apply(depth0) : stack1)) + '"';
                return buffer;
            }
            function program10(depth0, data) {
                return 'data-fund-change="true"';
            }
            function program12(depth0, data, depth1) {
                var buffer = "", stack1;
                buffer += 'data-tip="' + escapeExpression((stack1 = depth1.dataTip, typeof stack1 === functionType ? stack1.apply(depth0) : stack1)) + '"';
                return buffer;
            }
            function program14(depth0, data, depth1) {
                var buffer = "", stack1;
                buffer += 'seed="' + escapeExpression((stack1 = depth1.seed, typeof stack1 === functionType ? stack1.apply(depth0) : stack1)) + '"';
                return buffer;
            }
            function program16(depth0, data, depth1) {
                var buffer = "", stack1;
                buffer += 'data-action="' + escapeExpression((stack1 = depth1.dataAction, typeof stack1 === functionType ? stack1.apply(depth0) : stack1)) + '"';
                return buffer;
            }
            buffer += '<div class="';
            if (stack1 = helpers.classPrefix) {
                stack1 = stack1.call(depth0, {
                    hash: {},
                    data: data
                });
            } else {
                stack1 = depth0.classPrefix;
                stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1;
            }
            buffer += escapeExpression(stack1) + '">\n    <ul>\n        ';
            options = {
                hash: {},
                inverse: self.noop,
                fn: self.programWithDepth(program1, data, depth0),
                data: data
            };
            if (stack1 = helpers.options) {
                stack1 = stack1.call(depth0, options);
            } else {
                stack1 = depth0.options;
                stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1;
            }
            if (!helpers.options) {
                stack1 = blockHelperMissing.call(depth0, stack1, options);
            }
            if (stack1 || stack1 === 0) {
                buffer += stack1;
            }
            buffer += "\n    </ul>\n</div>\n";
            return buffer;
        });
    })();
});