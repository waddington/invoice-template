import React from 'react';
import './ContactInformation.scss';

export default class ContactInformation extends React.Component	{
	render() {
		const details = this.props.data.contact.map(function(item) {
			return <p>{item}</p>
		});

		return (
			<div className="contact-info">
				<p>Contact Information</p>
				<p>{this.props.data.name}</p>
				{details}
			</div>
		);
	}
}