import { GithubIcon, InstagramIcon, TwichIcon, YoutubeIcon } from "../../Icons"
import "./HeaderComponent.css"

const HeaderComponent = () => {
  return (
    <header className="header">
    <section className="header__section header__section--left">
        <h1 className="header__title">DOT DAGER</h1>
        <p className="header__description">Hola yo soy Dager pero vos no. Me llamo Mariano Villa, Soy <span className="header__description--mark">Creador de Contenido y Programador</span>. Me gusta hacer videitos para YouTube y directos en Twich.</p>
        <ul className="header__link-list">
          <li className="header__link">
            <a className="header__link-icon" href="https://www.youtube.com/@DotDager" target="_blank">
              <YoutubeIcon 
                color='#fff'
              />
            </a>
          </li>

          <li className="header__link">
            <a className="header__link-icon" href="https://www.twitch.tv/dagerxiv" target="_blank">
              <TwichIcon 
                color='#fff'
              />
            </a>
          </li>
          
          <li className="header__link">
            <a className="header__link-icon" href="https://www.instagram.com/dager.32/" target="_blank">
              <InstagramIcon 
                color='#fff'
              />
            </a>
          </li>
          
          <li className="header__link">
            <a className="header__link-icon" href="https://github.com/MarianoVilla" target="_blank">
              <GithubIcon
                color='#fff'
              />
            </a>
          </li>
        </ul>
    </section>
    <section className="header__section header__section--right">
        <img className="header__image" src="/dager-photo.png" alt="dot dager photo" />
    </section>
    </header>
  )
}

export default HeaderComponent