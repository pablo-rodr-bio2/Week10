import React, { useState } from 'react'
import { useComments } from '../context/CommentsContext'
import { CommentType } from './Comment'
import submitCommentStyles from './submitComment.module.css'


const SubmitComment = () => {

    const {comments, setComments} = useComments()

    const [text, setText] = useState<string>('Add a comment...')

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {

        e.preventDefault()

        const id = String(crypto.randomUUID)
        const author = "Myself"
        const comment = text
        const votes = 0

        const newComment: CommentType = { id, author, comment, votes }

        if (comments) setComments([...comments, newComment])
    }

    return (
        <form className={submitCommentStyles.form_comment} onSubmit={handleSubmit} >
            <label> Submit your comment</label>
            <textarea className={submitCommentStyles.submit_text}  name="submit_text" id="submit_text" onChange={(e) => setText(e.currentTarget.value)}>
                Add a comment...
            </textarea>
            <button className={submitCommentStyles.btn_send} type="submit">Send</button>
        </form>
    )
}

export default SubmitComment