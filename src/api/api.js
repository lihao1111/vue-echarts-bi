import axios from 'axios'
import qs from 'qs'
let base = '/api'
axios.defaults.timeout = 5000 // 响应时间
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8' // 请求头
//  登录
export const adminLogin = params => {
  return axios.post(`${base}/adminLogin`, qs.stringify(params))
    .then(res => res.data)
    .catch(function () { return { 'businessCode': 500 } })
}
//  加载产品视图
export const loadPlatform = params => {
  return axios.post(`${base}/loadPlatform`, qs.stringify(params))
    .then(res => res.data)
    .catch(function () { return { 'businessCode': 500 } })
}
export const editUserInfo = params => {
  return axios.post(`${base}/editUserInfo`, qs.stringify(params))
    .then(res => res.data)
    .catch(function () { return { 'businessCode': 500 } })
}
// 加载实时在线
export const loadOnlineUser = params => {
  return axios.post(`${base}/loadOnlineUser`, qs.stringify(params))
    .then(res => res.data)
    .catch(function () { return { 'businessCode': 500 } })
}
export const compareOnlineUser = params => {
  return axios.post(`${base}/compareOnlineUser`, qs.stringify(params))
    .then(res => res.data)
    .catch(function () { return { 'businessCode': 500 } })
}
// 加载实时订购
export const loadOnlineOrder = params => {
  return axios.post(`${base}/loadOnlineOrder`, qs.stringify(params))
    .then(res => res.data)
    .catch(function () { return { 'businessCode': 500 } })
}
export const compareOnlineOrder = params => {
  return axios.post(`${base}/compareOnlineOrder`, qs.stringify(params))
    .then(res => res.data)
    .catch(function () { return { 'businessCode': 500 } })
}
// 加载PVUV数据
export const loadPVUVList = params => {
  return axios.post(`${base}/loadPVUVList`, qs.stringify(params))
    .then(res => res.data)
    .catch(function () { return { 'businessCode': 500 } }) // 通信问题 返回500
}
export const loadPVUVSum = params => {
  return axios.post(`${base}/loadPVUVSum`, qs.stringify(params))
    .then(res => res.data)
    .catch(function () { return { 'businessCode': 500 } }) // 通信问题 返回500
}
export const compareOnlinePVUV = params => {
  return axios.post(`${base}/compareOnlinePVUV`, qs.stringify(params))
    .then(res => res.data)
    .catch(function () { return { 'businessCode': 500 } })
}
// 页面流向
export const loadFlowAna = params => {
  return axios.post(`${base}/loadFlowAna`, qs.stringify(params))
    .then(res => res.data)
    .catch(function () { return { 'businessCode': 500 } })
}
// 页面热点
export const loadPages = params => {
  return axios.post(`${base}/loadPages`, qs.stringify(params))
    .then(res => res.data)
    .catch(function () { return { 'businessCode': 500 } })
}
export const loadPromotionList = params => {
  return axios.post(`${base}/loadPromotionList`, qs.stringify(params))
    .then(res => res.data)
    .catch(function () { return { 'businessCode': 500 } })
}

// 专题流量
export const loadSubjectList = params => {
  return axios.post(`${base}/loadSubjectList`, qs.stringify(params))
    .then(res => res.data)
    .catch(function () { return { 'businessCode': 500 } })
}
// 订购/退订
export const loadOrderDetail = params => {
  return axios.post(`${base}/loadOrderDetail`, qs.stringify(params))
    .then(res => res.data)
    .catch(function () { return { 'businessCode': 500 } })
}
// 订购来源
export const loadOrderSource = params => {
  return axios.post(`${base}/loadOrderSource`, qs.stringify(params))
    .then(res => res.data)
    .catch(function () { return { 'businessCode': 500 } })
}
// 用户新增留存
export const loadNewAddUser = params => {
  return axios.post(`${base}/loadNewAddUser`, qs.stringify(params))
    .then(res => res.data)
    .catch(function () { return { 'businessCode': 500 } })
}
// 用户活跃
export const loadActiveUser = params => {
  return axios.post(`${base}/loadActiveUser`, qs.stringify(params))
    .then(res => res.data)
    .catch(function () { return { 'businessCode': 500 } })
}
// 用户使用时长
export const loadUseTime = params => {
  return axios.post(`${base}/loadUseTime`, qs.stringify(params))
    .then(res => res.data)
    .catch(function () { return { 'businessCode': 500 } })
}
// 用户播放时长
export const loadPlayTime = params => {
  return axios.post(`${base}/loadPlayTime`, qs.stringify(params))
    .then(res => res.data)
    .catch(function () { return { 'businessCode': 500 } })
}
// 用户有效播放次数
export const loadPlayCount = params => {
  return axios.post(`${base}/loadPlayCount`, qs.stringify(params))
    .then(res => res.data)
    .catch(function () { return { 'businessCode': 500 } })
}
// 加载CP数据
export const loadCPs = params => {
  return axios.post(`${base}/loadCPs`, qs.stringify(params))
    .then(res => res.data)
    .catch(function () { return { 'businessCode': 500 } })
}
// 加载medai完整度
export const loadMediaPer = params => {
  return axios.post(`${base}/loadMediaPer`, qs.stringify(params))
    .then(res => res.data)
    .catch(function () { return { 'businessCode': 500 } })
}
// 内容提供商排行
export const loadContentCPs = params => {
  return axios.post(`${base}/loadContentCPs`, qs.stringify(params))
    .then(res => res.data)
    .catch(function () { return { 'businessCode': 500 } })
}
// 搜索关键字排行
export const loadSearchDetail = params => {
  return axios.post(`${base}/loadSearchDetail`, qs.stringify(params))
    .then(res => res.data)
    .catch(function () { return { 'businessCode': 500 } })
}
// 加载收藏数据
export const loadCollectDetail = params => {
  return axios.post(`${base}/loadCollectDetail`, qs.stringify(params))
    .then(res => res.data)
    .catch(function () { return { 'businessCode': 500 } })
}
// 用户管理
export const loadUserList = params => {
  return axios.post(`${base}/loadUserList`, qs.stringify(params))
    .then(res => res.data)
    .catch(function () { return { 'businessCode': 500 } })
}
export const saveUser = params => {
  return axios.post(`${base}/saveUser`, qs.stringify(params))
    .then(res => res.data)
    .catch(function () { return { 'businessCode': 500 } })
}
export const deleteUser = params => {
  return axios.post(`${base}/deleteUser`, qs.stringify(params))
    .then(res => res.data)
    .catch(function () { return { 'businessCode': 500 } })
}
export const loadUserAuth = params => {
  return axios.post(`${base}/loadUserAuth`, qs.stringify(params))
    .then(res => res.data)
    .catch(function () { return { 'businessCode': 500 } })
}
export const authUserSubmit = params => {
  return axios.post(`${base}/authUserSubmit`, qs.stringify(params))
    .then(res => res.data)
    .catch(function () { return { 'businessCode': 500 } })
}
// 角色管理
export const loadRoles = params => {
  return axios.post(`${base}/loadRoles`, qs.stringify(params))
    .then(res => res.data)
    .catch(function () { return { 'businessCode': 500 } })
}
export const loadAnthTree = params => {
  return axios.post(`${base}/loadAnthTree`, qs.stringify(params))
    .then(res => res.data)
    .catch(function () { return { 'businessCode': 500 } })
}
export const addRoleSubmit = params => {
  return axios.post(`${base}/addRoleSubmit`, qs.stringify(params))
    .then(res => res.data)
    .catch(function () { return { 'businessCode': 500 } })
}
export const loadEditRole = params => {
  return axios.post(`${base}/loadEditRole`, qs.stringify(params))
    .then(res => res.data)
    .catch(function () { return { 'businessCode': 500 } })
}
export const editRoleSubmit = params => {
  return axios.post(`${base}/editRoleSubmit`, qs.stringify(params))
    .then(res => res.data)
    .catch(function () { return { 'businessCode': 500 } })
}
export const deleteRow = params => {
  return axios.post(`${base}/deleteRow`, qs.stringify(params))
    .then(res => res.data)
    .catch(function () { return { 'businessCode': 500 } })
}
// 权限管理
export const loadAuthList = params => {
  return axios.post(`${base}/loadAuthList`, qs.stringify(params))
    .then(res => res.data)
    .catch(function () { return { 'businessCode': 500 } })
}
export const BuildAuthentication = params => {
  return axios.post(`${base}/BuildAuthentication`, qs.stringify(params))
    .then(res => res.data)
    .catch(function () { return { 'businessCode': 500 } })
}
