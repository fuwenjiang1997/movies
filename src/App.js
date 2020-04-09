import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import './App.css';
import styles from './app.module.scss';
import {Layout, Menu, Breadcrumb} from 'antd';

import HomeContainer from "./components/home/HomeContainer";
import MovieContainer from "./components/movie/MovieContainer";
import AboutContainer from "./components/about/AboutContainer";

const {Header, Content, Footer} = Layout;

function App() {
    return (
        <Router>
            <Layout className="layout" style={{height: '100%'}}>
                <Header>
                    <div className={styles.logo}/>
                    <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']}>
                        <Menu.Item key="1"><Link to='/home'>首页</Link></Menu.Item>
                        <Menu.Item key="2"><Link to='/movie'>电影</Link></Menu.Item>
                        <Menu.Item key="3"><Link to='/about'>关于</Link></Menu.Item>
                    </Menu>
                </Header>
                <Content style={{background: '#fff'}}>
                    <div className="site-layout-content">
                        <Route  />
                    </div>
                </Content>
                <Footer style={{textAlign: 'center'}}>Copyright © 2020 bfclouds.cn 京ICP备 19059906号-1</Footer>
            </Layout>
        </Router>
    );
}

export default App;
