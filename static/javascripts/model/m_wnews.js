/**
 * Created by Administrator on 13-12-5.
 */
define(["json2","jquery","underscore","backbone"],function (JSON, $, pp, b) {
     var news = b.Model.extend({
            defaults: {
                title: "",
                code: "",
                nid:""
            },
            initialize: function () {

            },
            validate:function(attributes){
                if(!attributes.nid)
                {
                    console.log("参数错误");
                }
            }
        });

     var newsCollection = b.Collection.extend({
            model: news
        });
    return{
        model: news,
        collection:newsCollection
    }
});