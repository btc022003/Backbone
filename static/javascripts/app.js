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
        "w_news":"/static/javascripts/model/m_wnews"
       /* "news": "/static/javascripts/model/m_news1.0", ////////引入模型类
        "newsCollection": "/static/javascripts/collection/c_news1.0" ////////新闻列表 */
    }

});

require(['json2', 'jquery', 'underscore', 'backbone', "w_news"],
    function (JSON, $, pp, b, news) {

        ////////单条新闻记录的视图
        var newsView = b.View.extend({
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
                },
                'click .btn':function(){
                    var id = this.model.get("nid");
                    //alert(id);
                    var tem_v = new itemEditorView({model:this.model}); ///////点击修改按钮后 初始化编辑区域
                    $("#divEditor").empty();
                    $("#divEditor").append(tem_v.render().el);
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
        var c_c = new news.collection();

        ////////绑定数据
        function bindData() {
            c_c.fetch({
                url: "/all_data/",
                success: function (collection, response) {
                    c_c.reset();
                    console.log("----------------reset---------------------");
                    if(response.status="y")   //////////////返回数据的标识为y表示成功
                    {
                        var result = response.info;
                        c_c.reset(result);
                    }
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


        ////////编辑视图
         var itemEditorView = b.View.extend({
            tagName: "div",
            template: _.template($('#item_editor').html()),
            initialize: function () {
                //this.render();
            },
            events: {
                'click .btn':function(){
                    var id = this.model.get("nid");
                    //alert(id);
                    //alert(this.model.toJSON());
                    console.log(this.model.toJSON().toString());

                    this.model.save(null,{
                        url: "/update/",
                        data: this.model.toJSON(),
                        success: function (model, response) {
                            console.log("ok");
                            console.log(response.status);
                            console.log(response.inf);
                            console.log(response.name);
                        },
                        error: function (err) {
                            console.log("err");
                        }
                    });
                }
            },
            render: function () {
                this.$el.html(this.template(this.model.toJSON()));
                return this;
            }
        });

        var app = new app(); //////主程序入口


    });
