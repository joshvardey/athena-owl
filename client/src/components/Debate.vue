<template>
  <div class="card is-flex">
  <div class="card-content">
    <div class="media">
      <div class="media-content">
        <p class="title is-center"><router-link :to="'/thread/' + thread._id">{{thread.title}}</router-link></p>
      </div>
    </div>
    <div class="content">
   
      <br>
      <time :datetime="thread.timestamp">{{thread.timestamp}}</time>
    </div>
  </div>
</div>
</template>


<script>
import DebateModal from "./DebateModal.vue";
export default {
  props: {
    thread: Object
  }
};
</script>