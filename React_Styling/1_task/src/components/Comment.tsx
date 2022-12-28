import React from 'react'
import { useComments } from '../context/CommentsContext'
import commentStyles from './comment.module.css'
import Button from './Button'

export type CommentType = {
    id: string,
    author: string,
    comment: string,
    votes: number
}

const Comment = () => {

    const { comments, setComments } = useComments()

    const handleVotes = (e: React.MouseEvent<HTMLInputElement, MouseEvent>): void => {

        const id = e.currentTarget.id

        const isUpvote =  e.currentTarget.value === '+'  
        
        const newComments: CommentType[] | undefined =  comments?.map(comment => {

            if(comment.id === id ) {

                const newVotes = isUpvote ? comment.votes + 1 : comment.votes - 1
                
                return {...comment, votes: newVotes}
            }

            return comment
        })
        if(newComments) setComments(newComments)
        
    }

    if (!comments) return (<div>Looking for comments</div>)

    return (
        <>
            {
                comments.map(comment =>
                    <div className={commentStyles.comment_container} id={comment.id}>
                        <div className={commentStyles.comment_votes}>
                            <Button comment={comment} value='+' handleVotes={handleVotes}/>
                            <div className={commentStyles.comment_votes_number}>{comment.votes}</div>
                            <Button comment={comment} value='-' handleVotes={handleVotes}/>
                        </div>
                        <div className={commentStyles.comment_data}>
                            <div className={commentStyles.comment_author}>{comment.author}</div>
                            <div>{comment.comment}</div>
                        </div>
                    </div>

                )
            }
        </>
    )
}

export default Comment