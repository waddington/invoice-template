import React from "react";
import ReactDOM from "react-dom";
import 'normalize.css';
import './index.scss';

import Invoice from "./containers/Invoice/Invoice";
import ErrorPage from "./containers/ErrorPage/ErrorPage";

function getUrlVars() {
    var vars = {};
    var parts = document.URL.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(m,key,value) {
        vars[key] = value;
    });
    return vars;
}

function getUrlParam(parameter, defaultvalue){
    var urlparameter = defaultvalue;
    if(document.URL.indexOf(parameter) > -1) {
        urlparameter = getUrlVars()[parameter];
	}

	if (typeof urlparameter === 'undefined') {
		urlparameter = defaultvalue;
	}

    return urlparameter;
}

const invoiceFileName = getUrlParam('file', 'example-invoice-details.json');

try {
	const invoiceFile = require("./../config/" + invoiceFileName);
	ReactDOM.render(<Invoice data={invoiceFile}/>, document.getElementById("index"));
} catch (err) {
	console.log(invoiceFileName);
	console.log(err);
	ReactDOM.render(<ErrorPage error={err}/>, document.getElementById("index"));
}
