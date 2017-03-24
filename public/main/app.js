define(['angular'],function  (angular) {
	return angular.module('indexApp',["ngRoute","treeControl","ui.grid",
'ui.grid.selection','ui.grid.edit',
            'ui.grid.exporter','ui.grid.pagination','ui.grid.resizeColumns','ui.grid.autoResize'
		]);
});