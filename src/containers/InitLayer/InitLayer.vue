<template>
	<div class="initLayer_wrap">
    <div class="initLayer_top">
      <img src="./images/top1.jpg">
      <img src="./images/top2.jpg">
    </div>
    <div class="initLayer_bottom">
      <img src="./images/bottom.jpg"/>
      <a class="download_btn" href="javescript:;"></a>
      <router-link class="goMisite_btn" to="/msite"></router-link>
    </div>
    
	</div>
</template>

<script>
  
  export default {
    /*data：组件中data必须用函数的形式，返回的必须是对象*/
    data() {
      return {}
    },
    components:{
    
    }
  }
</script>


<!--scoped：限定范围，只在当前组件中应用样式-->
<style scoped lang="less" rel="stylesheet/less">
@rem:750/10rem;
.initLayer_wrap{
  width:750/@rem;
  height:1334/@rem;
  background-color: #eee;
  position: absolute;
  top:0;
  bottom:0;
  .initLayer_top{
    width:750/@rem;
    margin:0 auto;
    &>img{
      width:750/@rem;
    }
  }
  .initLayer_bottom{
    width:750/@rem;
    margin:0 auto;
    position: relative;
    &>img{
      width:100%;
    }
    &>.download_btn{
      position: absolute;
      top:1.28rem;
      left:2.13rem;
      width:432/@rem;
      height:98/@rem;
    }
    &>.goMisite_btn{
      position: absolute;
      top:3.06rem;
      left:3.28rem;
      width:254/@rem;
      height:30/@rem;
    }
  }
}
</style>
