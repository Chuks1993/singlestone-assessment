import React from 'react'

import { Header } from 'modules/component'

import './index.scss'

export default ({ children }) => {
	return (
		<div className='mainLayout'>
			<Header />
			{children}
		</div>
	)
}
