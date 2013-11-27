/**
 * Created by Administrator on 13-11-18.
 */
require.config({
    shim: {
        'json2': {
            exports: "JSON"
        },
        'jquery': {
            exports: "$"
        },
        'underscore': {
            exports: '_'
        },
        'backbone': {
            deps: ['underscore', 'jquery'],
            exports: 'Backbone'
        }
    }

});

require(['json2', 'jquery', 'underscore', 'backbone'],
    function (JSON, $, _, b) {
        // var app = new app();
        alert("init");
    });

require(['../javascripts/math'], function (math) {
    alert(math.add(2, 3));
})