import React,{ Component } from 'react';
import { connect } from 'dva';
import QRCard from '../../components/QRCard';

class Pay extends Component {

	render() {
		this.props.dispatch({
			type: 'Data/updateURL'
		});
		var href = window.location.href;
		if(/\/$/.test(href)) {
			window.location.href = href.substring(0,href.length-1);
			return;
		}
		var ua = navigator.userAgent;
		var type = '_default';
		var inApp = true;
		var { pays } = this.props;
		if(this.props.match.params.type!==undefined) {
			type = this.props.match.params.type;
			return <QRCard {...pays[type]}/>
		}
		if(/MicroMessenger/.test(ua)) {
			type = 'wx';
		}else if(/AlipayClient/.test(ua)) {
			type = 'ali';
		}else if(/QQ\//.test(ua)) {
			type = 'qq';
		}else{
			type = this.props.match.params.type?this.props.match.params.type:'_default';
			inApp = false;
		}
		if(pays[type].action==='jump' && inApp) {
			window.location.href = pays[type].url;
			return;
		}
		return <QRCard {...pays[type]}/>
	}

}

export default connect((state)=>{return {pays:state.Data.Pay}})(Pay);
