<template>
  <div class="post-list">
    <div v-for="post in posts" :key="post.id">
      <SinglePost :post="post" />
    </div>
  </div>
</template>

<script>
  import { onMounted, onUnmounted, onUpdated } from 'vue';
  import SinglePost from './SinglePost.vue'

  export default {
    props: ['posts'],
    components: { SinglePost },

    setup(props) {
      // console.log(props)
      // console.log(props.posts)

      // when using lifecycle hooks in setup function add "on" at the beginnig of their names
      // onMounted(() => {
      //   console.log("component mounted")
      // })
      // onUnmounted(() => {
      //   console.log("component unmounted")
      // })
      // onUpdated(() => {
      //   console.log("component updated")
      // })
    },

    // mounted() {
    //   console.log("mounted using options API")
    // }
  }

</script>

<style>

</style>