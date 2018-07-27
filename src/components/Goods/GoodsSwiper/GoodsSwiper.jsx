import React, {Component} from 'react'
import './GoodsSwiper.less'
import Swiper from 'swiper'
import 'swiper/dist/css/swiper.min.css'
export default class GoodsSwiper extends Component {
    componentDidMount(){
        if(this.swiper){
            this.swiper.destory()
        }
        this.swiper = new Swiper('.swiper-container', {
            loop: true, // 可以循环轮播
            // 如果需要分页器
            pagination: {
                el: '.swiper-pagination'
            }
        })
    }
    render() {
        return (
            <div className="swiper-container">
                <div className="swiper-wrapper">
                    <div className="swiper-slide" >
                        <div className="mask">
                            <p className="txt1">--严选推荐--</p>
                            <p className="txt2">严选材料图书馆</p>
                            <p className="txt3">全棉床品、头层牛皮箱包7折起</p>
                        </div>
                        <img src={require('./images/01.jpg')} alt=""/>
                    </div>
                    <div className="swiper-slide" >
                        <div className="mask">
                            <p className="txt1">--严选推荐--</p>
                            <p className="txt2">海边度假必看攻略</p>
                            <p className="txt3">不去海边浪一浪，夏天算白过了</p>
                        </div>
                        <img src={require('./images/02.jpg')} alt=""/>
                    </div>
                </div>
            </div>
        )
    }
}
