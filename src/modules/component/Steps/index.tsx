import React from 'react'
import './index.scss'

interface StepsProps {
	stepNumber: number
	title: string
	body: string
}

const Steps: React.FC<StepsProps> = ({stepNumber, title, body}) => {
	return (
		<div className="step">
			<h2>0{stepNumber}</h2>
			<hr/>  
			<h4>{title}</h4>
			<p>{body}</p>
		</div>
	)
}

export default Steps