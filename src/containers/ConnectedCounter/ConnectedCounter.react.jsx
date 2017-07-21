import React, {Component} from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import Counter from "../../components/Counter/Counter.react.jsx";


export class ConnectedCounter extends Component {

	render() {
		return (
			<div>
				Button clicks: <Counter count={this.props.count}/>
			</div>
		)
	}
}

ConnectedCounter.propTypes = {
	count: PropTypes.number
};

export const mapStateToProps = (state) => {
	return {
		count: state.getIn(["counter", "count"])
	}
};

export default connect(
	mapStateToProps
)(ConnectedCounter);
