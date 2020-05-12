import React, { useState } from 'react';
import Layout from '../components/layout';
import Form from '../components/form';
import CommentSection from '../components/comments-section';
import CommentsArray from '../services/comments.json'
import './comment.scss'



const Comments = () => {
  const [comments, setComment] = useState(CommentsArray)

  const addComment = ({name, mail, comment}) => {
    const newComment = {
      name: name,
      mail: mail,
      comment: comment,
      id: comments.length
    }
    const newArray = [...comments, newComment]
    setComment(newArray)
  }

  return (
    <Layout>
      <div className="comment-container">
        <Form addComment={addComment} />
        <CommentSection commentsArray={comments} />
      </div>
    </Layout>
  )
}

export default Comments