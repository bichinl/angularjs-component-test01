angular
	.module('App')
	.component('ptModal', PTModalComponent() );

function PTModalComponent() {
	var component = {
		templateUrl: 'js/components/pt-modal/pt-modal.component.html',
		css: 'js/components/pt-modal/pt-modal.component.css',
		bindings: {
			title: '=',
			showModal: '=',
			modalSize: '@'
		},
		controller: PTModalComponentController,
	};

	return component;

	function PTModalComponentController(){
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

