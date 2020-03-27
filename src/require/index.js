import axios from 'axios'
// axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
axios.interceptors.request.use(function(config) {
    // 请求前做点什么
    console.log(config);
    return config;

}, function(error) {

    // 请求错误返回
    return Promise.reject(error);
})
axios.interceptors.response.use(function(res) {
    // 处理响应数据
    return res.data
}, function(error) {
    console.log(error.toJSON());
    if (!error.response) {
        throw new Error('网络错误');
    }
    if (error.response.status == 403) {
        throw new Error('权限不足');
    } else if (error.response.status == 401) {
        throw new Error('需要登录401');
    } else {
        throw new Error(error);
    }
})


export default axios