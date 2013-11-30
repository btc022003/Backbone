/**
 * Created by Administrator on 13-11-30.
 */

//////////隐藏微信中网页右上角按钮
// 当微信内置浏览器完成内部初始化后会触发WeixinJSBridgeReady事件。
document.addEventListener('WeixinJSBridgeReady', function onBridgeReady() {

    //////////隐藏微信中网页右上角按钮
    //WeixinJSBridge.call('hideOptionMenu');

    //////////隐藏微信中网页底部导航栏
    //WeixinJSBridge.call('hideToolbar');

    /*
    // 发送给好友
    WeixinJSBridge.on('menu:share:appmessage', function(argv) {
        //shareFriend();
        //alert("发送给好友");
    });

    // 分享到微博
    WeixinJSBridge.on('menu:share:weibo', function(argv) {
        //shareWeibo();
        //alert("分享到微博");
    });
    */
    // 分享到朋友圈
    WeixinJSBridge.on('menu:share:timeline', function(argv) {
        //alert("分享到好友圈");
        shareTimeline();


    });
}, false);


/*********
 * 以下参数可在具体的应用中重新赋值
 * @type {string}
 * @private
 */
var _YL_WXShare_ImgUrl = "";    //////////分享时的图片链接
var _YL_WXShare_ImgW = "200"; /////////分享时的图片宽度
var _YL_WXShare_ImgH = "200"; /////////分享时的图片高度
var _YL_WXShare_Desc = "";       /////////分享时的描述信息
var _YL_WXShare_Title = "";      //////////分享时的标题

///////获取页面title
$(document).ready(function(){
    _YL_WXShare_Title = $("TITLE").html();
});

/*****
 * 分享到朋友圈
 */
function shareTimeline() {
    dalWithWX("timeline",window.location.href);
    WeixinJSBridge.invoke('shareTimeline',{
        "img_url":_YL_WXShare_ImgUrl,
        "img_width":_YL_WXShare_ImgW,
        "img_height":_YL_WXShare_ImgH,
        "link":window.location.href,
        "desc": _YL_WXShare_Desc,
        "title": _YL_WXShare_Title
    }, function(res) {
        _report('timeline', res.err_msg);
    });
}

//////////自己的处理函数
function dalWithWX(type,src)
{
    /*
    $.ajax({
        type: "POST",
        url: "/vjzq/dal_share_operation",
        data:{type:type,src:src},
        beforeSend: function () {
            // $this.css("background", "#fff url(/images/loading2.gif) right top  no-repeat");
        },
        success: function (msg) {
        }
    });
    */
}