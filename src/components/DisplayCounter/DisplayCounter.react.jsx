import React, {Component} from "react";
import {connect} from "react-redux";


export class DisplayCounter extends Component {

	render() {
		return (
			<div className="header">
				{this.props.children}: {this.props.count | 0}
			</div>
		)
	}
}

DisplayCounter.defaultProps = {
	children: "Button clicks"
};

export default connect(
	(state) => {
		return {
			count: state.counter.count
		}
	}
)(DisplayCounter);
