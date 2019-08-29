import React,{Component} from 'react'
import {withRouter} from 'react-router-dom'
import detailSty from './detail.module.scss'
class Detail extends Component {
    render() {
        console.log(this.props.match.params.id)
        return (
            <div className={detailSty.detailWrapper}>
                <div className={detailSty.header}>关于this.setState is not a function 的报错解决</div>
                <div className={detailSty.content}>
                    <img src="http://img1.xcarimg.com/b145/s11804/846_634_20190822210322231066890924880.jpg?v=1" />
                    <p>一打眼看真的没啥问题，没写成赋值的形式，也没多点啥，也没少点啥。
上网上一查，傻眼了。一定要注意this的作用域。
帮助解决的网站：# 倒计时功能，用setInterval设置每秒重设状态，报错this.setState is not a function</p>
                </div>
            </div>
        )
    }
}
export default withRouter(Detail)