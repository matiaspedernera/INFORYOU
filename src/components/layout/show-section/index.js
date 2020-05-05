import React from 'react'

const Show = ({items,title}) => {
  return(
    <section className="show-section">
      <h3 className="show-section__title">{title}</h3>
      <div className="show-section__news-container">
        {items.map(item => (
          <article className="show-section__news">
            <img className="show-section__news-picture" src={item.src} alt={item.title}/>    
            <h4 className="show-section__news-title">{item.title}</h4>
          </article>    
        ))}
      </div>
    </section>
  )
}

export default Show