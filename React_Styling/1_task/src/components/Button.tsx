import React from 'react'
import { CommentType } from './Comment'
import buttonStyles from './button.module.css'

type Props = {
    comment: CommentType,
    value: string,
    handleVotes: (e: React.MouseEvent<HTMLInputElement, MouseEvent>) => void
}

const Button = ({ comment, value, handleVotes } : Props) => {
  return (
    <input className={buttonStyles.button_vote} id={comment.id} type="button" value={value} onClick={handleVotes} />
  )
}

export default Button