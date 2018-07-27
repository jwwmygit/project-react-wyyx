import React,{Component} from 'react'
import '../../assets/less/mixins.less'
import './App.less'
import {Route,Switch} from 'react-router-dom'
import Home from '../Home/Home'
import Personal from '../Personal/Personal'
import InitLayer from '../InitLayer/InitLayer'
import Classification from '../Classification/Classification'
import Goods from '../Goods/Goods'
import Cart from '../Cart/Cart'
import Footer from '../../components/Footer/Footer'

export default class App extends Component{
    render(){
        return(
            <div>
                <Switch>
                 <Route path='/home' component={Home}></Route>
                 <Route path='/personal' component={Personal}></Route>
                 <Route path='/initLayer' component={InitLayer}></Route>
                 <Route path='/goods' component={Goods}></Route>
                 <Route path='/classification' component={Classification}></Route>
                 <Route path='/cart' component={Cart}></Route>
                 <Route path='/' component={Home}></Route>
                </Switch>
                <Footer/>
            </div>

        )
    }
}