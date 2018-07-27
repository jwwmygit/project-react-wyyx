import React, {Component} from 'react'
import {connect} from 'react-redux'
import Bsroll from 'better-scroll'
import HomeSwiper from '../../../components/Home/HomeSwiper/HomeSwiper'
import HomeBrand from '../../../components/Home/HomeBrand/HomeBrand'
import HomeNewProduct from '../../../components/Home/HomeNewProduct/HomeNewProduct'
import HomeRecommended from '../../../components/Home/HomeRecommended/HomeRecommended'
import HomeTimelimit from '../../../components/Home/HomeTimelimit/HomeTimelimit'
import HomeProjectScroll from '../../../components/Home/HomeProjectScroll/HomeProjectScroll'
import LivingHome from '../../../components/Home/LivingHome/LivingHome'
import HomeFooter from '../../../components/Home/HomeFooter/HomeFooter'

class HomeMain extends Component {
    componentDidMount() {

    }
    render() {
        return (
            <div>
                111111111
                <HomeSwiper/>
                <HomeBrand/>
                <HomeNewProduct/>
                <HomeRecommended/>
                <HomeTimelimit/>
                <HomeProjectScroll/>
                <LivingHome/>
                <HomeFooter/>
            </div>
        )
    }
}

export default connect(

)(HomeMain)
