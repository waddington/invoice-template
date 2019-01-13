import React from 'react';
import InvoiceInformationRow from './../InvoiceInformationRow/InvoiceInformationRow';
import './InvoiceInformation.scss';

export default class InvoiceInformation extends React.Component {
	render() {
		return (
			<div className="information">
				<InvoiceInformationRow title="Invoice Date" value={this.props.information.date}/>
				<InvoiceInformationRow title="Invoice Number" value={this.props.information.number}/>
				<InvoiceInformationRow title="Due Date" value={this.props.information.due}/>
			</div>
		);
	}
}