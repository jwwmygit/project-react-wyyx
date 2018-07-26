import React, {Component} from 'react'
import {withRouter} from 'react-router-dom'
import './Footer.less'
 class Footer extends Component {

    render() {
        return (
            <nav id="footerContainer">
                <span className={`footer-guide ${this.props.location.pathname==='/home' ? 'on' : null}`} onClick={()=>{this.props.history.replace('/home')}}>
                    <p className={`home ${this.props.location.pathname==='/home' ? 'on' : null}`}  ></p>
                    <span>首页</span>
                </span>
                <span className={`footer-guide ${this.props.location.pathname==='/goods' ? 'on' : null}`} onClick={()=>{this.props.history.replace('/goods')}}>
                   <p className={`goods ${this.props.location.pathname==='/goods' ? 'on' : null}`} ></p>
                   <span>识物</span>
                </span>
                <span className={`footer-guide ${this.props.location.pathname==='/classification' ? 'on' : null}`} onClick={()=>{this.props.history.replace('/classification')}}>
                    <p className={`classification ${this.props.location.pathname==='/classification' ? 'on' : null}`}></p>
                    <span>分类</span>
                </span>
                <span className={`footer-guide ${this.props.location.pathname==='/cart' ? 'on' : null}`} onClick={()=>{this.props.history.replace('/cart')}}>
                    <p className={`cart ${this.props.location.pathname==='/cart' ? 'on' : null}`} ></p>
                    <span> 购物车</span>
                </span>
                <span className={`footer-guide ${this.props.location.pathname==='/personal' ? 'on' : null}`} onClick={()=>{this.props.history.replace('/personal')}}>
                    <p className={`personal ${this.props.location.pathname==='/personal' ? 'on' : null}`} ></p>
                    <span>个人</span>
                </span>
            </nav>
        )
    }
}
export default withRouter(Footer)
