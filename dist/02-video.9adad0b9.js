var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},n="Expected a function",i=0/0,o=/^\s+|\s+$/g,r=/^[-+]0x[0-9a-f]+$/i,f=/^0b[01]+$/i,u=/^0o[0-7]+$/i,a=parseInt,c="object"==typeof e&&e&&e.Object===Object&&e,l="object"==typeof self&&self&&self.Object===Object&&self,s=c||l||Function("return this")(),d=Object.prototype.toString,p=Math.max,y=Math.min,v=function(){return s.Date.now()};function m(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function g(e){if("number"==typeof e)return e;if("symbol"==typeof(t=e)||t&&"object"==typeof t&&"[object Symbol]"==d.call(t))return i;if(m(e)){var t,n="function"==typeof e.valueOf?e.valueOf():e;e=m(n)?n+"":n}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(o,"");var c=f.test(e);return c||u.test(e)?a(e.slice(2),c?2:8):r.test(e)?i:+e}t=function(e,t,i){var o=!0,r=!0;if("function"!=typeof e)throw TypeError(n);return m(i)&&(o="leading"in i?!!i.leading:o,r="trailing"in i?!!i.trailing:r),function(e,t,i){var o,r,f,u,a,c,l=0,s=!1,d=!1,b=!0;if("function"!=typeof e)throw TypeError(n);function j(t){var n=o,i=r;return o=r=void 0,l=t,u=e.apply(i,n)}function T(e){var n=e-c,i=e-l;return void 0===c||n>=t||n<0||d&&i>=f}function h(){var e,n,i,o=v();if(T(o))return O(o);a=setTimeout(h,(e=o-c,n=o-l,i=t-e,d?y(i,f-n):i))}function O(e){return(a=void 0,b&&o)?j(e):(o=r=void 0,u)}function w(){var e,n=v(),i=T(n);if(o=arguments,r=this,c=n,i){if(void 0===a)return l=e=c,a=setTimeout(h,t),s?j(e):u;if(d)return a=setTimeout(h,t),j(c)}return void 0===a&&(a=setTimeout(h,t)),u}return t=g(t)||0,m(i)&&(s=!!i.leading,f=(d="maxWait"in i)?p(g(i.maxWait)||0,t):f,b="trailing"in i?!!i.trailing:b),w.cancel=function(){void 0!==a&&clearTimeout(a),l=0,o=c=r=a=void 0},w.flush=function(){return void 0===a?u:O(v())},w}(e,t,{leading:o,maxWait:t,trailing:r})};const b=document.querySelector("#vimeo-player"),j="videoplayer-current-time",T=new Vimeo.Player(b);T.on("timeupdate",(function(e){return e&&e.__esModule?e.default:e})(t)(function(e){localStorage.setItem(j,JSON.stringify(e))},1e3));const h=localStorage.getItem(j),O=JSON.parse(h);h&&T.setCurrentTime(O.seconds);
//# sourceMappingURL=02-video.9adad0b9.js.map