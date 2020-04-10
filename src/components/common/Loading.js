import React, {Component} from "react";
import "../movie/movieStyle.scss";
import {Spin} from "antd";

class Loading extends Component {
    render() {
        return <div className="example">
            <Spin />
        </div>
    }
}

export default Loading;
