import * as url from "./urlConfig"
import axios from 'axios'

export const headApi={
  list(){
    return axios.get(url.head).then((response)=>{
      return response.data
    })
  }
}

export const bannerApi={
    list(){
      return axios.get(url.banner).then((response)=>{
        return response.data
      })
    }
}

export const promoteApi={
    list(){
      return axios.get(url.promote).then((response)=>{
        return response.data
      })
    }
}
export const oneApi={
    list(){
      return axios.get(url.one).then((response)=>{
        return response.data
      })
    }
}
export const liveApi={
    list(){
      return axios.get(url.live).then((response)=>{
        return response.data
      })
    }
}
export const dingApi={
  list(){
    return axios.get(url.ding).then((response)=>{
      return response
    })
  }
}
export const rankApi={
  list(){
    return axios.get(url.rank).then((response)=>{
      return response
    })
  }
}
