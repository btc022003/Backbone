IDE:JetBrains PyCharm
FrameWork：django,django-rest-framework,Backbone,Jquery,Json2,underscore,requirejs
---------------------js部分-------------------------------------
backbone学习记录

///////修改 Backbone.emulateJSON = true 使用form的方式提交数据不使用rest方式

2013-11-27 
目录说明
js:基础js类库
javascripts:程序相关的js

2013-11-28
测试使用django rest framework实现api接口
数据库使用sqlite

2013-11-29
 requirejs 这个还需要再优化  还有view model分离的事情
 更新的功能实现在/templates/hello_view.html文件中




---------------------python部分-----------------------------------------

1.start
    熟悉django框架
    目录讲解：
             a.DjangoRest django的core目录
             b.RootApi    app目录
             c.templates  模板文件
             d.static    资源文件js css img等
    配置文件 DjangoRest/settings.py
             DATABASES 数据库配置节点
             TIME_ZONE 时区
             INSTALLED_APPS 添加自己的app名字
    urls路由  DjangoRest/urls.py
            正则表达式方式的配置方法,注意引入自己的view.py


    使用已有的数据库生成models
        python manage.py runserver  ##########################启动调试服务器
        python manage.py inspectdb>RootApi/models.py  ############生成models类到指定的文件 这个操作需要在配置好自己的数据库连接后方能进行
        python manage.py syncdb  ############################生成django自带admin管理后台相关的数据表  如果需要时使用

2.update-1
    views.py文件
        在urls.py中配置相关的路由规则

        hello

        get_one

        get_one_data    ##########返回json数据

        get_all

        get_all_data ######返回json数据格式  调用rest_framework这个api  这个的具体作用暂时尚不明朗。。。


    遗留问题 json反系列化  api实现
  --------------------------------------2013-11-28-----------------------------------------------------------------------------

3.update-2
    views.py文件
        在html中要使用form表单提交的时候
            a.*.py中 from django.template import RequestContext
                     在加载html模板的时候 加参数context_instance=RequestContext(request)
                     例如：view.py中的get_one
            b.在*.html文件中 在form标签中加入 {% csrf_token %}


    setting.py文件
        加载静待js或者css样式时注意修改
            STATIC_URL STATICFILES_DIRS 节点

    提供backbone调用参数的api,返回序列化的数据

4.update-3
    尝试扩展models.Wnewsinfo 失败
    目的是把自动生成的代码和自己写的代码分离

    2013-11-30




