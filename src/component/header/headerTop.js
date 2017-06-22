import React, { Component } from 'react';
import './style.scss'
const HeaderTop = (props) => {
	return (
		<div className='top-container' >
			<div className='top-inner' >
				<div className="top-inner-left" >
					<span>客服电话 010-89929128</span>
				</div>
				<div className="top-inner-right">
					<a href="javascript:;">登录</a>
				</div>
			</div>
		</div>
	);
}
export default HeaderTop
