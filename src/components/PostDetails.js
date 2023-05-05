import {useEffect, useState} from "react";
import {useNavigate, useParams} from "react-router-dom";

export default function PostDetails() {
    const [post, setPost] = useState({})

    const navigate = useNavigate();
    function goBack() {
        navigate(-1);
    }

    const {id} = useParams()
    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/photos/${id}`)
            .then(resp => resp.json())
            .then(resp => setPost(resp))
    }, [])
    return (
        <>
            <img src={post.url} alt=""/>
            <p>
                {post.title}
            </p>
            <button onClick={goBack}>go back</button>
        </>
    )
}