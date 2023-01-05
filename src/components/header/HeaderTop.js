import {HeaderSearch} from "./HeaderSearch";
import {HeaderLanguage} from "./HeaderLanguage";
import {HeaderSocial} from "./HeaderSocial";
import {Menu} from "./Menu";

import './headerTop.scss';

const HeaderTop = () => {
    return (
        <div className="header-top">
            <div className="container">
                <div className="header-top__inner">
                    <Menu/>
                    <div className="header-top__box">
                        <HeaderSearch/>
                        <HeaderSocial/>
                        <HeaderLanguage/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export {HeaderTop}