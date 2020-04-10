import React, {Component} from "react";
import {Layout, Menu} from "antd";
import {
    BrowserRouter as Router,
    Route,
    Link
} from "react-router-dom";
import MovieList from './MovieList';

const {Content, Sider} = Layout;

class MovieContainer extends Component {
    render() {
        return (
            <Router>
                <Layout style={{height: '100%'}}>
                    <Sider width={200} style={{height: '100%'}} className="site-layout-background">
                        <Menu
                            mode="inline"
                            defaultSelectedKeys={['1']}
                            defaultOpenKeys={['sub1']}
                            style={{height: '100%', borderRight: 0}}
                        >
                            <Menu.Item key="1"><Link to="/movie/in_theaters/1">正在热映</Link></Menu.Item>
                            <Menu.Item key="2"><Link to="/movie/coming_soon/1">即将上映</Link></Menu.Item>
                            <Menu.Item key="3"><Link to="/movie/top250/1">top100</Link></Menu.Item>
                        </Menu>
                    </Sider>
                    {/*内容区域*/}
                    <Layout style={{padding: '0 24px 24px', height: '100%'}}>
                        <Content
                            className="site-layout-background"
                            style={{
                                padding: 24,
                                margin: 0,
                                minHeight: 280,
                            }}
                        >
                            <Route path="/movie/:type/:page" component={MovieList}></Route>
                        </Content>
                    </Layout>
                </Layout>
            </Router>
        );
    }
}

export default MovieContainer;
