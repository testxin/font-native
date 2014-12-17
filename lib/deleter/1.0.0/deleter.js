define(function(require, exports, module){
    /**
     * simulate deleter for input[type="search"] DOM with clear content events
     * extracted from system.auth.accountsaver
     */
    'use strict';

    var $ = require('$');
    require('./deleter.css');

    var dSelector = '.sl-deleter';
    var deleterDom = '<span class="sl-deleter fn-hide"><i class="iconfont" title="删除">&#xF045;</i></span>';

    var deleter = function(inputSearch){
        if (!inputSearch || !inputSearch.eq) {
            return false;
        }
        inputSearch.keyup(function(){
            $(this).parent().find(dSelector).toggle(!!$.trim($(this).val()));
        }).parent().css('position', 'relative').append(deleterDom).find(dSelector).hover(function(){
            $(this).addClass('sl-deleter-hover');
        }, function(){
            $(this).removeClass('sl-deleter-hover');
        }).click(function(e){
            e.preventDefault();
            $(this).hide();
            inputSearch.val('').focus().trigger('change');
        });
    };
    module.exports = deleter;
});
