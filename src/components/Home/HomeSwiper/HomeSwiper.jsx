import React, {Component} from 'react';
import {Route, Switch} from 'react-router-dom'
import Swiper from 'swiper'
import 'swiper/dist/css/swiper.min.css'
import pic1 from './img/01.jpg'
import './HomeSwiper.less'
export default class HomeSwiper extends Component {
  componentDidMount(){
   /* /!*  if(this.swiper){
        this.swiper.destory()
      }
    this.swiper = new Swiper('.swiper-container', {
      loop: true, // 可以循环轮播
      // 如果需要分页器
      pagination: {
        el: '.swiper-pagination',
       // currentClass : 'my-pagination-current',
      }
    })*!/
      var mySwiper = new Swiper ('.swiper-container', {
          eventPassthrough: 'vertical',
          loop: true,
          // 如果需要分页器
          pagination: {
              el: '.swiper-pagination',
              currentClass : 'my-pagination-current',

          },
      })
*/
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
    return (
        
    <div className="HeaderSwiper" >
      <div className="swiper-container">
        <div className="swiper-wrapper">
          <div className="swiper-slide" >
            <img src={pic1} alt=""/>
          </div>
          <div className="swiper-slide" >
            <img src={pic1} alt=""/>
          </div>
          <div className="swiper-slide" >
            <img src={pic1} alt=""/>
          </div>
          <div className="swiper-slide" >
            <img src={pic1} alt=""/>
          </div>
          <div className="swiper-slide" >
            <img src={pic1} alt=""/>
          </div>
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