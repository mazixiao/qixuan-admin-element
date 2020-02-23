<template>
  <div>
    下面是从父组件传过来的内容作为插槽写入：
    <h2>
      <slot name="title">啦啦啦啦(这叫后备内容，当父集不提供任何插槽内容时会显示)</slot>
    </h2>
    <p>
      <slot name="con"></slot>
    </p>
    <!-- 作用域插槽 -->
    <p style="background: red">
      <slot name="con2" :userName="userName">{{ userName.name2 }}</slot>
    </p>
  </div>
</template>


<script>
import { mapState, mapGetters, mapMutations, mapActions } from "vuex";

export default {
  name: "slot-test",
  components: {},
  props: {
    valueCon: String
  },
  data() {
    return {
      userName: {
        name1: "迪迪11",
        name2: "乐乐22"
      }
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
    remove() {
      this.$emit("removeFun");
    },
    didi($event) {
      this.$emit("inputPerent", $event.target.value);
    }
  }
};
</script>


<style scoped lang="scss">
</style>






