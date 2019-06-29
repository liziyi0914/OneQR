import styles from './Card.css';
import { Component } from 'react';

export default class extends Component {
	render() {
		return (
<div className={styles.border}>
	{this.props.children}
</div>
		);
	}
}
