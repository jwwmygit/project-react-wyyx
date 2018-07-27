import React, {Component} from 'react'
import GoodsHeader from '../../components/Goods/GoodsHeader/GoodsHeader'
import GoodsSwiper from '../../components/Goods/GoodsSwiper/GoodsSwiper'
import GoodsRecommendedScroll from '../../components/Goods/GoodsRecommendedScroll/GoodsRecommendedScroll'
import GoodsPick from '../../components/Goods/GoodsPick/GoodsPick'
import GoodsTenClock from '../../components/Goods/GoodsTenClock/GoodsTenClock'
import GoodsTreasures from '../../components/Goods/GoodsTreasures/GoodsTreasures'
import GoodsLook from '../../components/Goods/GoodsLook/GoodsLook'
import GoodsWonderful from '../../components/Goods/GoodsWonderful/GoodsWonderful'
import './Goods.less'
class Goods extends Component {
    render() {
        return (
            <div className="Goods">
                <GoodsHeader/>
                <GoodsSwiper/>
                <GoodsRecommendedScroll/>
                <GoodsPick/>
                <GoodsTenClock/>
                <GoodsTreasures/>
                <GoodsLook/>
                <GoodsWonderful/>
            </div>
        )
    }
}

export default Goods