import React, {Component} from 'react';
import {Route, Switch} from 'react-router-dom'
import {connect} from 'react-redux'
import {getFocusList} from '../../../redux/actions'
import Swiper from 'swiper'
import 'swiper/dist/css/swiper.min.css'
import pic1 from './img/icon/arrow.png'
import './HomeSwiper.less'
 class HomeSwiper extends Component {
  componentDidMount(){
      this.props.getFocusList();
  }
  componentDidUpdate(){
      if(this.swiper){
          this.swiper.destory()
      }
      var mySwiper = new Swiper ('.swiper-container', {
          loop: true,
          // 如果需要分页器
          pagination: {
              el: '.swiper-pagination',
              currentClass : 'my-pagination-current',
          },
      })
  }
  
  render() {
      const {focusList}=this.props
    return (
        
    <div className="HeaderSwiper" >
        <div className="swiper-container">
            <div className="swiper-wrapper">
                {
                    focusList.map((msg,index)=>{
                        return(
                            <div className="swiper-slide" key={index}>
                                <img src={msg.picUrl} alt=""/>
                            </div>
                        )
                    })
                }
            </div>
            <div className="swiper-pagination my-pagination-current" ></div>
        </div>

      <div className="indexServiceContainer">
        <div className="index-content">
          <a className="list">
         <span className="icon">
           <img src={pic1} alt=""/>
         </span>
            <span className="txt">网易自营品牌</span>
          </a>
          <a className="list">
          <span className="icon">
            <img src={pic1} alt=""/>
          </span>
            <span className="txt">30天无忧退货</span>
          </a>
          <a className="list">
          <span className="icon">
            <img src={pic1} alt=""/>
          </span>
            <span className="txt">48小时快速退款</span>
          </a>
        </div>
      </div>
    </div>
    )
  }
}
export default connect(
    state=>({focusList:state.focusList}),
     {getFocusList}
)(HomeSwiper)