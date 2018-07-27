import React, {Component} from 'react'
import './GoodsHeader.less'
import {withRouter} from 'react-router-dom'
 class GoodsHeader extends Component {
    render() {
        return (
            <header className="GoodsHeader">
                <div className="icon-wrap">
                    <div className="icon-home" onClick={()=>this.props.history.replace('/home')}></div>
                <div className="icon-wy"></div>
                <div className="icon-cart"></div>
                <div className="icon-search"></div>
            </div>
    </header>
        )
    }
}
export default withRouter(GoodsHeader)
