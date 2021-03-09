import React, { Component } from 'react'

export default class ProfilePage extends Component {
    state = {
        data: this.props.user.data,
        posts: this.props.user.posts
    }

    

    render() {
        const {data, posts} = this.state
        return (
            <div>
                <h2>{data.username}</h2>
                <h3>{data.name}</h3>
                <ul>USER POSTS</ul>
            </div>
        )
    }
}
