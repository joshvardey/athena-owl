<template>
  <div class="container">
    <section class="hero">
      <div class="hero-body">
        <h1 class="title" style="text-align:center;">
          {{thread.title}}
        </h1>
        <br>
        <h2 class="subtitle" style="text-align:center;">
          {{thread.description}}
        </h2>
        <b-field grouped position="is-centered">
          <b-taglist>
            <b-tag grouped style="text-align:center;" rounded type="is-twitter" v-for="tag in thread.tags" :key="tag">{{tag}}</b-tag>
          </b-taglist>
        </b-field>
      </div>
    </section>
    <h1 class="title"></h1>
    <DabInput @dab-is-created="dabInput"></DabInput>
    <br>
    <Timeline v-if="thread">
      <Dab v-for="dab in reversedDabs" :dab="dab" :key="dab._id" @voted="voteAction" @profile="goToProfile" />
    </Timeline>
  </div>
</template>

<script>
  import Timeline from "../components/Timeline";
  import Dab from "../components/Dab";
  import DabInput from "../components/DabInput";
  import api from "../api";
  export default {
    data() {
      return {
        thread: {},
        dabErr: null,
        voteErr: null
      };
    },
    created() {
      api.getOneThread(this.$route.params.id).then(thread => {
        this.thread = thread;
      });
    },
    components: { Timeline, DabInput, Dab },
    computed: {
      reversedDabs() {
        if (!this.thread.dabs) {
          return;
        }
        return this.thread.dabs.reverse();
      }
    },
    methods: {
      dabInput(dab) {
        this.dabErr = null;
        api
          .postDab(this.thread._id, dab)
          .then(dab => this.thread.dabs.unshift(dab))
          .catch(err => {
            this.dabErr = err;
          });
      },
      voteAction(vote) {
        this.voteErr = null;
        api.postVote(vote).catch(err => {
          this.voteErr = err;
          console.log(err);
        });
      },
      goToProfile(userPic) {
        api.userProfile(userPic).catch(err => {
          this.error = err;
        });
      }
    }
  };
</script>
<style>
  .hero-body {
    padding: 0 1.5rem 3rem;
  }

  .divs {
    text-align: center;
  }
</style>