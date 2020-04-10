import React, { Component } from "react";
import Loading from '../common/Loading';

class MovieList extends Component{
    constructor(props) {
        super(props);
        this.state = {
            movies: [],
            nowPage: parseInt(props.match.params.page) || 1,
            pageSize: 14,   // 每页数据
            total: 0,   // 当前电影分类下，总共的数据条数
            isLoading: true
        }
    }

    // static getDerivedStateFromProps(nextProps, prevState) {
    //     return null
    // }

    componentDidMount() {
        this.GetMovies();
    }

    GetMovies() {
        // 两次请求，第一次是请求成功 Response对象，第二次才获取数据
        fetch("http://selladmin.bfclouds.cn/seller.php?id=1").then((response) => {
            return response.json()
        }).then(res => {
            this.setState({
                movies: res.data.name,
                isLoading: false
            })
        }).catch(res => {
            this.setState({
                isLoading: false
            })
        })
    }

    // Loading组件
    CompLoading() {
        console.log(this.state.isLoading)
        if (this.state.isLoading) {
            console.log('加载中')
            return <Loading />
        } else {
            return null;
        }
    }

    render() {
        return (
            <div>
                {this.CompLoading()}
            </div>
        );
    }
}

export default MovieList;
