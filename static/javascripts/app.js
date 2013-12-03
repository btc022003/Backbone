/**
 * 实现绑定列表 点击单条记录响应事件
 */
require.config({
    paths: {
        "math": "/static/javascripts/math",
        "json2": "/static/js/json2",
        "jquery": "/static/js/jquery",
        "underscore": "/static/js/underscore",
        "backbone": "/static/js/backbone",
        "news": "/static/javascripts/model/m_news", ////////引入模型类
        "newsCollection": "/static/javascripts/collection/c_news" ////////新闻列表
    }

});

require(['json2', 'jquery', 'underscore', 'backbone', "news", "newsCollection"],
    function (JSON, $, pp, b, news, newsCollection) {

        ////////单条新闻记录的试图
        newsView = b.View.extend({
            tagName: "li",
            template: _.template($('#item_template').html()),
            initialize: function () {
                //this.render();
            },
            events: {
                'click a': function () {
                    //alert(this.model.get('title'));
                    $("#div_r_container").empty();
                    $("#div_r_container").append(this.model.get('title'));
                }
            },
            render: function () {
                this.$el.html(this.template(this.model.toJSON()));
                return this;
            },
            dbclickFun: function (e) {
                var p = e.currentTarget; /////////事件的currentTarget  js原来可以和as3一样样的 对事件做这种处理 第一次发现好激动
                alert($(p).html());
                //alert(this.model.get('title'));
            }
        });

        ///////////定义新闻集合
        var c_c = new newsCollection();

        ////////绑定数据
        function bindData() {
            c_c.fetch({
                url: "/all_data/",
                success: function (collection, response) {
                    c_c.reset();
                    console.log("----------------reset---------------------");
                    var result = response;
                    c_c.reset(result);
                },
                error: function (err) {
                    console.log("err");
                }
            });
        }


        /////////定义appview
        var app = Backbone.View.extend({
            initialize: function () {
                this.listenTo(c_c, "reset", this.bindAll);
                bindData();
            },
            bindAll: function () {
                c_c.each(function (item) {
                    var new_v = new newsView({model: item});
                    $("#list_news").append(new_v.render().el);
                });
            }
        });

        var app = new app(); //////主程序入口


    });
