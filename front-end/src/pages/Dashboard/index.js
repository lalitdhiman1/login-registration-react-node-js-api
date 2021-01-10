import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { userActions } from '../../store/actions';

function Dashboard() {
    const [posts, setPosts] = useState([])
    const user = useSelector(state => state.authentication.user);
    const dispatch = useDispatch();

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json())
        .then(json => setPosts(json))
        console.log(posts)
    }, []);

    function handleDeleteUser(id) {
        dispatch(userActions.delete(id));
    }

    return (
        <div className="col-lg-12">
            <h3 className="my-4">All Posts</h3>
            {posts.loading && <em>Loading posts...</em>}
            {posts.error && <span className="text-danger">ERROR: {posts.error}</span>}
            {posts &&
                <ul>
                    {posts.map((post, index) =>
                        <li key={post.id}>
                            {
                                <>
                                <h6>{post.title}</h6>
                                <p>{post.body}</p>
                                </>
                            }
                        </li>
                    )}
                </ul>
            }
        </div>
    );
}

export { Dashboard };