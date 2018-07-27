import React, {Component} from 'react'
import './GoodsLook.less'
import {connect} from 'react-redux'
import {getYxLook} from '../../../redux/actions'
import Bsroll from 'better-scroll'

class GoodsLook extends Component {
    componentDidMount() {
        this.props.getYxLook()

    }

    render() {
        const {YxLook} = this.props
        return (
            <div className="GoodsLook">
                <div className="GoodsLookHeader">严选Look</div>
                <div className="GoodsLookCotent">
                    <div className="content">
                        <img src={YxLook.picUrl} alt=""/>
                    </div>
                    <div className="text">
                        <div className="title">
          <span className="icon">
            <img src={YxLook.avatar} alt=""/>
          </span>
                            <span className="name">{YxLook.nickname}</span>
                        </div>
                        <span className="select">{YxLook.content}</span>
                    </div>
                </div>
            </div>
        )
    }
}

export default connect(
    state => ({YxLook: state.YxLook}),
    {getYxLook}
)(GoodsLook)
