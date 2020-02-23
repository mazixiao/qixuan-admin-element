<template>
  <div>
    <h3>组件3(keep-alive)</h3>
  </div>
</template>


<script>
import { mapState, mapGetters, mapMutations, mapActions } from "vuex";

export default {
  name: "keepAlive3",
  components: {},
  props: {
    valueCon: String
  },
  data() {
    return {

    };
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

  }
};
</script>


<style scoped lang="scss">
</style>






