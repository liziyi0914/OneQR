import { Component } from 'react';
import {
	Icon
} from 'antd';                                               

class AppIcon extends Component {

	    render() {
			var { icon, name, color} = this.props;
			return (
<div style={{textAlign: 'center'}}>
	<Icon type={icon} style={{fontSize:'1.5em',color:'white',backgroundColor:color,padding:'0.25em',borderRadius:'1.5em'}}/>
	<div style={{fontSize:'1em',fontWeight:'bold'}}>{name}</div>
</div>
				);
		}
}

export default AppIcon;
