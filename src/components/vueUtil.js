/**
 * @Author: xujianwei
 * @Date: 2018-03-24 15:23:51
 * @Desc:
 */
export default {
    install: function (Vue) {

        Vue.prototype.method3 = function() {
            console.log('全局函数 vue.prototype method3')
        }

        /**
         * @Author: xujianwei
         * @Date: 2018-03-24 15:22:47
         * @Desc:
         */
        Vue.directive('name', function (el, bind, vnode, oldVnode) {

        });
        Vue.filter('paylistimg', function (value) {

        });
        //金额转换函数 输入为Number 输出为 100.00
        Vue.filter('moneyChange', function (money) {
            if (isNaN(money)) return '0.00';
            if (typeof (money) == 'number') return money.toFixed(2);
            return '0.00'
        });
        //时间转换函数 输入为时间戳 输出为 0000-00-00 00:00
        Vue.filter('timeChangeYMDHM', function (time) {
            if(!time) return '';
            var str = "";
            var t = new Date(time);
            str += t.getFullYear()  + "-";
            str += a(t.getMonth() +1)  + "-";
            str += a(t.getDate()) + "  ";
            str += a(t.getHours()) + ":";
            str += a(t.getMinutes());
            function a(t){
                if(t > 9 ){
                    return t;
                }else{
                    return "0" + t
                }
            }
            return str ;
        });
        //时间转换函数 输入为时间戳 输出为 0000-00-00
        Vue.filter('timeChangeYMD', function (time) {
            if(!time) return '';
            var str = "";
            var t = new Date(time);
            str += t.getFullYear()  + "-";
            str += a(t.getMonth() +1)  + "-";
            str += a(t.getDate()) + "  ";
            function a(t){
                if(t > 9 ){
                    return t;
                }else{
                    return "0" + t
                }
            }
            return str ;
        });
        //时间转换函数 输入为时间戳 输出为 00:00:00
        Vue.filter('timeChangeHMS', function (time) {
            if(!time) return '';
            var str = "";
            var t = new Date(time);
            str += a(t.getHours()) + ":";
            str += a(t.getMinutes())+ ":";
            str += a(t.getSeconds()) + "  ";
            function a(t){
                if(t > 9 ){
                    return t;
                }else{
                    return "0" + t
                }
            }
            return str ;
        });
        //时间转换函数 输入为时间戳 输出为 00-00 00:00
        Vue.filter('timeChangeMDHM', function (time) {
            if(!time) return '';
            var str = "";
            var t = new Date(time)
            str += a(t.getMonth() +1)  + "-";
            str += a(t.getDate()) + "  ";
            str += a(t.getHours()) + ":";
            str += a(t.getMinutes());
            function a(t){
                if(t > 9 ){
                    return t;
                }else{
                    return "0" + t
                }
            }

            return str ;
        });
        var isPCorM = function () {
            var system = {
                win : false,
                mac : false,
                xll : false
            };
            //检测平台
            var p = navigator.platform;
            system.win = p.indexOf("Win") == 0;
            system.mac = p.indexOf("Mac") == 0;
            system.x11 = (p == "X11") || (p.indexOf("Linux") == 0);
            //跳转语句
            if(system.win || system.mac || system.xll) { //转向电脑端
                return true; //是电脑
            } else {
                return false; //是手机
            }
        };
        /**
         * 判断终端
         */
        Vue.prototype.isPC = isPCorM();

        var androidGiTest = function () {
            var originalHeight=document.documentElement.clientHeight || document.body.clientHeight;
            if(!isPCorM()){
                document.body.style.height = originalHeight+'px';
                document.getElementById("app").style.height = originalHeight+'px';
                window.addEventListener('resize', function() {
                    if(document.activeElement.tagName == 'INPUT' || document.activeElement.tagName == 'TEXTAREA') {
                        window.setTimeout(function() {
                            document.activeElement.scrollIntoViewIfNeeded();
                        }, 300);
                    }
                })
            }
        };
        // androidGiTest();
        /**
         * 获取sessionStorage中的值
         * @param key
         * @returns {string}
         */
        Vue.prototype.getSessionStorage = function (key) {
            if(sessionStorage.getItem(key)){
                return JSON.parse(sessionStorage.getItem(key));
            }
            return "";
        };
        /**
         * 设置sessionStorage
         * @param key
         * @param value
         */
        Vue.prototype.setSessionStorage = function (key,value) {
            sessionStorage.setItem(key,JSON.stringify(value));
        };
        /**
         * 移除
         * @param key
         */
        Vue.prototype.removeSessionStorage = function (key) {
            sessionStorage.removeItem(key);
        };
        /**
         * 清空
         */
        Vue.prototype.clearSessionStorage = function () {
            sessionStorage.clear();
        };
        /**
         * 获取localStorage中的值
         * @param key
         * @returns {string}
         */
        Vue.prototype.getLocalStorage = function (key) {
            if(localStorage.getItem(key)){
                return JSON.parse(localStorage.getItem(key));
            }
            return "";
        };
        /**
         * 设置localStorage
         * @param key
         * @param value
         */
        Vue.prototype.setLocalStorage = function (key,value) {
            localStorage.setItem(key,JSON.stringify(value));
        };
        /**
         * 移除
         * @param key
         */
        Vue.prototype.removeLocalStorage = function (key) {
            localStorage.removeItem(key);
        };
        /**
         * 清空
         */
        Vue.prototype.clearLocalStorage = function () {
            localStorage.clear();
        };
    }
}
