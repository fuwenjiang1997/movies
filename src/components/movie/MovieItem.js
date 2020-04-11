import React, {Component} from 'react';
import { Rate } from 'antd';
import "./movieStyle.scss";

class MovieItem extends Component{
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    static getDerivedStateFromProps(props, state) {
        return null;
    }

    render() {
        return(
            <div className="movie_content-item">
                <img src={this.props.images.small} className="movie_content-img" />
                <h4 className="movie_item-name">电影名称：{this.props.title}</h4>
                <h4>发行时间：{this.props.year}年</h4>
                <h4>电影类型：<span className="movie_item-type">{this.props.genres.join(',')}</span></h4>
                <Rate disabled defaultValue={this.props.rating.average / 2} />
            </div>
        );
    }
}

export default MovieItem;
