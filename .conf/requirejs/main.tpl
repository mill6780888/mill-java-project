require.config({

	paths:<%-JSON.stringify(paths)%>,
	shim:<%-JSON.stringify(shim)%>,
	map:<%-JSON.stringify(map)%>
});

require(<%-JSON.stringify(require)%>,function  (boot,angular) {
	angular.bootstrap(document,['<%=appName%>']);
	
});