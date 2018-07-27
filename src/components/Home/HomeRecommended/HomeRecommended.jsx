import React, {Component} from 'react'
import pic1 from './images/newProduct/right.png'
import pic2 from './images/newProduct/03.png'
import './HomeRecommended.less'
import{getPopularItemList} from "../../../redux/actions";
import Bscroll from 'better-scroll'

import {connect} from 'react-redux'

 class HomeRecommended extends Component {
     componentDidMount(){
         this.props.getPopularItemList()
         new Bscroll('.NewProductSwiper2',{
             probeType: 2,  // 因为惯性滑动不会触发
             click: true,   //默认是禁止点击的
             scrollX: true,
             scrollY:false
         })
     }
    render() {
        const {popularItemList}=this.props
        // console.log(popularItemList)
        return (
            <div className="HomeRecommended">
                <div className="HomeRecommendedHeader">
                    <span>人气推荐</span>
                    <a className="look">
                        <a href="#">查看全部</a>
                        <img src={pic1} alt=""/>
                    </a>
                </div>
                <div className="NewProductScroll">
                    <div className="NewProductSwiper2">
                        <ul className="list">
                            {
                                popularItemList.map((msg,index)=>{
                                    return(
                                        <li className="item" key={index}>
                                            <div className="icon">
                                                <img src={msg.listPicUrl} alt=""/>
                                            </div>
                                            <div className="textContaner">
                                                <div className="title ellipsis">{msg.name}</div>
                                                <div className="content ellipsis">{msg.simpleDesc}</div>
                                                <div className="price ellipsis">￥{msg.retailPrice}</div>
                                            </div>
                                        </li>
                                    )
                                })
                            }



                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}
 export default connect(
     state=>({popularItemList:state.popularItemList}),
     {getPopularItemList}
 )(HomeRecommended)
