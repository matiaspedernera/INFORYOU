import React from 'react'

const Sports = ({items,title}) => {
  return(
    <section className="sports-section">
      <h3 className="sports-section__title">Deportes</h3>
      <div className="sports-section__news-container">
        {items.map(item => (
          <article className="sports-section__news">
            <img className="sports-section__news-picture" src={item.src} alt={item.title}/>
            <h4 className="sports-section__news-title">{item.title}</h4>
          </article>
        ))}
      </div>
    </section>
  )
}

export default Sports