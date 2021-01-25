<template>
  <div>
    <l-n-b></l-n-b>
    <my-header></my-header>
  </div>
</template>

<script>
import LNB from "./components/LNB"
import MyHeader from "./components/MyHeader"
export default {
  components: {
    LNB,
    MyHeader
  }
}
</script>

<style lang="scss">
  @import "./scss/main";

  .container {
    display: flex;
    .item {
      width: 100px;
      height: 100px;
      background-color: red;
    }
  }

</style>