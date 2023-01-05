import { FooterListItem as ListItem } from './FooterListItem';
import { FooterList as List } from './FooterList';
import { FooterBox as Box } from './FooterBox'

import YouTube from '../../assets/social/YouTube.svg';
import Telegram from '../../assets/social/Telegram.svg';
import Instagram from '../../assets/social/Instagram.svg';
import Facebook from '../../assets/social/Facebook.svg';
import TikTok from '../../assets/social/TikTok.svg';
import GoogleNews from '../../assets/social/GoogleNews.svg';

import './footer.scss';

export default () => {
    return (
        <section className="footer">
            <div className="footer-top">
                <div className="container">
                    <div className="footer-top__items">
                        <div className="footer-top__item">
                            <div className="footer-top__item-box footer-top__item-links">
                                <a className="footer-top__link" href='#'>Всі новини</a>
                                <a className="footer-top__link" href='#'>COVID-19</a>
                            </div>
                            <Box title="Війна">
                                <List>
                                    <ListItem>
                                        Україна
                                    </ListItem>
                                    <ListItem>
                                        Світ
                                    </ListItem>
                                </List>
                            </Box>
                        </div>
                        <div className="footer-top__item">
                            <Box title="Здоров’я">
                                 <List>
                                    <ListItem>
                                        Дієти
                                    </ListItem>
                                    <ListItem>
                                        Краса
                                    </ListItem>
                                    <ListItem>
                                        Секс
                                    </ListItem>
                                    <ListItem>
                                        Психологія
                                    </ListItem>
                                    <ListItem>
                                        Медицина
                                    </ListItem>
                                </List>
                            </Box>
                            <Box title="Події">
                                <List>
                                    <ListItem>
                                        ДТП
                                    </ListItem>
                                    <ListItem>
                                        Катастрофи
                                    </ListItem>
                                    <ListItem>
                                        Кримінал
                                    </ListItem>
                                </List>
                            </Box>   
                        </div>
                        <div className="footer-top__item">
                            <Box title="Лайфстайл">
                                <List>
                                    <ListItem>
                                        Історії з життя
                                    </ListItem>
                                    <ListItem>
                                        Подорожі
                                    </ListItem>
                                    <ListItem>
                                        Кухня
                                    </ListItem>
                                    <ListItem>
                                        Шоубізнес
                                    </ListItem>
                                    <ListItem>
                                        Мода та стиль
                                    </ListItem>
                                    <ListItem>
                                        Зірковий гороскоп
                                    </ListItem>
                                </List>
                            </Box>   
                            <Box title="Суспільство">
                                <List>
                                    <ListItem>
                                        Охорона здоров’я
                                    </ListItem>
                                    <ListItem>
                                        Кримінал
                                    </ListItem>
                                    <ListItem>
                                        Екологія
                                    </ListItem>
                                    <ListItem>
                                        Релігія
                                    </ListItem>
                                </List>
                            </Box>
                        </div>
                        <div className="footer-top__item">
                            <Box title="Регіони">
                                <List>
                                    <ListItem>
                                        Київ
                                    </ListItem>
                                    <ListItem>
                                        Одеса
                                    </ListItem>
                                    <ListItem>
                                        Харків
                                    </ListItem>
                                    <ListItem>
                                        Львів
                                    </ListItem>
                                </List>
                            </Box>
                            <Box title="Техно">
                                <List>
                                    <ListItem>
                                        Наука
                                    </ListItem>
                                    <ListItem>
                                        Гаджети
                                    </ListItem>
                                    <ListItem>
                                        ІТ
                                    </ListItem>
                                    <ListItem>
                                        Космос
                                    </ListItem>
                                </List>
                            </Box>                            
                        </div>
                        <div className="footer-top__item">
                            <Box title="Економіка">
                                <List>
                                    <ListItem>
                                        Фінанси
                                    </ListItem>
                                    <ListItem>
                                        Комунальні послуги
                                    </ListItem>
                                    <ListItem>
                                        Бізнес
                                    </ListItem>
                                    <ListItem>
                                        Львів
                                    </ListItem>
                                </List>
                            </Box>
                            <Box title="Спорт">
                                <List>
                                    <ListItem>
                                        Футбол
                                    </ListItem>
                                    <ListItem>
                                        Волейбол
                                    </ListItem>
                                    <ListItem>
                                        Баскетбол
                                    </ListItem>
                                    <ListItem>
                                        Хокей
                                    </ListItem>
                                </List>   
                            </Box>
                        </div>
                            
                        <div className="footer-top__item footer-top__about-us">
                            <a className="footer-top__link" href='#'>Про нас</a>
                            <a className="footer-top__link" href='#'>Контакти</a>
                            <a className="footer-top__link" href='#'>Структура власності</a>
                            <a className="footer-top__link" href='#'>Команда</a>
                            <a className="footer-top__link" href='#'>Медіакіт</a>
                        </div>
                    </div>
                    <div className="footer-top__social">
                        <div className="footer-top__social-title">
                            Новини у зручному форматі
                        </div>
                        <div className="footer-top__social-items">
                            <a className="footer-top__social-itemlink" href="#">
                                <img className="footer-top__social-img" src={YouTube} alt="YouTube" />
                                <div className="footer-top__social-text">YouTube</div>
                            </a>
                            <a className="footer-top__social-itemlink" href="#">
                                <img className="footer-top__social-img" src={Telegram} alt="Telegram" />
                                <div className="footer-top__social-text">Telegram</div>
                            </a>
                            <a className="footer-top__social-itemlink" href="#">
                                <img className="footer-top__social-img" src={Instagram} alt="Instagram" />
                                <div className="footer-top__social-text">Instagram</div>
                            </a>
                            <a className="footer-top__social-itemlink" href="#">
                                <img className="footer-top__social-img" src={Facebook} alt="Facebook" />
                                <div className="footer-top__social-text">Facebook</div>
                            </a>
                            <a className="footer-top__social-itemlink" href="#">
                                <img className="footer-top__social-img" src={TikTok} alt="TikTok" />
                                <div className="footer-top__social-text">TikTok</div>
                            </a>
                            <a className="footer-top__social-itemlink" href="#">
                                <img className="footer-top__social-img" src={GoogleNews} alt="Google News" />
                                <div className="footer-top__social-text">Google News</div>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer-bottom">
                <div className="container">
                    <div className="footer-bottom__text">
                        © 2020-2022, ТОВ «Медіа Мережі»
                    </div>
                    <div className="footer-bottom__terms">
                        <a className="footer-bottom__link" href="#">Політика користувача</a>
                        <a className="footer-bottom__link" href="#">Політика конфіденційності</a>
                        <a className="footer-bottom__link" href="#">Політика Cookie-файлів</a>
                    </div>
                </div>
            </div>
        </section>
    )
}