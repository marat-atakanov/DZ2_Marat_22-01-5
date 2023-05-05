import {useEffect, useState} from "react";
import Post from "../components/Post";

export default function PostsPage() {
    const [data, setData] = useState([]);


    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/photos ")
            .then(resp => resp.json())
            .then(resp => setData(resp))
    }, [])


    return (
        <>
            {
                data.map((post) => {
                    if (post.albumId < 2) {
                        return (
                            <ul key={post.id} style={{listStyleType: "none"}}>
                                <li>
                                    <Post post={post}/>
                                </li>
                            </ul>
                        )
                    }
                })
            }
        </>
    )
}