import React from 'react';
import './PaymentInformation.scss';

export default class PaymentInformation extends React.Component {
	render() {
		const details = this.props.data.payment.map(function(item) {
			return <p>{item}</p>;
		});

		return (
			<div className="payment-info">
				<p>Payment Details</p>
				{details}
			</div>
		);
	}
}