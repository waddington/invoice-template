import React from 'react';
import './AdditionalInformation.scss';

export default class AdditionalInformation extends React.Component {
	render() {
		const info = this.props.data.map(function(item) {
			return <p>{item}</p>
		});

		return (
			<div className="additional-info">
				<p>Additional Information</p>
				{info}
			</div>
		);
	}
}