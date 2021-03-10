import {Link} from 'react-router-dom'
import postHelpers from "../../utils/postHelpers"
import "../../styling/home/UserCard.scss"

const UserCard = (props) => {
    const {user, posts} = props

    postHelpers.titleSort(posts)

    const renderPostTitles = (username, posts) => {
        return posts.map(post => {
            return <li key={`${username}-post${post.id}`} className="userCard-title">{postHelpers.titleize(post.title)}</li>
        })
    }

    return (
        <div className="userCard">
            <Link
                className="userCard-link"
                key={`link-${user.id}`} 
                to={{
                    pathname: `/users/${user.id}`,
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