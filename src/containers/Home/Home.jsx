import React, {Component} from 'react'
import HomeHeader from '../../components/Home/HomeHeader/HomeHeader'
import HomeSwiper from '../../components/Home/HomeSwiper/HomeSwiper'
import HomeBrand from '../../components/Home/HomeBrand/HomeBrand'
import HomeNewProduct from '../../components/Home/HomeNewProduct/HomeNewProduct'
import HomeRecommended from '../../components/Home/HomeRecommended/HomeRecommended'
import HomeTimelimit from '../../components/Home/HomeTimelimit/HomeTimelimit'
import HomeProjectScroll from '../../components/Home/HomeProjectScroll/HomeProjectScroll'
import LivingHome from '../../components/Home/LivingHome/LivingHome'
import HomeFooter from '../../components/Home/HomeFooter/HomeFooter'
import  './Home.less'
export default class Home extends Component {
    render() {
        return (
            <div className='Home'>
            <HomeHeader/>
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
