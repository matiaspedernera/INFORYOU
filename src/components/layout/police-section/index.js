import React from 'react'

const Police = ({items,title}) => {
  return(
    <section className="police-section">
      <h3 className="police-section__title">{title}</h3>
      <div className="police-section__news-container">
        {items.map(item => (
          <article className="police-section__news">
            <img className="police-section__news-picture" src={item.src} alt={item.title}></img>    
            <h4 className="police-section__news-title">{item.title}</h4>
          </article>    

        ))}
      </div>
    </section>
  )
}

export default Police