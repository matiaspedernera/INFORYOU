import React from 'react'

const Culture = ({items,title}) => {
  return(
    <section className="culture-section">
      <h3 className="culture-section__title">{title}</h3>
      <div className="culture-section__news-container">
        {items.map(item => (
          <article className="culture-section__news">
            <img className="culture-section__news-picture" src={item.src} alt={item.src}/>    
            <h4 className="culture-section__news-title">{item.title}</h4>
          </article> 
        ))}   
      </div>
    </section>
  )
}

export default Culture
