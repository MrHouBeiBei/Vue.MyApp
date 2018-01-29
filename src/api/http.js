import axios from 'axios';
import store from '@/vuex/store'
import * as types from '@/vuex/mutation-types'
// import env from '@/env'
// import { Message } from "element-ui";




let Http = {};

// 创建服务
Http = axios.create({
    baseURL:window.GLOBAL_BASE,
    timeout: 30000
});

// 服务请求的拦截处理
Http.interceptors.request.use(
    config => {
        // 更改全局 loading 状态 
        if(!store.state.loadingFlag){   //判断 loading 的状态如果是 ture 就什么也不做
            store.commit(types.LOADING_FLAG,true);
        }

        Http.defaults.headers.common['Content-Type'] = 'application/json-patch+json';

        Http.defaults.headers.common['Accept'] = 'application/json';
        
        //如果处于登录状态,那么请求中就需要加入 token
        if(store.state.login){
            // Http.defaults.headers.common['Authorization'] ='Bearer ' +  store.state.user.token;
            // Http.defaults.headers.common['abc'] ='Bearer ' +  store.state.user.token;
            config.headers['Authorization'] ='Bearer ' +  store.state.user.token;
        }
        return config;
    },
    error => {
        // 关闭全局 loading 状态
        store.commit(types.LOADING_FLAG,false);
        Promise.reject(error);
    }
);

// 服务响应的拦截处理
Http.interceptors.response.use(
    response => {
        // 关不全局 loading 状态
        // TODO: 拦截业务逻辑是错误的状态,
        store.commit(types.LOADING_FLAG,false);
        if(response.data && response.data.code >= 10000){
           //TODO: 提示信息
           Message.error({
               message:response.data.msg,
           });
           return response.data;
        }

        if(response.data && response.data.code===0){
            return response.data;
        }
        return {};
    },
    error => {
        // 关闭全局 loading 状态
        store.commit(types.LOADING_FLAG,false);
        return Promise.reject(error);
    }
);

export default Http;
