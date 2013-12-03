/**
 * Created by Administrator on 13-12-3.
 */
define(["json2","jquery","underscore","backbone"],function (JSON, $, pp, b) {
     news = b.Model.extend({
            defaults: {
                title: "",
                code: ""
            },
            initialize: function () {

            }
        });
    return news;
});
