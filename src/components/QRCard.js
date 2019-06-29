import { Component } from 'react';
import {
	Icon
} from 'antd';
import AppIcon from './AppIcon';
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
		var { icon,color,name,text,url } = this.props;
		return (
		<div className={styles.qrcard} style={{height:'100%',backgroundColor:color}}>
			<div className={styles.qrcard_title} style={{height:'5.5em',fontSize:24,backgroundColor:'white'}}>
				<AppIcon name={name} icon={icon} color={color}/>
			</div>
			<div className={styles.qrcard_content}>
				<img src={"https://api.qrserver.com/v1/create-qr-code/?data="+encodeURIComponent(url)+"&size=250x250"} alt="" title="" style={{backgroundColor:'white',margin:'1.25em',padding:'1em'}} />
				<div style={{color:'white'}}>{text}</div>
			</div>
		</div>);
	}

}

export default QRCard;
