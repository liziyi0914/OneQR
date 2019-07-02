import { Component } from 'react';
import {
	Icon
} from 'antd';                                               

class AppIcon extends Component {

	IconFont = Icon.createFromIconfontCN({
		  scriptUrl: '//at.alicdn.com/t/font_1270946_94k2k3e0wun.js',
	});

	render() {
		var { icon, name, color} = this.props;
		var IconF = this.IconFont;
		return (
<div style={{textAlign: 'center'}} {...this.props}>
	<IconF type={'icon-'+icon} style={{fontSize:'1.5em',color:'white',backgroundColor:color,padding:'0.25em',borderRadius:'1.5em'}}/>
	<div style={{fontSize:'1em',fontWeight:'bold'}}>{name}</div>
</div>
		);
	}
}

export default AppIcon;
