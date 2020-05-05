import * as url from "./urlConfig"
import axios from 'axios'

export const Api={
  headlist(){
    return axios.get(url.head).then((response)=>{
      return response.data
    })
  },
  bannerlist(){
    return axios.get(url.banner).then((response)=>{
      return response.data
    })
  },
  promotelist(){
    return axios.get(url.promote).then((response)=>{
      return response.data
    })
  },
  onelist(){
    return axios.get(url.one).then((response)=>{
      return response.data
    })
  },
  livelist(){
    return axios.get(url.live).then((response)=>{
      return response.data
    })
  },
  dinglist(){
    return axios.get(url.ding).then((response)=>{
      return response
    })
  },
  ranklist(){
    return axios.get(url.rank).then((response)=>{
      return response
    })
  }
}

