import React from 'react';
import WorkTableRow from './../WorkTableRow/WorkTableRow';

export default class WorkTableHeading extends React.Component {
	render() {
		const content = [
			"Description",
			"Qty",
			"Unit",
			"Unit Price",
			"Total"
		];

		return <WorkTableRow data={content} class="heading" />;
	}
}