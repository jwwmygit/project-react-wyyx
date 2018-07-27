import React, {Component} from 'react'
import './Personal.less'
import PersonalHeader from '../../components/Goods/GoodsHeader/GoodsHeader'

export default class Personal extends Component {
    render() {
        return (
            <div className="personal">
                <PersonalHeader />
                <div className="personalContent">
                    <div className="wy">
                        <div className="img"></div>
                    </div>
                    <div className="login">
                        <div className="phone" >
                        <span className="icon"></span>
                        <span className="txt" onClick={()=>this.props.history.replace('/login')} >手机号码登录</span>
                    </div>
                    <div className="mail">
                        <span className="icon"></span>
                        <span className="txt" >邮箱号码登录</span>
                    </div>
                    <div className="register">
                        <span>手机号码注册</span>
                        <span className="icon"></span>
                    </div>
                </div>
                <div className="bottom">
                    <div className="wx">
                        <span className="icon"></span>
                        <span className="txt">微信</span>
                    </div>
                    <div className="qq">
                        <span className="icon"></span>
                        <span className="txt">qq</span>
                    </div>
                    <div className="wb">
                        <span className="icon"></span>
                        <span className="txt">微博</span>
                    </div>
                </div>
            </div>
    </div>
        )
    }
}