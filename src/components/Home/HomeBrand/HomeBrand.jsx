import React, {Component} from 'react'
import pic from './images/brand/01.png'
import './HomeBrand.less'
export default class HomeBrand extends Component {
    render() {
        return (
            <div className="BrandContainer">
                <header className="server">
                    <a href="javascript:;">
                        <span className="text">品牌制造商直供</span>
                    </a>
                    <a className="icon">
                        <img src="./images/right.png" alt=""/>
                    </a>
                </header>
                <header className="brand-shop-list">
                    <ul className="list">
                        <li className="container" >
                        <div className="content">
                            <h4>11111</h4>
                            <h5>44元起</h5>
                        </div>
                        <img src={pic} alt=""/>
                    </li>
                        <li className="container" >
                            <div className="content">
                                <h4>11111</h4>
                                <h5>44元起</h5>
                            </div>
                            <img src={pic} alt=""/>
                        </li>
                        <li className="container" >
                            <div className="content">
                                <h4>11111</h4>
                                <h5>44元起</h5>
                            </div>
                            <img src={pic} alt=""/>
                        </li>
                        <li className="container" >
                            <div className="content">
                                <h4>11111</h4>
                                <h5>44元起</h5>
                            </div>
                            <img src={pic} alt=""/>
                        </li>
                </ul>
            </header>
    </div>
        )
    }
}
