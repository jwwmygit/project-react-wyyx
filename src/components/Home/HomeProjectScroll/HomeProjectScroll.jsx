import React, {Component} from 'react'
import './HomeProjectScroll.less'

export default class HomeProjectScroll extends Component {
    render() {
        return (
            <header className="HomeProjectScroll">
                <div className="select">
                    <span className="txt">专题精选</span>
                    <span className="icon"><img src="./images/right.png" alt=""/></span>
                </div>
                <div className="pineapple">
                    <div className="list-wrap">
                        <div className="list" >
                        <div className="img">
                            <img src={require('./images/topic/01.jpg')} alt=""/>
                        </div>
                        <div className="txt-top">
                            <span className="qing">12</span><span className="price">33元起</span>
                        </div>
                        <span className="txt-bottom">11</span>
                    </div>

                </div>
                    <div className="list-wrap">
                        <div className="list" >
                            <div className="img">
                                <img src={require('./images/topic/01.jpg')} alt=""/>
                            </div>
                            <div className="txt-top">
                                <span className="qing">12</span><span className="price">33元起</span>
                            </div>
                            <span className="txt-bottom">11</span>
                        </div>

                    </div>
                    <div className="list-wrap">
                        <div className="list" >
                            <div className="img">
                                <img src={require('./images/topic/01.jpg')} alt=""/>
                            </div>
                            <div className="txt-top">
                                <span className="qing">12</span><span className="price">33元起</span>
                            </div>
                            <span className="txt-bottom">11</span>
                        </div>

                    </div>

            </div>
    </header>
        )
    }
}
