import React, {Component} from 'react';
import {
    BrowserRouter as Router,
    Route,
    Link
} from "react-router-dom";
import './App.css';
import styles from './app.module.scss';
import {Layout, Menu} from 'antd';

import HomeContainer from "./components/home/HomeContainer";
import MovieContainer from "./components/movie/MovieContainer";
import AboutContainer from "./components/about/AboutContainer";

const {Header, Content, Footer} = Layout;

class App extends Component {
    constructor() {
        super();
        this.state = {
            urlHash: 'home'
        }
    }

    static getDerivedStateFromProps(nextProps, prevState) {
        let pathName = window.location.pathname.split('/')[1];
        return {urlHash: pathName ? pathName : 'home'}
        // console.log(prevState)
    }

    render() {
        return (
            <Router>
                <Layout className="layout" style={{height: '100%'}}>
                    <Header>
                        <div className={styles.logo}/>
                        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={this.state.urlHash}>
                            <Menu.Item key="home"><Link to='/home'>首页</Link></Menu.Item>
                            <Menu.Item key="movie"><Link to='/movie/in_theaters/1'>电影</Link></Menu.Item>
                            <Menu.Item key="about"><Link to='/about'>关于</Link></Menu.Item>
                        </Menu>
                    </Header>
                    <Content style={{background: '#fff'}}>
                        <div className="site-layout-content" style={{height: '100%'}}>
                            <Route exact path="/">
                                <HomeContainer />
                            </Route>
                            <Route path='/home' component={HomeContainer} />
                            <Route path='/movie' component={MovieContainer} />
                            <Route path='/about' component={AboutContainer} />
                        </div>
                    </Content>
                    <Footer style={{textAlign: 'center'}}>Copyright © 2020 bfclouds.cn 京ICP备 19059906号-1</Footer>
                </Layout>
            </Router>
        );
    }
}

export default App;
