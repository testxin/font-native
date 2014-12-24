define(function(require, exports, module) {

    var Cellula = require('cellula');
    var FDP = require('fdp_1_1_0');
    var Select = require('select');
    var $ = require('$');

    var FormItem = FDP.FormItem;
    var Form = FDP.Form;
    var Paginator = FDP.Paginator;
    var util = Cellula._util, Class = Cellula.Class, Element = Cellula.Element, Cell = Cellula.Cell, Coll = Cellula.Collection;

    /*
     * mock async
     * it's need to deleted later.
     */
    $.extend({
        ajax : function(opts) {
            if (!console.info) {
                console.info = console.log;
            }
            console.info('DUMMY AJAX started.');
            var params = typeof opts.data === 'string' ? $.deparam(opts.data) : opts.data;
            console.info(params);
            setTimeout(function() {
                if (opts.url == 'checkusername.json') {
                    opts.success({
                        queryForm : params,
                        stat : 'ok',
                        errorCode : '',
                        errorMsg : '',
                        result : true
                    });
                }
                if (opts.url == 'checkusername2.json') {
                    opts.success({
                        queryForm : params,
                        stat : 'ok',
                        errorCode : '',
                        errorMsg : '',
                        result : true
                    });
                }
            }, 1000);
        }
    });
    /*******************************************************/

    /** 用户名 **/
    var UserName = FormItem.build('UserName', {
        //required: false,
        type : 'input',
        label : '姓名',
        init : function(conf) {
            this._super(conf);
            this.addRule('isChinese', function(options) {
                if (!/[\u4e00-\u9fa5]+/.test(options.element.value)) {
                    return false;
                } else {
                    return true;
                }
            }, '只能包含中文字符').addRule('legal', function(options, commit) {
                    $.ajax({
                        url : 'checkusername.json',
                        type : 'POST',
                        data : {
                            userid : 1023
                        },
                        success : function(resp) {
                            if (resp.result) {
                                commit(true);
                            } else {
                                commit(false, '非法的用户名');
                            }
                        },
                        error : function() {
                        }
                    });
                }).addRule('legal2', function(options, commit) {
                    $.ajax({
                        url : 'checkusername2.json',
                        type : 'POST',
                        data : {
                            userid : 1024
                        },
                        success : function(resp) {
                            if (resp.result) {
                                commit(true);
                            } else {
                                commit(false, '非法的用户名22222');
                            }
                        },
                        error : function() {
                        }
                    });
                });
        }
    });
    /* 性别 */
    var Sex = FormItem.build('Sex', {
        type : 'radio',
        label : '性别',
        init : function(conf) {
            this._super(conf);
        }
    });

    var Hobby = FormItem.build('Hobby', {
        required : false,
        type : 'checkbox',
        label : '爱好',
        init : function(conf) {
            this._super(conf);
        }
    });

    var Type = FormItem.build('type', {
        type : 'select',
        label : '类别',
        select: undefined,
        init : function(conf) {
            this._super(conf);
            var _self = this;
            var isFirst = true;
            this.select = new Select({
                width : 100,
                size : 3,
                zIndex : 2,
                onSelect: function() {
                    if (!isFirst) {
                        _self.triggerValidate();
                    }
                    isFirst = false;
                }
            }).apply(this.element);
        }
    });

    var Memo = FormItem.build('Memo', {
        required : false,
        type : 'textarea',
        label : '备注',
        defaultTip : '',
        maxLength : undefined,
        init : function(conf) {
            this._super(conf);
            this.maxLength = parseInt(this.element.getAttribute('data-maxlength'), 10) * 2;
            this._bindAll('limit');
            $(this.element).on('change keyup', this.limit);
            this.defaultTip = this.tip;
            this.addRule('limitWord', function(options, commit) {
                var msg;
                var val = options.element.value;
                var len = val.replace(/[\u4E00-\u9FBF]/g, 'BB').length;
                if (len > this.maxLength) {
                    msg = this.tip = '输入已超过' + Math.floor((len - this.maxLength) / 2) + '个字。';
                    //commit(false, msg);
                    this.setMessage('limitWord', msg);
                    return false;
                } else {
                    msg = this.tip = '还可以输入' + Math.ceil((this.maxLength - len) / 2) + '个字。';
                    //commit(true, msg);
                    return true;
                }
            });
        },
        limit : function(e) {
            var _self = this, t = null;
            //t = setTimeout(function() {
            if ($.trim(_self.element.value) == '') _self.tip = _self.defaultTip;
            _self.triggerValidate();
            //clearTimeout(t);
            //}, 200);
        }
    });

    /** collection **/
    var formElements = {
        username : new UserName({
            key : 'username'
        }),
        sex : new Sex({
            key : 'sex'
        }),
        hobby : new Hobby({
            key : 'hobby'
        }),
        type : new Type({
            key : 'type'
        }),
        memo : new Memo({
            key : 'memo'
        })
    };

    var ResumeForm = Form.build('ResumeForm', {
        type : 'single',
        itemList : null,
        //submitBtn: '#J_submit',
        init : function(conf) {
            this._super(conf);
        }
    });

    var resumeForm = new ResumeForm({
        key : 'resumeForm',
        itemList : formElements
    });

    module.exports = resumeForm;

});
