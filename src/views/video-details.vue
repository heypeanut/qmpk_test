<template>
  <div class="video-details-wrapper">
    <div class="header">
      <div class="video">
        <video :src="video.video" autoplay controls></video>
        <i class="iconfont back" @click="back">&#xe646;</i>
      </div>
      <div class="title">
        <h3>{{winner(video.watching.team,video.winner)}} vs {{winner(video.other.team,video.winner)}}</h3>
        <span>比赛时间：{{video.match_time}}</span>
      </div>
    </div>
    <div class="recommended">
      <h4>视频推荐</h4>
      <ul class="list">
        <li class="item" v-for="item in recommendList" :key="item" @click="selectItem(item)">
          <div class="cover">
            <img :src="item.cover" alt="">
            <span class="time">{{item.videoTime.videoTime}}</span>
          </div>
          <div class="title">
            <p>{{winner(item.watching.team,item.winner)}} vs {{winner(item.other.team,item.winner)}}</p>
            <span>比赛时间：{{item.match_time}}</span>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { mapGetters,mapMutations,mapActions } from 'vuex'

export default {
  data() {
    return {
      // video: {}
    };
  },
  computed:{
    ...mapGetters([
      'video',
      'videoList',
      'recommendList'
    ])
  },
  created() {
    console.log(this.recommendList)
    if(!this.video.video || !this.recommendList.length){
      this.$router.push('/list')
    }
    //如果是路由传值，将在这个方法取到
    // this.video = this.$route.query;
  },
  methods: {
    selectItem(video){
      this.setVideo(video)
      this.setRecommendListActions({list:this.videoList,currentVideo:video})
    },
    back(){
      this.$router.push('/list')
    },
    winner(team, winner) {
      return team === winner ? team + "(胜)" : team;
    },
    ...mapMutations({
      setVideo:'SET_VIDEO',
      setVideoList:'SET_VIDEO_LIST',
    }),
    ...mapActions({
      setRecommendListActions:'recommendListAction'
    })
  }
};
</script>

<style  lang="scss" scoped>
.video-details-wrapper {
  background: #f1f1f1;
  .header {
    background: #fff;
    .video {
      position: relative;
      video {
        width: 100%;
      }
      .back {
        position: absolute;
        top: 50%;
        left: 10px;
        transform: translateY(-50%);
        color:#fff;
      }
    }
    .title {
      padding: 10px;
      h3 {
        font-size: 16px;
        font-weight: 600;
        margin-bottom: 10px;
      }
      span {
        font-size: 12px;
        color: #999;
      }
    }
  }
  .recommended {
    background: #fff;
    padding: 10px;
    margin-top: 10px;
    h4 {
      font-size: 14px;
      font-weight: 600;
      margin-bottom: 5px;
    }
    .list {
      margin-bottom: 40px;
      .item {
        display: flex;
        background-color: #fff;
        box-sizing: border-box;
        padding: 5px 0;
        .cover {
          width: 150px;
          min-width: 150px;
          position: relative;
          margin-bottom: 5px;
          img {
            display: block;
            border-radius: 4px;
            width: 100%;
            min-height:7em;
          }
          .time {
            position: absolute;
            bottom: 8px;
            right: 8px;
            font-size: 12px;
            color: #fff;
          }
        }
        .title {
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          align-items: flex-start;
          padding: 10px ;
          p {
            font-size: 14px;
            color: #333;
          }
          span {
            font-size: 12px;
            color: #999;
          }
        }
      }
    }
  }
}
</style>

