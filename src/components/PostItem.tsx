import React, {FC} from 'react';
import {IPost} from "../models/IPost";

interface PostItemProps {
    post: IPost,
    remove: (post: IPost) => void
    update: (post: IPost) => void
}

const PostItem: FC<PostItemProps> = ({post, remove, update}) => {
    const {id, title, body} = post

    const handleRemove = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.stopPropagation()
        remove(post)
    }

    const handleUpdate = (event: React.MouseEvent<HTMLDivElement>) => {
        const title = prompt() || ""
        update({...post, title})
    }
    return (
        <div style={{marginTop: 30, border: '3px solid blue'}} onClick={handleUpdate}>
            {id}.<h1>{title}</h1>
            <div style={{marginTop: 10, color: "green"}}>{body}</div>
            <button onClick={handleRemove}>DELETE POST</button>
        </div>
    );
};

export default PostItem