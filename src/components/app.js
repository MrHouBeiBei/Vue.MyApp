
(function (doc, win) {
    var docEl = doc.documentElement,
      resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
      recalc = function () {
        var clientWidth = docEl.clientWidth;
        if (!clientWidth) return;
        // 以1024设计图为标准时
        // pc
        if(clientWidth >= 1200) {  
            docEl.style.fontSize = 100 * (clientWidth / 1024) + 'px'; //rem相对于根元素
        }
        /* 中等屏幕（桌面显示器，大于等于 992px） */
        if(clientWidth < 1200 && clientWidth >= 992) {
            docEl.style.fontSize = 100 * (clientWidth / 1024-10) + 'px'; //rem相对于根元素
        }
        // 平板
        if(clientWidth < 992 && clientWidth >= 768) {
            docEl.style.fontSize = 100 * (clientWidth / 1024-25) + 'px'; //rem相对于根元素
        }
        // 手机
        if (clientWidth < 768) {
          docEl.style.fontSize = 100 * (clientWidth /  1024-90) + 'px'; //rem相对于根元素
        } 

        // else {
        //   docEl.style.fontSize = 34.13 + 'px'
        // }
        // document.body.style.fontSize = '16px';
        document.body.style.fontSize = '0.14rem';
        console.log(clientWidth);
      };
    if (!doc.addEventListener) return;
    win.addEventListener(resizeEvt, recalc, false);
    doc.addEventListener('DOMContentLoaded', recalc, false);
  })(document, window);


// (function (doc, win) {
//   var docEl = doc.documentElement,
//     resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
//     recalc = function () {
//       var clientWidth = docEl.clientWidth;
//       if (!clientWidth) return;
//       if (clientWidth < 1024) {
//         //   docEl.style.fontSize = 20 * (clientWidth / 375) + 'px';  
//         docEl.style.fontSize = 100 * (clientWidth / 375) + 'px'; //rem相对于根元素
//       } else {
//         docEl.style.fontSize = 34.13 + 'px'
//       }
//       document.body.style.fontSize = '20px';
//       // console.log(clientWidth);
//       // console.log(docEl.style.fontSize);
//     };
//   if (!doc.addEventListener) return;
//   win.addEventListener(resizeEvt, recalc, false);
//   doc.addEventListener('DOMContentLoaded', recalc, false);
// })(document, window);



// (function (doc, win) {　　　　 // 分辨率Resolution适配
//   　　　　
//   var docEl = doc.documentElement,
//     　　　　resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
//     　　　　recalc = function () {　　　　　　
//       var clientWidth = docEl.clientWidth;　　　　　　
//       if (!clientWidth) return;　　　　　　
//     //   docEl.style.fontSize = 100 * (clientWidth / 320) + 'px';　
//       docEl.style.fontSize = 100 * (clientWidth / 375) + 'px';　//rem相对于根元素
//       document.body.style.fontSize = '20px';
//     };

//   　　　　 // Abort if browser does not support addEventListener
//   　　　　
//   if (!doc.addEventListener) return;　　　　
//   win.addEventListener(resizeEvt, recalc, false);　　　　
//   doc.addEventListener('DOMContentLoaded', recalc, false);　　　　 // 一物理像素在不同屏幕的显示效果不一样。要根据devicePixelRatio来修改meta标签的scale,要注释上面的meta标签
//   　　　　
//   (function () {
//     // return;　　　　　　
//     var dpr = scale = 1;　　　　　　
//     var isIPhone = win.navigator.appVersion.match(/iphone/gi);　　　　　　
//     var devicePixelRatio = win.devicePixelRatio;　　
//     if (isIPhone) {　　　　　　　　 // iOS下，对于2和3的屏，用2倍的方案，其余的用1倍方案
//       if (devicePixelRatio >= 3 && (!dpr || dpr >= 3)) {　　　　　　　　
//         dpr = 3;　　　　　　
//       } else if (devicePixelRatio >= 2 && (!dpr || dpr >= 2)) {　　　　　　　　
//         dpr = 2;　　　　　　
//       } else {　　　　　　　　
//         dpr = 1;　　　　　　
//       }　　　　
//     } else {　　　　 // 其他设备下，仍旧使用1倍的方案
//       　　　　　　
//       dpr = 1;　　　　
//     }　　　　　　
//     scale = 1 / dpr;
//     // 
//     　　　　
//     var metaEl = "";　　　　
//     metaEl = doc.createElement('meta');　　　　
//     metaEl.setAttribute('name', 'viewport');　　　　
//     metaEl.setAttribute('content', 'initial-scale=' + scale + ', maximum-scale=' + scale + ', minimum-scale=' + scale + ', user-scalable=no');　　　　
//     if (docEl.firstElementChild) {　　　　　　
//       docEl.firstElementChild.appendChild(metaEl);　　　　
//     } else {　　　　　　
//       var wrap = doc.createElement('div');　　　　　　
//       wrap.appendChild(metaEl);　　　　　　
//       doc.write(wrap.innerHTML);　　　　
//     }　　
//   })();
// })(document, window);

