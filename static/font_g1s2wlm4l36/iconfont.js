(function(window){var svgSprite='<svg><symbol id="icon-jianhao" viewBox="0 0 1024 1024"><path d="M512 32C246.912 32 32 246.912 32 512c0 265.088 214.912 480 480 480s480-214.912 480-480c0-265.088-214.912-480-480-480z m256 512H256v-64h512v64z" fill="" ></path></symbol><symbol id="icon-jiahao" viewBox="0 0 1024 1024"><path d="M512 958.017c-119.648 0-232.129-46.368-316.737-130.56C110.623 743.202 64 631.201 64 512.002c0-119.169 46.624-231.2 131.232-315.425 84.608-84.191 197.089-130.56 316.737-130.56s232.129 46.369 316.704 130.56c84.672 84.225 131.263 196.256 131.263 315.392 0.033 119.2-46.591 231.233-131.263 315.455C744.13 911.616 631.648 958.017 512 958.017z m0-828.034c-102.624 0-199.072 39.744-271.583 111.937C167.937 314.048 128 409.984 128 512s39.903 197.952 112.384 270.047c72.512 72.192 168.96 111.937 271.583 111.937 102.593 0 199.072-39.744 271.584-111.937 72.48-72.16 112.416-168.063 112.384-270.08 0-102.016-39.904-197.919-112.384-270.016C711.07 169.76 614.593 129.983 512 129.983z"  ></path><path d="M736 480H544V288c0-17.664-14.335-32-32-32s-32 14.336-32 32v192H288c-17.664 0-32 14.337-32 32.002s14.336 32 32 32h192v192c0 17.696 14.337 32.001 32.002 32.001s32-14.303 32-32V544h192c17.696 0 32.001-14.336 32.001-32.001s-14.306-32-32.002-32z"  ></path></symbol></svg>';var script=function(){var scripts=document.getElementsByTagName("script");return scripts[scripts.length-1]}();var shouldInjectCss=script.getAttribute("data-injectcss");var ready=function(fn){if(document.addEventListener){if(~["complete","loaded","interactive"].indexOf(document.readyState)){setTimeout(fn,0)}else{var loadFn=function(){document.removeEventListener("DOMContentLoaded",loadFn,false);fn()};document.addEventListener("DOMContentLoaded",loadFn,false)}}else if(document.attachEvent){IEContentLoaded(window,fn)}function IEContentLoaded(w,fn){var d=w.document,done=false,init=function(){if(!done){done=true;fn()}};var polling=function(){try{d.documentElement.doScroll("left")}catch(e){setTimeout(polling,50);return}init()};polling();d.onreadystatechange=function(){if(d.readyState=="complete"){d.onreadystatechange=null;init()}}}};var before=function(el,target){target.parentNode.insertBefore(el,target)};var prepend=function(el,target){if(target.firstChild){before(el,target.firstChild)}else{target.appendChild(el)}};function appendSvg(){var div,svg;div=document.createElement("div");div.innerHTML=svgSprite;svgSprite=null;svg=div.getElementsByTagName("svg")[0];if(svg){svg.setAttribute("aria-hidden","true");svg.style.position="absolute";svg.style.width=0;svg.style.height=0;svg.style.overflow="hidden";prepend(svg,document.body)}}if(shouldInjectCss&&!window.__iconfont__svg__cssinject__){window.__iconfont__svg__cssinject__=true;try{document.write("<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>")}catch(e){console&&console.log(e)}}ready(appendSvg)})(window)