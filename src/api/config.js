import React, {Component} from 'react'
import ReactDom from 'react-dom'
import axios from 'axios'
import { Spin } from 'antd';

const Axios = axios.create({
  // baseURL: process.env.BASE_URL, // 设置请求的base url
  timeout: 20000, // 设置超时时长
})

let count = 0

function showLoading() {
  if(count === 0){
    const dom = document.createElement('div')
    dom.setAttribute('id','globalLoading')
    document.body.appendChild(dom)
    ReactDom.render(<Spin tip="加载中..." size="large"/>, dom)
  }
  ++count
}

function hideLoading() {
  --count
  if(count === 0){
    document.body.removeChild(document.getElementById('globalLoading'))
  }
}

// const setInterceptors = (v) => {
  // Add a request interceptor
  Axios.interceptors.request.use(function (config) {
    // Do something before request is sent
    if(config){
      if(!config.hideLoading){
        showLoading()
      }
    }
    return config;
  }, function (error) {
    // Do something with request error
    if(error.config){
      if(!error.config.hideLoading){
        hideLoading()
      }
    }
    return Promise.reject(error);
  });

  // Add a response interceptor
  Axios.interceptors.response.use(function (response) {
    // Do something with response data
    if(response.config){
      if(!response.config.hideLoading){
        hideLoading()
      }
    }
    return response;
  }, function (error) {
    if(error.config){
      if(!error.config.hideLoading){
        hideLoading()
      }
    }
    // Do something with response error
    return Promise.reject(error);
  });
// }

Component.prototype.$axios = Axios

// export default Axios