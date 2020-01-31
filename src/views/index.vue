

 
<template>


  <div class="content">
  	<commonHeader></commonHeader>
    
    
    <div>
      首页内容
    </div>

  </div>




</template>

<script>
    import commonHeader from '../components/header'
    export default {
        name: "index",
        components: {
            commonHeader
        },


  created() {
    console.log(this.$store.state, "this.$store.state.");

  },

    }
</script>

<style lang="scss" scoped>

</style>







