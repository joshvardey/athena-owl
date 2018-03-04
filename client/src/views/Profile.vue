<template>
<section>

<div class="box">
  <article class="media">
    <div class="media-left">
      <figure class="image is-64x64">
        <img :src="$root.user.picture">
      </figure>
    </div>
    <div class="media-content">
      <div class="content">
        <p>
          <strong>{{secret.username}}</strong> <small>{{secret.name}}</small> 
          <br>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean efficitur sit amet massa fringilla egestas. Nullam condimentum luctus turpis.
        </p>
      </div>
      <nav class="level is-mobile">
        <div class="level-left">
          <a class="level-item">
            <span class="icon is-small"><i class="fas fa-reply"></i></span>
          </a>
          <a class="level-item">
            <span class="icon is-small"><i class="fas fa-retweet"></i></span>
          </a>
          <a class="level-item">
            <span class="icon is-small"><i class="fas fa-heart"></i></span>
          </a>
        </div>
      </nav>
    </div>
  </article>
</div>

<p class="content">
    <pre>{{ secret }}</pre>
  </p>
</section>
  
</template>

<script>
import api from "../api";
export default {
  data() {
    return {
      secret: null
    };
  },
  created() {
    api.getSecret().then(secret => {
      this.secret = secret;
    });
  }
};
</script>