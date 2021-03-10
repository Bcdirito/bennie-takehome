import React, { Component } from 'react'
import UserCard from './UserCard'
import NewUserForm from "./NewUserForm"
import '../../styling/home/Home.scss'

export default class Home extends Component {
    state = {
        allUsers: {},
        allPosts: [],
        newUserData: {},
        showUserForm: false
    }

    componentDidMount = async () => {
        if (window.sessionStorage.getItem("allUsers")) {
            const allUsers = JSON.parse(window.sessionStorage.getItem("allUsers"))
            this.restoreUsersAndPosts(allUsers)
        } else {
            const userObj =  await this.getAllUsers()
            const allPosts = await this.getAllPosts()
            this.connectUsersAndPosts(userObj, allPosts)
        }
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
        }, () => {window.sessionStorage.setItem('allUsers', JSON.stringify(this.state.allUsers)) })
    }

    restoreUsersAndPosts = (users) => {
        const allPosts = []

        for (const id in users) {
            const {posts} = users[id]
            allPosts.push(...posts)
        }

        this.setState({
            ...this.state,
            allUsers: users,
            allPosts: allPosts
        })
    }

    generateUserCards = (users) => {
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
        })
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
        if (e.target.dataset.obj === "standard") {
            this.setState({
                ...this.state,
                newUserData: {
                    ...this.state.newUserData,
                    [e.target.name]: e.target.value
                }
            })
        } else {
            this.setState({
                ...this.state,
                newUserData: {
                    ...this.state.newUserData,
                    address: {
                        ...this.state.newUserData.address,
                        [e.target.name]: e.target.value
                    }
                }
            })
        }
    }

    createNewUser = async (e) => {
        e.target.reportValidity()
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

        if (data.username && data.id) {
            const { allUsers } = this.state
            allUsers[data.id] = {
                data,
                posts: []
            }

            this.setState({
                ...this.state,
                allUsers: allUsers,
                newUserData: {},
                showUserForm: !this.state.showUserForm
            }, () => { window.sessionStorage.setItem('allUsers', JSON.stringify(this.state.allUsers)) })
        } else {
            alert("Uh Oh! Something went wrong! Please make sure all fields properly filled out.")
            const emptyNewUser = {
                name: "",
                username: "",
                email: "",
                address: "",
                website: "",
                phone: ""
            }
            this.setState({
                ...this.state,
                newUserData: emptyNewUser
            })
        }
    }

    hideNewUserForm = (e) => {
        if (e.target.id === "formContainer" || e.target.id === "backArrow") this.clickHandler()
    }
    
    render() {
        return (
            <div id="homepage">
                <ul id="userCardContainer">{this.generateUserCards(this.state.allUsers)}</ul>
                <button className="newUserButton" onClick={(e) => this.clickHandler(e)}>Create New User</button>
                {this.state.showUserForm? <NewUserForm changeHandler={(e) => this.updateNewUserData(e)} submitHandler={(e) => this.createNewUser(e)} hideForm={(e) => this.hideNewUserForm(e)} /> : null}
            </div>
        )
    }
}
