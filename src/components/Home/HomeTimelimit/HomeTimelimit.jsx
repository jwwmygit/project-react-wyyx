import React, {Component} from 'react'
import './HomeTimelimit.less'
import pic1 from './images/limitTime/01.png'
import pic2 from './images/welfare/01.jpg'

export default class HomeTimelimit extends Component {
    render() {
        return (
            <header className="HomeTimelimit">
                <div className="shoping">
                    <div className="shoping-wrap">
                        <div className="snap-up">
                            <h4>严选限时购</h4>
                            <span className="squire">00</span><span className="dot">:</span><span className="squire">42</span><span className="dot">:</span><span className="squire">03</span>
                            <h5>下一场14:00开始</h5>
                        </div>
                        <div className="price">
                            <img src={pic1} alt=""/>
                        </div>
                    </div>
                </div>
                <div className="welfare">
                    <img src={require('./images/welfare/01.jpg')} alt=""/>
                </div>
            </header>
        )
    }
}
