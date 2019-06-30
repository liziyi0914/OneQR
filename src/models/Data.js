
export default {
	namespace: 'Data',
	state: {
		pay: {},
		friend: {}
	},
	reducers: {
		updateURL(state){
			state.Pay._default.url = window.location.href;
			state.Friend._default.url = window.location.href;
			return state;
		}
	},
	effects: {
	}
};
