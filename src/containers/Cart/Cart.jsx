import React, {Component} from 'react'
import './Cart.less'
export default class Cart extends Component {
    render() {
        return (
            <div className="cart">
                <div className="headerWrap">
                    <div className="cart-title">购物车</div>
                    <div className="juan">领劵</div>
                </div>
                <div className="headerContent">
                    <div className="list">
                        <div className="day">
                            <span className="circle"></span>
                            <span className="text">30天无忧退货</span>
                        </div>
                        <div className="day">
                            <span className="circle"></span>
                            <span className="text">48小时快速退款</span>
                        </div>
                        <div className="day">
                            <span className="circle"></span>
                            <span className="text">满88元免邮费</span>
                        </div>
                    </div>
                    <div className="cartIcon">
                        <img src={require('./images/shopcart.png')} alt=""/>
                            <div className="txt">去添加东西吧</div>
                            <div className="login">登录</div>
                    </div>


                </div>
            </div>
        )
    }
}