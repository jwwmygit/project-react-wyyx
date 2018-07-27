import React, {Component} from 'react'
import './Login.less'
import GoodsHeader from '../../components/Goods/GoodsHeader/GoodsHeader'
import {connect} from 'react-redux'
import Bsroll from 'better-scroll'
class Login extends Component {
    componentDidMount() {
    }
  state={
        phone:""
  };
    clear=()=>{
        this.refs.phoneValue.value='';
    };
    change=()=>{
        this.setState({
            phone:this.refs.phoneValue.value
        })
        console.log(this.refs.phoneValue.value)
      };
    textPhone=()=>{
      this.refs.warn.textContent=this.refs.phoneValue.value ? /^1\d{10}$/.test(this.state.phone) ? "" :"手机号格式错误" :'请输入手机号'
        if(/^1\d{10}$/.test(this.state.phone)){
            //模拟发送请求

        }
    }
    render() {
        return (
        <div className="login-wrap">
        <GoodsHeader/>
        <div className="content-wrap">
            <div className="logo-wrap">
                <img src="//yanxuan.nosdn.127.net/bd139d2c42205f749cd4ab78fa3d6c60.png" alt=""/>
            </div>
            <div className="center-wrap">
                <div className="top">
                    <div className="phone">
                        <input type="text" className="tel-input" placeholder="请输入手机号"
                               maxLength="11" onChange={this.change} ref='phoneValue'/>
                        {this.state.phone.length ? <div className="error" onClick={this.clear} ></div> :null}
                </div>
                <div className="yanzheng">
                    <input type="text" className="yan-input" placeholder="请输入手机验证码"/>
                        <div className="btns"  ref="yz" onClick={this.textPhone}>获取验证码</div>
            </div>
            <div className="alert-text">
                <div className="text" ref="warn">

                </div>
            </div>
            <div className="unlogin">
                <span className="issue">遇到问题?</span>
                <span className="pwd-login">使用密码验证登录</span>
            </div>
            <div className="sub-wrap">
                <div className="submit">登录</div>
                <div className="other">其他登录方式</div>
                <div className="more">注册账号
                    <span className="icon"></span>
                </div>
            </div>
        </div>
        <div className="down"></div>
    </div>
</div>
</div>
        )
    }
}

export default connect(
)(Login)
