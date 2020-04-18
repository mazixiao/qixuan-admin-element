
import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);


// 东西需要state
// 缓存一动看getters
// 同步需看mutations
// 异步找打actions


const store = new Vuex.Store({
    state: {
        count: 1,
        count1: 100,
        count2: 100,
        count3: 100,
        count4: 100,
        text1: "我是使用vuex传过来的静态值",
        showGreen: false,
        number: 10,

        // 是否缩放导航宽度(默认缩放)
        isCollapse: false

    },
    // 类似vue的computed(计算属性)
    // getter 的返回值会根据它的依赖被缓存起来，且只有当它的依赖值发生了改变才会被重新计算。
    getters: {
        // 写法1
        // getStateCount: function(state) {
        //     return state.count + 1;
        // }
        // 写法2
        // getStateCount: state => {
        //     return state.count1 + 1000;
        // },

        // 写法3
        // Getter 也可以接受其他 getter 作为第二个参数
        // getStateCount: (state, getters) => state.count1 + getters.getStateCount1,
        getStateCount: (state) => state.count1 + 2000,

        getStateCount1: state => {
            return state.count1 + 1;
        }

    },
    // 类似于事件,更改Vuex的store中的状态的唯一方法
    // 向 store.commit 传入额外的参数，即 mutation 的 载荷（payload）,比如下面的 n
    // 在大多数情况下，载荷应该是一个对象
    // mutation 都是同步事务
    mutations: {
        count2Fun(state, n) {
            state.count2 = state.count2 + n.num;
        },
        reduce(state) {
            state.count = state.count - 1;
        },
        add(state) {
            state.count1 = state.count1 + 1;
        },

        add1(state) {
            state.count3 = state.count3 + 1;
        },
        reduce1(state, n) {
            state.count4 = state.count4 - n.num;
        },
        addNum(state) {
            state.count++; 
            state.showGreen = !state.showGreen;
        },
        subNum(state) {
            state.count--;
            state.showGreen = !state.showGreen;
        },
        collapseStatus(state) {
            // this.collapseBtnClick = this.isCollapse;
            state.isCollapse = !state.isCollapse;
            // if (state.isCollapse) {
            //   document.querySelector(".content").style.paddingLeft = "100px";
            // } else {
            //   document.querySelector(".content").style.paddingLeft = "220px";
            // }
          },

    },
    // Action 类似于 mutation，不同在于：
    // Action 提交的是 mutation，而不是直接变更状态。
    // Action 可以包含任意异步操作。
    actions: {
        // add1(context) {
        //     context.commit("add1");
        // },
        // reduce1(context) {
        //     context.commit("reduce1");
        // }

        // 上面注释的简写
        add1({ commit }) {
            commit("add1")
        },
        reduce1({commit}) {
            // commit("reduce1")
            commit({
                type: "reduce1",
                num: this.state.number,
            })

        }


    }


})


export default store;