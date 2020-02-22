
<template>
<div>
      子组件输入的内容：<input :value="valueCon" @input="didi($event)" />
</div>

</template>


<script>
import { mapState, mapGetters, mapMutations, mapActions } from "vuex";

export default {
  name: "custom-input",
  components: {},
  props: {
    valueCon: String,
    
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
    },
    didi($event) {
        this.$emit('inputPerent', $event.target.value)
    }
  }
};
</script>


<style scoped lang="scss">
</style>






