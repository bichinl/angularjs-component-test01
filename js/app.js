
angular.module("App", [])
	.component("test01", {
		template: `
			<h1>Test Component</h1>
			<h2>Some info about this test component</h2>
			<p>Dynamic data: {{title}}</p>
		`,
		bindings: {title: '@'}
	});
