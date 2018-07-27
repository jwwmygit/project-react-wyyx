import React, {Component} from 'react'
import './GoodsTreasures.less'
import {connect} from 'react-redux'
import {getRecommend} from '../../../redux/actions'
import Bsroll from 'better-scroll'

class GoodsTreasures extends Component {
    componentDidMount() {
        this.props.getRecommend()

    }
    render() {
        const {recommend} = this.props
        return (
            <div className="GoodsPick"  >
                <div className="pick">严选甄品</div>
                <div className="pick-content" >
                    <div className="top-txt">{recommend.recommendBanner ? recommend.recommendBanner.nickname:null}</div>
                    <img src={require('./images/01.jpg')} alt=""/>
                </div>
                <div className="style" >
                    <div className="select">
                        <p>{recommend.recommendBanner ? recommend.recommendBanner.title:null}</p>
                        <p>{recommend.recommendBanner ? recommend.recommendBanner.priceInfo:null}元起</p>
                    </div>
                    <p className="text">{recommend.recommendBanner ? recommend.recommendBanner.subtitle:null}</p>
                </div>
                {
                    recommend.recommends ?
                        (recommend.recommends.map((msg,index)=>{
                            return(
                                <div className="pick-list"  key={index}>
                                    <div className="info">
                                        <div className="author">
                                            <div className="flag"><img src={msg.avatar} alt=""/></div>
                                            <div className="name">{msg.nickname}</div>
                                        </div>
                                        <p className="tea ellipsis">{msg.title}</p>
                                        <p className="yun ellipsis">{msg.subtitle}</p>
                                    </div>
                                    <div className="logo">
                                        <div className="rc">{msg.typeName}</div>
                                        <img src={msg.picUrl} alt=""/>
                                    </div>
                                </div>
                            )
                        }) ):  null
                }

            </div>
        )
    }
}

export default connect(
    state => ({recommend: state.recommend}),
    {getRecommend}
)(GoodsTreasures)
