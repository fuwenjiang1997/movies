import React, {Component} from "react";
import movieStyle from "../movie/movieStyle.module.scss";
import {Spin} from "antd";

class Loading extends Component {
    render() {
        return <div className={movieStyle.example}>
            <Spin />
        </div>
    }
}

export default Loading;
