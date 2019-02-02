import React from 'react';
import WorkTableRow from './../WorkTableRow/WorkTableRow';

export default class WorkTableItem extends React.Component {
	render() {
		let content = [
			this.props.data.desc,
			this.props.data.qty,
			this.props.data.unit,
			this.props.unit + " " + (this.props.data.price * 1).toFixed(2),
			this.props.unit + " " + (this.props.data.qty * this.props.data.price).toFixed(2)
		]

		return (
			<WorkTableRow data={content} />
		);
	}
}