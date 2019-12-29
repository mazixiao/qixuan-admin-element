export default {
  name: 'index',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      activeIndex: '1',
      activeIndex2: '1',

      menu: [
      	{
      		value: "1",
      		label: "处理中心"
      	},
      	{
      		value: "2",
      		label: "我的工作台",
      		children: [
      			{
		      		value: "2-1",
		      		label: "选项1"
      			},
      			{
		      		value: "2-2",
		      		label: "选项2"
      			},
      			{
		      		value: "2-3",
		      		label: "选项3",
		      		children: [
		      			{
				      		value: "3-1",
				      		label: "三级选项1"
		      			},
		      			{
				      		value: "3-2",
				      		label: "三级选项2"
		      			},
		      			{
				      		value: "3-3",
				      		label: "三级选项3"
		      			}
		      		]

      			}
      		]
      	},
      	{
      		value: "3",
      		label: "消息中心",
      	},
      	{
      		value: "4",
      		label: "订单管理"
      	}
      ],
		list: [
			{
			  path: "/1",
			  name: "导航一",
			  icon:'el-icon-menu',
			  children: [
			    {
			      path: "/1/1",
			      name: "导航1-1",
			      icon:'el-icon-menu',
			      children: [
			        {
			          path: "/1/1/1",
			          name: "导航1-1-1",
			          icon:'el-icon-menu',
			        },
			        {
			          path: "/1/1/2",
			          name: "导航1-1-2",
			          icon:'el-icon-menu',
			        },
			        {
			          path: "/1/1/3",
			          name: "导航1-1-3",
			          icon:'el-icon-menu',
			        }
			      ]
			    },
			    {
			      path: "/1/2",
			      name: "导航1-2",
			      icon:'el-icon-menu',
			    }
			  ]
			},
			{
			  path: "/2",
			  name: "导航二",
			  icon:'el-icon-menu'
			}
		]




    }
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    }
  }
}