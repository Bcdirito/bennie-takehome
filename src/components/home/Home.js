import React, { Component } from 'react'
import UserCard from './UserCard'
import NewUserForm from "./NewUserForm"
import '../../styling/home/Home.scss'
import objectHelpers from '../../utils/objectHelpers'
import apiCalls from '../../utils/apiCalls'

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
        const users = await apiCalls.getAll('users')
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
        const posts = await apiCalls.getAll('posts')

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
        const newUser = objectHelpers.emptyNewUser()

        this.setState({
            ...this.state,
            newUserData: newUser,
            showUserForm: !this.state.showUserForm
        }) 
    }

    confirmNewUser = () => {
        if (Object.keys(this.state.allUsers).length > 10) {
            const answer = window.confirm("Creating a new user will overwrite the previous user created, as per the limitations of the API. Do you want to continue?")
            if (answer === true) this.clickHandler()
        } else {
            this.clickHandler()
        }
    
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

        const data = await apiCalls.newUserRequest(this.state.newUserData)

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
            const emptyNewUser = objectHelpers.emptyNewUser()

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
                <button className="newUserButton" onClick={() => this.confirmNewUser()}>Create New User</button>
                {this.state.showUserForm? <NewUserForm changeHandler={(e) => this.updateNewUserData(e)} submitHandler={(e) => this.createNewUser(e)} hideForm={(e) => this.hideNewUserForm(e)} /> : null}
            </div>
        )
    }
}
