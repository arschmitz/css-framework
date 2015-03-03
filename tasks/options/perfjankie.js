module.exports = {
	options: {
		suite: "perfSlides - Performance Analysis"
	},
	"comparison": {
		options: {
			repeat: 2,
			selenium: "ondemand.saucelabs.com",
			browsers: "chrome",
			couch: {
				server: "http://localhost:5984",
				database: "css-performance",
				updateSite: true
			},
			urls: [
				"http://localhost:4200/framework/foundation/component/button/count/1000/" +
					"foundation:button",
				"http://localhost:4200/framework/jquery-mobile/component/button/count/1000/" +
					"jquery-mobile:button",
				"http://localhost:4200/framework/jquery-ui/component/button/count/1000/" +
					"jquery-ui:button",
				"http://localhost:4200/framework/jquery-ui-1-12/component/button/count/1000/" +
					"jquery-ui-1-12:button",
				"http://localhost:4200/framework/bootstrap/component/button/count/1000/" +
					"bootstrap:button"
			]
		}
	}
}