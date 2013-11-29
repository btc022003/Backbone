/**
 * Created by Administrator on 13-11-18.
 */
require.config({
    paths:{
        "math":"/static/javascripts/math",
        "json2":"/static/js/json2",
        "jquery":"/static/js/jquery",
        "underscore":"/static/js/underscore",
        "backbone":"/static/js/backbone"
    }

});

require(['json2', 'jquery', 'underscore', 'backbone'],
    function (JSON, $, _, b) {
        // var app = new app();
        //alert("init");
        //////////单条新闻记录
        news = b.Model.extend({
            defaults:{
                title:"",
                code:""
            },
            initialize:function(){

            }
        });

        ////////新闻列表
        newsCollection = b.Collection.extend({
            model:news
         });

        ///////实例化
        var tem_new = new news();
        tem_new.fetch({
            url:"/get_data/177",
            success:function(item,response){
                console.log(response.title);
            }
        });
    });

require(['math'], function (math) {
    alert(math.add(2, 3));
})