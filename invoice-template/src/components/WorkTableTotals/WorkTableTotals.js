import React from 'react';
import './WorkTableTotals.scss';

export default class WorkTableTotals extends React.Component {
	render() {
		let total = 0;

		this.props.data.items.map(function(item) {
			total += (item.qty * item.price);
		});

		return (
			<div className="totals">
				<p className="net"><span>Total: </span>{this.props.data.unit} {total.toFixed(2)}</p>
			</div>
		);
	}
}