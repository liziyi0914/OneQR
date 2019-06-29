import React,{ Component } from 'react';
import { connect } from 'dva';
import QRCard from '../../components/QRCard';

class Friend extends Component {

/*	pays = {
		_default: {
			name: '好友码',
			color: '#FF9C00',
			icon: 'user',
			type: 'qr',
			url: window.location.href,
			text: '打开微信、QQ、支付宝、网易云音乐、微博、知乎、易信扫一扫加好友'
		},
		ali: {
			name: '支付宝',
			color: '#1B82D1',
			icon: 'alipay',
			type: 'jump',
			url: 'https://qr.alipay.com/a7x03590c3e8evvpsvyrb1e',
			text: '打开支付宝扫一扫加好友'
		},
		wx: {
			name: '微信',
			color: '#2f9833',
			icon: 'wechat',
			type: 'qr',
			url: 'https://u.wechat.com/MAw8J3Ub3MgtsA8msEBj7io',
			text: '打开微信扫一扫加好友'
		},
		qq: {
			name: 'QQ',
			color: '#12B7F5',
			icon: 'qq',
			type: 'qr',
			url: 'https://qm.qq.com/cgi-bin/qm/qr?k=0M_MKHCa3DQ6fYvq9D4lXR9blhzHOFo-',
			text: '打开QQ扫一扫加好友'
		},
		netease: {
			name: '网易云音乐',
			color: '#E60026',
			icon: 'user',
			type: 'jump',
			url: 'https://m.music.163.com/m/applink/?scheme=orpheus%3A%2F%2Fuser%2F512939924&go=1&res=1',
			text: '打开网易云音乐扫一扫加好友'
		},
		weibo: {
			name: '微博',
			color: '#E6162D',
			icon: 'weibo',
			type: 'jump',
			url: 'http://weibo.cn/qr/userinfo?uid=1909147842',
			text: '打开微博扫一扫加好友'
		},
		zhihu: {
			name: '知乎',
			color: '#0084FF',
			icon: 'zhihu',
			type: 'jump',
			url: 'http://s.zhihu.com/BM0e1',
			text: '打开知乎扫一扫加好友'
		},
		yixin: {
			name: '易信',
			color: '#08D3AB',
			icon: 'user',
			type: 'jump',
			url: 'http://yixin.im/p/NDA0ODEzMS00MDQ4MTMxLTEzNzc1MDExNjQ=',
			text: '打开易信扫一扫加好友'
		}
	}
*/
	render() {
		var href = window.location.href;
		if(/\/$/.test(href)) {
			window.location.href = href.substring(0,href.length-1);
			return;
		}
		var ua = navigator.userAgent;
		var type = '_default';
		var inApp = true;
		var { friends } = this.props;
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
		if(friends[type].type==='jump' && inApp) {
			window.location.href = friends[type].url;
			return;
		}
		return <QRCard {...friends[type]}/>
	}

}

export default connect((state)=>{return {friends:state.Data.friend}})(Friend);
