import React from 'react'

const Sections = [
  {
    title: "Política",
    listNews: [
      {
        title: `Confirmaron que los 1.600 barbijos que compró 
        el gobierno de la Ciudad de Buenos Aires
        estaban vencidos desde hace cuatro años`,
        src: "./img/politicas1.jpg"
      },
      {
        title: "Una comisión analizará si se puede flexibilizar la cuarentena en la Justicia",
        src: "./img/politicas2.jpg"
      },
      {
        title: "La reforma de la Constitución demorará al menos dos años",
        src: "./img/politicas3.jpg"
      }
    ]
  },
  {
    title: "Sociedad",
    listNews: [
      {
        title: "Ahora las limitaciones de la cuarentena varían según el departamento",
        src: "./img/sociedad1.jpg",
      },
      {
        title: "La semana arrancará con un lindo día otoñal",
        src: "./img/sociedad2.jpg",
      },
      {
        title: "Aclaran que el régimen de visitas para hijos de padres separados 'no es obligatorio'",
        src: "./img/sociedad3.jpg"
      }
    ]
  },
  {
    title: "Deportes",
    listNews: [
      {
        title: "Nascar ya tiene fecha confirmada para el regreso",
        src: "./img/deportes1.jpg",
      },
      {
        title: "Finalmente, River recibirá una sanción imperceptible por no jugar ante Atlético Tucumán",
        src: "./img/deportes2.jpg",
      },
      {
        title: "Por el Día de las Madres: Cristiano Ronaldo sorprendió a Dolores con un costoso regalo",
        src: "./img/deportes3.jpg"
      }
    ]
  },
  {
    title: "Cultura",
    listNews: [
      {
        title: "Alfabetización, matemáticas y lectura: la propuesta de la DGE para la televisión",
        src: "./img/cultura1.jpg"
      },
      {
        title: "Covidiota, coronials, covidengue: cómo impacta la pandemia en las diferentes lenguas",
        src: "./img/cultura2.jpg"
      },
      {
        title: "¿Por qué se conmemora hoy el Día Mundial de la Libertad de Prensa?",
        src: "./img/cultura3.jpg"
      }
    ]
  },
  {
    title: "Policiales",
    listNews: [
      {
        title: "Una mujer esquizofrénica convivió con el cadáver de su madre durante cuatro días",
        src: "./img/policiales1.jpg",
      },
      {
        title: "Una mujer apuñaló a su vecina embarazada en San Martín tras una discusión",
        src: "./img/policiales2.jpg",
      },
      {
        title: "Investigan la muerte de una joven que fue llevada al hospital Lencinas",
        src: "./img/policiales3.jpg"
      }
    ]
  },
  {
    title: "Espectáculos",
    listNews: [
      {
        title: "La emoción de Juana Viale al recordar a Goldie Legrand: 'Es difícil no poder abrazar'",
        src: "./img/show1.jpg",
      },
      {
        title: "Murió el actor de Juego de tronos, B.J. Hogg",
        src: "./img/show2.jpg",
      },
      {
        title: "Mike Amigorena: 'Reinventarse en la tele y el teatro es muy difícil'",
        src: "./img/show3.jpg"
      }
    ]
  },
  {
    title: "Salud",
    listNews: [
      {
        title: "Sarampión: una enfermedad para la que sí hay vacuna",
        src: "./img/salud1.jpg",
      },
      {
        title: "La importancia de la teleconsulta en épocas de Covid-19",
        src: "./img/salud2.jpg",
      },
      {
        title: "Instituciones advierten que hay enfermedades que no pueden esperar",
        src: "./img/salud3.jpg"
      }
    ]
  }
]

const NewsSection = () => {

  return (
    <div>
      {Sections.map(section => (
        <section className="news-section">
          <h3 className="news-section__title">{section.title}</h3>
          <div className="news-section__news-container">
            {section.listNews.map(item => (
              <article className="news-section__news">
                <img className="news-section__news-picture" src={item.src} alt={item.title} />
                <h4 className="news-section__news-title">{item.title}</h4>
              </article>
            ))}
          </div>
        </section>
      ))}
    </div>
  )
}

export default NewsSection