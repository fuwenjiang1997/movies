import React, {Component} from "react";
import {Layout, Menu} from "antd";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import MovieList from './MovieList';
import MovieDetail from './MovieDeail';

const {Content, Sider} = Layout;

class MovieContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            movieType: window.location.pathname.split('/')[2]
        }
    }

    render() {
        return (
            <Router>
                <Layout style={{height: '100%'}}>
                    <Sider width={200} style={{height: '100%'}} className="site-layout-background">
                        <Menu
                            mode="inline"
                            defaultSelectedKeys={this.state.movieType}
                            defaultOpenKeys={['sub1']}
                            style={{height: '100%', borderRight: 0}}
                        >
                            <Menu.Item key="in_theaters"><Link to="/movie/in_theaters/1">正在热映</Link></Menu.Item>
                            <Menu.Item key="coming_soon"><Link to="/movie/coming_soon/1">即将上映</Link></Menu.Item>
                            <Menu.Item key="top250"><Link to="/movie/top250/1">top100</Link></Menu.Item>
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
                            <Switch>
                                <Route exact path="/movie/detail/:id" component={MovieDetail}></Route>
                                <Route path="/movie/:type/:page" component={MovieList}></Route>
                            </Switch>
                        </Content>
                    </Layout>
                </Layout>
            </Router>
        );
    }
}

export default MovieContainer;
