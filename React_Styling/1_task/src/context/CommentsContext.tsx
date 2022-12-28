import React, { useState, createContext, useContext } from "react";
import { firstComments } from "../db/comments";
import { CommentType } from "../components/Comment";

export interface CommentsContextProps {
    comments: CommentType[] | null,
    setComments: (comments: CommentType[]) => void
}

const CommentsContext = createContext<CommentsContextProps | undefined>(undefined)

type CommentProviderProps = {
    children: JSX.Element
}

export const CommentsProvider = ({ children }: CommentProviderProps) => {

    const [comments, setComments] = useState(firstComments)

    return(
        <CommentsContext.Provider value={{comments, setComments}}>
            {children}
        </CommentsContext.Provider>
    )
}

export const useComments = () => {
    const context = useContext(CommentsContext)

    if( context === undefined) throw new Error('useComments must be used within a CommentsProvider')

    return context
}