import {Link, Redirect} from 'react-router-dom'
import postFunctions from "../../utils/postFunctions"
import backArrow from "../../assets/backArrow.svg"
import "../../styling/profile/ProfilePage.scss"

const ProfilePage = (props) => {
    try {
        window.scrollTo(0, 0)
        const {data, posts} = props.location.state
        postFunctions.titleSort(posts)

        const renderPosts = (posts) => {
            return posts.map((post) => {
                return <li key={post.id} className="post">
                    <h3 className="post-title">{postFunctions.titleize(post.title)}</h3>
                    <p className="post-body">{post.body}</p>
                </li>
            })
        }

        const constructAddressString = (addressObj) => {
            const { street, suite, city, zipcode } = addressObj
            return `${street}, ${suite}, ${city} ${zipcode}`
        }

        const websiteClickHandler = (e) => {
            e.preventDefault()
            alert("The following click handler would take to an outside website. Since this API uses mock data, this feature is currently disabled")
        }

        return (
            <div id="profilePage">
                <section className="contactInfo">
                    <Link to="/"><img src={backArrow} alt="Back To Homepage" id="backArrow" /></Link>
                    <h2>{data.username}</h2>
                    <div className="nameAddress">
                        <h3>{data.name}</h3>
                        <a href={`mailto:${data.email}`}>{data.email.toLowerCase()}</a>
                        <span>{constructAddressString(data.address)}</span>
                        <a href={`https://www.${data.website}`} onClick={(e) => websiteClickHandler(e)}>{data.website}</a> <a href={`tel:${data.phone}`}>{data.phone}</a>
                    </div>
                </section>
                <section className="userPosts">
                    <h2>{`${data.username}'s`} Posts</h2>
                    <ul className="postContainer">{renderPosts(posts)}</ul>
                </section>
            </div>
        )
    } catch {
        return <Redirect from="users/:id" to="/" />
    }
}

export default ProfilePage
