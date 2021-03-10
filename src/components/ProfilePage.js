import {Link} from 'react-router-dom'
import postFunctions from "../utils/postFunctions"

const ProfilePage = (props) => {
    const {data, posts} = props.location.state
    postFunctions.titleSort(posts)

    const renderPosts = (posts) => {
        return posts.map((post) => {
            return <li key={post.id}>
                <h3>{postFunctions.titleize(post.title)}</h3>
                <p>{post.body}</p>
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
        <div>
            <Link to="/">Go Home</Link>
            <section className="contactInfo">
                <div>
                    <h2>{data.username}</h2>
                    <h3><span>{data.name}</span> - <a href={`mailto:${data.email}`}>{data.email.toLowerCase()}</a></h3>
                    <p>{constructAddressString(data.address)}</p>
                    <a href={`https://www.${data.website}`} onClick={(e) => websiteClickHandler(e)}>{data.website}</a> <a href={`tel:${data.phone}`}>{data.phone}</a>
                </div>
            </section>
            <section className="userPosts">
                <h2>{`${data.username}'s`} Posts</h2>
                <ul>{renderPosts(posts)}</ul>
            </section>
        </div>
    )
}

export default ProfilePage
