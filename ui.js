
var rf = require('fs');

module.exports = {
	inlineCss: function(key) {
		if (!key) return null;
        try {
            return rf.readFileSync('views/embed/' + key + '.css','utf-8');
        } catch(e) {
            return '';
        }
	},
	inlineJs: function(key) {
		if (!key) return null;
        try {
            return rf.readFileSync('views/embed/' + key + '.js','utf-8');
        } catch(e) {
            return '';
        }
	}
};