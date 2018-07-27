import React, {Component} from 'react'
import './HomeFooter.less'

export default class HomeFooter extends Component {
    render() {
        return (
            <div className="HomeFooter">
                <div className="HomeFooterWrap">
                    <div className="button">
                        <div>下载APP</div>
                        <div>电脑版</div>
                    </div>
                    <p className="text">网易公司版权所有 © 1997-2018</p>
                    <p className="text">食品经营许可证：JY13301080111719</p>
                </div>

            </div>
        )
    }
}
