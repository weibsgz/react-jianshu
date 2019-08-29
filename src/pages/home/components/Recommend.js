import React,{Component} from 'react'
import homeSty from '../home.module.scss'
class Recommend extends Component {
    render() {
        return (
            <div className={homeSty.recommendWrapper}>
               <div className={homeSty.recommendItem}></div>
               <div className={homeSty.recommendItem}></div>
               <div className={homeSty.recommendItem}></div>
               <div className={homeSty.recommendItem}></div>
            </div>
        )
    }
}
export default Recommend