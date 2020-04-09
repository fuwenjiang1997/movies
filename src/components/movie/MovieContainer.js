import React, { Component } from "react";
import {Layout, Menu, Breadcrumb} from "antd";

const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;

class MovieContainer extends Component{
    render() {
        return (
            <Layout style={{height: '100%'}}>
                <Sider width={200} style={{height: '100%'}} className="site-layout-background">
                    <Menu
                        mode="inline"
                        defaultSelectedKeys={['1']}
                        defaultOpenKeys={['sub1']}
                        style={{ height: '100%', borderRight: 0 }}
                    >
                        <Menu.Item key="1">正在热映</Menu.Item>
                        <Menu.Item key="2">正在上映</Menu.Item>
                        <Menu.Item key="3">top100</Menu.Item>
                    </Menu>
                </Sider>
                {/*内容区域*/}
                <Layout style={{ padding: '0 24px 24px', height: '100%' }}>
                    <Content
                        className="site-layout-background"
                        style={{
                            padding: 24,
                            margin: 0,
                            minHeight: 280,
                        }}
                    >
                        Content
                    </Content>
                </Layout>
            </Layout>
        );
    }
}

export default MovieContainer;
