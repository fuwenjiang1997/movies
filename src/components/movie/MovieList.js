import React, {Component} from "react";
import Loading from '../common/Loading';
import InTheaters from '../test_data/in_theaters';
import ComingSoon from '../test_data/coming_soon';
import Top250 from '../test_data/top250';
import MovieItem from './MovieItem';
import './movieStyle.scss';
import {Pagination} from 'antd';

class MovieList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            movies: [],
            nowPage: parseInt(props.match.params.page) || 1,
            pageSize: 12,   // 每页数据
            total: 0,   // 当前电影分类下，总共的数据条数
            isLoading: true,
            movieType: window.location.pathname.split('/')[2] || 'in_theaters'
        }
    }

    componentDidMount() {
        this.GetMovies();
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.props.match.params.page !== prevProps.match.params.page) {
            this.setState({
                nowPage: this.props.match.params.page,
                isLoading: true
            }, function () {
                this.GetMovies()
            });
        }

        if (this.props.match.params.type !== prevProps.match.params.type) {
            this.setState({
                movieType: this.props.match.params.type,
                isLoading: true
            }, function () {
                this.GetMovies()
            });
        }
    }

    GetMovies = () => {
        // 两次请求，第一次是请求成功 Response对象，第二次才获取数据
        // fetch("").then((response) => {
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
            let type = InTheaters;
            console.log(this.state.movieType, 'coming_soon')
            if (this.state.movieType === 'coming_soon') {
                type = InTheaters
            }else if (this.state.movieType === 'coming_soon') {
                type = ComingSoon;
            } else if (this.state.movieType === 'top250') {
                type = Top250;
            }
            console.log(type)
            this.setState({
                movies: type.subjects,
                total: type.total,
                isLoading: false
            })
        }, 500)
    }

    componentWillUnmount() {
        this.setState = (state, callback) => {
            return;
        };

    }

    changePage = (page) => {
        let url = '/movie/' + this.state.movieType + '/' + page;
        this.props.history.push(url)
    }

    // Loading组件
    CompLoading() {
        if (this.state.isLoading) {
            return <Loading/>
        } else {
            return (
                <div className="movie_content-wrapper">
                    <div className="movie_content-layout">
                        {
                            this.state.movies.map((item) =>
                                <MovieItem {...item} history={this.props.history} key={item.id}></MovieItem>
                            )
                        }
                    </div>

                    <Pagination
                        defaultCurrent={this.state.nowPage}
                        total={this.state.total}
                        pageSize={this.state.pageSize}
                        onChange={this.changePage}
                    />
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
