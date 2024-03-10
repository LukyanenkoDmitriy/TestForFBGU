import style from './Post.module.scss'
import {Link} from "react-router-dom";
import {TPost} from "../../types/Post.tsx";


type PropsPost ={
    post: TPost
}

const Post = ({ post }: PropsPost) => {

    return (
        <Link key={post.id} to={`/posts/${post.id}`}>
            <li className={style.post} >
                <p>{post.id}: <b>{post.title}</b></p>
                <p>{post.body}</p>
            </li>
        </Link>
    );
};

export default Post;