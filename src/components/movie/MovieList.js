import React, { Component } from "react";
import Loading from '../common/Loading';
import InTheaters from '../test_data/in_theaters';
import MovieItem from './MovieItem';
import './movieStyle.scss';

class MovieList extends Component{
    constructor(props) {
        super(props);
        this.state = {
            movies: [],
            nowPage: parseInt(props.match.params.page) || 1,
            pageSize: 12,   // 每页数据
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
        // fetch("http://selladmin.bfclouds.cn/seller.php?id=1").then((response) => {
        //     return response.json()
        // }).then(res => {
        //     this.setState({
        //         movies: res.data.name,
        //         isLoading: false
        //     })
        // }).catch(res => {
        //     this.setState({
        //         isLoading: false
        //     })
        // })
        setTimeout(() => {
            this.setState({
                movies: InTheaters.subjects,
                total: InTheaters.total,
                isLoading: false
            })
        }, 1000)
    }

    // Loading组件
    CompLoading() {
        if (this.state.isLoading) {
            return <Loading />
        } else {
            return (
              <div className="movie_content-layout">
                  {
                      this.state.movies.map((item) =>
                          <MovieItem {...item} key={item.id}></MovieItem>
                      )
                  }
              </div>
            );
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
