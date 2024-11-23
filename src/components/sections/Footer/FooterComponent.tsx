import "./FooterComponent.css"
import { GithubIcon, InstagramIcon, TwichIcon, YoutubeIcon } from "../../Icons"

const FooterComponent = () => {
return (
<footer className="footer">
    <p className="footer__description">Mariano Villa</p>
    <ul className="footer__link-list">
    <li className="footer__link">
        <a className="footer__link-icon" href="https://www.youtube.com/@DotDager" target='_blank'>
        <YoutubeIcon 
            color='#fff'
        />
        </a>
    </li>

    <li className="footer__link">
        <a className="footer__link-icon" href="https://www.twitch.tv/dagerxiv" target='_blank'>
        <TwichIcon 
            color='#fff'
        />
        </a>
    </li>
    
    <li className="footer__link">
        <a className="footer__link-icon" href="https://www.instagram.com/dager.32/" target='_blank'>
        <InstagramIcon 
            color='#fff'
        />
        </a>
    </li>
    
    <li className="footer__link">
        <a className="footer__link-icon" href="https://github.com/MarianoVilla" target='_blank'>
        <GithubIcon
            color='#fff'
        />
        </a>
    </li>
    </ul>
    <p className="footer__description">Sigueme en mis redes para más</p>
</footer>
)
}

export default FooterComponent