//初始页面组件
import React,{Component} from 'react'
import {Route, Switch,NavLink} from 'react-router-dom'
import './InitLayer.less'

export default class InitLayer extends Component{
  render(){
    return (
        <div id="InterContainer">
          <div className="layer-top">
            <img src={require("./images/top1.jpg")} alt="" className="top1"/>
              <img src={require("./images/top2.jpg")} alt="" className="top2"/>
          </div>
          <div className="layer-bottom">
            <img src={require("./images/bottom.jpg")} alt="" className="bottom-img"/>

              <NavLink to="/home">
                <span className="go-main"></span>
              </NavLink>

          </div>
        </div>
    )
  }
}