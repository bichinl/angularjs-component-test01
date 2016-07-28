angular
	.module('App')
	.component('test01', TestComponent() );

function TestComponent() {
	var component = {
		templateUrl: 'js/components/test01/test01.component.html',
		css: 'js/components/test01/test01.component.css',
		bindings: {title: '='},
		controller: TestComponentController,
	};

	return component;

	function TestComponentController(){
		var vm = this;
		vm.myName = 'Sam';

		// console.log('original binding: ', vm.title);
		// vm.title = 'Change of Title From Component Data Binding';
		// console.log('changed binding: ', vm.title);

		vm.lowerCaseString = lowerCaseString;
		vm.upperCaseString = upperCaseString;

		function lowerCaseString(data) {
			return data.toLowerCase();
		}

		function upperCaseString(data) {
			return data.toUpperCase();
		}

	}

}

