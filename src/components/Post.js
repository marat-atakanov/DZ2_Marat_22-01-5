import {Link} from "react-router-dom";

export default function Post(post) {

    return (
        <>
            <Link style={{color: "black"}} to={`/posts/${post.post.id}`}>
                <p>{post.post.id}. {post.post.title}</p>
                <img src={post.post.thumbnailUrl} alt="link"/>
            </Link>
        </>
    )
}