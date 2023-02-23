import React from 'react';
import {postAPI} from "./service/postService";
import PostItem from "./components/PostItem";
import {IPost} from "./models/IPost";

const PostContainer = () => {
    const {data, isLoading ,error} = postAPI.useFetchAllPostsQuery(32,{
        pollingInterval:3000
    })

    const [createPost,{}]=postAPI.useCreatePostMutation()
    const [removePost,{}]=postAPI.useDeletePostMutation()
    const [updatePost,{}]=postAPI.useUpdatePostMutation()

    const handleCreate=async()=>{
        const title=prompt()
        await createPost({title, body: title} as IPost)
    }
    const handleRemove=(post:IPost)=>{
        removePost(post)
    }
    const handleUpdate=(post:IPost)=>{
        updatePost(post)
    }


    return (
        <div>
            <button onClick={handleCreate}>Add new Post</button>
            {isLoading && <h1>ЗАГРУЗКА</h1>}
            {error &&  <div> Произошла ошибка  </div>}
            {data?.map(post=>
                <PostItem remove={handleRemove} update={handleUpdate} key={post.id} post={post}/>)}
        </div>
    );
};

export default PostContainer;