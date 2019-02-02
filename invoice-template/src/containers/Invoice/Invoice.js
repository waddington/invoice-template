import React from "react";
import HeaderDetails from "./../HeaderDetails/HeaderDetails";
import InvoiceDetails from "./../InvoiceDetails/InvoiceDetails";
import FooterDetails from "./../FooterDetails/FooterDetails";

import './Invoice.scss';

export default class Invoice extends React.Component {
  render() {
    return (
      <div id="invoice" className="clear">
        <HeaderDetails data={this.props.data} />
        <InvoiceDetails data={this.props.data} />
        <FooterDetails data={this.props.data} />
      </div>
    );
  }
}
