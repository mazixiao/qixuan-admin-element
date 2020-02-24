import Vue from 'vue'
import Router from 'vue-router'
import index from '@/views/index'



// 概览

// 订单数据分析
import overviewOrderForm from '@/views/overview/orderForm'
// 防伪数据分析
import overviewUser from '@/views/overview/user'


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

// 手机页面设置
import mobileAntiFake from '@/views/mobile/antiFake'


// 基础设置
//企业管理
import basicsFirmManage from '@/views/basics/firmManage'
//工厂管理
import basicsFactoryManage from '@/views/basics/factoryManage'
//客户管理
import basicsClient from '@/views/basics/client'

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


	],
	mode: "history"
})
