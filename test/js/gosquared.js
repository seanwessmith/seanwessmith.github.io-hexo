;(function(){function ba(){for(var a=0;a<h.length;a+=1){var b=h.key(a);0===b.indexOf("neo:")&&(b=b.slice(4),/^[0-9a-z]+$/.test(b)&&B(b,M(b)))}}function B(a,b){p[a]=b;setTimeout(function(){delete p[a]},5E3);return b}function M(a){if(p[a])return p[a];var b="neo:"+a;if(h[b]){var c=h[b];if("$"==c.charAt(0))return B(a,c.slice(1));try{return B(a,c)}catch(d){h.removeItem(b)}}}function ca(a){delete p[a];h.removeItem("neo:"+a)}function da(){if(C)return C;var a={},b;for(b in f.assets)for(var c in f.assets[b]){var d=
f.assets[b][c];a[d]||(a[d]=[]);a[d].push(b+"::"+c)}return C=a}function D(a,b,c,d,e,l){function g(){c(function(c,g){if(c)throw c;if(q&&d(g)){var k=q;if(h){v[a+"::"+b]={digest:k,mtime:+new Date};try{var f=[k,+new Date].join("::");h["neo:"+a+"::"+b]=f;h["neo:"+k]=5E3>g.length?"$"+g:g;p[k]=g}catch(l){}}}e(g,!1)})}var k=ea(a,b),q=f.assets[a][b];q&&k?k.digest==q&&(!l||k.mtime>+new Date-l)?(k=M(q))?e(k,!0):g():((l=da()[k.digest])&&0!==l.length||ca(k.digest),g()):g()}function ea(a,b){if(!h)return!1;if(v[a+
"::"+b])return v[a+"::"+b];try{var c=h["neo:"+a+"::"+b].split("::");return v[a+"::"+b]={digest:c.shift(),mtime:+c.shift()}}catch(d){return!1}}function fa(){if(h){var a=h["neo::v"]||0;if(f.assetRevision&&f.assetRevision!=a){if(h){var a=[],b;for(b=0;b<h.length;b+=1){var c=h.key(b);"neo:"===c.substr(0,4)&&a.push(c)}for(b=0;b<a.length;b+=1)h.removeItem(a[b])}h["neo::v"]=f.assetRevision}}}function ga(a,b){var c=document.createElement("a");c.href=/^(https?:)?\/\//.test(b)?b:(m.ROOT||"")+b;b=c.href;a+="//# sourceURL="+
b+"\n";c=w();(0,eval)(a);"master"!==f.version&&console.info(b+" eval time: %s",w()-c)}function N(){for(var a;x[0]&&x[0].loaded;)a=x.shift(),ga(a.text,a.p),a.cb(),a=!0;a&&setTimeout(N,0)}function O(a,b){var c={loaded:!1,p:a,cb:void 0===b?function(){}:b,setText:function(a){f.dev&&(a=a.replace(/\/\/static\.gosquared\.com/g,"//static-origin.gosquared.com"));c.text=a;c.loaded=!0;clearTimeout(P);P=setTimeout(N,0)}};x.push(c);return c}function ha(a,b){var c=void 0===a?function(){}:a;c||(c=function(){});
var d=window.document,e,l="\x0B"=="v";l?e=d.createStyleSheet():(e=d.createElement("style"),e.type="text/css",d.getElementsByTagName("head")[0].appendChild(e));var g={cb:function(){c();c=function(){}},ss:e,setText:function(a){f.dev&&(a=a.replace(/static\.gosquared\.com/g,"static-origin.gosquared.com"));var c=w();try{e[l?"cssText":"innerHTML"]=a}catch(d){e.innerText=a}"master"!==f.version&&console.info(b+" eval time: %s",w()-c);g.cb()},remove:function(){try{e.parentNode().removeChild(e)}catch(a){e.innerText=
e.cssText=e.innerHTML=""}}};y.push(g);return g}function Q(a,b){a+=(-1!==a.indexOf("?")?"&":"?")+f.rev;a=/^(https?:)?\/\//.test(a)?a:(m.ROOT||"")+a;var c=!0;/^(https?:)?\/\//.test(a)&&"XDomainRequest"in window&&null!==window.XDomainRequest&&!/MSIE 1\d\./.test(navigator.appVersion)&&(c=!1);var d=new (c?XMLHttpRequest:XDomainRequest);d.open("GET",a);d.onload=function(){b(null,d.responseText);d.onload=d.onerror=d.onprogress=null};d.onerror=function(){b(d.responseText||"unknown");d.onload=d.onerror=d.onprogress=
null};d.onprogress=function(){};d.send()}function E(a,b,c){b=b.concat();for(var d=[],e=[],l=0;l<b.length;l+=1)d.push(b[l][0]),e.push(b[l][1]);a+=d.join(",");c&&(a+="?_u="+f.account.id+"&_t="+f.token);Q(a,function(a,b){for(var c=b.split("\n//------------\n"),d=0;d<c.length;d+=1)e[d](a,c[d])})}function ia(a,b){F.push([a,b]);clearTimeout(R);f.restrictedAssets&&-1!==f.restrictedAssets.indexOf("css/"+a)&&(G=!0);R=setTimeout(function(){E(H,F,G);F=[];G=!1},0)}function ja(a,b,c){c=void 0===c?!0:c;b=ha(b,
a);a=a.replace(/\.css$/g,"");var d=b.setText;b.reload=function(){return Q(H+a+"?"+Math.random(),function(a,b){return d(b)})};D("css",a+".css",function(b){ia(a,b)},function(a){return/\}[\s\n]*$/.test(a)},c?d:function(){},864E6)}function ka(a,b){I.push([a,b]);clearTimeout(S);f.restrictedAssets&&-1!==f.restrictedAssets.indexOf("js/"+a)&&(J=!0);S=setTimeout(function(){E(r,I,J);I=[];J=!1},0)}function la(a,b,c){t[a]||(t[a]=[]);t[a].push([b,c]);clearTimeout(T[a]);T[a]=setTimeout(function(){E(r+"strings/"+
a+"/",t[a]);t[a]=[]},0)}function ma(){function a(a){a=[a.replace(/^./,function(a){return a.toLowerCase()}),"Webkit"+a,"Moz"+a,"O"+a,"ms"+a];for(var b=!1,d=a.length;d--;)void 0!==c[a[d]]&&(b=!0);return b}var b,c=document.createElement("div").style,d=[function(){b=eval("({get x(){return 1}})");return 1===b.x},function(){return document.implementation.hasFeature("http://www.w3.org/TR/SVG11/feature#Image","1.1")},function(){var a=document.createElement("canvas");return a&&a.getContext&&a.getContext("2d")},
function(){return a("Transform")}];window.history.pushState||(window.history.pushState=function(){},window.history.replaceState=function(){});for(var e=0;e<d.length;e+=1)try{if(!d[e]())return!1}catch(f){return!1}"undefined"===typeof console&&(window.console={log:function(){},error:function(){}});return!0}function na(){var a=document.createElement("div"),b=a.style;b.position="fixed";b.top=b.left=b.right=b.bottom=0;b.textAlign="center";b.background="#e0e8ee";b.color="#8f989f";b.fontFamily='Avenir, "Helvetica Neue", Helvetica, Arial, sans-serif';
for(var b="",c=[["https://www.google.com/chrome","chrome"],["http://www.mozilla.org/firefox/new/","fox"],["http://windows.microsoft.com/en-us/internet-explorer/download-ie","ie"],["http://support.apple.com/downloads/#safari","safari"]],d=0;d<c.length;d++)b+='<a href="'+c[d][0]+'"><img src="https://static.gosquared.com/images/ui/neo/brw-'+c[d][1]+'.png" width="32" height="32" style="border:none;float:left;'+(d<c.length-1?"margin-right:20px":"")+'"/></a>';a.innerHTML='<div style="width:188px;margin:0 auto;margin-top:250px">'+
b+'</div><div style="clear:both;margin:30px;padding-top:30px;font-size:20px">GoSquared does not work in your browser</div><div style="clear:both;margin:30px;font-size:13px">GoSquared requires a modern browser such as the latest version of <a style="color:#8f989f;text-decoration:none" href="https://www.google.com/chrome">Chrome</a>, <a style="color:#8f989f;text-decoration:none" href="http://support.apple.com/downloads/#safari">Safari</a> or <a style="color:#8f989f;text-decoration:none" href="http://windows.microsoft.com/en-us/internet-explorer/download-ie">Internet Explorer</a></div>';
document.body.appendChild(a)}function oa(a,b,c){var d=void 0===c?!0:c;if(-1!==U.indexOf(a))return setTimeout(b,0);ja(a,function(){d&&U.push(a);b()},d)}function z(a,b,c,d){var e=this,f=void 0===d?!0:d,g=document.getElementsByTagName("head")[0],k=document.createElement("script");k.src=a;var h=!1;k.onload=k.onreadystatechange=function(){h||e.readyState&&"loaded"!=e.readyState&&"complete"!=e.readyState||(h=!0,b&&b(),f&&g.removeChild(k),k=null)};k.onerror=function(){c&&c()};g.appendChild(k);return k}function A(a,
b,c){function d(){if(!--g)for(var a=0;a<f.length;a+=1)f[a]()}var e=void 0===c?!0:c;if(-1!==V.indexOf(a))return setTimeout(b,0);if(-1!==W.indexOf(a))X[a].push(b);else{W.push(a);var f=X[a]=[b||function(){}],g=1;if((b=Y[a])&&b.length)for(c=0;c<b.length;c+=1)g++,A(b[c],d,e);if(/\.css/.test(a))oa(a,d,e);else for(b=0;b<u.length;b+=1)if(c=u[b],c.match.test(a)){c.fn(a,function(){e&&V.push(a);d()},e);break}}}function pa(){var a=window;a._gaq=[["_setAccount","UA-1346450-1"],["_setDomainName","gosquared.com"],
["_trackPageview"]];z(("https:"==location.protocol?"//ssl":"//www")+".google-analytics.com/ga.js");a.adroll_adv_id="SRQFIWPWXJBWPPEJA5365W";a.adroll_pix_id="CHKVCJ6M6FF5HHDWVRJJFC";a.__adroll_loaded=!0;z(("https:"==location.protocol?"//s":"//a")+".adroll.com/j/roundtrip.js")}function qa(){var a=n.createElement("div");a.className="login";a.style.cssText="\n    position: absolute;\n    top: 0;\n    left: 0;\n    right: 0;\n    bottom: 0;\n    background: #3c474f;\n    background: -webkit-radial-gradient(center, ellipse, #667986 0%, #3c474f 100%);\n    background: -moz-radial-gradient(center, ellipse, #667986 0%, #3c474f 100%);\n    background: radial-gradient(ellipse at center, #667986 0%, #3c474f 100%);\n  ";
n.body.appendChild(a)}var m=window.Neo={},K=!1;window.onerror=function(a,b,c,d,e){if("Script error."!=a&&!K){K=!0;setTimeout(function(){K=!1},1E4);var f=new XMLHttpRequest;f.open("POST","/neo/errorReport");f.setRequestHeader("Content-type","application/x-www-form-urlencoded");var g=encodeURIComponent,g=["a="+g(a),"b="+g(b),"c="+g(c),"d="+(d?g(d):""),"e="+(e&&e.stack?g(e.stack):"")].join("&");f.send(g);try{m.app.trackEvent("neo_javascript_error",{message:a,file:b||"unknown file",line:c,column:d||"unknown",
stack:e&&e.stack?e.stack.split("\n"):null})}catch(h){}}};var u=[],L,r,H,h=window.localStorage;try{h.setItem("gs","gs"),h.removeItem("gs")}catch(ra){h=!1}var p={},C,v={},x=[],P,y=[],F=[],R,G,I=[],S,J;u.unshift({match:/^[^\/]*\.js/,fn:function(a,b,c){c=void 0===c?!0:c;var d=a.replace(/\.js$/g,"");b=O(r+d,b);D("js",a,function(a){ka(d,a)},Z,c?b.setText:function(){},12096E5)}});var t={},T={};u.unshift({match:/^strings\//,fn:function(a,b){var c=a.replace(/^strings\//,""),d=f.language,e=O(r+"strings/"+d+
"/"+c,b);D("string",d+"/"+c,function(a){return la(d,c,a)},Z,e.setText,432E6)}});var aa;u.unshift({match:/^tracker/,fn:function(a,b){if(aa)return b();var c=window._gs=function(){c.q.push(arguments)};c.q=[];if(void 0===f.session&&!f.demo&&!f.login||f.noTrack)return c=window._gs=function(){},c.v=-1,b();z("//d1l6p2sc9645hc.cloudfront.net/tracker.js",function(){aa=!0},function(){c=window._gs=function(){}});c("GSN-2194840-F",!1);c("GSN-651706-D",!1);c("set","cookieDomain",".gosquared.com");f.trackerAuth&&
c("auth",f.trackerAuth);b()}});var Y={"neo.css":["reset.css"],"login.css":["reset.css"],"neo.js":"tracker es6.js moment.js jquery.js tz.js zeroclipboard.js strings.js strings/core strings/sidebar strings/walkthrough strings/projectSettings strings/billing strings/personalDetails strings/security strings/emails strings/plans strings/locked strings/integration strings/geo strings/announcements strings/api neo.css views.css".split(" "),"god.js":["es6.js","jquery.js"],"tz.js":["jquery.js"],"zeroclipboard.js":["jquery.js"],
"news.js":["d3.js","news.css"],"login.js":["tracker","es6.js","jquery.js","login.css"],"people.js":["data-utils.js","people.css"],"data-utils.js":["strings/geo"]},Z=function(a){return/^\s*;/.test(a)},V=[],U=[],X={},W=[],n=document;n.createElement("header");n.createElement("nav");n.createElement("section");n.createElement("article");n.createElement("aside");n.createElement("footer");m._loadScript=z;m.loadScript=A;m.reloadCSS=function(){for(var a=0;a<y.length;a+=1)y[a].reload&&y[a].reload()};var f,
w=window.performance?function(){return performance.now()}:function(){return+new Date};m.load=function(a){if(ma())if(/\?retina/.test(location.href)){var b=2;/\?retina-3x/.test(location.href)&&(b=3);history.replaceState({},"",location.pathname.replace(/\?retina(-.x)?/i,"")+location.hash);document.body.className="retina";m._retina=b;window.devicePixelRatio=b;setTimeout(function(){return m.load(a)},200)}else{var c=document.createElement("link");c.setAttribute("rel","stylesheet");c.setAttribute("href",
"//fonts.googleapis.com/css?family=Source+Code+Pro");setTimeout(function(){return document.getElementsByTagName("head")[0].appendChild(c)},200);a.demo&&Y["neo.js"].push("demo.css");m.feature=a.features?function(b){return-1!==a.features.indexOf(b)}:function(a){return!1};Object.defineProperty(m,"retina",{get:function(){return 1.5<(window.devicePixelRatio||window.webkitDevicePixelRatio||1)}});Object.defineProperty(m,"nRetina",{get:function(){return Math.min(Math.round(window.devicePixelRatio||window.webkitDevicePixelRatio||
1),3)}});m.config=f=a;fa();L=a.root||"/";r=L+"js/";H=L+"css/";ba();var d=f.login?"login.js":"neo.js";f.login&&qa();setTimeout(function(){A(d,function(){m.init(a);a.dev||setTimeout(pa,200)});if(a.preload)for(var b=0;b<a.preload.length;b+=1)A(a.preload[b],function(){})},0)}else na()}})();

Neo.load({apiHost:"api3.gosquared.com",assets:{css:{"demo.css":"d67af3","login.css":"c374d0","neo.css":"268c98","news.css":"d5a38e","people.css":"18a851","reset.css":"a04d7d","views.css":"d74d8a"},js:{"d3.js":"5fc21c","data-utils.js":"1790f5","es6.js":"741a30","god.js":"4f510d","jquery.js":"307050","loader.js":"db56d7","login.js":"11e55a","moment.js":"97b1f3","neo.js":"76e9d9","news.js":"226209","people.js":"8de68a","strings.js":"e8cd6c","tz.js":"d2e7d3","zeroclipboard.js":"36ff0b"},string:{"en/core":"52c679","en/sidebar":"c2611f","en/walkthrough":"b3ccd5","en/projectSettings":"857bbd","en/billing":"0e263a","en/personalDetails":"3c0657","en/security":"dee824","en/emails":"0d81d4","en/api":"782101","en/plans":"da57d4","en/locked":"2e3dda","en/integration":"9c8f59","en/geo":"c81d54","en/announcements":"6cac71"}},mittenHost:"neo-ws.gosquared.com",root:"https://d1xg0cubd2e5j4.cloudfront.net/neo/",language:"en",recurly:{publicKey:"sc-skmx2tePUgpbUSaEGxznBW",cors:true},ip:"50.77.240.185",rev:"f867d7da697f7d1111d6a30fddf0feff",assetRevision:"dlkjhd8yi8",version:"master",login:true,sign:"9f74c96d99c87b8f65fdec246d4b24ae58ed1bb6"});