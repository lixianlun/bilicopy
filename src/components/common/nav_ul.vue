<template>
  <ul>
    <navli v-for="i in classify" :item="i"></navli>
  </ul>
</template>

<script>
  import navli from "./nav_li.vue"
  export default {
    components: {
      navli
    },
    data() {
      return {
        classify: [{
            title: "主页",
            home: true
          },
          {
            title: "动画",
            num: 456
          }
        ]
      }
    }
  }
</script>

<style>
</style>
