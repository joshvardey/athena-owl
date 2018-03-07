<template>
  <section>
    <section class="hero">
      <div class="hero-body">
        <div class="container">
          <h1 class="title">
            <b-field grouped position="is-centered">
              <figure class="image is-128x128" style="text-align:center;">
                <img :src="$root.user.picture">
              </figure>
            </b-field>
          </h1>
          <h2 class="subtitle" style="text-align:center;">
            <strong>{{profile.username}}</strong>
          </h2>
        </div>
      </div>
    </section>

    <div class="box">
      <article class="media">
        <div class="media-left">

        </div>
        <div class="media-content">
          <div class="content">
            <p>
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
    <div class="columns">
      <div class="container">
        <div class="column">
          <div class="hero-body">
            <div class="container">
              <h1 class="title">
                Threads started by {{profile.username}}
              </h1>
            </div>
          </div>
          <ProfileThreads v-for="thread in threads" :thread="thread" :key="thread._id"></ProfileThreads>
        </div>
      </div>
      <div class="column">
        <div class="hero-body">
          <div class="container">
            <h1 class="title">
              dabs posted by {{profile.username}}
            </h1>
          </div>
        </div>
        <ProfileDabs v-for="dab in dabs" :dab="dab" :key="dab._id"></ProfileDabs>
      </div>
    </div>

    <!-- <p class="content">
      <pre>{{ profile }}</pre>
    </p> -->
  </section>

</template>

<script>
  import ProfileDabs from "../components/ProfileDabs";
  import ProfileThreads from "../components/ProfileThreads";
  import api from "../api";

  export default {
    data() {
      return {
        profile: {},
        threads: {},
        dabs: {}
      };
    },
    components: {
      ProfileThreads, ProfileDabs
    },
    created() {
      api.userProfile(this.$route.params.id).then(profile => {
        this.profile = profile;
        this.threads = profile.threads;
        this.dabs = profile.dabs
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

<style>
  .column {
    width: 50%
  }
</style>