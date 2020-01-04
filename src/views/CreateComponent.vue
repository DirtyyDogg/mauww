<template>
  <div class="row justify-content-center">
      
  <CreatePost/>
  <ContentCreate/>
</div>

</template>

<script>
import ContentCreate from '@/components/post/ContentCreate.vue'
import CreatePost from '@/components/post/CreatePost.vue'

export default {
  name: 'createpost',
  components: {
    ContentCreate, CreatePost
  },
  addPost(){
    
    let uri = 'http://localhost:4000/posts/add';
    this.axios.post(uri, this.post).then(() => {
      this.$router.push({name: 'posts'});
    });
  }
}
</script>

<style>

</style>