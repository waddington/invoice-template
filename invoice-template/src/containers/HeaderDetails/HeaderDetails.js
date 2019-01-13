import React from "react";
import Address from "./../../components/Address/Address";
import InvoiceInformation from './../../components/InvoiceInformation/InvoiceInformation';
import './HeaderDetails.scss';

export default class HeaderDetails extends React.Component {
  render() {
    return (
      <div id="header-details">
        <div className="row">
          <div className="title right">{this.props.data.title}</div>
          <div className="my-address left">
            <Address
              title="From"
              name={this.props.data.myDetails.name}
              address={this.props.data.myDetails.address}
            />
          </div>

          <div className="clear full-width bottom-30" />

          <div className="invoice-information right">
		  	<InvoiceInformation information={this.props.data.invoiceInfo} />
		  </div>
          <div className="their-address left">
            <Address
              title="To"
              name={this.props.data.theirDetails.name}
              address={this.props.data.theirDetails.address}
            />
          </div>
        </div>
      </div>
    );
  }
}
