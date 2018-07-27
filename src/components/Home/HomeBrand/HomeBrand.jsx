import React, {Component} from 'react'
import pic from './images/right.png'
import './HomeBrand.less'
import {connect} from 'react-redux'
import {getTagList}from '../../../redux/actions'
   class HomeBrand extends Component {
    componentDidMount(){
        this.props.getTagList()
    }
    render() {
       const {tagList}=this.props;
        let newTagList=tagList.filter((msg,index)=>{
            return (
                index<4
            )
        })
        // console.log(newTagList)
        return (
            <div className="BrandContainer">
                <header className="server">
                    <a href="javascript:;">
                        <span className="text">品牌制造商直供</span>
                    </a>
                    <a className="icon">
                        <img src={pic} alt=""/>
                    </a>
                </header>
                <header className="brand-shop-list">
                    <ul className="list">
                        {
                            newTagList.map((msg,index)=>{
                                return(
                                    <li className="container" key={index}>
                                        <div className="content">
                                            <h4>{msg.name}</h4>
                                            <h5>{msg.floorPrice}元起</h5>
                                        </div>
                                        <img src={msg.picUrl} alt=""/>
                                    </li>
                                )
                            })
                        }

                </ul>
            </header>
    </div>
        )
      }
   }
  export default connect(
      state=>({tagList:state.tagList}),
      {getTagList}
  )(HomeBrand )