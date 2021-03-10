import {Link} from 'react-router-dom'
import {titleize} from "../utils/postFunctions"
import "../styling/UserCard.scss"

const UserCard = (props) => {
    const {user, posts} = props

    const renderPostTitles = (username, posts) => {
        return posts.map(post => {
            return <li key={`${username}-post${post.id}`} className="userCard-title">{titleize(post.title)}</li>
        })
    }

    return (
        <div className="userCard">
            <Link
                className="userCard-link"
                key={`link-${user.id}`} 
                to={{
                    pathname: `${posts.length > 0 ? `/users/${user.id}` : '/'}`,
                    state: {
                        data: user,
                        posts: posts
                    }
                }}
            >{user.username}</Link>
            <ul>{renderPostTitles(user.username, posts)}</ul>
        </div>
    )
}

export default UserCard