import React, {Component} from 'react'
import {connect} from 'react-redux'
import {getTopicList} from '../../../redux/actions'
import './HomeProjectScroll.less'
import Bsroll from 'better-scroll'
 class HomeProjectScroll extends Component {
    componentDidMount(){
        this.props.getTopicList()
        new Bsroll('.pineapple',{
            probeType: 2,  // 因为惯性滑动不会触发
            click: true,   //默认是禁止点击的
            scrollX: true,
            scrollY:false
        })
    }
    render() {
        const {topicList}=this.props
        return (
            <header className="HomeProjectScroll">
                <div className="select">
                    <span className="txt">专题精选</span>
                    <span className="icon"><img src={require('./images/right.png')} alt=""/></span>
                </div>
                <div className="pineapple">

                    <div className="list-wrap" >
                        {
                            topicList.map((msg,index)=>{
                                return(
                                    <div className="list" key={index} >
                                        <div className="img">
                                            <img src={msg.itemPicUrl} alt=""/>
                                        </div>
                                        <div className="txt-top">
                                            <span className="qing">{msg.subtitle}</span><span className="price">{msg.priceInfo}元起</span>
                                        </div>
                                        <span className="txt-bottom">{msg.title}</span>
                                    </div>
                                )
                            })
                        }

                    </div>


            </div>
    </header>
        )
    }
}
export default connect(
    state=>({topicList:state.topicList}),
    {getTopicList}
)(HomeProjectScroll)
