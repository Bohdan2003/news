import './headerBottom.scss';

const ListItem = ({link, text, active = false}) => {
    return (
        <li className="header-bottom__item">
            <a href={link} className={`header-bottom__link ${active ? 'active' : ''}`}>
                {text}
            </a>
        </li>
    )
}

const HeaderBottom = () => {
    return (
        <div className="header-bottom">
            <div className="container">
                <div className="header-bottom__inner">
                    <ul className="header-bottom__list">
                        <ListItem link="#" text="війна" active/>
                        <ListItem link="#" text="політика" />
                        <ListItem link="#" text="економіка" />
                        <ListItem link="#" text="суспільство" />
                        <ListItem link="#" text="погляди" />
                        <ListItem link="#" text="світ" />
                    </ul>
                    <a className="header-bottom__live" href="#">live</a>
                </div>
            </div>
        </div>
    )
}

export {HeaderBottom};