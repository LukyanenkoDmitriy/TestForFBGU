import React, { useEffect, useState } from 'react';

import style from './PostList.module.scss';
import { calculatePagination, generatePageNumbers } from "../../utils/pagination";
import {TPost} from "../../types/Post.tsx";
import Post from "../Post/Post.tsx";


const PostsList: React.FC = () => {
    const [posts, setPosts] = useState<TPost[]>([]);
    const [currentPage, setCurrentPage] = useState<number>(1);

    const { startIndex, endIndex } = calculatePagination(currentPage);
    const postsForCurrentPage = posts.slice(startIndex, endIndex);
    const pageNumbers = generatePageNumbers(100, 10);

    useEffect(() => {
        try {
            const getPosts = async () => {
                const response = await fetch('https://jsonplaceholder.typicode.com/posts');
                const data = await response.json();
                setPosts(data);
            };
            getPosts();
        } catch (err){
            console.log(err)
        }
    }, []);

    const handlePageChange = (pageNumber: number): void => setCurrentPage(pageNumber);

    return (
        <section className={style.posts}>
            <ul className={style.list}>
                {postsForCurrentPage.map((post) => <Post key={post.id} post={post} />)}
            </ul>
            <ul className={style.pagination}>
                {pageNumbers.map((pageNumber) => (
                    <button key={pageNumber} onClick={() => handlePageChange(pageNumber)}>
                        {pageNumber}
                    </button>
                ))}
            </ul>
        </section>
    );
};

export default PostsList;