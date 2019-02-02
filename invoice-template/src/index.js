import React from "react";
import ReactDOM from "react-dom";
import 'normalize.css';
import './index.scss';

import * as data from './../config/example-invoice-details.json';
import Invoice from "./containers/Invoice/Invoice";

ReactDOM.render(<Invoice data={data}/>, document.getElementById("index"));
