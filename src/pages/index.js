import { Component } from 'react';
import { connect } from 'dva';
import { Row, Col } from 'antd';
import router from 'umi/router';
import Card from '../components/Card';
import AppIcon from '../components/AppIcon';
import AppDock from '../components/AppDock';

class Index extends Component {
	render() {
		var { pay, friend } = this.props.data;
		var pays = new Array();
		var friends = new Array();
		var tmp = new Array();
		var count = 0;
		var Jump = (type,name)=>{
			var n = '/'+name;
			if(name=='_default'){
				n = '';
			}
			return ()=>router.push('/'+type+n);
		};
		for(let i in pay){
			tmp.push(<Col span={6} onClick={Jump('Pay',i)}><AppIcon name={pay[i].name} icon={pay[i].icon} color={pay[i].color}/></Col>);
			count++;
			if(tmp.length%4==0){
				pays.push(<Row>{tmp}</Row>);
				tmp = new Array();
			}
		}
		pays.push(<Row>{tmp}</Row>);
		count = 0;
		tmp = new Array();
		for(let i in friend){
			tmp.push(<Col span={6} onClick={Jump('Friend',i)}><AppIcon name={friend[i].name} icon={friend[i].icon} color={friend[i].color}/></Col>);
			count++;
			if(tmp.length%4==0){
				friends.push(<Row>{tmp}</Row>);
				tmp = new Array();
			}
		}
		friends.push(<Row>{tmp}</Row>);
		return (
			<div>
				<h1>OneQR</h1>
				<AppDock type='Pay'/>
				<AppDock type='Friend'/>
			</div>
		);
	}
}

export default connect((state)=>{return {data:state.Data}})(Index);
