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
              <strong>{{profile.username}}</strong>
              <small>{{profile.name}}</small>
              <nav class="level">
                <div class="level-item has-text-centered">
                  <div>
                    <p class="heading">Threads</p>
                    <p class="title">{{profile.threads.length}}</p>
                  </div>
                </div>
                <div class="level-item has-text-centered">
                  <div>
                    <p class="heading">Dabs</p>
                    <p class="title">{{profile.dabs.length}}</p>
                  </div>
                </div>
                <div class="level-item has-text-centered">
                  <div>
                    <p class="heading">Upvotes</p>
                    <p class="title">{{upVoteCounter}}</p>
                  </div>
                </div>
                <div class="level-item has-text-centered">
                  <div>
                    <p class="heading">Downvotes</p>
                    <p class="title">{{downVoteCounter}}</p>
                  </div>
                </div>
              </nav>
            </p>
          </div>

        </div>
      </article>
    </div>

    <p class="content">
      <pre>{{ profile }}</pre>
    </p>
  </section>

</template>

<script>
  import api from "../api";
  export default {
    data() {
      return {
        profile: {},
      };
    },
    created() {
      api.userProfile(this.$route.params.id).then(profile => {
        this.profile = profile;
        console.log(profile)
      }).catch(err => {
        this.error = err;
      })
    },
    computed: {
      upVoteCounter() {
        return this.profile.dabs.reduce((acc, dab) =>
          (acc + dab.votes.filter(vote => vote.opinion).length)
          , 0)
      },
      downVoteCounter() {
        return this.profile.dabs.reduce((acc, dab) =>
          (acc + dab.votes.filter(vote => !vote.opinion).length)
          , 0)
      }
    }
  }
</script>