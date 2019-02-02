import React from 'react';
import './Address.scss';

export default class Address extends React.Component {
	render() {
		const address = this.props.address.map(function(item) {
			return <span>{item}</span>;
		});

		if (typeof this.props.title === 'undefined') {
			return (
				<div className="address">
					<p>{this.props.name}</p>
					<p>{address}</p>
				</div>
			);
		} else {
			return (
				<div className="address">
					<p><span>{this.props.title}:</span><br/>{this.props.name}</p>
					<p>{address}</p>
				</div>
			);
		}
	}
}