import React from 'react'

const CommentsSection = ({commentsArray = []}) => {
  return (
    <section className="comments-section">
      <h1 className="comments-section__title">Comentarios</h1>
      {commentsArray.map(comment => (
        <div className="comments-section__container">
          <h2 className="comments-section__name">{comment.name}</h2>
          <h3 className="comments-section__mail">{comment.mail}</h3>
          <p className="comments-section__comment">{comment.comment}</p>
        </div>
      ))}
    </section>
  )
}

export default CommentsSection