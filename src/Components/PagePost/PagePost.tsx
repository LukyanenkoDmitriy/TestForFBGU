import { useEffect, useState } from 'react';
import {Link, useParams} from 'react-router-dom';

import style from './PostPage.module.scss'
import {TPost} from "../../types/Post.tsx";


const PagePost = () => {
    const { id } = useParams<{ id: string }>();
    const [post, setPost] = useState<TPost | null>(null);

    useEffect(() => {
        try {
            const fetchPost = async () => {
                const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
                const data = await response.json();
                setPost(data);
            };
            fetchPost();
        } catch (err) {
            console.log(err)
        }
    }, [id]);

    return (
        <div className={style.post}>
            <Link to="/">Назад</Link>
            {post ? (
                <div >
                    <h2>{post.id}: {post.title}</h2>
                    <p>{post.body}</p>
                </div>
            ) : <div>Loading...</div>}
        </div>
    );
};

export default PagePost;