import React, {Component} from 'react'
import './GoodsHeader.less'

export default class GoodsHeader extends Component {
    render() {
        return (
            <header className="GoodsHeader">
                <div className="icon-wrap">
                    <div className="icon-home"></div>
                <div className="icon-wy"></div>
                <div className="icon-cart"></div>
                <div className="icon-search"></div>

            </div>
    </header>
        )
    }
}
