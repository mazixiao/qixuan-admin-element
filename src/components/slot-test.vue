<template>
  <div>
    下面是从父组件传过来的内容作为插槽写入：
    <h2>
      <slot name="title"></slot>
    </h2>
    <p>
      <slot name="con"></slot>
    </p>

    <p>
      <slot name="con2" :user="user">
          {{ user.bb }}
      </slot>
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
      user: {
        aa: "迪迪",
        bb: "乐乐"
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






