import jsonp from '@/common/js/jsonp'
import {commonParams,options} from './config'


export function getVideoList(){
  const url = "https://comp-sync.webapp.163.com/xyqvideo/sync_paged_list"
  const data = Object.assign({},commonParams,{
    page:1,
    per_page: 10,
  })

  return jsonp(url,data,options)
}