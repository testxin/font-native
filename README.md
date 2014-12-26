## 前端本地开发环境 ##

---

本地构建环境： `node v0.10.26` `npm 1.4.3` `grunt 0.4.5` `express3.18.4`

##开始##

----

1. 将项目克隆到本地：`git clone git@github.com:ar-insect/native.git`

2. 切换到项目根目录下面，比如：`cd ~/native`依次执行

    `npm install` 安装项目所需要的插件

    `grunt native` 部署本地静态资源，成功后在项目根目录下会产出assets目录（只在初次执行）

    `node app.js` 例如访问：http://localhost:3000就可以看到本地环境的页面效果

##如何在本地快速新建一个页面？##

----

以项目中的singleForm案例来简述构建过程：

1. 在views/templates/mytest 下面建立一个模板文件`singleForm.vm`这个模板是页面的主体部分（不包含页面的头尾）

2. 在controllers/mytest下面建立一个nodejs文件`singleForm.js`用来mock业务数据和渲染模板

3. 在static/js/mytest/1.0.0下面建立一个singleForm.js就是页面对应的业务脚本，打开views/templates/index.vm入口模板增加一段逻辑判断

        #elseif ($!__key == 'mytest/singleForm')
        #parse("/mytest/singleForm.vm")

4. 在`gruntfile.js`里面新增样式脚本部署的相关配置（依赖配置在`package.json`的`alias`）

5. 在项目根目录下执行`grunt native`打包部署静态资源

6. 打开views/config/css.vm和views/config/js.vm配置页面引用的样式脚本（内联样式脚本则在views/embed/mytest下面配置，建立和模板名称一致的.css&.js）

7. 修改`routes.js`加入页面访问的路由

8. 项目根目录下执行`node app.js`访问`http://localhost:3000/mytest/singleForm`

**Tips**

- 每次对项目中的`js&css` 改动都需要执行`grunt native`

- 修改controllers下面的js文件需要重启node服务`node app.js`

##如何配置脚手架整合的ui library？##

在controllers层的nodejs文件中设置：

**useColumnal: true** 加载columnal2.0

**useFoundation: true** 加载Foundation5.5.0

具体可以参考`controllers/mytest/foundation.js`

##Q&A##

----

- 问：这套ui-library主要用来完成什么任务？

答：库里面整合了一些基础交互组件，不依赖于服务器环境和后端，直接下载到本地开发、部署，在本地完成mockdata调试。

- 问：有没有案例可以参考一下呢？

答：本地访问： `http://localhost:3000/mytest/singleForm`

- 问：关于自己开发组件模块的规范是什么呢？

答：现在库里面已经有`cellula` `fdp`之类的公共模块了，理论上我们在开发环境中会涉及到2大类型的模块，一类是公共的模块，也就是可以供不同系统和业务使用的模块，它们通常是`js`底层的类库扩展或者是基于场景模型的构建，比如`cellula` `fdp`之类，它们存放在lib下面，另一类是纯业务型的模块组件，它们存放在`static`下面，而`assets`则是存放系统编译打包压缩后的`js&css`也就是在线上环境被调用的静态文件。

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
	
