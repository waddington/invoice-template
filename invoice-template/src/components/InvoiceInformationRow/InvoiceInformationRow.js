import React from 'react';
import './InvoiceInformationRow.scss';

export default class InvoiceInformationRow extends React.Component {
	render() {
		return <p className="information-row"><span>{this.props.title}: </span>{this.props.value}</p>;
	}
}