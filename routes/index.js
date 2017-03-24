var express = require('express');
var mutil = require('mill-n-utils');
var path = require('path');
var main = require('../.conf/requirejs/common.js');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express',appName:'index' });
});

router.get('/main.js/:appName', function(req, res, next) {
	// 所有关于requirejs的

	let tpl=mutil.fs.read(path.resolve(__dirname,"../",".conf/requirejs/main.tpl"));
	let appnameLocal=req.params.appName.replace(/.js/g,"");
	let indexConf=require('../.conf/requirejs/'+appnameLocal+'.js');
	
	try{
		for (var i in indexConf) {
			if(Array.isArray(main[i])&&Array.isArray(indexConf[i])){
				main[i]=main[i].concat(indexConf[i]);
				continue;
			}
			if(main[i])
			Object.assign(main[i],indexConf[i]);
			else main[i]=indexConf[i];

		}
	}catch(err){
		console.log(err);
	}

	
	let result=mutil.ejs.render(tpl,main);

	console.log(result);
	res.send(result);
  // res.render('index', { title: 'Mill' });
});

module.exports = router;
