import React, { Component } from 'react'
import {Link} from 'react-router-dom'

export default class ProfilePage extends Component {
    state = {
        data: {},
        posts: []
    }

    componentDidMount = () => {
        const {data, posts} = this.props.location.state
        this.setState({ 
            ...this.state,
            data,
            posts
        })
    }

    render() {
        const {data, posts} = this.state
        return (
            <div>
                <Link to="/">Go Home</Link>
                <section>
                    <h2>{data.username}</h2>
                    <h3>{data.name}</h3>
                </section>
                <ul>USER POSTS</ul>
            </div>
        )
    }
}
