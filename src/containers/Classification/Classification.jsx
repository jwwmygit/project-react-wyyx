import React, {Component} from 'react'
import './Classification.less'
import ClassicationRight from '../../components/Classification/ClassificationRight'
import {connect} from 'react-redux'
import Bsroll from 'better-scroll'
import {getCategoryData} from '../../redux/actions'
class Classification extends Component {
    state = {
        index: 0
    };
    componentDidMount() {
        this.props.getCategoryData();
        new Bsroll('.left-wrap')
    }
       goIndex = (index) => {
          this.setState({
              index
          })
        console.log(this.state.index)
    };
    render() {
        const {CategoryData} = this.props
        return (
            <div>
                <div className="Classification1Wrap">
                    <div className="Classification1WrapHeader">
                        <div className="wrap-header">
                        <span className="search">
                        <img alt=""/>
                      </span>
                            <span className="title">搜索商品, 共9723款好物</span>
                        </div>
                    </div>
                </div>
                <div className="cate-nav">
                    <div className="left-wrap">
                        <ul className="list">
                            {
                                CategoryData.map((msg, index) => {
                                        return (
                                            <li className={`item ${this.state.index===index ? 'active' : ""}`
                                            } onClick={()=>{
                                                this.goIndex(index)}}
                                                key={index}>

                                               {msg.name}
                                            </li>
                                        )
                                    }
                                )
                            }

                        </ul>
                    </div>
                </div>
                <ClassicationRight index={this.state.index} CategoryData={this.props.CategoryData}/>
            </div>

        )
    }
}

export default connect(
    state => ({CategoryData: state.CategoryData}),
    {getCategoryData}
)(Classification)
