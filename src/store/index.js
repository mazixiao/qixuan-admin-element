
import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);



const store = new Vuex.Store({
    state: {
        count: 1,
        count1: 100,
    },
    // 类似vue的computed
    getters: {
        // getStateCount: function(state) {
        //     return state.count + 1;
        // }
        getStateCount: state => {
            return state.count + 1;
        },
        getStateCount1: state => {
            return state.count1 + 1;
        }

    },
    // 类似于事件,更改Vuex的store中的状态的唯一方法
    // 向 store.commit 传入额外的参数，即 mutation 的 载荷（payload）,比如下面的 n
    // 在大多数情况下，载荷应该是一个对象
    // mutation 都是同步事务
    mutations: {
        add(state, n) {
            state.count = state.count + n.num;
        },
        reduce(state) {
            state.count = state.count - 1;
        },

        add1(state) {
            state.count1 = state.count1 + 1;
        },
        reduce1(state) {
            state.count1 = state.count1 - 1;
        }
    },
    // Action 类似于 mutation，不同在于：
    // Action 提交的是 mutation，而不是直接变更状态。
    // Action 可以包含任意异步操作。
    actions: {
        add1(context) {
            context.commit("add1");
        },
        reduce1(context) {
            context.commit("reduce1");
        }

    }


})


export default store;