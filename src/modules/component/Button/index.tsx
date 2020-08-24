import React from 'react'
import './index.scss'

const Button = ({ title }) => {
	return (
		<button className='button'>
			{title}
		</button>
	)
}

export default Button