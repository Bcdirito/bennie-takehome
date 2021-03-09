import React, { Component } from 'react'
import ProfilePage from "./ProfilePage"

export default class Home extends Component {
    state = {
        allUsers: {},
        allPosts: [],
        selectedUser: {}
    }

    componentDidMount = async () => {
        const userObj =  await this.getAllUsers()
        const allPosts = await this.getAllPosts()
        this.connectUsersAndPosts(userObj, allPosts)
    }

    getAllUsers = async () => {
        const response = await fetch('https://jsonplaceholder.typicode.com/users')
        const users = await response.json()
        const mainUserObj = {}

        for (const user of users) {
            mainUserObj[user.id] = {
                data: user,
                posts: []
            }
        }
        
        return mainUserObj
    }

    getAllPosts = async () => {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts')
        const posts = await response.json()
        this.setState({
            ...this.state,
            allPosts: posts
        })

        return posts
    }

    connectUsersAndPosts = (users, allPosts) => {
        for (const p of allPosts) {
            const {posts} = users[p.userId]
            users[p.userId].posts = [...posts, p]
        }

        this.setState({
            ...this.state,
            allUsers: users
        })
    }

    generateListItemsMap = (users) => {
        const userNames = []
        for (const user in users) {
            const {data} = users[user]
            userNames.push(
                <li key={data.id} data-id={user} onClick={(e) => this.selectUserHandler(e)}>{data.name}</li>
            )
        }

        return userNames
    }

    selectUserHandler = (e) => {
        const selectedUser = this.state.allUsers[e.target.dataset.id]
        this.setState({
            ...this.state,
            selectedUser
        }, () => console.log(this.state.selectedUser))
    }
    
    render() {
        return (
            <div id="homepage">
                <h1>Brian DiRito Bennie Take Home</h1>
                {!this.state.selectedUser.data ? <ul>{this.generateListItemsMap(this.state.allUsers)}</ul> : <ProfilePage user={this.state.selectedUser}/>}
            </div>
        )
    }
}
