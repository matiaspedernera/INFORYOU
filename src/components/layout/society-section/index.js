import React from 'react'

const Society = ({items,title}) => {
  return(
    <section className="society-section">
      <h3 className="society-section__title">{title}</h3>
      <div className="society-section__news-container">
        {items.map(item => (
          <article className="society-section__news">
            <img className="society-section__news-picture" src={item.src} alt={item.title}></img>    
            <h4 className="society-section__news-title">{item.title}</h4>
          </article>    
        ))}
      </div>
    </section>
  )
}

export default Society