import React, {Component} from 'react'
import './GoodsRecommendedScroll.less'
import {connect} from 'react-redux'
import {getColumn} from '../../../redux/actions'
import Bsroll from 'better-scroll'
 class GoodsRecommendedScroll extends Component {
    componentDidMount(){
        this.props.getColumn()
        new Bsroll('.GoodsRecommendedScroll',{
            probeType: 2,  // 因为惯性滑动不会触发
            click: true,   //默认是禁止点击的
            scrollX: true,
            scrollY:false
        })
    }
    render() {
        const {column}=this.props
        console.log(column)
        return (
            <div className="GoodsRecommendedScroll">
                <ul className="wrap">
                    {
                        column.map((msg,index)=>{
                            return(
                                <li className="list"   key={index}>
                                    <div className="content">
                                        <img src={msg.picUrl} alt=""/>
                                        <div className="txt">{msg.articleCount}</div>
                                    </div>
                                    <span className="text">{msg.title}</span>
                                </li>
                            )
                        })
                    }

                </ul>
            </div>
        )
    }
}
 export default connect(
     state=>({column:state.column}),
     {getColumn}
 )(GoodsRecommendedScroll)
