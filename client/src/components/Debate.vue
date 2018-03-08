<template>
  <div class="card">
  <div class="card-content">
    <div class="media">
      <div class="media-content">
        <p class="title is-center" style="text-align:center;"><router-link :to="'/thread/' + thread._id">{{thread.title}}</router-link></p>
      </div>
    </div>
    <b-field grouped position="is-centered">
          <b-taglist>
            <b-tag grouped style="text-align:center;" rounded type="is-twitter" v-for="tag in thread.tags" :key="tag">{{tag}}</b-tag>
          </b-taglist>
        </b-field>
    <div class="content" style="text-align:center;">
      <br>
      <time :datetime="thread.timestamp">{{thread.timestamp | moment}}</time>
    </div>
  </div>
</div>
</template>


<script>
import moment from "moment";
export default {
  props: {
    thread: Object
  },
  filters: {
    moment: function(date) {
      return moment(date).format("MMMM Do YYYY, h:mm a");
    }
  }
};
</script>