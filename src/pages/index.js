import { Component } from 'react';
import { connect } from 'dva';
import AppDock from '../components/AppDock';

class Index extends Component {
	render() {
		return (
			<div>
				<h1>OneQR</h1>
				<AppDock type='Pay'/>
				<AppDock type='Friend'/>
			</div>
		);
	}
}

export default connect((state)=>{return {data:state.Data}})(Index);
