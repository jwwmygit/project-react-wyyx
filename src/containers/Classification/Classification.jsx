import React, {Component} from 'react'
import './Classification.less'
import {connect} from 'react-redux'
import Bsroll from 'better-scroll'

export default class Classification extends Component {
    componentDidMount() {
        // this.props.xxx()

    }

    render() {
        // const {column} = this.props
        return (
            <div className="Classification1Wrap">
                <div className="Classification1WrapHeader">
                    <div className="wrap-header">
                        <span className="search">
                        <img src="./images/search.png" alt=""/>
                      </span>
                        <span className="title">搜索商品, 共9723款好物</span>
                    </div>
                </div>
             {/*   <ClassicationLeft />
                <ClassicationRight/>*/}
            </div>
        )
    }
}
        
