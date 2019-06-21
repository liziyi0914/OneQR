import { Component } from 'react';
import {
	Icon
} from 'antd';
import styles from './QRCard.css';

class QRCard extends Component {

	static defaultProps = {
			name: '支付宝',
			color: '#1B82D1',
			icon: 'alipay',
			type: 'qr',
			url: 'https://baidu.com/',
			text: '打开支付宝扫一扫支付'
	};

	render() {
//		alert(navigator.userAgent)
		var { icon,color,name,text,url } = this.props;
		return (
		<div className={styles.qrcard} style={{height:'100%'}}>
			<div className={styles.qrcard_title} style={{height:'15%'}}>
				<Icon type={icon} style={{fontSize:36,color: 'white',backgroundColor:color,padding:'0.5em',borderRadius:'1.5em'}}/>
				<div style={{fontSize:24,fontWeight:'bold'}}>{name}</div>
			</div>
			<div className={styles.qrcard_content} style={{backgroundColor:color,height:'85%'}}>
				<img src={"https://api.qrserver.com/v1/create-qr-code/?data="+encodeURIComponent(url)+"&size=250x250"} alt="" title="" style={{backgroundColor:'white',margin:'1.25em',padding:'1em'}} />
				<div style={{color:'white'}}>{text}</div>
			</div>
		</div>);
	}

}

export default QRCard;
