import React from 'react';
import AdditionalInformation from './../../components/AdditionalInformation/AdditionalInformation';
import WorkTable from './../../components/WorkTable/WorkTable';
import WorkTableTotals from './../../components/WorkTableTotals/WorkTableTotals';
import './InvoiceDetails.scss';

export default class InvoiceDetails extends React.Component {
	render() {
		return (
			<div id="invoice-details" className="row">
				<div className="clear full-width bottom-30" />
				<AdditionalInformation data={this.props.data.additional} />
				<WorkTable data={this.props.data.billables} />
				<WorkTableTotals data={this.props.data.billables} />
			</div>
		);
	}
}