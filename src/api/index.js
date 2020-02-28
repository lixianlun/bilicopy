import * as url from "./urlConfig"
import axios from 'axios'


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
