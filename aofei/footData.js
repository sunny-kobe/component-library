var _footerData = {
    "copyright": "2004",
    "contactPc": "互联网违法和不良信息举报邮箱:gm@joygames.cc  |  互联网违法和不良信息举报电话:13802523141  |  涉未成年人专用邮箱 gm@joygames.cc",
    "contactMobile": "互联网违法和不良信息举报邮箱:gm@joygames.cc<br>互联网违法和不良信息举报电话:13802523141<br>涉未成年人专用邮箱 gm@joygames.cc",
    "logo": [{
        "txt": "奥飞游戏",
        "src": "https:\/\/webapp.15166.com\/static\/web-app\/web_pc-aofei\/32\/static\/images\/common\/footerLogo.png?t=2024328",
        "href": "https:\/\/www.15166.com\/"
    }],
    "nav": [{
        "txt": "奥飞游戏平台",
        "href": "https:\/\/www.15166.com\/",
        "mobileNeedShow": "1"
    }, {
        "txt": "隐私政策",
        "href": "https:\/\/www.15166.com\/privacy-policy2.html",
        "mobileNeedShow": "1"
    }, {
        "txt": "服务条款",
        "href": "https:\/\/www.15166.com\/news\/contentProxy.html",
        "mobileNeedShow": "1"
    }, {
        "txt": "家长监护",
        "href": "https:\/\/www.15166.com\/jiazhang\/",
        "mobileNeedShow": "1"
    }],
    "info": [{
        "txt": "粤ICP备15107722号",
        "href": "https:\/\/beian.miit.gov.cn\/#\/Integrated\/index",
        "mobileNeedShow": "1"
    }, {
        "txt": "粤B2-20160332",
        "href": "",
        "mobileNeedShow": "1"
    }, {
        "txt": "软件名称:航海王梦想指针",
        "href": "",
        "mobileNeedShow": "1"
    }, {
        "txt": "开发者:广州卓游信息科技有限公司",
        "href": "",
        "mobileNeedShow": "1"
    }, {
        "txt": "版本号:1.0",
        "href": "",
        "mobileNeedShow": "1"
    }],
    "icon": [{
        "alt": "公安部备案号",
        "txt": "闽公网安备 35020302001361号",
        "src": "\/\/game.leiting.com\/static\/upload\/image\/20200703\/159374184136585503867949.png",
        "href": "http:\/\/www.beian.gov.cn\/portal\/registerSystemInfo?recordcode=35020302001361",
        "mobileNeedShow": "1"
    }, {
        "alt": "文网文",
        "txt": "",
        "src": "\/\/game.leiting.com\/static\/upload\/image\/20200703\/159374199636585503861396.png",
        "href": "http:\/\/sq.ccm.gov.cn\/ccnt\/sczr\/service\/business\/emark\/toDetail\/1c99be5716ca47bf8046f47bf7494e0f",
        "mobileNeedShow": "0"
    }]
};
//数数统计代码
!function (e) {
    if (!window.ThinkingDataAnalyticalTool) {
        var n = e.sdkUrl
            , t = e.name
            , r = window
            , a = document
            , i = "script"
            , l = null
            , s = null;
        r.ThinkingDataAnalyticalTool = t;
        var o = ["track", "quick", "login", "identify", "logout", "trackLink", "userSet", "userSetOnce", "userAdd", "userDel", "setPageProperty", "setSuperProperties", "setDynamicSuperProperties", "clearSuperProperties", "timeEvent", "unsetSuperProperties", "initInstance", "trackFirstEvent", "trackUpdate", "trackOverwrite"];
        r[t] = function (e) {
            return function () {
                if (this.name)
                    (r[t]._q = r[t]._q || []).push([e, arguments, this.name]);
                else if ("initInstance" === e) {
                    var n = arguments[0];
                    r[t][n] = {
                        name: n
                    };
                    for (var a = 0; a < o.length; a++)
                        r[t][n][o[a]] = r[t].call(r[t][n], o[a]);
                    (r[t]._q1 = r[t]._q1 || []).push([e, arguments])
                } else
                    (r[t]._q = r[t]._q || []).push([e, arguments])
            }
        }
            ;
        for (var u = 0; u < o.length; u++)
            r[t][o[u]] = r[t].call(null, o[u]);
        r[t].param = e,
            r[t].__SV = 1.1,
            l = a.createElement(i),
            s = a.getElementsByTagName(i)[0],
            l.async = 1,
            l.src = n,
            s.parentNode.insertBefore(l, s)
    }
}({
    appId: 'dff27287619c4eb2aa30a4e28e1e982c',
    name: 'leitingweb',
    // 全局的调用变量名，可以任意设置，后续的调用使用该名称即可
    sdkUrl: 'https://ossstatic.leiting.com/static/shushu/js/thinkingdata.min.js',
    // 统计脚本URL
    serverUrl: 'https://leitwztjshushu.leiting.com/sync_js',
    // 数据上传的URL
    showLog: false,
    // 关闭数据上报页面console打印
    autoTrack: {
        // 开启页面停留时长统计
        pageShow: true,
        //开启ta_page_show事件
        pageHide: true,
        //开启ta_page_hide事件
    },
    loaded: function (leitingweb) {
        var currentId = leitingweb.getDistinctId();
        leitingweb.identify(currentId);
        leitingweb.quick('autoTrack');
        leitingweb.track('PageView', {
            Game: 'onepiece',
            // 自定义上报游戏标识
            Acts: 'home',
            // 自定义上报活动标识
            Actsname: 'onepiece202402guanwang'// 自定义上报活动标识
        });
    }
});
var _ageData = [
    {
        "url": "wd.leiting.com",
        "pc": {
            "img": "\/\/ossstatic.leiting.com\/static\/mole\/202105\/images\/age.png",
            "href": "http:\/\/wd.leiting.com\/news\/2005",
            "x": 55,
            "y": 235,
            "width": 65,
            "wrap": ".index-layout"
        },
        "mobile": {
            "img": "\/\/ossstatic.leiting.com\/static\/mole\/202105\/images\/age.png",
            "href": "http:\/\/wd.leiting.com\/news\/2005",
            "x": 20,
            "y": 130,
            "width": 65,
            "wrap": ".index-layout"
        }
    }, {
        "url": "mole.leiting.com",
        "pc": {
            "img": "\/\/ossstatic.leiting.com\/static\/mole\/202105\/images\/age.png",
            "href": "https:\/\/mole.leiting.com\/news\/24",
            "x": 330,
            "y": 34,
            "width": 68,
            "wrap": ".page1"
        },
        "mobile": {
            "img": "\/\/ossstatic.leiting.com\/static\/mole\/202105\/images\/age.png",
            "href": "https:\/\/mole.leiting.com\/news\/24",
            "x": -32,
            "y": -380,
            "width": 100,
            "wrap": ".page1"
        }
    }, {
        "url": "mole.leiting.com\/home",
        "pc": {
            "img": "\/\/ossstatic.leiting.com\/static\/mole\/202105\/images\/age.png",
            "href": "https:\/\/mole.leiting.com\/news\/24",
            "x": 26,
            "y": 140,
            "width": 68,
            "wrap": ""
        },
        "mobile": {
            "img": "\/\/ossstatic.leiting.com\/static\/mole\/202105\/images\/age.png",
            "href": "https:\/\/mole.leiting.com\/news\/24",
            "x": -20,
            "y": 130,
            "width": 100,
            "wrap": ""
        }
    }];
