
export const dva = {
	config: {
		onError(err) {
			err.preventDefault();
			console.error(err.message);
		},
		initialState: {
			Data:{
				Pay: {
					_default: {
						name: '付款码',
						type: 'Pay',
						color: '#FF9C00',
						icon: 'rmb',
						action: 'qr',
						url: window.location.href,
						text: '打开支付宝、微信支付、QQ钱包扫一扫支付'
					},
					ali: {
						name: '支付宝',
						type: 'Pay',
						color: '#1B82D1',
						icon: 'alipay',
						action: 'jump',
						url: 'https://qr.alipay.com/fkx01584it3usfwqchi4tde',
						text: '打开支付宝扫一扫支付'
					},
					wx: {
						name: '微信支付',
						type: 'Pay',
						color: '#2f9833',
						icon: 'wechat',
						action: 'qr',
						url: 'wxp://f2f0kZPKzqOiF9dl2-92kt6S3KAhemrBiAyV',
						text: '打开微信扫一扫支付'
					},
					qq: {
						name: 'QQ支付',
						type: 'Pay',
						color: '#12B7F5',
						icon: 'qq',
						action: 'qr',
						url: 'https://i.qianbao.qq.com/wallet/sqrcode.htm?m=tenpay&f=wallet&a=1&ac=860167D064CA02EB75DAA45709080989BD2828AE0C889B951E6BCC8C78BDD045&u=138029887&n=liziyi0914',
						text: '打开QQ扫一扫支付'
					},
					unionpay: {
						name: '银联云闪付',
						type: 'Pay',
						color: '#DE3232',
						icon: 'unionpay',
						action: 'qr',
						url: 'https://qr.95516.com/00010000/01213270247009520084852952021972',
						text: '打开银联云闪付扫一扫支付'
					},
					cm: {
						name: '和包支付',
						type: 'Pay',
						color: '#D41370',
						icon: 'cmcc',
						action: 'qr',
						url: 'https://p.10086.cn/d?p=0E447593A308C10A9E2C604A52FC5A2E5C5769E7326E37A0D98D2FD07C985D87',
						text: '打开和包扫一扫支付'
					},
					wo: {
						name: '沃支付',                                                         type: 'Pay',
						color: '#F29700',
						icon: 'unicom',
						action: 'qr',
						url: 'http://www.unicompayment.com/externalJump/1002/0wTYxvkga7RGXi6Qs6n1xhqpN8D8lQv1YxZMHb8iBD1RKH6ConqRJ0xoqhKfEKKAD6q4b1taPdbk4UtJdElClQ',
						text: '打开沃支付扫一扫支付'
					},
					yi: {
						name: '翼支付',
						type: 'Pay',
						color: '#ED4552',
						icon: 'telecom',
						action: 'qr',
						url: 'http://m.bestpay.com.cn/#/apa/lz4opAWXk6aYD2XCm0face2face',
						text: '打开翼支付扫一扫支付'
					},
					btc: {
						name: 'BTC',
						type: 'Pay',
						color: '#F7931B',
						icon: 'BTC',
						action: 'ecoin',
						url: '18BQg3PKamaEybYG9wk3kfyQx1VtUPhTAc',
						text: ''
					},
					usdt: {
						name: 'USDT',
						type: 'Pay',
						color: '#21A077',
						icon: 'USDT',
						action: 'ecoin',
						url: '18BQg3PKamaEybYG9wk3kfyQx1VtUPhTAc',
						text: ''
					},
					eth: {
						name: 'ETH',
						type: 'Pay',
						color: '#4955B7',
						icon: 'ETH',
						action: 'ecoin',
						url: '0x1af9dbb58d20cca0344f559080cda36f8b1e11dc',
						text: ''
					},
					ltc: {
						name: 'LTC',
						type: 'Pay',
						color: '#A1A2A7',
						icon: 'LTC',
						action: 'ecoin',
						url: 'LTH6ic5GwtMTkRzsQRuZ5Qn4LoipWy3LgN',
						text: ''
					},
					ADA: {
						name: 'ADA',
						type: 'Pay',
						color: '#3368D0',
						icon: 'ADA',
						action: 'ecoin',
						url: 'DdzFFzCqrhsm9Bjc8RTVXdT7mGuMsumEwfJZZLfVtU8PtbCNxcr1UMkNP2ZKBNdQZpATJXxxs3Uf15uxKGd6PoZ5CQXhJFUNQCqwBm5T',
						text: ''
					},
					bch: {
						name: 'BCH',
						type: 'Pay',
						color: '#18BC9A',
						icon: 'BCH',
						action: 'ecoin',
						url: '1MRuPJtn5GwzzVKDpSHn3PFXNyRpNDyHvp',
						text: ''
					},
					trx: {
						name: 'TRX',
						type: 'Pay',
						color: '#C72A35',
						icon: 'TRX',
						action: 'ecoin',
						url: 'TJkEHCZqpZHtLgFsVkR9Ruw6DhPSoy9rAQ',
						text: ''
					},
					atom: {
						name: 'ATOM',
						type: 'Pay',
						color: '#2D2D32',
						icon: 'ATOM',
						action: 'ecoin',
						url: 'cosmos10c6dgvfk4xrlaregnshsf277yxq4pp8wf6ps2m',
						text: ''
					},
					ont: {
						name: 'ONT',
						type: 'Pay',
						color: '#00A7C1',
						icon: 'ONT',
						action: 'ecoin',
						url: 'AFtcnWgCuSbNxSVdFZUNEad5qVHbRiENDy',
						text: ''
					},
					ong: {
						name: 'ONG',
						type: 'Pay',
						color: '#F6F5FB',
						textColor: '#3AAEC2',
						icon: 'ONG',
						action: 'ecoin',
						url: 'AFtcnWgCuSbNxSVdFZUNEad5qVHbRiENDy',
						text: ''
					},
					bsv: {
						name: 'BSV',
						type: 'Pay',
						color: '#E7B321',
						icon: 'BSV',
						action: 'ecoin',
						url: '1MRuPJtn5GwzzVKDpSHn3PFXNyRpNDyHvp',
						text: ''
					},
					etc: {
						name: 'ETC',
						type: 'Pay',
						color: '#01C853',
						icon: 'ETC',
						action: 'ecoin',
						url: '0x41709eb24a6f986ffc79a8810139ed5095d0d4d4',
						text: ''
						},
					ht: {
						name: 'HT',
						type: 'Pay',
						color: '#38416C',
						icon: 'HT',
						action: 'ecoin',
						url: '0x1af9dbb58d20cca0344f559080cda36f8b1e11dc',
						text: ''
					},
				},
				Friend: {
					_default: {
						name: '好友码',
						type: 'Friend',
						color: '#FF9C00',
						icon: 'user',
						action: 'qr',
						url: window.location.href,
						text: '打开微信、QQ、支付宝、网易云音乐、微博、知乎、易信扫一扫加好友'
					},
					ali: {
						name: '支付宝',
						type: 'Friend',
						color: '#1B82D1',
						icon: 'alipay',
						action: 'jump',
						url: 'https://qr.alipay.com/a7x03590c3e8evvpsvyrb1e',
						text: '打开支付宝扫一扫加好友'
					},
					wx: {
						name: '微信',
						type: 'Friend',
			            color: '#2f9833',
						icon: 'wechat',
						action: 'qr',
						url: 'https://u.wechat.com/MAw8J3Ub3MgtsA8msEBj7io',
						text: '打开微信扫一扫加好友'
					},
					qq: {
						name: 'QQ',
						type: 'Friend',
			            color: '#12B7F5',
						icon: 'qq',
			            action: 'qr',
						url: 'https://qm.qq.com/cgi-bin/qm/qr?k=0M_MKHCa3DQ6fYvq9D4lXR9blhzHOFo-',
						text: '打开QQ扫一扫加好友'
					},
					netease: {
						name: '网易云音乐',
						type: 'Friend',
						color: '#E60026',
						icon: 'netease',
						action: 'jump',
						url: 'https://m.music.163.com/m/applink/?scheme=orpheus%3A%2F%2Fuser%2F512939924&go=1&res=1',
						text: '打开网易云音乐扫一扫加好友'
					},
					weibo: {
						name: '微博',
						type: 'Friend',
						color: '#E6162D',
						icon: 'weibo',
						action: 'jump',
						url: 'http://weibo.cn/qr/userinfo?uid=1909147842',
						text: '打开微博扫一扫加好友'
					},
					zhihu: {
						name: '知乎',
						type: 'Friend',
						color: '#0084FF',
						icon: 'zhihu',
						action: 'jump',
						url: 'http://s.zhihu.com/BM0e1',
						text: '打开知乎扫一扫加好友'
					},
					bilibili: {
						name: '哔哩哔哩',
						type: 'Friend',
						color: '#FD7299',
						icon: 'bilibili',
						action: 'qr',
						url: 'http://space.bilibili.com/8355003',
						text: '打开哔哩哔哩扫一扫加好友'
					},
					coolapk: {
						name: '酷安',
						type: 'Friend',
						color: '#109D58',
						icon: 'coolapk',
						action: 'qr',
						url: 'https://www.coolapk.com/u/678803?from=qr',
						text: '打开基佬安扫一扫加好友'
					},
					blizzard: {
						name: '暴雪战网',
						type: 'Friend',
						color: '#2E3B5D',
						icon: 'blizzard',
						action: 'qr',
						url: 'lzy2002#51996',
						text: '打开暴雪战网扫一扫加好友'
					},
					yixin: {
						name: '易信',
						type: 'Friend',
						color: '#08D3AB',
						icon: 'yixin',
						action: 'jump',
						url: 'http://yixin.im/p/NDA0ODEzMS00MDQ4MTMxLTEzNzc1MDExNjQ=',
						text: '打开易信扫一扫加好友'
					},
					twitter: {
						name: 'Twitter',
						type: 'Friend',
						color: '#1DA1F3',
						icon: 'twitter',
						action: 'img',
						url: '//qr.liziyi0914.com/img/twitter.png',
						text: '打开Twitter扫一扫加好友'
					},
					fb: {
						name: 'Facebook',
						type: 'Friend',
						color: '#4167B2',
						icon: 'facebook',
						action: 'img',
						url: '//qr.liziyi0914.com/img/facebook.png',
						text: '打开Facebook扫一扫加好友'
					},
					ins: {
						name: 'Instagram',
						type: 'Friend',
						color: 'linear-gradient(to bottom left, #A207BA , #FE8C33)',
						icon: 'instagram',
						action: 'img',
						url: '//qr.liziyi0914.com/img/instagram.png',
						text: '打开Instagram扫一扫加好友'
					},
					snapchat: {
						name: 'Snapchat',
						type: 'Friend',
						color: '#FFFC00',
						icon: 'snapchat',
						action: 'img',
						url: '//qr.liziyi0914.com/img/snapchat.png',
						text: '打开Snapchat扫一扫加好友'
					},
					line: {
						name: 'Line',
						type: 'Friend',
						color: '#4ECD00',
						icon: 'line',
						action: 'qr',
						url: 'https://line.me/ti/p/Fn14z7lVIq',
						text: '打开Line扫一扫加好友'
					}
				}
			}
		}
	},
};
