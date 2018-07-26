import React, {Component} from 'react'
import pic1 from './images/newProduct/right.png'
import pic2 from './images/newProduct/03.png'
import './HomeNewProduct.less'

export default class HomeNewProduct extends Component {
    render() {
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
                            <li className="item">
                              <div className="icon">
                                <img src={pic2} alt=""/>
                              </div>
                              <div className="textContaner">
                                <div className="title ellipsis">网易制造3D1111111111111111111111111111</div>
                                <div className="content ellipsis">创造可逆模式空气</div>
                                <div className="price ellipsis">￥499</div>
                              </div>
                            </li>
                            <li className="item">
                                <div className="icon">
                                    <img src={pic2} alt=""/>
                                </div>
                                <div className="textContaner">
                                    <div className="title ellipsis">网易制造3D1111111111111111111111111111</div>
                                    <div className="content ellipsis">创造可逆模式空气</div>
                                    <div className="price ellipsis">￥499</div>
                                </div>
                            </li>
                            <li className="item">
                                <div className="icon">
                                    <img src={pic2} alt=""/>
                                </div>
                                <div className="textContaner">
                                    <div className="title ellipsis">网易制造3D1111111111111111111111111111</div>
                                    <div className="content ellipsis">创造可逆模式空气</div>
                                    <div className="price ellipsis">￥499</div>
                                </div>
                            </li>
                            <li className="item">
                                <div className="icon">
                                    <img src={pic2} alt=""/>
                                </div>
                                <div className="textContaner">
                                    <div className="title ellipsis">网易制造3D1111111111111111111111111111</div>
                                    <div className="content ellipsis">创造可逆模式空气</div>
                                    <div className="price ellipsis">￥499</div>
                                </div>
                            </li>
                            <li className="item">
                                <div className="icon">
                                    <img src={pic2} alt=""/>
                                </div>
                                <div className="textContaner">
                                    <div className="title ellipsis">网易制造3D1111111111111111111111111111</div>
                                    <div className="content ellipsis">创造可逆模式空气</div>
                                    <div className="price ellipsis">￥499</div>
                                </div>
                            </li>
                            <li className="item">
                                <div className="icon">
                                    <img src={pic2} alt=""/>
                                </div>
                                <div className="textContaner">
                                    <div className="title ellipsis">网易制造3D1111111111111111111111111111</div>
                                    <div className="content ellipsis">创造可逆模式空气</div>
                                    <div className="price ellipsis">￥499</div>
                                </div>
                            </li>
                            <li className="item">
                                <div className="icon">
                                    <img src={pic2} alt=""/>
                                </div>
                                <div className="textContaner">
                                    <div className="title ellipsis">网易制造3D1111111111111111111111111111</div>
                                    <div className="content ellipsis">创造可逆模式空气</div>
                                    <div className="price ellipsis">￥499</div>
                                </div>
                            </li>
                            <li className="item">
                                <div className="icon">
                                    <img src={pic2} alt=""/>
                                </div>
                                <div className="textContaner">
                                    <div className="title ellipsis">网易制造3D1111111111111111111111111111</div>
                                    <div className="content ellipsis">创造可逆模式空气</div>
                                    <div className="price ellipsis">￥499</div>
                                </div>
                            </li>
                           
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}
