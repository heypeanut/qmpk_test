<template>
  <div class="list-wrapper">
    <ul class="list">
      <li 
        class="item" 
        v-for="item in videoList" 
        :key="item.id"
        @click="selectItem(item)"
        >
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
import { mapGetters,mapMutations,mapActions } from 'vuex'
export default {
  data(){
    return {
      videoList:[]
    }
  },
  computed:{
    ...mapGetters([
      'video',
      ''
    ])
  },
  created(){
    this._getVideoList() 
  },
  methods:{
    selectItem(video){
      // console.log(video)
      //当前点击视频对象
      this.setVideo(video)
      //原始视频列表
      this.setVideoList(this.videoList)
      //需要处理的推荐列表
      this.setRecommendListActions({list:this.videoList,currentVideo:video})
      // console.log(this.recommendList)
      //跳转至视频详情页
      this.$router.push({
        path:'/video-details',
        // query:video
      })
    },
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
          // console.log(ret)
          this.videoList = ret
        }else{
          alert('请求失败')
        }
      })
    },
    ...mapMutations({
      setVideo:'SET_VIDEO',
      setVideoList:'SET_VIDEO_LIST',
      setRecommendList:'SET_RECOMMEND_LIST'
    }),
    ...mapActions({
      setRecommendListActions:'recommendListAction'
    })
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