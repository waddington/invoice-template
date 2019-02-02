import React from 'react';
import Address from './../../components/Address/Address';
import ContactInformation from './../../components/ContactInformation/ContactInformation';
import PaymentInformation from './../../components/PaymentInformation/PaymentInformation';
import './FooterDetails.scss';

export default class FooterDetails extends React.Component {
	render() {
		return (
			<div id="footer-details" className="row">
				<Address
					name="Address"
					address={this.props.data.myDetails.address} />
				<ContactInformation data={this.props.data.myDetails} />
				<PaymentInformation data={this.props.data.myDetails} />
			</div>
		);
	}
}