import React,{Component} from 'react'
import Topic from './components/Topic'
import List from './components/List'
import Recommend from './components/Recommend'
import Writer from './components/Writer'
import homeSty from './home.module.scss'
class Home extends Component {
    constructor(props) {
        super(props) 
        this.state = {
            showBackTop : false
        }
        this.handleBackTop = this.handleBackTop.bind(this)
        this.handleScroll = this.handleScroll.bind(this)
    }
    render() {
        return (
            <div className = {homeSty.homeWrapper}>
                <div className={homeSty.homeLeft}>
                    <img alt='' className={homeSty.bannerImg} src='http://pic.xcarimg.com/2019/08/28/o_1djalulhk4eu1tcn6tu18jk105f0.jpg?imageMogr2/format/jpg/sizeLimit/100k!/ignore-error/1'></img>
                    <Topic></Topic>
                    <List></List>
                </div>   
                <div className={homeSty.homeRight}>
                    <Recommend></Recommend>
                    <Writer></Writer>
                </div> 
                {
                    this.state.showBackTop ? 
                    <div onClick={this.handleBackTop} className={homeSty.backTop}>回到顶部</div> 
                     : null      
                }  
                
            </div>
        )
    }
    componentDidMount() {
        window.addEventListener('scroll',this.handleScroll)
    }
    componentWillUnmount() {
        window.removeEventListener('scroll',this.handleScroll)
    }
    handleBackTop() {
        window.scrollTo(0,0)
    }
    handleScroll() {
        if(document.documentElement.scrollTop > 300) {
            this.setState({
                showBackTop:true
            })
        }
        else {
            this.setState({
                showBackTop:false
            })
        }
    }
    
}
export default Home