
var isReady=false;var onReadyCallbacks=[];
var isServiceReady=false;var onServiceReadyCallbacks=[];
var __uniConfig = {"pages":["views/global/index","views/china/index","views/news/index","views/my/index"],"window":{"navigationStyle":"custom","backgroundColor":"#FFFFFF"},"tabBar":{"color":"#333","selectedColor":"deepskyblue","backgroundColor":"#eee","borderStyle":"black","list":[{"pagePath":"views/global/index","text":"全球","iconPath":"./static/tabbar/Global.png","selectedIconPath":"static/tabbar/Globaled.png"},{"pagePath":"views/china/index","text":"中国","iconPath":"static/tabbar/china.png","selectedIconPath":"static/tabbar/Chinaed.png"},{"pagePath":"views/news/index","text":"动态","iconPath":"static/tabbar/news.png","selectedIconPath":"static/tabbar/newsed.png"},{"pagePath":"views/my/index","text":"我的","iconPath":"static/tabbar/my.png","selectedIconPath":"static/tabbar/myed.png"}]},"nvueCompiler":"uni-app","renderer":"auto","splashscreen":{"alwaysShowBeforeRender":true,"autoclose":false},"appname":"CovidMonitor","compilerVersion":"2.9.3","entryPagePath":"views/global/index","networkTimeout":{"request":60000,"connectSocket":60000,"uploadFile":60000,"downloadFile":60000}};
var __uniRoutes = [{"path":"/views/global/index","meta":{"isQuit":true,"isTabBar":true},"window":{}},{"path":"/views/china/index","meta":{"isQuit":true,"isTabBar":true},"window":{}},{"path":"/views/news/index","meta":{"isQuit":true,"isTabBar":true},"window":{}},{"path":"/views/my/index","meta":{"isQuit":true,"isTabBar":true},"window":{}}];
__uniConfig.onReady=function(callback){if(__uniConfig.ready){callback()}else{onReadyCallbacks.push(callback)}};Object.defineProperty(__uniConfig,"ready",{get:function(){return isReady},set:function(val){isReady=val;if(!isReady){return}const callbacks=onReadyCallbacks.slice(0);onReadyCallbacks.length=0;callbacks.forEach(function(callback){callback()})}});
__uniConfig.onServiceReady=function(callback){if(__uniConfig.serviceReady){callback()}else{onServiceReadyCallbacks.push(callback)}};Object.defineProperty(__uniConfig,"serviceReady",{get:function(){return isServiceReady},set:function(val){isServiceReady=val;if(!isServiceReady){return}const callbacks=onServiceReadyCallbacks.slice(0);onServiceReadyCallbacks.length=0;callbacks.forEach(function(callback){callback()})}});
service.register("uni-app-config",{create(a,b,c){if(!__uniConfig.viewport){var d=b.weex.config.env.scale,e=b.weex.config.env.deviceWidth,f=Math.ceil(e/d);Object.assign(__uniConfig,{viewport:f,defaultFontSize:Math.round(f/20)})}return{instance:{__uniConfig:__uniConfig,__uniRoutes:__uniRoutes,global:void 0,window:void 0,document:void 0,frames:void 0,self:void 0,location:void 0,navigator:void 0,localStorage:void 0,history:void 0,Caches:void 0,screen:void 0,alert:void 0,confirm:void 0,prompt:void 0,fetch:void 0,XMLHttpRequest:void 0,WebSocket:void 0,webkit:void 0,print:void 0}}}});
