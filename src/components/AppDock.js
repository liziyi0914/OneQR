import { Component } from 'react';
import { connect } from 'dva';
import { Row, Col } from 'antd';
import router from 'umi/router';
import Card from './Card';
import AppIcon from './AppIcon';

class AppDock extends Component {

	static defaultProps = {
		showTitle: true
	};

	render() {
		var { type } = this.props;
		var apps = this.props.data[type];
		var arrs = [];
		var tmp = [];
		var Jump = (name)=>{
			var n = '/'+name;
			if(name==='_default'){
				n = '';
			}
			return ()=>router.push('/'+type+n);
		};
		for(let i in apps){
			tmp.push(<Col span={6} onClick={Jump(i)}><AppIcon name={apps[i].name} icon={apps[i].icon} color={apps[i].color}/></Col>);
			if(tmp.length%4===0){
				arrs.push(<Row>{tmp}</Row>);
				tmp = [];
			}
		}
		arrs.push(<Row>{tmp}</Row>);
		return (
				<Card>
					{this.props.showTitle?<h1>{type}</h1>:null}
					{arrs}
				</Card>
		);
	}
}

export default connect((state)=>{return {data:state.Data}})(AppDock);
