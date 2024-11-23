import "./MainComponent.css"

const MainComponent = () => {
  return (
    <main className="main">
      <h2 className="main__title">Sobre Mi</h2>
      <article className="main__article">
        <section className="main__section">
          <div className="main__section--image">
            <img src="/code.jpg" alt="foto pene" />
          </div>
          <div className="main__section--content">
            <h3 className="main__subtitle">Programación</h3>
            <p className="main__description">Programo en C#, si necesitas cualquier cosa contactame (ojito!!). Destrozo tu código para hacertelo de nuevo (;D).</p>
          </div>
        </section>

        <section className="main__section main__section--reverse">
          <div className="main__section--content">
            <h3 className="main__subtitle">Los Pepinos!!!</h3>
            <p className="main__description">Quiero introducir esta sección con una breve historia (pero llena de sentimientos) sobre los PEPINOS. Un día que estaba lloviendo mucho en la gran ciudad de Buenos Aires, en una zona específica (mi casa) comenzaron a llover pepinos, y me comenzaron a gustar. Fin.</p>
          </div>
          <div className="main__section--image">
            <img src="/picknes-city.png" alt="foto pene" />
          </div>
        </section>

        <section className="main__section">
          <div className="main__section--image">
            <img src="/my-cat.jpg" alt="foto pene" />
          </div>
          <div className="main__section--content">
            <h3 className="main__subtitle">Amante de los Gatos</h3>
            <p className="main__description">Los gatos, que decir de ellos, los adoro. Otherwise, rompen mucho las pelotas. Por eso cuando me aburro de uno, saco otro del sotano y meto el otro. Pero obvio que en los videos siempre muestro a mi bebé.</p>
          </div>
        </section>
        
        <section className="main__section main__section--reverse">
          <div className="main__section--content">
            <h3 className="main__subtitle">Música</h3>
            <p className="main__description">Soy una de las pocas personas que le sigue gustando el rock y el metal (o eso aparento xd). Tengo un centenar de guitarras y algunas con pepinos dentro por si me agarra hambre. Toco re bien (ojito!!)</p>
          </div>
          <div className="main__section--image">
            <img src="/my-guitar.jfif" alt="foto pene" />
          </div>
        </section>
      </article>
    </main>
  )
}

export default MainComponent