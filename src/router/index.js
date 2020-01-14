import Vue from 'vue'
import Router from 'vue-router'
import index from '@/views/index'


// 赋码印刷
import printingRawCodeRule from '@/views/printing/rawCode/rule'


Vue.use(Router)

export default new Router({
	routes: [
		// {
		// 	path: '/',
		// 	name: 'index',
		// 	component: index,
		// 	meta: {
		// 		title: '首页'
		// 	},
		// }
		{
			path: '/printing/rawCode/rule',
			name: 'printingRawCodeRule',
			component: printingRawCodeRule,
			meta: {
				title: '首页'
			},
		}

		


	]
})
