import React from 'react';
import WorkTableHeading from '../WorkTableHeading/WorkTableHeading';
import WorkTableItem from './../WorkTableItem/WorkTableItem';
import './WorkTable.scss';

export default class WorkTable extends React.Component {
	render() {
		const unit = this.props.data.unit;

		// Create all the rows
		let workItems = this.props.data.items.map(function(item) {
			return <WorkTableItem data={item} unit={unit} />
		});

		return (
			<div className="billable-table clear">
				<WorkTableHeading />
				{workItems}
			</div>
		);
	}
}