## 前端本地开发环境 ##

---

本地构建环境： `node v0.10.26` `npm 1.4.3` `grunt 0.4.5` `express3.18.4`

##开始##

----

1. 将项目克隆到本地：`git clone git@github.com:ar-insect/native.git`

2. 切换到项目根目录下面，比如：`cd ~/native`

3. 执行 `npm install` 安装项目所需要的插件

4. 本地起一个node服务--`node app.js` 例如访问：http://localhost:3000就可以看到本地环境的页面效果

5. 在本地完成js&css开发后需要在`gruntfile.js`里面部署配置（依赖配置在`package.json`的`alias`）

6. 在项目的根目录执行 `grunt native` 完成静态文件的部署和打包，本地会产出一个assets的目录，脚本样式部署到这里

7. 最后别忘记在本地测试ok提交代码哦~（提交前先`git fetch origin` `git diff master origin/master` 确认无误后再执行 `git merge origin/master`）

**Tips**

----

- 每次对项目中的`js&css` 改动都需要执行`grunt native`

- 修改controllers下面的js文件需要重启node服务`node app.js`

##Q&A##

----

- 问：这套ui-library主要用来完成什么任务？

答：库里面整合了一些基础交互组件，不依赖于服务器环境和后端，直接下载到本地开发、部署，在本地完成mockdata调试。

- 问：有没有案例可以参考一下呢？

答：本地访问： `http://localhost:3000/mytest/`

- 问：关于自己开发组件模块的规范是什么呢？

答：现在库里面已经有`cellula` `fdp`之类的公共模块了，理论上我们在开发环境中会涉及到2大类型的模块，一类是公共的模块，也就是可以供不同系统和业务使用的模块，它们通常是`js`底层的类库扩展或者是基于场景模型的构建，比如`cellula` `fdp`之类，它们存放在lib下面，另一类是纯业务型的模块组件，它们存放在`static`下面，而`assets`则是存放系统编译打包压缩后的`js&css`也就是在线上环境被调用的静态文件。

- 问：如何在本地快速新建一个页面？

答：首先在controllers目录下面建立一个nodejs中间层供业务输出mockdata具体可以参考下`mytest/index.js`然后在views/templates目录下面建立一个vm模板，具体可以参考`mytest/index.vm`最后在routes.js里面配置页面访问的路由，例如：`app.get('/mytest/', mytest.index);`

- 问：如何配置编写好的样式和脚本呢？

答：	1.样式和脚本在本地完成开发后在Gruntfile.js里面配置好执行`grunt native`

2.打开views/config/css.vm文件配置系统全局样式或者模块页面样式，配置脚本在views/config/js.vm方法类似

##本地目录结构##

----

	|-- `assets` 静态文件资源库（存放编译打包后的js&css）
	
			|-- `alipay`
			
			|-- `arale`
			
			|-- `cellula`
			
			|-- `fdp` `Form` `dataView` `paginator`
			
			|-- `gallery`
			
			|- `seajs-style`
			
			|-- `select`
			
			|-- `tinyscrollbar`
			
			|-- ...
			
	|-- `controllers` 业务层
	
	|-- `images` 
	
	|-- `lib` 公共js库

    |-- `public` 公共文件

	|-- `sea-modules` js依赖的组件模块

	/-- `static` 静态文件
	
	/-- `views`
			
			|-- config 样式脚本配置
			
			|-- templates 模板
	
	Gruntfile.js 静态资源部署脚本

	routes.js 站点路由配置

	app.js 站点入口

	config.js 站点配置

	package.js 项目配置
	
