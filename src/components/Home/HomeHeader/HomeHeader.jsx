import React, {Component} from 'react'
import {getHomeHeader} from '../../../redux/actions'
import {connect} from 'react-redux';
import Bsroll from 'better-scroll'
import {Switch,Route,Redirect,withRouter}from 'react-router-dom'
import './HomeHeader.less'
 class HomeHeader extends Component {

    componentDidMount(){
        this.props.getHomeHeader();
        new Bsroll('.scroll-container',{
            probeType: 2,  // 因为惯性滑动不会触发
            click: true,   //默认是禁止点击的
            scrollX: true,
            scrollY:false
        })
    }
     goPath=(index)=>{
        // console.log(index);

         this.props.history.replace(`/home/homedetail/${index}`)
     };
     top=()=>{

         this.props.history.replace(`/home/homemain`)
     }
    render() {
        const {headcates}=this.props
        return (
            <div className="HomeHeader">
                <div className="logo-header">
                    <a className="yx-img">
                        <img src="./images/logo.png" alt="" className="logo-yx"/>
                    </a>
                    <div  className="searchDiv">
                          <span className="search">
                            <img src="./images/search.png" alt="" className="img"/>
                          </span>
                        <span className="search-text">搜索商品，共10730款好物</span>
                    </div>
                </div>
                <header className="scroll">
                    <div className="scroll-container">
                        <div className="list">
                            <div className={`tab ${this.props.location.pathname==='/home/homemain' ? "on" :""}`} onClick={this.top}>
                                <span className="txt"  >推荐</span>
                            </div>
                            {
                                headcates.map((msg,index)=>{
                                return(
                                <div className={`tab ${this.props.location.pathname==='/home/homedetail/'+index?'on':''}`} key={index}
                                onClick={()=>this.goPath(index)}
                                >
                                <span className="txt" >{msg.name}</span>
                                </div>
                                )
                            })
                            }

                        </div>
                    </div>

                </header>
            </div>
        )
    }
}
export default connect(
    state=>({headcates:state.headcates}),
    {getHomeHeader}
)(withRouter(HomeHeader))