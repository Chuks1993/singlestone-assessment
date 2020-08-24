import React, { useEffect, useState } from 'react'

import { getSteps } from 'modules/api'
import { MainLayout } from 'modules/layout'
import { Button, Steps } from 'modules/component'
import { Step } from 'modules/Types'

import './index.scss'

const Landing: React.FC = () => {
	useEffect(() => {
		callSteps()
	}, [])

	const callSteps = async () => {
		const response = await getSteps()
		setSteps(response)
	}

	const sortSteps = (a, b) => {
		if (a.stepNumber < b.stepNumber) {
			return -1;
		}
		if (a.stepNumber > b.stepNumber) {
			return 1;
		}
		return 0;
	}

	const sortVersions = (a, b) => {
		if (a.effectiveDate < b.effectiveDate) {
			return 1;
		}
		if (a.effectiveDate > b.effectiveDate) {
			return -1;
		}
		return 0;
	}

	const [steps, setSteps] = useState<Array<Step | any>>([])

	return (
		<MainLayout>
			<div className="banner">
				<div className="content">
					<h3>New Games & Accessories</h3>
					<h1>Monthly Packages. <br /> Excitement delivered daily</h1>
					<p>What's the best way to shop for the latest video games and peripherals? How about never shopping at all? You'll get new stuff on your doorstep - every month.</p>
					<Button title='Get Started' />
				</div>
			</div>
			<div className="how-it-works">
				<h2>How It Works</h2>
				<div className="steps">
					{steps.sort(sortSteps).map(({ id, stepNumber, versionContent }) => (
							<Steps
								data-testid='step'
								key={id}
								stepNumber={stepNumber}
								title={versionContent.sort(sortSteps)[0].title}
								body={versionContent.sort(sortVersions)[0].body}
							/>
					))}
				</div>
			</div>

		</MainLayout>
	)

}

export default Landing