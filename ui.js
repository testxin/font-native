
var rf = require('fs');

module.exports = {
	inlineCss: function(key) {
		if (!key) return null;
		return rf.readFileSync('views/embed/' + key + '.css','utf-8');
	},
	inlineJs: function(key) {
		if (!key) return null;
		return rf.readFileSync('views/embed/' + key + '.js','utf-8');
	}
};