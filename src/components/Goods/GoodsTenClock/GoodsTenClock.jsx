import React, {Component} from 'react'
import './GoodsTenClock.less'
import {connect} from 'react-redux'
import {getTenfifteen} from '../../../redux/actions'
import Bsroll from 'better-scroll'

class GoodsTenClock extends Component {
    componentDidMount() {
         this.props.getTenfifteen()
        new Bsroll('.GoodsTenClockContent',{
            probeType: 2,  // 因为惯性滑动不会触发
            click: true,   //默认是禁止点击的
            scrollX: true,
            scrollY:false
        })
    }

    render() {
        const {tenfifteen} = this.props
        return (
            <div className="GoodsTenClock">
                <div className="GoodsTenClockHeader">
                    十点一刻
                </div>
                <div className="GoodsTenClockContent">
                    <div className="wrap" >
                        {
                            tenfifteen.map((msg,index)=>{
                                return (
                                    <div className="list"  key={index}>
                                        <div className="content">
                                            <div className="topWrap">
                                                <div className="topic">--今日话题--</div>
                                                <div className="about">{msg.title}</div>
                                                <div className="chat">{msg.desc}</div>
                                            </div>

                                            <div className="bottom" >
                                                {
                                                    msg.participantAvatar.map((item,i)=>{
                                                        return(
                                                            <span className="icon" key={i}>
                                                          <img src={item} alt=""/>
                                                        </span>
                                                        )
                                                    })
                                                }
                                                <span className="dot">
                                                    <span></span>
                                                    <span></span>
                                                    <span></span>
                                                </span>
                                                <span className="txt">{msg.participantNum}人参与话题</span>
                                            </div>

                                        </div>
                                    </div>
                                )
                            })
                        }

                        <div className="list" >
                            <div className="content">
                                <div className="more">
                                    查看更多话题
                                    <img className="right" src="./images/right.png" alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default connect(
     state => ({tenfifteen: state.tenfifteen}),
     {getTenfifteen}
)(GoodsTenClock)
