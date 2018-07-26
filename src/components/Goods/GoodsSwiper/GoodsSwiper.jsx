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
                            <p className="txt1">--111--</p>
                            <p className="txt2">333</p>
                            <p className="txt3">44</p>
                        </div>
                        <img src={require('./images/01.jpg')} alt=""/>
                    </div>
                    <div className="swiper-slide" >
                        <div className="mask">
                            <p className="txt1">--111--</p>
                            <p className="txt2">333</p>
                            <p className="txt3">44</p>
                        </div>
                        <img src={require('./images/01.jpg')} alt=""/>
                    </div>
                    <div className="swiper-slide" >
                        <div className="mask">
                            <p className="txt1">--111--</p>
                            <p className="txt2">333</p>
                            <p className="txt3">44</p>
                        </div>
                        <img src={require('./images/01.jpg')} alt=""/>
                    </div>
                    <div className="swiper-slide" >
                        <div className="mask">
                            <p className="txt1">--111--</p>
                            <p className="txt2">333</p>
                            <p className="txt3">44</p>
                        </div>
                        <img src={require('./images/01.jpg')} alt=""/>
                    </div>
                </div>
            </div>
        )
    }
}
