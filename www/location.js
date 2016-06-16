var exec = require('cordova/exec');

var location = {
  getCurrentPosition: function(successFn, failureFn) {
    exec(successFn, failureFn, 'BaiduLocation', 'getCurrentPosition', []);
  },
  share: function (/**回调函数
                    switch (code) {
                    case 1:
                        //分享成功
                        break;
                    case -1:
                        //用户取消
                        break;
                    case -2:
                        //分享失败
                        break;
                    default :
                }
                    */callbacksucces,
                   /**分享类型
                    * type 1: 微信好友
                    * type 2: 微信盆友圈
                    * type 3: 微博
                    * **/ type,
                   /**点击后跳转的URL地址**/ targetUrl,
                   /**标题**/title,
                   /**图片地址**/imgUrl,
                   /**文本内容**/ contentTxt) {
    console.log(type,targetUrl,title,imgUrl,contentTxt);
    exec(callbacksucces, function () {
    }, "BaiduLocation", "share", [type, targetUrl, title,
      imgUrl, contentTxt]);
  }
};

module.exports = location