import {Link} from 'react-router-dom'
import {titleize} from "../utils/postFunctions"

const UserCard = (props) => {
    const {user, posts} = props

    const renderPostTitles = (posts) => {
        return posts.map(post => {
            return <li>{titleize(post.title)}</li>
        })
    }
    return (
        <div>
            <Link 
                key={user.id} 
                to={{
                    pathname: `/users/${user.id}`,
                    state: {
                        data: user,
                        posts: posts
                    }
                }}
            >{user.name}</Link>
            <ul>{renderPostTitles(posts)}</ul>
        </div>
    )
}

export default UserCard