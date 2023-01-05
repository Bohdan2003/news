import './menu.scss';

const Menu = () => {
    return (
        <nav className="menu">
            <button 
                className="menu__btn"
                onClick={()=>{
                    const list = document.querySelector('.menu__list');
                    list.classList.toggle('menu__list--hidden');
                    list.parentNode.classList.toggle('menu__list-wrapper--disable');
                }}
            >Меню</button>
            <div className="menu__list-wrapper">
                <ul className="menu__list menu__list--hidden">
                    <li className="menu__item">
                        <a href="#" className="menu__link">
                            Київ
                        </a>
                    </li>
                    <li className="menu__item">
                        <a href="#" className="menu__link">
                            Одеса
                        </a>
                    </li>
                    <li className="menu__item">
                        <a href="#" className="menu__link">
                            Харків
                        </a>
                    </li>
                </ul>
            </div>                            
        </nav>
    )
}

export { Menu };