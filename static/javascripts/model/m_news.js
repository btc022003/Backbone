/**
 * Created by Administrator on 13-12-3.
 */
define(["json2","jquery","underscore","backbone"],function (JSON, $, pp, b) {
     news = b.Model.extend({
            defaults: {
                title: "",
                code: "",
                nid:""
            },
            initialize: function () {
                alert("s");
            },
            validate:function(attributes){
                if(!attributes.nid)
                {
                    console.log("参数错误");
                }
            }
        });
    return{
        news: news
    }
});
