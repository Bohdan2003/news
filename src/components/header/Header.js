import telegram from '../../assets/telegram.svg'
import instagram from '../../assets/instagram.svg'
import youTube from '../../assets/youTube.svg'
import facebook from '../../assets/facebook.svg'

import './header.scss';

export default () => {
    return(
        <header className="header"> 
            <div className="header-top">
                <div className="container">
                    <div className="header-top__inner">
                        <nav className="menu">
                            <button className="menu__btn">Меню</button>
                            <ul className="menu__list">
                                <li className="menu__list-item">
                                    <a href="#" className="menu__list-link">
                                        Київ
                                    </a>
                                </li>
                                <li className="menu__list-item">
                                    <a href="#" className="menu__list-link">
                                        Одеса
                                    </a>
                                </li>
                                <li className="menu__list-item">
                                    <a href="#" className="menu__list-link">
                                        Харків
                                    </a>
                                </li>
                            </ul>
                        </nav>
                        <div className="header-top__box">
                            <div className="header-top__search-wrapper">
                                <input type="text" className="header-top__search"
                                placeholder="пошук новин"/>
                            </div>              
                            <ul className="header-top__social-list">
                                <li className="header-top__social-item">
                                    <a href="#" className="header-top__social-link">
                                        <img src={telegram} alt="Telegram"/>
                                    </a>
                                </li>
                                <li className="header-top__social-item">
                                    <a href="#" className="header-top__social-link">
                                        <img src={facebook} alt="Facebook"/> 
                                    </a>
                                </li>
                                <li className="header-top__social-item">
                                    <a href="#" className="header-top__social-link">
                                        <img src={instagram} alt="Instagram"/>
                                    </a>
                                </li>
                                <li className="header-top__social-item">
                                    <a href="#" className="header-top__social-link">
                                        <img src={youTube} alt="YouTube"/>
                                    </a>
                                </li>
                            </ul>
                            <ul className="header-top__language-list">
                                <li className="header-top__language-item">
                                    <button className="header-top__language-btn">ru</button>
                                </li>
                                <li className="header-top__language-item">
                                    <button className="header-top__language-btn active">ua</button>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className="header-bottom">
                <div className="container">
                    <div className="header-bottom__inner">
                        <ul className="header-bottom__columns-list">
                            <li className="header-bottom__columns-item">
                                <a href="#" className="header-bottom__columns-link active">
                                    війна
                                </a>
                            </li>
                            <li className="header-bottom__columns-item">
                                <a href="#" className="header-bottom__columns-link">
                                    новини
                                </a>
                            </li>
                            <li className="header-bottom__columns-item">
                                <a href="#" className="header-bottom__columns-link">
                                    політика
                                </a>
                            </li>
                            <li className="header-bottom__columns-item">
                                <a href="#" className="header-bottom__columns-link">
                                    економіка
                                </a>
                            </li>
                            <li className="header-bottom__columns-item">
                                <a href="#" className="header-bottom__columns-link">
                                    суспільство
                                </a>
                            </li>
                            <li className="header-bottom__columns-item">
                                <a href="#" className="header-bottom__columns-link">
                                    погляди
                                </a>
                            </li>
                            <li className="header-bottom__columns-item">
                                <a href="#" className="header-bottom__columns-link">
                                    світ
                                </a>
                            </li>
                        </ul>
                        <a className="header-bottom__columns-state" href="#">live</a>

                    </div>
                </div>
            </div>
        </header>
    )
};