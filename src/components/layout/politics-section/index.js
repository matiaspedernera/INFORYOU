import React from 'react'

const Politics = ({items,title}) => {
  return(
    <section className="politics-section">
      <h3 className="politics-section__title">{title}</h3>
      <div className="politics-section__news-container">
        {items.map(item => (
          <article className="politics-section__news">
            <img className="politics-section__news-picture" src={item.src} alt={item.title}/>   
            <h4 className="politics-section__news-title">{item.title}</h4>
          </article>
        ))}
      </div>
    </section>
  )
}

export default Politics