import telegram from '../../assets/telegram.svg'
import instagram from '../../assets/instagram.svg'
import youTube from '../../assets/youTube.svg'
import facebook from '../../assets/facebook.svg'

const HeaderSocial = () => {
    return (
        <ul className="header-top__social-list">
            <ListItem link="#" img={telegram} descr="Telegram"/>
            <ListItem link="#" img={facebook} descr="Facebook"/>
            <ListItem link="#" img={instagram} descr="Instagram"/>
            <ListItem link="#" img={youTube} descr="YouTube"/>
        </ul>
    )
}

const ListItem = ({link, img, descr}) => {
    return (
        <li className="header-top__social-item">
            <a href={link} className="header-top__social-link">
                <img src={img} alt={descr}/>
            </a>
        </li>
    )
}

export {HeaderSocial};