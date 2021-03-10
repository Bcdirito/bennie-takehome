import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import {titleize} from "../utils/postFunctions"

export default class ProfilePage extends Component {
    state = {
        data: this.props.location.state.data,
        posts: this.props.location.state.posts
    }

    renderPosts = (posts) => {
        return posts.map((post) => {
            return <li key={post.id}>
                <h3>{titleize(post.title)}</h3>
                <p>{post.body}</p>
            </li>
        })
    }

    constructAddressString = (addressObj) => {
        const { street, suite, city, zipcode } = addressObj
        return `${street}, ${suite}, ${city} ${zipcode}`
    }

    websiteClickHandler = (e) => {
        e.preventDefault()
        alert("The following click handler would take to an outside website")
    }

    render() {
        const {data, posts} = this.state
        return (
            <div>
                <Link to="/">Go Home</Link>
                <section className="contactInfo">
                    <div>
                        <h2>{data.username}</h2>
                        <h3><span>{data.name}</span> - <a href={`mailto:${data.email}`}>{data.email.toLowerCase()}</a></h3>
                        <p>{this.constructAddressString(data.address)}</p>
                        <a href={`https://www.${data.website}`} onClick={(e) => this.websiteClickHandler(e)}>{data.website}</a> <a href={`tel:${data.phone}`}>{data.phone}</a>
                    </div>
                </section>
                <section className="userPosts">
                    <h2>{`${data.username}'s`} Posts</h2>
                    <ul>{this.renderPosts(posts)}</ul>
                </section>
            </div>
        )
    }
}
