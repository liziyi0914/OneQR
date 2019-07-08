import React,{ Component } from 'react';
import { connect } from 'dva';
import QRCard from '../../components/QRCard';

class Friend extends Component {

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
		var { friends } = this.props;
		if(this.props.match.params.type!==undefined) {
			type = this.props.match.params.type;
			return <QRCard {...friends[type]}/>
		}
		if(/MicroMessenger/.test(ua)) {
			type = 'wx';
		}else if(/AlipayClient/.test(ua)) {
			type = 'ali';
		}else if(/QQ\//.test(ua)) {
			type = 'qq';
		}else if(/NeteaseMusic/.test(ua)) {
			type = 'netease';
		}else if(/Weibo/.test(ua)) {
			type = 'weibo';
		}else if(/ZhihuHybrid/.test(ua)) {
			type = 'zhihu';
		}else if(/YiXin/.test(ua)) {
			type = 'yixin';
		}else {
			type = this.props.match.params.type?this.props.match.params.type:'_default';
			inApp = false;
		}
		if(friends[type].action==='jump' && inApp) {
			window.location.href = friends[type].url;
			return;
		}
		return <QRCard {...friends[type]}/>
	}

}

export default connect((state)=>{return {friends:state.Data.Friend}})(Friend);
