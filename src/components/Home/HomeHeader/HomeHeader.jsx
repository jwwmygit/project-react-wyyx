import React, {Component} from 'react'
import './HomeHeader.less'
export default class Cart extends Component {
    render() {
        return (
            <div className="HomeHeader">
                <div className="logo-header">
                    <a className="yx-img">
                        <img src="./images/logo.png" alt="" className="logo-yx"/>
                    </a>
                    <div  className="searchDiv">
                          <span className="search">
                            <img src="./images/search.png" alt="" className="img"/>
                          </span>
                        <span className="search-text">搜索商品，共10730款好物</span>
                    </div>
                </div>
                <header className="scroll">
                    <div className="scroll-container">
                        <div className="list">
                            <div className="tab " >
                                <span className="txt" >推荐</span>
                            </div>
                            <div className="tab " >
                                <span className="txt" >推荐</span>
                            </div>
                            <div className="tab " >
                                <span className="txt" >推荐</span>
                            </div>
                            <div className="tab " >
                                <span className="txt" >推荐</span>
                            </div>
                            <div className="tab " >
                                <span className="txt" >推荐</span>
                            </div>
                            <div className="tab "  >
                                <span className="txt" >111</span>
                            </div>
                            <div className="tab "  >
                                <span className="txt" >111</span>
                            </div>
                            <div className="tab "  >
                                <span className="txt" >111</span>
                            </div>
                            <div className="tab "  >
                                <span className="txt" >111</span>
                            </div>
                            <div className="tab "  >
                                <span className="txt" >111</span>
                            </div>
                        </div>
                    </div>

                </header>
            </div>
        )
    }
}