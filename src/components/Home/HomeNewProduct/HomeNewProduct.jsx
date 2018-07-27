import React, {Component} from 'react'
import pic1 from './images/newProduct/right.png'
import pic2 from './images/newProduct/03.png'
import './HomeNewProduct.less'
import {getNewItemList} from '../../../redux/actions'
import {connect} from 'react-redux'
import Bsroll from 'better-scroll'
 class HomeNewProduct extends Component {
    componentDidMount(){
        this.props.getNewItemList()
        new Bsroll('.NewProductSwiper1',{
            probeType: 2,  // 因为惯性滑动不会触发
            click: true,   //默认是禁止点击的
            scrollX: true,
            scrollY:false
        })
    }
    render() {
        const {newItemList}=this.props
        return (
            <div className="HomeNewProduct">
                <div className="NewProductHeader">
                    <span>新品首发</span>
                    <a className="look">
                        <a href="#">查看全部</a>
                        <img src={pic1} alt=""/>
                    </a>
                </div>
                <div className="NewProductScroll">
                    <div className="NewProductSwiper1">
                        <ul className="list">
                            {
                                newItemList.map((msg,index)=>{
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
     state=>({newItemList:state.newItemList}),
     {getNewItemList}
 )(HomeNewProduct)