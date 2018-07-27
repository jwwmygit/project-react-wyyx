import React, {Component} from 'react'
import HomeHeader from '../../components/Home/HomeHeader/HomeHeader'
import {NavLink,Switch,Route,Redirect} from 'react-router-dom'
import HomeChildrenDetail from './HomeChildrenDetail/HomeChildrenDetail'
import HomeMain from './HomeMain/HomeMain'

import  './Home.less'
export default class Home extends Component {
    render() {
        return (
            <div className='Home'>
                <HomeHeader/>
                <Switch>
                    <Route path='/home/homedetail/:id' component={HomeChildrenDetail}/>
                    <Route path='/home/homemain' component={HomeMain}/>
                    <Redirect to='/home/homemain'/>
                </Switch>
            </div>
        )
    }
}
