<template>
  <section>
    <section class="hero">
      <div class="hero-body">
        <div class="container">
          <h1 class="title">
            <b-field grouped position="is-centered">
              <figure class="image is-128x128" style="text-align:center;">
                <img :src="profile.picture">
              </figure>
            </b-field>
          </h1>
          <hr>
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
                    <p class="heading">Threads Started</p>
                    <p class="title">{{profile.threads.length}}</p>
                  </div>
                </div>
                <div class="level-item has-text-centered">
                  <div>
                    <p class="heading">Dabs Posted</p>
                    <p class="title">{{profile.dabs.length}}</p>
                  </div>
                </div>
                <div class="level-item has-text-centered">
                  <div>
                    <p class="heading">Total Upvotes</p>
                    <p v-if="profile.dabs.length" class="title">{{upVoteCounter}}</p>
                  </div>
                </div>
                <div class="level-item has-text-centered">
                  <div>
                    <p class="heading">Total Downvotes</p>
                    <p class="title">{{downVoteCounter}}</p>
                  </div>
                </div>
              </nav>
            </p>
          </div>

        </div>
      </article>
    </div>
    <div class="container">
      <div class="columns is-multiline">
        <div class="column is-half">
          <div class="hero-body">
            <h1 class="title has-text-centered">
              Threads started by {{profile.username}}
            </h1>
          </div>
          <b-pagination :current.sync="currentThreads" :perPage="perPageThreads" :total="threads.length">
          </b-pagination>
          <ProfileThreads v-for="thread in threadSlicer" :thread="thread" :key="thread._id"></ProfileThreads>
        </div>
        <div class="column is-half">
          <div class="hero-body">
            <h1 class="title has-text-centered">
              Dabs posted by {{profile.username}}
            </h1>
          </div>
          <b-pagination :current.sync="current" :per-page="perPage" :total="dabs.length">
          </b-pagination>
          <ProfileDabs v-for="dab in dabSlicer" :dab="dab" :key="dab._id" @deletedab="deleteDab"></ProfileDabs>
        </div>
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
        profile: {
          threads: [],
          dabs: []
        },
        threads: [],
        dabs: [],
        current: 1,
        currentThreads: 1,
        perPage: 4,
        perPageThreads: 5,
        order: '',
        size: '',
        isSimple: false,
        sameUser: false,
        error: null
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
    methods: {
      deleteDab(dabId) {
        const index = this.dabs.map(d => d._id).indexOf(dabId.dabId)
        this.dabs.splice(index, 1)
        api.deleteDab(dabId.dabId).then(() => console.log('delete dab')).catch(err => {
          this.error = err;
        })
      },
      // deleteThread(thread) {
      //   const index = this.threads.map(t => t._id).indexOf(thread.threadId)
      //   this.threads.splice(index, 1)
      //   api.deleteThread(thread.threadId).then(() => console.log('delete thread')).catch(err => {
      //     this.error = err;
      //   })
      // }
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
      },
      dabSlicer() {
        const begin = ((this.current - 1) * this.perPage);
        const end = begin + this.perPage;
        return this.dabs.slice(begin, end)
      },
      threadSlicer() {
        const beginThreads = ((this.currentThreads - 1) * this.perPageThreads);
        const endThreads = beginThreads + this.perPageThreads;
        return this.threads.slice(beginThreads, endThreads)
      },
    },
  }

</script>