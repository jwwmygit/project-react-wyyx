import React, {Component} from 'react'
import {connect}from 'react-redux'
import {getCateList} from '../../../redux/actions'
import './LivingHome.less'
 class LivingHome extends Component {
    componentDidMount(){
        this.props.getCateList()
    }
    render() {
        const {cateList}=this.props
        return (
            <div className="footer-wrap">
                {
                    cateList.map((msg,index)=>{
                        return(
                            <div className="LivingHome" key={index}>
                                <div className="LivingHomeHeader" >
                                    <p >{msg.name}</p>
                                </div>
                                <div className="LivingContent">
                                    <ul className="list">
                                        {
                                            msg.itemList.map((item,i)=>{
                                                return(
                                                    <li className="item" key={i}>
                                                        <div className="img">
                                                            <img src={item.listPicUrl} alt=""/>
                                                        </div>
                                                        <div className="title">{item.simpleDesc}</div>
                                                        <p className="name-shop">{item.name}</p>
                                                        <p className="price">￥{item.retailPrice}</p>
                                                    </li>
                                                )
                                            })
                                        }

                                        <li className="item">
                                            <h5>更多好物</h5>
                                            <span className="right"></span>
                                        </li>

                                    </ul>
                                </div>
                            </div>
                        )
                    })
                }

            </div>
        )
    }
}
export default connect(
    state=>({cateList:state.cateList}),
    {getCateList}
)(LivingHome)
