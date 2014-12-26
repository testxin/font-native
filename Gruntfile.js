'use strict';

module.exports = function(grunt) {

	var transport = require('grunt-cmd-transport');
	var style = transport.style.init(grunt);
	var text = transport.style.init(grunt);
	var script = transport.script.init(grunt);
	
	// Project configuration.
	grunt.initConfig({
		// Metadata.
		pkg : grunt.file.readJSON('package.json'),
		banner : '/*! <%= pkg.name %> - v<%= pkg.version %> - ' + '<%= grunt.template.today("yyyy-mm-dd") %>\n' + '<%= pkg.homepage ? "* " + pkg.homepage + "\\n" : "" %>' + '* Copyright (c) <%= grunt.template.today("yyyy") %> <%= pkg.author.name %>;' + ' Licensed <%= _.pluck(pkg.licenses, "type").join(", ") %> */\n',
		// Task configuration.
		copy : {
			/*
			 * assets 为静态文件的目录，存放编译打包后的js&css
			 */
			sea: {
				files : [{
					expand : true,
					cwd : 'lib/',
					src : ['sea.js', 'seajs-style/**'],
					dest : 'assets'
				}]
			},
			$ : { // jQuery 默认请求sea-modules下的 $
				files : [{
					expand : true,
					cwd : 'lib/',
					src : ['$.js', '$-2.1.1.js'],
					dest : 'assets'
				}]
			},
			cp_araleModule: {
				files : [{
					expand : true,
					cwd : 'sea-modules/',
					src : ['arale/**', 'alipay/**', 'gallery/**', 'alice/**'],
					dest : 'assets'
				}]
			},
			arale : { // 为了避免解析依赖模块错误，需要事先将依赖的组件模块cp到项目根目录下
				files : [{
					expand : true,
					cwd : 'sea-modules/',
					src : ['arale/**', 'alipay/**', 'gallery/**'],
					dest : '.'
				}]
			},
			// 自定义插件，放在公共目录下面
			select : {
				files : [{
					expand : true,
					cwd : 'lib/',
					src : ['select/1.0.0/*'],
					dest : 'assets'
				}]
			},
			money : {
				files : [{
					expand : true,
					cwd : 'lib/',
					src : ['money/1.0.0/*'],
					dest : 'assets'
				}]
			},
            zeroclipboard: {
                files: [{
                    expand: true,
                    cwd: 'lib/',
                    src : ['zeroclipboard/1.1.7/*'],
                    dest: 'assets'
                }]
            },
			tinyscrollbar: {
				files : [{
					expand : true,
					cwd : 'lib/',
					src : ['tinyscrollbar/1.0.0/*'],
					dest : 'assets'
				}]
			},
			accountswitcher:  {
				files : [{
					expand : true,
					cwd : 'lib/',
					src : ['accountswitcher/1.0.3/*'],
					dest : 'assets'
				}]
			},
			mockAsyn: {
				files : [{
					expand : true,
					cwd : 'lib/',
					src : ['mockAsyn/1.0.0/*'],
					dest : 'assets'
				}]
			},
			cellula : {
				files : [{
					expand : true,
					cwd : 'lib/',
					src : ['cellula/0.4.2/*.js'],
					dest : 'assets'
				}]
			},
			fdp : {
				files : [{
					expand : true,
					cwd : 'lib/',
					src : ['fdp/**/*.js'],
					dest : 'assets'
				}]
			},
            deleter: {
                files : [{
                    expand : true,
                    cwd : 'lib/',
                    src : ['deleter/**/*'],
                    dest : 'assets'
                }]
            },
            customMenu: {
                files : [{
                    expand : true,
                    cwd : 'lib/',
                    src : ['customMenu/**/*'],
                    dest : 'assets'
                }]
            },
            globalcss: {
				files : [{
					expand : true,
					cwd : 'static/css/',
					src : ['global/**/*.css'],
					dest : 'assets'
				}]
			},
            commonjs: {
				files : [{
					expand : true,
					cwd : 'static/js/',
					src : ['common/**/*.js'],
					dest : 'assets'
				}]
			}
		},
		transport : {
			options : {
				debug : false,
				alias : '<%= pkg.alias %>',
				parsers : {
					'.js' : [script.jsParser],
					'.css' : [style.css2jsParser]
				},
				paths : ['assets']
			},
			select : {
				options : {
					idleading : 'select/1.0.0/'
				},
				files : [{
					expand : true,
					filter : 'isFile',
					cwd : 'lib/select/1.0.0',
					src : '*.js',
					dest : 'assets/select/1.0.0'
				}]
			},
			money : {
				options : {
					idleading : 'money/1.0.0/'
				},
				files : [{
					expand : true,
					filter : 'isFile',
					cwd : 'lib/money/1.0.0',
					src : '*.js',
					dest : 'assets/money/1.0.0'
				}]
			},
            zeroclipboard: {
                options : {
                    idleading : 'zeroclipboard/1.1.7/'
                },
                files : [{
                    expand : true,
                    filter : 'isFile',
                    cwd : 'lib/zeroclipboard/1.1.7',
                    src : '*.js',
                    dest : 'assets/zeroclipboard/1.1.7'
                }]
            },
			tinyscrollbar: {
				options : {
					idleading : 'tinyscrollbar/1.0.0/'
				},
				files : [{
					expand : true,
					filter : 'isFile',
					cwd : 'lib/tinyscrollbar/1.0.0',
					src : '*.js',
					dest : 'assets/tinyscrollbar/1.0.0'
				}]
			},
			cellula : {
				options : {
					idleading : 'cellula/0.4.2/'
				},
				files : [{
					expand : true,
					filter : 'isFile',
					cwd : 'lib/cellula/0.4.2',
					src : '*.js',
					dest : 'assets/cellula/0.4.2'
				}]
			},
			fdp_1_0_0 : {
				options : {
					idleading : 'fdp/1.0.0/'
				},
				files : [{
					expand : true,
					filter : 'isFile',
					cwd : 'lib/fdp/1.0.0',
					src : '*.js',
					dest : 'assets/fdp/1.0.0'
				}]
			},
			fdp_1_1_0: {
				options : {
					idleading : 'fdp/1.1.0/'
				},
				files : [{
					expand : true,
					filter : 'isFile',
					cwd : 'lib/fdp/1.1.0',
					src : '*.js',
					dest : 'assets/fdp/1.1.0'
				}]
			},
			mockAsyn: {
				options : {
					idleading : 'mockAsyn/1.0.0/'
				},
				files : [{
					expand : true,
					filter : 'isFile',
					cwd : 'lib/mockAsyn/1.0.0',
					src : '*.js',
					dest : 'assets/mockAsyn/1.0.0'
				}]
			},
            deleter: {
                options : {
                    idleading : 'deleter/1.0.0/'
                },
                files : [{
                    expand : true,
                    filter : 'isFile',
                    cwd : 'lib/deleter/1.0.0',
                    src : '*.js',
                    dest : 'assets/deleter/1.0.0'
                }]
            },
            customMenu: {
                options : {
                    idleading : 'customMenu/1.0.0/'
                },
                files : [{
                    expand : true,
                    filter : 'isFile',
                    cwd : 'lib/customMenu/1.0.0',
                    src : '*.js',
                    dest : 'assets/customMenu/1.0.0'
                }]
            },
            /*
             * 业务层
             */
			mytest: {
				options : {
					idleading : 'mytest/1.0.0/'
				},
				files : [{
					expand : true,
					filter : 'isFile',
					cwd : 'static/js/mytest/1.0.0',
					src : '*.js',
					dest : 'assets/mytest/1.0.0'
				}]
			}
		},
		cssmin: {
            options: {
                //keepSpecialComments: 0
            },
            minify: {
                expand: true,
                cwd: 'assets/',
                src: ['select/**/*.css', 'tinyscrollbar/**/*.css', 'deleter/**/*.css'],
                dest: 'assets/',
                ext: '.css'
            },
	        compress: {
	             files: {
	                 'assets/global/1.0.0/global.css': ['static/css/global/1.0.0/*.css'],
	                 'assets/columnal/2.0/columnal.css': ['lib/columnal/code/css/columnal.css'],
                     'assets/foundation/5.5.0/foundation.css': ['lib/foundation/5.5.0/css/normalize.css', 'lib/foundation/5.5.0/css/foundation.css']
	             }
	        }
     	},
        css_import: {
            compress: {
                files: {
                    'assets/mytest/1.0.0/mytest.css': ['static/css/mytest/1.0.0/all_modules.css']
                }
            }
        },
		concat : {
			cellula: {
                options : {
                    paths : ['.'],
                    separator: ';'
                },
				files : {
					'assets/cellula/0.4.2/cellula.js': ['assets/cellula/0.4.2/*.js']
				}
			},
			fdp : {
                options : {
                    paths : ['.'],
                    separator: ';'
                },
				files : {
					'assets/fdp/1.0.0/fdp.js': ['assets/fdp/1.0.0/*.js'],
					'assets/fdp/1.1.0/fdp.js': ['assets/fdp/1.1.0/*.js']
				}
			},
            foundation : {
                options : {
                    noncmd: true
                },
                files: {
                    'assets/foundation/5.5.0/foundation.js': ['lib/foundation/5.5.0/js/vendor/*.js', 'lib/foundation/5.5.0/js/foundation.js', 'lib/foundation/5.5.0/js/foundation/*.js']
                }
            }
		},
        uglify : {
            options: {
                mangle: true
            },
            compress: {
                files : [{
                    expand : true,
                    cwd : 'assets/',
                    src : ['$.js', 'select/**/*.js', 'cellula/**/*.js', 'fdp/**/*.js', 'tinyscrollbar/**/*.js', 'money/**/*.js', 'deleter/**/*.js', 'foundation/5.5.0/foundation.js', 'common/**/*.js', 'mytest/**/*.js'],
                    dest : 'assets/'
                }]
            }
        },
		clean : {
			temp : ['arale', 'alipay', 'gallery', 'alice']
		}
	});

	// These plugins provide necessary tasks.
	grunt.loadNpmTasks('grunt-contrib-copy');
	grunt.loadNpmTasks('grunt-cmd-transport');
	grunt.loadNpmTasks('grunt-cmd-concat');
	grunt.loadNpmTasks('grunt-contrib-clean');
	grunt.loadNpmTasks('grunt-contrib-cssmin');
	grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-css-import');
	//grunt.loadNpmTasks('grunt-contrib-nodeunit');
	// grunt.loadNpmTasks('grunt-contrib-jshint');
	// grunt.loadNpmTasks('grunt-contrib-watch');
	// Default task.
	grunt.registerTask('native', [
		'copy',
		'transport',
		'concat',
		'cssmin',
        'css_import',
		'clean',
        'uglify'
	]);

};
