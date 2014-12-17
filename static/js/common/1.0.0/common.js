
var VERSION = '1.0.0';

var mytest_func = function(){
	return 'hello, this is my test for version ' + VERSION;
}();

window.console && console.log(mytest_func);