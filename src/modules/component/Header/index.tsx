import React from 'react'
import './index.css'
import { ReactComponent as Logo } from 'modules/assets/svg/logo-endless.svg';


const Header = () => {
	return <div className="header"><Logo fill='#47e4c2' width='8rem'/></div>
}

export default Header;