import React, {Component} from "react";
import { Button } from 'antd';
import { DoubleLeftOutlined} from '@ant-design/icons';

class MovieDeail extends Component{
    constructor(props) {
        super(props);
    }
    goBack = () => {
        this.props.history.goBack();
    }
    render() {
        return (
            <div>
                <Button type="primary" onClick={this.goBack}>
                    <DoubleLeftOutlined />返回
                </Button>
                <div>电影详情</div>
            </div>
        );
    }
}

export default MovieDeail;
