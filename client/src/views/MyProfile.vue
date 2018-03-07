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
              <strong>{{secret.username}}</strong>
              <small>{{secret.name}}</small>
              <nav class="level">
                <div class="level-item has-text-centered">
                  <div>
                    <p class="heading">Threads</p>
                    <p class="title">{{secret.threads}}</p>
                  </div>
                </div>
                <div class="level-item has-text-centered">
                  <div>
                    <p class="heading">Dabs</p>
                    <p class="title">{{secret.dabs}}</p>
                  </div>
                </div>
                <div class="level-item has-text-centered">
                  <div>
                    <p class="heading">Upvotes</p>
                    <p class="title">{{secret.votes}}</p>
                  </div>
                </div>
                <div class="level-item has-text-centered">
                  <div>
                    <p class="heading">Likes</p>
                    <p class="title">789</p>
                  </div>
                </div>
              </nav>
            </p>
          </div>

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
      console.log(secret);
    });
  }
};
</script>