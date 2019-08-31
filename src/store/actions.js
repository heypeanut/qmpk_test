import * as types from './mutation-types.js'

export const recommendListAction = function({commit,state},{list,currentVideo}){
  const ret = []
  list.forEach(video=>{
    if(video.id !== currentVideo.id){
      ret.push(video)
    }
  })
  commit(types[types.SET_RECOMMEND_LIST],ret)
}