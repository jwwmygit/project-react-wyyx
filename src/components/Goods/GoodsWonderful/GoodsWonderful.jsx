import React, {Component} from 'react'
import './GoodsWonderful.less'
import {connect} from 'react-redux'
import {getFindMore} from '../../../redux/actions'
import Bsroll from 'better-scroll'
class GoodsWonderful extends Component {
    componentDidMount() {
        this.props.getFindMore()
    }
    render() {
         const {findMore} = this.props
        return (
            <div className="GoodsWonderful">
                <div className="GoodsWonderfulHeader">
                    <span className="more">更多精彩</span>
                    <div className="line"></div>
                </div>
                {
                     findMore.map((find,index)=>{
                        return(
                            <div className="GoodsWonderfulContent"  key={index}>
                                <div className="imgWrap">
                                    <img src={find.itemPicUrl} alt=""/>
                                </div>
                                <div className="titleWrap">{find.title}</div>
                            </div>
                        )
                    })
                }

    </div>
        )
    }
}

export default connect(
     state => ({findMore: state.findMore}),
    {getFindMore}
)(GoodsWonderful)
