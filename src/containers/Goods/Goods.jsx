import React, {Component} from 'react'
import GoodsHeader from '../../components/Goods/GoodsHeader/GoodsHeader'
import GoodsSwiper from '../../components/Goods/GoodsSwiper/GoodsSwiper'

class Goods extends Component {
    render() {
        return (
            <div>
                <GoodsHeader/>
                <GoodsSwiper/>
            </div>
        )
    }
}

export default Goods