import React, { Component } from 'react';
import './style.scss'
const logo = require('./img/logo.png');
const user = require('./img/user.png');
const Header = (props) => {
	return (
		<div className='top-container-menu' >
			<div className='top-menu-inner' >
				<div className="top-menu-inner-left" >
					<img src={logo} alt="logo" className="logo"/>
				</div>
				<div className="top-menu-inner-right">
						<ul>
							<li>
								<a>我是个按钮</a>
							</li>
							<li>
								<a>我是个按钮</a>
							</li>
							<li>
								<a>我是个按钮</a>
							</li>
							<li>
								<a>我是个按钮</a>
							</li>	
						</ul>
						<div className="right-image">
							<img src={user} alt="user" className="user"/>
						</div>
				</div>
			</div>
		</div>
	);
}
export default Header
