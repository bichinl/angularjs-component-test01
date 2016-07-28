angular
	.module("App", ['angularCSS'])
	.controller('MainController', MainController);

function MainController() {
	var vm = this;
	vm.mainTitle = 'Hello from MainController';
	vm.showModal = false;
	vm.modalSize = 'small';
}
