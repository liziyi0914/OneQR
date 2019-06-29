import React,{ Component } from 'react';
import { connect } from 'dva';
import QRCard from '../../components/QRCard';

class Pay extends Component {

/*	pays = {
		_default: {
			name: '付款码',
			color: '#FF9C00',
			icon: 'pay-circle',
			type: 'qr',
			url: window.location.href,
			text: '打开支付宝、微信支付、QQ钱包扫一扫支付'
		},
		ali: {
			name: '支付宝',
			color: '#1B82D1',
			icon: 'alipay',
			type: 'jump',
			url: 'https://qr.alipay.com/fkx01584it3usfwqchi4tde',
			text: '打开支付宝扫一扫支付'
		},
		wx: {
			name: '微信支付',
			color: '#2f9833',
			icon: 'wechat',
			type: 'qr',
			url: 'wxp://f2f0kZPKzqOiF9dl2-92kt6S3KAhemrBiAyV',
			text: '打开微信扫一扫支付'
		},
		qq: {
			name: 'QQ支付',
			color: '#12B7F5',
			icon: 'qq',
			type: 'qr',
			url: 'https://i.qianbao.qq.com/wallet/sqrcode.htm?m=tenpay&f=wallet&a=1&ac=860167D064CA02EB75DAA45709080989BD2828AE0C889B951E6BCC8C78BDD045&u=138029887&n=liziyi0914',
			text: '打开QQ扫一扫支付'
		}
	}*/

	render() {
		var href = window.location.href;
		if(/\/$/.test(href)) {
			window.location.href = href.substring(0,href.length-1);
			return;
		}
		var ua = navigator.userAgent;
		var type = '_default';
		var inApp = true;
		var { pays } = this.props;
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
		if(pays[type].type==='jump' && inApp) {
			window.location.href = pays[type].url;
			return;
		}
		return <QRCard {...pays[type]}/>
	}

}

export default connect((state)=>{return {pays:state.Data.pay}})(Pay);
