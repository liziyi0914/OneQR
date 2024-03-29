import { Component } from 'react';
import {
	Icon
} from 'antd';                                               

class AppIcon extends Component {

	IconFont = Icon.createFromIconfontCN({
		  scriptUrl: '//at.alicdn.com/t/font_1270946_8s3tsasa8w4.js',
	});

	render() {
		var { icon, name, color} = this.props;
		var textColor = this.props.textColor || 'white';
		var IconF = this.IconFont;
		return (
<div style={{textAlign: 'center',margin: '0.15em'}} {...this.props}>
	<IconF type={'icon-'+icon} style={{fontSize:'1.5em',color:textColor,background:color,padding:'0.25em',borderRadius:'1.5em',filter: 'drop-shadow(0 2px	2px #AAAAAA)',marginBottom:'0.05em'}}/>
	<div style={{fontSize:'0.85em'}}>{name}</div>
</div>
		);
	}
}

export default AppIcon;
