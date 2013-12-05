/**
 * Created by Administrator on 13-12-3.
 */
define(["json2","jquery","underscore","backbone","news"],function (JSON, $, pp, b,news) {
     var newsCollection = b.Collection.extend({
            model: news.news
        });

    return {newsCollection:newsCollection};
});