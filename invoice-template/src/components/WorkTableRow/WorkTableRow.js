import React from 'react';
import './WorkTableRow.scss';

export default class WorkTableRow extends React.Component {
	render() {
		const rowData = this.props.data.map(function(item) {
			return <p>{item}</p>;
		});

		if (typeof this.props.class === 'undefined') {
			return (
				<div className={`billable-row clear`}>
					{rowData}
				</div>
			);
		} else {
			return (
				<div className={`${this.props.class} billable-row clear`}>
					{rowData}
				</div>
			);
		}
	}
}