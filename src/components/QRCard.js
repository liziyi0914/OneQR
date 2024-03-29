import { Component } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { Button, message } from 'antd';
import Animate from 'rc-animate';
import AppIcon from './AppIcon';
import AppDock from './AppDock';
import Card from './Card';
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

	state = {
		showMenu: false
	};

	toggleMenu = () => {
		this.setState({
			showMenu: !this.state.showMenu
		});
	}

	closeMenu = () => {
		if(this.state.showMenu){
			this.setState({
				showMenu: false
			});
		}
	}

	render() {
		var { icon,color,name,text,url,type,action } = this.props;
		var textColor = this.props.textColor || 'white';
		var appDock = (
			<div style={{position:'absolute',zIndex:99,right:'1em',left:'1em'}}>
				<AppDock type={type} showTitle={false}/>
			</div>
		);
		var imgSrc = action==='img'?url:"https://api.qrserver.com/v1/create-qr-code/?data="+encodeURIComponent(url)+"&size=250x250";
		return (
		<div className={styles.qrcard} style={{background:color}} onClick={this.closeMenu}>
			<div className={styles.qrcard_title}>
				<AppIcon name={name} icon={icon} color={color} textColor={textColor} onClick={this.toggleMenu}/>
				<Animate
			          transitionName="fade"
			          transitionAppear
			        >
				{this.state.showMenu?appDock:null}
				</Animate>
			</div>
			<div className={styles.qrcard_content}>
				<img src={imgSrc} alt="" title="" style={action==='img'?null:{background:'white'}} className={styles.qrcode_img}/>
			{action==='ecoin'?<Card>{url}<CopyToClipboard text={url} onCopy={()=>{message.success('复制成功')}}><Button type="link" shape="circle" icon="copy"/></CopyToClipboard></Card>:<div style={{color:'white'}}>{text}</div>}
			</div>
		</div>);
	}

}

export default QRCard;
