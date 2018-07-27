import React, {Component} from 'react'
import './ClassificationRight.less'
import {connect} from 'react-redux'
import Proptypes from 'prop-types'

// import {} from '../../../redux/actions'
import Bsroll from 'better-scroll'

class ClassificationRight extends Component {
   static propTypes={
       index:Proptypes.number.isRequired,
       CategoryData:Proptypes.array.isRequired
   }
    componentDidMount() {
        // this.props.xxx()
console.log(this.props)

    }

    render() {
        const {index,CategoryData} = this.props
       console.log(CategoryData)
        return (
            <div className="right-wrap">
                <div className="header" v-if="categoryData[index]">
                    <img src={CategoryData[index] ? CategoryData[index].bannerUrl:null}  />
                </div>
                <div className="middle">
                    <span className="line"></span>
                    <span className="more">更多推荐</span>
                    <span className="line"></span>
                </div>
                <div className="bottom">
                    <ul className="list" >
                        {
                            CategoryData[index] ? (CategoryData[index].subCateList.map((msg,index)=>{
                                return(
                                    <li className="item"  key={index} >
                                        <img src={msg.wapBannerUrl} alt="" className="img"/>
                                        <div className="name">{msg.name}</div>
                                    </li>
                                )
                            })):null
                        }

                    </ul>
                </div>
            </div>
        )
    }
}

export default connect(
    /*state => ({xxx: state.xxx}),
    {xxx}*/
)(ClassificationRight)
