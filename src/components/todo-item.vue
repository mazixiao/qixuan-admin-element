
<template>
  <li>
    {{titleCon}}
    <el-button type="success" @click="remove">移除</el-button>
  </li>
</template>


<script>
import { mapState, mapGetters, mapMutations, mapActions } from "vuex";

export default {
  name: "todo-item",
  components: {},
  props: {
    titleCon: String
  },
  data() {
    return {};
  },
  computed: {},

  beforeCreate() {},

  created() {},

  beforeMount() {},
  mounted() {
    // 父级 prop 的更新会向下流动到子组件中，但是反过来则不行
    // this.$props.show = false
  },
  beforeUpdate() {},
  updated() {},

  methods: {
    remove() {
      this.$emit("removeFun");
    }
  }
};
</script>


<style scoped lang="scss">
</style>






