//存放requirejs的共有依赖项
module.exports={
	require: [
			"/main/indexCtrl.js",
			

	],
	paths:{
		

	},
	shim:{
		
	},
	map:{//1,引入require-css
		'*':{
			'css':'/require-css/css.js'
		}
	},
	appName:"indexApp"
	

}
