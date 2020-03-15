import Vue from 'vue'
import Router from 'vue-router'
import index from '@/views/index'



// 概览

// const Foo = () => import('./Foo.vue')

// 订单数据分析
// import overviewOrderForm from '@/views/overview/orderForm'
const overviewOrderForm = () => import('@/views/overview/orderForm')

// 防伪数据分析
// import overviewUser from '@/views/overview/user'
const overviewUser = () => import('@/views/overview/user')

// 赋码印刷

// 生码规则
import printingRawCodeRule from '@/views/printing/rawCode/rule'
import printingRawCodeRuleAdd from '@/views/printing/rawCode/ruleAdd'
// 生码订单
import printingRawCodeOrde from '@/views/printing/rawCode/order'
import printingRawCodeOrdeAdd from '@/views/printing/rawCode/orderAdd'

// 生产管理(测试用)
import product from '@/views/product/product'
import productVuex from '@/views/product/productVuex'
import study1 from '@/views/product/study1'
import study2 from '@/views/product/study2'


// 路由学习
// import routerStudy1 from '@/views/product/routerStudy/routerStudy1'
// import router1 from '@/views/product/routerStudy/router1'
// import router2 from '@/views/product/routerStudy/router2'
// 路由懒加载写法
const routerStudy1 = () => import('@/views/product/routerStudy/routerStudy1')
const router1 = () => import('@/views/product/routerStudy/router1')
const router2 = () => import('@/views/product/routerStudy/router2')

// es6学习
const es6Study1 = () => import('@/views/es6Study/study1')

// 命名视图
import namedView from '@/views/product/routerStudy/namedView'
import namedViewChild1 from '@/views/product/routerStudy/namedViewChild1'
import namedViewChild2 from '@/views/product/routerStudy/namedViewChild2'
import namedViewChild3 from '@/views/product/routerStudy/namedViewChild3'

// 手机页面设置
import mobileAntiFake from '@/views/mobile/antiFake'


// 基础设置
//企业管理
import basicsFirmManage from '@/views/basics/firmManage'
//工厂管理
import basicsFactoryManage from '@/views/basics/factoryManage'
//客户管理
import basicsClient from '@/views/basics/client'

// 404
import notfind404 from '@/views/404'

Vue.use(Router)

export default new Router({
	routes: [
		{
			path: '/',
			name: 'index',
			component: index,
			meta: {
				title: '首页'
			},
		},
		{
			path: '/overview/orderForm',
			name: 'overviewOrderForm',
			component: overviewOrderForm,
			meta: {
				title: '订单数据分析'
			},
			// 路由独享的守卫
			// 可以在路由配置上直接定义 beforeEnter 守卫：
			beforeEnter: (to, from, next) => {
				next(
					{
						query: { redirect: "我是迪迪"}
					}
				)
				
			}
		},
		{
			path: '/overview/user',
			name: 'overviewUser',
			component: overviewUser,
			meta: {
				title: '防伪数据分析'
			},
		},
		{
			path: '/printing/rawCode/rule',
			name: 'printingRawCodeRule',
			component: printingRawCodeRule,
			props: true,
			value: "100",
			meta: {
				title: '生码规则'
			}
		},
		{
			path: '/printing/rawCode/ruleAdd/:num',
			name: 'printingRawCodeRuleAdd',
			component: printingRawCodeRuleAdd,
			meta: {
				title: '新增客户生码规则'
			},
		},

		{
			path: '/printing/rawCode/orde',
			name: 'printingRawCodeOrde',
			component: printingRawCodeOrde,
			meta: {
				title: '生码订单'
			},
		},
		{
			path: '/printing/rawCode/orderAdd/:num',
			name: 'printingRawCodeOrdeAdd',
			component: printingRawCodeOrdeAdd,
			meta: {
				title: '新增生码订单'
			},
		},
		{
			path: '/product/product',
			name: 'product',
			component: product,
			meta: {
				title: '普通组件通信'
			},
		},
		{
			path: '/product/productVuex',
			name: 'productVuex',
			component: productVuex,
			meta: {
				title: 'vuex组件通信'
			},
		},
		{
			path: '/product/study1',
			name: 'study1',
			component: study1,
			meta: {
				title: 'vue学习1'
			},
		},
		{
			path: '/product/study2',
			name: 'study2',
			component: study2,
			meta: {
				title: 'vue学习2'
			},
		},
		{
			path: '/product/routerStudy/routerStudy1',
			// https://blog.csdn.net/weixin_39015132/article/details/83614689
			// 这是因为我们为一级路由设置了默认的子路由，实际是访问了设置的子路由，所以把一级路由的name属性去掉即可。
			// name: 'routerStudy1',
			component: routerStudy1,
			meta: {
				title: '学习路由1',
			},
			children: [
				// 默认渲染一些东西, 可以提供一个空的子路由
				{
					path: '',
					// https://blog.csdn.net/weixin_39015132/article/details/83614689
					// name要保证唯一性(页面上只能有一个)
					// name: 'router1',
					component: router1,
					meta: {
						title: '路由学习1',
						index: 0,
					},
				},
				{
					path: 'router1',
					name: 'router1',
					component: router1,
					meta: {
						title: '路由学习1',
						index: 0,
					},
				},
				{
					path: 'router2/:id',
					name: 'router2',
					component: router2,
					// 使用 props 将组件和路由解耦：
					props: true,
					meta: {
						title: '路由学习2',
						index: 1,
					},
				},
			],
		},


		// 命名视图学习
		{
			path: '/product/routerStudy/namedView',
			// 别名
			alias: '/product/routerStudy/lelelele',
			// name: 'namedView',
			component: namedView,
			children: [
				// 默认渲染一些东西, 可以提供一个空的子路由
				{
					path: '',
					// 重定向(一共三种方法)
					// 1.直接写路径
					// redirect: '/',
					// 2.重定向也可以是一个命名的路由
					// redirect: {name: 'index'},
					// 3.可以使一个方法,动态返回重定向目标
					//  redirect: to => {
					// 	// 方法接收 目标路由 作为参数
					// 	// return 重定向的 字符串路径/路径对象
					// 	return '/'
					//   },
					components: {
						default: namedViewChild1,
						namedViewChild2: namedViewChild2,
						namedViewChild3: namedViewChild3
					},
					meta: {
						title: '命名视图1',
					},
				},
				{
					path: 'namedViewChild1',
					components: {
						default: namedViewChild1,
						namedViewChild2: namedViewChild2,
						namedViewChild3: namedViewChild3
					},
					meta: {
						title: '命名视图1',
					},
				},
				{
					path: 'namedViewChild2',
					name: 'namedViewChild2',
					components: {
						default: namedViewChild2,
						namedViewChild1: namedViewChild1,
						namedViewChild3: namedViewChild3
					},
					meta: {
						title: '命名视图2',
					},
				},
				{
					path: 'namedViewChild3',
					name: 'namedViewChild3',
					components: {
						default:namedViewChild3,
						namedViewChild1: namedViewChild1,
						namedViewChild2: namedViewChild2,
					},
					meta: {
						title: '命名视图3',
					},
				},
			],
		},

		// es6学习
		{
			path: '/es6Study/study1',
			name: 'es6Study1',
			component: es6Study1,
			meta: {
				title: 'es6学习1'
			},
		},

		{
			path: '/mobile/antiFake',
			name: 'mobileAntiFake',
			component: mobileAntiFake,
			meta: {
				title: '防伪页面管理'
			},
		},
		{
			path: '/basics/firmManage',
			name: 'basicsFirmManage',
			component: basicsFirmManage,
			meta: {
				title: '企业管理'
			},
		},
		{
			path: '/basics/factoryManage',
			name: 'basicsFactoryManage',
			component: basicsFactoryManage,
			meta: {
				title: '工厂管理'
			},
		},
		{
			path: '/basics/client',
			name: 'basicsClient',
			component: basicsClient,
			meta: {
				title: '客户管理'
			},
		},

		{
			path: '*',
			name: 'notfind404',
			component: notfind404,
			meta: {
				title: '404页面'
			},
		},



	],
	mode: "history"
})
