import React from 'react'

const Health = ({items,title}) => {
  return(
    <section className="health-section">
      <h3 className="health-section__title">{title}</h3>
      <div className="health-section__news-container">
        {items.map(item => (
          <article className="health-section__news">
            <img className="health-section__news-picture" src={item.src} alt={item.title}/>    
            <h4 className="health-section__news-title">{item.title}</h4>
          </article>    
        ))}
      </div>
    </section>
  )
}

export default Health