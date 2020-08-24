

export interface Step {
	id: string
	stepNumber: string
	versionContent: Content[]
}

interface Content {
	body: string
	effectiveDate: string
	title: string
}