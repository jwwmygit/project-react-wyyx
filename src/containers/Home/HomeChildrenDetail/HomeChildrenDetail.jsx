import React, {Component} from 'react'
import './HomeChildrenDetail.less'
import {connect} from 'react-redux'
 import {getCateList} from '../../../redux/actions'
import Bsroll from 'better-scroll'

class HomeChildrenDetail extends Component {
    componentDidMount() {
         this.props.getCateList()

    }

    render() {
        const {cateList} = this.props;
        const index=this.props.match.params.id;
        console.log(index)
        return (

                 <div className="home_list" v-if="tcateList[index]">
                    <div className="banner">
                        <img src={cateList[index] ? cateList[index].bannerUrl : null} alt=""/>
                    </div>
                    <div className="indexFloor" >
                        <h3>{cateList[index] ? cateList[index].name : null}</h3>
                        <div className="goodGrid">
                            {
                                cateList[index] ? <ul className="list">
                                        {
                                            cateList[index].itemList.map((good,index)=>{
                                               return(
                                                   <li  key={index}>
                                                       <img src={good.listPicUrl} alt=""/>
                                                       <span className="desc">{good.simpleDesc}</span>
                                                       <div>风格特惠</div>
                                                       <span className="good">{good.name}</span>
                                                       <span className="price">￥{good.retailPrice}</span>
                                                   </li>
                                               )
                                            })
                                        }

                                </ul> : null
                            }
                            <ul className="list">
                                <li v-for="(good,index) in tcateList[index].itemList" key="index">
                                    <img src="good.listPicUrl" alt=""/>
                                    <span className="desc">good.simpleDesc</span>
                                    <div>风格特惠</div>
                                    <span className="good">good.name</span>
                                    <span className="price">￥good.retailPrice</span>
                                </li>
                            </ul>

                        </div>


                    </div>

                </div>


        )
    }
}

export default connect(
    state => ({cateList: state.cateList}),
    {getCateList}
)(HomeChildrenDetail)
