// this will be run on every site
console.log('DotJS is on');

// libs
/* mousetrap v1.1.3 craig.is/killing/mice */
(function(){function p(a,c,b){if(a.addEventListener)return a.addEventListener(c,b,!1);a.attachEvent("on"+c,b)}function v(a){return"keypress"==a.type?String.fromCharCode(a.which):h[a.which]?h[a.which]:w[a.which]?w[a.which]:String.fromCharCode(a.which).toLowerCase()}function q(a){var a=a||{},c=!1,b;for(b in l)a[b]?c=!0:l[b]=0;c||(n=!1)}function x(a,c,b,d,E){var g,e,f=[],i=b.type;if(!k[a])return[];"keyup"==i&&r(a)&&(c=[a]);for(g=0;g<k[a].length;++g)if(e=k[a][g],!(e.seq&&l[e.seq]!=e.level)&&i==e.action&&
("keypress"==i&&!b.metaKey&&!b.ctrlKey||c.sort().join(",")===e.modifiers.sort().join(",")))d&&e.combo==E&&k[a].splice(g,1),f.push(e);return f}function s(a,c){!1===a(c)&&(c.preventDefault&&c.preventDefault(),c.stopPropagation&&c.stopPropagation(),c.returnValue=!1,c.cancelBubble=!0)}function t(a){a.which="number"==typeof a.which?a.which:a.keyCode;var c=v(a);if(c)if("keyup"==a.type&&u==c)u=!1;else{var b=a.target||a.srcElement,d=b.tagName;if(!(-1<(" "+b.className+" ").indexOf(" mousetrap ")?0:"INPUT"==
d||"SELECT"==d||"TEXTAREA"==d||b.contentEditable&&"true"==b.contentEditable)){b=[];a.shiftKey&&b.push("shift");a.altKey&&b.push("alt");a.ctrlKey&&b.push("ctrl");a.metaKey&&b.push("meta");for(var b=x(c,b,a),f={},g=!1,d=0;d<b.length;++d)b[d].seq?(g=!0,f[b[d].seq]=1,s(b[d].callback,a)):!g&&!n&&s(b[d].callback,a);a.type==n&&!r(c)&&q(f)}}}function r(a){return"shift"==a||"ctrl"==a||"alt"==a||"meta"==a}function y(a,c,b){if(!b){if(!o){o={};for(var d in h)95<d&&112>d||h.hasOwnProperty(d)&&(o[h[d]]=d)}b=o[a]?
"keydown":"keypress"}"keypress"==b&&c.length&&(b="keydown");return b}function z(a,c,b,d,f){var a=a.replace(/\s+/g," "),g=a.split(" "),e,h,i=[];if(1<g.length){var j=a,m=b;l[j]=0;m||(m=y(g[0],[]));a=function(){n=m;++l[j];clearTimeout(A);A=setTimeout(q,1E3)};b=function(a){s(c,a);"keyup"!==m&&(u=v(a));setTimeout(q,10)};for(d=0;d<g.length;++d)z(g[d],d<g.length-1?a:b,m,j,d)}else{h="+"===a?["+"]:a.split("+");for(g=0;g<h.length;++g)e=h[g],B[e]&&(e=B[e]),b&&("keypress"!=b&&C[e])&&(e=C[e],i.push("shift")),
r(e)&&i.push(e);b=y(e,i,b);k[e]||(k[e]=[]);x(e,i,{type:b},!d,a);k[e][d?"unshift":"push"]({callback:c,modifiers:i,action:b,seq:d,level:f,combo:a})}}for(var h={8:"backspace",9:"tab",13:"enter",16:"shift",17:"ctrl",18:"alt",20:"capslock",27:"esc",32:"space",33:"pageup",34:"pagedown",35:"end",36:"home",37:"left",38:"up",39:"right",40:"down",45:"ins",46:"del",91:"meta",93:"meta",224:"meta"},w={106:"*",107:"+",109:"-",110:".",111:"/",186:";",187:"=",188:",",189:"-",190:".",191:"/",192:"`",219:"[",220:"\\",
221:"]",222:"'"},C={"~":"`","!":"1","@":"2","#":"3",$:"4","%":"5","^":"6","&":"7","*":"8","(":"9",")":"0",_:"-","+":"=",":":";",'"':"'","<":",",">":".","?":"/","|":"\\"},B={option:"alt",command:"meta","return":"enter",escape:"esc"},o,k={},j={},l={},A,u=!1,n=!1,f=1;20>f;++f)h[111+f]="f"+f;for(f=0;9>=f;++f)h[f+96]=f;p(document,"keypress",t);p(document,"keydown",t);p(document,"keyup",t);var D={bind:function(a,c,b){for(var d=a instanceof Array?a:[a],f=0;f<d.length;++f)z(d[f],c,b);j[a+":"+b]=c;return this},
unbind:function(a,c){j[a+":"+c]&&(delete j[a+":"+c],this.bind(a,function(){},c));return this},trigger:function(a,c){j[a+":"+c]();return this},reset:function(){k={};j={};return this}};window.Mousetrap=D;"function"==typeof define&&define.amd&&define("mousetrap",function(){return D})})();

// remove ads
var ads = $('iframe[id*="aswift"], .ads');
if (ads.length > 1) {
  console.log("DotJS: Removing ads", ads);
  ads.remove();
}

// keyboard shortcuts
if (typeof Mousetrap != 'undefined') {
  var INSERT_MODE = false;

  var scrollPage = function(up) {
    if (INSERT_MODE) return;
    scrollPos = document.body.scrollTop;
    bottom = document.body.scrollHeight;
    if (up) scrollPos -= 300;
    else scrollPos += 300;
    if (scrollPos<0) scrollPos = 0;
    if (scrollPos>bottom) scrollPos = bottom;
    $(document).scrollTop(scrollPos);
  }

  Mousetrap.reset();

  // Insert mode
  $('input').focus(    function(){ INSERT_MODE=true; });
  Mousetrap.bind( 'i', function(){ INSERT_MODE=true; });

  // Command mode
  Mousetrap.bind('esc', function(){ INSERT_MODE=false; $('input').blur(); });
  Mousetrap.bind('H',   function(){ if (!INSERT_MODE) history.back(); });
  Mousetrap.bind('L',   function(){ if (!INSERT_MODE) history.forward(); });
  Mousetrap.bind('k',   function(){ scrollPage(true); });
  Mousetrap.bind('j',   function(){ scrollPage(false); });
  Mousetrap.bind('g g', function(){ if (!INSERT_MODE) $(document).scrollTop(0); })
  Mousetrap.bind('G',   function(){ if (!INSERT_MODE) $(document).scrollTop(document.body.scrollHeight); })
}
