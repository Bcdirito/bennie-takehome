import React, { Component } from 'react'
import UserCard from './UserCard'
import NewUserForm from "./NewUserForm"

export default class Home extends Component {
    state = {
        allUsers: {},
        allPosts: [],
        newUserData: {},
        showUserForm: false
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
            const {data, posts} = users[user]
            userNames.push(
                <UserCard key={`card-${data.id}`} user={data} posts={posts}/>
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

    clickHandler = () => {
        const newUser = {
            name: "",
            username: "",
            email: "",
            address: "",
            website: "",
            phone: ""
        }

        this.setState({
            ...this.state,
            newUserData: newUser,
            showUserForm: !this.state.showUserForm
        })
    }

    updateNewUserData = (e) => {
        this.setState({
            ...this.state,
            newUserData: {
                [e.target.name]: e.target.value
            }
        })
    }

    createNewUser = async (e) => {
        e.preventDefault()
        const headerData = {
            method: "POST",
            body: JSON.stringify(this.state.newUserData),
            headers: {
                'Content-type': 'application/json; charset=UTF-8'
            }
        }
        const response = await fetch('https://jsonplaceholder.typicode.com/users', headerData)
        const data = await response.json()
        const {allUsers} = this.state
        allUsers[data.id] = {
            data,
            posts: []
        }

        this.setState({
            ...this.state,
            allUsers: allUsers,
            newUserData: {},
            showUserForm: !this.state.showUserForm
        })

        
    }
    
    render() {
        return (
            <div id="homepage">
                <h1>Brian DiRito Bennie Take Home</h1>
                <ul id="">{this.generateListItemsMap(this.state.allUsers)}</ul>
                <button className="newUserButton" onClick={() => this.clickHandler()}>Create New User</button>
                {this.state.showUserForm? <NewUserForm changeHandler={(e) => this.updateNewUserData(e)} submitHandler={(e) => this.createNewUser(e)} /> : null}
            </div>
        )
    }
}
