<template>
  <div class="list-wrapper">
    <ul class="list">
      <li class="item" v-for="item in videoList" :key="item.id">
        <div class="cover">
          <img :src="item.cover" alt="">
          <span class="time">{{item.videoTime.videoTime}}</span>
        </div>
        <div class="title">
          <p>{{winner(item.watching.team,item.winner)}} vs {{winner(item.other.team,item.winner)}}</p>
          <span>{{item.match_time}}</span>
        </div>
      </li>
    </ul>
  </div>
</template>


<script>
import { getVideoList } from '@/api/list'
import {createVideo} from '@/common/js/video'
export default {
  data(){
    return {
      videoList:[]
    }
  },
  created(){
    this._getVideoList() 
  },
  methods:{
    winner(team,winner){
      return team === winner?team+'(胜)':team
    },
    _getVideoList() {
      getVideoList().then(res=>{
        // console.log(res)
        if(res.status){
          // this.videoList = res.data
          const ret = []
          res.data.forEach(video=>{
            ret.push(createVideo(video))
          })
          console.log(ret)
          this.videoList = ret
        }else{
          alert('请求失败')
        }
      })
    }
  }
}
</script>


<style lang="scss" scoped>

.list-wrapper {
  height: 100%;
  .list {
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    padding:10px;
    background:#f1f1f1;
    margin-bottom: 40px;
    .item {
      width: 48%;
      background-color: #fff;
      box-sizing: border-box;
      padding: 5px;
      margin-bottom: 10px;
      .cover {
        position: relative;
        margin-bottom: 5px;
        img {
          display: block;
          border-radius:2px;
          width: 100%;
        }
        .time {
          position: absolute;
          bottom: 8px;
          right: 8px;
          font-size: 12px;
          color:#fff;
        }
      }
      .title {
        text-align: center;
        padding: 0 5px;
        p {
          font-size: 12px;
          color:#333;
        }
        span {
          font-size: 12px;
          color:#999;
        }
      }
    }
  }
}
</style>