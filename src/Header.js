import React from 'react';
import Logo from "./Logo";
import Menu from "./Menu";

function Header() {
    return (
        <header>
         <div className="HeaderCSS">
             <Logo/>
            <Menu />
        </div>
        </header>
    );
}

export default Header;
