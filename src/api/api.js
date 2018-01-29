import Http from './http';
// import api from 'api/api.json';


export default async function(name,params,formData){

  if(api.hasOwnProperty(name)){
    let item = api[name];
    let url = item.url;
    let ret = {};
    if(typeof params === 'string'){ //传入的是一个字符串
      let arr = url.split('/');
      if(arr[arr.length-1].indexOf('{') > -1){  //最后一个字段是用 “{” 括起来的
        arr[arr.length-1] = params;
      } else {
        arr.push(params)
      }
      url = arr.join('/');
    }else if(typeof params === 'object'){ //证明是分页
      if(params.hasOwnProperty('query') ){
        var query = params.query;
        var count = 0;
        var queryStr = ""
        for(var key in query){
          if(query[key]!=undefined && query[key]!=""){
            queryStr += count === 0 ? `?${key}=${query[key]}` : `&${key}=${query[key]}`;
          }
          count++;
        }
        url += queryStr;
      }
    }
    if(item.type == 'post'){
      ret = Http.post(url,params);
    }else if(item.type == 'get'){
      ret = Http.get(url);
    }else if(item.type == 'formData'){
      let config = {
        headers: {
          "Content-Type": "multipart/form-data"
        }
      };
      ret = Http.post(url, formData,config);
    }
    return ret;
  }
}
