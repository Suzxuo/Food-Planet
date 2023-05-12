import React from "react";
import header_logo from "../media/header-logo.svg";
import call from "../media/call_num.svg";
import basket from "../media/basket .svg";

const Header = () => {
    return (
        <>
            <header>
                <section className="header">
                    <a href="#"><img src={header_logo} alt="header-logo" srcset="" className="header-logo" /></a>
                    <nav class="menu">
                        <ul>
                            <li><a href="#">Главная</a></li>
                            <li>
                                <a href="#">Меню</a>
                                <button className="menu_btn"></button>
                            </li>
                            <li><a href="#">Доставка</a></li>
                            <li><a href="#">Контакты</a></li>
                            <li>
                                <a href="#"><img src={call} alt="call" className="call_num" /></a>
                                <a href="#">+996500405988</a>
                            </li>
                            <li>
                                <a href="#"><img src={basket} alt="basket" /></a>
                            </li>
                        </ul>
                    </nav>
                </section>
            </header>
        </>
    )
}

export default Header;