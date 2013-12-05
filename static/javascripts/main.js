/**
 * Created by Administrator on 13-11-18.
 *
 * requirejs 这个还需要再优化  还有view model分离的事情
 */
require.config({
    paths: {
        "math": "/static/javascripts/math",
        "json2": "/static/js/json2",
        "jquery": "/static/js/jquery",
        "underscore": "/static/js/underscore",
        "backbone": "/static/js/backbone",
        "news": "/static/javascripts/model/m_news", ////////引入模型类
        "newsCollection":"/static/javascripts/collection/c_news" ////////新闻列表
    }

});

require(['json2', 'jquery', 'underscore', 'backbone', "news","newsCollection"],
    function(JSON, $, pp, b, news,newsCollection) {
        // var app = new app();
        // alert(pp);

        newsView = b.View.extend({
            template: _.template($('#item_template').html()),
            initialize: function() {
                //this.render();
            },
            events: {
                'click a': function() {
                    alert(this.model.get('title'));
                },
                'dblclick p': 'dbclickFun' ///////////监听双击事件
            },
            render: function() {
                this.$el.html(this.template(this.model));
                return this;
            },
            dbclickFun: function(e) {
                var p = e.currentTarget; /////////事件的currentTarget  js原来可以和as3一样样的 对事件做这种处理 第一次发现好激动
                alert($(p).html());
                //alert(this.model.get('title'));
            }
        });

        ///////实例化
        var tem_new = new news();
        tem_new.fetch({
            url: "/get_data/177", ////////调用接口获取数据
            success: function(item, response) {
                if(response.status=="y")
                {
                    console.log(response.info.title);
                    var view = new newsView({
                        model: response.info
                    });
                    $("body").append(view.render().el);
                }

            }
        });
    });

require(['math'], function(math) {
    alert(math.add(2, 3));
})